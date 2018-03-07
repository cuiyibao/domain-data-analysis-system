<template>
  <div>
    <el-row>
      <el-col :span="24">
        <div class="portlet box blue-ebonyclay">
          <div class="portlet-title">
            <div class="caption">
              <i class="el-icon-tickets"></i>域名关联分析
            </div>
          </div>
          <div class="portlet-body">
            <component :is="currentRole"></component>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import RAhart from '@/components/RelateAnalysis/RAhart'
export default {
  name: 'RelateAnalysis',
  data () {
    return {
      currentRole: 'RAhart'
    }
  },
  components: {
    RAhart
  }
}
</script>

<style scoped>

</style>
