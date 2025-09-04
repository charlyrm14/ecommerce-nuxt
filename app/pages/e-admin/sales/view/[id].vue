<script setup lang="ts">
    import Breadcrumb from '~/components/admin/layouts/Breadcrumb.vue';
    import CustomerDetail from '~/components/admin/sales/CustomerDetail.vue';
    import DocumentsOrder from '~/components/admin/sales/DocumentsOrder.vue';
    import OrderDetail from '~/components/admin/sales/OrderDetail.vue';
    import OrderInformation from '~/components/admin/sales/OrderInformation.vue';
    import ProgressOrder from '~/components/admin/sales/ProgressOrder.vue';
    import ShippingAddress from '~/components/admin/sales/ShippingAddress.vue';
    
    
    definePageMeta({
        layout: 'admin'
    })

</script>

<template>
    <div class="flex justify-between items-center">
        <Breadcrumb
            main="Ordenes"
            secondary="Orden #12922"/>
        
        <button class="px-4 py-2 bg-black text-white font-light rounded-lg cursor-pointer hover:opacity-75">
            Editar orden
        </button>

    </div>

    <section class="mt-7">
        <div class="flex flex-col gap-6 md:flex-row">
            <aside class="md:basis-[25%]">

                <OrderDetail/>
                <CustomerDetail/>
                <DocumentsOrder/>
                <ShippingAddress/>
                
            </aside>
            <main class="md:basis-[75%]">

                <ProgressOrder/>
                <OrderInformation/>

            </main>
        </div>
    </section>   
    
</template>
