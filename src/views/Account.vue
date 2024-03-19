<template>
   <div class="box2">
    <van-divider>账户信息</van-divider>
    <van-space>
      <p class="label">当前账户</p>
      <p class="address">{{ account }}</p>
    </van-space>
    <br />
    <van-space>
      <p class="label">账户票数</p>
      <p class="address">{{ voterinfo.amount }}</p>
    </van-space>
    <br />
    <van-space>
      <p class="label">委托账户</p>
      <p class="address"> {{ voterinfo.delegator }} </p>
    </van-space>
    <br />
    <van-space>
      <p class="label">是否已投票</p>
      <p class="address">{{ voterinfo.isvoted }}</p>
    </van-space>
    <br />
    <van-space>
      <p class="label">投票ID</p>
      <p class="address">{{ voterinfo.targetid }}</p>
    </van-space>
    <br />

    <div class="btn">
      <van-cell-group inset>
        <van-field
          v-model="delegatorAddress"
          label="受托人地址"
          placeholder="请输入受托人地址"
        />
      </van-cell-group>
      <van-button block @click="delegate">委托他人代投</van-button>
    </div>
  </div>
</template>

<script setup >
import usewbe3 from '../hooks/usewbe3.js';
import {ref,onMounted} from 'vue'
const {web3,votecontract,getAccount}=usewbe3()
const voterinfo=ref({})
const account=ref("")

async function getvoterinfo(){
    account.value=await getAccount()
    voterinfo.value=await votecontract.methods.voters(account.value).call()
}

onMounted(async()=>{await getvoterinfo();
 console.log(voterinfo)})
  
</script>

<style scoped>

</style>