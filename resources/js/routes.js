import DefaultLayout from './layout/DefaultLayout.vue';

//Pages
import Home from './pages/Home.vue';

const routes = [
    {
        path: '/',
        name: 'home',
        component: DefaultLayout,
        children: [
            {
                path: '/',
                component: Home
            }
        ]
    }
];

export default routes;