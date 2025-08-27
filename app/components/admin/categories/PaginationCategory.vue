<script setup lang="ts">

    interface LinkProps {
        url: string | null
        label: string
        active: boolean
    }

    defineProps<{
        links: LinkProps[]
    }>()

    const emit = defineEmits<{
        (e: "change", page: number): void
    }>()

    const getPage = (url: string | null): number | null => {
        if(!url) return null
        const params = new URL(url).searchParams
        return Number(params.get("page"))
    }

</script>

<template>
    <nav class="flex gap-2 mt-4">
        <button
            v-for="(link, i) in links"
            :key="i"
            v-html="link.label"
            class="px-2.5 py-0.5 rounded-lg cursor-pointer hover:opacity-75 font-extralight text-sm"
            :class="link.active ? 'bg-blue-500 text-white' : 'bg-gray-50 border border-gray-200' "
            :disabled="!link.url"
            @click="() => { const p = getPage(link.url); if(p) emit('change', p) }"/>
    </nav>
</template>
