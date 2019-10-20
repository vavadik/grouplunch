import Vue from 'vue';
import Vuex from 'vuex';

const API_URL = "https://api-dot-grouplunch.appspot.com";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
    },
    mutations: {
    },
    actions: {
        async getAllUsers() {
            let response = await fetch(`${API_URL}/users`)
            return await response.json();
        },
        async getAllMessages() {
            let response = await fetch(`${API_URL}/messages`)
            return await response.json();
        }
    },
    modules: {
    },
});
