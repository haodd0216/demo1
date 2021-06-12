<template>
	<div>
		<h2>首页</h2>
		<p>{{$store.state.counter}}</p>
		<button @click="plus">+</button>
		<button @click="minus">-</button>
		<br><button @click="insert">添加书籍</button>
		<ul>
			<li v-for="item in $store.state.books">
				<span>{{item.name}}</span><span>{{item.price | priceFormat}}</span>
			</li>
		</ul>
		<div>超过15元的书一共有{{$store.getters.priceOverTwentyLength}}本</div>
		<div>超过20元的书一共有{{$store.getters.priceOver(20)}}本</div>
	</div>
</template>

<script>
export default {
  name: 'Home',
	methods: {
		plus() {
			// console.log(this.$store.getters.priceOver(10));
			this.$store.commit('increament')
		},
		minus() {
			this.$store.commit('decreament')
		},
		insert() {
			const book = {name: '物理', price: 45};
			this.$store.commit('insertBook', book)
		}
	},
	filters:{
		priceFormat(price){
			return '￥' + price.toFixed(2); 
		}
	}
}
</script>
