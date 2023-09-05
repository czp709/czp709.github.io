"use strict";(self["webpackChunkvue"]=self["webpackChunkvue"]||[]).push([[353],{9353:function(e,s,r){r.r(s),r.d(s,{default:function(){return f}});var t=function(){var e=this,s=e._self._c;return s("el-dialog",{attrs:{title:"新增用户",visible:e.dialogVisible,width:"50%"},on:{"update:visible":function(s){e.dialogVisible=s},close:e.close}},[s("el-form",{ref:"userInfo",attrs:{"label-width":"80px",model:e.userInfo,rules:e.userInfoRule}},[s("el-form-item",{attrs:{label:"组织"}},[s("el-cascader",{staticStyle:{width:"100%"},attrs:{"show-all-levels":!1,props:e.defaultProps,options:e.deptTree,clearable:"",filterable:""},model:{value:e.userInfo.deptId,callback:function(s){e.$set(e.userInfo,"deptId",s)},expression:"userInfo.deptId"}})],1),s("el-form-item",{attrs:{label:"账号",prop:"username"}},[s("el-input",{model:{value:e.userInfo.username,callback:function(s){e.$set(e.userInfo,"username",s)},expression:"userInfo.username"}})],1),s("el-form-item",{attrs:{label:"密码",prop:"password"}},[s("el-input",{model:{value:e.userInfo.password,callback:function(s){e.$set(e.userInfo,"password",s)},expression:"userInfo.password"}})],1),s("el-form-item",{attrs:{label:"名称",prop:"nickname"}},[s("el-input",{model:{value:e.userInfo.nickname,callback:function(s){e.$set(e.userInfo,"nickname",s)},expression:"userInfo.nickname"}})],1),s("el-form-item",{attrs:{label:"性别"}},[s("el-select",{staticStyle:{width:"100%"},model:{value:e.userInfo.sex,callback:function(s){e.$set(e.userInfo,"sex",s)},expression:"userInfo.sex"}},[s("el-option",{attrs:{label:"男",value:"0"}}),s("el-option",{attrs:{label:"女",value:"1"}})],1)],1),s("el-form-item",{attrs:{label:"邮箱"}},[s("el-input",{model:{value:e.userInfo.email,callback:function(s){e.$set(e.userInfo,"email",s)},expression:"userInfo.email"}})],1),s("el-form-item",{attrs:{label:"手机"}},[s("el-input",{model:{value:e.userInfo.phone,callback:function(s){e.$set(e.userInfo,"phone",s)},expression:"userInfo.phone"}})],1),s("el-form-item",{attrs:{label:"备注",prop:"remark"}},[s("el-input",{model:{value:e.userInfo.remark,callback:function(s){e.$set(e.userInfo,"remark",s)},expression:"userInfo.remark"}})],1)],1),s("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[s("el-button",{on:{click:function(s){e.dialogVisible=!1}}},[e._v("取 消")]),s("el-button",{attrs:{type:"primary"},on:{click:e.submit}},[e._v("确 定")])],1)],1)},l=[],a=r(2900),o={name:"AddUser",data(){return{dialogVisible:!1,userInfo:{deptId:"",username:"",password:"",nickname:"",sex:"",email:"",phone:"",remark:""},defaultProps:{label:"deptName",children:"children",value:"deptId",emitPath:!1,checkStrictly:!0},userInfoRule:{username:[{required:!0,message:"请输入用户名",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"}],nickname:[{required:!0,message:"请输入昵称",trigger:"blur"}],remark:[{max:500,message:"请输入备注",trigger:"blur"}]},deptTree:null}},mounted(){this.getDeptTree()},methods:{show(){this.dialogVisible=!0},getDeptTree(){(0,a.x7)().then((e=>{this.deptTree=e.data}))},submit(){this.$refs.userInfo.validate((e=>{if(!e)return!1;(0,a.cn)(this.userInfo).then((()=>{this.$message.success("添加成功"),this.dialogVisible=!1,this.$emit("refresh")}))}))},close(){this.userInfo={deptId:"",username:"",password:"",nickname:"",sex:"",email:"",phone:"",remark:""}}}},n=o,i=r(1001),u=(0,i.Z)(n,t,l,!1,null,"b61c44ec",null),f=u.exports}}]);
//# sourceMappingURL=353.3b736889.js.map