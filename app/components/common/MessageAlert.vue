<script setup lang="ts">

    import { typeAlertIcon, typeColorAlert } from '#imports';
    
    interface MessageAlertProps {
        title?: string;
        description?: string;
        type?: 'success' | 'error' | 'warning' | 'info'
    }

    const props = withDefaults(defineProps<MessageAlertProps>(), {
        title: 'Success !',
        type: 'success'
    })

</script>

<template>
    <div
        class="my-3 p-4 flex items-center gap-x-3 rounded-lg w-full"
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
            <p 
                class="text-xs font-light"
                :class="'text-' + typeColorAlert(type) + '-500'"> {{ title }} </p>
    </div>
</template>
