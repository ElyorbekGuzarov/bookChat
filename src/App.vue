<template>
  <div class="body">
    <Headers></Headers>
<!--    <el-main ></el-main>-->
    <router-view >

    </router-view>

  </div>

<!--  <div id="app" style="background-color:#E9EEF3 ">-->

<!--    <el-container >-->
<!--      <el-header style="text-align: right; font-size: 13.8px"><Headers></Headers></el-header >-->

<!--    </el-container>-->

<!--  </div>-->
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




*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;

}
template{
  align-items: center;
  justify-content: center;
}
/*main styling */
 body{
  align-items: center;
  justify-content: center;
  font-family: sans-serif;


}

span{
  color:#333;
  text-decoration: none;
}
h1,h2,h3{
  padding-bottom: 20px;
}
p{
  margin: 10px 0;
}
#navbar{
  background-color: #fafafc;
  color:#fff;
  overflow: auto;
}
#navbar span{
  color:#1876f1
}
#navbar h1 {
  float: left ;
  padding-top:20px;
}
#navbar ul{
  float: right;
  list-style: none;
}
#navbar ul li{
  float: right;

}
#navbar ul li span{
  display: inline-block;
  padding :25px;

}
.container{
  max-width: 1100px;
  margin:auto;
}
.text-primary{
  color:#1876f1 ;
}
.lead{
  font-size: 20px;
}
.btn{
  display: inline-block;
  font-size: 18px;
  color: #fff;
  background-color: #fafafc;
  padding: 13px 20px;
  border:none;
  cursor: pointer;
}


.el-main {
  padding: 0;
  background-color: #333;
  height:570px;
  width:99.8%;
  margin-left: 2px;
  color: #333;
  text-align: center;
  size: 123px;

  /*line-height: 160px;*/
}

/*body > .el-container {*/
/*  margin-bottom: 40px;*/
/*}*/

/*.el-container:nth-child(5) .el-aside,*/
/*.el-container:nth-child(6) .el-aside {*/
/*  line-height: 260px;*/
/*}*/

/*.el-container:nth-child(7) .el-aside {*/
/*  line-height: 320px;*/
/*}*/

</style>
