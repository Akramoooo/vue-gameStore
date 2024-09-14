<template>
    <div class="mb-10">
        <h1 class="m-5 mb-0 text-3xl">Our Games</h1>
        <div class="grid sm:grid-cols-1  grid-rows-1 lg:grid-cols-3  2xl:grid-cols-4 md:grid-cols-2 drop-shadow-2xl">
            <div v-for="gameCard in gameCards" :key="gameCard.id">
                <Card
                 :image-url="gameCard.imageUrl"
                 :price="gameCard.price"
                 :title="gameCard.title"
                 :description="gameCard.description"
                 :isAdded="gameCard.isAdded"
                 :clickAdded="() => props.clickAdded(gameCard)"
                 />
            </div>

        </div>

    </div>
</template>

<script setup>
import Card from './Card.vue';

const props = defineProps({
    gameCards: Array,
    clickAdded: Function
});

</script>

<style>

</style>