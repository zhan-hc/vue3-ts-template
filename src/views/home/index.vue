<template>
  <div>
    <div>count: {{ counter.count }}</div>
    <div>doubleCount: {{ counter.doubleCount }}</div>
    <button @click="counter.increment">add + 1</button>
  </div>
  
</template>

<script lang='ts' setup>
import { getUserInfo } from "@/api/user";
import { useCounterStore } from "@/stores/counter";
import { onMounted } from "vue";

const counter = useCounterStore()

const getUser = async () => {
  await getUserInfo()
}

onMounted(() => getUser())

</script>

<style scoped lang='scss'>
  
</style>