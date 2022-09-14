<template>
  <div style="margin-top: 160px">
    <el-row :gutter="12">
      <el-col :span="8" :offset="8">

        <el-card shadow="always" style="padding-top: 25px;padding-bottom: 10px">
          <h1 style="padding-bottom:25px;color: #5f7ab5 ">Assalomu alaykum</h1>
          <el-row style="margin-left:35px" :gutter="20">
            <el-col :span="21" >
              <div class="grid-content bg-purple">
                <el-input style="margin-bottom:5px"
                          placeholder="Loginni kiriting"
                          v-model="loginVM.username"
                          clearable>
                </el-input>

                <el-input style="margin-bottom:5px" placeholder="Parolni kiriting "
                          v-model="loginVM.password"
                          show-password>
                </el-input>

              </div>
            </el-col>
          </el-row>
          <el-row style="margin-top:7px">
            <el-row :gutter="20">
              <el-col :span="21" ><div class="grid-content bg-purple">
                <el-checkbox style="margin-left: 45px" v-model="checked">Option</el-checkbox>
                <el-button @click="login" style="margin-left: 65px"  type="primary" plain >Primary</el-button>
              </div>
              </el-col>
            </el-row>


          </el-row>
        </el-card>
      </el-col>
    </el-row>


  </div>

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

</style>