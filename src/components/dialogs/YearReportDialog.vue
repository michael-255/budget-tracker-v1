<script setup lang="ts">
import { onMounted } from 'vue'
import { useDialogPluginComponent } from 'quasar'
import { Icon } from '@/types/general'
import type { ExpenseCategory } from '@/models/Expense'

const props = defineProps<{
  year: number
  category: ExpenseCategory | 'All Categories'
}>()

defineEmits([...useDialogPluginComponent.emits])

const { dialogRef, onDialogHide, onDialogOK } = useDialogPluginComponent()

onMounted(async () => {
  // TODO
  console.log('--- Year Report Dialog ---')
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
      <QToolbarTitle>{{ year }} {{ category }} Report</QToolbarTitle>
      <QBtn flat round :icon="Icon.CLOSE" @click="onDialogOK" />
    </QToolbar>

    <QCard class="q-dialog-plugin">
      <QCardSection>
        <!-- CHARTS -->
      </QCardSection>
    </QCard>
  </QDialog>
</template>
