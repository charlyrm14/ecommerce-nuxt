<script setup lang="ts">

    const menuActions = ref<boolean>(false)

</script>

<template>
    <tr class="border-b border-gray-100">
        <td class="px-4 py-3">
            <p class="font-bold"> #12922 </p>
        </td>
        <td>
            <p class="font-light p-3">
                Olivia Wild
                    <span class="block text-xs"> oliviawild@gmail.com </span>
            </p>
        </td>
        <td>
            <span class="bg-lime-200 text-green-500 text-xs px-3 py-1 rounded-lg"> Completed </span>
        </td>
        <td>
            <p class="text-sm text-gray-500"> 04/09/2025 </p>
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
                            <NuxtLink 
                                to="/e-admin/sales/view/12922"
                                class="hover:bg-gray-100 hover:rounded-lg w-full cursor-pointer px-2 py-1 border-b border-gray-100 text-start font-light flex items-center gap-x-2"> 
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                    </svg> Ver 
                            </NuxtLink>
                        </div>
                        <div class="px-2 my-2">
                            <button class="hover:bg-gray-100 hover:rounded-lg w-full cursor-pointer px-2 py-1 border-b border-gray-100 text-start font-light flex items-center gap-x-2"> 
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
                                </svg> Editar 
                            </button>
                        </div>
                </div>
            </div>
        </td>
    </tr>
</template>
