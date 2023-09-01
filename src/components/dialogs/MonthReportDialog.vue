<script setup lang="ts">
import { onMounted } from 'vue'
import { useDialogPluginComponent } from 'quasar'
import { Icon } from '@/types/general'
import type { ExpenseCategory } from '@/models/Expense'

const props = defineProps<{
  month: number
  year: number
  category: ExpenseCategory | 'All Categories'
}>()

const monthName = new Date(0, props.month).toLocaleString('default', {
  month: 'long',
})

defineEmits([...useDialogPluginComponent.emits])

const { dialogRef, onDialogHide, onDialogOK } = useDialogPluginComponent()

onMounted(async () => {
  // TODO
  console.log('--- Month Report Dialog ---')
  console.log('MONTH:', props.month)
  console.log('YEAR:', props.year)
  console.log('CATEGORY:', props.category)
})
</script>

<template>
  <QDialog
    ref="dialogRef"
    transition-show="slide-up"
    transition-hide="slide-down"
    maximized
    @hide="onDialogHide"
  >
    <QToolbar class="bg-info text-white" style="max-height: 50px">
      <QIcon :name="Icon.CHARTS" size="sm" class="q-mx-sm" />
      <QToolbarTitle>Charts</QToolbarTitle>
      <QBtn flat round :icon="Icon.CLOSE" @click="onDialogOK" />
    </QToolbar>

    <QCard class="q-dialog-plugin">
      <QCardSection>
        <p class="text-h5">{{ monthName }} {{ year }} - {{ category }}</p>

        <!-- CHARTS -->
      </QCardSection>
    </QCard>
  </QDialog>
</template>
