export function useCounter(initialValue: number = 0, maxValue: number | Ref<number> = 10) {

    const count = ref<number>(initialValue)
    const max = toRef(maxValue)

    const decrement = () => {
        if (count.value > 1) {
            count.value--
        }
    }

    const increment = () => {
        if (count.value < max.value) {
            count.value++
        }
    }

    return {
        count,
        increment, 
        decrement
    }
}