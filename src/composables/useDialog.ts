import { ref } from "vue"

export const useDialog = () => {
  const dialogCb = ref< (() => void) | null>(null)

  const setDialogCb = (cb: () => void) => {
    dialogCb.value = cb
  }
  
  const submit = () => {
    if(dialogCb.value){
      dialogCb.value()
      dialogCb.value = null
    }
  }
  
  const cancel = () => {
    dialogCb.value = null
  }

  return {
    dialogCb,
    setDialogCb,
    submit,
    cancel
  }
}