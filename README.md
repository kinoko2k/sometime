# grauationtime
Displays the time and number of days until the graduation ceremony for junior high schools in Nagoya.

The background can be changed at any time, and the number of days can be changed in style.js, but it is set to 3/3.

We also have Saturdays and Sundays, so please be careful.

style.js
```js
    function CDT() {
    var tl = new Date('2022/3/3 12:00:00');// ここで日付を指定
    var timer = new CountdownTimer('CDT', tl, '🎉ご卒業おめでとうございます🎉');
    timer.countDown();
    }
```
