<template>
  <div>
    <el-row>
      <el-col :span="24">
        <div class="portlet box blue-ebonyclay">
          <div class="portlet-title">
            <div class="caption">
              <i class="el-icon-tickets"></i>域名信誉打分
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
import DGchart from '@/components/DomainGrade/DGchart'
export default {
  name: 'domainGrade',
  data () {
    return {
      currentRole: 'DGchart'
    }
  },
  components: {
    DGchart
  }
}
</script>

<style scoped>

</style>
