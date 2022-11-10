<template>
  <div class="home">
    <div>count: {{count}}</div>
    <button @click="add">add</button>
    <button @click="minue">minue</button>
  </div>
</template>

<script setup>
import useCounter from '@/hook/useCounter'
const {count, add, minue} = useCounter()

</script>
<style lang="scss" scoped>
</style>
