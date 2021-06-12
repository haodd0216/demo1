<template>
  <div id="#app">
		<tab-bar>
			<tab-bar-item path="/home" color="deepPink">
				<template v-slot:item-icon>
					<img src="./assets/img/tabbar/home.png" >
				</template>
				<template v-slot:item-icon-active>
					<img src="./assets/img/tabbar/home_active.png" >
				</template>
				<template v-slot:item-text>
					<div>首页</div>
				</template>
			</tab-bar-item>
			<tab-bar-item path="/sort" color="deepPink">
				<template v-slot:item-icon>
					<img src="./assets/img/tabbar/sort.png" >
				</template>
				<template v-slot:item-icon-active>
					<img src="./assets/img/tabbar/sort_active.png" >
				</template>
				<template v-slot:item-text>
					<div>分类</div>
				</template>
			</tab-bar-item>
			<tab-bar-item path="/cart" color="deepPink">
				<template v-slot:item-icon>
					<img src="./assets/img/tabbar/cart.png" >
				</template>
				<template v-slot:item-icon-active>
					<img src="./assets/img/tabbar/cart_active.png" >
				</template>
				<template v-slot:item-text>
					<div>购物车</div>
				</template>
			</tab-bar-item>
			<tab-bar-item path="/profile" color="deepPink">
				<template v-slot:item-icon>
					<img src="./assets/img/tabbar/user.png" >
				</template>
				<template v-slot:item-icon-active>
					<img src="./assets/img/tabbar/user_active.png" >
				</template>
				<template v-slot:item-text>
					<div>我的</div>
				</template>
			</tab-bar-item>
		</tab-bar>
		<router-view></router-view>
	</div>
</template>

<script>
	import TabBar from "./components/tabbar/TabBar.vue"
	import TabBarItem from "./components/tabbar/TabBarItem.vue"
	export default{
		name: 'app',
		components: {
			TabBar,
			TabBarItem
		},
		methods:{
		
		}
	}
</script>

<style>
	@import url("./assets/css/base.css");
	.active{
		color: #e8989a;
	}
</style>
