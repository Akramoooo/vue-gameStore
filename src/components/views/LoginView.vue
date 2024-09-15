<template>
    <div class="w-4/6 max-md:w-full flex flex-col justify-center items-center">
        <h1 class="text-2xl my-5">Login page</h1>
        <p v-if="!error">{{ error }}</p>
        <form class="flex flex-col w-3/6 border-x p-8">
            <div class="w-full">
                <input type="text" class="border-b outline-none hover:border-b-black w-full rounded text-xl m-2"
                    v-model="Userdata.name" placeholder="name...">
            </div>
            <div class="w-full">
                <input type="password" class="border-b outline-none hover:border-b-black rounded w-full text-xl m-2"
                    v-model="Userdata.pass" placeholder="password...">
            </div>
            <button type="button" @click="loginUser()"
                class="border w-full rounded-md transition hover:bg-green  hover:text-white p-2 px-4 m-1">Login</button>
            <div class="mt-5">
                <p class="text-sm">Don't have account yet? <RouterLink to="/registr/page" class="text-my-blue border-b border-my-blue ">Click here</RouterLink>
                </p>
            </div>
        </form>
    </div>
</template>

<script setup>
    import axios from 'axios';
    import { reactive, ref } from 'vue';
import { useRouter } from 'vue-router';
    const Userdata = reactive({
        name: '',
        pass: ''
    })

    const router = useRouter()

    let error = ref('');

    const loginUser = async () => {
        try {
            const { data } = await axios.get('https://990ae34c5b0f012c.mokky.dev/users');
            const user = data.find(elem => elem.name == Userdata.name && elem.pass == Userdata.pass)
            if (user) {
                localStorage.setItem('name', user.name);
                localStorage.setItem('email', user.email);
                router.push({ path: '/' });
            }else{
                error.value = 'There is no user like this';
            }
        } catch (error) {
            console.log('Error ' + error);
        }
        // @click="$router.push({ path: '/'})"
    }
</script>

<style>

</style>