import { useQuasar } from 'quasar'
import { Icon } from '@/types/general'
import type { AnyDBRecord, DBTable, InternalTable } from '@/types/database'
import type { ExpenseCategory } from '@/models/Expense'
import ConfirmationDialog from '@/components/dialogs/ConfirmationDialog.vue'
import DismissalDialog from '@/components/dialogs/DismissalDialog.vue'
import InspectionDialog from '@/components/dialogs/InspectionDialog.vue'
import YearReportDialog from '@/components/dialogs/YearReportDialog.vue'
import MonthReportDialog from '@/components/dialogs/MonthReportDialog.vue'

export default function useDialogs() {
  const $q = useQuasar()

  function confirmDialog(
    title: string,
    message: string,
    icon: Icon,
    color: string,
    onOkFunc: () => void
  ) {
    $q.dialog({
      component: ConfirmationDialog,
      componentProps: {
        title,
        message,
        icon,
        color,
      },
    }).onOk(() => {
      onOkFunc()
    })
  }

  function dismissDialog(
    title: string,
    message: string,
    icon: Icon = Icon.INFO,
    color: string = 'info'
  ) {
    $q.dialog({
      component: DismissalDialog,
      componentProps: {
        title,
        message,
        icon,
        color,
      },
    })
  }

  function inspectDialog(record: AnyDBRecord, table: DBTable | InternalTable.LOGS) {
    $q.dialog({
      component: InspectionDialog,
      componentProps: {
        record,
        table,
      },
    })
  }

  function yearReportDialog(year: number) {
    $q.dialog({
      component: YearReportDialog,
      componentProps: {
        year,
      },
    })
  }

  function monthReportDialog(month: number, year: number) {
    $q.dialog({
      component: MonthReportDialog,
      componentProps: {
        month,
        year,
      },
    })
  }

  return {
    confirmDialog,
    dismissDialog,
    inspectDialog,
    yearReportDialog,
    monthReportDialog,
  }
}
