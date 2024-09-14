<template>
    <div class="flex flex-row justify-between w-4/6 py-3 max-lg:flex-col">
        <div class="flex flex-row bg-white rounded-2xl p-2 w-2/3">
            <img src="/search.svg" alt="">
            <input  type="text" @input="changeInput($event.target.value)" class="mx-5 outline-0 text-lg w-full" placeholder="search game...">
        </div>
        <div class="flex flex-row bg-white rounded-2xl p-2 w-56">
            <select class="outline-0 bg-white" @change="changeSelect($event.target.value)">
                <option value="">Все</option>
                <option value="title">По названию</option>
                <option value="price">По цене(возрастание)</option>
                <option value="-price">По цене(убывание)</option>
            </select>
        </div>
    </div>

</template>

<script setup>
import { inject, reactive, watch} from 'vue';

const params = reactive({
    inputData: '',
    selectData: ''
})

const changeInput = (event) => {
    params.inputData = event;
}


const changeSelect = (event) => {
    params.selectData = event;
}


const findData = inject('findData')

watch(params, () => {
    findData(params);
}, true);



</script>

<style>

</style>