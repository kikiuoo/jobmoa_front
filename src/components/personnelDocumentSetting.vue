<!--인사기록카드 상단 컴포넌트-->

<template>
  <div class="setting-container">
    <div class="left-section">
      <div class="search-input">
        <input type="text" placeholder="검색할 직원이름">
        <button>검색</button>
      </div>
    </div>
    <div class="right-section">
      <div class="button-grid">
        <button @click="saveAsPDF_parent">PDF 파일 다운로드</button>
        <button @click="printPage">출력하기</button>
      </div>
      <div class="button-grid-admin">
        <button class="modify" @click="modifyClick">수정</button>
        <button class="delete" @click="deleteClick">삭제</button>
      </div>
      <div class="button-grid">
      </div>
    </div>
  </div>

</template>
<!--<style src="./styles.css"></style>-->

<script>
import '@/assets/styles/employeeSetting.css';

export default {
  name: "workDocumentSetting",
  methods: {
    setTodayDate() {
      this.selectedMenu = "employmentCertificate";
    },
    printPage() {
      // 프린트할 요소 선택
      const printContent = document.querySelector('.printSection');
      // 프린트 창 열기
      if (printContent) {
        window.print();
      }
    },
    saveAsPDF_parent() {
      // 클릭 이벤트가 발생하면 이벤트 버스를 통해 부모 컴포넌트로 이벤트를 발송합니다.
      console.log("saveAsPDF_parent 클릭")
      this.$emit('saveAsPDF_click_child');
    },

    modifyClick() {
      const result = confirm("해당 직원의 인사기록정보를 수정하시겠습니까?")
      if (result) {
        // 사용자가 '확인' 버튼을 클릭한 경우
        alert("확인 버튼을 클릭하셨습니다.");
        // 여기에 확인 버튼을 클릭했을 때 수행할 동작을 작성하세요.
      } else {
        // 사용자가 '취소' 버튼을 클릭한 경우
        alert("취소 버튼을 클릭하셨습니다.");
        // 여기에 취소 버튼을 클릭했을 때 수행할 동작을 작성하세요.
      }
    },
    deleteClick() {
      const result = confirm("\n삭제 시 복구가 불가합니다. \n\n해당 직원의 인사기록정보를 삭제하시겠습니까? ");
      if (result) {
        // 사용자가 '확인' 버튼을 클릭한 경우
        alert("확인 버튼을 클릭하셨습니다.");
        // 여기에 확인 버튼을 클릭했을 때 수행할 동작을 작성하세요.
      } else {
        // 사용자가 '취소' 버튼을 클릭한 경우
        alert("취소 버튼을 클릭하셨습니다.");
        // 여기에 취소 버튼을 클릭했을 때 수행할 동작을 작성하세요.
      }
    },
  },
};
</script>

<style scoped>
/* 프린트 시 화면 설정 */
@media print {
  .setting-container {
    display: none;
  }
}


</style>