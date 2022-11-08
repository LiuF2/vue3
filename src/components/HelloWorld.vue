<script setup>
// import {reactive, ref, watch} from 'vue'
import {onMounted, reactive, watch, watchEffect} from 'vue'
onMounted(()=>{
  console.log('sasd')
})
//
defineProps({
  msg: String
})
//#region
// let p= reactive({
//   name2:'aaa'
// })
// // ref 定义一个响应式数据 取值。value 处理对象 求助reactive
// // 返回
// const count = ref(0)
// // 用ref 会求助reactive函数（里封装了proxy）返回proxy对象
const obj = reactive({name:'张三',type:18})
// console.log(obj)
//  function click() {
//   p.name2='ssss'
//    console.log(p)
//  }
//#endregion
//    watch(count,(a,b)=>{
//      console.log('jinglail')
//      console.log(a,b)
//    })
let click= () =>{
  obj.type++
}

watch(obj,()=>{
  console.log('sasdas')
})
watchEffect(()=>{
  let xx = obj.type
  console.log('监听')
})
</script>

<template>
  <h1> msg </h1>
<!--  <h3>{{p.name2}}</h3>-->
<!--  <div class="card">-->
<!--    <button type="button" @click="count++">count is {{ count }}</button>-->
    <button type="button" @click="click">p is {{ obj.type }}</button>
<!--  </div>-->
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
