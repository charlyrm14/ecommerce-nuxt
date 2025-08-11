<script setup lang="ts">

    import BlurText from '~/components/common/BlurText.vue';
    import Counter from '~/components/common/Counter.vue';
    import Headphones from '~/assets/media/headphones.png'
    import type { Product } from '~~/types/Product';
    import { useCounter } from '~/composables/useCounter';
    import type { ApiResponse } from '~~/types/ApiResponse';

    const route = useRoute()
    const uuid = route.params.uuid
    
    const { data, error } = await useAsyncData<ApiResponse<Product>>(`product-${uuid}`, () =>
        $fetch<ApiResponse<Product>>(`/api/products/${uuid}`)
    )

    if (error.value) {
        throw error.value
    }

    const product = ref<Product | null>(data?.value?.data ?? null)
    const stock = ref<number>(product.value?.stock ?? 10)

    const tabs = ref<number>(1);
            
    const { count, increment, decrement } = useCounter(1, stock)
    
</script>

<template>
    <section class="mt-7 px-4">
        <div class="flex justify-between items-center">
            <NuxtLink 
                to="/"
                class="bg-white border border-gray-200 p-2 rounded-full cursor-pointer hover:opacity-75">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                </svg>
            </NuxtLink>
            <button class="bg-white border border-gray-200 text-red-500 p-2 rounded-full cursor-pointer hover:opacity-75">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-7">
                    <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
                </svg>
            </button>
        </div>
    </section>
    <section 
        v-if="product"
        class="mt-7 px-4">
        <div class="flex justify-center items-center">
            <client-only>
                <BlurText
                    :text="product?.name"
                    :delay="200"
                    class-name="dark:text-white text-3xl md:text-4xl font-semibold"
                    animate-by="words"
                    direction="top"
                    :threshold="0.1"
                    root-margin="0px"
                    :step-duration="0.35"/>
            </client-only>
        </div>
    </section>
    <section class="px-4">
        <div class="relative md:flex md:justify-center">
            <svg viewBox="-50 0 300 200" xmlns="http://www.w3.org/2000/svg" class="md:w-130">
                <path 
                    fill="#FD8C92" 
                    d="M40.8,-71.5C51.8,-64.4,58.8,-51.2,66.6,-38.2C74.5,-25.3,83.2,-12.6,84.4,0.7C85.5,14,79.1,27.9,70.7,40C62.3,52,52,62.1,39.9,70C27.8,78,13.9,83.7,-1.3,85.9C-16.5,88.2,-33,86.9,-44,78.4C-55.1,69.9,-60.7,54.1,-66.1,39.8C-71.5,25.5,-76.7,12.8,-77.6,-0.5C-78.6,-13.8,-75.2,-27.6,-68,-38.8C-60.8,-50,-49.8,-58.5,-37.8,-65.1C-25.8,-71.6,-12.9,-76.2,1,-77.9C14.9,-79.7,29.9,-78.7,40.8,-71.5Z" 
                    transform="translate(100 100)" />
            </svg>
            <img 
                :src="Headphones" 
                alt="Headphones" 
                class="w-50 md:w-60 hover:opacity-75 absolute top-13 left-30 md:top-15 md:left-130"/>
        </div>
        <div class="flex md:justify-center gap-x-4 overflow-x-auto">
            <div class="bg-red-100 p-4 rounded-2xl border border-gray-200">
                <img 
                    :src="Headphones" 
                    alt="Headphones1" 
                    class="w-15 m-auto cursor-pointer hover:opacity-75"/>
            </div>
            <div class="bg-red-100 p-4 rounded-2xl border border-gray-200">
                <img 
                    :src="Headphones" 
                    alt="Headphones2" 
                    class="w-15 m-auto cursor-pointer hover:opacity-75"/>
            </div>
            <div class="bg-red-100 p-4 rounded-2xl border border-gray-200">
                <img 
                    :src="Headphones" 
                    alt="Headphones3" 
                    class="w-15 m-auto cursor-pointer hover:opacity-75"/>
            </div>
            <div class="bg-red-100 p-4 rounded-2xl border border-gray-200">
                <img 
                    :src="Headphones" 
                    alt="Headphones1" 
                    class="w-15 m-auto cursor-pointer hover:opacity-75"/>
            </div>
            <div class="bg-red-100 p-4 rounded-2xl border border-gray-200">
                <img 
                    :src="Headphones" 
                    alt="Headphones1" 
                    class="w-15 m-auto cursor-pointer hover:opacity-75"/>
            </div>
        </div>
    </section>
    <section class="mt-10 px-4">
        <div class="mt-7 flex justify-between">
            <div>
                <h2 class="text-xl text-gray-600 dark:text-gray-300"> {{ product?.name }} </h2>
                <span class="text-red-500 font-extrabold text-2xl"> ${{ product?.price }} </span>
            </div>
            <div class="flex items-center">
                <div class="flex justify-between items-center gap-x-2 bg-white dark:bg-dark-light rounded-4xl p-1.5">
                    <button
                        @click="decrement"
                        class="bg-gray-200 dark:bg-dark-soft dark:text-white rounded-full px-3 py-1 md:px-4 md:py-1.5 cursor-pointer hover:opacity-75 mtext-base md:text-xl"> - </button>
                    <Counter
                        :value="count"
                        :places="[1]"
                        :fontSize="30"
                        :padding="0"
                        :gap="12"
                        textColor="red"
                        :fontWeight="900"
                        :gradientHeight="0"/>
                    <button 
                        @click="increment"
                        class="bg-gray-200 dark:bg-dark-soft dark:text-white rounded-full px-3 py-1 md:px-4 md:py-1.5 cursor-pointer hover:opacity-75 mtext-base md:text-xl"> + </button>
                </div>
            </div>
        </div>
    </section>
    <section class="mt-7 px-4">
        <div class="flex gap-x-3">
            <button 
                @click="tabs = 1"
                class="hover:opacity-75 cursor-pointer"
                :class="tabs === 1 ? 'border-b-2 border-blue-500' : ''">
                    <h4 class="dark:text-white text-lg font-light"> Información </h4>
            </button>
            <button
                @click="tabs = 2"
                class="hover:opacity-75 cursor-pointer"
                :class="tabs === 2 ? 'border-b-2 border-blue-500' : ''">
                    <h4 class="dark:text-white text-lg font-light"> Opiniones </h4>
            </button>
        </div>
        <div
            v-if="tabs === 1">
            <div class="mt-4">
                <h4 class="text-base font-light dark:text-white"> Descripción </h4>
                <p class="my-2 text-sm font-extralight dark:text-white">
                    {{ product?.description }}
                </p>
            </div>
        </div>
        <div
            v-if="tabs === 2">
            <div class="flex justify-start items-start my-4 gap-x-3 border-b border-gray-200 dark:border-slate-700">
                <div class="bg-white border border-gray-200 p-2 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                    </svg>
                </div>
                <div>
                    <h4 class="dark:text-gray-400 font-light"> Valentina H. </h4>
                    <p class="dark:text-white mt-1 mb-3 font-extralight text-sm"> The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham. </p>
                </div>
            </div>
        </div>
    </section>
    <section class="mt-7 px-4">
        <div class="md:flex md:justify-end">
            <button class="w-full md:w-[20%] flex justify-center items-center gap-x-3 text-xl bg-red-500 text-white py-3 rounded-4xl hover:opacity-75 cursor-pointer font-light">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                </svg> Agregar a carrito
            </button>
        </div>
    </section>
</template>