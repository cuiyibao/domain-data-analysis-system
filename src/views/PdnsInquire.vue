<template>
  <div>
    <el-row>
      <el-col :span="16" :offset="4">
        <div class="portlet box blue-ebonyclay">
          <div class="portlet-title">
            <div class="caption">
              <i class="el-icon-tickets"></i>基础表格
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
import Table from '@/components/Table'
export default {
  name: 'pdnsInquire',
  data () {
    return {
      currentRole: 'Table'
    }
  },
  components: {
     Table
  }
}
</script>

<style scoped>

</style>
