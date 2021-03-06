'use strict'
import Vue from 'vue';
import VueRouter from 'vue-router';
import Jui from '../src/build';

import App from './modules/app.vue';
import IndexView from './modules/indexView.vue';
import LayerView from './modules/layerView.vue';
import swipeView from './modules/swipeView.vue';
import toastView from './modules/toastView.vue';
import actionsheetView from './modules/actionsheetView.vue';
import pickerView from './modules/pickerView.vue';
import searchView from './modules/searchView.vue';
import headerView from './modules/headerView.vue';
import cellView from './modules/cellView.vue';
import gridsView from './modules/gridsView.vue';
import switchView from './modules/switchView.vue';
import radioView from './modules/radioView.vue';
import checklistView from './modules/checklistView.vue';

//使用路由
Vue.use(VueRouter);
Vue.use(Jui);

//初始化
var router = new VueRouter()

//路由设置
router.map({
	'/':{
		component:IndexView
	},
    '/layer': {
    	component: LayerView
    },
    '/swipe': {
        component: swipeView
    },
    '/toast': {
        component: toastView
    },
    '/actionSheet': {
        component: actionsheetView
    },
    '/picker': {
        component: pickerView
    },
    '/search': {
        component: searchView
    },
    '/header': {
        component:headerView
    },
    '/cell': {
        component:cellView
    },
    '/switch': {
        component:switchView
    },
    '/radio': {
        component:radioView
    },
    '/checklist': {
        component:checklistView
    },
    '/grids': {
        component:gridsView
    }
})

//默认路径
router.redirect({
  '*': '/'
})
//挂载
router.start(App, '#app')