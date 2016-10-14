require('./style.css');

let Touch = require('super-touch');
let quart = require('super-animation').quart;
let animate = require('super-animation').animate;
module.exports = {
    template: require('./template.html'),
    data(){
        return {
            distinct: 0,
            speed: 0.5,
            curIndex: 0,
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
        }
    },
    watch: {
        list: 'reload',
        curIdx(val, oval){
            this.curIndex = val;
            this.distinct = val * 20;
            //当下标变化时,自动滚动到指定位置
            if (this.$list) {
                this.$list[oval].classList.remove('highlight');
                this.$list[val].classList.add('highlight');
            }
            if (this.$container) {
                this.$container.style.webkitTransform = 'rotateX(' + this.distinct + 'deg)';
            }
        }
    },
    computed: {
        maxVal(){
            return (this.list.length - 1) * 20;
        }
    },
    methods: {
        move(res){
            let distinct = this.distinct;
            distinct += res.yrange * this.speed;
            this.distinct = this.internalCal(distinct);
        },
        end(){
            let distinct = this.distinct;
            this.distinct = this.internalCal(distinct, true);
            this.$container.style.webkitTransition = '100ms ease-out';
            this.$emit('picker', JSON.parse(JSON.stringify(this.list[this.curIndex])), this.curIndex);
        },
        internalCal(distinct, isEnd){
            let baseNum = isEnd ? -0 : 40;
            if (distinct > this.maxVal + baseNum) {
                distinct = this.maxVal + baseNum;
            }
            if (distinct < -baseNum) {
                distinct = -baseNum;
            }

            let base = parseInt(distinct / 20);
            let min = 20 * base;
            let max = min + 20;
            let interval = max;
            if (distinct - min <= max - distinct) {
                interval = min;
            }
            distinct = isEnd ? interval : distinct;
            if (distinct >= 0 && distinct <= this.maxVal) {
                //选中的下表
                let idx = interval / 20;
                this.$list[this.curIndex].classList.remove('highlight');
                this.$list[idx].classList.add('highlight');
                this.curIndex = idx;
            }

            this.$container.style.webkitTransform = 'rotateX(' + distinct + 'deg)';
            this.showCal();
            return distinct;
        },
        showCal(){
            if (this.list.length <= 15) return;
            let min = this.curIndex - 5;
            let max = this.curIndex + 5;
            for (let i = 0, len = this.list.length; i < len; i++) {
                this.$list[i].style.visibility = (i >= min && i <= max ? 'visible' : 'hidden');
            }
        },
        startInertiaScroll(res){
            //缓动
            var v = (res.y1 - res.y2) / res.spend;
            var dire = v > 0 ? 1 : -1;
            var duration = Math.abs(v / 0.0006);//速度减到0
            var dist = v * duration / 2;//最后执行的距离
            var start = this.distinct;
            var end = this.distinct + dist;
            console.log(start, end, dist, duration);
            var maxVal = this.maxVal + 40;
            var index = 0, r = 0, _distinct = start;
            duration /= 5;
            var _inertiaMove = ()=> {
                if (this.animatePause) return;
                r = quart.easeOut(index++, start, end, duration);
                if (dire === -1) {
                    r = 2 * start - r;
                }
                console.log(r);
                _distinct = this.internalCal(r);
                if (index < duration && r > -40 && r < maxVal) {
                    requestAnimationFrame(_inertiaMove);
                } else {
                    this.animatePause = true;
                    this.distinct = _distinct;
                    this.end();
                }
            }
            _inertiaMove();
        },
        reload() {
            //当数据变化时,重新加载数据
            this.$container = this.$el.querySelector('.m-picker-list');
            this.$list = this.$container.querySelectorAll('li');
            this.$list[this.curIndex].classList.add('highlight');
            this.distinct = this.curIndex * 20;
            this.showCal();
            this.$container.style.webkitTransform = 'rotateX(' + this.distinct + 'deg)';
            this.$container.addEventListener("webkitTransitionEnd", ()=> {
                this.$container.style.webkitTransition = null;
            });
        }
    },
    mounted() {
        this.$nextTick(()=> {
            this.$options.ready.call(this);
        })
    },
    ready(){

        this.curIndex = this.curIdx;
        if (this.list.length > 0) {
            this.reload();
        }

        var touch = new Touch(this.$el);
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
            if (Math.abs(res.y1 - res.y2) < 20) {
                this.end();
            } else {
                this.animatePause = false;
                this.startInertiaScroll(res);
            }

        });
    }
};