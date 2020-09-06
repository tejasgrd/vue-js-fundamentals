import Vue from 'vue';
import Vuex from 'vuex';
import robotsModule from './modules/robits';
import usersModule from './modules/users';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    foo: 'root-foo',
  },
  modules: {
    robots: robotsModule,
    users: usersModule,
  },
  getters: {
    // eslint-disable-next-line no-unused-vars
    foo(state) {
      // eslint-disable-next-line  no-template-curly-in-string
      return `root-getter/${state.foo}`;
    },
  },
});
