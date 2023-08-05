<script setup lang="ts">
import { Icon } from '@/types/general'
import { onMounted, onUnmounted, ref } from 'vue'
import { extend, uid, useMeta } from 'quasar'
import { AppName } from '@/constants/global'
import { Expense } from '@/models/Expense'
import ResponsivePage from '@/components/ResponsivePage.vue'
import useActionStore from '@/stores/action'
import useLogger from '@/composables/useLogger'
import useDialogs from '@/composables/useDialogs'
import useRouting from '@/composables/useRouting'
import DB from '@/services/Database'

useMeta({ title: `${AppName} - Create Expense` })

const { goBack } = useRouting()
const { log } = useLogger()
const { confirmDialog } = useDialogs()
const actionStore = useActionStore()

const fieldComponents = Expense.getFieldComponents()
const isFormValid = ref(true)

onMounted(async () => {
  try {
    actionStore.record = Expense.getDefaultRecord()
  } catch (error) {
    log.error('Error loading create view', error)
  }
})

onUnmounted(() => {
  actionStore.$reset()
})

async function onSubmit() {
  confirmDialog('Create', `Create this Expense record?`, Icon.CREATE, 'positive', async () => {
    try {
      // Setup other fields before saving
      actionStore.record.id = uid()

      await DB.addExpense(extend(true, {}, actionStore.record))

      log.info('Record created', { id: actionStore.record.id })

      goBack()
    } catch (error) {
      log.error('Create failed', error)
    }
  })
}
</script>

<template>
  <ResponsivePage :bannerIcon="Icon.CREATE" bannerTitle="Create Expense">
    <QForm
      @submit="onSubmit"
      @validation-error="isFormValid = false"
      @validation-success="isFormValid = true"
    >
      <div v-for="(field, i) in fieldComponents" :key="i" class="q-mb-md">
        <component :is="field" />
      </div>

      <div class="row justify-center q-my-sm">
        <QBtn label="Create" type="submit" color="positive" :icon="Icon.SAVE" />
      </div>

      <div v-show="!isFormValid" class="row justify-center">
        <QIcon :name="Icon.WARN" color="warning" />
        <span class="text-caption q-ml-xs text-warning">
          Correct invalid entries and try again
        </span>
      </div>
    </QForm>
  </ResponsivePage>
</template>
