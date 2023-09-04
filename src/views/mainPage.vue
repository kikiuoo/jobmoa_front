<template>
  <div class="menu-wrapper">
    <div class="logo-box" @click="click_logo()">
      <img class="logoImg" src="../assets/images/jobmoa_logo.png" alt="Logo">
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
    <CertificateDocumentSetting
        @saveAsPDF_click_child="pdfDown"
        @selectedOption="click_child_option"
        v-if="documentSetting"/>
    <PersonnelDocumentSetting
        @saveAsPDF_click_child="pdfDown"
        v-if="showDiv"/>
  </div>

  <div class="component-content">
    <div class="printSection">
      <div ref="pdfSection">
        <!--동적 컴포넌트를 렌더링하는 Vue의 방식 : currentComponent에 따라 동적으로 컴포넌트를 렌더링합니다 -->
        <component :is="currentComponent" v-bind:mainOption="selectedOption"></component>
      </div>
    </div>

  </div>
</template>

<script>
import EmployeeList from "@/views/employeeList.vue";
import PersonnelRecords from "@/views/personnelRecords.vue";
import EmploymentCertificate from "@/views/workDocument.vue";
import CareerCertificate from "@/views/careerDocument.vue";
import PersonnelDocumentSetting from "@/components/personnelDocumentSetting.vue";
import {mapActions} from 'vuex';
import html2pdf from "html2pdf.js";
import CertificateDocumentSetting from "@/components/certificateDocumentSetting.vue";


export default {
  name: 'mainPage',
  components: {
    CertificateDocumentSetting,
    PersonnelDocumentSetting,
    EmployeeList,
    PersonnelRecords,
    EmploymentCertificate,
    CareerCertificate,

  },
  data() {
    return {
      propValue: 'initialValue',
      showDiv: false,
      documentSetting: false,
      menus: [
        {id: 'employeeList', name: '직원명부', isButtonClicked: true},
        {id: 'personnelRecords', name: '인사기록카드', isButtonClicked: false},
        {id: 'employmentCertificate', name: '재직증명서', isButtonClicked: false},
        {id: 'careerCertificate', name: '경력증명서', isButtonClicked: false}
      ],
      currentComponent: 'employeeList',
      selectedMenu: 'employeeList', // 초기 선택 메뉴 설정
      isButtonClicked: false,
      selectedOption: null,
      today: "",
    };
  },

  methods: {
    // mapActions 헬퍼 함수를 사용하여 Vuex의 setToday 액션을 불러옵니다.
    ...mapActions(['setToday']),

    click_logo() {
      // 로고 클릭 시 'loginPage'로 라우팅합니다.
      this.$router.push({name: "loginPage"});
    },

    click_child_option(option) {
      // 자식 컴포넌트에서 받은 옵션을 처리합니다.
      this.selectedOption = option;
      // 드롭다운에서 선택된 옵션에 따라 특정 변수에 값을 적용하는 함수
      // 이 예시에서는 선택된 옵션을 selectedOption 변수에 적용하도록 합니다.
      console.log("selectedOption:", this.selectedOption);

    },
    pdfDown() {
      // 자식 컴포넌트의 클릭 이벤트를 처리하는 로직을 작성합니다.
      console.log('pdfDown');

      const personnelRecord = document.querySelector('.personnelRecord-container');
      const workDocument = document.querySelector('.workDocument-container');
      const careerDocument = document.querySelector('.careerDocument-container');

      // personnelRecord, workDocument, careerDocument 중 가장 먼저 발견한 요소를 선택합니다.
      const element = personnelRecord || workDocument || careerDocument;

      // 선택된 컨테이너에 따라서 PDF 문서의 제목을 저장할 변수를 선언합니다.
      let pdfTitle;

      // element가 존재할 경우 스타일, pdfTitle 설정
      if (element) {
        console.log('element : ' + element.className)
        element.style.marginTop = '10px'; // 상단 여백을 10px로 설정합니다.
        element.style.backgroundColor = 'white'; // 배경색을 흰색으로 설정합니다.

        if (element.className === 'personnelRecord-container') {
          pdfTitle = '인사기록카드_' + this.today + '_'
        } else if (element.className === 'workDocument-container') {
          pdfTitle = '재직증명서_' + this.today + '_'
        } else if (element.className === 'careerDocument-container') {
          pdfTitle = '경력증명서_' + this.today + '_'
        }
      }
      // pdf로 저장할 영역을 선택
      const content = this.$refs.pdfSection;

      // html2pdf.js의 PDF 생성 옵션 설정
      const options = {
        scale: 1,
        filename: pdfTitle + '.pdf',
        image: {type: 'jpeg', quality: 0.98},
        html2canvas: {scale: 2},
        // margin : [10,10,10,10],
        jsPDF: {unit: 'mm', format: 'a4', orientation: 'portrait'}
      };
      // html2pdf.js를 사용하여 PDF를 생성하고 저장
      html2pdf()
          .from(content)
          .set(options)
          .save()
          .then(() => {
            // PDF 저장 완료 후 스타일변경
            element.style.marginTop = '140px';
            element.style.backgroundColor = '#f0f0f0';
          })
          .catch(error => {
            console.error('PDF 생성 오류:', error);
          });
    },

    click_menu(menuID) {
      // 메뉴 버튼 클릭 시 선택된 메뉴의 ID를 저장하고 컴포넌트를 동적으로 설정합니다.
      // 클릭된 메뉴에 따라 currentComponent 설정

      console.log("menuID", menuID);
      this.selectedMenu = menuID;
      // 클릭된 메뉴에 대한 추가적인 로직 수행 가능

      // 클릭된 메뉴에 따라 currentComponent 설정
      if (menuID === "employeeList") {
        this.currentComponent = EmployeeList;
        this.showDiv = false;
        this.documentSetting = false;

      } else if (menuID === "personnelRecords") {
        this.currentComponent = PersonnelRecords;
        this.showDiv = true;

      } else if (menuID === "employmentCertificate") {
        this.setTodayDate(EmploymentCertificate)
        this.setDropDownOption(EmploymentCertificate)
        this.showDiv = false;
        this.documentSetting = true;

      } else if (menuID === "careerCertificate") {
        this.setTodayDate(CareerCertificate)
        this.setDropDownOption(CareerCertificate)
        this.showDiv = false;
        this.documentSetting = true;
      }
      console.log("selectedMenu", this.selectedMenu);
    },

    setTodayDate(component) {
      const date = new Date();
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const day = String(date.getDate()).padStart(2, "0");
      this.today = `${year}-${month}-${day}`; // 오늘 날짜를 변수에 저장
      console.log("today", this.today);
      this.currentComponent = component;

      // click_menu 메소드에서 해당 액션을 호출하여 today 값을 Vuex Store에 저장할 수 있습니다.
      // 이렇게 저장된 데이터는 Vuex Store를 통해 다른 컴포넌트에서도 접근할 수 있습니다.
      this.setToday(this.today);
    },
    setDropDownOption(component) {
      this.currentComponent = component;
      this.setOption(this.selectedOption);
    },
  },
};
</script>
<style scoped>


button {
  cursor: pointer;
}

.component-content {
  margin: 0; /* Remove default margin */
  padding: 0; /* Remove default padding */
}

.printSection {
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  padding: 100px 5px 50px 5px;
  margin-bottom: 70px;
}


/* 프린트 시 화면 설정 */
@media print {
  .personnelRecord-container {
    /*width: 300mm;*/
    /*width: 260mm;*/
    /*width: 250mm;*/
    width: 210mm;
    /*width: 80%;*/
    /*height: 297mm;*/
    background-color: #e07e9c;
    padding: 5px;
    margin-top: 10px;
  }

  .print-section {
    padding: 10px 10px 200px 10px;
  }

  .menu-wrapper {
    display: none;
  }

  .menu-button {
    display: none;
  }

  .table-container {
    margin: 10px;
  }

  .component-content {
    padding: 0;
  }
}
</style>
