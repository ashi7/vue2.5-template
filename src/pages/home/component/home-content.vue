<!--
 * @Descripttion:
 * @version:
 * @Author: huangyueshi
 * @Date: 2020-07-06 15:26:08
 * @LastEditors: huangyueshi
 * @LastEditTime: 2020-07-22 18:05:28
-->
<template>
  <div>
    Home Content
    <!-- <slot></slot> -->
  </div>
</template>

<script>
import Api from '@/service/api/index'
const ApiIndex = new Api();
export default {
  name: 'HomeContent',
  mounted() {
    this.test()
  },
  methods: {
    async test () {
      const test = await ApiIndex.getData()
      console.log(test);
    }
  },
}
</script>


<style lang="scss" scoped>

</style>
