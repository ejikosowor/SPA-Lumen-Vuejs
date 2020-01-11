import AuthLayout from '../layout/AuthLayout.vue';

//Pages
import Login from '../pages/Login.vue';
import Register from '../pages/Register.vue';

const authRoutes = {
    path: '/auth',
    component: AuthLayout,
    children: [
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/register',
            name: 'register',
            component: Register
        }
    ]
};

export { authRoutes };