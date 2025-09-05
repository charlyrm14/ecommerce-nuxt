<script setup lang="ts">

    interface SectionHeaderProps {
        link?: string;
        title?: string;
    }

    const props = withDefaults(defineProps<SectionHeaderProps>(), {
        link: '/',
        title: 'New section'
    })

</script>

<template>
    <section class="mt-7 px-4">
        <div class="flex justify-start items-center mt-6">
            <div class="flex justify-start w-[5%]">
                <NuxtLink 
                    :to="link"
                    class="bg-white p-2 rounded-full border border-gray-200 cursor-pointer hover:opacity-75">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                        </svg>
                </NuxtLink>
            </div>
            <div class="flex justify-center w-[95%]">
                <h1 class="text-3xl font-bold dark:text-white"> {{ title }} </h1>
            </div>
        </div>
    </section>
</template>