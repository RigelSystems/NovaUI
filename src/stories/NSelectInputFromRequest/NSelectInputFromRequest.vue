<script lang="ts">
import { defineComponent, ref, onMounted, watch } from 'vue'

export default defineComponent({
  name: 'NSelectInputFromRequest',
  props: {
    url: { type: String, required: true },
    valueKey: { type: String, required: true },
    name: { type: String, required: true },
    label: { type: String, default: '' },
    multiple: { type: Boolean, default: false },
    /* String for single-select, Array for multi-select */
    modelValue: { type: [String, Array], default: '' },
    accessToken: { type: String, required: true },
    method: { type: String, default: 'GET' },
    headers: { type: Object, default: () => ({}) },
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    const items = ref<{ id: string; name: string }[]>([])
    const selected = ref(props.modelValue)          // internal v-model
    const loading  = ref(true)
    const errorMsg = ref<string | null>(null)

    /* ---------------------------------- fetch ---------------------------------- */
    const MAX_RETRIES = 3
    let retries = 0

    const fetchItems = async () => {
      loading.value = true
      errorMsg.value = null
      try {
        const response = await fetch(props.url, {
          method: props.method,
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${props.accessToken}`,
            ...props.headers,
          },
        })

        if (!response.ok) {
          if (response.status === 500 && retries < MAX_RETRIES) {
            retries++; setTimeout(fetchItems, 500); return
          }
          throw new Error(`HTTP error ${response.status}`)
        }

        const data = await response.json()
        console.log('Fetched data:', data)
        items.value = data.map((it: any) => ({
          id: it[props.valueKey],
          name: it.name,
        }))
        console.log('Fetched items:', items.value)
      } catch (e: any) {
        errorMsg.value = e instanceof Error ? e.message : String(e)
      } finally {
        loading.value = false
      }
    }

    onMounted(fetchItems)

    /* --------------------------- keep v-model in sync --------------------------- */
    /* external → internal */
    watch(
      () => props.modelValue,
      (val) => { selected.value = val }
    )
    /* internal → external */
    watch(selected, (val) => emit('update:modelValue', val))

    return { items, selected, loading, errorMsg, props }
  },
})
</script>

<template>
  <div class="n-select-from-request n-input-wrapper">
    <label v-if="props.label" :for="props.name" class="n-input__label">
      {{ props.label }}
    </label>

    <select
      class="n-input__input"
      :name="props.name"
      :id="props.name"
      :multiple="props.multiple"
      v-model="selected"        
      :disabled="loading"
    >
      <option v-if="!props.multiple && !selected" value="">Please select…</option>
      <option
        v-for="item in items"
        :key="item.id"
        :value="item.id"
      >
        {{ item.name }}
      </option>
    </select>

    <p v-if="loading">Loading…</p>
    <p v-if="errorMsg" class="error">{{ errorMsg }}</p>
  </div>
</template>

<style scoped>
.n-select-from-request { display: flex; flex-direction: column; gap: .5rem; }
select { padding: .5rem; font-size: 1rem; }
.error { color: red; font-size: .875rem; }
</style>
