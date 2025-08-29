<script setup lang="ts">

    import UserProfileImage from '~/assets/media/user.jpg'

    const emit = defineEmits(['closeFileModal'])

</script>

<template>
    <div>
        <div>
            <div class="w-full p-8 bg-gray-100 border border-dashed border-gray-300 rounded-lg">
                <div class="cursor-pointer">
                    <div class="flex justify-center items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-20 text-gray-300">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 16.5V9.75m0 0 3 3m-3-3-3 3M6.75 19.5a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z" />
                            </svg>
                    </div>
                    <div class="flex justify-center items-center">
                        <p class="text-center text-xs text-gray-500"> 
                            Suelta tus archivos aquí, <span class="underline text-pink-500"> o haz click para buscarlos </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <div class="my-6">
            <div>
                <h4 class="text-sm font-light text-gray-500"> Archivos cargados </h4>
            </div>
            <div class="border border-gray-200 px-3 pt-3 my-2 rounded-lg">
                <div class="flex justify-between items-center">
                    <div class="flex justify-start gap-x-2">
                        <div class="bg-gray-200 rounded-lg p-1">
                            <img 
                                :src="UserProfileImage" 
                                alt="Profile"
                                class="w-13 h-13 rounded-lg">
                        </div>
                        <p class="text-sm text-gray-700"> 
                            Profile.jpg
                                <span class="block text-xs text-gray-400"> 3MB | <span class="font-bold text-green-700"> 100% </span> </span>
                        </p>
                    </div>
                    <div>
                        <button class="text-gray-300 hover:text-red-500 cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                            </svg>
                        </button>
                    </div>
                </div>
                <div class="my-2 bg-blue-500 py-1 rounded-lg hover:opacity-75"></div>
            </div>
        </div>

    </div>
</template>
