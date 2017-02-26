<template>
	<div class="sile-bar">
		<ul>
			<li v-for="(menu, index) in sideMenu" @click="jumpPage(menu.link, index)" :class="{active: menu.selected}">{{menu.name}}</li>
		</ul>
	</div>
</template>

<script>
	
	export default{
		data(){
			return {
				sideMenu: [
					{
						name:'首页',
						link:"/main/",
						selected: true
					},
					{
						name:'数据列表',
						link:"/main/date",
						selected: false
					},
					{
						name:'视图列表',
						link:"/main/view",
						selected: false
					},
					{
						name:'下载列表',
						link:"/main/download",
						selected: false
					},
					{
						name:'收藏',
						link:"/main/favorites",
						selected: false
					},
				]
			}
		},
		methods:{
			jumpPage(pageLink, indexArr){
				
				this.sideMenu.forEach((item,index) => {
					if(indexArr == index){
						item.selected = true
					}
					else{
						item.selected = false
					}					
				})

				this.$router.push({path: pageLink});
			}
		}
	}

</script>

<style>
.sile-bar { height: 100%; background-color: #fff; width: 240px; overflow: hidden; float: left; }
.sile-bar li { height: 60px; padding-left: 20px; line-height: 60px; border-bottom: 1px #ccc solid; font-size: 14px; }
.sile-bar li.active { display: block; width: 100%; height: 60px; background-color: #D9DFE8 }
</style>