export default ({
  state: {
    options: [],
  },

  mutations: {
    'ADD_OPTIONS': (state, option) => {
      state.options.push(option)
    }
  },
  actions: {
    addOptions(context, option) {
      context.commit('ADD_OPTIONS', option);
    }
  },
  getters: {
    OPTIONS: state =>{
      return state.options
    }
  },
});
