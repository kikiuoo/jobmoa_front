/*
동작 : 2. Vue 애플리케이션의 진입점이 되는 JavaScript 파일입니다.
* Vue 인스턴스를 생성하고 Vue 라우터, Vuex 스토어 등을 연결합니다.
* */

import { createApp } from 'vue'
import App from './App.vue'
import store from './store';
import router from './router/index';
import TopMenu from "@/components/TopMenu.vue";
// import printJS from 'print-js'
import html2pdf from 'html2pdf.js';
import '@/assets/styles/base.css'; // base.css를 import


// Vue 애플리케이션을 생성합니다.
const app = createApp(App)

// 애플리케이션에 Vuex Store를 등록
app.use(store);

// 애플리케이션에 라우터 플러그인을 등록합니다.// App.vue 컴포넌트를 마운트합니다. 마운트할 엘리먼트는 id가 'app'인 요소입니다.
app.use(router).mount('#app')

// 'topMenu' 컴포넌트를 전역 컴포넌트로 등록합니다.
app.component('TopMenu', TopMenu)
// app.use(printJS);
app.use(html2pdf);


