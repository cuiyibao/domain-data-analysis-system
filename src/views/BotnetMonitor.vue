<template>
  <div>
    <el-row>
      <el-col :span="16" :offset="4">
        <div class="portlet box blue-ebonyclay">
          <div class="portlet-title">
            <div class="caption">
              <i class="el-icon-tickets"></i>呵呵
            </div>
          </div>
          <div class="portlet-body">
            <div>
              <a href=""><i class="fa fa-address-book" aria-hidden="true"></i></a>
            </div>
            <div>
              <a href=""><i class="fa fa-grav" aria-hidden="true"></i></a>
            </div>
            <div>
              {{haha}}
            </div>
            <div>
              <div>
                我的名字叫:{{mingzi}}
              </div>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>

export default {
  name: 'botnetMonitor',
  data () {
    var view = this;
    this.$ajax(this.GLOBAL.urls.axiosDemo)
    .then(function (response) {
      if (response.status == 200) {
        view.mingzi = response.data.data.mingzi;
        // view.mingzi = "12";
      }        
    })
    .catch(function (error) {
      console.log(error);
    });
    return {
      haha:this.GLOBAL.urls.haha,
      mingzi:"z"
    }
  },
  components: {}
}
</script>

<style scoped>
</style>
