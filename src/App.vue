<template>
  <div class="flex flex-col items-center"> 
      <MyHeader @themeChanger="changeTheme()" :Theme="Theme" />
      
      <RouterView class=" bg-white border rounded-2xl min-h-96 my-1"/>
      <myFooter :Theme="Theme" />
  </div>
</template>

<script setup>
import MyHeader from './components/myHeader.vue';
import myFooter from './components/myFooter.vue';
import { provide, ref } from 'vue';

let Theme = ref(true)


const changeTheme = () => {
  if (Theme.value) {
    Theme.value = false
    document.querySelector('body').style.backgroundColor = 'rgb(49, 41, 65)'
  }else{
    Theme.value = true
    document.querySelector('body').style.backgroundColor = 'rgb(214, 245, 193)'
  }
  localStorage.setItem('theme', Theme.value)
}
</script>

<style>

body{
    min-height: 100vh;
    background-color: rgb(214, 245, 193);
}

</style>
