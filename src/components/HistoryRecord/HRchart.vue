<template>
  <div id="HRchart">
    <div>
      <input v-model="domainName" class="common-input" placeholder="域名"/>
      <button @click="HRquery()" class="common-btn" type="button">添加</button>
    </div>
    <div class="container">
      <ul class="domain-list">
        <li v-for="item in domainList" :key="item"> {{item}} <i @click="HRremove(item)" class="el-icon-delete"></i></li>
      </ul>
      <div :id="id" style="float:right;width:80%;height:700px"></div>
      <div style="clear:both;"></div>
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
      domainName: '',
      domainList: []
    }
  },
  mounted () {},
  methods: {
    HRquery () {
      let domainName = this.domainName
      if (domainName) {
        if (this.domainList.length < 10) {
          if (this.domainList.indexOf(domainName) === -1) {
            this.domainList.push(domainName)
            // 发请求
            this.initCharts(this.domainList.toString())
          }
        } else {
          alert('查询的域名数已达上限10！')
        }
      }else{
        alert('请输入域名！')
      }
    },
    HRremove (item) {
      var indx = this.domainList.indexOf(item)
      if (indx > -1) {
        this.domainList.splice(indx, 1)
      }
    },
    initCharts (queryNames) {
      console.log(queryNames)
      // this.$http.get('/static/json/HRchart.json', {
      this.$http.post('http://172.16.8.44:8188/domain-data-analysis-system/domainHistoryRecordAnalysisController/domainHistoryRecordAnalysisQuery?queryNames=' + queryNames).then((resp) => {
        let data = resp.body
        if (data) {
          if (data.seriesData && data.seriesData.length > 0) {
            let legendData = []
            for (var i = 0; i < data.seriesData.length; i++) {
              data.seriesData[i].type = 'line'
              legendData.push(data.seriesData[i].name)
            }
            this.chart = echarts.init(document.getElementById(this.id))
            let option = {
              title: {
                text: '域名历史记录分析',
                left: 'center'
              },
              tooltip: {
                trigger: 'axis'
              },
              legend: {
                data: legendData,
                left: 'center',
                top: '30px'
              },
              xAxis: {
                data: data.xData
              },
              yAxis: {
                splitLine: {
                  show: false
                }
              },
              toolbox: {
                right: '100px',
                feature: {
                  saveAsImage: {}
                }
              },
              dataZoom: [{
                startValue: data.xData[0]
              }, {
                type: 'inside'
              }],
              series: data.seriesData
            }
            this.chart.setOption(option)
          }
        }
      })
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
#HRchart .container{
  WIDTH: 100%;
}
#HRchart .domain-list{
  float: left;
  width: 18%;
  max-height: 680px;
  margin-top: 20px;
  padding-left: 0;
  font-size: 14px;
  overflow-y: auto;
}
#HRchart .domain-list>li{
  width: 100%;
  height: 28px;
  line-height: 28px;
  border-bottom: 1px solid #e0d8d8;
  list-style: none;
}
#HRchart .domain-list>li>i{
  float: right;
  font-size: 16px;
  margin-top: 8px;
  cursor: pointer;
}
</style>
