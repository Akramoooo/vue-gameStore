<template>
  <div class="flex flex-row justify-between w-4/6 py-3">
    <MyCartList :cartItems="cartItems" :delCart="delCart"/>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import MyCartList from '../myCartList.vue';
import axios from 'axios';

const cartItems = ref([]);

const amount = ref(0);

  // const props = defineProps({
  //   gameCards: Array
  // })

const getCartItems = async () => {

  try {
    const { data } = await axios.get('https://990ae34c5b0f012c.mokky.dev/cart');
    cartItems.value = data;
    amount.value = cartItems.value.reduce((acc, item) => acc+=item.price);
  } catch (error) {
    console.log("Error: " + error);
  }

}

const delCart = async (cart) => {
  try {
    await axios.delete(`https://990ae34c5b0f012c.mokky.dev/cart/${cart.id}`)
    getCartItems();
    // console.log(props.gameCards);
  } catch (error) {
    console.log('Error: ' + error);
  }
}
 

onMounted(async () => {
  await getCartItems()
},)


</script>

<style>

</style>