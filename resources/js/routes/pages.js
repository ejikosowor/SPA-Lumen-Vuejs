import DefaultLayout from '../layout/DefaultLayout.vue';

//Views
import Home from '../views/Home.vue';

const pageRoutes = {
    path: '/',
    component: DefaultLayout,
    children: [
        {
            path: '/',
            component: Home,
            name: 'home',
            meta: {
                auth: true,
            }
        }
    ]
};

export { pageRoutes };