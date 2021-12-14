<template>
  <div class="dashboard-container">
    <div class="app-container">
      <el-card shadow="never">
        <el-table  :data="dataList"  border style="width: 100%">
          <!--el-table-column : 构造表格中的每一列
              prop： 数组中每个元素对象的属性名
            -->
          <el-table-column fixed type="index" label="序号" width="50"></el-table-column>
          <el-table-column fixed prop="name" label="企业名称"  width="150"></el-table-column>
          <el-table-column fixed prop="version" label="版本"  width="150"></el-table-column>
          <el-table-column fixed prop="companyPhone" label="联系电话"  width="150"></el-table-column>
          <el-table-column fixed prop="expirationDate" label="截至时间"  width="150"></el-table-column>
          <el-table-column fixed prop="state" label="状态"  width="150">
            <!--scope:传递当前行的所有数据 -->
            <!--为什么要用作用域插槽？我猜是因为vue只允许父组件往子组件传递数据，子组件只能访问到符组件的数据，无法跨层访问
            因为el-switch是el-table-column的子组件，是el-table的孙组件，
            也就是说，跨层了。所以el-switch没法直接获得祖父组件el-table的属性，所以要通过作用域插槽，把祖父组件的属性域导入给孙组件？ -->
            <template slot-scope="scope">
              <!--开关组件
                    active-value：激活的数据值
                    active-color：激活的颜色
                    inactive-value：未激活
                    inactive-color：未激活的颜色
                 -->
              <el-switch
                v-model="scope.row.state"
                inactive-value="0"
                active-value="1"
                disabled
                active-color="#13ce66"
                inactive-color="#ff4949">
              </el-switch>
            </template>
          </el-table-column>
          <el-table-column fixed="right" label="操作"  width="150">
            <template slot-scope="scope">
              <router-link :to="'/saas-clients/details/' + scope.row.id">查看</router-link>
            </template>
          </el-table-column>
        </el-table>
      </el-card>
     </div>
  </div>
</template>

<script>
import {list} from '@/api/base/saasClient'
export default {
  name: 'saas-clients-index',
  data () {
    return {
      dataList:[]
    }
  },
  methods: {
    getList(){
      list().then(res => {
        console.log(res.data)
        this.dataList = res.data.data
      })
    }
  },
  // 创建完毕状态
  created() {
    this.getList()
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.alert {
  margin: 10px 0px 0px 0px;
}
.pagination {
  margin-top: 10px;
  text-align: right;
}
</style>
