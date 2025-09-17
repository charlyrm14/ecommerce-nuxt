<script setup lang="ts">

    import BlurText from '~/components/common/BlurText.vue';
    import Counter from '~/components/common/Counter.vue';
    import ProductBox from '~/assets/media/product.png'
    import type { Product } from '~~/types/Product';
    import { useCounter } from '~/composables/useCounter';
    import type { ApiResponse } from '~~/types/ApiResponse';
    import { formatCurrency, isImage, sectionTabs } from '#imports';
    import { useFavoritesStore } from '~~/stores/favorites';
    import ShareProduct from '~/components/user/products/ShareProduct.vue';
    
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
    const tabs = ref<number>(1)
    const activeTab = ref<number>(1)

    const config = useRuntimeConfig();
            
    const { count, increment, decrement } = useCounter(1, stock)
    const { isOpen, open, close } = useModalManager()
    
    const favoritesStore = useFavoritesStore()
    
    const mainImage = computed(() =>{
        return product?.value?.files?.filter(prod => prod.variant === 'original' && prod.is_main === 1)
    })

    const thumbnails = computed(() => {
        return product?.value?.files?.filter(prod => prod.variant === 'thumbnail')
    })

    const toggleActiveTab = (id: number) => {
        activeTab.value = id
    }

</script>

<template>
    <section class="px-4 py-6">
        <div class="flex justify-between items-center">

            <NuxtLink 
                to="/"
                class="bg-white dark:bg-dark-soft border border-gray-200 dark:border-none dark:text-slate-300 p-2 rounded-full cursor-pointer hover:opacity-75">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                </svg>
            </NuxtLink>

            <button
                @click="open('shareModal')"
                class="bg-white dark:bg-dark-soft border border-gray-200 dark:border-none dark:text-slate-300 p-2 rounded-full cursor-pointer hover:opacity-75">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 8.25H7.5a2.25 2.25 0 0 0-2.25 2.25v9a2.25 2.25 0 0 0 2.25 2.25h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25H15m0-3-3-3m0 0-3 3m3-3V15" />
                    </svg>
            </button>

        </div>
    </section>
    
    <section class="bg-white dark:bg-dark-light py-4">
            <div class="flex justify-center my-4 dark:bg-d">
                <img 
                    v-if="mainImage?.[0] && isImage(mainImage?.[0]?.mime_type)"
                    :src="`${config.public.storageBase}/${mainImage?.[0]?.file_path}`" 
                    :alt="`${product?.name}-${mainImage?.[0]?.id}`"
                    class="w-50 md:w-60 cursor-pointer hover:opacity-75 drop-shadow-lg"/>
                <img 
                    v-else
                    :src="ProductBox" 
                    :alt="`${product?.name}-${product?.id}`"
                    class="w-50 md:w-60 cursor-pointer hover:opacity-75 drop-shadow-lg"/>
            </div>
            <div class="flex justify-center items-center gap-x-4 my-2">
                <div
                    v-if="thumbnails && thumbnails?.length > 0"
                    v-for="thumbnail in thumbnails"
                    :key="thumbnail?.id"
                    class="bg-gray-200 dark:bg-dark-soft p-1 rounded-lg cursor-pointer hover:opacity-75">
                        <img 
                            v-if=" thumbnail?.mime_type && isImage(thumbnail?.mime_type)"
                            :src="`${config.public.storageBase}/${thumbnail?.file_path}`" 
                            :alt="`${product?.name}-${thumbnail?.id}`"
                            class="w-17 md:w-20 hover:opacity-75"/>
                </div>
            </div>
    </section>

    <section class="mt-5 px-4">
        <div class="flex justify-between">
            <div>
                <div
                    v-if="product">
                        <client-only>
                            <BlurText
                                :text="product?.name"
                                :delay="200"
                                class-name="text-gray-600 dark:text-white text-2xl"
                                animate-by="words"
                                direction="top"
                                :threshold="0.1"
                                root-margin="0px"
                                :step-duration="0.35"/>
                        </client-only>
                </div>
                <span class="text-red-500 text-xl"> {{ formatCurrency(product?.price || "---") ?? '---' }} </span>
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

    <section class="my-2 px-4">
        <button 
            @click="favoritesStore.addProduct(product!)"
            class="inline-flex bg-white dark:bg-dark-soft rounded-full p-1 text-red-500 cursor-pointer hover:opacity-75">
                <svg
                    v-if="favoritesStore.existsInFavorites(product!)"
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 24 24" 
                    fill="currentColor" 
                    class="size-6">
                        <path 
                            d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
                </svg>
                <svg
                    v-else
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke-width="1.5" 
                    stroke="currentColor" 
                    class="size-6">
                        <path 
                            stroke-linecap="round" 
                            stroke-linejoin="round" 
                            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                </svg>
        </button>
    </section>


    <section class="mt-7 px-4">

        <div class="flex gap-x-3">
            <button
                v-for="tab in sectionTabs()"
                :key="tab.id"
                class="hover:opacity-75 cursor-pointer dark:text-white text-lg"
                :class="activeTab === tab.id ? 'border-b-2 border-blue-500 font-semibold' : 'font-extralight'"
                @click="toggleActiveTab(tab.id)">
                    {{  tab.title }}
            </button>
        </div>

        <div>
            <component
                :is="sectionTabs().find(tab => tab.id === activeTab)?.key"
                :description="product?.description"/>
        </div>
        
    </section>

    <section class="mt-7 px-4">
        <div class="md:flex md:flex-col md:justify-center items-center">
            <button class="w-full md:w-[40%] rounded-xl bg-black dark:bg-red-500 text-white cursor-pointer hover:opacity-75 py-4 shadow">
                Comprar ahora
            </button>
            <button class="w-full md:w-[40%] rounded-xl bg-white dark:bg-dark-extralight cursor-pointer hover:opacity-75 py-4 my-3 text-gray-700 dark:text-white border border-gray-200 dark:border-none">
                Agregar a  carrito
            </button>
        </div>
    </section>

    <ShareProduct
        v-if="isOpen('shareModal')"
        @closeShareModal="close"/>

</template>