import { createStore } from 'vuex'

export default createStore({
  state: {
    allColumns: [],
    UserList: [],
  },
  getters: {
  },
  mutations: {
    setUsers(state, new_value) {
      state.allUsers = new_value;
    },
    setColumns(state, new_value) {
      state.allColumns = new_value;
    },
    setUserList(state, new_value) {
      state.UserList = new_value;
    },
    deleteUserFromId(state, index) {
    state.UserList.findIndex(oneUser => oneUser.id == id);
    state.id.splice(index, 1);
    }
    
  },
  actions: {

  },
  modules: {
  }
})
