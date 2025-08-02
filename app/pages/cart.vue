<script setup>
    import CartItem from '~/components/user/CartItem.vue'
</script>

<template>
    <section class="mt-7 px-4">
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
    <section class="mt-7 px-4">
        <CartItem/>
        <CartItem/>
    </section>
    <section class="mt-7 px-4">
        <div class="md:flex md:justify-end">
            <button class="w-full md:w-[20%] flex justify-center items-center gap-x-3 text-xl bg-red-500 text-white py-3 rounded-4xl hover:opacity-75 cursor-pointer font-light">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z" />
                </svg> Pagar ahora
            </button>
        </div>
    </section>
</template>