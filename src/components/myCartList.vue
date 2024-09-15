<template>
  <div class="mb-10 w-full">
    <h2 class="m-3 text-2xl">Моя корзина</h2>
    <div v-for="cartItem in cartItems" :key="cartItem.id">
      <MyCart
        :title="cartItem.title"
        :price="cartItem.price"
        :imageUrl="cartItem.imageUrl"
        :description="cartItem.description"
        :delCart="() => props.delCart(cartItem)"
      />
    </div>
    <div class="flex flex-row justify-between px-7">
      <button type="button" class="bg-my-green w-4/5 rounded-xl">Купить</button>
        <div>
          <p>Итого: <span class="font-bold">1000$</span></p>
          <p>Налог 10% :<span class="font-bold"> 100$</span></p>
        </div>
    </div>
  </div>
</template>

<script setup>
import MyCart from './myCart.vue';

  const props = defineProps({
    cartItems: Array,
    delCart: Function
  })
</script>

<style>

</style>