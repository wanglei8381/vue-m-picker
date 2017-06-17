import Vue from 'vue'
import Picker from '@/src'
import './style.css'

/* eslint-disable no-new */
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

  render (h) {
    return (
      <Picker list={this.list} confirm={this.confirm}>
        <input value={this.name} readonly type="text" placeholder="选择"/>
        <div slot="header" class="picker-header">
          <div class="picker-title">名称</div>
        </div>
      </Picker>
    )
  },

  methods: {
    confirm: function (i) {
      this.name = this.list[i]
    }
  },

  components: {
    Picker
  }
})
