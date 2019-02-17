(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/api/endpoint/endpoint.service.ts":
/*!**********************************************!*\
  !*** ./src/api/endpoint/endpoint.service.ts ***!
  \**********************************************/
/*! exports provided: endpoint */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "endpoint", function() { return endpoint; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);

function endpoint(urlTemplate, params) {
    var output = urlTemplate;
    var queryIndex = 0;
    Object.keys(params).map(function (key) {
        var keyMatch = ":" + key;
        if (urlTemplate.includes(keyMatch)) {
            var paramValue = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["isUndefined"])(params[key]) ? '' : String(params[key]);
            output = output.replace(keyMatch, paramValue);
            return delete params[key];
        }
        if (!Object(lodash__WEBPACK_IMPORTED_MODULE_0__["isUndefined"])(params[key])) {
            var querySymbol = (queryIndex === 0) ? '?' : '&';
            queryIndex++;
            output += querySymbol + key + '=' + params[key];
        }
    });
    return output;
}


/***/ }),

/***/ "./src/api/endpoints.ts":
/*!******************************!*\
  !*** ./src/api/endpoints.ts ***!
  \******************************/
/*! exports provided: ENDPOINTS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ENDPOINTS", function() { return ENDPOINTS; });
var ENDPOINTS = {
    POINTS: '/api/points/:groupId',
    GROUPS: '/api/groups'
};


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_modules_map_view_module_map_view_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/modules/map-view/module/map-view.component */ "./src/modules/map-view/module/map-view.component.ts");




var routes = [
    {
        path: '',
        component: src_modules_map_view_module_map_view_component__WEBPACK_IMPORTED_MODULE_3__["MapViewComponent"],
    }, {
        path: '**',
        pathMatch: 'prefix',
        redirectTo: 'map',
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var src_modules_map_view_module_map_view_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/modules/map-view/module/map-view.module */ "./src/modules/map-view/module/map-view.module.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var src_modules_map_module_map_service_map_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/modules/map/module/map-service/map.service */ "./src/modules/map/module/map-service/map.service.ts");
/* harmony import */ var src_core_helpers_storage_storage_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/core/helpers/storage/storage.service */ "./src/core/helpers/storage/storage.service.ts");










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
                src_modules_map_view_module_map_view_module__WEBPACK_IMPORTED_MODULE_6__["MapView"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"]
            ],
            providers: [
                src_modules_map_module_map_service_map_service__WEBPACK_IMPORTED_MODULE_8__["MapService"],
                src_core_helpers_storage_storage_service__WEBPACK_IMPORTED_MODULE_9__["StorageService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/core/helpers/global-mediator/global-mediator.service.ts":
/*!*********************************************************************!*\
  !*** ./src/core/helpers/global-mediator/global-mediator.service.ts ***!
  \*********************************************************************/
/*! exports provided: GlobalMediator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalMediator", function() { return GlobalMediator; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);





var MediatorEvent = /** @class */ (function () {
    function MediatorEvent(name, data) {
        this.name = name;
        this.data = data;
    }
    return MediatorEvent;
}());
var WatcherData = /** @class */ (function () {
    function WatcherData() {
    }
    return WatcherData;
}());
var GlobalMediator = /** @class */ (function () {
    function GlobalMediator(loader, injector, compiler) {
        this.loader = loader;
        this.injector = injector;
        this.compiler = compiler;
    }
    GlobalMediator_1 = GlobalMediator;
    Object.defineProperty(GlobalMediator, "asyncModuleLoading", {
        get: function () {
            return this.asyncModuleLoadingStream.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    GlobalMediator.registerLazyService = function (module, service) {
        this.watcherServices.push({ module: module, service: service });
    };
    GlobalMediator.lazyServices = function (moduleType) {
        return this.watcherServices
            .filter(function (watcher) { return Object(lodash__WEBPACK_IMPORTED_MODULE_4__["isEqual"])(watcher.module, moduleType); });
    };
    GlobalMediator.emit = function (eventName, data) {
        this.eventsStream.next(new MediatorEvent(eventName, data));
    };
    GlobalMediator.listen = function (eventName) {
        return this.eventSubject(eventName);
    };
    GlobalMediator.eventSubject = function (eventName) {
        return this.eventsStream.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (event) { return event.name === eventName; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (event) { return event.data; }));
    };
    GlobalMediator.prototype.emitToModule = function (modulePath, command, data) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var moduleFactory, moduleRef;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        GlobalMediator_1.asyncModuleLoadingStream.next(true);
                        return [4 /*yield*/, this.loader.load(modulePath)];
                    case 1:
                        moduleFactory = _a.sent();
                        if (!!(moduleFactory instanceof _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModuleFactory"])) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.compiler.compileModuleAsync(moduleFactory)];
                    case 2:
                        moduleFactory = _a.sent();
                        _a.label = 3;
                    case 3:
                        moduleRef = moduleFactory.create(this.injector);
                        GlobalMediator_1.asyncModuleLoadingStream.next(false);
                        GlobalMediator_1.lazyServices(moduleFactory.moduleType).map(function (watcher) { return moduleRef.injector.get(watcher.service); });
                        GlobalMediator_1.emit(command, data);
                        return [2 /*return*/];
                }
            });
        });
    };
    var GlobalMediator_1;
    GlobalMediator.asyncModuleLoadingStream = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    GlobalMediator.eventsStream = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    GlobalMediator.watcherServices = [];
    GlobalMediator = GlobalMediator_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModuleFactoryLoader"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["Compiler"]])
    ], GlobalMediator);
    return GlobalMediator;
}());



/***/ }),

/***/ "./src/core/helpers/storage/storage.service.ts":
/*!*****************************************************!*\
  !*** ./src/core/helpers/storage/storage.service.ts ***!
  \*****************************************************/
/*! exports provided: StorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorageService", function() { return StorageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);




var StorageService = /** @class */ (function () {
    function StorageService() {
    }
    StorageService_1 = StorageService;
    StorageService.prototype.add = function (key, data, withoutUpdateEvent) {
        if (!Object(lodash__WEBPACK_IMPORTED_MODULE_3__["isUndefined"])(data)) {
            localStorage.setItem(key, JSON.stringify(data));
            if (!withoutUpdateEvent) {
                StorageService_1.updated.next(key);
            }
        }
    };
    StorageService.prototype.get = function (key) {
        try {
            return JSON.parse(localStorage.getItem(key));
        }
        catch (e) {
            console.error("[Storage] Error parsing key " + key);
        }
    };
    StorageService.prototype.clean = function () {
        localStorage.clear();
    };
    var StorageService_1;
    StorageService.updated = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    StorageService = StorageService_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], StorageService);
    return StorageService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ "./src/modules/map-view/module/groups-list/groups-list.component.html":
/*!****************************************************************************!*\
  !*** ./src/modules/map-view/module/groups-list/groups-list.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <ul class=\"list\">\n    <li *ngFor=\"let group of groups\" (click)=\"onSelect(group)\">\n      {{group.name}}\n    </li>\n  </ul>\n</div>"

/***/ }),

/***/ "./src/modules/map-view/module/groups-list/groups-list.component.scss":
/*!****************************************************************************!*\
  !*** ./src/modules/map-view/module/groups-list/groups-list.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host .card {\n  position: absolute;\n  height: 100%;\n  right: 0;\n  top: 0;\n  padding: 24px 0;\n  background: white;\n  z-index: 99999;\n  width: 300px; }\n\n:host ul {\n  margin: 0;\n  padding: 0;\n  display: block;\n  height: 100%;\n  max-height: 100%;\n  overflow: hidden;\n  overflow-y: auto; }\n\n:host ul li {\n    text-decoration: none;\n    display: block;\n    min-height: 32px;\n    border-bottom: 1px solid black;\n    display: flex;\n    width: 100%;\n    align-items: center;\n    justify-content: center;\n    padding: 0 24px;\n    cursor: pointer; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3Rlbm4vd3d3L2hhY2svc3JjL21vZHVsZXMvbWFwLXZpZXcvbW9kdWxlL2dyb3Vwcy1saXN0L2dyb3Vwcy1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixRQUFRO0VBQ1IsTUFBTTtFQUNOLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsY0FBYztFQUNkLFlBQVksRUFBQTs7QUFUaEI7RUFhSSxTQUFTO0VBQ1QsVUFBVTtFQUNWLGNBQWM7RUFDZCxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixnQkFBZ0IsRUFBQTs7QUFuQnBCO0lBc0JNLHFCQUFxQjtJQUNyQixjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLDhCQUE4QjtJQUM5QixhQUFhO0lBQ2IsV0FBVztJQUNYLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsZUFBZTtJQUNmLGVBQWUsRUFBQSIsImZpbGUiOiJzcmMvbW9kdWxlcy9tYXAtdmlldy9tb2R1bGUvZ3JvdXBzLWxpc3QvZ3JvdXBzLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIC5jYXJkIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHJpZ2h0OiAwO1xuICAgIHRvcDogMDtcbiAgICBwYWRkaW5nOiAyNHB4IDA7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgei1pbmRleDogOTk5OTk7XG4gICAgd2lkdGg6IDMwMHB4O1xuICB9XG5cbiAgdWwge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBtYXgtaGVpZ2h0OiAxMDAlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgb3ZlcmZsb3cteTogYXV0bztcblxuICAgIGxpIHtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgbWluLWhlaWdodDogMzJweDtcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIHBhZGRpbmc6IDAgMjRweDtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG4gIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/modules/map-view/module/groups-list/groups-list.component.ts":
/*!**************************************************************************!*\
  !*** ./src/modules/map-view/module/groups-list/groups-list.component.ts ***!
  \**************************************************************************/
/*! exports provided: GroupsListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupsListComponent", function() { return GroupsListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var GroupsListComponent = /** @class */ (function () {
    function GroupsListComponent() {
        this.groups = [];
        this.selectGroup = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.activeGroupeId = null;
    }
    GroupsListComponent.prototype.onSelect = function (group) {
        this.activeGroupeId = group.id;
        this.selectGroup.emit(this.activeGroupeId);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], GroupsListComponent.prototype, "groups", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], GroupsListComponent.prototype, "selectGroup", void 0);
    GroupsListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'groups-list',
            template: __webpack_require__(/*! ./groups-list.component.html */ "./src/modules/map-view/module/groups-list/groups-list.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./groups-list.component.scss */ "./src/modules/map-view/module/groups-list/groups-list.component.scss")]
        })
    ], GroupsListComponent);
    return GroupsListComponent;
}());



/***/ }),

/***/ "./src/modules/map-view/module/map-view.component.html":
/*!*************************************************************!*\
  !*** ./src/modules/map-view/module/map-view.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<map class=\"map-container\" [mapId]=\"mapId\"></map>\n<groups-list [groups]=\"groups\" (selectGroup)=\"onGroupSelect($event)\"></groups-list>"

/***/ }),

/***/ "./src/modules/map-view/module/map-view.component.scss":
/*!*************************************************************!*\
  !*** ./src/modules/map-view/module/map-view.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host .map-container {\n  width: 100%;\n  height: 100%;\n  position: relative; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3Rlbm4vd3d3L2hhY2svc3JjL21vZHVsZXMvbWFwLXZpZXcvbW9kdWxlL21hcC12aWV3LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0IsRUFBQSIsImZpbGUiOiJzcmMvbW9kdWxlcy9tYXAtdmlldy9tb2R1bGUvbWFwLXZpZXcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIC5tYXAtY29udGFpbmVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG59Il19 */"

/***/ }),

/***/ "./src/modules/map-view/module/map-view.component.ts":
/*!***********************************************************!*\
  !*** ./src/modules/map-view/module/map-view.component.ts ***!
  \***********************************************************/
/*! exports provided: MapViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapViewComponent", function() { return MapViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _map_view_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./map-view.service */ "./src/modules/map-view/module/map-view.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");





var MapViewComponent = /** @class */ (function () {
    function MapViewComponent(mapViewService, cdr) {
        this.mapViewService = mapViewService;
        this.cdr = cdr;
        this.groups = [];
        this.points = [];
        this.unsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
    }
    MapViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.mapId = this.mapViewService.mapId;
        this.mapViewService.getGroups()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.unsubscribe))
            .subscribe(function (data) {
            _this.groups = data.groups;
            _this.cdr.detectChanges();
        });
        this.mapViewService.markerClick
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.unsubscribe))
            .subscribe(function (data) {
            console.log(data);
        });
    };
    MapViewComponent.prototype.onGroupSelect = function (id) {
        var _this = this;
        this.mapViewService.getPoints(id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.unsubscribe))
            .subscribe(function (data) {
            _this.points = data.points;
            _this.mapViewService.addPointsToMap(_this.points);
        });
    };
    MapViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'map-view',
            template: __webpack_require__(/*! ./map-view.component.html */ "./src/modules/map-view/module/map-view.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./map-view.component.scss */ "./src/modules/map-view/module/map-view.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_map_view_service__WEBPACK_IMPORTED_MODULE_2__["MapViewService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
    ], MapViewComponent);
    return MapViewComponent;
}());



/***/ }),

/***/ "./src/modules/map-view/module/map-view.module.ts":
/*!********************************************************!*\
  !*** ./src/modules/map-view/module/map-view.module.ts ***!
  \********************************************************/
/*! exports provided: MapView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapView", function() { return MapView; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _map_view_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./map-view.component */ "./src/modules/map-view/module/map-view.component.ts");
/* harmony import */ var _map_view_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./map-view.service */ "./src/modules/map-view/module/map-view.service.ts");
/* harmony import */ var _map_module_map_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../map/module/map.module */ "./src/modules/map/module/map.module.ts");
/* harmony import */ var _groups_list_groups_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./groups-list/groups-list.component */ "./src/modules/map-view/module/groups-list/groups-list.component.ts");







var MapView = /** @class */ (function () {
    function MapView() {
    }
    MapView = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _map_module_map_module__WEBPACK_IMPORTED_MODULE_5__["MapModule"]
            ],
            entryComponents: [],
            exports: [
                _map_view_component__WEBPACK_IMPORTED_MODULE_3__["MapViewComponent"],
                _groups_list_groups_list_component__WEBPACK_IMPORTED_MODULE_6__["GroupsListComponent"]
            ],
            declarations: [
                _map_view_component__WEBPACK_IMPORTED_MODULE_3__["MapViewComponent"],
                _groups_list_groups_list_component__WEBPACK_IMPORTED_MODULE_6__["GroupsListComponent"]
            ],
            providers: [
                _map_view_service__WEBPACK_IMPORTED_MODULE_4__["MapViewService"]
            ],
        })
    ], MapView);
    return MapView;
}());



/***/ }),

/***/ "./src/modules/map-view/module/map-view.service.ts":
/*!*********************************************************!*\
  !*** ./src/modules/map-view/module/map-view.service.ts ***!
  \*********************************************************/
/*! exports provided: MapViewService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapViewService", function() { return MapViewService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _map_module_map_service_map_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../map/module/map-service/map.service */ "./src/modules/map/module/map-service/map.service.ts");
/* harmony import */ var src_api_endpoints__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/api/endpoints */ "./src/api/endpoints.ts");
/* harmony import */ var src_api_endpoint_endpoint_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/api/endpoint/endpoint.service */ "./src/api/endpoint/endpoint.service.ts");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_8__);









var MapViewService = /** @class */ (function () {
    function MapViewService(http, mapService, zone) {
        this.http = http;
        this.mapService = mapService;
        this.zone = zone;
        this.outletsLayer = new leaflet__WEBPACK_IMPORTED_MODULE_6__["LayerGroup"]();
        this.markers = [];
        this.markerClick = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
    }
    Object.defineProperty(MapViewService.prototype, "mapId", {
        get: function () {
            return 'map-view';
        },
        enumerable: true,
        configurable: true
    });
    MapViewService.prototype.getGroups = function () {
        return this.http.get(src_api_endpoints__WEBPACK_IMPORTED_MODULE_4__["ENDPOINTS"].GROUPS);
    };
    MapViewService.prototype.getPoints = function (id) {
        return this.http.get(Object(src_api_endpoint_endpoint_service__WEBPACK_IMPORTED_MODULE_5__["endpoint"])(src_api_endpoints__WEBPACK_IMPORTED_MODULE_4__["ENDPOINTS"].POINTS, { groupId: id }));
    };
    MapViewService.prototype.marker = function (markerData) {
        var _this = this;
        var icon = new leaflet__WEBPACK_IMPORTED_MODULE_6__["DivIcon"]({ className: 'map-div-icon' });
        var markerOptions = {
            icon: icon,
            markerData: markerData,
        };
        var coords = {
            lat: markerData.latitude,
            lng: markerData.longitude
        };
        return new leaflet__WEBPACK_IMPORTED_MODULE_6__["Marker"](coords, markerOptions)
            .addEventListener('click', function (event) {
            return _this.zone.run(function () { return _this.markerClick.next({
                mapId: event.target['_mapToAdd'].getContainer().id,
                markerData: event.target.options.markerData
            }); });
        });
    };
    MapViewService.prototype.addPointsToMap = function (points) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var lmap;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.mapService.getMap(this.mapId)];
                    case 1:
                        lmap = _a.sent();
                        this.outletsLayer.removeFrom(lmap);
                        this.outletsLayer = new leaflet__WEBPACK_IMPORTED_MODULE_6__["LayerGroup"]();
                        this.markers = Object(lodash__WEBPACK_IMPORTED_MODULE_8__["cloneDeep"])(points).map(function (point) {
                            var marker = _this.marker(point);
                            _this.outletsLayer.addLayer(marker);
                            return marker;
                        });
                        console.log(this.markers);
                        this.outletsLayer.addTo(lmap);
                        this.fitBounds();
                        return [2 /*return*/];
                }
            });
        });
    };
    MapViewService.prototype.fitBounds = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var lmap, mapModel, coords;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.mapService.getMap(this.mapId)];
                    case 1:
                        lmap = _a.sent();
                        return [4 /*yield*/, this.mapService.getMapModel(this.mapId)];
                    case 2:
                        mapModel = _a.sent();
                        coords = Object(lodash__WEBPACK_IMPORTED_MODULE_8__["map"])(this.markers, function (m) {
                            return m.getLatLng();
                        });
                        console.log(coords);
                        return [2 /*return*/, Object(lodash__WEBPACK_IMPORTED_MODULE_8__["size"])(coords) && lmap.fitBounds(coords, mapModel.boundsPaddingOptions)];
                }
            });
        });
    };
    MapViewService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _map_module_map_service_map_service__WEBPACK_IMPORTED_MODULE_3__["MapService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])
    ], MapViewService);
    return MapViewService;
}());



/***/ }),

/***/ "./src/modules/map/models/map-options.class.ts":
/*!*****************************************************!*\
  !*** ./src/modules/map/models/map-options.class.ts ***!
  \*****************************************************/
/*! exports provided: MapLayer, MapLayers, MapEvents, MapCenter, MapZoom, MapBaseLayers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapLayer", function() { return MapLayer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapLayers", function() { return MapLayers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapEvents", function() { return MapEvents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapCenter", function() { return MapCenter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapZoom", function() { return MapZoom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapBaseLayers", function() { return MapBaseLayers; });
var MapEventOption = /** @class */ (function () {
    function MapEventOption() {
    }
    return MapEventOption;
}());
var MapLayer = /** @class */ (function () {
    function MapLayer() {
    }
    return MapLayer;
}());

var MapLayers = /** @class */ (function () {
    function MapLayers() {
    }
    return MapLayers;
}());

var MapEvents = /** @class */ (function () {
    function MapEvents() {
    }
    return MapEvents;
}());

var MapCenter = /** @class */ (function () {
    function MapCenter() {
    }
    return MapCenter;
}());

var MapZoom = /** @class */ (function () {
    function MapZoom() {
    }
    return MapZoom;
}());

var MapBaseLayers = /** @class */ (function () {
    function MapBaseLayers() {
    }
    return MapBaseLayers;
}());



/***/ }),

/***/ "./src/modules/map/module/map-service/map-model.class.ts":
/*!***************************************************************!*\
  !*** ./src/modules/map/module/map-service/map-model.class.ts ***!
  \***************************************************************/
/*! exports provided: MapModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapModel", function() { return MapModel; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _models_map_options_class__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/map-options.class */ "./src/modules/map/models/map-options.class.ts");





var PREFIX = "<a href=\"http://www.openstreetmap.org/copyright\" target=\"_blank\">OpenStreetMap</a>";
var LAYERS = {
    // sputnik: {
    //   name: 'sputnik',
    //   title: '«Спутник»',
    //   type: 'xyz',
    //   url: 'http://tiles.maps.sputnik.ru/tiles/kmt2/{z}/{x}/{y}.png'
    // },
    osm: {
        name: 'osm',
        title: 'Open Street Map',
        type: 'xyz',
        url: 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
    }
};
var MapModel = /** @class */ (function () {
    function MapModel() {
        this.boundsPaddingOptions = {};
        this.layers = new _models_map_options_class__WEBPACK_IMPORTED_MODULE_4__["MapBaseLayers"]();
        this.layerChangeStream = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.layers = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this.layers, { baselayers: {
                sputnik: LAYERS.osm
            } });
        this.center = {
            lat: 56.31436833,
            lng: 43.993575,
            zoom: 5
        };
        this.defaults = {
            zoomControl: false,
            maxZoom: 18,
            minZoom: 3
        };
    }
    Object.defineProperty(MapModel.prototype, "layerChange", {
        get: function () {
            return this.layerChangeStream.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    MapModel.prototype.definedLayers = function () {
        return LAYERS;
    };
    MapModel.prototype.toggleLayer = function (layer) {
        if (LAYERS[layer]) {
            this.layers.baselayers = {};
            this.layers.baselayers[layer] = LAYERS[layer];
            if (this.mapInstance) {
                this.mapInstance.removeLayer(this.tileLayer);
                this.tileLayer = new leaflet__WEBPACK_IMPORTED_MODULE_2__["TileLayer"](this.layers.baselayers[layer].url);
                this.tileLayer.addTo(this.mapInstance);
                this.layerChangeStream.next(layer);
            }
        }
    };
    MapModel.prototype.isActiveLayer = function (layer) {
        return !!this.layers.baselayers[layer];
    };
    MapModel.prototype.initalize = function (id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var map, e_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.createMap(id)];
                    case 1:
                        map = _a.sent();
                        if (!Object(lodash__WEBPACK_IMPORTED_MODULE_1__["isEmpty"])(map)) {
                            new leaflet__WEBPACK_IMPORTED_MODULE_2__["Control"].Zoom({
                                position: 'topright'
                            }).addTo(map);
                            new leaflet__WEBPACK_IMPORTED_MODULE_2__["Control"].Scale({
                                position: 'bottomright',
                                maxWidth: 150,
                                imperial: false
                            }).addTo(map);
                            map.setMaxBounds([[180, 180], [-180, -180]]);
                            // map.attributionControl.setPrefix(PREFIX);
                            this.mapInstance = map;
                            return [2 /*return*/, this.mapInstance];
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        e_1 = _a.sent();
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    MapModel.prototype.invalidateSize = function () {
        var _this = this;
        setTimeout(function () { return _this.mapInstance.invalidateSize(); });
    };
    MapModel.prototype.destroy = function () {
        this.mapInstance.remove();
    };
    MapModel.prototype.createMap = function (mapId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (!mapId) {
                reject('Missing map id');
            }
            var center = {
                zoom: _this.center.zoom,
                center: [_this.center.lat, _this.center.lng]
            };
            _this.tileLayer = new leaflet__WEBPACK_IMPORTED_MODULE_2__["TileLayer"](_this.layers.baselayers.sputnik.url);
            var map;
            try {
                map = new leaflet__WEBPACK_IMPORTED_MODULE_2__["Map"](mapId, tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, center, _this.defaults));
            }
            catch (e) {
                reject(e);
            }
            _this.tileLayer.addTo(map);
            resolve(map);
        });
    };
    Object.defineProperty(MapModel.prototype, "activeLayerName", {
        get: function () {
            return Object(lodash__WEBPACK_IMPORTED_MODULE_1__["first"])(Object.keys(this.layers.baselayers));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MapModel.prototype, "map", {
        get: function () {
            return this.mapInstance;
        },
        enumerable: true,
        configurable: true
    });
    return MapModel;
}());



/***/ }),

/***/ "./src/modules/map/module/map-service/map.service.ts":
/*!***********************************************************!*\
  !*** ./src/modules/map/module/map-service/map.service.ts ***!
  \***********************************************************/
/*! exports provided: MapService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapService", function() { return MapService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MapService = /** @class */ (function () {
    function MapService() {
        this.mapsData = new Map();
        this.mapResolvers = new Map();
    }
    MapService.prototype.getMapModel = function (mapId) {
        var _this = this;
        return new Promise(function (resolve) {
            var mapHasBeenResolved = _this.mapResolvers.has(mapId) && !_this.mapResolvers.get(mapId).length;
            var mapDataExist = _this.mapsData.has(mapId);
            if (mapHasBeenResolved && mapDataExist) {
                return resolve(_this.mapsData.get(mapId));
            }
            _this.mapResolvers.set(mapId, (_this.mapResolvers.get(mapId) || []).concat([resolve]));
            return resolve(_this.mapsData.get(mapId));
        })
            .then(function () { return _this.mapsData.get(mapId); });
    };
    MapService.prototype.set = function (mapId, mapModel) {
        this.mapsData.set(mapId, mapModel);
        if (this.mapResolvers.has(mapId)) {
            this.mapResolvers.get(mapId).forEach(function (resolve) { return resolve(mapModel); });
            this.mapResolvers.set(mapId, []);
        }
    };
    MapService.prototype.getMap = function (mapId) {
        return this.getMapModel(mapId)
            .then(function (mapModel) { return mapModel.map; });
    };
    MapService.prototype.unset = function (mapId) {
        if (this.mapsData.has(mapId)) {
            this.mapsData.get(mapId).destroy();
            this.mapsData.delete(mapId);
        }
    };
    MapService.prototype.setBoundsPadding = function (mapId, options) {
        this.mapsData.get(mapId).boundsPaddingOptions = options;
    };
    MapService.prototype.getBoundsPadding = function (mapId) {
        return this.mapsData.get(mapId).boundsPaddingOptions;
    };
    MapService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], MapService);
    return MapService;
}());



/***/ }),

/***/ "./src/modules/map/module/map.component.html":
/*!***************************************************!*\
  !*** ./src/modules/map/module/map.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [id]=\"mapId\" class=\"map\"></div>\n"

/***/ }),

/***/ "./src/modules/map/module/map.component.scss":
/*!***************************************************!*\
  !*** ./src/modules/map/module/map.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  width: 100%;\n  height: 100%;\n  position: relative;\n  display: block; }\n  :host .map {\n    width: 100%;\n    height: 100%;\n    position: absolute; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3Rlbm4vd3d3L2hhY2svc3JjL21vZHVsZXMvbWFwL21vZHVsZS9tYXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixjQUFjLEVBQUE7RUFKaEI7SUFPSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQixFQUFBIiwiZmlsZSI6InNyYy9tb2R1bGVzL21hcC9tb2R1bGUvbWFwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuXG4gIC5tYXAge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIH1cbn1cblxuIl19 */"

/***/ }),

/***/ "./src/modules/map/module/map.component.ts":
/*!*************************************************!*\
  !*** ./src/modules/map/module/map.component.ts ***!
  \*************************************************/
/*! exports provided: MapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapComponent", function() { return MapComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_core_helpers_global_mediator_global_mediator_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/core/helpers/global-mediator/global-mediator.service */ "./src/core/helpers/global-mediator/global-mediator.service.ts");
/* harmony import */ var src_core_helpers_storage_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/core/helpers/storage/storage.service */ "./src/core/helpers/storage/storage.service.ts");
/* harmony import */ var _map_service_map_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./map-service/map.service */ "./src/modules/map/module/map-service/map.service.ts");
/* harmony import */ var _map_service_map_model_class__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./map-service/map-model.class */ "./src/modules/map/module/map-service/map-model.class.ts");








var activeTilesLayers = 'mapActiveTilesLayers';
var MapComponent = /** @class */ (function () {
    function MapComponent(mapService, storage, zone) {
        this.mapService = mapService;
        this.storage = storage;
        this.zone = zone;
        this.unsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    MapComponent.prototype.ngOnInit = function () {
        var _this = this;
        src_core_helpers_global_mediator_global_mediator_service__WEBPACK_IMPORTED_MODULE_4__["GlobalMediator"].listen('AppShell:contentSizeChanged')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.unsubscribe))
            .subscribe(function () { return _this.invalidateMapSize(); });
    };
    MapComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        var mapModel = new _map_service_map_model_class__WEBPACK_IMPORTED_MODULE_7__["MapModel"]();
        this.zone.runOutsideAngular(function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, mapModel.initalize(this.mapId)];
                    case 1:
                        _a.sent();
                        this.mapService.set(this.mapId, mapModel);
                        this.setSavedTileLayer(mapModel);
                        mapModel.map.invalidateSize();
                        mapModel.layerChange
                            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.unsubscribe))
                            .subscribe(function (layerName) { return _this.saveActiveTileLayer(layerName); });
                        return [2 /*return*/];
                }
            });
        }); });
    };
    MapComponent.prototype.ngOnDestroy = function () {
        this.unsubscribe.next();
        this.mapService.unset(this.mapId);
    };
    MapComponent.prototype.invalidateMapSize = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var map;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.mapService.getMap(this.mapId)];
                    case 1:
                        map = _a.sent();
                        map.invalidateSize();
                        return [2 /*return*/];
                }
            });
        });
    };
    MapComponent.prototype.setSavedTileLayer = function (mapModel) {
        var savedTilesLayers = this.storage.get(activeTilesLayers);
        if (savedTilesLayers && savedTilesLayers[this.mapId]) {
            mapModel.toggleLayer(savedTilesLayers[this.mapId]);
            return;
        }
        this.saveActiveTileLayer(mapModel.activeLayerName);
    };
    MapComponent.prototype.saveActiveTileLayer = function (layerName) {
        var _a;
        var savedTilesLayers = this.storage.get(activeTilesLayers);
        var newSavedTilesLayers = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, (savedTilesLayers || {}), (_a = {}, _a[this.mapId] = layerName, _a));
        this.storage.add(activeTilesLayers, newSavedTilesLayers);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], MapComponent.prototype, "mapId", void 0);
    MapComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'map',
            template: __webpack_require__(/*! ./map.component.html */ "./src/modules/map/module/map.component.html"),
            styles: [__webpack_require__(/*! ./map.component.scss */ "./src/modules/map/module/map.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_map_service_map_service__WEBPACK_IMPORTED_MODULE_6__["MapService"],
            src_core_helpers_storage_storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])
    ], MapComponent);
    return MapComponent;
}());



/***/ }),

/***/ "./src/modules/map/module/map.module.ts":
/*!**********************************************!*\
  !*** ./src/modules/map/module/map.module.ts ***!
  \**********************************************/
/*! exports provided: MapModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapModule", function() { return MapModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var src_core_helpers_storage_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/core/helpers/storage/storage.service */ "./src/core/helpers/storage/storage.service.ts");
/* harmony import */ var _map_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./map.component */ "./src/modules/map/module/map.component.ts");
/* harmony import */ var _map_service_map_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./map-service/map.service */ "./src/modules/map/module/map-service/map.service.ts");







var MapModule = /** @class */ (function () {
    function MapModule() {
    }
    MapModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
            ],
            exports: [
                _map_component__WEBPACK_IMPORTED_MODULE_5__["MapComponent"],
            ],
            declarations: [
                _map_component__WEBPACK_IMPORTED_MODULE_5__["MapComponent"]
            ],
            providers: [
                _map_service_map_service__WEBPACK_IMPORTED_MODULE_6__["MapService"],
                src_core_helpers_storage_storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"]
            ]
        })
    ], MapModule);
    return MapModule;
}());



/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/tenn/www/hack/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map