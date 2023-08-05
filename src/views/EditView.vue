<script setup lang="ts">
import { Icon } from '@/types/general'
import { onMounted, onUnmounted, ref } from 'vue'
import { extend, useMeta } from 'quasar'
import { AppName } from '@/constants/global'
import { Expense } from '@/models/Expense'
import ResponsivePage from '@/components/ResponsivePage.vue'
import useActionStore from '@/stores/action'
import useLogger from '@/composables/useLogger'
import useDialogs from '@/composables/useDialogs'
import useRouting from '@/composables/useRouting'
import DB from '@/services/Database'

useMeta({ title: `${AppName} - Edit Record` })

const { routeId, goBack } = useRouting()
const { log } = useLogger()
const { confirmDialog } = useDialogs()
const actionStore = useActionStore()

const fieldComponents = Expense.getFieldComponents()
const isFormValid = ref(true)

onMounted(async () => {
  try {
    const editRecord = await DB.getExpense(routeId as string)

    if (editRecord) {
      extend(true, actionStore.record, editRecord) // Copy record values to action store
    } else {
      throw new Error('Record not found')
    }
  } catch (error) {
    log.error('Error loading edit view', error)
  }
})

onUnmounted(() => {
  actionStore.$reset()
})

async function onSubmit() {
  confirmDialog('Update', `Update this Expense record?`, Icon.EDIT, 'positive', async () => {
    try {
      await DB.putExpense(extend(true, {}, actionStore.record))

      log.info('Record updated', { id: actionStore.record.id })

      goBack()
    } catch (error) {
      log.error('Update failed', error)
    }
  })
}
</script>

<template>
  <ResponsivePage :bannerIcon="Icon.EDIT" bannerTitle="Edit Expense">
    <QForm
      @submit="onSubmit"
      @validation-error="isFormValid = false"
      @validation-success="isFormValid = true"
    >
      <div v-for="(field, i) in fieldComponents" :key="i" class="q-mb-md">
        <component :is="field" />
      </div>

      <div class="row justify-center q-my-sm">
        <QBtn label="Update" type="submit" color="positive" :icon="Icon.SAVE" />
      </div>

      <div class="row justify-center">
        <div v-show="!isFormValid">
          <QIcon :name="Icon.WARN" color="warning" />
          <span class="text-caption q-ml-xs text-warning">
            Correct invalid entries and try again
          </span>
        </div>
      </div>
    </QForm>
  </ResponsivePage>
</template>
