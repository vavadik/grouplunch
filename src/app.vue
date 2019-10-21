<template>
    <div id="app">
        <vue-telegram-login
            v-if="!currentUser || !currentUser.id"
            mode="callback"
            :telegram-login="botId"
            requestAccess="write"
            @callback="telegramLoginCallback"
        />
        <nav
            v-if="currentUser && currentUser.id"
            class="navbar navbar-expand-lg navbar-dark bg-dark"
            v-navbar
        >
            <span class="navbar-brand">Navbar</span>
            <button class="navbar-toggler" type="button">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" v-show="true">
                <ul class="navbar-nav mr-auto">
                    <router-link exact-active-class="active" class="nav-item" tag="li" to="/">
                        <a href="#" class="nav-link">Home</a>
                    </router-link>
                    <router-link active-class="active" class="nav-item" tag="li" to="/users">
                        <a href="#" class="nav-link">Users</a>
                    </router-link>
                    <router-link active-class="active" class="nav-item" tag="li" to="/about">
                        <a href="#" class="nav-link">About</a>
                    </router-link>
                </ul>
            </div>
        </nav>
        <router-view v-if="currentUser && currentUser.id" />
    </div>
</template>
<script>
import "@/directives/navbar";
import { botId } from "@/config";
import { vueTelegramLogin } from "vue-telegram-login";
import { mapState, mapActions } from "vuex";
export default {
    components: {
        vueTelegramLogin
    },

    computed: {
        ...mapState(["currentUser"])
    },

    data() {
        return {
            botId
        };
    },

    methods: {
        ...mapActions(["logIn"]),
        telegramLoginCallback(user) {
            this.logIn(user);
        }
    }
};
</script>