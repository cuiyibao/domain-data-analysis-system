import Vue from 'vue'
import Router from 'vue-router'

/* Main */
import Main from '@/views/DashBoard'

Vue.use(Router)

export const constantRouterMap = [{
  path: '/',
  id: '1',
  component: Main,
  redirect: '/HistoryRecord',
  name: '域名历史记录分析',
  hidden: true,
  children: [
    {
      id: '2',
      path: '/HistoryRecord',
      icon: 'el-icon-tickets',
      name: '域名历史记录分析',
      component: resolve => require(['@/views/HistoryRecord'], resolve)
    }, {
      id: '3',
      path: '/RelateAnalysis',
      icon: 'el-icon-share',
      name: '域名关联分析',
      component: resolve => require(['@/views/RelateAnalysis'], resolve)
    }, {
      id: '4',
      path: '/DomainClassify',
      icon: 'el-icon-news',
      name: '域名分类',
      component: resolve => require(['@/views/DomainClassify'], resolve)
    }, {
      id: '5',
      path: '/DnsImport',
      icon: 'el-icon-edit-outline',
      name: 'DNS数据导入',
      component: resolve => require(['@/views/DnsImport'], resolve)
    }, {
      id: '6',
      path: '/DnsStorage',
      icon: 'el-icon-setting',
      name: 'DNS数据存储',
      component: resolve => require(['@/views/DnsStorage'], resolve)
    }, {
      id: '7',
      path: '/PdnsImport',
      icon: 'el-icon-rank',
      name: 'PDNS数据导入',
      component: resolve => require(['@/views/PdnsImport'], resolve)
    }, {
      id: '8',
      path: '/PdnsInquire',
      icon: 'el-icon-search',
      name: 'PDNS数据查询',
      component: resolve => require(['@/views/PdnsInquire'], resolve)
    }, {
      id: '9',
      path: '/ImportantDomain',
      icon: 'el-icon-star-off',
      name: '重点关注域名监测业务分析',
      component: resolve => require(['@/views/ImportantDomain'], resolve)
    }, {
      id: '10',
      path: '/DdosMonitor',
      icon: 'el-icon-bell',
      name: 'DDOS行为监测业务',
      component: resolve => require(['@/views/DdosMonitor'], resolve)
    }, {
      id: '11',
      path: '/BotnetMonitor',
      icon: 'el-icon-time',
      name: '僵尸网络域名监测业务',
      component: resolve => require(['@/views/BotnetMonitor'], resolve)
    }, {
      id: '12',
      path: '/DomainGrade',
      icon: 'el-icon-edit',
      name: '域名信誉打分',
      component: resolve => require(['@/views/DomainGrade'], resolve)
    }
  ]
}]

export default new Router({
  routes: constantRouterMap
})
