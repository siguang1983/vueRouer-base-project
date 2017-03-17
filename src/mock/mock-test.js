/*
 * User: siguang
 * Date: 2017/2/25 20:55
 * Module: mock数据 
 */
import Mock from 'mockjs'
var Random = Mock.Random;

Mock.mock('/login', {
    "message": "登录成功",
    "data": {
        menu: []
    },
    "status": 0
})

Mock.mock('/logout', {
    "message": "退出成功",
    "data": {
        menu: []
    },
    "status": 0
})