<template>
  <div>
    <div class="aa" @click="getUserApi">api的调用</div>
  </div>
</template>

<script lang='ts' setup>
// import {defineComponent, reactive, toRefs} from 'vue'
import {getUser} from '../api/user'

const getUserApi = async () =>  {
  const [err, res] = await getUser({})
  console.log(res, err)

}
</script>

<style scoped lang='scss'>
  
</style>