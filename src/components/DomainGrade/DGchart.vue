<template>
  <div id="DGCharts">
    <div style="text-align:center;">
      <input v-model="domainName" class="common-input" placeholder="域名"/>
      <button class="common-btn" @click="DGquery()" type="button">查询</button>
    </div>
    <div class="chartDiv">
      <div id="gauge" class="chartDiv-left" style="width:60%;height:700px;"></div>
      <div class="chartDiv-right" style="width:30%;">
        <div id="radar1" class="chartDiv-radar" style="width:100%;height:300px;"></div>
        <div id="radar2" class="chartDiv-radar" style="width:100%;height:300px;"></div>
      </div>
    </div>
  </div>
</template>

<script>
import echarts from 'echarts'
export default {
  props: {
    id: {
      type: String,
      default: 'chart'
    }
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      domainName: ''
    }
  },
  mounted () {
    this.initCharts()
    this.initCharts2()
  },
  methods: {
    DGquery () {
      alert('查询')
    },
    initCharts () {
      this.chart = echarts.init(document.getElementById('radar1'))
      this.chart2 = echarts.init(document.getElementById('radar2'))
      let option = {
        tooltip: {},
        radar: {
          name: {
            textStyle: {
              color: '#fff',
              backgroundColor: '#999',
              borderRadius: 3,
              padding: [3, 5]
            }
          },
          indicator: [
            {name: '销售（sales）', max: 6500},
            {name: '管理（Administration）', max: 16000},
            {name: '信息技术（Information Techology）', max: 30000},
            {name: '客服（Customer Support）', max: 38000},
            {name: '研发（Development）', max: 52000},
            {name: '市场（Marketing）', max: 25000}
          ]
        },
        series: [{
          name: '预算 vs 开销（Budget vs spending）',
          type: 'radar',
          data: [
            {
              value: [4300, 10000, 28000, 35000, 50000, 19000],
              name: '预算分配（Allocated Budget）'
            }
          ]
        }]
      }
      let option2 = {
        tooltip: {},
        radar: {
          name: {
            textStyle: {
              color: '#fff',
              backgroundColor: '#999',
              borderRadius: 3,
              padding: [3, 5]
            }
          },
          indicator: [
            {name: '销售（sales）', max: 6500},
            {name: '管理（Administration）', max: 16000},
            {name: '信息技术（Information Techology）', max: 30000},
            {name: '客服（Customer Support）', max: 38000},
            {name: '研发（Development）', max: 52000},
            {name: '市场（Marketing）', max: 25000}
          ]
        },
        series: [{
          name: '预算 vs 开销（Budget vs spending）',
          type: 'radar',
          data: [
            {
              value: [5000, 14000, 28000, 31000, 42000, 21000],
              name: '实际开销（Actual Spending）'
            }
          ]
        }]
      }
      this.chart.setOption(option)
      this.chart2.setOption(option2)
    },
    initCharts2 () {
      this.gauge_chart = echarts.init(document.getElementById('gauge'))
      let option = {
        tooltip: {
          formatter: '{a} <br/>{b} : {c}%'
        },
        series: [
          {
            name: '业务指标',
            type: 'gauge',
            detail: {formatter: '{value}'},
            data: [{value: 50, name: '信誉值'}]
          }
        ]
      }
      this.gauge_chart.setOption(option)
    }
  }
}
</script>

<style scoped>
.common-input{
  display: inline-block;
  width: 280px;
  height: 40px;
  padding: 0 15px;
  border: 1px solid #dcdfe6;
  border-radius: 4px;
  color: #606266;
  font-size: inherit;
  line-height: 1;
  outline: 0;
  background-color: #fff;
  background-image: none;
  -webkit-appearance: none;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-transition: border-color .2s cubic-bezier(.645,.045,.355,1);
  transition: border-color .2s cubic-bezier(.645,.045,.355,1);
}
.common-btn{
  display: inline-block;
  padding: 8px 20px;
  border: 1px solid transparent;
  border-radius: 4px;
  border-color: #409EFF;
  color: rgb(255,255,255);
  font-size: 14px;
  font-weight: 500;
  line-height: 1.42857143;
  text-align: center;
  background-image: none;
  background-color: #409EFF;
  white-space: nowrap;
  -ms-touch-action: manipulation;
  touch-action: manipulation;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-appearance: none;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  outline: 0;
  -webkit-transition: .1s;
  transition: .1s;
}
#DGCharts .chartDiv{
  width: 100%;
  margin-top: 16px;
}
#DGCharts .chartDiv:after{
  content: '';
  display: block;
  clear: both;
  width: 0;
}
#DGCharts .chartDiv .chartDiv-left{
  float: left;
  background-color: #F5EEF8;
}
#DGCharts .chartDiv .chartDiv-right{
  float: left;
}
#DGCharts .chartDiv .chartDiv-radar{
  margin: 0 0 16px 4px;
}
</style>
