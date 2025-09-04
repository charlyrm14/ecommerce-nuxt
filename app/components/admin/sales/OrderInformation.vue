<script setup>

</script>

<template>
    <div class="rounded-lg border border-gray-200 bg-white p-2 my-3">
        <div class="py-2 px-4 flex justify-between items-center">
            <h2 class="font-bold text-lg"> 
                Información de orden
                    <span class="block font-extralight text-gray-400 text-sm"> Listado de productos </span>
            </h2>
            <button class="bg-indigo-500 text-white flex items-center gap-x-2 text-sm px-4 py-2 rounded-lg hover:opacity-75 cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 9.75v6.75m0 0-3-3m3 3 3-3m-8.25 6a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z" />
                </svg> Descargar CSV
            </button>
        </div>
        <div class="py-2 px-4">
            <div class="flex justify-between items-center">
                <div>
                    <p class="text-gray-400 text-sm"> Producto </p>
                </div>
                <div>
                    <p class="text-gray-400 text-sm"> Cantidad </p>
                </div>
                <div>
                    <p class="text-gray-400 text-sm"> Precio unitario </p>
                </div>
                <div>
                    <p class="text-gray-400 text-sm"> Total </p>
                </div>
            </div>
            <div class="h-45 overflow-x-auto">
                <div class="my-3 flex justify-between items-start border-b border-dashed border-gray-200">
                    <div class="flex items-start gap-x-2 mb-2">
                        <div class="bg-gray-200 p-4 rounded-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-8">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                            </svg>
                        </div>
                        <div>
                            <p class=""> 
                                Sony Bravia 4K 
                                    <span class="block text-xs font-light text-gray-500"> SONY </span>
                                    <span class="block text-xs font-light text-indigo-500"> SKU-SN01  </span>
                            </p>
                        </div>
                    </div>
                    <div class="mb-2">
                        <p class="text-gray-400"> 2 </p>
                    </div>
                    <div class="mb-2">
                        <p class="text-gray-400"> $23,999.99 MXN </p>
                    </div>
                    <div class="mb-2">
                        <p class="text-gray-400"> 47,999.98 MXN </p>
                    </div>
                </div>
                <div class="my-3 flex justify-between items-start border-b border-dashed border-gray-200">
                    <div class="flex items-start gap-x-2 mb-2">
                        <div class="bg-gray-200 p-4 rounded-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-8">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                            </svg>
                        </div>
                        <div>
                            <p class=""> 
                                Sony Bravia 4K 
                                    <span class="block text-xs font-light text-gray-500"> SONY </span>
                                    <span class="block text-xs font-light text-indigo-500"> SKU-SN01  </span>
                            </p>
                        </div>
                    </div>
                    <div class="mb-2">
                        <p class="text-gray-400"> 2 </p>
                    </div>
                    <div class="mb-2">
                        <p class="text-gray-400"> $23,999.99 MXN </p>
                    </div>
                    <div class="mb-2">
                        <p class="text-gray-400"> 47,999.98 MXN </p>
                    </div>
                </div>
                <div class="my-3 flex justify-between items-start border-b border-dashed border-gray-200">
                    <div class="flex items-start gap-x-2 mb-2">
                        <div class="bg-gray-200 p-4 rounded-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-8">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                            </svg>
                        </div>
                        <div>
                            <p class=""> 
                                Sony Bravia 4K 
                                    <span class="block text-xs font-light text-gray-500"> SONY </span>
                                    <span class="block text-xs font-light text-indigo-500"> SKU-SN01  </span>
                            </p>
                        </div>
                    </div>
                    <div class="mb-2">
                        <p class="text-gray-400"> 2 </p>
                    </div>
                    <div class="mb-2">
                        <p class="text-gray-400"> $23,999.99 MXN </p>
                    </div>
                    <div class="mb-2">
                        <p class="text-gray-400"> 47,999.98 MXN </p>
                    </div>
                </div>
            </div>
            <div class="my-3 flex justify-end items-center gap-x-4 border-b border-dashed border-gray-200">
                <div class="mb-2">
                    <p class="text-gray-500 text-sm"> Subtotal </p>
                </div>
                <div class="mb-2">
                    <p class="text-gray-500 text-sm"> $8,499.00 MXN </p>
                </div>
            </div>
            <div class="my-3 flex justify-end items-center gap-x-4 border-b border-dashed border-gray-200">
                <div class="mb-2">
                    <p class="text-gray-500 text-sm"> IVA (16%) </p>
                </div>
                <div class="mb-2">
                    <p class="text-gray-500 text-sm"> $1359.84 MXN </p>
                </div>
            </div>
            <div class="my-3 flex justify-end items-center gap-x-4 border-b border-dashed border-gray-200">
                <div class="mb-2">
                    <p class="text-gray-500 text-sm"> Costo envío </p>
                </div>
                <div class="mb-2">
                    <p class="text-gray-500 text-sm"> $99.00 MXN </p>
                </div>
            </div>
            <div class="my-3 flex justify-end items-center gap-x-4">
                <div>
                    <p class="font-bold text-lg"> Total </p>
                </div>
                <div>
                    <p class="font-bold text-lg"> $9,957.84 MXN </p>
                </div>
            </div>
        </div>
    </div>
</template>