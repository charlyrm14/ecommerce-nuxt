<script setup>
    import Headphones from '~/assets/media/headphones.png'
    import Counter from '../common/Counter.vue';
    import { useCounter } from '~/composables/useCounter';
    
    const { count, increment, decrement } = useCounter(1, 9)

</script>

<template>
    <div class="bg-white dark:bg-dark-extralight border border-gray-200 dark:border-dark-soft rounded-xl my-4">
        <div class="flex justify-between items-start p-2 md:p-3">
            <div class="bg-red-100 p-4 md:p-6 rounded-lg">
                <img 
                    :src="Headphones" 
                    alt="Headphones1" 
                    class="w-15 cursor-pointer hover:opacity-75"/>
            </div>
            <div class="flex flex-col items-start flex-1 ml-4">
                <h4 class="dark:text-white font-light text-sm md:text-base"> Sony WHXM-4000 </h4>
                <p class="text-red-500 text-lg md:text-2xl"> $6,000.00 </p>
                <span class="mt-3 bg-green-100 text-green-500 text-base px-3 rounded-4xl">
                    20%
                </span>
            </div>
            <div>
                <button class="dark:text-white cursor-pointer hover:opacity-75">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
                    </svg>
                </button>
            </div>
        </div>
        <div class="border-t border-gray-200 dark:border-dark-soft">
            <div class="flex justify-between items-center p-3">
                <button class="dark:text-white font-extralight hover:opacity-75 cursor-pointer"> Añadir a favoritos </button>
                <div class="flex gap-x-3 md:gap-x-6">
                    <button class="dark:text-gray-400 cursor-pointer hover:opacity-75">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 md:size-7">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                        </svg>
                    </button>
                    <div class="bg-gray-100 dark:bg-dark-light p-1.5 md:p-1 rounded-4xl">
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
                                class="bg-gray-300 dark:bg-dark-soft text-gray-600 dark:text-white rounded-full px-2.5 py-0.5 md:px-4 md:py-2 cursor-pointer hover:opacity-75"> + </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>