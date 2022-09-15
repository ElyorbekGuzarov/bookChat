<template>

  <div>
    <i class="el-icon-reading" style="margin-right: 1100px; color:#ffffff; background-color:#1876f1;font-size: 35px    "></i>


      <el-dropdown  >

        <i class="el-icon-setting" style="color:#1876f1;margin-right: 10px;font-size: 18px ">  </i>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item v-if="!authenticated"><span style="color:#1876f1 " @click="login">Kirish</span></el-dropdown-item>
          <el-dropdown-item v-else-if="authenticated"><span style="color:#1876f1 " @click="logout">Chiqish</span></el-dropdown-item>
<!--          <el-dropdown-item>Delete</el-dropdown-item>-->
        </el-dropdown-menu>
      </el-dropdown>
      <span v-if="authenticated" style="color:#1876f1;">{{ fullName}}</span>


  </div>
</template>

<script>

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Headers",
  computed:{
    authenticated() {
      return this.$store.getters.authenticated;
    }
  },
  data(){
    return{
      fullName:this.$store.getters.account.fullName
    }
  }
  ,

  methods:{
    login(){
      this.$router.push("/login")


    },
    logout() {
      localStorage.removeItem("market-token")
      sessionStorage.removeItem("request-url")
      this.$store.commit("/logout")
      this.$router.replace("/login")
    }
  }
}
</script>

<style scoped>

</style>