<script setup lang="ts">

    import type { Category } from '~~/types/Product';

    defineProps<{
        category: Category
    }>()

    const menuActions = ref<boolean>(false)

    const emit = defineEmits<{
        (e: 'openDeleteModal', category: Category): void
    }>()

</script>

<template>
    <tr class="border-b border-gray-100">
        <td class="px-4 py-3">
            <div class="flex items-start gap-x-2">
                <div class="bg-gray-100 border border-gray-200 rounded-lg text-gray-600 p-3">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z" />
                    </svg>
                </div>
                <div>
                    <p class="text-gray-600 text-base"> 
                        {{ category?.name }}
                            <span class="text-xs block"> {{ category?.created_at }} </span>
                    </p>                                    
                </div>
            </div>
        </td>
        <td>
            <span 
                class="px-4 py-1 rounded-lg font-base hover:opacity-75 text-xs"
                :class="category?.status === 1 ? 'bg-green-100 text-green-500 border border-green-200' : 'bg-gray-200 text-gray-500' "> 
                    {{ category?.status === 1 ? 'Visible' : 'No visible' }} 
            </span>
        </td>
        <td>
            <div class="relative">
                <button
                    @click="menuActions = !menuActions"
                    class="bg-gray-100 text-gray-600 border border-gray-200 rounded-lg px-4 py-2 cursor-pointer hover:opacity-75 flex items-center gap-x-1 text-sm">
                        Actions 
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                fill="none" 
                                viewBox="0 0 24 24" 
                                stroke-width="1.5" 
                                stroke="currentColor" 
                                class="size-4">
                                    <path 
                                        stroke-linecap="round" 
                                        stroke-linejoin="round" 
                                        :d="menuActions ? 'm4.5 15.75 7.5-7.5 7.5 7.5' : 'm19.5 8.25-7.5 7.5-7.5-7.5'" />
                            </svg>
                </button>
                <div
                    v-if="menuActions"
                    class="absolute -bottom-25 -left-14 bg-white border border-gray-200 w-40 z-50 rounded-lg shadow-lg">
                    <div class="px-2 my-2">
                        <button class="hover:bg-gray-100 hover:rounded-lg w-full cursor-pointer px-2 py-1 border-b border-gray-100 text-start font-light flex items-center gap-x-2"> 
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
                            </svg> Editar 
                        </button>
                    </div>
                    <div class="px-2 my-2">
                        <button
                            @click="emit('openDeleteModal', category)"
                            class="hover:bg-red-100 hover:text-red-500 hover:rounded-lg w-full cursor-pointer px-2 py-1 border-b border-gray-100 text-start font-light flex items-center gap-x-2"> 
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                </svg> Eliminar 
                        </button>
                    </div>
                </div>
            </div>
        </td>
    </tr>
</template>
