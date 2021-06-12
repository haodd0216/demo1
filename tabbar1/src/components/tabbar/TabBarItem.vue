<template>
	<div class="tab-bar-item" @click="itemClick" :path="path">
		<div v-show="!isActive"><slot name="item-icon"></slot></div>
		<div v-show="isActive"><slot name="item-icon-active"></slot></div>
		<div :style="activeColor"><slot name="item-text"></slot></div>
	</div>
</template>

<script>
	export default{
		name: 'TabBarItem',
		data(){
			return {
				
			}
		},
		computed:{
			isActive(){
				return this.$route.path == this.path
			},
			activeColor(){
				return this.isActive ? {color: this.color} : {}
			}
		},
		props: {
			path: {
				type: String
			},
			color: {
				type: String,
				default: '#ff0000'
			}
		},
		methods: {
			itemClick() {
				// console.log(this.path);
				// console.log(this.$store.state.counter);
				this.$router.push(this.path)
			}
		}
	}
</script>

<style>
	.tab-bar-item{
		flex: 1;
		text-align: center;
	}
	.tab-bar-item img{
		width: 20px;
		margin-top: 3px;
		margin-bottom: 3px;
	}
	.tab-bar-item div{
		font-size: 13px;
	}
	.active{
		color: #e8989a;
	}
</style>
