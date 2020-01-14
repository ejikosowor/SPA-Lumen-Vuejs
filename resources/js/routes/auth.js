import AuthLayout from '../layout/AuthLayout.vue';

//Views
import Login from '../views/Login.vue';
import Register from '../views/Register.vue';

const authRoutes = {
    path: '/auth',
    component: AuthLayout,
    children: [
        {
            path: '/login',
            name: 'login',
            component: Login,
            meta: {
                guest: true,
            }
        },
        {
            path: '/register',
            name: 'register',
            component: Register,
            meta: {
                guest: true,
            }
        }
    ]
};

export { authRoutes };