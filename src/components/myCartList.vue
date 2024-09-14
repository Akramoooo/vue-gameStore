<template>
  <div class="mb-10">
    <h2 class="m-3 text-2xl">Моя корзина</h2>
    <div v-for="cartItem in cartItems" :key="cartItem.id">
      <MyCart
        :title="cartItem.title"
        :price="cartItem.price"
        :imageUrl="cartItem.imageUrl"
        :description="cartItem.description"
      />
    </div>
  </div>
</template>

<script setup>
import MyCart from './myCart.vue';

  const props = defineProps({
    cartItems: Array
  })
</script>

<style>

</style>