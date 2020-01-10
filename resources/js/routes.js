import DefaultLayout from './layout/DefaultLayout.vue';
import AuthLayout from './layout/AuthLayout.vue';

//Pages
import Home from './pages/Home.vue';
import Login from './pages/Login.vue';

const routes = [
    {
        path: '/',
        component: DefaultLayout,
        children: [
            {
                path: '/',
                component: Home
            }
        ]
    },
    {
        path: '/auth',
        component: AuthLayout,
        redirect: { name: 'Login' },
        children: [
            {
                path: '/',
                name: 'Login',
                component: Login
            }
        ]
    }
];

export default routes;