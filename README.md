# vue-m-picker
 <h5>基于vue的移动端选择工具</h5>
 <h6>v0.0.3版本以后支持Vue2.0</h6>
 
## Install
npm install vue-m-picker

## Use
<pre>
var Vue = require('vue');
//声明全局或局部组件
Vue.component('picker', require('vue-m-picker'));

//页面引入方式
&lt;picker :list="list" label="label" :cur-idxs="curIdxs" :cancel="cancel" :confirm="confirm" :change="change">
//触发条件,可以是input,按钮或其他任何元素
&lt;input type="text" placeholder="触发条件">
&lt;/picker>
</pre>

### Params
#### list
<pre>
Type : Array
简单使用  list=['A','B','C']
支持使用对象  list=[{name:'A',other:'xx'},{name:'B',other:'xx'}]
支持多级联动   list=[
             [{id:1,name:'A'},{id:2,name:'B'},{id:3,name:'C'}],
             [{id:4,name:'D',fid:1},{id:5,name:'D',fid:2},{id:6,name:'D',fid:3}]
             ]
</pre>
注意:如果使用多级联动,第一个数组是第一级 ,第二个数组是第二级,插件并没有实现第二级随第一级联动。
如果想实现多级联动,可使用change方法自行绑定。
####label
<pre>
Type : String
如果list中的item是对象,可使用label来指定显示内容,如label="name"
</pre>
#### cur-idxs
<pre>
Type : Array
Default : [0]
初始指定的下标,多级可采用 [0,0,...] 形式指定
</pre>
#### cancel
<pre>
Type : Function
点击取消按钮触发
</pre>
#### confirm
<pre>
Type : Function
点击确定按钮触发
函数返回值为每一级选中项的下标(index1,index2,...),下标从0开始
</pre>
#### change
<pre>
Type : Function
每一级的值更改时触发
函数返回值有两项(itemIndex,index),均从0开始
itemIndex: 第几级
index: 选中项的下标
</pre>
