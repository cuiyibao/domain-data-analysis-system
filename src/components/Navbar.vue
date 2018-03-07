<template>
  <div>
    <div class="page-logo">
      <a>
        <img src="../assets/logo1.png" alt="logo" class="logo-default">
      </a>
    </div>
    <div class="top-menu">
      <ul class="nav navbar-nav fr">
        <li class="dropdown dropdown-user">
          <a id="dropdown-menu-btn" class="dropdown-toggle" @click="menuChange">
            <img alt="" class="img-circle" src="../assets/avatar3_small.jpg">
            <span class="username username-hide-on-mobile"> Nick </span>
            <i class="el-icon-arrow-down"></i>
          </a>
          <ul id="dropdown-menu-content" class="dropdown-menu dropdown-menu-default" v-show="menuShow">
            <li>
              <a href="#">
                <i class="el-icon-share"></i> 个人信息修改 </a>
            </li>
            <li>
              <a href="#">
                <i class="el-icon-share"></i> 帮助手册 </a>
            </li>
            <li>
              <a href="#">
                <i class="el-icon-share"></i> 登出 </a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'navbar',
  data () {
    return {
      menuShow: false
    }
  },
  created () {
    let body = document.querySelector('body')
    const that = this
    body.addEventListener('click', (e) => {
      let hasClass = false
      for (let i in e.path) {
        if (e.path[i].className === 'top-menu') {
          hasClass = true
        }
      }
      if (!hasClass) {
        that.menuShow = false
      }
    }, false)
  },
  methods: {
    menuChange () {
      this.menuShow ? this.menuShow = false : this.menuShow = true
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.page-logo {
  float: left;
  display: block;
  width: 235px;
  height: 46px;
  padding-left: 20px;
  padding-right: 20px;
  .logo-default {
    margin: 16px 0 0 0;
  }
}
.top-menu{
  margin: 0;
  padding: 0;
  float: right;
  .nav{
    list-style: none;
  }
  .navbar-nav{
    padding: 0;
    margin-right: 20px;
    display: block;
    li.dropdown{
      margin: 0px;
      padding: 0px 4px;
      height: 46px;
      line-height: 46px;
      display: inline-block;
      position: relative;
      .dropdown-toggle{
        padding: 14px 6px 12px 8px;
        position: relative;
        display: block;
        line-height: 20px;
        img{
          float: left;
          margin-top: -5px;
          margin-right: 5px;
          height: 29px;
          display: inline-block;
          border-radius: 50% !important;
        }
        .username{
          display: inline-block;
          font-size: 13px;
          font-weight: 300;
          color: rgb(198, 207, 218);
        }
        i{
          display: inline-block;
          margin-top: 5px;
          margin: 0;
          font-size: 13px;
          color: rgb(198, 207, 218);
        }
      }
      .dropdown-toggle:hover{
        background-color: rgb(63, 79, 98);
      }
    }
  }
}
</style>
