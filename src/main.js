import Vue from 'vue'
import App from './App'
import '../static/weui/weui.css'
import './css/app.css'
import flyioPlugin from './utils/apiUtil.js'
Vue.use(flyioPlugin);//使用组件库
Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()

export default {
  // 这个字段走 app.json
  config: {
    pages: [
       '^pages/index/index',// 页面前带有 ^ 符号的，会被编译成首页，其他页面可以选填，我们会自动把 webpack entry 里面的入口页面加进去
       'pages/logs/logs',
       'pages/counter/counter',
      ], 
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: '懒懒de尐彪',
      navigationBarTextStyle: 'black'
    },
  }
}
