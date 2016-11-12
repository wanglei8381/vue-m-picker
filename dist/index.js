'use strict';

require('vue').use(require('vue-m-touch'));
require('./style.css');

var defaultFnObj = {
    type: Function,
    required: false,
    default: function _default() {
        return function () {};
    }
};
module.exports = {
    template: require('./template.html'),
    data: function data() {
        return { open: false };
    },

    props: {
        list: {
            type: Array,
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
                return [0];
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
            var _this = this;
            return list.map(function (arr) {
                return arr.map(function (item) {
                    return typeof item === 'string' ? item : item[_this.label];
                });
            });
        },
        style: function style() {
            var length = this.datas.length;
            return {
                width: 100 / length + '%',
                float: 'left'
            };
        }
    },
    watch: {
        curIdxs: function curIdxs(val) {
            this.cache = val;
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
            this.cache[alias] = index;
            this.change(alias, index);
        }
    },
    mounted: function mounted() {

        this.$nextTick(function () {
            this.cache = this.curIdxs;
        });
    },

    components: {
        'wag_picker_cpt': require('./picker')
    }
};