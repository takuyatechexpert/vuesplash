import Vue from 'vue'
import VueRouter from 'vue-router'

// コンポーネントをインポートする
import PhotoList from './pages/PhotoList.vue'
import Login from './pages/Login.vue'

// VueRouterプラグインを使用
// <RouterView />コンポーネント等を使用できる
Vue.use(VueRouter)

// パスとコンポーネントをマッピング
const routes = [
  {
    path: '/',
    component: PhotoList
  },
  {
    path: '/login',
    component: Login
  }
]

// VueRouterインスタンスを作成
const router = new VueRouter({
  mode: 'history',
  routes
})

// VueRouterインスタン をエクスポートする為の記述
// app.jsで使える様にする
export default router