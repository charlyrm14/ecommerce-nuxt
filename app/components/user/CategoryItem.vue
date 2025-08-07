<script setup lang="ts">

    interface CategoryItemProps {
        name?: string;
    }

    const props = withDefaults(defineProps<CategoryItemProps>(), {
        name: 'Electrónica'
    })

</script>

<template>
    <div class="dark:bg-dark-extralight p-4 rounded-xl cursor-pointer hover:opacity-75">
        <div class="flex flex-col">
            <div class="dark:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-10">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 20.25h12m-7.5-3v3m3-3v3m-10.125-3h17.25c.621 0 1.125-.504 1.125-1.125V4.875c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125Z" />
                </svg>
            </div>
            <div class="mt-2">
                <h2 class="dark:text-white font-extrabold"> {{ name }} </h2>
            </div>
        </div>
    </div>
</template>
