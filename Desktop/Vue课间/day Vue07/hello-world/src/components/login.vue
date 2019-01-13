<template>
  <div class="login-container">
    <div class="form-container">
      <div class="login-conta">
        <h2>用户登录</h2>
        <!-- ref  vue提供的属性  让我们可以给dom元素取名字 -->
        <el-form label-position="top" label-width="80px" ref="formData" :rules="rules" :model="formData">
          <el-form-item label="用户名" prop="username">
            <el-input v-model="formData.username"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input v-model="formData.password"></el-input>
          </el-form-item>
          <el-button class="login-btn" @click="submitForm('formData')" type="success">用户登录</el-button>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      formData: {
        username: "",
        password: ""
      },
      // 表单验证规则
      rules: {
        username: [
           // required :必须
          // message: 提示信息
          // trigger: 触发时机
          // min:最短
          // max:最常
          { required: true, message: "请输入用户", trigger: "change" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "change" }
        ],
        password: [
         { required: true, message: "请输入密码", trigger: "change" },
          { min: 3, message: "你密码太短了吧", trigger: "change" }
        ]
      }
    };
  },
  // 方法
  methods: {
    submitForm(formName) {
      // $refs 数组 可以让我们通过 设定的名字 获取对应的dom元素
      // 通过表单元素的 validate (element-ui)增加的验证方法
      this.$refs[formName].validate(valid => {
        if (valid) {
          // 密码验证要向服务器发送请求所以用axios
          //成功  .then是回调函数，请求回来啦，做什么的作用
          this.$axios.post("login", this.formData).then(res =>{
            console.log(res);
            if(res.data.meta.status === 400){
              //报错
              this.$message.error(res.data.meta.msg)
            } else if(res.data.meta.status === 200){
                //正确
              this.$message({
               message: res.data.meta.msg,
                type:"seccess"
              })             
            }
            
          })

          alert("submit!");
        } else {
          // console.log("error submit!!");
            this.$message.error('错了哦，这是一条错误消息');
          return false;
        }
      });
    }
  }
};
</script>



<style lang="scss">
.login-container {
  background-color: #324152;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.form-container {
  background-color: white;
  width: 580px;
  padding: 40px;
  border-style: border-box;
  border-radius: 10px;
}
.login-btn {
  width: 100%;
}
</style>
