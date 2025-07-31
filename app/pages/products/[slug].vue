<script setup>
    import BlurText from '~/components/common/BlurText.vue';
    import Counter from '~/components/common/Counter.vue';
    import Headphones from '~/assets/media/headphones.png'
    

    const quantity = ref(1);

    const decrementQuantity = () => {
        if (quantity.value > 1) {
            quantity.value--;
        }
    }

    const incrementQuantity = () => {
        if (quantity.value < 5) {
            quantity.value++;
        }
    }

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
    <section class="mt-7 px-4">
        <div class="flex justify-center items-center">
            <BlurText
                text="Sony WHXM-4000"
                :delay="200"
                class-name="dark:text-white text-3xl md:text-4xl font-semibold"
                animate-by="words"
                direction="top"
                :threshold="0.1"
                root-margin="0px"
                :step-duration="0.35"/>
        </div>
    </section>
    <section class="px-4">
        <div class="relative md:flex md:justify-center">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" class="md:w-130">
                <path 
                    fill="#FD8C92" 
                    d="M40.8,-71.5C51.8,-64.4,58.8,-51.2,66.6,-38.2C74.5,-25.3,83.2,-12.6,84.4,0.7C85.5,14,79.1,27.9,70.7,40C62.3,52,52,62.1,39.9,70C27.8,78,13.9,83.7,-1.3,85.9C-16.5,88.2,-33,86.9,-44,78.4C-55.1,69.9,-60.7,54.1,-66.1,39.8C-71.5,25.5,-76.7,12.8,-77.6,-0.5C-78.6,-13.8,-75.2,-27.6,-68,-38.8C-60.8,-50,-49.8,-58.5,-37.8,-65.1C-25.8,-71.6,-12.9,-76.2,1,-77.9C14.9,-79.7,29.9,-78.7,40.8,-71.5Z" 
                    transform="translate(100 100)" />
            </svg>
            <img 
                :src="Headphones" 
                alt="Headphones" 
                class="w-70 hover:opacity-75 absolute top-17 right-18 md:top-30 md:right-140"/>
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
        <div class="mt-7 border-b border-gray-200 dark:border-slate-700 flex justify-between">
            <div>
                <h2 class="text-xl text-gray-600 dark:text-gray-300"> Sony WHXM-4000 </h2>
                <span class="text-red-500 font-extrabold text-2xl"> $6,000.00 </span>
            </div>
            <div class="flex justify-between items-center gap-x-4">
                <button 
                    @click="decrementQuantity()"
                    class="bg-white rounded-full px-4 py-2 cursor-pointer hover:opacity-75"> 
                        - 
                </button>
                <Counter
                    :value="quantity"
                    :places="[1]"
                    :fontSize="30"
                    :padding="5"
                    :gap="10"
                    textColor="red"
                    :fontWeight="900"
                    :gradientHeight="0"/>
                <button 
                    @click="incrementQuantity()"
                    class="bg-black dark:bg-blue-500 text-white rounded-full px-4 py-2 cursor-pointer hover:opacity-75"> 
                    + 
                </button>
            </div>
        </div>
        <div class="mt-4 border-b border-gray-200 dark:border-slate-700">
            <h4 class="text-lg font-light dark:text-white"> Description </h4>
            <p class="my-2 text-sm font-extralight dark:text-white">
                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
            </p>
        </div>
    </section>
    <section class="mt-7 px-4">
        <div>
            <h4 class="text-lg font-light dark:text-white"> Opiniones </h4>
        </div>
        <div class="flex justify-start items-start my-4 gap-x-3 border-b border-gray-200 dark:border-slate-700">
            <div class="bg-white border border-gray-200 p-2 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                </svg>
            </div>
            <div>
                <h4 class="dark:text-gray-400"> Valentina H. </h4>
                <p class="dark:text-white mb-3 font-extralight text-sm"> The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham. </p>
            </div>
        </div>
    </section>
    <section>
        <button class="fixed bottom-5 left-1/2 transform -translate-x-1/2 w-[70%] bg-red-500 text-white p-4 shadow-lg flex justify-center items-center gap-x-2 z-50 rounded-4xl cursor-pointer hover:opacity-75">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
            </svg> Agregar a carrito
        </button>
    </section>
</template>