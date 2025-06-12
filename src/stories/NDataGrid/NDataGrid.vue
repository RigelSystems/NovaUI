<template>
  <div class="n-data-grid">
    <div v-if="search" class="n-data-grid__search">
      <input
        type="text"
        v-model="searchQuery"
        placeholder="Search..."
        @input="handleSearch"
        class="n-data-grid__search-input"
      />
    </div>
    <div v-if="loading" class="n-data-grid__loading">Loading...</div>
    <div v-if="errorMessage" class="n-data-grid__loading">{{ errorMessage }}</div>
    <table v-else class="n-data-grid__table">
      <thead>
        <tr>
          <th 
            v-for="header in headers" 
            :key="header"
            @click="sortable ? handleSort(header) : null"
            :class="{ 'sortable': sortable }"
          >
            {{ header }}
            <span v-if="sortable" class="sort-icon">
              {{ getSortIcon(header) }}
            </span>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, rowIndex) in data" :key="rowIndex">
          <td v-for="header in headers" :key="header" v-html="row[header]"></td>
        </tr>
      </tbody>
    </table>
    <div v-if="totalPages > 1" class="n-data-grid__pagination">
      <div class="n-data-grid__pagination-controls">
        <button 
          :disabled="currentPage === 1"
          @click="changePage(1)"
          class="n-data-grid__pagination-button"
        >
          First
        </button>
        <button 
          :disabled="currentPage === 1"
          @click="changePage(currentPage - 1)"
          class="n-data-grid__pagination-button"
        >
          Previous
        </button>
        
        <div class="n-data-grid__page-numbers">
          <template v-for="page in displayedPages" :key="page">
            <button
              v-if="page !== '...'"
              @click="changePage(page)"
              :class="[
                'n-data-grid__page-number',
                { 'active': page === currentPage }
              ]"
            >
              {{ page }}
            </button>
            <span v-else class="n-data-grid__page-ellipsis">...</span>
          </template>
        </div>

        <button 
          :disabled="currentPage === totalPages"
          @click="changePage(currentPage + 1)"
          class="n-data-grid__pagination-button"
        >
          Next
        </button>
        <button 
          :disabled="currentPage === totalPages"
          @click="changePage(totalPages)"
          class="n-data-grid__pagination-button"
        >
          Last
        </button>
      </div>

      <div class="n-data-grid__pagination-info">
        <span>Showing {{ startItem }} to {{ endItem }} of {{ totalItems }} entries</span>
        <select 
          v-model="pageSize" 
          @change="handlePageSizeChange"
          class="n-data-grid__page-size-select"
        >
          <option v-for="size in pageSizeOptions" :key="size" :value="size">
            {{ size }} per page
          </option>
        </select>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, PropType, computed, watch } from 'vue';

export default defineComponent({
  name: 'NDataGrid',
  props: {
    url: {
      type: String,
      required: true,
    },
    method: {
      type: String as PropType<'GET' | 'POST'>,
      default: 'GET',
    },
    params: {
      type: Object as PropType<Record<string, any>>,
      default: () => ({}),
    },
    accessToken: {
      type: String,
      default: '',
    },
    search: {
      type: Boolean,
      default: false,
    },
    sortable: {
      type: Boolean,
      default: false,
    },
    pageSize: {
      type: Number,
      default: 10,
    },
    searchableFields: {
      type: Array as PropType<string[]>,
      default: () => [],
    },
    sortableFields: {
      type: Array as PropType<string[]>,
      default: () => [],
    },
  },
  setup(props) {
    const loading = ref(true);
    const headers = ref<string[]>([]);
    const data = ref<Record<string, any>[]>([]);
    const errorMessage = ref<string | null>(null);
    const searchQuery = ref('');
    const currentPage = ref(1);
    const totalPages = ref(1);
    const totalItems = ref(0);
    const pageSize = ref(props.pageSize);
    const sortField = ref<string | null>(null);
    const sortDirection = ref<'asc' | 'desc'>('asc');
    const debounceTimeout = ref<number | null>(null);

    const pageSizeOptions = [10, 25, 50, 100];

    const displayedPages = computed(() => {
      const pages = [];
      const maxVisiblePages = 5;
      
      if (totalPages.value <= maxVisiblePages) {
        for (let i = 1; i <= totalPages.value; i++) {
          pages.push(i);
        }
      } else {
        if (currentPage.value <= 3) {
          for (let i = 1; i <= 4; i++) {
            pages.push(i);
          }
          pages.push('...');
          pages.push(totalPages.value);
        } else if (currentPage.value >= totalPages.value - 2) {
          pages.push(1);
          pages.push('...');
          for (let i = totalPages.value - 3; i <= totalPages.value; i++) {
            pages.push(i);
          }
        } else {
          pages.push(1);
          pages.push('...');
          for (let i = currentPage.value - 1; i <= currentPage.value + 1; i++) {
            pages.push(i);
          }
          pages.push('...');
          pages.push(totalPages.value);
        }
      }
      
      return pages;
    });

    const startItem = computed(() => {
      return ((currentPage.value - 1) * pageSize.value) + 1;
    });

    const endItem = computed(() => {
      return Math.min(currentPage.value * pageSize.value, totalItems.value);
    });

    const buildQueryParams = () => {
      const queryParams: Record<string, any> = {
        ...props.params,
        page: {
          number: currentPage.value,
          size: pageSize.value,
        },
      };

      if (props.search && searchQuery.value && props.searchableFields.length > 0) {
        const searchConditions = props.searchableFields.reduce((acc, field) => {
          acc[`${field}_cont`] = searchQuery.value;
          return acc;
        }, {} as Record<string, string>);

        queryParams.q = {
          m: 'or',
          ...searchConditions
        };
      }

      if (props.sortable && sortField.value) {
        queryParams.sort = sortDirection.value === 'desc' ? 
          `${sortField.value} desc` : 
          sortField.value;
      }

      return queryParams;
    };

    const fetchData = async () => {
      try {
        loading.value = true;
        const queryParams = buildQueryParams();
        const url = new URL(props.url);
        
        // Add query parameters for GET requests
        if (props.method === 'GET') {
          Object.entries(queryParams).forEach(([key, value]) => {
            if (typeof value === 'object') {
              Object.entries(value).forEach(([subKey, subValue]) => {
                url.searchParams.append(`${key}[${subKey}]`, String(subValue));
              });
            } else {
              url.searchParams.append(key, String(value));
            }
          });
        }

        const response = await fetch(url.toString(), {
          method: props.method,
          headers: {
            'Content-Type': 'application/json',
            ...(props.accessToken ? { 'Authorization': `Bearer ${props.accessToken}` } : {}),
          },
          ...(props.method === 'POST' ? { body: JSON.stringify(queryParams) } : {}),
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const responseData = await response.json();
        headers.value = responseData.headers;
        data.value = responseData.data;
        totalItems.value = responseData.meta.total;
        totalPages.value = responseData.meta.total_pages;
      } catch (error) {
        errorMessage.value = 'Failed to fetch data';
        console.error(error);
      } finally {
        loading.value = false;
      }
    };

    const handleSearch = () => {
      if (debounceTimeout.value) {
        clearTimeout(debounceTimeout.value);
      }
      debounceTimeout.value = window.setTimeout(() => {
        currentPage.value = 1;
        fetchData();
      }, 300);
    };

    const handleSort = (header: string) => {
      if (!props.sortableFields.includes(header)) return;
      
      if (sortField.value === header) {
        sortDirection.value = sortDirection.value === 'asc' ? 'desc' : 'asc';
      } else {
        sortField.value = header;
        sortDirection.value = 'asc';
      }
      fetchData();
    };

    const getSortIcon = (header: string) => {
      if (!props.sortableFields.includes(header)) return '';
      if (sortField.value !== header) return '↕';
      return sortDirection.value === 'asc' ? '↑' : '↓';
    };

    const changePage = (page: number) => {
      currentPage.value = page;
      fetchData();
    };

    const handlePageSizeChange = () => {
      currentPage.value = 1;
      fetchData();
    };

    watch(() => props.params, () => {
      currentPage.value = 1;
      fetchData();
    }, { deep: true });

    onMounted(() => {
      fetchData();
    });

    return {
      errorMessage,
      loading,
      headers,
      data,
      searchQuery,
      currentPage,
      totalPages,
      totalItems,
      pageSize,
      pageSizeOptions,
      displayedPages,
      startItem,
      endItem,
      handleSearch,
      handleSort,
      getSortIcon,
      changePage,
      handlePageSizeChange,
      fetchData,
    };
  },
});
</script>

<style scoped>
.n-data-grid {
  width: 100%;
  overflow-x: auto;
}

.n-data-grid__search {
  margin-bottom: 1rem;
}

.n-data-grid__search-input {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #e5e7eb;
  border-radius: 0.375rem;
  font-size: 0.875rem;
}

.n-data-grid__loading {
  padding: 1rem;
  text-align: center;
  font-size: 1.25rem;
  color: #6b7280;
}

.n-data-grid__table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 1rem;
}

.n-data-grid__table th,
.n-data-grid__table td {
  padding: 0.75rem;
  border: 1px solid #e5e7eb;
  text-align: left;
  font-size: 0.875rem;
}

.n-data-grid__table th {
  background-color: #f9fafb;
  font-weight: 600;
  color: #374151;
}

.n-data-grid__table th.sortable {
  cursor: pointer;
  user-select: none;
}

.n-data-grid__table th.sortable:hover {
  background-color: #f3f4f6;
}

.sort-icon {
  margin-left: 0.5rem;
  color: #6b7280;
}

.n-data-grid__table td {
  color: #4b5563;
}

.n-data-grid__pagination {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1rem;
  padding: 1rem;
  border-top: 1px solid #e5e7eb;
}

.n-data-grid__pagination-controls {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
}

.n-data-grid__pagination-button {
  padding: 0.5rem 1rem;
  border: 1px solid #e5e7eb;
  border-radius: 0.375rem;
  background-color: white;
  color: #374151;
  cursor: pointer;
  font-size: 0.875rem;
}

.n-data-grid__pagination-button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.n-data-grid__pagination-button:hover:not(:disabled) {
  background-color: #f9fafb;
}

.n-data-grid__page-numbers {
  display: flex;
  align-items: center;
  gap: 0.25rem;
}

.n-data-grid__page-number {
  padding: 0.5rem 0.75rem;
  border: 1px solid #e5e7eb;
  border-radius: 0.375rem;
  background-color: white;
  color: #374151;
  cursor: pointer;
  font-size: 0.875rem;
}

.n-data-grid__page-number.active {
  background-color: #2563eb;
  color: white;
  border-color: #2563eb;
}

.n-data-grid__page-number:hover:not(.active) {
  background-color: #f9fafb;
}

.n-data-grid__page-ellipsis {
  color: #6b7280;
  padding: 0 0.5rem;
}

.n-data-grid__pagination-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #6b7280;
  font-size: 0.875rem;
}

.n-data-grid__page-size-select {
  padding: 0.5rem;
  border: 1px solid #e5e7eb;
  border-radius: 0.375rem;
  background-color: white;
  color: #374151;
  font-size: 0.875rem;
  cursor: pointer;
}

.n-data-grid__page-size-select:hover {
  border-color: #d1d5db;
}
</style>
