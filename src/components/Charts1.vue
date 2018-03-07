<template>
  <div :id="id" style="width: 100%;height: 700px"></div>
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
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted () {
    this.$http.get('/static/chart1.json').then((response) => {
      this.initCharts(response.body)
    })
  },
  methods: {
    initCharts (data) {
      this.chart = echarts.init(document.getElementById(this.id))

      this.chart.setOption(
        {
          title: {
            text: '域名历史记录分析',
            left: 'center'
          },
          tooltip: {
            trigger: 'axis'
          },
          legend: {
            data: ['www.baidu.com', 'www.dasd.com'],
            left: 'center',
            top: '30px'
          },
          xAxis: {
            data: data.data1.map(function (item) {
              return item[0]
            })
          },
          yAxis: {
            splitLine: {
              show: false
            }
          },
          toolbox: {
            right: '200px',
            feature: {
              dataZoom: {
                show: false
              },
              restore: {
                show: false
              },
              saveAsImage: {}
            }
          },
          dataZoom: [{
            startValue: '2014-06-01'
          }, {
            type: 'inside'
          }],
          series: [{
            name: 'www.baidu.com',
            type: 'line',
            data: data.data1.map(function (item) {
              return item[1]
            })
          }, {
            name: 'www.dasd.com',
            type: 'line',
            lineStyle: {
              color: 'blue'
            },
            data: data.data2.map(function (item) {
              return item[1]
            })
          }]
        })
    }
  }
}
</script>

<style scoped>

</style>
