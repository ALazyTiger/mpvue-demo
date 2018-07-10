//封装httpApi
import request from './httpUtil'
const host = "https://easy-mock.com/mock/5b3047469b9262598cb0933d/example"
const api = {
  // test地址
  policy:(params) => request.get(`${host}/policy`,  params ),
  checkTeamUserInfo:(params) => request.post(`${host}/checkTeamUserInfo`,params),
  testPut:(params) => request.put(`${host}/checkTeamUserInfo`,params),
  testDel:(params) => request.delete(`${host}/checkTeamUserInfo`+ params.id,params),
}
// export default api
export default { //作为组件库(install)
  install: function(Vue,name="$http") {//自定义名字(vue-resource也使用$http)
    Object.defineProperty(Vue.prototype, name, { value: api });//将组件库挂载在原型对象上
  }
}