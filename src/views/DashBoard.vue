<template>
  <div class="app-wrapper">
    <div class="page-header">
      <el-menu class="navbar" mode="horizontal" background-color="rgb(43, 54, 67)">
        <navbar></navbar>
      </el-menu>
    </div>
    <div class="clearfix">
    </div>
    <div class="page-container">
      <div class="page-sidebar-wrapper">
        <div class="page-sidebar navbar-collapse collapse">
          <layout :routes='routes'></layout>
        </div>
      </div>
      <div class="page-content-wrapper">
        <div class="page-content">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Layout from '@/components/Layout'
import Navbar from '@/components/Navbar'
export default {
  name: 'dashboard',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      routes: this.$store.state.routes,
      winHeight: window.innerHeight
    }
  },
  components: {
    Layout,
    Navbar
  },
  mounted () {
    const that = this
    that.getPageHeight()
    window.onresize = () => {
      return (() => {
        that.getPageHeight()
      })()
    }
  },
  watch: {
    winHeight (val) {
      if (!this.timer) {
        this.winHeight = val
        this.timer = true
        let that = this
        setTimeout(function () {
          console.log(that.winHeight)
          that.init()
          that.timer = false
        }, 400)
      }
    }
  },
  methods: {
    getPageHeight () {
      document.getElementsByClassName('page-content')[0].style.minHeight = (window.innerHeight - 79) + 'px'
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  @import "src/styles/mixin.scss";
  .app-wrapper{
    @include clearfix;
    .page-header, .page-sidebar-wrapper, .page-content-wrapper, .page-footer {
      transition: margin 0.3s;
    }
    .page-header{
      .navbar {
        width: 100%;
        margin: 0;
        border: 0px;
        padding: 0px;
        box-shadow: none;
        height: 46px;
        min-height: 46px;
        filter: none;
        background-image: none;
        background-color: rgb(43, 54, 67);
      }
      .navbar-fixed-top{
        z-index: 9995;
      }
    }
    .page-container{
      margin: 0px;
      padding: 0px;
      position: relative;
      .page-sidebar-wrapper{
        .page-sidebar{
          width: 235px;
          float: left;
          position: relative;
          margin-right: -100%;
          background-color: rgb(54, 65, 80);
          max-height: none !important;
        }
        .navbar-collapse.collapse{
          display: block!important;
          height: auto!important;
          padding-bottom: 0;
          overflow: visible!important;
        }
      }
      .page-content-wrapper{
        float: left;
        width: 100%;
        .page-content{
          margin-left: 235px;
          margin-top: 0px;
          min-height: 600px;
          padding: 25px 20px 10px 20px;
          background: #f1f3fa;
        }
      }
    }
  }
</style>
