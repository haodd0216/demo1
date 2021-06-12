import Vue from 'vue'
import VueRouter from 'vue-router'


//配置路由懒加载
Vue.use(VueRouter)
const Home = () => import('../views/home/Home');
const Sort = () => import('../views/sort/Sort');
const Cart = () => import('../views/cart/Cart');
const Profile = () => import('../views/profile/Profile');
const routes = [
  {
		path: '',
		redirect: '/home',
	},
	{
		path: '/home',
		component: Home
	},
	{
		path: '/sort',
		component: Sort
	},
	{
		path: '/cart',
		component: Cart
	},
	{
		path: '/profile',
		component: Profile
	}
]

const router = new VueRouter({
  routes,
	mode: 'history'
})

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location){
	return originalPush.call(this,location).catch(err => err);
}

const originalReplace = VueRouter.prototype.replace;
VueRouter.prototype.replace = function replace(location){
	return originalReplace.call(this,location).catch(err => err);
}

export default router
