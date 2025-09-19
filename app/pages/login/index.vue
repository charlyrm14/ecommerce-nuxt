<script setup lang="ts">
    import LoginForm from '~/components/login/LoginForm.vue';
    import RegisterForm from '~/components/login/RegisterForm.vue';
    
    const tabs = ref<number>(1)

</script>

<template>
    <section>
        <div class="flex items-center justify-center min-h-screen">
            <div class="bg-white dark:bg-dark-light rounded-lg shadow-xl p-10 max-w-lg w-full md:p-12">
                <div class="flex justify-center items-center gap-x-2">
                    <div class="bg-gray-100 dark:bg-dark-extralight p-2 rounded-4xl">
                        <button
                            @click="tabs = 1" 
                            class="px-5 py-3 cursor-pointer text-lg"
                            :class="tabs === 1 ? 'bg-red-500 text-white rounded-4xl' : 'text-gray-500 font-light'"> 
                                Login 
                        </button>
                        <button 
                            @click="tabs = 2"
                            class="px-5 py-3 cursor-pointer text-lg"
                            :class="tabs === 2 ? 'bg-red-500 text-white rounded-4xl' : 'text-gray-500 font-light'"> 
                                Registro 
                        </button>
                    </div>
                </div>
                <div>
                    <div v-if="tabs === 1">
                        <LoginForm/>
                    </div>
                    <div v-else>
                        <RegisterForm/>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
