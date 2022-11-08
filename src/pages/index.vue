<template>
  <h1>index</h1>
</template>
<script setup>
let token = localStorage.getItem('token')
console.log(token)
if(!token){
  console.log('token过期')
}
</script>
