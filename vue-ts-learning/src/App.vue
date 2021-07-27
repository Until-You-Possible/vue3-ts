<template>
  <div class="container">
    {{count}}
    <button @click="increase">点击</button>
  </div>
</template>

<script lang="ts">
import { defineComponent , reactive, computed, toRefs, watch } from 'vue';

interface dataProps {
  count    : number,
  increase : () => void,
  double   : number

}

export default defineComponent({
  name: 'App',
  setup () {
      // const count  = ref(0);
      // const increase = () => {
      //   count.value++
      // }

    const data: dataProps = reactive({
      count    : 0,
      increase : () => { data.count++ },
      double   : computed(() => data.count * 2)
    });

    watch("需要监听的对象或者数组", (oldValue,newValue) => {
      // 监听执行的函数
    })

    const refData = toRefs(data);
      return {
        ...refData
      }
  }
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
