import Vue from 'vue'
import Picker from '@/src'
import './style.css'

var areas = require('./areas')

/* eslint-disable no-new */
new Vue({
  el: '#container',
  data: function () {
    return {
      list: []
    }
  },
  props: {
    type: {
      type: Number,
      default: 2
    }
  },
  methods: {
    confirm (i, j, k) {
      var province = this.provinceList[i]
      var city = this.cityList[j]
      var area = this.areaList[k]
      if (this.type === 3) {
        console.log(province.name, city.name, area.name)
      } else if (this.type === 2) {
        console.log(province.name, city.name)
      } else if (this.type === 1) {
        console.log(province.name)
      }
    },
    change (itemIndex, index) {
      if (this.type === 1) return
      if (itemIndex === 0) {
        this.provincePicker(index)
      } else if (itemIndex === 1 && this.type === 3) {
        this.cityPicker(index)
      }
    },
    provincePicker (idx) {
      this.cityList = areas[1][idx]
      if (this.type === 2) {
        this.list.splice(1, 1, this.cityList)
      } else {
        this.areaList = areas[2][idx][0]
        this.list.splice(1, 2, this.cityList, this.areaList)
      }

      this.provinceIdx = idx
    },
    cityPicker (idx) {
      this.areaList = areas[2][this.provinceIdx][idx]
      this.list.splice(2, 1, this.areaList)
    }
  },
  mounted () {
    this.provinceIdx = 0
    this.provinceList = areas[0]
    this.cityList = areas[1][0]
    this.areaList = areas[2][0][0]
    if (this.type === 1) {
      this.list = this.provinceList
    } else if (this.type === 2) {
      this.list = [this.provinceList, this.cityList]
    } else if (this.type === 3) {
      this.list = [this.provinceList, this.cityList, this.areaList]
    }
  },

  render () {
    return (
      <Picker list={this.list} label="name" confirm={this.confirm} change={this.change}>
        <input type="text" placeholder="看控制台"/>
      </Picker>
    )
  },

  components: {
    Picker
  }
})
