/**
 * @module   αCountdown
 * @version  v0.1.1
 * @author   OXAYAZA {@link https://github.com/OXAYAZA}
 * @license  CC BY-SA 4.0 {@link https://creativecommons.org/licenses/by-sa/4.0/}
 * @requires module:αUtil
 * @requires module:αProgressCircle
 * @see      {@link https://oxayaza.page.link/gitHub_aCounters}
 */
function aCountdown(data) {
    function Countdown(data) {
        if (!data || !data.node || typeof data.to === 'undefined') {
            throw Error('Missing of bad required \u03B1Countdown parameters (node, from, to).')
        }
        this.params = Util.merge([this.defaults, data], {skipNull: true});
        this.params.node.countdown = this;
        this.internal.to = Number(new Date(this.params.to));
        this.internal.from = this.params.from ? Number(new Date(this.params.from)) : this.internal.to - this.constant.year;
        for (var key in this.internal.counters) {
            this.internal.counters[key] = this.params.node.querySelector('[data-counter-' + key + ']')
        }
        for (var key in this.internal.circles) {
            this.internal.circles[key] = this.params.node.querySelector('[data-progress-' + key + ']');
            if (this.internal.circles[key]) aProgressCircle({node: this.internal.circles[key]})
        }
        this.run()
    }

    Countdown.prototype.defaults = {from: null, to: null, tick: 1000, count: 'auto', onTick: null};
    Countdown.prototype.constant = {
        second: 1000,
        minute: 1000 * 60,
        hour: 1000 * 60 * 60,
        day: 1000 * 60 * 60 * 24,
        year: 1000 * 60 * 60 * 24 * 365
    };
    Countdown.prototype.internal = {
        from: null,
        to: null,
        now: null,
        counters: {days: null, hours: null, minutes: null, seconds: null},
        circles: {days: null, hours: null, minutes: null, seconds: null},
        period: {full: null, now: null},
        time: {days: null, hours: null, minutes: null, seconds: null},
        angle: {days: null, hours: null, minutes: null, seconds: null},
        tmp: {days: null, hours: null, minutes: null}
    };
    Countdown.prototype.calc = function () {
        this.internal.time.days = this.internal.period.now / this.constant.day;
        this.internal.angle.days = 360 / ~~(this.internal.period.full / this.constant.day) * ~~this.internal.time.days || 0;
        this.internal.tmp.days = ~~this.internal.time.days * this.constant.day;
        this.internal.time.hours = (this.internal.period.now - this.internal.tmp.days) / this.constant.hour;
        this.internal.angle.hours = 360 / 24 * this.internal.time.hours;
        this.internal.tmp.hours = ~~this.internal.time.hours * this.constant.hour;
        this.internal.time.minutes = (this.internal.period.now - (this.internal.tmp.days + this.internal.tmp.hours)) / this.constant.minute;
        this.internal.angle.minutes = 360 / 60 * this.internal.time.minutes;
        this.internal.tmp.minutes = ~~this.internal.time.minutes * this.constant.minute;
        this.internal.time.seconds = (this.internal.period.now - (this.internal.tmp.days + this.internal.tmp.hours + this.internal.tmp.minutes)) / this.constant.second;
        this.internal.angle.seconds = 360 / 60 * this.internal.time.seconds
    };
    Countdown.prototype.mode = function () {
        this.internal.now = Number(new Date);
        if (this.internal.to > this.internal.now && ['auto', 'until'].indexOf(this.params.count) > -1) {
            this.internal.period.full = this.internal.to - this.internal.from;
            this.internal.period.now = this.internal.to - this.internal.now
        } else if (this.internal.to < this.internal.now && ['auto', 'since'].indexOf(this.params.count) > -1) {
            this.internal.period.full = this.internal.to - this.internal.from;
            this.internal.period.now = this.internal.now - this.internal.to
        }
    };
    Countdown.prototype.render = function () {
        this.mode();
        this.calc();
        for (var key in this.internal.counters) {
            if (this.internal.counters[key]) this.internal.counters[key].innerText = ~~this.internal.time[key];
            if (this.internal.circles[key]) this.internal.circles[key].progressCircle.render(this.internal.angle[key])
        }
    };
    Countdown.prototype.run = function () {
        this.render();
        setInterval(function () {
            this.render();
            if (this.params.onTick instanceof Function) this.params.onTick.call(this)
        }.bind(this), this.params.tick)
    };
    return new Countdown(data)
}
