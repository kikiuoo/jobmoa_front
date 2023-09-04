<!--
동작 : 5. src/views/*.vue 각 페이지 컴포넌트가 위치하는 폴더입니다. 실제 페이지 컴포넌트들이 정의되어 있습니다.
-->

<template>
  <div class="login-page">
    <LoginForm/>
  </div>
</template>

<script>
import '@/assets/styles/login.css';
import LoginForm from "@/components/LoginForm.vue";



export default {
  name: 'loginPage',
  components : {
    LoginForm,
  }
};

</script>
