
一、路由设置
	1、{
			path: '/',
			name: 'main',
			component: (resolve) => require(['../components/main.vue'], resolve)
		}

	2、import main from '../components/main'
		{
			path: '/main',
			name: 'main',
			component: main
		}


二、动态路由参数

	$route.params  获取


三、路由跳转

	1、router.push(location): js内加路由跳转  router.push({path: '/admin/'})

	2、router.go(n): history历史记录跳转

	<router-link to="home">home</router-link>


四、<router-view> 渲染路由视图组件

	<router-view></router-view>


五、重命名 redirect

	{
		path: '*',
        redirect: function () {
            return '/admin';
        }
	}


六、History模式

	export default new VueRouter({
		mode: 'history',
		routes: [...]
	})

	mode三总值

		hash: 使用 URL hash 值来作路由。支持所有浏览器，包括不支持 HTML5 History Api 的浏览器。

		history: 依赖 HTML5 History API 和服务器配置。查看 HTML5 History 模式.

		abstract: 支持所有 JavaScript 运行环境，如 Node.js 服务器端。如果发现没有浏览器的 API，路由会自动强制进入这个模式


七、router 钩子

	1、beforeEach

		var auth = {
			loggedIn: function () {
		        return localStorage.getItem(KEY_OF_LOGGEDIN) === 'true';
		    }
		}

		// to: 要进入目录的路由对象
		// from: 要离开的路由对象
		// next: function, 用该方法来resolve这个钩子
		router.beforeEach((to, from, next) => {
		    if (to.matched.some(record => record.meta.requiresAuth)) {
		        if (!auth.loggedIn()) {
		            next({
		                path: '/login',
		                query: {redirect: to.fullPath},
		            });
		        } else if (auth.requiresAlterPassword()){
		            next({
		                path: '/firstLogin'
		            });
		        } else {
		            next();
		        }
		    } else {
		        next();
		    }
		});


	2、meta 定义路由的时候可以配置meta字段

		可以通过它来设置不需要判断登录的路由，在beforeEach的时候进行处理

		{
            path: '/firstLogin',
            name: 'firstLogin',
            meta: {
                requiresAuth: false
            },
            component: (resolve) => require(['../views/firstLogin.vue'], resolve),
        }


八、路由对象
	
	1、$route.path: 当前路由的路径，总是解析为绝对路径，如 "/foo/bar"

	2、$route.params: 获取动态路由的参数

	3、$route.query:  URL 查询参数, 例如，对于路径 /foo?user=1，则有 $route.query.user == 1

	4、$route.hash: 路由的 hash 值 (带 #) ，如果没有 hash 值，则为空字符串。

	5、$route.matched: 

	6、$route.name: 路由的名称









