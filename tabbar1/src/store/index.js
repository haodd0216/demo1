import Vue from 'vue';
import Vuex from "vuex"

//1.安装插件
//执行的是Vuex.install方法
Vue.use(Vuex);

//2.创建vuex对象

const store = new Vuex.Store({
	state: {
		counter: 10,
		books: [
			{name: '语文', price: 18.00},
			{name: '数学', price: 22.00},
			{name: '英语', price: 10.00},
		]
	},
	getters: {
			priceOverTwenty(state){
				return state.books.filter(b => b.price > 15)
			},
			priceOverTwentyLength(state,getters){
				return getters.priceOverTwenty.length;
			},
			priceOver(state){
				return function(price){
					return state.books.filter(b => {
						return b.price > price
					}).length
				}
			},
	},
	mutations: {
		increament(state){
			state.counter++
		},
		decreament(state){
			state.counter--
		},
		insertBook(state, book){
			state.books.push(book);
		}
	},
	actions: {
		
	},
	modules: {
		
	},
})

export default store