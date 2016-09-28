require('./style.css');
var Vue = require('Vue');
Vue.component('region-picker', require('../src'));
var areas = require('./areas');
new Vue({
    el: 'body',
    data: function () {
        return {
            provinceList: [],
            cityList: [],
            areaList: [],
            province: {},
            city: {},
            area: {},
            provinceIdx: 0,
            cityIdx: 0,
            areaIdx: 0,
            message: '',
            open: false,
            isWatch: false
        };
    },
    watch: {
        provinceIdx(idx){
            if (!this.isWatch) return;
            this.cityList = areas[1][idx];
            this.areaList = areas[2][idx][0];
            this.city = this.cityList[0];
            this.area = this.areaList[0];
            this.cityIdx = 0;
            this.areaIdx = 0;
        },
        cityIdx(idx){
            if (!this.isWatch) return;
            this.areaList = areas[2][idx][0];
            this.area = this.areaList[0];
            this.areaIdx = 0;
        }
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
            this.message = this.province.name + '/' + this.city.name + '/' + this.area.name;
        }
    },
    ready(){
        this.provinceIdx = 1;
        this.cityIdx = 0;
        this.areaIdx = 1;
        this.provinceList = areas[0];
        this.cityList = areas[1][this.provinceIdx];
        this.areaList = areas[2][this.provinceIdx][this.cityIdx];
        this.province = this.provinceList[this.provinceIdx];
        this.city = this.cityList[this.cityIdx];
        this.area = this.areaList[this.areaIdx];
        window.addEventListener('click', ()=> {
            this.open = false;
        });
        this.$nextTick(()=> {
            this.isWatch = true;
        });
    }
});