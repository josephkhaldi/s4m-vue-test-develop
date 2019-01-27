import Vue from 'vue';
import Vuex from 'vuex';

import users from './modules/users';
import options from './modules/options';
import selectedUsers from './modules/selectedUsers';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    users,
    options,
    selectedUsers
  },
});
