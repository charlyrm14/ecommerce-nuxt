<script setup>
    import CartItem from '~/components/user/cart/CartItem.vue'
    import SectionHeader from '~/components/user/layouts/SectionHeader.vue';
</script>

<template>
    <SectionHeader 
        title="Mi carrito"/>

    <section class="mt-7 px-4">
        <CartItem/>
        <CartItem/>
    </section>

    <section class="mt-7 px-4">
        <div class="flex justify-between items-center border-b border-dashed border-gray-200 dark:border-dark-soft">
            <p class="dark:text-white text-xl mb-3"> 
                Subtotal 
                    <span class="block"> Descuento </span>
            </p>
            <p class="dark:text-white text-xl mb-3"> 
                $25.00  <span class="block"> $20.00 </span>
            </p>
        </div>
        <div class="flex justify-between items-center border-b border-dashed border-gray-200 dark:border-dark-soft">
            <p class="dark:text-white text-xl my-3"> Total </p>
            <p class="dark:text-white text-xl my-3"> $50.00 </p>
        </div>
    </section>

    <section class="mt-7 px-4">
        <div class="md:flex md:justify-end">
            <button class="w-full md:w-[30%] text-xl bg-red-500 text-white py-3 px-4 rounded-lg hover:opacity-75 cursor-pointer font-bold uppercase">
                Pagar ahora
            </button>
        </div>
    </section>

</template>
