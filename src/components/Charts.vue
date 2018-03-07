<template>
  <div ></div>
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
    this.$http.get('http://172.16.8.44:8188/domain-data-analysis-system/domainAssociationAnalysisController/associatedQuery?queryName=0.0.0.0').then((response) => {
      this.initCharts(response.body)
    })
  },
  methods: {
    initCharts (webkitDep) {
      this.chart = echarts.init(document.getElementById(this.id))
      let legData = []
      for (let i in webkitDep.categories) {
        legData.push(webkitDep.categories[i].name)
      }
      let option = {
        title: {
          text: '域名关联分析',
          left: 'center'
        },
        color: ['#CC3333', '#99CC00', '#3399CC', '#669900', '#6e7074', '#CCCC00', '#ca8622', '#bda29a', '#6e7074', '#546570', '#c4ccd3'],
        legend: {
          itemWidth: 35,
          data: legData,
          top: '30px'
        },
        toolbox: {
          right: '200px',
          feature: {
            dataZoom: {},
            restore: {},
            saveAsImage: {}
          }
        },
        series: [{
          type: 'graph',
          layout: 'force',
          animation: false,
          roam: true,
          label: {
            normal: {
              show: true,
              color: 'rgb(51, 51, 51)',
              position: 'right',
              formatter: '{b}'
            }
          },
          lineStyle: {
            color: 'rgb(121, 121, 121)'
          },
          draggable: true,
          data: webkitDep.nodes.map(function (node, idx) {
            node.id = idx
            return node
          }),
          categories: webkitDep.categories,
          symbolSize: 18,
          force: {
            edgeLength: [50, 200],
            repulsion: 1220,
            gravity: 0.5
          },
          edges: webkitDep.links
        }]
      }

      this.chart.setOption(option)
    }
  }
}
</script>

<style scoped>

</style>
