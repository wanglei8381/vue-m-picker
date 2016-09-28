'use strict';

require('./style.styl');

var Touch = require('super-touch');
module.exports = {
    template: require('./template.html'),
    data: function data() {
        return {
            distinct: 0,
            speed: 0.5
        };
    },

    props: {
        list: {
            type: Array,
            required: true
        },
        picker: {
            type: Object,
            required: true,
            twoWay: true
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
        curIdx: function curIdx(val, oval) {
            this.distinct = val * 20;
            //当下标变化时,自动滚动到指定位置
            if (this.$list) {
                this.$list[oval].classList.remove('highlight');
                this.$list[val].classList.add('highlight');
            }
            if (this.$container) {
                this.$container.style.transform = 'rotateX(' + this.distinct + 'deg)';
            }
        }
    },
    computed: {
        maxVal: function maxVal() {
            return (this.list.length - 1) * 20;
        }
    },
    methods: {
        move: function move(res) {
            var distinct = this.distinct;
            distinct += res.yrange * this.speed;
            this.internalCal(distinct);
        },
        end: function end() {
            var distinct = this.distinct;
            this.internalCal(distinct, true);
            this.$container.style.webkitTransition = '100ms ease-out';
            this.picker = this.list[this.curIdx];
        },
        internalCal: function internalCal(distinct, isEnd) {
            var baseNum = isEnd ? -0 : 20;
            if (distinct > this.maxVal + baseNum) {
                distinct = this.maxVal + baseNum;
            }
            if (distinct < -baseNum) {
                distinct = -baseNum;
            }

            var base = parseInt(distinct / 20);
            var min = 20 * base;
            var max = min + 20;
            var interval = max;
            if (distinct - min <= max - distinct) {
                interval = min;
            }
            distinct = isEnd ? interval : distinct;
            if (distinct >= 0 && distinct <= this.maxVal) {
                //选中的下表
                var idx = interval / 20;
                this.$list[this.curIdx].classList.remove('highlight');
                this.$list[idx].classList.add('highlight');
                this.curIdx = idx;
            }

            this.$container.style.transform = 'rotateX(' + distinct + 'deg)';
            this.distinct = distinct;
            this.showCal();
        },
        showCal: function showCal() {
            if (this.list.length <= 15) return;
            var min = this.curIdx - 5;
            var max = this.curIdx + 5;
            for (var i = 0, len = this.list.length; i < len; i++) {
                this.$list[i].style.visibility = i >= min && i <= max ? 'visible' : 'hidden';
            }
        },
        reload: function reload() {
            var _this = this;

            //当数据变化时,重新加载数据
            this.$container = this.$el.querySelector('.m-picker-list');
            this.$list = this.$container.querySelectorAll('li');
            this.$list[this.curIdx].classList.add('highlight');
            this.showCal();
            this.$container.style.transform = 'rotateX(' + this.distinct + 'deg)';
            this.$container.addEventListener("webkitTransitionEnd", function () {
                _this.$container.style.webkitTransition = null;
            });
        }
    },
    ready: function ready() {
        var _this2 = this;

        if (this.list.length > 0) {
            this.reload();
        }

        var touch = new Touch(this.$el);
        touch.start();
        touch.on('touch:start', function (res) {
            res.e.preventDefault();
        });

        touch.on('touch:move', function (res) {
            res.e.preventDefault();
            _this2.move(res);
        });

        touch.on('touch:end', function (res) {
            res.e.preventDefault();
            _this2.end(res);
        });
    }
};