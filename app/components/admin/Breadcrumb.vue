<script setup lang="ts">

    interface BreadCrumbProps {
        main?: string;
        secondary?: string;
    }

    const props = withDefaults(defineProps<BreadCrumbProps>(), {
        main: 'Dashboard',
        secondary: 'Home'
    })

</script>

<template>
    <nav class="mb-4 text-sm text-gray-600" aria-label="Breadcrumb">
        <ol class="flex gap-2">
            <li>
                <a href="#" class="hover:underline"> {{ main }} </a>
            </li>
            <li> / </li>
            <li class="font-medium text-gray-800"> {{ secondary }} </li>
        </ol>
    </nav>
</template>
