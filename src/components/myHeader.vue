<template>
    <nav class="flex flex-row justify-between w-4/6 bg-white p-5 my-2 border rounded-2xl">
        <div class="flex flex-row gap-5">
            <RouterLink to="/" class="transition hover:text-slate-500">Home</RouterLink>
            <RouterLink to="/about" class="transition hover:text-slate-500">About</RouterLink>
        </div>
        <div class="flex flex-row gap-7">

            <RouterLink to="/user/cart" class="flex flex-row gap-2 transition hover:text-slate-500">
                <img src="/cart.svg" alt="">
                <span>1200 $</span>
            </RouterLink>
            
            <RouterLink to="/user/profile" class="flex flex-row gap-2 transition hover:text-slate-500">
                <img src="/profile.svg" alt="">
                <span>Profile</span>
            </RouterLink>

        </div>
    </nav>
</template>

<script setup>

</script>

<style>

</style>