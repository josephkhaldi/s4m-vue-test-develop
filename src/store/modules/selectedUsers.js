export default ({
  state: {
    selectedUsers: [],
  },

  mutations: {
    'SET_SELECTEDUSERS': (state, payload) => {
      state.selectedUsers.push(payload);
    },
    'REMOVE_SELECTEDUSERS': (state, payload) => {
      state.selectedUsers.splice(payload, 1);
    }
  },
  actions: {
    setSeletedUsers(context, users){
      context.commit('SET_SELECTEDUSERS', users)
    },
    removeSeletedUsers(context, users){
      context.commit('REMOVE_SELECTEDUSERS', users)
    }
  },
  getters: {
    SELECTED_USERS: state =>{
      return state.selectedUsers
    }
  },
});
