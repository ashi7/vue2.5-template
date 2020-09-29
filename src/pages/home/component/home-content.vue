<!--
 * @Descripttion:
 * @version:
 * @Author: huangyueshi
 * @Date: 2020-07-06 15:26:08
 * @LastEditors: huangyueshi
 * @LastEditTime: 2020-07-28 15:33:47
-->
<template>
  <div>
    Home Content
    <div>
      233
    </div>
    <!-- <slot></slot> -->
  </div>
</template>

<script>
import Api from '@/service/api/index'
const ApiIndex = new Api();
export default {
  name: 'HomeContent',
  mounted() {
    this.test();
  },
  methods: {
    async test () {
      const test = await ApiIndex.getData();
      // const post = await ApiIndex.postData();
      console.log(test);
      // console.log(post);
    }
  },
}
</script>


<style lang="scss" scoped>

</style>
