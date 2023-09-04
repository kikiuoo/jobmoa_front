<!--재직증명서, 경력증명서 상단 설정 컴포넌트-->

<template>
  <div class="setting-container">
    <div class="left-section">
      <div class="search-input">
        <input type="text" placeholder="검색할 직원이름">
        <button>검색</button>
      </div>
    </div>
    <div class="right-section">
      <!-- 드롭다운 선택 옵션 -->
      <select v-model="selectedOption" @change="changOption_parent">
        <option value="" selected disabled>제출용도</option>
        <option value="은행 제출용">은행 제출용</option>
        <option value="회사내부업무용">회사내부업무용</option>
        <option value="대학원 제출용">대학원 제출용</option>
      </select>

      <div class="button-grid" >
        <button @click="saveAsPDF_parent">PDF 파일 다운로드</button>
        <button @click="printPage">출력하기</button>
      </div>
      <div class="button-grid">
      </div>
    </div>
  </div>
</template>
<!--<style src="./styles.css"></style>-->

<script>
import {mapActions} from "vuex";

export default {
  name: "careerDocumentSetting",

  data(){
    return{
      selectedOption: "" // 드롭다운에서 선택된 옵션을 저장할 변수
    }
  },
  methods: {
    ...mapActions(['setOption']),

    saveAsPDF_parent() {
      // 클릭 이벤트가 발생하면 이벤트 버스를 통해 부모 컴포넌트로 이벤트를 발송합니다.
      console.log("saveAsPDF_parent 클릭")
      this.$emit('saveAsPDF_click_child');
    },
    changOption_parent() {
      // 클릭 이벤트가 발생하면 이벤트 버스를 통해 부모 컴포넌트로 이벤트를 발송합니다.
      console.log("selectedOption 클릭함. 내용 : ", this.selectedOption)
      this.$emit('selectedOption',this.selectedOption);
    },
    printPage() {
      console.log("printPage 클릭함. 내용 : ")
      const printContent = document.querySelector('.printSection');

      // 프린트 창 열기
      if (printContent) {
        // 원하는 스타일을 적용합니다.
        printContent.style.paddingTop = '10px';

        // 프린트 창 열기
        window.print();

        // 프린트 후 원래 스타일로 복원할 수도 있습니다.
        // setTimeout(() => {
        //   printContent.style.backgroundColor = '';
        //   printContent.style.marginTop = '';
        // }, 1000); // 1초 후 스타일 복원 (선택 사항)
      }
    },

  },
};
</script>

<style scoped>
.button-grid {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 10px;
  text-align: center;
  margin-left: 10px;
}

/* 프린트 시 화면 설정 */
@media print {
  .setting-container {
    display: none;
  }
}


</style>