<script setup lang="ts">
    import Notifications from '~/components/user/Notifications.vue';
    import SectionHeader from '~/components/user/SectionHeader.vue';
    import ChangeTheme from '~/components/user/ChangeTheme.vue';
    
</script>

<template>
    <SectionHeader title="Mi Perfil"/>
    <section class="mt-14 px-4">
        <ChangeTheme/>
        <Notifications/>
    </section>
    <section class="mt-7 px-4 py-2 cursor-pointer hover:bg-gray-200 dark:hover:bg-dark-soft hover:rounded-lg">
        <NuxtLink
            to="/payments-methods" 
            class="border-b border-gray-300 dark:border-dark-extralight">
            <div class="flex justify-between items-center">
                <div class="flex justify-start items-center gap-x-4 mb-3">
                    <div class="dark:text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z" />
                        </svg>
                    </div>
                    <div>
                        <h4 class="dark:text-white text-base"> Métodos de pago </h4>
                        <span class="dark:text-white text-xs md:text-sm font-extralight"> Administra tus tarjetas </span>
                    </div>
                </div>
                <button 
                    class="bg-white dark:bg-dark-extralight border border-gray-200 dark:border-none p-1.5 rounded-full dark:text-white cursor-pointer hover:opacity-75">
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
                                    d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                        </svg>
                </button>
            </div>
        </NuxtLink>
    </section>
</template>
