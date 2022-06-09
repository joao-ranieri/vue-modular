import Module from './Module.vue';
import Login from './views/Login.vue';

export default {
    path: '/',
    component: Module,
    children: [
        {
            path: '/',
            component: Login
        },
    ]
};