<script setup lang="ts">
import { amountSchema } from '@/models/Expense'
import useActionStore from '@/stores/action'

const actionStore = useActionStore()
</script>

<template>
  <div class="text-weight-bold text-body1">Amount</div>

  <QInput
    v-model.number="actionStore.record.amount"
    :rules="[(val: number) => amountSchema.safeParse(val).success || 'Must be a valid number']"
    type="number"
    step="0.01"
    lazy-rules
    dense
    outlined
    color="primary"
  />
</template>
