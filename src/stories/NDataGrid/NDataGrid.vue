<template>
  <div class="n-data-grid">
    <div v-if="loading" class="n-data-grid__loading">Loading...</div>
    <div v-if="errorMessage" class="n-data-grid__loading">{{ errorMessage }}</div>
    <table v-else class="n-data-grid__table">
      <thead>
        <tr>
          <th v-for="header in headers" :key="header">{{ header }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, rowIndex) in data" :key="rowIndex">
          <td v-for="header in headers" :key="header" v-html="row[header]"></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, PropType } from 'vue';
import axios, { Method } from 'axios';

export default defineComponent({
  name: 'NDataGrid',
  props: {
    url: {
      type: String,
      required: true,
    },
    method: {
      type: String as PropType<Method>,
      default: 'get',
    },
    params: {
      type: Object as PropType<Record<string, any>>,
      default: () => ({}),
    },
    accessToken: {
      type: String,
      default: '',
    },
  },
  setup(props) {
    const loading = ref(true);
    const headers = ref<string[]>([]);
    const data = ref<Record<string, any>[]>([]);
    const errorMessage = ref<string | null>(null);

    const fetchData = async () => {
      try {
        const response = await axios.request({
          url: props.url,
          method: props.method,
          data: props.method.toLowerCase() === 'post' ? props.params : undefined,
          params: props.method.toLowerCase() === 'get' ? props.params : undefined,
          headers: props.accessToken
            ? { Authorization: `Bearer ${props.accessToken}` }
            : undefined,
        });

        headers.value = response.data.headers;
        data.value = response.data.data;
      } catch (error) {
        errorMessage.value = 'Failed to fetch data';
        console.error(error);
      } finally {
        loading.value = false;
      }
    };

    onMounted(() => {
      fetchData();
    });

    return {
      errorMessage,
      loading,
      headers,
      data,
    };
  },
});
</script>

<style scoped>
.n-data-grid {
  width: 100%;
  overflow-x: auto;
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

.n-data-grid__table td {
  color: #4b5563;
}
</style>
