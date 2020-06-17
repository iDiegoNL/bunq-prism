import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'
import '../node_modules/css.gg/icons/all.css'

import VueApollo from "vue-apollo";
import ApolloClient from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";

Vue.use(VueApollo);

Vue.config.productionTip = false

const getHeaders = () => {
    const headers = {};
    const token = window.localStorage.getItem('apollo-token');
    if (token) {
        headers.authorization = `Bearer ${token}`;
    }
    return headers;
};

const link = new HttpLink({
    uri: 'http://localhost:8001/graphql',
    fetch,
    headers: getHeaders()
});

const client = new ApolloClient({
    link: link,
    cache: new InMemoryCache({
        addTypename: true
    })
});

const apolloProvider = new VueApollo({
    defaultClient: client,
})

new Vue({
    router,
    apolloProvider,
    render: h => h(App)
}).$mount('#app')
