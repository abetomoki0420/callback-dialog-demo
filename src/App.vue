<script setup lang="ts">
import { useCount } from "./composables/useCount"
import { useDialog } from "./composables/useDialog"
import Dialog from "./components/Dialog.vue"

// first dialog
const { count, countUp } = useCount()
const { dialogCb, setDialogCb, submit, cancel } = useDialog()

// second dialog
const { count: countSub, doubleUp: subDoubleUp} = useCount(2)
const { dialogCb: subDialogCb, setDialogCb: setSubDialogCb, submit: subSubmit, cancel: subCancel } = useDialog()

</script>

<template>
  <div>
    <div>
      <section>
        count: {{ count }}
      </section>
      <Dialog v-if="dialogCb" label="countUp" @cancel="cancel" @submit="submit"/>
      <button v-else @click="setDialogCb(countUp)">click</button>
    </div>
    <div>
      <section>
        count: {{ countSub }}
      </section>
      <Dialog v-if="subDialogCb" label="doubleUp" @cancel="subCancel" @submit="subSubmit"/>
      <button v-else @click="setSubDialogCb(subDoubleUp)">click</button>
    </div>
  </div>
</template>

