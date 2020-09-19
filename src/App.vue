<template>
    <div id="app">
        <nav class="navbar is-fixed-top" role="navigation" aria-label="main navigation">
            <div class="navbar-brand">
                <router-link to="/" class="navbar-item">
                    <img src="./assets/logo.png">
                </router-link>
                <a role="button" v-on:click="menu = !menu" class="navbar-burger burger" aria-label="menu" aria-expanded="false">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>
            <div class="navbar-menu " v-bind:class="{'is-active': menu}">
                <div class="navbar-start">
                    <router-link to="/" class="navbar-item"><i class="las la-home"></i> Home </router-link>
                    <router-link to="/about" class="navbar-item has-text-primary"><i class="las la-qrcode"></i> Scan </router-link>
                    <router-link to="/manual" class="navbar-item has-text-primary"><i class="las la-edit"></i> Add Card </router-link>
                    <router-link to="/logout" class="navbar-item has-text-info"><i class="las la-user-slash "></i> Logout</router-link>
                    <a onclick="exitApp()" class="navbar-item has-text-danger"><i class="las la-sign-out-alt"></i> Exit</a>
                </div>
            </div>
        </nav>
        <!-- <progress class="progress is-small is-warning" v-show="loader" max="100">100%</progress> -->
        <router-view v-on:loaded="menuStatus" />
    </div>
</template>
<script>
export default {
    data() {
        return {
            menu: false,
            loader: false,
            baseApiUrl: 'https://thesupercop.com/webapis/'
        }
    },
    methods: {
        menuStatus: function(e) {
            this.menu = e;
        }
    }
}
</script>
<style>
#app {
    font-family: 'Heebo', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    padding-top: 3.25rem;
}

h1,
h2,
h3,
h4 {
    font-family: 'Acme', sans-serif;
}

button,
input,
form,
select,
textarea,
.button {
    font-family: 'Heebo', sans-serif;
}
.button { font-weight:bold; }
.navbar {border-bottom:1px solid #bbb; box-shadow:0px 0px 0px 8px rgba(228, 228, 228, 0.8);}
.hero .hero-body {
    padding-top: 1rem;
    padding-bottom: 1rem;
}

.footer.is-fixed-bottom {
    bottom: 0;
    left: 0;
    position: fixed;
    right: 0;
    z-index: 28;
}
.card-header { font-family: 'Acme', sans-serif; }
.card-header .icon .las {
    font-size: 2rem;
}
</style>