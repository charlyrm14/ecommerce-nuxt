<script setup lang="ts">
    import Footer from '~/components/admin/layouts/Footer.vue';
    import Header from '~/components/admin/layouts/Header.vue';
    import Sidebar from '~/components/admin/layouts/Sidebar.vue';    
        
</script>

<template>
    <Sidebar/>
    <div class="flex flex-1 flex-col md:ml-64">
        <Header/>
        <main class="flex-1 min-h-0 overflow-y-auto p-6 bg-gray-100">
            <slot/>
        </main>
    </div>
    <Footer/>
</template>
