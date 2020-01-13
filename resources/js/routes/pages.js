import DefaultLayout from '../layout/DefaultLayout.vue';

//Pages
import Home from '../pages/Home.vue';

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