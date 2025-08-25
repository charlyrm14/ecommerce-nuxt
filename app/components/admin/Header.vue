<script setup lang="ts">
    import UserProfileImage from '~/assets/media/user.jpg'
</script>

<template>
    <header class="sticky top-0 z-30 flex items-center justify-between border-b border-purple-100 bg-white px-4 py-3">
        <div class="flex flex-1 max-w-md items-center">
            <input type="text" placeholder="Buscar..." class="w-full rounded-md border border-gray-200  px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
            <button class="rounded-md bg-blue-600 p-2 text-white hover:bg-blue-700">
                <svg class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="2"
                    viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1010.5 18a7.5 7.5 0 006.15-3.35z"/>
                </svg>
            </button>
        </div>

        <div class="ml-4 flex items-center gap-4">
            <button>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
                </svg>
            </button>
            <div class="flex items-center gap-2">
                <img 
                    :src="UserProfileImage" 
                    alt="Profile" 
                    class="h-9 w-9 rounded-full" />
                <span class="hidden text-sm font-medium md:inline"> John D. </span>
            </div>
        </div>

    </header>
</template>
