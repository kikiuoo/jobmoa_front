/*
동작 : 4. 라우터 설정을 담당하는 파일입니다. 각 경로에 맞는 컴포넌트를 매핑하고, 페이지 라우팅을 구현합니다.
* */

import {createRouter, createWebHistory} from 'vue-router';

const routes = [
    {
        path: '/',
        name: 'loginPage',
        component: () => import('@/views/loginPage.vue'),
    },
    {
        path: '/main',
        name: 'mainPage',
        component: () => import('@/views/mainPage.vue'),
    },
    {
        path: '/employeeList',
        name: 'employeeList',
        component: () => import('@/views/employeeList.vue'),
    },
    {
        path: '/personnelRecords',
        name: 'personnelRecords',
        component: () => import('@/views/personnelRecords.vue'),
    },
    {
        path: '/employmentCertificate',
        name: 'employmentCertificate',
        component: () => import('@/views/workDocument.vue'),
    },
    {
        path: '/careerCertificate',
        name: 'careerCertificate',
        component: () => import('@/views/careerDocument.vue'),
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
