<script setup lang="ts">

type Props = {
  label: string,
}

defineProps<Props>()

const emit = defineEmits(['cancel', 'submit'])

</script>

<template>
  <main>
    <section>
      <h1>{{  label }}</h1>
    </section>
    <div class="action">
      <button @click="emit('cancel')">cancel</button>
      <button @click="emit('submit')">ok</button>
    </div>
  </main>
</template>

<style scoped>
main {
  width: 320px;
}
.action {
  display: flex;
  justify-content: space-between;
}
</style>