<template>
  <div id="app" style="background-color:#E9EEF3 ">

    <el-container >
      <el-header style="text-align: right; font-size: 12px"><Headers></Headers></el-header>
      <el-main ><router-view>

          </router-view></el-main>
    </el-container>
<!--    <el-container>-->


<!--      <el-header style="text-align: right; font-size: 12px"><Headers></Headers>-->
<!--      </el-header>-->


<!--      <el-container>-->

<!--        <Aside></Aside>-->

<!--        <el-main >-->
<!--          <router-view>-->

<!--          </router-view>-->
<!--        </el-main>-->
<!--      </el-container>-->
<!--      <el-footer style="margin-top: 10px">Footer</el-footer>-->
<!--    </el-container>-->

  </div>
</template>

<script>

import Headers from "@/layout/header";

export default {
  name: 'App',
  components: {

    Headers,


  }
}
</script>

<style>


 .el-header{
   background-color: #3399f8;
   color: #fff;
   text-align: center;
   line-height: 60px;
 }

 .el-footer{
   background-color: #3399f8;
   color: #fff;
   text-align: center;
   line-height: 60px;
 }

 .el-aside {
  background-color: #D3DCE6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
  size: 123px;

  /*line-height: 160px;*/
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}

</style>
