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
            default: function () {
                return function () {
                };
            }
        }
    },
    computed: {
        datas(){
            var list = this.list;
            if (!(this.list[0] instanceof Array)) {
                list = [this.list];
            }
            return list;
        },
        style(){
            var length = this.datas.length;
            return {
                width: 100 / length + '%',
                float: 'left'
            }
        }
    },
    methods: {
        choose(){
            this.confirm.apply(this, this.cache);
        },
        picker(item, index, alias){
            this.cache[alias] = item;
            this.change(item, index, alias);
        }
    },
    mounted() {
        this.cache = [];
    },
    components: {
        'wag_picker_cpt': require('./picker')
    }
};