<template>
    <div class="box3">
    <van-divider>投票看板</van-divider>
    <van-cell :title="item.name" v-for="(item,index) in board" icon="shop-o">
      <template #right-icon>
        <van-button @click="vote(index)">{{ item.totalamount }}</van-button>
      </template>
    </van-cell>
  </div>
</template>

<script setup lang="js">
import usewbe3 from '../hooks/usewbe3.js';
import {ref,onMounted} from 'vue'
const {web3,votecontract,getAccount}=usewbe3()
const account=ref("")
 
async function vote(index){
    account.value= await getAccount() 
    await votecontract.methods.vote(index).send({
        from:account.value,}
    ).on('receipt',()=>{
        console.log('vote succes');
    })
}
const board=ref([])
async function getboardinfo(){
     board.value=await votecontract.methods.getboardinfo().call()
} 
onMounted(async()=>{
   await getboardinfo()
})
</script>

<style scoped>

</style>