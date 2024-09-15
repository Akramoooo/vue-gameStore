<template>
    <nav :class="'flex flex-row justify-between w-4/6 p-5 my-2 rounded-2xl' + headerTheme">
        <div class="flex flex-row gap-5">
            <RouterLink to="/" class="transition hover:text-slate-500">Home</RouterLink>
            <RouterLink to="/about" class="transition hover:text-slate-500">About</RouterLink>
        </div>
        <div class="flex ">
            <i @click="$emit('themeChanger', false)" class="fa fa-lightbulb-o transition hover:rotate-180 hover:text-yellow active:text-black cursor-pointer" style="font-size:24px"></i>
        </div>
        <div class="flex flex-row gap-7 items-center">

            <RouterLink to="/user/cart" class="flex flex-row gap-1 transition hover:text-slate-500">
                <img src="/cart.svg" alt="">
            </RouterLink>
            <RouterLink v-if="isUserExists" to="/user/profile" class="flex flex-row gap-2 transition hover:text-slate-500">
                <img src="/profile.svg" alt="">
                <span>Profile</span>
            </RouterLink>
            <RouterLink v-if="!isUserExists" to="/login/page" class="flex flex-row gap-2 transition hover:text-slate-500">
                <i class="fa fa-sign-in" style="font-size:22px; color:grey"></i>
                <span>Log in</span>
            </RouterLink>

        </div>
    </nav>
</template>

<script setup>
import { computed, watch } from 'vue';

const headerTheme = computed(() => {
    return props.Theme ?  ' bg-white  ' : ' bg-dark-green text-white'
})

const props = defineProps({
    Theme: Boolean
})


const isUserExists = computed(() => {
    return localStorage.getItem('name') ? true : false;
})

</script>

<style>

</style>