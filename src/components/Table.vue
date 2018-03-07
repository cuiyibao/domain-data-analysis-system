<template>
  <div>
    <v-table
      is-vertical-resize
      column-width-drag
      :vertical-resize-offset='60'
      is-horizontal-resize
      style="width:100%"
      :multiple-sort="false"
      :min-height="350"
      even-bg-color="#f2f2f2"
      :title-rows="tableConfig.titleRows"
      :columns="tableConfig.columns"
      :table-data="tableConfig.tableData"
      row-hover-color="#eee"
      row-click-color="#edf7ff"
      @sort-change="sortChange"
      :paging-index="(pageIndex-1)*pageSize"
    ></v-table>

    <div class="mt20 mb20 bold"></div>
    <v-pagination @page-change="pageChange" @page-size-change="pageSizeChange" :total="total" :page-size="pageSize" :layout="['total', 'prev', 'pager', 'next', 'sizer', 'jumper']"></v-pagination>
  </div>
</template>

<script>
export default {
  name: 'table',
  data () {
    return {
      tableDate: [],
      total: 40,
      pageIndex: 1,
      pageSize: 10,
      sortParams: {
        address: '',
        custome: '',
        gender: '',
        height: '',
        hobby: '',
        name: '',
        pageIndex: 1,
        pageSize: 10
      },
      tableConfig: {
        multipleSort: false,
        tableData: [],
        columns: [
          {
            field: 'custome',
            width: 50,
            titleAlign: 'center',
            columnAlign: 'center',
            formatter: function (rowData, index, pagingIndex) {
              var currentIndex = index + pagingIndex
              return currentIndex < 3 ? '<span style="color:red;font-weight: bold;">' + (currentIndex + 1) + '</span>' : currentIndex + 1
            },
            isFrozen: true
          },
          {
            field: 'name',
            width: 100,
            columnAlign: 'center',
            isFrozen: true
          },
          {
            field: 'height',
            width: 100,
            columnAlign: 'center',
            isFrozen: true
          },
          {
            field: 'gender',
            width: 90,
            columnAlign: 'center',
            isFrozen: false,
            isResize: true},
          {
            field: 'address',
            width: 280,
            columnAlign: 'left',
            isResize: true
          },
          {
            field: 'hobby',
            width: 180,
            columnAlign: 'center',
            isResize: true
          }
        ],
        titleRows: [
          [{fields: ['custome'], title: '排序', titleAlign: 'center', rowspan: 2, orderBy: ''},
            {fields: ['name', 'height'], title: '基础信息', titleAlign: 'center', colspan: 2, orderBy: ''},
            {fields: ['gender', 'address', 'hobby'], title: '用&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;户&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;其&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;他&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;信&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;息', titleAlign: 'center', colspan: 3}],

          [{fields: ['name'], title: '姓名', titleAlign: 'center', orderBy: ''},
            {fields: ['height'], title: '身高', titleAlign: 'center', orderBy: ''},
            {fields: ['gender'], title: '性别', titleAlign: 'center', orderBy: ''},
            {fields: ['address'], title: '住址', titleAlign: 'center', orderBy: ''},
            {fields: ['hobby'], title: '爱好', titleAlign: 'center', orderBy: ''}
          ]
        ]
      }
    }
  },
  methods: {
    getTableData () {
      this.tableConfig.tableData = this.tableDate
    },
    pageChange (pageIndex) {
      this.pageIndex = pageIndex
      this.sortParams.pageIndex = pageIndex
      this.request()
      this.getTableData()
    },
    pageSizeChange (pageSize) {
      this.pageIndex = 1
      this.pageSize = pageSize
      this.sortParams.pageSize = pageSize
      this.request()
      this.getTableData()
    },
    sortChange (params) {
      for (var i in params) {
        this.sortParams[i] = params[i]
      }
      this.request()
      this.getTableData()
    },
    request () {
      const commpent = this
      this.$http.post(
        'http://172.16.8.44:8188/domain-data-analysis-system/tableController/selectTest',
        commpent.sortParams,
        {emulateJSON: true}
      ).then((response) => {
        this.total = response.body.total
        this.tableDate = response.body.data
        this.getTableData()
      })
    }
  },
  created () {
    this.request()
  }
}
</script>

<style>
  .title-cell-class-name-test1 {
    background-color: #2db7f5;
    color:#fff;
  }
  .title-cell-class-name-test2 {
    background-color: #f60;
    color:#fff;
  }
  .bold {
    font-weight: 700;
  }
  .mb20 {
    margin-bottom: 20px;
  }
  .mt20 {
    margin-top: 20px;
  }
</style>
