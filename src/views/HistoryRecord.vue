<template>
  <div>
    <el-row>
      <el-col :span="24">
        <div class="portlet box blue-ebonyclay">
          <div class="portlet-title">
            <div class="caption">
              <icon name="arrows"></icon>域名历史记录
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
import HRchart from '@/components/HistoryRecord/HRchart'
export default {
  name: 'HistoryRecord',
  data () {
    return {
      currentRole: 'HRchart'
    }
  },
  components: {
    HRchart
  }
}
</script>

<style scoped>

</style>
