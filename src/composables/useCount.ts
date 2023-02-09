import { ref } from "vue"

export const useCount = (init = 0) => {
  const count = ref(init)
  const countUp = () => {
    count.value = count.value + 1
  }

  const doubleUp = () => {
    count.value = count.value * 2
  }

  return {
    count,
    countUp,
    doubleUp
  }
}