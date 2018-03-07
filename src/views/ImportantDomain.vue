<template>
  <div>
    <el-row>
      <el-col :span="24">
        <div class="portlet box blue-ebonyclay">
          <div class="portlet-title">
            <div class="caption">
              <i class="el-icon-tickets"></i>重点关注域名监测业务分析
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
import IDchart from '@/components/ImportantDomain/IDchart'
export default {
  name: 'domainGrade',
  data () {
    return {
      currentRole: 'IDchart'
    }
  },
  components: {
    IDchart
  }
}
</script>

<style scoped>

</style>
