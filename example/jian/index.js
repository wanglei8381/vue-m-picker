require('./style.css');
var Vue = require('vue');
Vue.component('picker', require('../../src'));
new Vue({
    el: '#mod-container',
    data: function () {
        return {
            list: [
                [
                {label: '语文', value: '1'},
                {label: '数学', value: '1'},
                {label: '英语', value: '1'},
                {label: '历史', value: '1'},
                {label: '政治', value: '1'},
                {label: 'css', value: '1'},
                {label: '几何', value: '1'},
                {label: '语文', value: '1'},
                {label: '数学', value: '1'},
                {label: '英语', value: '1'},
                {label: '历史', value: '1'},
                {label: '政治', value: '1'},
                {label: 'css', value: '1'},
                {label: '几何', value: '1'}
            ], [
                {label: '苹果', value: '1'},
                {label: '桃子', value: '1'},
                {label: '梨', value: '1'},
                {label: '香蕉', value: '1'},
                {label: '几何', value: '1'}
            ]
            ],
            curIdxs: [1, 3],
            message: '',
            picker: {},
            open: false
        };
    },
    methods: {
        choose: function () {
            this.open = true;
        },
        cancel: function () {
            console.log('cancel');
            this.open = false;
        },
        confirm: function (item, index) {
            this.open = false;
            console.log(item, index);
            this.picker = item;
        },
        change(item, index, alias){
            console.log(item, index, alias);
        }
    },
    mounted(){
        // this.curIdx=2;
        // window.addEventListener('click', ()=> {
        //     this.open = false;
        // });
    }
});