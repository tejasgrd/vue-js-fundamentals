import axios from 'axios';

export default {
  state: {
    user: null,
    foo: 'users-foo',
  },
  mutations: {
    updateCurrentUser(state, user) {
      state.user = user;
    },
  },
  getters: {
    // eslint-disable-next-line no-unused-vars
    foo(state) {
      // eslint-disable-next-line  no-template-curly-in-string
      return `users-getter/${state.foo}`;
    },
  },
  actions: {
    signIn({ commit }) {
      axios.post('/api/sign-in')
        .then((result) => commit('updateCurrentUser', result.data))
        .catch(console.error);
    },
  },
};
