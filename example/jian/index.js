require('./style.css');
var Vue = require('vue');
Vue.component('picker', require('../../src'));
new Vue({
    el: '#mod-container',
    data: {
        list: [
            '语文',
            '数学',
            '英语',
            '历史',
            '政治',
            'css',
            '几何'
        ],
        name: ''
    },
    methods: {
        confirm: function (i) {
            this.name = this.list[i];
        }
    }
});