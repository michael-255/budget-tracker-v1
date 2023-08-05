<script setup lang="ts">
import { onMounted, ref, type Ref } from 'vue'
import { categorySchema, ExpenseCategory } from '@/models/Expense'
import useLogger from '@/composables/useLogger'
import useActionStore from '@/stores/action'

const { log } = useLogger()
const actionStore = useActionStore()

const options: Ref<{ value: ExpenseCategory; label: ExpenseCategory }[]> = ref([])

onMounted(async () => {
  try {
    actionStore.record.category = actionStore.record.category ?? undefined

    options.value = Object.values(ExpenseCategory).map((opt: ExpenseCategory) => ({
      value: opt,
      label: opt,
    }))
  } catch (error) {
    log.error('Error with expense category input field', error)
  }
})
</script>

<template>
  <div class="text-weight-bold text-body1">Category</div>

  <QSelect
    v-model="actionStore.record.category"
    :rules="[(val: ExpenseCategory) => categorySchema.safeParse(val).success || 'Required']"
    :options="options"
    lazy-rules
    emit-value
    map-options
    options-dense
    dense
    outlined
    color="primary"
  />
</template>
