#vue-pullrefresh
 <h5>基于vue的下拉刷新组件</h5>
##Install
npm install vue-pullrefresh
##Use
<pre>
var Vue = require('vue');
Vue.component('pullrefresh-cpt', require('vue-pullrefresh'));
//在模版文件中使用,组件从距离顶部的位置开始, color样式颜色
//&lt;pullrefresh-cpt :top="30" color="red">&lt;/pullrefresh-cpt>
//"pull-to-refresh-close" 父组件通知关闭
//"pull-to-refresh" 子组件通知刷新
</pre>