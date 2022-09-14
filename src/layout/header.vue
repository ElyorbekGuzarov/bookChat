<template>
  <div>

      <el-dropdown >
        <i class="el-icon-setting" style="margin-right:15px ;color:white; "></i>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item v-if="!authenticated"><span @click="login">Kirish</span></el-dropdown-item>
          <el-dropdown-item v-else-if="authenticated"><span @click="logout">Chiqish</span></el-dropdown-item>
<!--          <el-dropdown-item>Delete</el-dropdown-item>-->
        </el-dropdown-menu>
      </el-dropdown>
      <span v-if="authenticated">{{fullName}}</span>


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