<template>
  <div class="flex flex-row justify-between w-4/6 py-3">
    <MyCartList :cartItems="cartItems"/>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import MyCartList from '../myCartList.vue';
import axios from 'axios';

const cartItems = ref([]);

const amount = ref(0);


const getCartItems = async () => {

  try {
    const { data } = await axios.get('https://990ae34c5b0f012c.mokky.dev/cart');
    cartItems.value = data;
    amount.value = cartItems.value.reduce((acc, item) => acc+=item.price);
  } catch (error) {
    console.log("Error: " + error);
  }

}


onMounted(async () => {
  await getCartItems()
},)


</script>

<style>

</style>