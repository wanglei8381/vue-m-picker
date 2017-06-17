<template>
  <div>
    <div class="open-wrapper" v-touch:tap="openWin">
      <slot></slot>
    </div>
    <div v-touch:tap="close" class="picker-container" :class="{'open':open}">
      <div class="picker-wrapper" v-touch:tap.stop>
        <div class="picker-action">
          <span class="picker-btn" v-touch:tap="close">取消</span>
          <span class="picker-btn picker-btn-confirm" v-touch:tap="choose">确定</span>
        </div>
        <slot name="header"></slot>
        <div :style="style" v-for="(item, index) in datas" :key="index">
          <Picker
              :list="item"
              @picker="picker"
              :alias="index"
              :label="label"
              :cur-idx="curIdxs[index]">
          </Picker>
        </div>
      </div>
    </div>
    <div class="picker-mask" v-show="open"></div>
  </div>
</template>
<script type="text/babel">
  import Picker from './Picker'

  const defaultFnObj = {
    type: Function,
    required: false,
    default: function () {
    }
  }

  const props = {
    list: {
      type: [Object, Array],
      required: true
    },
    label: {
      type: String,
      required: false,
      default: 'label'
    },
    curIdxs: {
      type: Array,
      required: false,
      default: function () {
        if (this.list[0] instanceof Array) {
          var arr = []
          for (let i = 0; i < this.list.length; i++) {
            arr[i] = 0
          }
          return arr
        }
        return [0, 0, 0]
      }
    },
    cancel: defaultFnObj,
    confirm: defaultFnObj,
    change: defaultFnObj
  }

  export default {
    name: 'vue-m-picker',
    props,
    data () {
      return { open: false }
    },

    computed: {
      datas () {
        var list = this.list
        if (!(this.list[0] instanceof Array)) {
          list = [this.list]
        }
        var obj = {}
        list.forEach(function (arr, index) {
          obj[index] = arr
        })
        return obj
      },
      style () {
        var length = Object.keys(this.datas).length
        return {
          width: 100 / length + '%',
          float: 'left'
        }
      }
    },

    watch: {
      // curIdxs(val, oval){
      //     this.cache = val
      // }
      datas (nobj, oobj) {
        // 主要修复在数据更改时,初始化的对应下表为0
        let size = Object.keys(nobj).length
        for (let i = 0; i < size; i++) {
          if (nobj[i] !== oobj[i]) {
            this.cache[i] = 0
          }
        }
      }
    },

    methods: {
      openWin () {
        this.open = true
      },
      close () {
        this.open = false
        this.cancel()
      },
      choose () {
        this.open = false
        this.confirm.apply(this, this.cache)
      },
      picker (index, alias) {
        this.cache[parseInt(alias)] = index
        this.change(parseInt(alias), index)
      }
    },

    mounted () {
      this.cache = []
      this.$nextTick(function () {
        this.cache = this.curIdxs
      })
    },

    components: {
      Picker
    }
  }

</script>
