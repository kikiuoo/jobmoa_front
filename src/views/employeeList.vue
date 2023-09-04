<template>
  <div class="employee-list">
    <div class="searchBox">
      <div class="left-column">
        <div class="row row1">이름검색</div>
        <div class="row row2">상세검색</div>
      </div>
      <div class="right-column">
        <div class="row row1">
          <input type="text" placeholder="직원명">
        </div>
        <div class="row row2">
          <select>
            <option disabled selected>지점선택</option>
            <!-- 여기에 다른 옵션 추가 -->
            <option>옵션 1</option>
            <option>옵션 2</option>
            <option>옵션 3</option>
            <option>옵션 4</option>
          </select>
        </div>
        <div class="row row3">
          <select>
            <option disabled selected>부서선택</option>
            <!-- 여기에 다른 옵션 추가 -->
          </select>
        </div>
        <div class="row row4">
          <select>
            <option disabled selected>직위선택</option>
            <!-- 여기에 다른 옵션 추가 -->
          </select>
        </div>
        <div class="row row5">
          <select>
            <option disabled selected>직책선택</option>
            <!-- 여기에 다른 옵션 추가 -->
          </select>
        </div>
        <div class="row row6">
          <div class="checkbox-group">
            <label><input type="checkbox">재직인원</label>
            <label><input type="checkbox">퇴직인원</label>
            <label><input type="checkbox">전체</label>
          </div>
        </div>
      </div>
    </div>

    <button class="search_button" id="search_button" @click="searchEmployees">
      검색하기
    </button>

    <!-- 검색 결과 박스 -->
    <div class="searchResultBox">
      <div class="searchResultRow">
        <div class="row">
          <div class="cell title">사원번호</div>
          <div class="cell title">지점</div>
          <div class="cell title">부서</div>
          <div class="cell title">성명</div>
          <div class="cell title">직위</div>
          <div class="cell title">직책</div>
          <div class="cell title">주소</div>
          <div class="cell title">입사일</div>
          <div class="cell title">퇴사일</div>
          <div class="cell title">내선번호</div>
          <div class="cell title">휴대폰</div>
          <div class="cell title">이메일</div>
          <div class="cell title">생년월일</div>
        </div>

        <div class="row" @click="detailEmployees">
          <div class="cell text">J220501910515</div>
          <div class="cell text">남부본사</div>
          <div class="cell text">국취1팀</div>
          <div class="cell text">김철수</div>
          <div class="cell text">수석</div>
          <div class="cell text">본부장</div>
          <div class="cell text">서울시 서대문구 연희로 41다길, 29-10 성광하이치빌라 301호</div>
          <div class="cell text">2015-10-13</div>
          <div class="cell text"></div>
          <div class="cell text">816</div>
          <div class="cell text">010-8888-2222</div>
          <div class="cell text">llosldkjsldkf@naver.com</div>
          <div class="cell text">1991-05-16</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import '@/assets/styles/searchBox.css';


export default {
  name: 'employeeList',
  components: {

  },
  el: "#app",
  data() {
    return {
      columns: ['열 1', '열 2', '열 3', '열 4', '열 5', '열 6', '열 7', '열 8', '열 9', '열 10', '열 11', '열 12', '열 13'],
      employeeName: '',
      branchSelection: '',
      departmentSelection: '',
      positionSelection: '',
      jobTitleSelection: '',
      activeEmployees: false,
      retiredEmployees: false,
      allEmployees: false,
    };
  },
  methods: {
    searchEmployees() {
      // TODO: 입력된 검색 조건을 기반으로 직원을 검색하는 로직 구현
    },
    detailEmployees() {
      alert("클릭")
      // TODO: 클릭된 인원 에 해당하는 상세페이지로 이동 로직

    },
  },
};


</script>
<style scoped>

.menu_list li a {
  content: "";
  position: absolute;
  /* 아래쪽으로 이동하여 사각형이 표시되도록 설정 */
  /*top: 0%;*/
  /*left: 0;*/
  width: 100%; /* 텍스트 길이만큼의 너비로 설정 */
  height: 100%; /* top-menu와 같은 높이로 설정 */
  background-color: #af1818; /* 파란색으로 설정 */
  opacity: 0.5; /* 투명도 조절 */
  border-top-left-radius: 35%; /* 좌측 상단 모서리를 반원 형태로 만듦 */
  border-top-right-radius: 35%; /* 우측 상단 모서리를 반원 형태로 만듦 */
}
</style>