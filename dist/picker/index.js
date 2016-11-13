'use strict';

var Touch = require('super-touch');
var quart = require('super-animation').quart;

module.exports = {
    template: require('./template.html'),
    data: function data() {
        return {
            distinct: 0,
            speed: 0.5,
            curIndex: 0,
            threshold: 20,
            animatePause: true
        };
    },

    props: ['alias', 'list', 'curIdx', 'label'],
    watch: {
        list: function list() {
            this.$nextTick(this.reload);
        },
        curIdx: function curIdx(val, oval) {
            this.curIndex = val;
            this.distinct = val * this.threshold;
            //当下标变化时,自动滚动到指定位置
            if (this.$list) {
                this.highlight(oval, val);
            }
            if (this.$container) {
                this.$container.style.webkitTransform = 'rotateX(' + this.distinct + 'deg)';
            }
        }
    },
    computed: {
        maxVal: function maxVal() {
            return (this.list.length - 1) * this.threshold;
        }
    },
    methods: {
        move: function move(res) {
            var distinct = this.distinct;
            distinct += res.yrange * this.speed;
            this.distinct = this.internalCal(distinct);
        },
        end: function end() {
            var distinct = this.distinct;
            this.distinct = this.internalCal(distinct, true);
            this.$container.style.webkitTransition = '100ms ease-out';
            this.$emit('picker', this.curIndex, this.alias);
        },
        internalCal: function internalCal(distinct, isEnd) {
            var threshold = this.threshold;
            var baseNum = isEnd ? -0 : threshold * 2;
            if (distinct > this.maxVal + baseNum) {
                distinct = this.maxVal + baseNum;
            }
            if (distinct < -baseNum) {
                distinct = -baseNum;
            }

            var base = parseInt(distinct / threshold);
            var min = threshold * base;
            var max = min + threshold;
            var interval = max;
            if (distinct - min <= max - distinct) {
                interval = min;
            }
            distinct = isEnd ? interval : distinct;
            if (distinct >= 0 && distinct <= this.maxVal) {
                //选中的下表
                var idx = interval / threshold;
                this.highlight(this.curIndex, idx);
                this.curIndex = idx;
            }

            this.$container.style.webkitTransform = 'rotateX(' + distinct + 'deg)';
            this.showCal();
            return distinct;
        },
        showCal: function showCal() {
            //小于13全部显示
            //if (this.list.length <= 13) return;
            var min = this.curIndex - 5;
            var max = this.curIndex + 5;
            for (var i = 0, len = this.list.length; i < len; i++) {
                this.$list[i].style.visibility = i >= min && i <= max ? 'visible' : 'hidden';
            }
        },
        startInertiaScroll: function startInertiaScroll(res) {
            var _this = this;

            //缓动
            var v = (res.y1 - res.y2) / res.spend;
            var duration = Math.abs(v / 0.0006); //速度减到0
            var dist = v * duration / 2; //最后执行的距离
            var _distinct = this.distinct;
            var minVal = -this.threshold * 2;
            var maxVal = this.maxVal + this.threshold * 2;
            var index = 0,
                r = 0;
            duration /= 5;
            var _inertiaMove = function _inertiaMove() {
                if (_this.animatePause) {
                    _this.distinct = _distinct;
                    return;
                }
                r = quart.easeOut(index++, _this.distinct, dist, duration);
                _distinct = _this.internalCal(r);
                if (index < duration && r >= minVal && r <= maxVal) {
                    requestAnimationFrame(_inertiaMove);
                } else {
                    _this.animatePause = true;
                    _this.distinct = _distinct;
                    _this.end();
                }
            };
            _inertiaMove();
        },
        highlight: function highlight(pidx, idx) {
            var len = this.$list.length;
            if (pidx < len) {
                this.$list[pidx].classList.remove('highlight');
            }
            if (idx < len) {
                this.$list[idx].classList.add('highlight');
            }
        },
        reload: function reload() {
            var _this2 = this;

            //当数据变化时,重新加载数据
            this.$container = this.$el.querySelector('.m-picker-list');
            this.$list = this.$container.querySelectorAll('li');
            this.highlight(this.curIndex, 0);
            this.curIndex = 0;
            this.distinct = this.curIndex * this.threshold;
            this.showCal();
            this.$container.style.webkitTransform = 'rotateX(' + this.distinct + 'deg)';
            this.$container.addEventListener("webkitTransitionEnd", function () {
                _this2.$container.style.webkitTransition = null;
            });
        }
    },
    mounted: function mounted() {
        var _this3 = this;

        this.$nextTick(function () {
            _this3.$options.ready.call(_this3);
        });
    },
    ready: function ready() {
        var _this4 = this;

        this.curIndex = parseInt(this.curIdx);
        if (this.list.length > 0) {
            this.reload();
        }

        var touch = new Touch(this.$el);
        touch.start();
        touch.on('touch:start', function (res) {
            //暂停执行缓动
            _this4.animatePause = true;
            res.e.preventDefault();
        });

        touch.on('touch:move', function (res) {
            res.e.preventDefault();
            _this4.move(res);
        });

        touch.on('touch:end', function (res) {
            res.e.preventDefault();
            if (Math.abs(res.y1 - res.y2) < _this4.threshold * 2) {
                _this4.end();
            } else {
                _this4.animatePause = false;
                _this4.startInertiaScroll(res);
            }
        });
    }
};