require('./style.css');
var Vue = require('vue');
Vue.component('picker', require('../../src'));
new Vue({
    el: '#mod-container',
    data: function () {
        return {
            list: [
                {label: '语文', value: '1'},
                {label: '数学', value: '1'},
                {label: '英语', value: '1'},
                {label: '历史', value: '1'},
                {label: '政治', value: '1'},
                {label: 'css', value: '1'},
                {label: '几何', value: '1'}
            ],
            curIdx: 1,
            message: '',
            picker: {},
            open: false
        };
    },
    methods: {
        choose: function () {
            this.open = true;
        },
        cancle: function () {
            this.open = false;
        },
        confirm: function () {
            this.open = false;
            this.message = this.picker.label;
        },
        result(item, index){
            console.log(item, index);
            this.picker = item;
        }
    },
    mounted(){
        // this.curIdx=2;
        window.addEventListener('click', ()=> {
            this.open = false;
        });
    }
});