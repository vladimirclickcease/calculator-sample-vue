import { createStore } from 'vuex'

export default createStore({
  state: {
    current: '',
    previous: null,
    operator: null,
    clickedOperator: false
  },
  getters: {
    getCurrent: (state) => state.current,
    getPrevious: (state) => state.previous,
    getOperator: (state) => state.operator,
    getClickedOperator: (state) => state.clickedOperator
  },
  mutations: {
    setCurrent(state, value) {
      state.current = value;
    },
    setPrevious(state, value) {
      state.previous = value;
    },
    setOperator(state, value) {
      state.operator = value;
    },
    setClickedOperator(state, value) {
      state.clickedOperator = value;
    },
    clearDisplay(state) {
      state.current = '';
      state.previous = null;
      state.operator = null;
      state.clickedOperator = false;
    },
  },
})
