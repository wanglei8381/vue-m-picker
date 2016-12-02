'use strict';

require('vue').use(require('vue-m-touch'));
require('./style.css');

var defaultFnObj = {
    type: Function,
    required: false,
    default: function _default() {}
};
module.exports = {
    template: require('./template.html'),
    data: function data() {
        return { open: false };
    },

    props: {
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
            default: function _default() {
                if (this.list[0] instanceof Array) {
                    var arr = [];
                    for (var i = 0; i < this.list.length; i++) {
                        arr[i] = 0;
                    }
                    return arr;
                }
                return [0, 0, 0];
            }
        },
        cancel: defaultFnObj,
        confirm: defaultFnObj,
        change: defaultFnObj
    },
    computed: {
        datas: function datas() {
            var list = this.list;
            if (!(this.list[0] instanceof Array)) {
                list = [this.list];
            }
            var obj = {};
            list.forEach(function (arr, index) {
                obj[index] = arr;
            });
            return obj;
        },
        style: function style() {
            var length = Object.keys(this.datas).length;
            return {
                width: 100 / length + '%',
                float: 'left'
            };
        }
    },
    watch: {
        // curIdxs(val, oval){
        //     this.cache = val;
        // }
        datas: function datas(nobj, oobj) {
            //主要修复在数据更改时,初始化的对应下表为0
            var size = Object.keys(nobj).length;
            for (var i = 0; i < size; i++) {
                if (nobj[i] !== oobj[i]) {
                    this.cache[i] = 0;
                }
            }
        }
    },
    methods: {
        openWin: function openWin() {
            this.open = true;
        },
        close: function close() {
            this.open = false;
            this.cancel();
        },
        choose: function choose() {
            this.open = false;
            this.confirm.apply(this, this.cache);
        },
        picker: function picker(index, alias) {
            this.cache[parseInt(alias)] = index;
            this.change(parseInt(alias), index);
        }
    },
    mounted: function mounted() {
        this.cache = [];
        this.$nextTick(function () {
            this.cache = this.curIdxs;
        });
    },

    components: {
        'wag_picker_cpt': require('./picker')
    }
};