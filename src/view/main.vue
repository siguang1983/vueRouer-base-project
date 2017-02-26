<template>
	<div class="main">
		<miniMenu></miniMenu>
		
		<div class="container">
			<side-bar></side-bar>
			<div class="main-content">
				<router-view></router-view>
			</div>
		</div>
	</div>
</template>

<script>

	import MiniMenu from './miniMenu'
	import SideBar from './sideBar'

	export default{
		data(){
			return {
	
			}
		},
		components: {
			MiniMenu,
			SideBar
		}
	}

</script>

<style>
.main {background-color: #D9DFE8; height: 100%;}
.container { height: 100%; position: relative; top: 54px; display: flex; flex-flow: flex-direction; box-sizing: border-box; }
.main-content { flex: 1; }
.menu { height: 300px; }
.main-content{}
</style>