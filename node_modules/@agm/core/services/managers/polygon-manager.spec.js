var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { NgZone } from '@angular/core';
import { TestBed, inject } from '@angular/core/testing';
import { AgmPolygon } from '../../directives/polygon';
import { GoogleMapsAPIWrapper } from '../google-maps-api-wrapper';
import { PolygonManager } from './polygon-manager';
import { MvcArrayMock } from '../../utils/mvcarray-utils';
describe('PolygonManager', function () {
    beforeEach(function () {
        TestBed.configureTestingModule({
            providers: [
                { provide: NgZone, useFactory: function () { return new NgZone({ enableLongStackTrace: true }); } },
                PolygonManager, AgmPolygon, {
                    provide: GoogleMapsAPIWrapper,
                    useValue: {
                        createPolygon: jest.fn()
                    }
                }
            ]
        });
    });
    describe('Create a new polygon', function () {
        it('should call the mapsApiWrapper when creating a new polygon', inject([PolygonManager, GoogleMapsAPIWrapper], function (polygonManager, apiWrapper) {
            var newPolygon = new AgmPolygon(polygonManager);
            polygonManager.addPolygon(newPolygon);
            expect(apiWrapper.createPolygon).toHaveBeenCalledWith({
                clickable: true,
                draggable: false,
                editable: false,
                fillColor: undefined,
                fillOpacity: undefined,
                geodesic: false,
                paths: [],
                strokeColor: undefined,
                strokeOpacity: undefined,
                strokeWeight: undefined,
                visible: undefined,
                zIndex: undefined
            });
        }));
    });
    describe('Delete a polygon', function () {
        it('should set the map to null when deleting a existing polygon', inject([PolygonManager, GoogleMapsAPIWrapper], function (polygonManager, apiWrapper) {
            var newPolygon = new AgmPolygon(polygonManager);
            var polygonInstance = {
                setMap: jest.fn()
            };
            apiWrapper.createPolygon.mockReturnValue(Promise.resolve(polygonInstance));
            polygonManager.addPolygon(newPolygon);
            polygonManager.deletePolygon(newPolygon).then(function () {
                expect(polygonInstance.setMap).toHaveBeenCalledWith(null);
            });
        }));
    });
    describe('Path changes', function () {
        var newPolygon;
        var paths;
        var initLatLng = { lat: function () { return 15; }, lng: function () { return 15; }, toJSON: function () { return ({ lat: 15, lng: 15 }); } };
        beforeEach(inject([PolygonManager, GoogleMapsAPIWrapper], function (polygonManager, apiWrapper) {
            paths = new MvcArrayMock();
            var path = new MvcArrayMock();
            path.push(initLatLng);
            paths.push(path);
            var polygonInstance = {
                getPaths: function () { return paths; },
                setMap: jest.fn(),
            };
            apiWrapper.createPolygon.mockReturnValue(Promise.resolve(polygonInstance));
            newPolygon = new AgmPolygon(polygonManager);
            polygonManager.addPolygon(newPolygon);
        }));
        afterEach(function (done) {
            inject([PolygonManager], function (polygonManager) {
                polygonManager.deletePolygon(newPolygon)
                    .then(done);
            })();
        });
        it('should emit a path change when a path is added', function (done) {
            inject([PolygonManager], function (polygonManager) {
                var expectations = [1, 2];
                var expectationIndex = 0;
                expect.assertions(expectations.length);
                polygonManager.createPathEventObservable(newPolygon)
                    .then(function (paths$) {
                    paths$.subscribe(function (polygonPathEvent) {
                        expect(polygonPathEvent).toEqual({
                            newArr: [[{ lat: 15, lng: 15 }]].concat(Array(expectationIndex + 1).fill([])),
                            eventName: 'insert_at',
                            index: expectations[expectationIndex++],
                        });
                        if (expectationIndex === expectations.length) {
                            done();
                        }
                    }, fail /* shouldn't have errors */, fail /* shouldn't finish */);
                    paths.push(new MvcArrayMock());
                    paths.push(new MvcArrayMock());
                });
            })();
        });
        it('should emit a path change when a path is removed', function (done) {
            inject([PolygonManager], function (polygonManager) {
                var expectations = [{ index: 2, previous: [], newArr: [[{ lat: 15, lng: 15 }], []] },
                    { index: 0, previous: [initLatLng], newArr: [[]] }];
                var expectationIndex = 0;
                expect.assertions(expectations.length);
                // prepare the array
                paths.push(new MvcArrayMock());
                paths.push(new MvcArrayMock());
                polygonManager.createPathEventObservable(newPolygon)
                    .then(function (paths$) {
                    paths$.subscribe(function (polygonPathEvent) {
                        expect(polygonPathEvent).toEqual(__assign({ eventName: 'remove_at' }, expectations[expectationIndex++]));
                        if (expectationIndex === expectations.length) {
                            done();
                        }
                    }, fail /* shouldn't have errors */, fail /* shouldn't finish */);
                    paths.pop();
                    paths.removeAt(0);
                });
            })();
        });
        it('should emit a path change when a path is set', function (done) {
            inject([PolygonManager], function (polygonManager) {
                var expectations = [{ index: 0, previous: [initLatLng], newArr: [Array(2).fill({ lat: 15, lng: 15 }), []] },
                    { index: 1, previous: [], newArr: [Array(2).fill({ lat: 15, lng: 15 }), [{ lat: 15, lng: 15 }]] }];
                var expectationIndex = 0;
                expect.assertions(expectations.length);
                // prepare the array
                paths.push(new MvcArrayMock());
                polygonManager.createPathEventObservable(newPolygon)
                    .then(function (paths$) {
                    paths$.subscribe(function (polygonPathEvent) {
                        expect(polygonPathEvent).toEqual(__assign({ eventName: 'set_at' }, expectations[expectationIndex++]));
                        if (expectationIndex === expectations.length) {
                            done();
                        }
                    }, fail /* shouldn't have errors */, fail /* shouldn't finish */);
                    var firstMvcArray = new MvcArrayMock();
                    firstMvcArray.push(initLatLng);
                    firstMvcArray.push(initLatLng);
                    paths.setAt(0, firstMvcArray);
                    var secondMvcArray = new MvcArrayMock();
                    secondMvcArray.push(initLatLng);
                    paths.setAt(1, secondMvcArray);
                });
            })();
        });
        it('should emit a path change when a point is added to a path', function (done) {
            inject([PolygonManager], function (polygonManager) {
                var expectations = [
                    { pathIndex: 0, index: 1, newArr: [Array(2).fill({ lat: 15, lng: 15 })] },
                    { pathIndex: 0, index: 2, newArr: [Array(3).fill({ lat: 15, lng: 15 })] }
                ];
                var expectationIndex = 0;
                expect.assertions(expectations.length);
                polygonManager.createPathEventObservable(newPolygon)
                    .then(function (paths$) {
                    paths$.subscribe(function (polygonPathEvent) {
                        expect(polygonPathEvent).toEqual(__assign({ eventName: 'insert_at' }, expectations[expectationIndex++]));
                        if (expectationIndex === expectations.length) {
                            done();
                        }
                    }, fail /* shouldn't have errors */, fail /* shouldn't finish */);
                    paths.getAt(0).push(initLatLng);
                    paths.getAt(0).push(initLatLng);
                });
            })();
        });
        it('should emit a path change when a point is removed from a path', function (done) {
            inject([PolygonManager], function (polygonManager) {
                var expectations = [
                    { pathIndex: 0, index: 1, previous: initLatLng, newArr: [[{ lat: 15, lng: 15 }]] },
                    { pathIndex: 0, index: 0, previous: initLatLng, newArr: [[]] }
                ];
                var expectationIndex = 0;
                expect.assertions(expectations.length);
                // prepare the array
                paths.getAt(0).push(initLatLng);
                polygonManager.createPathEventObservable(newPolygon)
                    .then(function (paths$) {
                    paths$.subscribe(function (polygonPathEvent) {
                        expect(polygonPathEvent).toEqual(__assign({ eventName: 'remove_at' }, expectations[expectationIndex++]));
                        if (expectationIndex === expectations.length) {
                            done();
                        }
                    }, fail /* shouldn't have errors */, fail /* shouldn't finish */);
                    paths.getAt(0).pop();
                    paths.getAt(0).removeAt(0);
                });
            })();
        });
        it('should emit a path change when a point is added to an added path', function (done) {
            inject([PolygonManager], function (polygonManager) {
                var expectations = [
                    { index: 1, newArr: [[{ lat: 15, lng: 15 }], []] },
                    { pathIndex: 1, index: 0, newArr: [[{ lat: 15, lng: 15 }], [{ lat: 15, lng: 15 }]] }
                ];
                var expectationIndex = 0;
                expect.assertions(expectations.length);
                // prepare the array
                polygonManager.createPathEventObservable(newPolygon)
                    .then(function (paths$) {
                    paths$.subscribe(function (polygonPathEvent) {
                        expect(polygonPathEvent).toEqual(__assign({ eventName: 'insert_at' }, expectations[expectationIndex++]));
                        if (expectationIndex === expectations.length) {
                            done();
                        }
                    }, fail /* shouldn't have errors */, fail /* shouldn't finish */);
                    paths.push(new MvcArrayMock());
                    paths.getAt(1).push(initLatLng);
                });
            })();
        });
        it('should not emit a path change when a point is added to a removed path', function (done) {
            inject([PolygonManager], function (polygonManager) {
                var expectations = [{ index: 0, newArr: [[]] }];
                var expectationIndex = 0;
                expect.assertions(expectations.length);
                // prepare the array
                polygonManager.createPathEventObservable(newPolygon)
                    .then(function (paths$) {
                    paths$.subscribe(function (polygonPathEvent) {
                        expect(polygonPathEvent).toEqual(__assign({ eventName: 'removed_at' }, expectations[expectationIndex++]));
                    }, fail /* shouldn't have errors */, fail /* shouldn't finish */);
                    var removedPath = paths.pop();
                    removedPath.pop();
                    done();
                });
            })();
        });
    });
});
//# sourceMappingURL=polygon-manager.spec.js.map