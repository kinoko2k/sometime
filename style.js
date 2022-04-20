function CountdownTimer(elm, tl, mes) {
    this.initialize.apply(this, arguments);
    }
    CountdownTimer.prototype = {
    initialize: function (elm, tl, mes) {
    this.elem = document.getElementById(elm);
    this.tl = tl;
    this.mes = mes;
    }, countDown: function () {
    var timer = '';
    var today = new Date();
    var day = Math.floor((this.tl - today) / (24 * 60 * 60 * 1000));
    var hour = Math.floor(((this.tl - today) % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
    var min = Math.floor(((this.tl - today) % (24 * 60 * 60 * 1000)) / (60 * 1000)) % 60;
    var sec = Math.floor(((this.tl - today) % (24 * 60 * 60 * 1000)) / 1000) % 60 % 60;
    var milli = Math.floor(((this.tl - today) % (24 * 60 * 60 * 1000)) / 10) % 100;
    var me = this;
    
    if ((this.tl - today) > 0) {
    if (day)
    timer += '' + day + '日';
    if (hour)
    timer += '' + hour + '時間';
    timer += '' + this.addZero(min) + '分' +
        this.addZero(sec) + '秒';
    this.elem.innerHTML = timer;
    tid = setTimeout(function () {
    me.countDown();
    }, 10);
    } else {
    this.elem.innerHTML = this.mes;
    return;
    }
    }, addZero: function (num) {
    return ('0' + num).slice(-2);
    }
    }
    function CDT() {
    var tl = new Date('2025/1/13 09:30:00');// ここで日付を指定
    var timer = new CountdownTimer('CDT', tl, 'がんばれー');
    timer.countDown();
    }
    
    
    function CDT01() {
    var tl = new Date('2025/1/13 09:30:00');// ここで日付を指定
    var timer = new CountdownTimer('CDT01', tl, 'がんばれー');
    timer.countDown();
    }
    window.onload = function () {
    CDT();
    CDT01();
    }
