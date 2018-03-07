<template>
  <el-menu :default-active="$route.path" router
           class="el-menu-vertical-demo"
           background-color="rgb(54, 65, 80)"
           text-color="rgb(180, 188, 200)"
           active-text-color="#fff"
           active-background-color="rgb(28, 175, 154)">
    <template v-for="item in routes[0].children">
      <router-link :to="item.path" :key="item.id">
        <el-menu-item :index="item.path">
          <i :class="item.icon"></i>
          <span slot="title">{{item.name}}</span>
        </el-menu-item>
      </router-link>
    </template>
  </el-menu>
</template>

<script>
export default {
  props: {
    routes: {
      type: Array
    }
  }
}
</script>

<style scoped>
.el-menu-item, .el-submenu__title{
  height: 48px!important;
  line-height: 48px!important;
}
.el-menu-item:focus, .el-menu-item:hover,
.el-menu-item:active {
  background-color: rgb(28, 175, 154)!important;
}
.el-menu-item.is-active{
  background-color: rgb(28, 175, 154)!important;
}
</style>
