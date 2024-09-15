<template>
  <div class="flex flex-row justify-between w-4/6 py-3">

    <button type="button" @click="logOut()">Log out</button>
  </div>

</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter()

const logOut = () => {
  localStorage.removeItem('name')
  localStorage.removeItem('email')

  router.push( { path : '/' } )
}

</script>

<style>

</style>