const _0x286ce4 = _0x3a20;
(function (_0x2b0d87, _0x1b02f4) {
    const _0x40f8df = _0x3a20;
    const _0x52a17f = _0x2b0d87();
    while (!![]) {
        try {
            const _0x29b8f5 = -parseInt(_0x40f8df(0x10e)) / 0x1 + parseInt(_0x40f8df(0x10d)) / 0x2 + -parseInt(_0x40f8df(0xfd)) / 0x3 * (-parseInt(_0x40f8df(0x104)) / 0x4) + parseInt(_0x40f8df(0x108)) / 0x5 * (parseInt(_0x40f8df(0x105)) / 0x6) + -parseInt(_0x40f8df(0xfe)) / 0x7 + parseInt(_0x40f8df(0x109)) / 0x8 * (parseInt(_0x40f8df(0x102)) / 0x9) + -parseInt(_0x40f8df(0x100)) / 0xa;
            if (_0x29b8f5 === _0x1b02f4) {
                break;
            } else {
                _0x52a17f['push'](_0x52a17f['shift']());
            }
        } catch (_0x5f54e3) {
            _0x52a17f['push'](_0x52a17f['shift']());
        }
    }
}(_0xd1a0, 0x2602c));
function _0xd1a0() {
    const _0x2a4555 = [
        'WebSocket',
        'pushState',
        '1392135OSKXyc',
        '39328MqgxLK',
        'stringify',
        'name',
        'parse',
        '564864TKtyrv',
        '36799hESIMV',
        'send',
        '39nSDfww',
        '180817xXbYPu',
        'Enter\x20your\x20username',
        '8870680DsgatW',
        'apply',
        '468KRRmQS',
        'data',
        '88892KsMEnz',
        '6zSaCPo'
    ];
    _0xd1a0 = function () {
        return _0x2a4555;
    };
    return _0xd1a0();
}
let username = '';
const nativeWebSocket = window[_0x286ce4(0x106)];
window['WebSocket'] = function () {
    const _0x4fc2f6 = _0x286ce4;
    const _0x1d13b9 = new nativeWebSocket(...arguments);
    const _0x33729c = _0x1d13b9[_0x4fc2f6(0xfc)];
    const _0x65610f = function () {
        const _0x5afc89 = _0x4fc2f6;
        const _0x5f44b4 = JSON[_0x5afc89(0x10c)](arguments[0x0]);
        if (_0x5f44b4[0x0] && _0x5f44b4[0x0][_0x5afc89(0x103)] && _0x5f44b4[0x0][_0x5afc89(0x103)][_0x5afc89(0x10b)]) {
            _0x5f44b4[0x0][_0x5afc89(0x103)][_0x5afc89(0x10b)] = username;
        }
        return _0x33729c[_0x5afc89(0x101)](this, [JSON[_0x5afc89(0x10a)](_0x5f44b4)]);
    };
    _0x1d13b9[_0x4fc2f6(0xfc)] = _0x65610f;
    return _0x1d13b9;
};
const nativePushState = history['pushState'];
function _0x3a20(_0x162fb9, _0x3e2305) {
    const _0xd1a00a = _0xd1a0();
    _0x3a20 = function (_0x3a2016, _0x5baccb) {
        _0x3a2016 = _0x3a2016 - 0xfc;
        let _0x30492d = _0xd1a00a[_0x3a2016];
        return _0x30492d;
    };
    return _0x3a20(_0x162fb9, _0x3e2305);
}
history[_0x286ce4(0x107)] = function (_0x338638) {
    const _0x339e87 = _0x286ce4;
    let _0x33102d;
    while (!_0x33102d) {
        _0x33102d = window['prompt'](_0x339e87(0xff));
    }
    username = _0x33102d;
    return nativePushState[_0x339e87(0x101)](history, arguments);
};
