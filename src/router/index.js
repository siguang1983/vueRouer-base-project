/*
* User: siguang
* Date: 2017/2/25 20:55
* Module: router配置 
*/
import Vue from 'vue'
import Router from 'vue-router'

// 注册路由插件
Vue.use(Router)

export default new Router({
	mode: 'history',
	routes: [
		{
			path: '/login',
			name: 'login',
			meta:{
				requiresAuth: false
			},
			component: (reslove) => require(['../view/login.vue'], reslove)
		},
		{
			path: '/',
			name: 'login',
			meta:{
				requiresAuth: false
			},
			component: (reslove) => require(['../view/login.vue'], reslove)
		},
		{
			path: '/main',
			name: 'main',
			component: (resolve) => require(['../view/main.vue'], resolve),
			children: [
				{
					path: '',
                    name: '登录页',
                    meta: {
                        requiresAuth: true
                    },
                    component: (resolve) => require(['../view/contents/home.vue'], resolve),
				},
				{
					path: 'date',
                    name: '数据列表',
                    meta: {
                        requiresAuth: true
                    },
                    component: (resolve) => require(['../view/contents/date.vue'], resolve),
				},
				{
					path: 'view',
                    name: '视图列表',
                    meta: {
                        requiresAuth: true
                    },
                    component: (resolve) => require(['../view/contents/view.vue'], resolve),
				},
				{
					path: 'download',
                    name: '下载列表',
                    meta: {
                        requiresAuth: true
                    },
                    component: (resolve) => require(['../view/contents/download.vue'], resolve),
				},
				{
					path: 'favorites',
                    name: '收藏',
                    meta: {
                        requiresAuth: true
                    },
                    component: (resolve) => require(['../view/contents/favorites.vue'], resolve),
				}
			]
		},

		{
            path: '*',
            meta: {
                requiresAuth: true
            },
            redirect: function () {
                return '/';
            }
        }
	]
})

