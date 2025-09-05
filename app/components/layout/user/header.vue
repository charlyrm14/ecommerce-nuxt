<template>
    <header class="fixed top-0 left-0 right-0 z-50">
        <div class="max-w-8xl mx-auto w-full px-4 mt-6">
            <div class="flex justify-between items-center mb-3">
                <div class="flex items-center gap-x-2">
                    <button class="bg-red-500 text-white p-2 rounded-full cursor-pointer hover:opacity-75">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                        </svg>
                    </button>
                    <p class="text-xs font-light text-gray-500 dark:text-gray-300"> Welcome <span class="block font-bold text-base text-black dark:text-white"> Carlos I. </span> </p>
                </div>
                <div class="flex justify-end">
                    <NuxtLink 
                        to="/settings"
                        class="bg-white dark:bg-dark-soft p-2 rounded-full border border-gray-200 dark:border-none dark:text-white cursor-pointer hover:opacity-75">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
                            </svg>
                    </NuxtLink>
                </div>
            </div>
            <div class="mt-6 flex flex-row gap-x-2">
                <div class="relative basis-[90%] md:basis-[95%]">
                    <input
                        type="text"
                        placeholder="Search..."
                        class="w-full bg-white dark:bg-dark-soft border border-gray-200 dark:border-none dark:text-white rounded-lg px-12 py-3 focus:outline-none"/>
                    <div class="absolute top-3 left-4">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                            viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="size-6 text-gray-400 dark:text-white">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                        </svg>
                    </div>
                </div>
                <div class="basis-[10%] md:basis-[5%]">
                    <button class="bg-red-100 text-red-500 p-3 w-full rounded-lg hover:opacity-75 cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 m-auto">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    </header>
</template>
