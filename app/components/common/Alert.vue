<script setup lang="ts">

    import { typeAlertIcon, typeColorAlert } from '#imports';

    interface AlertProps {
        title?: string;
        description?: string;
        type?: 'success' | 'error' | 'warning' | 'info'
    }

    const props = withDefaults(defineProps<AlertProps>(), {
        title: 'Success !',
        description: 'Task completed successfully!',
        type: 'success'
    })

</script>

<template>
    <div 
        class="fixed top-4 left-1/2 w-[90%] sm:w-[50%] max-w-md transform -translate-x-1/2 z-50 px-4 py-3 rounded-lg shadow-xl animate-fade-in bg-white dark:bg-slate-900 transition-all border border-gray-100 dark:border-none"
        role="alert"
        aria-live="polite">

            <div class="flex justify-between items-center gap-x-12">
                <div class="flex items-start gap-x-4">
                    <div 
                        class="p-2 rounded-lg border border-gray-100"
                        :class="'bg-' + typeColorAlert(type) + '-100'">
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                fill="none" 
                                viewBox="0 0 24 24" 
                                stroke-width="1.5" 
                                stroke="currentColor" 
                                class="size-6"
                                :class="'text-' + typeColorAlert(type) + '-500'">
                                    <path 
                                        stroke-linecap="round" 
                                        stroke-linejoin="round" 
                                        :d="typeAlertIcon(type)" />
                            </svg>
                    </div>
                    <div>
                        <p class="text-base font-light"> 
                            {{ title }}
                                <span class="block text-xs text-gray-500"> {{ description }} </span> 
                        </p>
                    </div>
                </div>
                <button class="text-gray-500 cursor-pointer hover:text-red-500">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>

    </div>
</template>
