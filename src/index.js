require('vue').use(require('vue-m-touch'));
require('./style.css');

var defaultFnObj = {
    type: Function,
    required: false,
    default: function () {
        return function () {
        };
    }
};
module.exports = {
    template: require('./template.html'),
    data(){
        return {open: false}
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
            default: function () {
                if (this.list[0] instanceof Array) {
                    var arr = [];
                    for (let i = 0; i < this.list.length; i++) {
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
        datas(){
            var list = this.list;
            if (!(this.list[0] instanceof Array)) {
                list = [this.list];
            }
            var _this= this;
            return list.map(function (arr) {
                return arr.map(function (item) {
                    return typeof item === 'string' ? item : item[_this.label];
                });
            });
        },
        style(){
            var length = this.datas.length;
            return {
                width: 100 / length + '%',
                float: 'left'
            }
        }
    },
    watch: {
        curIdxs(val){
            this.cache = val;
        }
    },
    methods: {
        openWin(){
            this.open = true;
        },
        close(){
            this.open = false;
            this.cancel();
        },
        choose(){
            this.open = false;
            this.confirm.apply(this, this.cache);
        },
        picker(index, alias){
            this.cache[alias] = index;
            this.change(index, alias);
        }
    },
    mounted() {

        this.$nextTick(function () {
            this.cache = this.curIdxs;
        });

    },
    components: {
        'wag_picker_cpt': require('./picker')
    }
};