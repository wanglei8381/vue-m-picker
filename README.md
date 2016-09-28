#vue-pullrefresh
 <h5>基于vue的移动端选择工具</h5>
##Install
npm install vue-m-picker
##Use
<pre>
var Vue = require('vue');
Vue.component('region-picker', require('vue-m-picker'));
//在模版文件中使用,组件从距离顶部的位置开始, color样式颜色
//&lt;region-picker :list="provinceList" :picker.sync="province" :cur-idx.sync="provinceIdx" label="name"
                                       value="code">&lt;/region-picker>

//通过props传值
props: {
    list: {//显示的数组,数组中对象格式是{label:'显示的内容',value:'值'}
        type: Array,
        required: true
    },
    picker: {//接受选择的结果
        type: Object,
        required: true,
        twoWay: true
    },
    label: {//label的别名
        type: String,
        required: false,
        default: 'label'
    },
    value: {value的别名
        type: String,
        required: false,
        default: 'value'
    },
    curIdx: {//当前选中的下标,每次修改都会同步到父组件中
        type: Number,
        required: false,
        default: 0
    }
}
</pre>