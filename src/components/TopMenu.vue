<template>
  <div class="menu-wrapper">
    <div class="logo-box" @click="click_logo()">
      <img src="../assets/images/jobmoa_logo.png" alt="Logo">
    </div>
  <div class="top-menu">
    <ul class="menu_list">
      <li>
        <button
            class="menu-button"
            v-for="menu in menus"
            :key="menu.id"
            :class="{ active : selectedMenu === menu.id }"
            @click="click_menu(menu.id)"
        >
          {{ menu.name }}
        </button>
      </li>
    </ul>
  </div>
  </div>
</template>

<script>
import '@/assets/styles/topmenu.css';

export default {
  name: 'TopMenu',
  data() {
    return {
      menus: [
        { id: 'employeeList', name: '직원명부',  isButtonClicked: false},
        { id: 'personnelRecords', name: '인사기록카드',  isButtonClicked: false },
        { id: 'employmentCertificate', name: '재직증명서',  isButtonClicked: false },
        { id: 'careerCertificate', name: '경력증명서',  isButtonClicked: false }
      ],

      selectedMenu: null, // 선택된 메뉴의 ID를 저장하는 데이터 속성
      isButtonClicked : false,
    };
  },

  methods: {
    click_logo(){
      this.$router.push({name : "loginPage"});
    },
    click_menu(menuID) {
      console.log("menuID",menuID);

      this.selectedMenu = menuID; // 선택된 메뉴를 데이터에 저장
      // 클릭된 메뉴에 대한 추가적인 로직 수행 가능
      console.log("selectedMenu",this.selectedMenu);
      this.$router.push({name: this.selectedMenu});
    },
  },
};
</script>
<style scoped>

</style>
