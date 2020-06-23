import Vue from 'vue'

// ルーティングの定義をインポートする
import router from './router'

// ルートコンポーネントをインポートApp.vueのこと
import App from './App.vue'


require('./bootstrap');

new Vue({
  el: '#app',
  router, // ルーティングの定義を読み込む
  components: { App }, // ルートコンポーネントを使用できるようにする
  template: '<App />'
})