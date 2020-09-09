// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import keep from '././components/keep-alive-child'


//productionTip设置为 false 以阻止 vue 在启动时生成生产提示。
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

//el Vue实例挂载目标 el：'#app' 的入口就是id='app'的DOM元素

//template 模版占位符 在组件模版中<template></template>占位符内内容必须包裹在一个div里

//render 字符串模版的代替方案，

//components 组件注册


/**************************************************************/
//Vue.filter全局过滤器
    /*
    * relativeTime ：过滤器的名称 组件中使用方式为<div>{{Value | relativeTime}}</div>
    * previusTime: 过滤器的传入对象
    * 过滤器return后为返回值
    * */
Vue.filter('relativeTime',function (previousTime) {
    return moment(previousTime).fromNow()
})

/**********************************************************/
//组件注册
//     创建后的组件引入
// Vue.component('myview',keep)

/*
* mycomponet:自定义组件的名
* data 写函数,
*template 组件的内容，元素和触发事件
*/
Vue.component('mycomponet',{
    data(){
        return{
            count:1,
        }
    },
    template:'<div><button onclick="count ++"></button>{{count}}</div>>'
})

/*******************************************/
//注册自定义指令
Vue.directive('myactive',function (el,binding,vnode,oldVnode) {
    // console.log(el);
    console.log(binding.value);
    console.log(vnode);
    console.log(oldVnode);
    el.style = 'backgroundColor' + 'blue';
})





