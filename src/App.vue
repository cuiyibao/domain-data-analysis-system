<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import DashBoard from '@/views/DashBoard'
export default {
  name: 'App',
  data () {
    return {
      currentRole: 'DashBoard'
    }
  },
  components: {
    DashBoard
  }
}
</script>

<style lang="scss">
@import './styles/index.scss'; // 全局自定义的css样式
</style>
