<!--
동작 : 6. src/components/*.vue 재사용 가능한 컴포넌트들이 위치하는 폴더입니다.
다양한 UI 요소나 기능을 컴포넌트 단위로 구현하여 페이지 컴포넌트에서 재사용할 수 있습니다.

이 순서대로 파일이 로드되고 처리되어 화면이 렌더링됩니다.
index.html 파일에서 <div id="app"></div>가 렌더링되고,
이를 기반으로 main.js 파일에서 Vue 인스턴스가 생성되며
App.vue 컴포넌트가 로드됩니다.
이후 라우터 설정에 따라 각 페이지 컴포넌트가 로드되고 화면에 표시됩니다.
-->

<template>
  <div class="login-container">
    <div class="login-logo-box">
      <img src="../assets/images/jobmoa_logo.png" alt="Logo">
    </div>
    <div class="login-box">
      <div class="input-field">
        <input type="text" id="username" v-model="username" placeholder="아이디"/>
      </div>
      <div class="input-field">
        <input type="password" id="password" v-model="password" placeholder="비밀번호"/>
      </div>
      <button class="login-button" id="login-button" @click="login">로그인</button>
    </div>
  </div>
</template>


<script>

export default {

  methods: {
    login() {
    // 로그인 로직 처리

    // 홈페이지로 이동
      this.$router.push({name: 'mainPage'});
    }
  },
};


</script>
<style scoped>


</style>
