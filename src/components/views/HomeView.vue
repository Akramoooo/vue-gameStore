<template>

  <div class=" w-4/6">
    <mySearch />
    <CardList :game-cards="gameCards" :click-added="clickAdded"/>
  </div>
</template>

<script setup>
import { onMounted, provide, ref,  emit} from 'vue';
import axios from 'axios';


import CardList from '../CardList.vue';
import mySearch from '../mySearch.vue';



const gameCards = ref([]);

const amount = ref(0);

// emit('gameCards', gameCards)


const getGameCards = async () => {
  try {
    const { data } = await axios.get('https://990ae34c5b0f012c.mokky.dev/games');
    gameCards.value = data;
  } catch (error) {
    console.log("Error:  " + error);
  }
}

const clickAdded = async (card) => {
  const params = {
    'ParentId': card.id,
    'title': card.title,
    'price': card.price,
    'description': card.description,
    'imageUrl': card.imageUrl
  }
  try {
    if (!card.isAdded) {
      await axios.patch(`https://990ae34c5b0f012c.mokky.dev/games/${card.id}`, { 'isAdded': true });
      const { data } = await axios.post(`https://990ae34c5b0f012c.mokky.dev/cart`, params);

      gameCards.value = gameCards.value.map(item => {
        if (item.id !== card.id) {
          return item
        }
        return {
          ...item,
          isAdded: true
        }
      })
    }else{
      const { data } = await axios.get('https://990ae34c5b0f012c.mokky.dev/cart');
      const cartId = data.find(elem => elem.ParentId === card.id);
      await axios.patch(`https://990ae34c5b0f012c.mokky.dev/games/${card.id}`, { 'isAdded': false });
      await axios.delete(`https://990ae34c5b0f012c.mokky.dev/cart/${cartId.id}`);
      gameCards.value = gameCards.value.map(item => {
        if (item.id !== card.id) {
          return item
        }
        return {
          ...item,
          isAdded: false
        }
      })
    }
    
  } catch (error) {
    console.log("Error: " + error);
  }finally{
    checkCartAmount();
    console.log(amount.value);
  }
}



const checkCartAmount = () => {
  amount.value = gameCards.value.reduce((acc, item) => {
    if (item.isAdded) {
      acc += item.price;
    }
    return acc;
  }, 0)
}

const findData =  async (information) => {
  const params = {
      sortBy: information.selectData !== '' ? 'sortBy=' + information.selectData : '',
      title: information.inputData !== '' ? 'title=*' + information.inputData + '*' : '' 
  }

  try {
    const { data } = await axios.get(`https://990ae34c5b0f012c.mokky.dev/games?${params.sortBy}&${params.title}`)
    gameCards.value = data;
  } catch (error) {
    console.log("Error:" + error);
  }
}

provide('findData', findData);

onMounted(async () => {
  await getGameCards();
},
);

// watch(props.removedCart, () => {
//   gameCards.value = gameCards.value.map(gameCard => {
//     if (gameCard.id === props.removedCart.ParentId) {
//       console.log('Success');
      
//       return {
//         ...gameCard,
//         isAdded: false
//       }
//     }
//     console.log('Success');
      
//     return{
//       gameCard
//     }
//   })
// }, true)

</script>

<style>

</style>