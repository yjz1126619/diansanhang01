import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
Vue.config.productionTip = false
axios.interceptors.response.use(
	response => {
		return response.data //拦截处理响应结果，直接返回需要的数据
	},
	err => {
		console.log(err)
	}
)
//拦截器
 axios.interceptors.request.use(config => {
	//获取token值
			var tokenStr=sessionStorage.getItem('token')
			//设置请求头
		          config.headers.Authorization = tokenStr //设置响应头
		          return config
		        }, err => {
		          console.log(err)
		        })
Vue.prototype.$http = axios

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
