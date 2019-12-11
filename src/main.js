import Vue from 'vue'
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'
import router from './router'
import {Form,FormItem,Container,Input,Select,Button,Option,Aside,Header,Main,Menu,MenuItem} from "element-ui"


Vue.config.productionTip = false
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Container)
Vue.use(Input)
Vue.use(Select)
Vue.use(Button)
Vue.use(Option)
Vue.use(Aside)
Vue.use(Header)
Vue.use(Main)
Vue.use(Menu)
Vue.use(MenuItem)


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
