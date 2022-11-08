<template>
  <h1>login</h1>
  <input type="text" v-model="prson.username">
  <input type="text" v-model="prson.password">
  <button @click="send">登录</button>
</template>

<script setup>
import {login} from "../../utils/request.js";
import {createApp, reactive} from "vue";
import {useRouter} from "vue-router";
const router = useRouter()
// let username='admin'
// let password = '123456'
let prson = reactive({
  username:'admin',
  password : '123456'
})
let send =()=>{
  login({username:prson.username,password:prson.password})
      .then((res)=>{
    if(res.status==200){
      router.push({ path: 'index' })
      console.log(res)
      localStorage.setItem('token',res.data)
    }else {
      console.log(res)
    }
  }).catch(err=>{
    console.log(err)
  })

}
</script>
