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

module.exports = "<div class=\"full-page\">\n  <header class=\"full-page__header\">\n    <h1>ПРАВО НА ГОРОД</h1>\n    <p>Сделаем Калининград<br>вместе лучше!</p>\n  </header>\n\n  <main class=\"full-page__body\">\n    <router-outlet></router-outlet>\n  </main>\n\n  <footer class=\"full-page__footer\">\n    <ul class=\"list list--icons\">\n      <li>\n        <a href=\"\">\n            <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 73.31 73.31\"><defs><style>.cls-1{fill:#eda835;}</style></defs><title>Ресурс 2</title><g id=\"Слой_2\" data-name=\"Слой 2\"><g id=\"Слой_1-2\" data-name=\"Слой 1\"><path class=\"cls-1\" d=\"M36.66,0A36.66,36.66,0,1,0,73.31,36.66,36.66,36.66,0,0,0,36.66,0ZM55.25,40.62A69.6,69.6,0,0,1,60.3,45.7a14.42,14.42,0,0,1,1.81,2.6c.7,1.35.07,2.83-1.14,2.91H53.46a5.81,5.81,0,0,1-4.79-1.95c-1-1.06-2-2.19-3-3.28a7.22,7.22,0,0,0-1.35-1.2,1.57,1.57,0,0,0-2.5.61A7.84,7.84,0,0,0,41,48.9c-.08,1.77-.62,2.24-2.39,2.32a19.2,19.2,0,0,1-10.75-2.31,23.79,23.79,0,0,1-7.23-6.77,91.28,91.28,0,0,1-9.52-17c-.6-1.34-.16-2.05,1.31-2.08,2.45,0,4.9,0,7.36,0a2.16,2.16,0,0,1,2,1.53,45.61,45.61,0,0,0,5,9.23,7.87,7.87,0,0,0,1.88,2.07,1.14,1.14,0,0,0,1.94-.57,6.15,6.15,0,0,0,.43-1.94A29,29,0,0,0,31,26.62,2.83,2.83,0,0,0,28.55,24c-.71-.14-.61-.4-.26-.81a2.69,2.69,0,0,1,2.31-1.15h8.48c1.34.26,1.64.86,1.82,2.21v9.43c0,.52.26,2.07,1.19,2.41.75.25,1.25-.36,1.7-.83a29.22,29.22,0,0,0,4.78-7.34c.57-1.16,1.07-2.37,1.55-3.57A1.83,1.83,0,0,1,52,23.05h8.17a4.46,4.46,0,0,1,.72,0c1.38.23,1.75.83,1.33,2.17A20.34,20.34,0,0,1,59,30.91c-1.36,1.89-2.82,3.71-4.17,5.6-1.24,1.73-1.15,2.61.4,4.11Zm0,0\"/></g></g></svg>\n        </a>\n      </li>\n      <li>\n        <a href=\"\">\n            <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 37.24 37.24\"><defs><style>.cls-1{fill:#eda835;}</style></defs><title>Ресурс 1</title><g id=\"Слой_2\" data-name=\"Слой 2\"><g id=\"Слой_1-2\" data-name=\"Слой 1\"><path class=\"cls-1\" d=\"M18.62,22.35a3.73,3.73,0,1,0-3.72-3.73,3.73,3.73,0,0,0,3.72,3.73Zm0,0\"/><path class=\"cls-1\" d=\"M26.76,14.06V10.47H23.17v3.59Zm0,0\"/><path class=\"cls-1\" d=\"M18.62,0A18.62,18.62,0,1,0,37.24,18.62,18.64,18.64,0,0,0,18.62,0ZM29.21,16.45v8.67a4.1,4.1,0,0,1-4.09,4.09h-13A4.1,4.1,0,0,1,8,25.12v-13A4.1,4.1,0,0,1,12.12,8h13a4.1,4.1,0,0,1,4.09,4.09Zm0,0\"/><path class=\"cls-1\" d=\"M24.41,18.62a5.79,5.79,0,1,1-11.16-2.18H10.09v8.67a2,2,0,0,0,2,2h13a2,2,0,0,0,2-2V16.45H24a5.68,5.68,0,0,1,.43,2.18Zm0,0\"/></g></g></svg>\n        </a>\n      </li>\n      <li>\n        <a href=\"\">\n            <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 37.24 37.24\"><defs><style>.cls-1{fill:#eda835;}</style></defs><title>Ресурс 1</title><g id=\"Слой_2\" data-name=\"Слой 2\"><g id=\"Слой_1-2\" data-name=\"Слой 1\"><path class=\"cls-1\" d=\"M18.62,0A18.62,18.62,0,1,0,37.24,18.62,18.64,18.64,0,0,0,18.62,0Zm4.63,19.27h-3v10.8H15.73V19.27H13.6V15.46h2.13V13a4.21,4.21,0,0,1,4.53-4.53h3.33v3.71H21.18a.91.91,0,0,0-1,1v2.24h3.42Zm0,0\"/></g></g></svg>\n        </a>\n      </li>\n      <li>\n        <a href=\"\">\n            <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 37.24 37.24\"><defs><style>.cls-1{fill:#eda835;}</style></defs><title>Ресурс 1</title><g id=\"Слой_2\" data-name=\"Слой 2\"><g id=\"Слой_1-2\" data-name=\"Слой 1\"><path class=\"cls-1\" d=\"M18.62,0A18.62,18.62,0,1,0,37.24,18.62,18.64,18.64,0,0,0,18.62,0Zm8.3,14.36c0,.18,0,.37,0,.56A12.19,12.19,0,0,1,8.18,25.18a8.84,8.84,0,0,0,1,.06,8.6,8.6,0,0,0,5.33-1.84,4.29,4.29,0,0,1-4-3,4.3,4.3,0,0,0,1.94-.07A4.29,4.29,0,0,1,9,16.16V16.1a4.25,4.25,0,0,0,1.94.53,4.29,4.29,0,0,1-1.33-5.72,12.18,12.18,0,0,0,8.83,4.48,4.29,4.29,0,0,1,7.3-3.91,8.55,8.55,0,0,0,2.72-1,4.32,4.32,0,0,1-1.89,2.37,8.38,8.38,0,0,0,2.46-.67,8.66,8.66,0,0,1-2.14,2.22Zm0,0\"/></g></g></svg>\n        </a>\n      </li>\n    </ul>\n  </footer>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host .full-page {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  width: 100%;\n  height: 100%;\n  overflow: hidden; }\n  :host .full-page .full-page__header {\n    height: 56px;\n    background: #f5a623; }\n  :host .full-page .full-page__footer {\n    height: 56px;\n    background: white; }\n  :host .full-page .full-page__header {\n    width: 100%;\n    padding: 0 16px;\n    display: flex;\n    align-items: center;\n    justify-content: space-between; }\n  :host .full-page .full-page__header h1 {\n      color: white;\n      margin: 0;\n      font-size: 16px;\n      line-height: 16px; }\n  :host .full-page .full-page__header p {\n      margin: 0;\n      text-align: right;\n      color: white; }\n  :host .full-page .full-page__body {\n    position: relative;\n    height: calc(100% - 2 * 56px);\n    width: 100%; }\n  :host .full-page .list--icons {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    margin: 0;\n    padding: 0;\n    width: 100%;\n    height: 100%; }\n  :host .full-page .list--icons li {\n      list-style-type: none;\n      display: inline-block;\n      margin: 0 8px; }\n  :host .full-page .list--icons li a {\n        display: block;\n        width: 30px;\n        height: 30px;\n        text-decoration: none;\n        cursor: pointer; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3Rlbm4vd3d3L2hhY2svc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCIvaG9tZS90ZW5uL3d3dy9oYWNrL3NyYy9hc3NldHMvc3R5bGVzL3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBO0VBRUksYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixPQUFPO0VBQ1AsV0FBVztFQUNYLFlBQVk7RUFDWixnQkFBZ0IsRUFBQTtFQVBwQjtJQVVNLFlBWnlCO0lBYXpCLG1CQ1prQixFQUFBO0VEQ3hCO0lBZU0sWUFqQnlCO0lBa0J6QixpQkNsQk8sRUFBQTtFREViO0lBb0JNLFdBQVc7SUFDWCxlQUEyQjtJQUMzQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDhCQUE4QixFQUFBO0VBeEJwQztNQTJCUSxZQUFZO01BQ1osU0FBUztNQUNULGVBQWU7TUFDZixpQkFBaUIsRUFBQTtFQTlCekI7TUFrQ1MsU0FBUztNQUNULGlCQUFpQjtNQUNqQixZQ3RDSSxFQUFBO0VERWI7SUF5Q00sa0JBQWtCO0lBQ2xCLDZCQUF5QztJQUN6QyxXQUFXLEVBQUE7RUEzQ2pCO0lBK0NNLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLFNBQVM7SUFDVCxVQUFVO0lBQ1YsV0FBVztJQUNYLFlBQVksRUFBQTtFQXJEbEI7TUF1RFEscUJBQXFCO01BQ3JCLHFCQUFxQjtNQUNyQixhQ3ZEUyxFQUFBO0VERmpCO1FBNERVLGNBQWM7UUFDZCxXQUFXO1FBQ1gsWUFBWTtRQUNaLHFCQUFxQjtRQUNyQixlQUFlLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICdzcmMvYXNzZXRzL3N0eWxlcy92YXJpYWJsZXMuc2Nzcyc7XG5cbiRibG9jay1oZWlnaHQ6ICRzY3JlZW4tYXRvbSAqIDc7XG5cbjpob3N0IHtcbiAgLmZ1bGwtcGFnZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGZsZXg6IDE7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgICAuZnVsbC1wYWdlX19oZWFkZXIge1xuICAgICAgaGVpZ2h0OiAkYmxvY2staGVpZ2h0O1xuICAgICAgYmFja2dyb3VuZDogJG9yYW5nZTtcbiAgICB9XG5cbiAgICAuZnVsbC1wYWdlX19mb290ZXIgIHtcbiAgICAgIGhlaWdodDogJGJsb2NrLWhlaWdodDtcbiAgICAgIGJhY2tncm91bmQ6ICR3aGl0ZTtcbiAgICB9XG5cbiAgICAuZnVsbC1wYWdlX19oZWFkZXIge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBwYWRkaW5nOiAwICRzY3JlZW4tYXRvbSAqIDI7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcblxuICAgICAgaDEge1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMTZweDtcbiAgICAgIH1cblxuICAgICAgIHAge1xuICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgICBjb2xvcjogJHdoaXRlO1xuICAgICAgIH1cbiAgICB9XG5cbiAgICAuZnVsbC1wYWdlX19ib2R5IHtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIGhlaWdodDogY2FsYygxMDAlIC0gMiAqICN7JGJsb2NrLWhlaWdodH0pO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuXG4gICAgLmxpc3QtLWljb25zIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBtYXJnaW46IDA7XG4gICAgICBwYWRkaW5nOiAwO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICBsaSB7XG4gICAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBtYXJnaW46IDAgJHNjcmVlbi1hdG9tO1xuXG4gICAgICAgIGEge1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIHdpZHRoOiAzMHB4O1xuICAgICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59IiwiJGdyZWVuOiByZ2IoODksMjE1LDEzMik7XG4kYmxhY2s6IHJnYigzNiwzNiwzNik7XG4kd2hpdGU6IHdoaXRlO1xuJG9yYW5nZTogcmdiKDI0NSwxNjYsMzUpO1xuJGdyZXk6IHJnYigyMjYsIDIyNiwgMjI2KTtcbiRyZWQ6IHJnYigyMDYsIDg4LCA2Nik7XG4kc2NyZWVuLWF0b206IDhweDtcbiJdfQ== */"

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

/***/ "./src/modules/map-view/models/groups.class.ts":
/*!*****************************************************!*\
  !*** ./src/modules/map-view/models/groups.class.ts ***!
  \*****************************************************/
/*! exports provided: Group, GroupResponse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Group", function() { return Group; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupResponse", function() { return GroupResponse; });
var Group = /** @class */ (function () {
    function Group() {
    }
    return Group;
}());

var GroupResponse = /** @class */ (function () {
    function GroupResponse() {
    }
    return GroupResponse;
}());



/***/ }),

/***/ "./src/modules/map-view/models/points.class.ts":
/*!*****************************************************!*\
  !*** ./src/modules/map-view/models/points.class.ts ***!
  \*****************************************************/
/*! exports provided: PointModel, PointsResponse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PointModel", function() { return PointModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PointsResponse", function() { return PointsResponse; });
var PointModel = /** @class */ (function () {
    function PointModel() {
    }
    return PointModel;
}());

var PointsResponse = /** @class */ (function () {
    function PointsResponse() {
    }
    return PointsResponse;
}());



/***/ }),

/***/ "./src/modules/map-view/module/groups-list/groups-list.component.html":
/*!****************************************************************************!*\
  !*** ./src/modules/map-view/module/groups-list/groups-list.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <ul class=\"list\">\n    <li *ngFor=\"let group of groups\" (click)=\"onSelect(group)\" [ngClass]=\"{'active': isActive(group)}\">\n      {{group.name}}\n    </li>\n  </ul>\n</div>"

/***/ }),

/***/ "./src/modules/map-view/module/groups-list/groups-list.component.scss":
/*!****************************************************************************!*\
  !*** ./src/modules/map-view/module/groups-list/groups-list.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host .card {\n  position: absolute;\n  height: 100%;\n  right: 0;\n  top: 56px;\n  padding: 0 0 8px;\n  background: white;\n  z-index: 99999;\n  width: 256px;\n  min-height: 200px;\n  height: 100%;\n  max-height: 50vh;\n  max-width: 100%;\n  border: 1px solid #e2e2e2; }\n\n:host ul {\n  margin: 0;\n  padding: 0;\n  display: block;\n  height: 100%;\n  max-height: 100%;\n  overflow: hidden;\n  overflow-y: auto; }\n\n:host ul li {\n    text-decoration: none;\n    display: block;\n    min-height: 32px;\n    border-bottom: 1px solid #e2e2e2;\n    display: flex;\n    justify-content: flex-start;\n    width: 100%;\n    align-items: center;\n    padding: 0 16px;\n    cursor: pointer; }\n\n:host ul li.active {\n      background: #e2e2e2; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3Rlbm4vd3d3L2hhY2svc3JjL21vZHVsZXMvbWFwLXZpZXcvbW9kdWxlL2dyb3Vwcy1saXN0L2dyb3Vwcy1saXN0LmNvbXBvbmVudC5zY3NzIiwiL2hvbWUvdGVubi93d3cvaGFjay9zcmMvYXNzZXRzL3N0eWxlcy92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUVJLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osUUFBUTtFQUNSLFNBQXFCO0VBQ3JCLGdCQ0ZhO0VER2IsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxZQUF3QjtFQUN4QixpQkFBNkI7RUFDN0IsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YseUJDWnFCLEVBQUE7O0FERnpCO0VBa0JJLFNBQVM7RUFDVCxVQUFVO0VBQ1YsY0FBYztFQUNkLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGdCQUFnQixFQUFBOztBQXhCcEI7SUEyQk0scUJBQXFCO0lBQ3JCLGNBQWM7SUFDZCxnQkFBNEI7SUFDNUIsZ0NDNUJtQjtJRDZCbkIsYUFBYTtJQUNiLDJCQUEyQjtJQUMzQixXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLGVBQTJCO0lBQzNCLGVBQWUsRUFBQTs7QUFwQ3JCO01BdUNRLG1CQ3JDaUIsRUFBQSIsImZpbGUiOiJzcmMvbW9kdWxlcy9tYXAtdmlldy9tb2R1bGUvZ3JvdXBzLWxpc3QvZ3JvdXBzLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICdzcmMvYXNzZXRzL3N0eWxlcy92YXJpYWJsZXMuc2Nzcyc7XG5cbjpob3N0IHtcbiAgLmNhcmQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgcmlnaHQ6IDA7XG4gICAgdG9wOiAkc2NyZWVuLWF0b20gKiA3O1xuICAgIHBhZGRpbmc6IDAgMCAkc2NyZWVuLWF0b207XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgei1pbmRleDogOTk5OTk7XG4gICAgd2lkdGg6ICRzY3JlZW4tYXRvbSAqIDMyO1xuICAgIG1pbi1oZWlnaHQ6ICRzY3JlZW4tYXRvbSAqIDI1O1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBtYXgtaGVpZ2h0OiA1MHZoO1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAkZ3JleTtcbiAgfVxuXG4gIHVsIHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgbWF4LWhlaWdodDogMTAwJTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG5cbiAgICBsaSB7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIG1pbi1oZWlnaHQ6ICRzY3JlZW4tYXRvbSAqIDQ7XG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJGdyZXk7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgcGFkZGluZzogMCAkc2NyZWVuLWF0b20gKiAyO1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAgICAgJi5hY3RpdmUge1xuICAgICAgICBiYWNrZ3JvdW5kOiAkZ3JleTtcbiAgICAgICB9XG4gICAgfVxuICB9XG59IiwiJGdyZWVuOiByZ2IoODksMjE1LDEzMik7XG4kYmxhY2s6IHJnYigzNiwzNiwzNik7XG4kd2hpdGU6IHdoaXRlO1xuJG9yYW5nZTogcmdiKDI0NSwxNjYsMzUpO1xuJGdyZXk6IHJnYigyMjYsIDIyNiwgMjI2KTtcbiRyZWQ6IHJnYigyMDYsIDg4LCA2Nik7XG4kc2NyZWVuLWF0b206IDhweDtcbiJdfQ== */"

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
        this.selectGroup.emit(group);
    };
    GroupsListComponent.prototype.isActive = function (group) {
        return this.activeGroupeId === group.id;
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
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], GroupsListComponent);
    return GroupsListComponent;
}());



/***/ }),

/***/ "./src/modules/map-view/module/item-card/item-card.component.html":
/*!************************************************************************!*\
  !*** ./src/modules/map-view/module/item-card/item-card.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"marker-card\" *ngIf=\"item && group\">\n  <div class=\"marker-card__header\">\n    <h2>{{item?.title}}</h2>\n    <i class=\"mdi mdi-close\" (click)=\"close()\"></i>\n  </div>\n  <div class=\"marker-card__body\">\n    <div class=\"marker-card__body--title\">\n      <span>{{group.name}}</span>\n    </div>\n    <div class=\"marker-card__body--img\">\n      <img src=\"{{item?.photoUrl}}\" alt=\"{{item?.description}}\" *ngIf=\"item?.photoUrl\">\n    </div>\n    <div class=\"marker-card__body--text\">\n      <p *ngIf=\"item.latitude && item.longitude\">{{item?.latitude}} {{item?.longitude}}</p>\n      <p *ngIf=\"!item.latitude || !item.longitude\">Без координат</p>\n      <span>{{item?.description}}</span>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/modules/map-view/module/item-card/item-card.component.scss":
/*!************************************************************************!*\
  !*** ./src/modules/map-view/module/item-card/item-card.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host .marker-card {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 99999;\n  background: white;\n  width: 256px; }\n\n:host .marker-card__header {\n  min-height: 40px;\n  padding: 0 16px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  background: #ce5842; }\n\n:host .marker-card__header h2 {\n    font-size: 14px;\n    color: white;\n    width: 100%;\n    margin: 0; }\n\n:host .marker-card__header .mdi {\n    color: white;\n    cursor: pointer; }\n\n:host .marker-card__body {\n  padding: 16px 24px;\n  height: 100%;\n  overflow: hidden;\n  overflow-y: auto; }\n\n:host .marker-card__body .marker-card__body--title {\n    font-size: 14px;\n    font-weight: bold;\n    margin: 0 0 16px; }\n\n:host .marker-card__body .marker-card__body--img {\n    max-width: 100%;\n    background: #e2e2e2;\n    border-radius: 10px;\n    overflow: hidden;\n    margin: 0 0 8px; }\n\n:host .marker-card__body .marker-card__body--img.empty {\n      min-height: 200px; }\n\n:host .marker-card__body .marker-card__body--text {\n    font-size: 12px; }\n\n:host .marker-card__body .marker-card__body--text p {\n      color: #e2e2e2;\n      margin: 0 0 16px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3Rlbm4vd3d3L2hhY2svc3JjL21vZHVsZXMvbWFwLXZpZXcvbW9kdWxlL2l0ZW0tY2FyZC9pdGVtLWNhcmQuY29tcG9uZW50LnNjc3MiLCIvaG9tZS90ZW5uL3d3dy9oYWNrL3NyYy9hc3NldHMvc3R5bGVzL3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBRUksYUFBYTtFQUNiLHNCQUFzQjtFQUN0QiwyQkFBMkI7RUFDM0IsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sT0FBTztFQUNQLGNBQWM7RUFDZCxpQkNWUztFRFdULFlBQXdCLEVBQUE7O0FBWDVCO0VBZUksZ0JBQTZCO0VBQzdCLGVBQTJCO0VBQzNCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsOEJBQThCO0VBQzlCLG1CQ2pCa0IsRUFBQTs7QURIdEI7SUF1Qk0sZUFBZTtJQUNmLFlBQVk7SUFDWixXQUFXO0lBQ1gsU0FBUyxFQUFBOztBQTFCZjtJQThCTSxZQUFZO0lBQ1osZUFBZSxFQUFBOztBQS9CckI7RUFvQ0ksa0JBQTJDO0VBQzNDLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsZ0JBQWdCLEVBQUE7O0FBdkNwQjtJQTBDTSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGdCQUE0QixFQUFBOztBQTVDbEM7SUFnRE0sZUFBZTtJQUNmLG1CQy9DbUI7SURnRG5CLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsZUNoRFcsRUFBQTs7QURKakI7TUF1RFEsaUJBQWlCLEVBQUE7O0FBdkR6QjtJQTRETSxlQUFlLEVBQUE7O0FBNURyQjtNQStEUSxjQzdEaUI7TUQ4RGpCLGdCQUE0QixFQUFBIiwiZmlsZSI6InNyYy9tb2R1bGVzL21hcC12aWV3L21vZHVsZS9pdGVtLWNhcmQvaXRlbS1jYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnc3JjL2Fzc2V0cy9zdHlsZXMvdmFyaWFibGVzLnNjc3MnO1xuXG46aG9zdCB7XG4gIC5tYXJrZXItY2FyZCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHotaW5kZXg6IDk5OTk5O1xuICAgIGJhY2tncm91bmQ6ICR3aGl0ZTtcbiAgICB3aWR0aDogJHNjcmVlbi1hdG9tICogMzI7XG4gIH1cblxuICAubWFya2VyLWNhcmRfX2hlYWRlciB7XG4gICAgbWluLWhlaWdodDogICRzY3JlZW4tYXRvbSAqIDU7XG4gICAgcGFkZGluZzogMCAkc2NyZWVuLWF0b20gKiAyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYmFja2dyb3VuZDogJHJlZDtcblxuICAgIGgyIHtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgbWFyZ2luOiAwO1xuICAgIH1cblxuICAgIC5tZGkge1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cbiAgfVxuXG4gIC5tYXJrZXItY2FyZF9fYm9keSB7XG4gICAgcGFkZGluZzogJHNjcmVlbi1hdG9tICogMiAgJHNjcmVlbi1hdG9tICogMztcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xuXG4gICAgLm1hcmtlci1jYXJkX19ib2R5LS10aXRsZSB7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIG1hcmdpbjogMCAwICRzY3JlZW4tYXRvbSAqIDI7XG4gICAgfVxuXG4gICAgLm1hcmtlci1jYXJkX19ib2R5LS1pbWcge1xuICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgICAgYmFja2dyb3VuZDogJGdyZXk7XG4gICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgIG1hcmdpbjogMCAwICRzY3JlZW4tYXRvbTtcblxuICAgICAgJi5lbXB0eSB7XG4gICAgICAgIG1pbi1oZWlnaHQ6IDIwMHB4O1xuICAgICAgfVxuICAgIH1cblxuICAgIC5tYXJrZXItY2FyZF9fYm9keS0tdGV4dCB7XG4gICAgICBmb250LXNpemU6IDEycHg7XG5cbiAgICAgIHAge1xuICAgICAgICBjb2xvcjogJGdyZXk7XG4gICAgICAgIG1hcmdpbjogMCAwICRzY3JlZW4tYXRvbSAqIDI7XG4gICAgICB9XG4gICAgfVxuXG4gIH1cbn0iLCIkZ3JlZW46IHJnYig4OSwyMTUsMTMyKTtcbiRibGFjazogcmdiKDM2LDM2LDM2KTtcbiR3aGl0ZTogd2hpdGU7XG4kb3JhbmdlOiByZ2IoMjQ1LDE2NiwzNSk7XG4kZ3JleTogcmdiKDIyNiwgMjI2LCAyMjYpO1xuJHJlZDogcmdiKDIwNiwgODgsIDY2KTtcbiRzY3JlZW4tYXRvbTogOHB4O1xuIl19 */"

/***/ }),

/***/ "./src/modules/map-view/module/item-card/item-card.component.ts":
/*!**********************************************************************!*\
  !*** ./src/modules/map-view/module/item-card/item-card.component.ts ***!
  \**********************************************************************/
/*! exports provided: ItemCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemCardComponent", function() { return ItemCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_points_class__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/points.class */ "./src/modules/map-view/models/points.class.ts");
/* harmony import */ var _models_groups_class__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/groups.class */ "./src/modules/map-view/models/groups.class.ts");




var ItemCardComponent = /** @class */ (function () {
    function ItemCardComponent(cdr) {
        this.cdr = cdr;
        this.cardClose = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ItemCardComponent.prototype.ngOnInit = function () {
    };
    ItemCardComponent.prototype.close = function () {
        this.cardClose.emit(true);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _models_points_class__WEBPACK_IMPORTED_MODULE_2__["PointModel"])
    ], ItemCardComponent.prototype, "item", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _models_groups_class__WEBPACK_IMPORTED_MODULE_3__["Group"])
    ], ItemCardComponent.prototype, "group", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], ItemCardComponent.prototype, "cardClose", void 0);
    ItemCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'item-card',
            template: __webpack_require__(/*! ./item-card.component.html */ "./src/modules/map-view/module/item-card/item-card.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./item-card.component.scss */ "./src/modules/map-view/module/item-card/item-card.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
    ], ItemCardComponent);
    return ItemCardComponent;
}());



/***/ }),

/***/ "./src/modules/map-view/module/map-view.component.html":
/*!*************************************************************!*\
  !*** ./src/modules/map-view/module/map-view.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<map class=\"map-container\" [mapId]=\"mapId\"></map>\n<button class=\"btn\" (click)=\"onBtnClick()\">\n  <i class=\"mdi\" [ngClass]=\"isListVisible ? 'mdi-chevron-up' : 'mdi-chevron-down'\"></i>\n  ВЫБОР КАТЕГОРИИ\n</button>\n<groups-list *ngIf=\"isListVisible\"\n  [groups]=\"groups\"\n  (selectGroup)=\"onGroupSelect($event)\"></groups-list>\n<item-card  *ngIf=\"isCardVisible\"\n           [item]=\"selectedPoint\"\n           [group]=\"selectedGroup\"\n           (cardClose)=\"hideCard()\"></item-card>"

/***/ }),

/***/ "./src/modules/map-view/module/map-view.component.scss":
/*!*************************************************************!*\
  !*** ./src/modules/map-view/module/map-view.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host .map-container {\n  width: 100%;\n  height: 100%;\n  position: relative; }\n\n:host .btn {\n  height: 32px;\n  padding: 8px 16px;\n  color: white;\n  text-align: center;\n  top: 24px;\n  right: 0;\n  position: absolute;\n  z-index: 9999;\n  background: #f5a623;\n  border: 0;\n  outline: 0;\n  cursor: pointer;\n  width: 256px;\n  max-width: 100%;\n  display: flex;\n  align-items: center; }\n\n:host .btn .mdi {\n    margin-left: 8px;\n    color: white;\n    margin: 0;\n    padding: 0;\n    font-size: 18px;\n    line-height: 16px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3Rlbm4vd3d3L2hhY2svc3JjL21vZHVsZXMvbWFwLXZpZXcvbW9kdWxlL21hcC12aWV3LmNvbXBvbmVudC5zY3NzIiwiL2hvbWUvdGVubi93d3cvaGFjay9zcmMvYXNzZXRzL3N0eWxlcy92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUVJLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCLEVBQUE7O0FBSnRCO0VBUUksWUFBd0I7RUFDeEIsaUJBQW9DO0VBQ3BDLFlDVlM7RURXVCxrQkFBa0I7RUFDbEIsU0FBc0I7RUFDdEIsUUFBUztFQUNULGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsbUJDZm9CO0VEZ0JwQixTQUFTO0VBQ1QsVUFBVTtFQUNWLGVBQWU7RUFDZixZQUF3QjtFQUN4QixlQUFlO0VBQ2YsYUFBYTtFQUNiLG1CQUFtQixFQUFBOztBQXZCdkI7SUEwQk0sZ0JDdEJXO0lEdUJYLFlDM0JPO0lENEJQLFNBQVM7SUFDVCxVQUFVO0lBQ1YsZUFBZTtJQUNmLGlCQUFpQixFQUFBIiwiZmlsZSI6InNyYy9tb2R1bGVzL21hcC12aWV3L21vZHVsZS9tYXAtdmlldy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ3NyYy9hc3NldHMvc3R5bGVzL3ZhcmlhYmxlcy5zY3NzJztcblxuOmhvc3Qge1xuICAubWFwLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxuXG4gIC5idG4ge1xuICAgIGhlaWdodDogJHNjcmVlbi1hdG9tICogNDtcbiAgICBwYWRkaW5nOiAkc2NyZWVuLWF0b20gJHNjcmVlbi1hdG9tKjI7XG4gICAgY29sb3I6ICR3aGl0ZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgdG9wOiAgJHNjcmVlbi1hdG9tICogMztcbiAgICByaWdodDogIDA7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHotaW5kZXg6IDk5OTk7XG4gICAgYmFja2dyb3VuZDogJG9yYW5nZTtcbiAgICBib3JkZXI6IDA7XG4gICAgb3V0bGluZTogMDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgd2lkdGg6ICRzY3JlZW4tYXRvbSAqIDMyO1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAubWRpIHtcbiAgICAgIG1hcmdpbi1sZWZ0OiAkc2NyZWVuLWF0b207XG4gICAgICBjb2xvcjogJHdoaXRlO1xuICAgICAgbWFyZ2luOiAwO1xuICAgICAgcGFkZGluZzogMDtcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICAgIH1cbiAgfVxufSIsIiRncmVlbjogcmdiKDg5LDIxNSwxMzIpO1xuJGJsYWNrOiByZ2IoMzYsMzYsMzYpO1xuJHdoaXRlOiB3aGl0ZTtcbiRvcmFuZ2U6IHJnYigyNDUsMTY2LDM1KTtcbiRncmV5OiByZ2IoMjI2LCAyMjYsIDIyNik7XG4kcmVkOiByZ2IoMjA2LCA4OCwgNjYpO1xuJHNjcmVlbi1hdG9tOiA4cHg7XG4iXX0= */"

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
        this.isListVisible = false;
        this.isCardVisible = false;
        this.loading = false;
        this.selectedPoint = null;
        this.selectedGroup = null;
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
            _this.selectedPoint = data.markerData;
            _this.showCard();
        });
    };
    MapViewComponent.prototype.onGroupSelect = function (group) {
        var _this = this;
        this.hideCard();
        this.selectedGroup = group;
        this.mapViewService.getPoints(group.id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.unsubscribe))
            .subscribe(function (data) {
            _this.points = data.points;
            _this.mapViewService.addPointsToMap(_this.points);
        });
    };
    MapViewComponent.prototype.onBtnClick = function () {
        this.isListVisible = !this.isListVisible;
        this.cdr.detectChanges();
    };
    MapViewComponent.prototype.showCard = function () {
        this.isCardVisible = true;
        this.cdr.detectChanges();
    };
    MapViewComponent.prototype.hideCard = function () {
        this.isCardVisible = false;
        console.log(this.isCardVisible);
        this.cdr.detectChanges();
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
/* harmony import */ var _item_card_item_card_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./item-card/item-card.component */ "./src/modules/map-view/module/item-card/item-card.component.ts");








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
                _groups_list_groups_list_component__WEBPACK_IMPORTED_MODULE_6__["GroupsListComponent"],
                _item_card_item_card_component__WEBPACK_IMPORTED_MODULE_7__["ItemCardComponent"]
            ],
            declarations: [
                _map_view_component__WEBPACK_IMPORTED_MODULE_3__["MapViewComponent"],
                _groups_list_groups_list_component__WEBPACK_IMPORTED_MODULE_6__["GroupsListComponent"],
                _item_card_item_card_component__WEBPACK_IMPORTED_MODULE_7__["ItemCardComponent"]
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
            lat: 54.717479,
            lng: 20.510639,
            zoom: 12
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