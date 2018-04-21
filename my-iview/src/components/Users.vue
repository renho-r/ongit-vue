<template>
  <div>
    <Table :columns='historyColumns' :data='usersData'></Table>
    <Page :total='dataCount' :page-size='pageSize' show-total  @on-change='changepage'></Page>
  </div>
</template>
<script>
// let testData = {
//   'histories': [{
//     'username': '智能审批',
//     'shenpistatus': '审批已通过',
//     'shenpicomments': '自动审批通过',
//     'time': '2017-07-24 18:11'
//   },
//   {
//     'username': '智能审批',
//     'shenpistatus': '审批已通过',
//     'shenpicomments': '自动审批通过',
//     'time': '2017-07-24 18:11'
//   }]
// }
export default {
  name: 'Users',
  data () {
    return {
      ajaxHistoryData: [],
      // 初始化信息总条数
      dataCount: 0,
      // 每页显示多少条
      pageSize: 10,
      historyColumns: [
        {
          title: '人员',
          key: 'username'
        },
        {
          title: '操作',
          key: 'shenpistatus'
        },
        {
          title: '意见',
          key: 'shenpicomments'
        },
        {
          title: '时间',
          key: 'time'
        }
      ],
      usersData: []
    }
  },
  methods: {

  // 获取历史记录信息
    handleListApproveHistory () {
      this.$store.dispatch('Users', null).then(() => {
        this.$Message.success('展示成功!')
        this.loading = false
        this.$router.push({path: '/users'})
        this.usersData = this.$store.state.users.usersData
        this.dataCount = this.usersData.length
      }).catch(() => {
        this.$Message.success('提交失败!')
        this.loading = false
      })
    },
    changepage (index) {
      var _start = (index - 1) * this.pageSize
      var _end = index * this.pageSize
      this.historyData = this.ajaxHistoryData.slice(_start, _end)
    }
  },
  created () {
    this.handleListApproveHistory()
  }
}
</script>
