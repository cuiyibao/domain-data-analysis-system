<template>
  <div>
    <el-button type="text" @click="showFlag=true">新 建</el-button>
    <Form1 :showFlag="showFlag" v-on:close="close"/>
  </div>
</template>

<script>
import Form1 from '@/components/Form1'
export default {
  name: 'dnsStorage',
  data () {
    return {
      currentRole: 'Form1',
      showFlag: false
    }
  },
  components: {
    Form1
  },
  methods: {
    close: function (data) {
      this.showFlag = data
    }
  }
}
</script>

<style scoped>

</style>
