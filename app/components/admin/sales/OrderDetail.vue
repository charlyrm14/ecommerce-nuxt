<script setup lang="ts">

    const showContent = ref<boolean>(true)

</script>

<template>
    <div class="rounded-lg border border-gray-200 bg-white p-2">
        <div class="py-2 px-4 flex justify-between items-center">
            <h2 class="font-bold text-lg"> Detalles orden #12922 </h2>
            <button 
                class="cursor-pointer text-gray-500"
                @click="showContent = !showContent">
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke-width="1.5" 
                        stroke="currentColor" 
                        class="size-6">
                            <path 
                                stroke-linecap="round" 
                                stroke-linejoin="round" 
                                :d="showContent ? 'm4.5 15.75 7.5-7.5 7.5 7.5' : 'm19.5 8.25-7.5 7.5-7.5-7.5'" />
                    </svg>
            </button>
        </div>
        <div 
            v-if="showContent"
            class="py-2 px-4 my-1">
                <div class="flex justify-between items-center border-b border-gray-200">
                    <div class="flex items-center gap-x-2 font-light text-gray-400 mb-3">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                        </svg> Fecha orden
                    </div>
                    <div>
                        <p class="text-gray-400"> 04/09/2025 </p>
                    </div>
                </div>
                <div class="flex justify-between items-center">
                    <div class="flex items-center gap-x-2 font-light text-gray-400 my-3">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z" />
                        </svg> Método de pago
                    </div>
                    <div>
                        <span class="bg-gray-200/70 text-blue-400 font-bold italic py-1 px-2 rounded-lg"> VISA </span>
                    </div>
                </div>
        </div>
    </div>
</template>