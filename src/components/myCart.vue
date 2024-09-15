<template>
    <div
        class="card flex flex-row justify-between m-6 p-2 gap-5 items-center border border-slate-300 rounded-xl shadow-md transition hover:shadow-xl">
        <div class="flex gap-5 w-1/3">
            <img :src="`/` + props.imageUrl" class="w-full rounded" alt="battlefield">
            <div class="flex flex-col">
                <p><span>{{ props.price }}</span>$</p>
                <p class="w-60">{{ props.description.substring(0, props.description.substring(0, 30).lastIndexOf('')) }} ...</p>
            </div>
        </div>
        <i @click="props.delCart()" class="fa fa-trash-o transition rounded-md hover:bg-red  p-1" style="font-size:30px"></i>
    </div>
</template>

<script setup>
    const props = defineProps({
        title: String,
        price: Number,
        imageUrl: String,
        description: String,
        delCart: Function
    })
</script>

<style>

</style>