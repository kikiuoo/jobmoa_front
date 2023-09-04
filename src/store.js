/*
* 아래 코드에서는 createStore 함수를 사용하여 Vuex Store를 생성하고, 상태(State), 동작(Action), 변이(Mutation), 게터(Getter)를 정의하였습니다.
* 위와 같이 구성한 store.js 파일을 Vuex Store로 활용할 수 있습니다.
* 다른 컴포넌트에서 Vuex Store에 접근하여 데이터를 사용하고자 할 때는 mapState, mapActions, mapMutations, mapGetters 등의 헬퍼 함수를 사용하여 편리하게 접근할 수 있습니다.
* */


import { createStore } from 'vuex';

// 상태(State)
// 애플리케이션의 데이터를 저장하는 객체로 state 객체에 데이터를 저장합니다. 변수 초기값으로 저장
const state = {
    today: '',
    option: '',
};

// 동작(Action)
// 비동기 로직이나 비즈니스 로직을 담당하는 메소드입니다. setToday라는 동작을 정의하여 SET_TODAY 변이를 호출하고 있습니다.
const actions = {
    setToday({ commit }, today) {
        commit('SET_TODAY', today);
    },
    setOption({ commit }, option) {
        commit('SET_OPTION', option);
    },
};

// 변이(Mutation):
// state 객체의 데이터를 변경하는 메소드입니다. 변이는 동기적으로 동작해야 하며, 어떤 변이를 호출할 때 상태를 변경하려면 commit을 사용하여 호출합니다.
const mutations = {
    SET_TODAY(state, today) {
        console.log("setToday 뮤테이션 호출됨. today:", today);
        state.today = today;
    },
    SET_OPTION(state, option) {
        console.log("setOption 뮤테이션 호출됨. option:", option);
        state.option = option;
    },
};

// 게터(Getter):
// 상태를 기반으로 계산된 값을 반환하는 메소드 getToday라는 게터를 정의하여 today 변수를 반환하도록 설정했습니다.
const getters = {
    getToday: (state) => state.today,
    getOption: (state) => state.option,
};

// Vuex Store 생성
const store = createStore({
    state,
    actions,
    mutations,
    getters,
});

export default store;
