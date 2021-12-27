<template>
  <el-dialog title="编辑部门" :visible.sync="dialogFormVisible">
    <el-form :model="dept" label-width="120px">
      <el-form-item label="部门名称">
        <el-input v-model="dept.name" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="部门编码">
        <el-input v-model="dept.code" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="部门介绍">
        <el-input v-model="dept.introduce" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="部门负责人">
        <el-input v-model="dept.manager" autocomplete="off"></el-input>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="dialogFormVisible = false">取 消</el-button>
      <el-button type="primary" @click="saveDept">确 定</el-button>
    </div>
  </el-dialog>
</template>

<script>
  import {list, saveOrUpdate, find, deleteById} from '@/api/base/dept'
  import commonApi from '@/utils/common'
  export default {
    name: 'add-index',
    data() {
      return {
        //parentId
        pid: '',
        dialogFormVisible: false,
        dept: {}
      }
    },
    methods: {
      saveDept() {
        //parentId
        this.dept.pid = this.pid
        saveOrUpdate(this.dept).then(res => {
          this.$message({
            message: res.data.message,
            type: res.data.success ? 'success' : 'error'
          });
          if (res.data.success) {
            location.reload()
          }
        })
      }

    }
  }
</script>

<style scoped>

</style>
