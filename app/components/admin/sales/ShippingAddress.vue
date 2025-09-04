<script setup lang="ts">

    const showContent = ref<boolean>(false)

</script>

<template>
    <div class="rounded-lg border border-gray-200 bg-white p-2 my-3">
        <div class="py-2 px-4 flex justify-between items-center">
            <h2 class="font-bold text-lg"> Dirección envío </h2>
            <button 
                class="cursor-pointer text-gray-500"
                @click="showContent = !showContent">
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke-width="1.5" 
                        stroke="currentColor" 
                        class="size-6">
                            <path 
                                stroke-linecap="round" 
                                stroke-linejoin="round" 
                                :d="showContent ? 'm4.5 15.75 7.5-7.5 7.5 7.5' : 'm19.5 8.25-7.5 7.5-7.5-7.5'" />
                    </svg>
            </button>
        </div>
        <div
            v-if="showContent"
            class="py-2 px-4 my-1">
                <div class="mb-3">
                    <p class="text-gray-400 font-light"> 
                        Unit 1/23 Hastings Road, Melbourne 3000, Victoria, Australia. </p>
                </div>
                <div>
                    <iframe
                        class="w-full h-full rounded-lg border-0"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.086730739681!2d-122.41941568468161!3d37.77492977975952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064d7e3c1c9%3A0xc8bda12d9e0b!2sSan%20Francisco%2C%20CA!5e0!3m2!1ses!2sus!4v1693875092856!5m2!1ses!2sus"
                        loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"
                        ></iframe>
                </div>
        </div>
    </div>
</template>
