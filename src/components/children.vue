<template>
	<div class="children">
		<slot name="header"></slot>

		<slot></slot>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				childrenInp: ''
			}
		}
	}
</script>

<style>
	
</style>