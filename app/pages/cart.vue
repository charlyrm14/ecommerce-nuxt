<script setup>

</script>

<template>
    <section>
        <div class="flex justify-start items-center mt-6">
            <div class="flex justify-start w-[5%]">
                <NuxtLink 
                    to="/"
                    class="bg-white p-2 rounded-full border border-gray-200 cursor-pointer hover:opacity-75">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                        </svg>
                </NuxtLink>
            </div>
            <div class="flex justify-center w-[95%]">
                <h1 class="text-3xl font-bold dark:text-white"> Mi carrito </h1>
            </div>
        </div>
    </section>
    <section>
        <button class="fixed top-25 left-1/2 transform -translate-x-1/2 w-[70%] bg-orange-600 text-white p-4 shadow-lg flex justify-center items-center z-50 rounded-4xl cursor-pointer hover:opacity-75 md:hidden">
            Pagar ahora
        </button>
    </section>
</template>