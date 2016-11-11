module.exports = {
    template: require('./template.html'),
    data(){
        return {
            distinct: 0,
            speed: 0.5,
            curIndex: 0,
            threshold: 20,
            animatePause: true
        }
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
        value: {
            type: String,
            required: false,
            default: 'value'
        },
        curIdx: {
            type: Number,
            required: false,
            default: 0
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
        }
    },
    computed: {
        datas(){
            var list = this.list;
            if (!this.list[0] instanceof Array) {
                list = [this.list];
            }
        },
        style(){
            var length = this.datas.length;
            return {
                width: 100 / length + '%',
                float: 'left'
            }
        }
    },
    methods: {},
    mounted() {
        this.$nextTick(()=> {
            this.$options.ready.call(this);
        })
    },
    components: {
        picker: require('./picker')
    },
    ready(){

        this.curIndex = this.curIdx;
        if (this.list.length > 0) {
            this.reload();
        }

        var touch = new Touch(this.$el.querySelector('.m-picker'));
        touch.start();
        touch.on('touch:start', (res)=> {
            //暂停执行缓动
            this.animatePause = true;
            res.e.preventDefault();
        });

        touch.on('touch:move', (res)=> {
            res.e.preventDefault();
            this.move(res);
        });

        touch.on('touch:end', (res)=> {
            res.e.preventDefault();
            if (Math.abs(res.y1 - res.y2) < this.threshold * 2) {
                this.end();
            } else {
                this.animatePause = false;
                this.startInertiaScroll(res);
            }

        });
    }
};