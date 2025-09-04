<script setup lang="ts">
    import Breadcrumb from '~/components/admin/layouts/Breadcrumb.vue';
    import Table from '~/components/admin/sales/Table.vue';
    
    definePageMeta({
        layout: 'admin'
    })

</script>

<template>
    <Breadcrumb
        main="Ventas"
        secondary="Lista"/>

    <section class="mt-7">
        <div class="border border-gray-200 rounded-xl bg-white">

            <div class="p-4 border-b border-gray-200">
                <div class="flex justify-between items-center">

                    <div class="flex justify-between items-center gap-x-3">
                        <div class="relative">
                            <input 
                                type="text"
                                class="border border-gray-200 px-10 py-2 rounded-lg hidden md:block focus:outline-none"
                                placeholder="Search order...">
                            <div class="absolute top-2 left-2 hidden md:block">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 text-gray-500">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    <button 
                        class="bg-blue-500 text-white font-light rounded-lg p-2 md:px-4 md:py-2 cursor-pointer hover:opacity-75 flex items-center gap-x-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" />
                            </svg> Añadir orden
                    </button>
                </div>
            </div>

            <div>
                <Table/>
            </div>

            <div class="p-4 border-t border-gray-200">
                <div class="flex justify-between items-center">
                    <p class="text-xs"> 
                        Mostrando 
                            <span class="font-bold"> 15 </span> registros por página 
                    </p>

                    
                </div>
            </div>

        </div>
    </section>

</template>
