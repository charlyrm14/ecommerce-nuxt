<script setup>
    import SectionHeader from '~/components/user/layouts/SectionHeader.vue';

    
</script>

<template>
    <SectionHeader
        title="Métodos de pago"/>
    <section class="mt-14 px-4">
        <div class="flex justify-center items-center">
            <div class="bg-gradient-to-br from-blue-600 from-0% via-blue-500 via-50% to-blue-400 to-100% p-4 w-full md:w-[35%] h-55 rounded-3xl">
                <div class="flex justify-between items-center p-2 text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-7">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 0 0 2.25-2.25V6.75a2.25 2.25 0 0 0-2.25-2.25H6.75A2.25 2.25 0 0 0 4.5 6.75v10.5a2.25 2.25 0 0 0 2.25 2.25Zm.75-12h9v9h-9v-9Z" />
                    </svg>
                    <h4 class="text-white text-lg italic"> VISA </h4>
                </div>
                <div class="mt-4 px-4">
                    <h4 class="text-white font-extralight"> CARD NUMBER </h4>
                </div>
                <div class="px-4 flex justify-start items-center gap-x-6">
                    <div class="flex justify-start items-center gap-x-1">
                        <div class="bg-white p-1 rounded-full"></div>
                        <div class="bg-white p-1 rounded-full"></div>
                        <div class="bg-white p-1 rounded-full"></div>
                        <div class="bg-white p-1 rounded-full"></div>
                    </div>
                    <div class="flex justify-start items-center gap-x-1">
                        <div class="bg-white p-1 rounded-full"></div>
                        <div class="bg-white p-1 rounded-full"></div>
                        <div class="bg-white p-1 rounded-full"></div>
                        <div class="bg-white p-1 rounded-full"></div>
                    </div>
                    <div class="flex justify-start items-center gap-x-1">
                        <div class="bg-white p-1 rounded-full"></div>
                        <div class="bg-white p-1 rounded-full"></div>
                        <div class="bg-white p-1 rounded-full"></div>
                        <div class="bg-white p-1 rounded-full"></div>
                    </div>
                    <div class="flex justify-start items-center gap-x-1">
                        <p class="text-white text-xl font-extrabold"> 3280 </p>
                    </div>
                </div>
                <div class="mt-10 px-4">
                    <div class="flex justify-between items-center">
                        <div class="flex justify-between items-center gap-x-6">
                            <div>
                                <p class="text-slate-300 text-xs"> 
                                    Exp Date <span class="block text-white"> 12/25 </span>
                                </p>
                            </div>
                            <div>
                                <p class="text-slate-300 text-xs"> 
                                    CVV <span class="block text-white"> 782 </span>
                                </p>
                            </div>
                        </div>
                        <div>
                            <p class="text-white text-sm"> Jhon Smith </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="mt-7 px-4">
        <div class="w-full md:w-[60%] mx-auto flex justify-end items-center">
            <button class="px-4 py-1.5 flex justify-between items-center gap-x-2 bg-white dark:bg-dark-extralight text-gray-600 dark:text-slate-300 border border-gray-200 dark:border-none rounded-full cursor-pointer hover:opacity-75">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg> Añadir
            </button>
        </div>
    </section>
    <section class="mt-7 px-4">
        <div class="w-full md:w-[60%] mx-auto">
            <div class="bg-white dark:bg-dark-extralight border border-blue-500 p-4 rounded-lg flex justify-between items-center hover:opacity-75 cursor-pointer">
                <div class="flex justify-start gap-x-4">
                    <div class="bg-blue-500 px-7 py-4 rounded-lg">
                        <p class="m-0 p-0 text-base italic text-white"> VISA </p>
                    </div>
                    <div class="flex-row">
                        <p class="dark:text-slate-300 text-sm"> **** 3280 </p>
                        <p class="dark:text-slate-300 text-sm"> 12/25 </p>
                    </div>
                </div>
                <div class="bg-blue-500 p-2 rounded-full"></div>
            </div>
        </div>
        <div class="w-full md:w-[60%] mx-auto">
            <div class="bg-white dark:bg-dark-extralight border border-gray-200 dark:border-none p-4 rounded-lg flex justify-between items-center mt-5 hover:opacity-75 cursor-pointer">
                <div class="flex justify-start gap-x-4">
                    <div class="bg-white px-6 py-4 rounded-lg">
                        <p class="m-0 p-0 text-base italic"> Paypal </p>
                    </div>
                </div>
                <div class="bg-gray-300 dark:bg-white p-2 rounded-full"></div>
            </div>
        </div>
    </section>
</template>