<script setup lang="ts">
    import Breadcrumb from '~/components/admin/layouts/Breadcrumb.vue';
    
    definePageMeta({
        layout: 'admin'
    })

</script>

<template>
    <Breadcrumb/>
    <section>
        <h2 class="mb-4 text-xl font-bold">Dashboard</h2>
        <div class="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            <article class="h-32 rounded-lg bg-gradient-to-tl from-green-400 from-0% via-green-500 via-50% to-green-600 to-100% relative hover:opacity-75 shadow-lg">
                <div class="px-4 py-2">
                    <h2 class="text-6xl text-white mt-2 font-bold">
                        <span class="text-sm block font-extralight italic"> Total productos: </span> 10
                    </h2>
                </div>
                <div class="absolute bottom-3 right-3">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-15 text-gray-100">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                    </svg>
                </div>
            </article>
            <article class="h-32 rounded-lg bg-gradient-to-tl from-red-400 from-0% via-red-500 via-50% to-red-600 to-100% relative hover:opacity-75 shadow-lg">
                <div class="px-4 py-2">
                    <h2 class="text-6xl text-white mt-2 font-bold">
                        <span class="text-sm block font-extralight italic"> Carritos hoy: </span> 55
                    </h2>
                </div>
                <div class="absolute bottom-3 right-3">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-15 text-gray-100">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                    </svg>
                </div>
            </article>
            <article class="h-32 rounded-lg bg-gradient-to-tl from-purple-400 from-0% via-purple-500 via-50% to-purple-600 to-100% relative hover:opacity-75 shadow-lg">
                <div class="px-4 py-2">
                    <h2 class="text-6xl text-white mt-2 font-bold">
                        <span class="text-sm block font-extralight italic"> Usuarios nuevos: </span> 300
                    </h2>
                </div>
                <div class="absolute bottom-3 right-3">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-15 text-gray-100">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                    </svg>
                </div>
            </article>
            <article class="h-32 rounded-lg bg-gradient-to-tl from-pink-400 from-0% via-pink-500 via-50% to-pink-600 to-100% relative hover:opacity-75 shadow-lg">
                <div class="px-4 py-2">
                    <h2 class="text-4xl text-white mt-2 font-bold">
                        <span class="text-sm block font-extralight italic"> Ventas hoy: </span> $150,650.00
                    </h2>
                </div>
                <div class="absolute bottom-3 right-3">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-15 text-gray-100">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
                    </svg>
                </div>
            </article>
        </div>
    </section>
    <section class="mt-7">
        <div class="grid gap-6 md:grid-cols-1 xl:grid-cols-2">
            <article class="h-62 rounded-lg border border-gray-200 bg-white">
                <div class="p-4 flex justify-between items-center">
                    <h2 class="font-bold text-lg"> 
                        Ventas semanalas <span class="block text-xs text-gray-400 font-light"> Estadisticas de ventas semanalas </span>
                    </h2>
                    <div class="bg-green-100 py-2 px-3 rounded-lg">
                        <p class="text-green-500 font-bold text-lg"> +100 </p>
                    </div>
                </div>
            </article>
            <article class="h-62 rounded-lg border border-gray-200 bg-white">
                <div class="p-4 flex justify-between items-center">
                    <h2 class="font-bold text-lg"> 
                        Carritos abandonados <span class="block text-xs text-gray-400 font-light"> Estadisticas de carritos abandonados de la semana </span>
                    </h2>
                    <div class="bg-red-100 py-2 px-3 rounded-lg">
                        <p class="text-red-500 font-bold text-lg"> +20% </p>
                    </div>
                </div>
            </article>
        </div>
    </section>
    <section class="mt-7">
        <div class="grid gap-6 md:grid-cols-1 xl:grid-cols-2">
            <article class="h-62 rounded-lg bg-gradient-to-tl from-amber-400 from-0% via-amber-500 via-50% to-amber-600 to-100% relative">
                <div class="py-4 px-8">
                    <h2 class="text-6xl text-white font-bold"> Reportes </h2>
                    <button class="my-6 bg-white px-4 py-1.5 rounded-4xl shadow cursor-pointer hover:opacity-75 font-light">
                        Ir a reportes 
                    </button>
                </div>
                <div class="absolute bottom-5 right-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-45 text-gray-100 rotate-25">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m.75 12 3 3m0 0 3-3m-3 3v-6m-1.5-9H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                    </svg>
                </div>
            </article>
            <article class="h-62 rounded-lg bg-gradient-to-tl from-indigo-400 from-0% via-indigo-500 via-50% to-indigo-600 to-100% relative">
                <div class="py-4 px-8">
                    <h2 class="text-6xl text-white font-bold"> Chat </h2>
                    <button class="my-6 bg-white px-4 py-1.5 rounded-4xl shadow cursor-pointer hover:opacity-75 font-light">
                        Ir a chat 
                    </button>
                </div>
                <div class="absolute bottom-5 right-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-45 text-gray-100 rotate-25">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z" />
                    </svg>
                </div>
            </article>
        </div>
    </section>
</template>