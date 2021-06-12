<template>
	<div id="tabBar">
		<slot></slot>
	</div>
</template>

<script>
	export default{
		name: 'TabBar',
	}
</script>

<style>
	#tabBar{
		display: flex;
		height: 49px;
		position: fixed;
		left: 0;
		right: 0;
		bottom: 0;	
		background-color: #f6f6f6;
		box-shadow: 0px -1px 2px rgba(100,100,100,0.1);
	}
</style>
