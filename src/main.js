import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
import '../src/assets/site/css/style.css'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
//1.导入路由组件
import index from './components/index.vue'
import detail from './components/detail.vue'
//2.设置路由规则
const routes = [
  {path:'/index',component:index},
  {path:'/',redirect:'/index'},
  {path:'/detail',component:detail}
]
//3.实例化路由对象
const router = new VueRouter({
  routes

})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
