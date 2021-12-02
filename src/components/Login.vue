<template>
  <div class="login_container">
    <div class="login_box">
        <!-- 头像区域 -->
        <div class="avatar_box">
            <img src="../assets/logo.png" alt />
        </div>
        <!-- 登录表单区域 -->
        <el-form 
            ref="loginFormRef"
            :model="loginForm" 
            :rules="loginFormRules" 
            label-width="0" 
            class="login_form"
        >
        <!-- 用户名 -->
        <el-form-item prop="username">
            <el-input v-model="loginForm.username" prefix-icon="el-icon-user-solid"></el-input>
        </el-form-item>
        <!-- 密码 -->
        <el-form-item prop="password">
            <el-input
                v-model="loginForm.password"
                type="password"
                prefix-icon="iconfont iconpassword"
            ></el-input>
        </el-form-item>
        <!-- 按钮区域 -->
        <el-form-item class="btns">
            <el-button type="primary" @click="login">登录</el-button>
            <el-button type="info" @click="resetLoginForm">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
        // 登录表单数据的绑定对象
            loginForm: {
                username: "admin",
                password: "admin"
            },
            //   表单的验证规则对象
            loginFormRules: {
                //   验证用户名是否合法
                username: [
                    { required: true, message: "请输入登录名称", trigger: "blur" },
                    { min: 3, max: 15, message: "长度在 3 到 15 个字符", trigger: "blur" }
                ],
                //   验证密码是否合法
                password: [
                    { required: true, message: "请输入登录密码", trigger: "blur" },
                    { min: 5, max: 15, message: "长度在 5 到 15 个字符", trigger: "blur" }
                ]
            }
        };
    },
    methods : {
        //   点击重置按钮,登录表单
        resetLoginForm() {
            this.$refs.loginFormRef.resetFields();
        },
        login() {
            this.$refs.loginFormRef.validate(async valid => {
                if (!valid) return;
                // const result = await this.$http.post("login", this.loginForm);
                //login为请求路径，this.loginForm为请求参数
                console.info("登录参数", this.loginForm);
                const { data: res } = await this.$http.post("login", this.loginForm);
                if (res.meta.status !== 200) return this.$message.error("登录失败");
                this.$message.success("登录成功");
                // 1、将登陆成功之后的token, 保存到客户端的sessionStorage中; localStorage中是持久化的保存
                //   1.1 项目中出现了登录之外的其他API接口，必须在登陆之后才能访问
                //   1.2 token 只应在当前网站打开期间生效，所以将token保存在sessionStorage中
                window.sessionStorage.setItem('token', res.data.token)
                // 2、通过编程式导航跳转到后台主页, 路由地址为：/home
                this.$router.push('/home')
            });
        }

    }
};
</script>

// 定义单文件组件必须设置scoped
<style lang="less" scoped>
.login_container {
  background-color: #2b4b6b;
  height: 100%;
}
.login_box {
  width: 450px;
  height: 300px;
  background-color: #fff;
  border-radius: 3px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.avatar_box {
  height: 130px;
  width: 130px;
  border: 1px solid #eee;
  border-radius: 50%;
  padding: 10px;
  box-shadow: 0 0 10px #ddd;
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: #eee;
  }
}
.btns {
  display: flex;
  justify-content: flex-end;
}
.login_form {
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;
}
</style>