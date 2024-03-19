<template>
  <div class="box1">
    <van-divider>分发票权</van-divider>
    <div class="host">
      <van-space>
        <p class="label"><van-icon name="manager" />主持人地址</p>
        <p class="address">{{ host }}</p>
      </van-space>
    </div>
    <div>
      <van-space>
        <p class="label"><van-icon name="friends-o" />投票人地址</p>
        <textarea class="votors" v-model="voteraddress" ></textarea>
      </van-space>
    </div>
    <div class="btn">
      <van-button block @click="mandata">开始分发选票</van-button>
    </div>
  </div>
</template>


<script setup >
import usewbe3 from '../hooks/usewbe3.js';
import {ref, onMounted} from 'vue'
const {web3,votecontract,getAccount}=usewbe3()
const host=ref("")
const voteraddress=ref("")

async  function gethost(){
    host.value=await votecontract.methods.host().call()
} 

async function mandata(){
    const arr=eval(voteraddress.value)
    const account =await getAccount()
    votecontract.methods.mandate(arr).send(
        {
            from:account        }
    ).on('receipt',()=>{
        console.log('send succes');
    })
    
}

onMounted:{
    gethost()
}
//["0x73f8C67741026f720146931526F061436f09309C","0x2a0FB4efE73b4EB78b124AcbcA4f277Cd76C9402"]
</script>

<style scoped>

</style>