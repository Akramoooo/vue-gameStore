<template>
  <div class="flex flex-col items-center"> 
      <MyHeader />

      <RouterView class=" bg-white border rounded-2xl min-h-96 my-1"/>
      <myFooter />
  </div>
</template>

<script setup>
import MyHeader from './components/myHeader.vue';
import myFooter from './components/myFooter.vue';
import { provide, ref } from 'vue';




</script>

<style>

</style>
