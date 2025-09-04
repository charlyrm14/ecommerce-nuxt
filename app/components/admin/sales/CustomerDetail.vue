<script setup lang="ts">

    const showContent = ref<boolean>(false)

</script>

<template>
    <div class="rounded-lg border border-gray-200 bg-white p-2 my-3">
        <div class="py-2 px-4 flex justify-between items-center">
            <h2 class="font-bold text-lg"> Detalles cliente </h2>
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
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                        </svg> Nombre
                    </div>
                    <div>
                        <p class="text-gray-400"> Olivia Wild </p>
                    </div>
                </div>
                <div class="flex justify-between items-center border-b border-gray-200">
                    <div class="flex items-center gap-x-2 font-light text-gray-400 my-3">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                        </svg> Email
                    </div>
                    <div>
                        <span class="text-gray-400"> oliviawild@gmail.com </span>
                    </div>
                </div>
                <div class="flex justify-between items-center">
                    <div class="flex items-center gap-x-2 font-light text-gray-400 my-3">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                        </svg> Teléfono
                    </div>
                    <div>
                        <span class="text-gray-400 text-sm"> (+52) 55 0102-2525 </span>
                    </div>
                </div>
        </div>
    </div>
</template>
