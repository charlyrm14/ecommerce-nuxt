<script setup lang="ts">

    const emit = defineEmits(['closeCreateCategory'])

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
                        <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 0 0 2.25-2.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v2.25A2.25 2.25 0 0 0 6 10.5Zm0 9.75h2.25A2.25 2.25 0 0 0 10.5 18v-2.25a2.25 2.25 0 0 0-2.25-2.25H6a2.25 2.25 0 0 0-2.25 2.25V18A2.25 2.25 0 0 0 6 20.25Zm9.75-9.75H18a2.25 2.25 0 0 0 2.25-2.25V6A2.25 2.25 0 0 0 18 3.75h-2.25A2.25 2.25 0 0 0 13.5 6v2.25a2.25 2.25 0 0 0 2.25 2.25Z" />
                    </svg>  Nueva categoría
                </h2>
                <button
                    @click="$emit('closeCreateCategory')"
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
                <div class="mb-3">
                    <label for="name" class="font-light uppercase"> Nombre <span class="text-red-500 font-bold"> * </span> </label>
                    <div>
                        <input 
                            type="text"
                            id="name"
                            name="name"
                            class="w-full bg-gray-50 border border-gray-200 px-2 py-3 mt-1 focus:outline-none rounded-lg"
                            placeholder="Ej: Electrónica, deportes, cocina">
                    </div>
                </div>
                <div class="flex justify-between items-center gap-x-3">
                    <p class="uppercase my-3 font-light"> 
                        Estatus <span class="block text-sm text-gray-400 normal-case"> Define la visibildad de la categoría </span>
                    </p>
                    <button 
                        type="button" 
                        class="relative inline-flex h-8 w-13 items-center rounded-full bg-blue-500 transition-colors duration-300 ease-in-out focus:outline-none peer cursor-pointer">
                            <span class="inline-block h-6 w-6 transform rounded-full bg-white transition-transform duration-300 ease-in-out translate-x-1 peer-checked:translate-x-6"></span>
                    </button>
                </div>
            </div>

            <div class="mt-6">
                <div class="flex justify-between">
                    <button 
                        @click="$emit('closeCreateCategory')"
                        class="bg-gray-200 text-gray-400 px-4 py-2 rounded-lg hover:opacity-75 cursor-pointer"> Cerrar </button>
                    <button
                        @click="handleSubmit()"
                        :disabled="isSubmitting"
                        class="px-4 py-2 rounded-lg hover:opacity-75 transition"
                        :class="!isSubmitting ? 'bg-blue-500 text-white cursor-pointer ' : 'bg-blue-300 text-white cursor-not-allowed'">
                            {{ !isSubmitting ? 'Crear' : 'Creando...' }}
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>