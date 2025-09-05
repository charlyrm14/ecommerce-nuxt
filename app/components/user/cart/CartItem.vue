<script setup>
    import Headphones from '~/assets/media/headphones.png'
    import Counter from '~/components/common/Counter.vue';
    import { useCounter } from '~/composables/useCounter';
    
    const { count, increment, decrement } = useCounter(1, 9)

</script>

<template>
    <div class="bg-white dark:bg-dark-extralight border border-gray-200 dark:border-dark-soft rounded-xl my-3">
        <div class="flex gap-x-2 p-1.5">
            <div class="basis-[20%] md:basis-[10%]">
                <div class="bg-gray-100 dark:bg-dark-soft p-1 rounded-lg">
                    <img 
                        :src="Headphones" 
                        alt="Headphones1" 
                        class="w-20 md:w-30 cursor-pointer hover:opacity-75"/>
                </div>
            </div>
            <div class="basis-[80%] md:basis-[90%]">
                <div class="flex justify-between items-start">
                    <h4 class="dark:text-white font-light text-base md:text-lg"> 
                        Sony WHXM-4000 <span class="block text-gray-400"> Sony </span>
                    </h4>
                    <button class="dark:text-gray-400 text-gray-400 cursor-pointer hover:opacity-75 hover:text-red-500">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 md:size-7">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                        </svg>
                    </button>
                </div>
                <div class="flex justify-between items-center mt-1 md:mt-6">
                    <p class="text-red-500 text-xl md:text-2xl font-bold"> $6,000.00 </p>
                    <div class="bg-gray-100 dark:bg-dark-light p-1 rounded-4xl">
                        <div class="flex justify-between items-center gap-x-2 md:gap-x-4">
                            <button 
                                @click.prevent="decrement"
                                class="bg-gray-300 dark:bg-dark-soft text-gray-600 dark:text-white rounded-full px-2.5 py-0.5 md:px-4 md:py-2 cursor-pointer hover:opacity-75"> - </button>
                            <Counter
                                :value="count"
                                :places="[1]"
                                :fontSize="30"
                                :padding="0"
                                :gap="12"
                                textColor="red"
                                :fontWeight="900"
                                :gradientHeight="0"/>
                            <button
                                @click.prevent="increment"
                                class="bg-red-500 text-white rounded-full px-2.5 py-0.5 md:px-4 md:py-2 cursor-pointer hover:opacity-75"> + </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>