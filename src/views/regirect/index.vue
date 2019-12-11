<template>
        <el-container>
            <el-form :model="userInfo" :rules="regRules" ref='regForm'>
                <el-form-item label="请输入用户名" prop="user">
                    <el-input v-model="userInfo.user"></el-input>
                </el-form-item>
                <el-form-item label="请输入密码" prop="pwd">
                    <el-input v-model="userInfo.pwd"></el-input>
                </el-form-item>
                <el-form-item label="身份" prop="identer">
                    <el-select v-model="userInfo.identer">
                        <el-option v-for="(item,index) in options" :key="index" :label="item.ident" :value="item.id">{{item.ident}}</el-option>
                    </el-select>
                </el-form-item>
                <el-form-item>
                    <el-button @click="submit">提交</el-button>
                </el-form-item>
            </el-form>
    </el-container>
</template>
<script>
import {getIdent,addUser} from "../../api/requestAxios"
export default {
    props:{

    },
    components:{

    },
    data(){
        return {
            userInfo:{
                user:"",
                pwd:"",
                identer:""
            },
            options:[],
            regRules:{
                user:[
                    { required: true, message: '请输入用户名', trigger: 'blur' },
                    { min: 2, max: 3, message: '长度在2-3个字符', trigger: 'blur' }
                ],
                pwd:[
                    {required:true,message:"请输入密码",trigger:'blur'},
                    {min:6,max:10,message:"123",trigger:'blur'}
                ],
                identer:[
                    {required:true,message:"选择身份",trigger:'blur'}
                ]
            }
        }
    },
    computed:{

    },
    methods:{
        submit(){
            this.$refs['regForm'].validate((res)=>{
                if(res){
                    addUser(this.userInfo).then(res=>{
                        if(res.data.code){
                            this.$router.push("/login")
                        }
                    })
                }else{
                    alert("请完善你的信息")
                }
            });
        }
    },
    created(){

    },
    mounted(){
        getIdent().then(res=>{
            this.options = res.data
        })
    }
}
</script>
<style scoped lang="scss">
    .el-container{
        width: 700px;
        height: 600px;
        border:1px solid #ccc;
        margin:0 auto;
        margin-top:200px;
        background:skyblue;
        .el-form{
            margin:auto auto;
            .el-button{
                margin-left: 30%;

            }
        }
    }
</style>