<!--
동작 : 3. 최상위 컴포넌트인 App.vue 파일입니다. 애플리케이션의 레이아웃과 라우터 뷰를 포함한 전역 컴포넌트를 관리합니다.
-->

<template>
  <div>
<!--    <TopMenu></TopMenu>-->
    <router-view></router-view>
  </div>
</template>

<script>
// import TopMenu from "@/components/TopMenu.vue";

export default {
  components: {
    // TopMenu
  }
}
</script>

<style>
</style>
