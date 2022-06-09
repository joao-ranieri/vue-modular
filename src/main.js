import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import authModule from './modules/auth';
import userModule from './modules/user';

import { registerModules } from './register-modules';

registerModules({
    auth: authModule,
    user: userModule,
});

const Vue = createApp(App);
Vue.use(router);
Vue.use(store);
Vue.mount('#app');