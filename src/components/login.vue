<template>
  <el-row :gutter="12">
    <el-col :span="8" :offset="8">

      <div class="container">
        <div class="forms">
          <div class="form login">
            <span class="title">Login</span>

            <form action="#">
              <div class="input-field">
                <input type="text" placeholder="Enter your email" required>
                <i class="uil uil-envelope icon"></i>
              </div>
              <div class="input-field">
                <input type="password" class="password" placeholder="Enter your password" required>
                <i class="uil uil-lock icon"></i>
                <i class="uil uil-eye-slash showHidePw"></i>
              </div>

              <div class="checkbox-text">
                <div class="checkbox-content">
                  <input type="checkbox" id="logCheck">
                  <label for="logCheck" class="text">Remember me</label>
                </div>

                <a href="#" class="text">Forgot password?</a>
              </div>

              <div class="input-field button">
                <input type="button" value="Login Now">
              </div>
            </form>

            <div class="login-signup">
                        <span class="text">Not a member?
                            <a href="#" class="text signup-link">Signup now</a>
                        </span>
            </div>
          </div>

          <!-- Registration Form -->
      <div class="form signup">
        <span class="title">Registration</span>

        <form action="#">
          <div class="input-field">
            <input type="text" placeholder="Enter your name" required>
            <i class="uil uil-user"></i>
          </div>
          <div class="input-field">
            <input type="text" placeholder="Enter your email" required>
            <i class="uil uil-envelope icon"></i>
          </div>
          <div class="input-field">
            <input type="password" class="password" placeholder="Create a password" required>
            <i class="uil uil-lock icon"></i>
          </div>
          <div class="input-field">
            <input type="password" class="password" placeholder="Confirm a password" required>
            <i class="uil uil-lock icon"></i>
            <i class="uil uil-eye-slash showHidePw"></i>
          </div>

          <div class="checkbox-text">
            <div class="checkbox-content">
              <input type="checkbox" id="sigCheck">
              <label for="sigCheck" class="text">Remember me</label>
            </div>

            <a href="#" class="text">Forgot password?</a>
          </div>

          <div class="input-field button">
            <input type="button" value="Login Now">
          </div>
        </form>

        <div class="login-signup">
                    <span class="text">Not a member?
                        <a href="#" class="text login-link">Signup now</a>
                    </span>
        </div>
      </div>
    </div>
  </div>
    </el-col>
  </el-row>



<!--  <div style="margin-top: 100px">-->
<!--                  <el-row :gutter="12">-->
<!--                    <el-col :span="8" :offset="8">-->

<!--                      <el-card shadow="always" style="">-->
<!--                        <h1 style="padding-bottom:25px;color: #5f7ab5 ">Assalomu alaykum</h1>-->
<!--                        <el-row style="margin-left:35px" :gutter="20">-->
<!--                          <el-col :span="21" >-->
<!--                            <div class="grid-content bg-purple">-->
<!--                              <el-input style="margin-bottom:5px"-->
<!--                                        placeholder="Loginni kiriting"-->
<!--                                        v-model="loginVM.username"-->
<!--                                        clearable>-->
<!--                              </el-input>-->

<!--                              <el-input style="margin-bottom:5px" placeholder="Parolni kiriting "-->
<!--                                        v-model="loginVM.password"-->
<!--                          show-password>-->
<!--                </el-input>-->

<!--              </div>-->
<!--            </el-col>-->
<!--          </el-row>-->
<!--          <el-row style="margin-top:7px">-->
<!--            <el-row :gutter="20">-->
<!--              <el-col :span="21" ><div class="grid-content bg-purple">-->
<!--                <el-checkbox style="margin-left: 45px" v-model="checked">Option</el-checkbox>-->
<!--                <el-button @click="login" style="margin-left: 65px"  type="primary" plain >Primary</el-button>-->
<!--              </div>-->
<!--              </el-col>-->
<!--            </el-row>-->


<!--          </el-row>-->
<!--        </el-card>-->
<!--      </el-col>-->
<!--    </el-row>-->


<!--  </div>-->

</template>

<script>
import axios from 'axios'
import AccaountService from "@/account/accaountService";
export default {

  // eslint-disable-next-line vue/multi-word-component-names
  name: "Login",
  data(){
    return{
      loginVM:{
        username:null,
        password:null,

      },
      checked:false
    }
  },
  methods:{
    login(){
      axios.post('api/login',this.loginVM)
      .then(res =>{
        console.log(res)
        const token = res.data.token;
        if(this.checked){
          console.log(this.checked)
          localStorage.setItem('market-token',token);
        }
        else{
          sessionStorage.setItem('market-token',token)
          console.log(this.checked)
        }
        new AccaountService(this.$route,this.$store).retrieveAccount();
        this.$router.push("/")
      })

    }

  }
}
</script>

<style scoped>
/* ===== Google Font Import - Poformsins ===== */
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}

template{
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #4070f4;
}

.container{
  position: relative;
  max-width: 430px;
  width: 100%;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  margin: 0 20px;
}

.container .forms{
  display: flex;
  align-items: center;
  height: 440px;
  width: 200%;
  transition: height 0.2s ease;
}


.container .form{
  width: 50%;
  padding: 30px;
  background-color: #fff;
  transition: margin-left 0.18s ease;
}

.container.active .login{
  margin-left: -50%;
  opacity: 0;
  transition: margin-left 0.18s ease, opacity 0.15s ease;
}

.container .signup{
  opacity: 0;
  transition: opacity 0.09s ease;
}
.container.active .signup{
  opacity: 1;
  transition: opacity 0.2s ease;
}

.container.active .forms{
  height: 600px;
}
.container .form .title{
  position: relative;
  font-size: 27px;
  font-weight: 600;
}

.form .title::before{
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  height: 3px;
  width: 30px;
  background-color: #4070f4;
  border-radius: 25px;
}

.form .input-field{
  position: relative;
  height: 50px;
  width: 100%;
  margin-top: 30px;
}

.input-field input{
  position: absolute;
  height: 100%;
  width: 100%;
  padding: 0 35px;
  border: none;
  outline: none;
  font-size: 16px;
  border-bottom: 2px solid #ccc;
  border-top: 2px solid transparent;
  transition: all 0.2s ease;
}

.input-field input:is(:focus, :valid){
  border-bottom-color: #4070f4;
}

.input-field i{
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  color: #999;
  font-size: 23px;
  transition: all 0.2s ease;
}

.input-field input:is(:focus, :valid) ~ i{
  color: #4070f4;
}

.input-field i.icon{
  left: 0;
}
.input-field i.showHidePw{
  right: 0;
  cursor: pointer;
  padding: 10px;
}

.form .checkbox-text{
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
}

.checkbox-text .checkbox-content{
  display: flex;
  align-items: center;
}

.checkbox-content input{
  margin: 0 8px -2px 4px;
  accent-color: #4070f4;
}

.form .text{
  color: #333;
  font-size: 14px;
}

.form a.text{
  color: #4070f4;
  text-decoration: none;
}
.form a:hover{
  text-decoration: underline;
}

.form .button{
  margin-top: 35px;
}

.form .button input{
  border: none;
  color: #fff;
  font-size: 17px;
  font-weight: 500;
  letter-spacing: 1px;
  border-radius: 6px;
  background-color: #4070f4;
  cursor: pointer;
  transition: all 0.3s ease;
}

.button input:hover{
  background-color: #265df2;
}

.form .login-signup{
  margin-top: 30px;
  text-align: center;
}


</style>