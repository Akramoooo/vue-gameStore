<template>
    <div :class="'footer flex max-sm:flex-col  flex-row justify-between items-center rounded-xl min-h-20 my-1 p-2 w-4/6 ' + headerTheme ">
        <ul class="flex flex-row gap-3">
            <li class="transition hover:-translate-y-1">
                <a href="#"><i class="fa fa-github transition hover:text-red" style="font-size:36px"></i></a>
            </li>
            <li class="transition hover:-translate-y-1">
                <a href="#"><i class="fa fa-telegram transition hover:text-red" style="font-size:36px"></i></a>
            </li>
            <li class="transition hover:-translate-y-1">
                <a href="#"><i class="fa fa-vk transition hover:text-red" style="font-size:36px"></i></a>
            </li>
        </ul>

        <div>
            <p>Made By Akramooo</p>
        </div>

        <ul class="text-xs">
            <li>Califfornia H.Johnson's 1945.</li>
            <li>&#169; All rights protected.</li>
        </ul>
    </div>
</template>

<script setup>
import { computed } from 'vue';


const headerTheme = computed(() => {
    return props.Theme ?  ' bg-white  ' : ' bg-dark-green text-white'
})

const props = defineProps({
    Theme: Boolean
})

</script>

<style>
</style>