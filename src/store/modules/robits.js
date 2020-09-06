import axios from 'axios';

export default {
  namespaced: true,
  state: {
    cart: [],
    parts: null,
    foo: 'robot-foo',
  },
  mutations: {
    addRobotToCart(state, robot) {
      state.cart.push(robot);
    },
    updatePart(state, parts) {
      state.parts = parts;
    },
  },
  actions: {
    getParts({ commit }) {
      axios.get('/api/parts')
        .then((result) => commit('updatePart', result.data))
        .catch(console.log);
    },
    addRobotTocart({ commit, state }, robot) {
      const cart = [...state.cart, robot];
      return axios.post('/api/cart', cart)
        .then(() => commit('addRobotToCart', robot));
    },
  },
  getters: {
    cartSaleItems(state) {
      return state.cart.filter((item) => item.head.onSale);
    },
    // eslint-disable-next-line no-unused-vars
    foo(state) {
      // eslint-disable-next-line  no-template-curly-in-string
      return `robots-getter/${state.foo}`;
    },
  },
};
