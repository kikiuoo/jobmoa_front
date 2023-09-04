<!--경력증명서 템플릿-->
<template>
  <div class="careerDocument-container">
    <div class="inner">
      <h1 class="title_h1">경력증명서</h1>
      <div class="table_div">
        <h2 class="title_h3">인적사항</h2>
        <table class="table">
          <tbody>
          <tr>
            <th colspan="2">성 명</th>
            <td colspan="2">김철수</td>
            <th colspan="1">생년월일</th>
            <td colspan="2">1999-03-21</td>
            <th colspan="1">휴대폰</th>
            <td colspan="2">010-3339-4444</td>
          </tr>
          <tr>
            <th colspan="2">주소</th>
            <td colspan="8">서울시 마포구 연희로 41다길 29-19, 302호</td>
          </tr>
          </tbody>
        </table>
      </div>
      <div class="table_div">
        <h2 class="title_h3">경력사항</h2>
        <table class="table">
          <tbody>
          <tr>
            <th colspan="2">회사명</th>
            <td colspan="4">(주)잡모아</td>
            <th colspan="2">전화번호</th>
            <td colspan="4">02-334-8380</td>
          </tr>
          <tr>
            <th colspan="2">지점</th>
            <td colspan="4">남부본사</td>
            <th colspan="2">부서</th>
            <td colspan="4">국취2팀</td>
          </tr>
          <tr>
            <th colspan="2">직위</th>
            <td colspan="4">수석</td>
            <th colspan="2">직책</th>
            <td colspan="4">본부장</td>
          </tr>
          <tr>
            <th colspan="2">입사일 ~ 현재</th>
            <td colspan="4">{{ "2015-03-12" }} ~ {{ getTodayFromStore() }}</td>
            <th colspan="2">경력기간</th>
            <td colspan="4">{{ calculatePeriod('2020-03-11', getTodayFromStore()) }}</td>
          </tr>
          </tbody>
        </table>
        </div>
        <div class="table_div_career">
          <table class="table">
          <tbody>
          <tr>
            <th colspan="2">근무기간</th>
            <th>지점</th>
            <th>부서</th>
            <th>직위</th>
            <th>직책</th>
            <th colspan="3">주요업무</th>
          </tr>
          <tr>
            <td colspan="2">2008-06-16 ~ 2018-06-30</td>
            <td>인천서부</td>
            <td>국취2</td>
            <td>부장</td>
            <td>본부장</td>
            <td colspan="3">국취업무</td>
          </tr>
          <tr>
            <td colspan="2">2008-06-16 ~ 2018-06-30</td>
            <td>인천서부</td>
            <td>국취2</td>
            <td>부장</td>
            <td>본부장</td>
            <td colspan="3">국취업무</td>
          </tr>
          <tr>
            <td colspan="2">2008-06-16 ~ 2018-06-30</td>
            <td>인천서부</td>
            <td>국취2</td>
            <td>부장</td>
            <td>본부장</td>
            <td colspan="3">국취업무</td>
          </tr>
          <tr>
            <td colspan="2">2008-06-16 ~ 2018-06-30</td>
            <td>인천서부</td>
            <td>국취2</td>
            <td>부장</td>
            <td>본부장</td>
            <td colspan="3">국취업무</td>
          </tr>
          </tbody>
        </table>
      </div>
      <div class="table_div_text">
        <h4 class="title_h3_center">상기와 같이 재직 및 경력을 증명합니다.</h4>
      </div>
      <div class="table_div_text" style="margin-left: 30px;">
        <p class="title_h3">용 도 : {{ mainOption }}</p>
      </div>
      <div class="title_h3_today">
        <h3 class="title_h3_center">{{getTodayFromStore()}}</h3>
      </div>
      <div class="table_div_com">
        <p class="title_h4">회 사 명 : (주) 잡모아 </p>
        <p class="title_h4">주 소 : 서울특별시 양천구 오목로 180, 4층 5층 </p>
        <p class="title_h4">대 표 : 박 문 순 ( 인 )</p>
      </div>
    </div>
  </div>
</template>
<!--<style src="./styles.css"></style>-->

<script>

import html2pdf from "html2pdf.js";
import '@/assets/styles/personnelRecords.css';
// 특정 컴포넌트에서 Vuex의 mapGetters를 임포트합니다.
import {mapGetters} from 'vuex';

export default {
  name: 'employmentCertificate',
// 컴포넌트 내에서 게터를 사용할 수 있도록 mapGetters를 사용합니다.
  computed: {
    ...mapGetters(['getToday']), // getToday 게터를 가져옵니다.
  },
  props:[
    'mainOption',
  ],

  data() {
    return {
      option: "",
      pdf: "",
      today: "",
      startDate: "",
      endDate: "",
      employmentPeriod: "",
    }
  },
  methods: {
    getTodayFromStore() {
      // 특정 메소드에서 게터 값을 사용할 수 있습니다.
      this.endDate = this.getToday; // Vuex의 getToday 값을 가져옵니다.
      console.log('Today:', this.getToday);
      // Vuex의 getToday 값을 그대로 반환합니다.
      return this.endDate;
    },
    calculatePeriod(startDate, endDate) {
      return calculateEmploymentPeriod(startDate, endDate);
    },
    messageFromChild(value) {
      // value 에는 하위 컴포넌트에서 전달한 데이터가 들어있습니다.
      this.option = value.optionFromChild;
      this.pdf = value.pdfFromChild;

      console.log('messageFromChild_option : ', this.option);
      console.log('messageFromChild_pdf : ', this.pdf);

      if (this.pdf) {
        // 자식 컴포넌트의 클릭 이벤트를 처리하는 로직을 작성합니다.
        console.log('certificateDocumentSetting.vue 재직증명서페이지에서 pdf 파일 다운로드 클릭함. ');
        // pdf로 저장할 영역을 선택합니다.
        const content = this.$refs.pdfContent;

        // html2pdf.js의 옵션을 설정합니다.
        const options = {
          scale: 1,
          filename: 'document.pdf',
          image: {type: 'jpeg', quality: 0.98},
          html2canvas: {scale: 2},
          jsPDF: {unit: 'mm', format: 'a4', orientation: 'portrait'}
        };
        // html2pdf.js를 사용하여 PDF를 생성합니다.
        html2pdf()
            .from(content)
            .set(options)
            .save();
      }
      if (this.option) {
        console.log('하위 항목에 선택한 옵션 보여주기');
      }

    },
    saveAsPDF_parent() {
      // 자식 컴포넌트의 클릭 이벤트를 처리하는 로직을 작성합니다.
      console.log('certificateDocumentSetting.vue 재직증명서페이지에서 pdf 파일 다운로드 클릭함. ');
      // pdf로 저장할 영역을 선택합니다.
      const content = this.$refs.pdfContent;

      // html2pdf.js의 옵션을 설정합니다.
      const options = {
        scale: 1,
        filename: 'document.pdf',
        image: {type: 'jpeg', quality: 0.98},
        html2canvas: {scale: 2},
        jsPDF: {unit: 'mm', format: 'a4', orientation: 'portrait'}
      };
      // html2pdf.js를 사용하여 PDF를 생성합니다.
      html2pdf()
          .from(content)
          .set(options)
          .save();
    }
  },
};

// 두 개의 날짜 사이의 재직 기간을 계산하는 함수
function calculateEmploymentPeriod(startDate, endDate) {
  // 시작일과 종료일을 Date 객체로 변환
  const start = new Date(startDate);
  const end = new Date(endDate);


  // getTime() 메서드를 이용하여 날짜 간 차이를 밀리초로 구함
  const differenceInMilliseconds = end.getTime() - start.getTime();

  // 차이를 일(day) 단위로 변환
  const differenceInDays = differenceInMilliseconds / (1000 * 60 * 60 * 24);
  console.log('근속일수 : ' + differenceInDays + '일')

  // 종료일이 시작일보다 이전인 경우 재직 기간이 없음을 반환
  if (end < start) {
    return {
      years: 0,
      months: 0,
      days: 0,
    };
  }

  // 년, 월, 일 간격 계산
  let yearDiff = end.getFullYear() - start.getFullYear();
  let monthDiff = end.getMonth() - start.getMonth();
  let dayDiff = end.getDate() - start.getDate();

  // 마이너스 값이 나오는 경우, 이전 월에서 일을 빼고, 이전 년도에서 월을 빼주어 보정합니다.
  if (dayDiff < 0) {
    const daysInLastMonth = new Date(end.getFullYear(), end.getMonth(), 0).getDate();
    dayDiff += daysInLastMonth;
    monthDiff--;
  }

  if (monthDiff < 0) {
    monthDiff += 12;
    yearDiff--;
  }

  console.log('년월일환산 : ' + yearDiff + "년 " + monthDiff + "개월 " + dayDiff + "일")
  return yearDiff + "년 " + monthDiff + "개월 " + dayDiff + "일"
}


</script>

<style scoped>

</style>
