import { fromEventPattern } from 'rxjs';
export function createMVCEventObservable(array) {
    var eventNames = ['insert_at', 'remove_at', 'set_at'];
    return fromEventPattern(function (handler) { return eventNames.map(function (evName) { return array.addListener(evName, function (index, previous) { return handler.apply(array, [{ 'newArr': array.getArray(), evName: evName, index: index, previous: previous }]); }); }); }, function (handler, evListeners) { return evListeners.forEach(function (evListener) { return evListener.remove(); }); });
}
var MvcArrayMock = /** @class */ (function () {
    function MvcArrayMock() {
        this.vals = [];
        this.listeners = {
            'remove_at': [],
            'insert_at': [],
            'set_at': [],
        };
    }
    MvcArrayMock.prototype.clear = function () {
        for (var i = this.vals.length - 1; i >= 0; i--) {
            this.removeAt(i);
        }
    };
    MvcArrayMock.prototype.getArray = function () {
        return this.vals.slice();
    };
    MvcArrayMock.prototype.getAt = function (i) {
        return this.vals[i];
    };
    MvcArrayMock.prototype.getLength = function () {
        return this.vals.length;
    };
    MvcArrayMock.prototype.insertAt = function (i, elem) {
        this.vals.splice(i, 0, elem);
        this.listeners.insert_at.map(function (listener) { return listener(i); });
    };
    MvcArrayMock.prototype.pop = function () {
        var _this = this;
        var deleted = this.vals.pop();
        this.listeners.remove_at.map(function (listener) { return listener(_this.vals.length, deleted); });
        return deleted;
    };
    MvcArrayMock.prototype.push = function (elem) {
        var _this = this;
        this.vals.push(elem);
        this.listeners.insert_at.map(function (listener) { return listener(_this.vals.length - 1); });
        return this.vals.length;
    };
    MvcArrayMock.prototype.removeAt = function (i) {
        var deleted = this.vals.splice(i, 1)[0];
        this.listeners.remove_at.map(function (listener) { return listener(i, deleted); });
        return deleted;
    };
    MvcArrayMock.prototype.setAt = function (i, elem) {
        var deleted = this.vals[i];
        this.vals[i] = elem;
        this.listeners.set_at.map(function (listener) { return listener(i, deleted); });
    };
    MvcArrayMock.prototype.forEach = function (callback) {
        this.vals.forEach(callback);
    };
    MvcArrayMock.prototype.addListener = function (eventName, handler) {
        var listenerArr = this.listeners[eventName];
        listenerArr.push(handler);
        return {
            remove: function () {
                listenerArr.splice(listenerArr.indexOf(handler), 1);
            }
        };
    };
    return MvcArrayMock;
}());
export { MvcArrayMock };
//# sourceMappingURL=mvcarray-utils.js.map