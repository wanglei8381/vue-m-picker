require('./style.css');
var Vue = require('vue');
Vue.component('picker', require('../../src'));
new Vue({
    el: '#mod-container',
    data: function () {
        return {
            list: [
                [
                    '语文',
                    '数学',
                    '英语',
                    '历史',
                    '政治',
                    'css',
                    '几何',
                    '语文',
                    '数学',
                    '英语',
                    '历史',
                    '政治',
                    'css',
                    '几何',],
                [
                    '苹果',
                    '桃子',
                    '梨',
                    '香蕉',
                    '几何'
                ]
            ]
        };
    },
    methods: {
        confirm: function (i, j) {
            console.log(i, j);
        },
        change(index, alias){
            console.log(index, alias);
        }
    }
});