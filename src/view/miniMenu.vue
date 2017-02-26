<template>
	<div class="menu">
		<h1 class="menu-til">{{title}}</h1>
		<div class="menu-list">
			<ul>
				<li v-for="val in menuData">
					{{val.name}}
				</li>
			</ul>
		</div>
		<div class="menu-right">
			<a @click="logout">退出</a>
		</div>
	</div>
</template>

<script>

	import auth from '../utils/utils'
	import $ from 'jquery';

	export default{
		data(){
			return {
				title: '运营系统',
				menuData: [
					{
						'name':'头条',
						'link': ''
					},
					{
						'name':'回答',
						'link': ''
					},
					{
						'name':'专栏',
						'link': ''
					}
				]
			}
		},
		methods:{
			logout(){
				let that = this;
				$.ajax({
					url: '/logout',
					type: 'post',
					dataType: 'json',
					success: function(res){
						if(res.status == 0){
							console.log('退出成功');
							auth.signout();
							that.$router.push({path: '/login'})
						}
					},
					error: function(res){
						console.log('退出接口错误');
					}
				})
			}
		}
	}

</script>

<style>
.menu { height: 100%; position: absolute; top: 0; left: 0; z-index: 100; width: 100%; }
.menu-til { font-size: 20px; padding: 10px 20px; float: left; }
.menu { height: 54px; border-bottom: 1px #ccc solid; background-color: #fff; box-shadow: 0px 6px 8px 0 rgba(0,0,0,0.14); }
.menu-right { float: right;padding-right: 20px; line-height: 54px; }
.menu-list { padding: 10px 0 0 100px; float: left; }
.menu-list li { width: 100px; height: 30px; float: left;; line-height: 30px; background-color: #e7e7e7; border-radius: 4px; margin: 0 5px; text-align: center;  }
</style>