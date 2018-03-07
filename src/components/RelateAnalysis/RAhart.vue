<template>
  <div id="RAhart">
    <div>
      <input v-model="domainName" class="common-input" placeholder="域名"/>
      <select class="common-select">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>
      <select class="common-select">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
      </select>
      <button class="common-btn" @click="addDomain()" type="button">添加</button>
    </div>
    <div v-show="showRelative" class="domain-relative">
      <h3 style="margin:8px 0;"> {{relativeDomain}} 关联的域名</h3>
      <ul class="domain-list">
        <li v-for="item in domainList" :key="item"> {{item}} </li>
      </ul>
    </div>
    <div :id="id" style="width:100%;height:700px;"></div>
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
      domainList: [],
      showRelative: false,
      relativeDomain: ''
    }
  },
  mounted () {
    let resp_data = {
      "nodes": [{
        "name": "0.0.0.0",
        "value": 1,
        "category": 0
      },{
        "name": "skyland.sytes.net",
        "value": 1,
        "category": 1
      },{
        "name": "hzdev.aftx.net",
        "value": 1,
        "category": 4
      },{
        "name": "www.baidu.com",
        "value": 1,
        "category": 3
      }],
      "links":[{
        "source": 0,
        "target": 1,
        "value": 10
      },{
        "source": 0,
        "target": 2,
        "value": 10
      },{
        "source": 2,
        "target": 3,
        "value": 10
      }],
      "categories":[{
        "name": "0.0.0.0",
        "keyword": {},
        "base": "0.0.0.0"
      },{
        "name": "A",
        "keyword": {},
        "base":"A"
      },{
        "name": "NS",
        "keyword": {},
        "base": "NS"
      },{
        "name": "CNAME",
        "keyword": {},
        "base": "CNAME"
      },{
        "name": "MX",
        "keyword": {},
        "base": "MX"
      }],
      "type": "force"
    }
    this.initCharts(resp_data)
    // this.$http.get('http://172.16.8.44:8188/domain-data-analysis-system/domainAssociationAnalysisController/associatedQuery?queryName=0.0.0.0').then((response) => {
    //  this.initCharts(resp_data)
    // })
  },
  methods: {
    addDomain () {
      if(this.domainName){
        alert(this.domainName)
      }else{
        alert('请输入域名')
      }
    },
    initCharts (webkitDep) {
      let vue_this = this
      this.chart = echarts.init(document.getElementById(this.id))
      let legendData = []
      for (let i in webkitDep.categories) {
        legendData.push(webkitDep.categories[i].name)
      }
      let option = {
        color: ['#CC3333', '#99CC00', '#3399CC', '#669900', '#6e7074', '#CCCC00', '#ca8622', '#bda29a', '#6e7074', '#546570', '#c4ccd3'],
        legend: {
          itemWidth: 35,
          data: legendData,
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
      this.chart.on('click', function (params) {
        if(params.seriesType && params.dataType=="node"){
          console.dir(params)
          //显示列表请求
          vue_this.showRelative = true
          vue_this.relativeDomain = params.data.name
          vue_this.domainList = ['skyland.sytes.net','hzdev.aftx.net']
        }
      });
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
.common-select{
  display: inline-block;
  width: 100px;
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
#RAhart .domain-relative{
  position: absolute;
  left: 16px;
  z-index: 9;
}
#RAhart .domain-list{
  max-height: 673px;
  margin-top: 0;
  padding-left: 0;
  font-size: 14px;
  overflow-y: auto;
}
#RAhart .domain-list>li{
  width: 160px;
  height: 28px;
  line-height: 28px;
  border-bottom: 1px solid #e0d8d8;
  list-style: none;
}
</style>
