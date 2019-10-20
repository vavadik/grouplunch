<template>
    <div id="app">
        <vue-telegram-login
            mode="callback"
            telegram-login="vadim_galanov_test_bot"
            @callback="vueTelegramLogin"
        />
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark" v-navbar>
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
        <div id="nav"></div>
        <router-view />
    </div>
</template>
<script>
import "@/directives/navbar";
import { vueTelegramLogin } from "vue-telegram-login";
export default {
    components: {
        vueTelegramLogin
    },

    methods: {
        telegramLoginCallback(user) {
            console.log(user);
        }
    }
};
</script>