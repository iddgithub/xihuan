<template>
  <div class="login-container">
    <div class="form-container">
      <div class="login-conta">
        <h2>用户登录</h2>
        <el-form label-position="top" label-width="80px" :model="formData">
          <el-form-item label="名称">
            <el-input v-model="formData.username"></el-input>
          </el-form-item>
          <el-form-item label="活动区域">
            <el-input v-model="formData.password"></el-input>
          </el-form-item>
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
      }
    };
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
.form-container{
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
