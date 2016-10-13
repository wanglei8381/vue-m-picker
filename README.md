#vue-m-picker
 <h5>基于vue的移动端选择工具</h5>
 <h6>v0.0.3版本以后支持Vue2.0</h6>
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
    curIdx: {//当前选中的下标
        type: Number,
        required: false,
        default: 0
    }
}

//通知结果通过绑定picker事件完成
//@picker="result"
</pre>