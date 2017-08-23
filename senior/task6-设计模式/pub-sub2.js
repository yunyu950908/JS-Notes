var Event = (function () {
    var events = {};

    function on(evt, handler) {
        events[evt] = events[evt] || [];
        events[evt].push({
            handler: handler
        })
    }

    function fire(evt, args) {
        if (!events[evt]) {
            return;
        }
        // console.log(events[evt])
        events[evt].forEach(function (e) {
            e.handler(args);
        })
    }

    function off(evt) {
        delete events[evt];
    }

    return {
        on: on,
        off: off,
        fire: fire
    }
})();


Event.on('change', function (val) {
    console.log('change...  now val is ' + val);
});
Event.fire('change', '饥人谷');
Event.off('change');

Event.fire('change', '大前端');