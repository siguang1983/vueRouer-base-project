/*
* User: siguang
* Date: 2017/2/25 20:55
* Module: 公用方法 
*/
var auth = {

	// 设置值
	setStorage(key, val){
		localStorage.setItem(key, val);
	},

	// 取值
	getStorage(key){
		return localStorage.getItem(key)
	},

	// 删除值
	deleteStorage(key){
		localStorage.removeItem(key);
	},

	// 是否登录
	loggedIn(){
		return this.getStorage('isLogin') == 'true' ? true : false;
	},

	// 退出
	signout(){
		this.deleteStorage('isLogin');
	}

}

export default auth;
