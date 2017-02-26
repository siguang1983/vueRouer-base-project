import Vue from 'vue'
import App from './App'
import auth from './utils/utils.js'
import router from './router'
import mock from './mock/mock-test.js'

import './assets/css/index.css'

new Vue({
	el: '#app',
	router,
	template: '<App/>',
	components: { App }
})

// 路由跳转前进行处理
router.beforeEach((to, from, next) => {

    // 查看当前路由的meta配置是否需要登录验证
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (!auth.loggedIn()) {
            next({
                path: '/login',
                query: {redirect: to.fullPath},
            });
        } else {
            next();
        }
    } else {
        next();
    }
});