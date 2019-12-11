<template>
    <el-container class="contain">
        <el-aside width="200px">
            <div class="image">
                <img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1541992176,2226144151&fm=26&gp=0.jpg" alt="">
            </div>
            <ul>
                <li v-for="(item,index) in viewList" :key="index"><router-link :to="item.path">{{item.ctitle}}</router-link></li>
            </ul>
        </el-aside>
        <el-container>
            <el-header><h3 class="my">{{my.title}}:{{my.user}}</h3></el-header>
            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>
</template>
<script>
import {getUserInfo} from "../../api/postAxios"
export default {
    props:{

    },
    components:{

    },
    data(){
        return {
            my:{},
            viewList:[]
        }
    },
    computed:{

    },
    methods:{

    },
    created(){
        getUserInfo().then(res=>{
            this.my = res.data.data
            this.viewList = res.data.data.viewInfo.views
        }).catch(err=>{
            alert(err.response)
            this.$router.replace("/login")
        })
    },
    mounted(){
        
    }
}
</script>
<style scoped lang="scss">
.contain{
    width:100%;
    height:100%;
    
}
 .el-header{
    background-color: #B3C0D1;
    text-align: center;
    line-height: 60px;
    .my{
        float: right;
        margin-right:100px;
    }
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
    .image{
        width: 80%;
        margin:0 auto;
        margin-top:10px;
        img{
            width: 100%;
        }
    } 
    ul{
        width: 100%;
        li{
            width:100%;
            height: 100px;
            line-height: 100px;
            border-bottom: 1px solid #ccc;
            background:cornflowerblue;
            margin-top: 10px;
            color:#fff;
        }
    }
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
</style>