

<template>
  <div>
  <nav class="header">投票系统</nav>
  <main><router-view></router-view></main>
  <van-tabbar route v-model="active" active-color="#ee742f">
   
  <van-tabbar-item  to="/" icon="share">分发票权</van-tabbar-item>
  <van-tabbar-item to="/account" icon="contact">账户信息</van-tabbar-item>
  <van-tabbar-item to="/board" icon="label">投票看板</van-tabbar-item>
</van-tabbar>
  </div>
</template>

<script setup lang="js">
import {ref} from 'vue'
const active=ref(0)

</script>

<style scoped >
.header{
  height: 44px;
  background-color: #ee742f;
  color: aliceblue;
  text-align: center;
  line-height:44px;
}
</style>
<style lang="less">
html,
body{
  margin: 0;
  padding: 0;
  overflow: hidden;
}
</style>