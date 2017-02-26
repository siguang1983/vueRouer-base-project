<template>
	<div class="login">
		<div class="login-til">登录</div>
		<div class="login-content">
			<p><span>用户名: </span><input type="text" class="inp-txt" name="" id="" v-model="username"></p>
			<p><span>密码: </span><input type="password" class="inp-txt" name="" id="" v-model="password"></p>
			<p><input type="button" class="btn" value="登录" @click="login"></p>
		</div>		
	</div>
</template>

<script>
	import $ from 'jquery'
	import auth from '../utils/utils'

	export default{
		data(){
			return {
				username: '',
				password: ''
			}
		},
		methods:{
			verifyFrom(){
				if(this.username == '' || this.password == ''){
					alert('用户名不能为空');
					return false;
				}

				return true;
			},
			login(){
	
				if(!this.verifyFrom()){
					return false
				}

				let params = {
						username: this.username,
						password: this.password
					},
					that = this;

				$.ajax({
					url: '/login',
					type: 'post',
					data: params,
					dataType: 'json',
					success: function(res){
						console.log(res);
						if(res.status == 0){
							console.log('登录成功');
							auth.setStorage("isLogin", "true");
							that.$router.push('/main')
						}
					},
					error: function(res){
						console.log(res)
					}	
				})

			}
		},
		components:{
			
		}
	}
</script>

<style>
.login-til{ height: 50px; line-height: 50px; text-align: center; border-bottom: 1px #ccc solid; font-size: 14px; background-color: #4897fc; color: #fff; }
.login-content { padding-top: 20px; }
.login { width: 500px; height: 240px; border: 1px #ccc solid; position: absolute; z-index: 100; top: 50%; left: 50%; transform: translate(-50%, -50%); text-align: center; }
.login p { padding: 10px 0; }
.btn { padding: 10px 20px; }
.inp-txt { width: 200px; height: 30px; border: 1px #ccc solid; }
</style>