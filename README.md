#vue-m-picker
 <h5>基于vue的移动端选择工具</h5>
 <h6>v0.0.3版本以后支持Vue2.0</h6>
##Install
npm install vue-m-picker
##Use
<pre>
var Vue = require('vue');
Vue.component('picker', require('vue-m-picker'));
&lt;picker :list="list" :confirm="confirm" :change="change">
input type="text" placeholder="触发条件">
&lt;/picker>

//通过props传值
props: {
    list: {//显示的数组,数组中对象格式是{label:'显示的内容',value:'值'}
        type: Array,
        required: true
    },
    label: {//label的别名,如果是对象通过label来展示显示文字
        type: String,
        required: false,
        default: 'label'
    },
    curIdxs: {//当前选中的下标
        type: Number,
        required: false,
        default: [0]
    },
    cancel: {//点击取消触发改函数
        type: Function,
        required: false,
        default: function () {
            return function () {
            };
        }
    },
    confirm: {//点击确定按钮触发改函数
         type: Function,
         required: false,
         default: function () {
             return function () {
             };
         }
    },
    change: {//每次值改变调用改函数
       type: Function,
       required: false,
       default: function () {
           return function () {
           };
       }
    }
}

list的普通用法
list=['A','B','C']
或对象
list=[{label:'A',other:'xx'},{'B',other:'xx'},{'C',other:'xx'}]
支持多级联动
list=[
    [{id:1,name:'A'},{id:2,name:'B'},{id:3,name:'C'}],
    [{id:4,name:'D',fid:1},{id:5,name:'D',fid:2},{id:6,name:'D',fid:3}]
    ]
第一个数组是第一级 ,第二个数组是第二级,插件并没有实现第二级随第一级联动,
需要手动修改,在每次改变数据时,会调用change函数,在change函数中会传入两个参数,
第一个参数是第几级(从0开始),第二个参数表示第几级的选中的下标
</pre>