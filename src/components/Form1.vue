<template>
  <div v-if="showFlag==true">
    <el-dialog title="采集接收" :visible.sync="showFlag" :before-close="close">
      <el-form :model="Form1" :rules="rules"  ref="Form1" label-width="120px" id="Form1" :label-position="labelPosition">
        <el-form-item label="name"  prop="name">
          <el-input v-model="Form1.name" :clearable="true"></el-input>
        </el-form-item>
        <el-form-item label="version" prop="version">
          <el-input v-model="Form1.version" :disabled="true"></el-input>
        </el-form-item>
        <el-form-item label="program_path" prop="program_path">
          <el-input v-model="Form1.program_path" :clearable="true"></el-input>
        </el-form-item>
        <el-form-item label="program_conf" prop="program_conf">
          <el-input v-model="Form1.program_conf" :clearable="true"></el-input>
        </el-form-item>
        <el-form-item label="采集" prop="caiji">
          <el-col :span="24" style="margin-bottom: 26px">
            <el-col :span="4" style="text-align:left;padding-left:10px;">ip_address ：</el-col>
            <el-col :span="20">
              <el-form-item prop="caiji_ip_address">
                <el-input v-model="Form1.caiji_ip_address" :clearable="true"></el-input>
              </el-form-item>
            </el-col>
          </el-col>
          <el-col :span="24" style="margin-bottom: 26px">
            <el-col :span="4" style="text-align:left;padding-left:10px;">user ：</el-col>
            <el-col :span="20">
              <el-form-item prop="caiji_user">
                <el-input v-model="Form1.caiji_user" :clearable="true"></el-input>
              </el-form-item>
            </el-col>
          </el-col>
          <el-col :span="24" style="margin-bottom: 26px">
            <el-col :span="4" style="text-align:left;padding-left:10px;">password ：</el-col>
            <el-col :span="20">
              <el-form-item prop="caiji_password">
                <el-input v-model="Form1.caiji_password" :clearable="true"></el-input>
              </el-form-item>
            </el-col>
          </el-col>
          <el-col :span="24" style="margin-bottom: 0px">
            <el-col :span="4" style="text-align:left;padding-left:10px;">path ：</el-col>
            <el-col :span="20">
              <el-form-item prop="caiji_path">
                <el-input v-model="Form1.caiji_path" :clearable="true"></el-input>
              </el-form-item>
            </el-col>
          </el-col>
        </el-form-item>
        <el-form-item label="接收" prop="jieshou">
          <el-col :span="24" style="margin-bottom: 26px">
            <el-col :span="4" style="text-align:left;padding-left:10px;">ip_address ：</el-col>
            <el-col :span="20">
              <el-form-item prop="jieshou_ip_address">
                <el-input v-model="Form1.jieshou_ip_address" :clearable="true"></el-input>
              </el-form-item>
            </el-col>
          </el-col>
          <el-col :span="24" style="margin-bottom: 26px">
            <el-col :span="4" style="text-align:left;padding-left:10px;">user ：</el-col>
            <el-col :span="20">
              <el-form-item prop="jieshou_user">
                <el-input v-model="Form1.jieshou_user" :clearable="true"></el-input>
              </el-form-item>
            </el-col>
          </el-col>
          <el-col :span="24" style="margin-bottom: 26px">
            <el-col :span="4" style="text-align:left;padding-left:10px;">password ：</el-col>
            <el-col :span="20">
              <el-form-item prop="jieshou_password">
                <el-input v-model="Form1.jieshou_password" :clearable="true"></el-input>
              </el-form-item>
            </el-col>
          </el-col>
          <el-col :span="24" style="margin-bottom: 0px">
            <el-col :span="4" style="text-align:left;padding-left:10px;">path ：</el-col>
            <el-col :span="20">
              <el-form-item prop="jieshou_path">
                <el-input v-model="Form1.jieshou_path" :clearable="true"></el-input>
              </el-form-item>
            </el-col>
          </el-col>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="reset('Form1')">重置</el-button>
        <el-button type="primary" @click="submit('Form1')">新增</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
export default {
  props: [
    'showFlag'
  ],
  data () {
    let validateIP = (rule, value, callback) => {
      let reg = /^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/
      if (!reg.test(value)) {
        callback(new Error('请输入正确IP'))
      } else {
        callback()
      }
    }
    return {
      Form1: {
        name: 'xinjian1',
        version: '1.0v',
        program_path: '/usr/dnstransfer',
        program_conf: '/usr/dnstransfer',
        caiji_ip_address: '1.1.1.1',
        caiji_user: 'gcx',
        caiji_password: '23223',
        caiji_path: '/423/432',
        jieshou_ip_address: '22.22.2.2',
        jieshou_user: 'dddd',
        jieshou_password: 'w423324',
        jieshou_path: '/dsa/s2'
      },
      rules: {
        name: [
          { required: true, message: '请输入name', trigger: 'blur' }
        ],
        program_path: [
          { required: true, message: '请输入program_path', trigger: 'blur' }
        ],
        program_conf: [
          { required: true, message: '请输入program_conf', trigger: 'blur' }
        ],
        caiji_ip_address: [
          { required: true, message: '请输入ip-address', trigger: 'blur' },
          { validator: validateIP, trigger: 'blur' }
        ],
        caiji_user: [
          { required: true, message: '请输入user', trigger: 'blur' }
        ],
        caiji_password: [
          { required: true, message: '请输入password', trigger: 'blur' }
        ],
        caiji_path: [
          { required: true, message: '请输入paths', trigger: 'blur' }
        ],
        jieshou_ip_address: [
          { required: true, message: '请输入ip-address', trigger: 'blur' },
          { validator: validateIP, trigger: 'blur' }
        ],
        jieshou_user: [
          { required: true, message: '请输入user', trigger: 'blur' }
        ],
        jieshou_password: [
          { required: true, message: '请输入password', trigger: 'blur' }
        ],
        jieshou_path: [
          { required: true, message: '请输入paths', trigger: 'blur' }
        ]
      },
      labelPosition: 'top'
    }
  },
  methods: {
    close: function () {
      this.$emit('close', false)
    },
    submit: function (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!')
        } else {
          alert('error submit!!')
          return false
        }
      })
    },
    reset: function (formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
  #Form1{
    max-height: 500px;
    overflow: auto;
  }
</style>
