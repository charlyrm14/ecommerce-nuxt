<script setup lang="ts">
    import FileUploader from '../FileUploader.vue';

    const emit = defineEmits(['closeFileModal'])

</script>

<template>
    <div class="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
        <div class="bg-white dark:bg-slate-800 rounded-2xl shadow-xl w-[90%] max-w-md p-6 mx-4">

            <div class="flex justify-between items-center mb-4">
                <h2 class="text-xl font-extralight text-slate-800 dark:text-white flex items-center gap-2"> 
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 16.5V9.75m0 0 3 3m-3-3-3 3M6.75 19.5a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z" />
                    </svg> Cargar archivos
                </h2>
                <button
                    @click="emit('closeFileModal')"
                    class="text-slate-400 hover:text-red-500 transition cursor-pointer">
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            class="h-5 w-5" 
                            fill="none" 
                            viewBox="0 0 24 24"
                            stroke="currentColor" 
                            stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
                    </svg>
                </button>
            </div>

            <div class="my-6">
                <FileUploader/>
            </div>

            <div class="mt-6">
                <div class="flex justify-end items-center gap-x-4">
                    <button
                        @click="emit('closeFileModal')"
                        class="bg-white border border-gray-200 text-gray-400 px-4 py-2 rounded-lg hover:opacity-75 cursor-pointer">
                            Cerrar
                    </button>
                    <button
                        class="bg-blue-500 text-white px-4 py-2 hover:opacity-75 cursor-pointer rounded-lg shadow">
                            Guardar
                    </button>
                </div>
            </div>

        </div>
    </div>
</template>
