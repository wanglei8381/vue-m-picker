'use strict';

require('vue').use(require('vue-m-touch'));
require('./style.css');
module.exports = {
    template: require('./template.html'),
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
        value: {
            type: String,
            required: false,
            default: 'value'
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
        open: {
            type: Boolean,
            required: true
        },
        cancel: {
            type: Function,
            required: true
        },
        confirm: {
            type: Function,
            required: true
        },
        change: {
            type: Function,
            required: false,
            default: function _default() {
                return function () {};
            }
        }
    },
    computed: {
        datas: function datas() {
            var list = this.list;
            if (!(this.list[0] instanceof Array)) {
                list = [this.list];
            }
            return list;
        },
        style: function style() {
            var length = this.datas.length;
            return {
                width: 100 / length + '%',
                float: 'left'
            };
        }
    },
    methods: {
        choose: function choose() {
            this.confirm.apply(this, this.cache);
        },
        picker: function picker(item, index, alias) {
            this.cache[alias] = item;
            this.change(item, index, alias);
        }
    },
    mounted: function mounted() {
        this.cache = [];
    },

    components: {
        'wag_picker_cpt': require('./picker')
    }
};