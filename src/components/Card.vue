<template>
    <div
        class="flex flex-col bg-white transition justify-between w-60 min-h-72 hover:drop-shadow-xl hover:-translate-y-1 rounded-2xl border m-4">
        <img :src="imageUrl" class="rounded-t-2xl min-h-32 h-32" alt="">
        <div class="flex flex-row justify-between m-3">
            <p>{{ props.title }}</p>
            <p>{{ props.price }} $</p>
        </div>
        <div class="flex flex-col gap-3">
            <div class="flex flex-row justify-between">
                <button class="bg-slate-300 transition hover:bg-my-green w-3/6 rounded-md mx-2 hover:scale-95">Купить</button>
                <img :src="isAdded ? 'checked.svg' : 'plus.svg' " @click="props.clickAdded" class="transition cursor-pointer mx-2 " alt="В корзину"/>
            </div>
            <button class="transition hover:bg-blue-400 w-60 rounded-2xl p-1">Подробнее</button>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    imageUrl: String,
    price: Number,
    title: String,
    description: String,
    isAdded: Boolean,
    clickAdded: Function
});

</script>

<style>

</style>