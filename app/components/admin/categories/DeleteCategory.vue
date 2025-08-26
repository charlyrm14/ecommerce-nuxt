<script setup lang="ts">

    const emit = defineEmits(['closeDeleteCategory'])

    const isSubmitting = ref<boolean>(false);

    const handleSubmit = () => {
        isSubmitting.value = true

        setTimeout(() => {
            isSubmitting.value = false
        }, 3000);
    }

</script>

<template>
    <div class="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
        <div class="bg-white dark:bg-slate-800 rounded-2xl shadow-xl w-[90%] max-w-md p-6 mx-4">
            <div class="flex justify-between items-center mb-4">
                <h2 class="text-xl font-extralight text-slate-800 dark:text-white flex items-center gap-2"> 
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                    </svg>  Eliminar categoría
                </h2>
                <button
                    @click="$emit('closeDeleteCategory')"
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

            <div class="text-slate-600 dark:text-slate-300">
                <div class="bg-amber-100 flex items-start py-2 px-4 gap-x-3 rounded-lg">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-7">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
                        </svg>
                    </div>
                    <p class="text-sm text-slate-400 dark:text-slate-400 font-light">
                        Los productos relacionados a esta categoría dejarán de estar asociados.
                    </p>
                </div>

                <p class="text-lg font-light text-red-500 text-center my-3">
                    ¿Estás seguro de querer eliminar la categoría
                    <span class="font-bold">Electrónica</span>?
                </p>
            </div>

            <div class="mt-6">
                <div class="flex justify-between">
                    <button 
                        @click="$emit('closeDeleteCategory')"
                        class="bg-gray-200 text-gray-400 px-4 py-2 rounded-lg hover:opacity-75 cursor-pointer"> Cerrar </button>
                    <button
                        @click="handleSubmit()"
                        :disabled="isSubmitting"
                        class="px-4 py-2 rounded-lg hover:opacity-75 transition"
                        :class="!isSubmitting ? 'bg-red-500 text-white cursor-pointer ' : 'bg-red-300 text-white cursor-not-allowed'">
                            {{ !isSubmitting ? 'Si, eliminar' : 'Eliminando...' }}
                    </button>
                </div>
            </div>

        </div>
    </div>
</template>
