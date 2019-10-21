import Vue from 'vue';
import Vuex from 'vuex';
import { find, logIn } from '@/api';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        currentUser: null
    },
    mutations: {
        logIn(state, user) {
            state.currentUser = user;
        },
        logOut(state) {
            state.currentUser = null;
        }
    },
    actions: {
        getAllUsers() {
            return find('user')
        },
        getAllMessages() {
            return find('message')
        },
        async logIn({ commit }, user) {
            let response = await logIn(user);
            commit('logIn', response);
        }
    },
});
