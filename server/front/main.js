(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu/menu.component */ "./src/app/menu/menu.component.ts");
/* harmony import */ var _goods_goods_list_goods_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./goods/goods-list/goods-list.component */ "./src/app/goods/goods-list/goods-list.component.ts");
/* harmony import */ var _goods_goods_details_goods_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./goods/goods-details/goods-details.component */ "./src/app/goods/goods-details/goods-details.component.ts");
/* harmony import */ var _goods_goods_update_goods_update_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./goods/goods-update/goods-update.component */ "./src/app/goods/goods-update/goods-update.component.ts");
/* harmony import */ var _goods_goods_create_goods_create_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./goods/goods-create/goods-create.component */ "./src/app/goods/goods-create/goods-create.component.ts");









const routes = [
    { path: 'goods', component: _menu_menu_component__WEBPACK_IMPORTED_MODULE_2__["MenuComponent"] },
    { path: 'goods/create', component: _goods_goods_create_goods_create_component__WEBPACK_IMPORTED_MODULE_6__["GoodsCreateComponent"] },
    { path: 'goods/update', component: _goods_goods_update_goods_update_component__WEBPACK_IMPORTED_MODULE_5__["GoodsUpdateComponent"] },
    { path: 'goods/details', component: _goods_goods_details_goods_details_component__WEBPACK_IMPORTED_MODULE_4__["GoodsDetailsComponent"] },
    { path: 'goods/list', component: _goods_goods_list_goods_list_component__WEBPACK_IMPORTED_MODULE_3__["GoodsListComponent"] },
    { path: '', redirectTo: '/goods', pathMatch: 'prefix' },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, providers: [], imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
                providers: []
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class AppComponent {
    constructor() {
        this.title = 'client';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _goods_goods_list_goods_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./goods/goods-list/goods-list.component */ "./src/app/goods/goods-list/goods-list.component.ts");
/* harmony import */ var _goods_goods_details_goods_details_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./goods/goods-details/goods-details.component */ "./src/app/goods/goods-details/goods-details.component.ts");
/* harmony import */ var _goods_goods_update_goods_update_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./goods/goods-update/goods-update.component */ "./src/app/goods/goods-update/goods-update.component.ts");
/* harmony import */ var _goods_goods_create_goods_create_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./goods/goods-create/goods-create.component */ "./src/app/goods/goods-create/goods-create.component.ts");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./menu/menu.component */ "./src/app/menu/menu.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");













class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_11__["FlexLayoutModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _goods_goods_list_goods_list_component__WEBPACK_IMPORTED_MODULE_5__["GoodsListComponent"],
        _goods_goods_details_goods_details_component__WEBPACK_IMPORTED_MODULE_6__["GoodsDetailsComponent"],
        _goods_goods_update_goods_update_component__WEBPACK_IMPORTED_MODULE_7__["GoodsUpdateComponent"],
        _goods_goods_create_goods_create_component__WEBPACK_IMPORTED_MODULE_8__["GoodsCreateComponent"],
        _menu_menu_component__WEBPACK_IMPORTED_MODULE_9__["MenuComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_11__["FlexLayoutModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _goods_goods_list_goods_list_component__WEBPACK_IMPORTED_MODULE_5__["GoodsListComponent"],
                    _goods_goods_details_goods_details_component__WEBPACK_IMPORTED_MODULE_6__["GoodsDetailsComponent"],
                    _goods_goods_update_goods_update_component__WEBPACK_IMPORTED_MODULE_7__["GoodsUpdateComponent"],
                    _goods_goods_create_goods_create_component__WEBPACK_IMPORTED_MODULE_8__["GoodsCreateComponent"],
                    _menu_menu_component__WEBPACK_IMPORTED_MODULE_9__["MenuComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
                    _angular_flex_layout__WEBPACK_IMPORTED_MODULE_11__["FlexLayoutModule"],
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/goods/goods-create/goods-create.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/goods/goods-create/goods-create.component.ts ***!
  \**************************************************************/
/*! exports provided: GoodsCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoodsCreateComponent", function() { return GoodsCreateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_models_goods__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/models/goods */ "./src/app/shared/models/goods.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shared_services_goods_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/services/goods.service */ "./src/app/shared/services/goods.service.ts");







class GoodsCreateComponent {
    //goods:Goods;
    constructor(router, goodsService) {
        this.router = router;
        this.goodsService = goodsService;
        this.goodsForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            goods_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            size: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            amount: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            note: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
        });
    }
    ngOnInit() {
        //this.goodsService.get('00000').subscribe((goods: Goods) => {
        //this.goods = goods;
        //}); 
    }
    saveGoods() {
        const { name, goods_id, size, amount, note } = this.goodsForm.getRawValue();
        this.goodsService.set(new _shared_models_goods__WEBPACK_IMPORTED_MODULE_1__["Goods"](name, goods_id, size, amount, note));
        this.router.navigate(['/goods']);
    }
}
GoodsCreateComponent.ɵfac = function GoodsCreateComponent_Factory(t) { return new (t || GoodsCreateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_goods_service__WEBPACK_IMPORTED_MODULE_4__["GoodsService"])); };
GoodsCreateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GoodsCreateComponent, selectors: [["app-goods-create"]], decls: 28, vars: 1, consts: [[1, "container"], [1, "title"], [3, "formGroup"], [1, "create-form"], [1, "create-line"], ["type", "text", "formControlName", "goods_id"], ["type", "text", "formControlName", "name"], ["type", "number", "formControlName", "size"], ["type", "number", "formControlName", "amount"], ["type", "text", "formControlName", "note"], [1, "footer"], [1, "button", "black", 3, "click"]], template: function GoodsCreateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " \u5546\u54C1\u767B\u9332 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u5546\u54C1ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\u540D\u524D");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "\u30B5\u30A4\u30BA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "\u91CF");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "\u30E1\u30E2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GoodsCreateComponent_Template_div_click_26_listener() { return ctx.saveGoods(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "\u767B\u9332");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.goodsForm);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NumberValueAccessor"]], styles: [".container[_ngcontent-%COMP%] {\n  margin: auto;\n  padding: 32px 0;\n  width: 800px;\n}\n.container[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  padding: 8px 0;\n  text-align: center;\n  width: 100%;\n  font-weight: 600;\n  font-size: 18px;\n}\n.container[_ngcontent-%COMP%]   .create-form[_ngcontent-%COMP%] {\n  padding: 16px 48px;\n  border: 1px solid #D9DBDE;\n  border-radius: 4px;\n  background-color: #FFFFFF;\n}\n.container[_ngcontent-%COMP%]   .create-form[_ngcontent-%COMP%]   .create-line[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 16px 0;\n  width: 100%;\n}\n.container[_ngcontent-%COMP%]   .create-form[_ngcontent-%COMP%]   .create-line[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  width: 15%;\n  font-size: 16px;\n  font-weight: 600;\n}\n.container[_ngcontent-%COMP%]   .create-form[_ngcontent-%COMP%]   .create-line[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border: 1px solid #BDBDBD;\n  border-radius: 4px;\n  padding: 0 8px;\n  width: 560px;\n  height: 40px;\n  font-size: 14px;\n}\n.container[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  padding: 24px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ29vZHMvZ29vZHMtY3JlYXRlL2dvb2RzLWNyZWF0ZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQUNKO0FBQUk7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBRU47QUFDSTtFQUNFLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FBQ047QUFDTTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FBQ1I7QUFDUTtFQUNFLFVBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFDVjtBQUVRO0VBQ0UseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUFBVjtBQUtJO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtBQUhOIiwiZmlsZSI6InNyYy9hcHAvZ29vZHMvZ29vZHMtY3JlYXRlL2dvb2RzLWNyZWF0ZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgcGFkZGluZzogMzJweCAwO1xyXG4gICAgd2lkdGg6IDgwMHB4O1xyXG4gICAgLnRpdGxlIHtcclxuICAgICAgcGFkZGluZzogOHB4IDA7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIH1cclxuICBcclxuICAgIC5jcmVhdGUtZm9ybSB7XHJcbiAgICAgIHBhZGRpbmc6IDE2cHggNDhweDtcclxuICAgICAgYm9yZGVyOiAxcHggc29saWQgI0Q5REJERTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xyXG4gIFxyXG4gICAgICAuY3JlYXRlLWxpbmUge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBwYWRkaW5nOiAxNnB4IDA7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgXHJcbiAgICAgICAgbGFiZWwge1xyXG4gICAgICAgICAgd2lkdGg6IDE1JTtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgfVxyXG4gIFxyXG4gICAgICAgIGlucHV0IHtcclxuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNCREJEQkQ7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgICBwYWRkaW5nOiAwIDhweDtcclxuICAgICAgICAgIHdpZHRoOiA1NjBweDtcclxuICAgICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICBcclxuICAgIC5mb290ZXIge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgcGFkZGluZzogMjRweCAwO1xyXG4gICAgfVxyXG4gIH0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GoodsCreateComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-goods-create',
                templateUrl: './goods-create.component.html',
                styleUrls: ['./goods-create.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _shared_services_goods_service__WEBPACK_IMPORTED_MODULE_4__["GoodsService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/goods/goods-details/goods-details.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/goods/goods-details/goods-details.component.ts ***!
  \****************************************************************/
/*! exports provided: GoodsDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoodsDetailsComponent", function() { return GoodsDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_services_goods_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/services/goods.service */ "./src/app/shared/services/goods.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class GoodsDetailsComponent {
    constructor(goodsService, router) {
        this.goodsService = goodsService;
        this.router = router;
    }
    ngOnInit() {
        //this.goodsService.getgoods().subscribe((goods: Goods) => {
        //this.goods = goods;
        //});
    }
    saveGoods(id) {
        //this.goodsService.keep(id);
        this.router.navigate(['/goods/update']);
    }
}
GoodsDetailsComponent.ɵfac = function GoodsDetailsComponent_Factory(t) { return new (t || GoodsDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_goods_service__WEBPACK_IMPORTED_MODULE_1__["GoodsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
GoodsDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GoodsDetailsComponent, selectors: [["app-goods-details"]], decls: 34, vars: 5, consts: [[1, "container"], [1, "title"], [1, "product-detail-container"], [1, "param-line"], [1, "label"], [1, "value"], [1, "footer"], ["routerLink", "/goods/list", 1, "button", "black"], [1, "button", "black", 3, "click"]], template: function GoodsDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u5546\u54C1\u8A73\u7D30");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\u540D\u524D");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "\u30B5\u30A4\u30BA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "\u91CF");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "\u30E1\u30E2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "\u623B\u308B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GoodsDetailsComponent_Template_div_click_32_listener() { return ctx.saveGoods(ctx.goods.goods_id); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "\u66F4\u65B0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.goods.goods_id);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.goods.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.goods.size);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.goods.amount);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.goods.note);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]], styles: [".container[_ngcontent-%COMP%] {\n  margin: auto;\n  padding: 32px 0;\n  width: 800px;\n}\n.container[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  padding: 8px 0;\n  text-align: center;\n  width: 100%;\n  font-weight: 600;\n  font-size: 18px;\n}\n.container[_ngcontent-%COMP%]   .product-detail-container[_ngcontent-%COMP%] {\n  padding-left: 48px;\n  border: 1px solid #D9DBDE;\n  border-radius: 4px;\n  background-color: #FFFFFF;\n}\n.container[_ngcontent-%COMP%]   .product-detail-container[_ngcontent-%COMP%]   .param-line[_ngcontent-%COMP%] {\n  display: flex;\n  padding: 16px 8px;\n}\n.container[_ngcontent-%COMP%]   .product-detail-container[_ngcontent-%COMP%]   .param-line[_ngcontent-%COMP%]:nth-child(n+2) {\n  border-top: 1px solid #D9DBDE;\n}\n.container[_ngcontent-%COMP%]   .product-detail-container[_ngcontent-%COMP%]   .param-line[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  width: 100px;\n}\n.container[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: ce;\n  margin-top: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ29vZHMvZ29vZHMtZGV0YWlscy9nb29kcy1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FBQ0o7QUFBSTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFFTjtBQUNJO0VBQ0Usa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7QUFDTjtBQUNNO0VBQ0UsYUFBQTtFQUNBLGlCQUFBO0FBQ1I7QUFDUTtFQUNFLDZCQUFBO0FBQ1Y7QUFFUTtFQUNFLFlBQUE7QUFBVjtBQUtJO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFITiIsImZpbGUiOiJzcmMvYXBwL2dvb2RzL2dvb2RzLWRldGFpbHMvZ29vZHMtZGV0YWlscy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgcGFkZGluZzogMzJweCAwO1xyXG4gICAgd2lkdGg6IDgwMHB4O1xyXG4gICAgLnRpdGxlIHtcclxuICAgICAgcGFkZGluZzogOHB4IDA7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIH1cclxuICBcclxuICAgIC5wcm9kdWN0LWRldGFpbC1jb250YWluZXIge1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDQ4cHg7XHJcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNEOURCREU7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcclxuICBcclxuICAgICAgLnBhcmFtLWxpbmUge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgcGFkZGluZzogMTZweCA4cHg7XHJcbiAgXHJcbiAgICAgICAgJjpudGgtY2hpbGQobisyKSB7XHJcbiAgICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgI0Q5REJERTtcclxuICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgLmxhYmVsIHtcclxuICAgICAgICAgIHdpZHRoOiAxMDBweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICBcclxuICAgIC5mb290ZXIge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlO1xyXG4gICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgfVxyXG4gIH0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GoodsDetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-goods-details',
                templateUrl: './goods-details.component.html',
                styleUrls: ['./goods-details.component.scss']
            }]
    }], function () { return [{ type: _shared_services_goods_service__WEBPACK_IMPORTED_MODULE_1__["GoodsService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/goods/goods-list/goods-list.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/goods/goods-list/goods-list.component.ts ***!
  \**********************************************************/
/*! exports provided: GoodsListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoodsListComponent", function() { return GoodsListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_models_goods__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/models/goods */ "./src/app/shared/models/goods.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shared_services_goods_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/goods.service */ "./src/app/shared/services/goods.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






function GoodsListComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u5546\u54C1\u3092\u53D6\u5F97\u3057\u3066\u3044\u307E\u3059... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function GoodsListComponent_ng_template_5_div_12_span_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const goods_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](goods_r4.note);
} }
function GoodsListComponent_ng_template_5_div_12_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GoodsListComponent_ng_template_5_div_12_ng_template_11_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const goods_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r9.saveGoods(goods_r4.goods_id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u8A73\u7D30");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function GoodsListComponent_ng_template_5_div_12_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function GoodsListComponent_ng_template_5_div_12_Template_div_mouseenter_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const goods_r4 = ctx.$implicit; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r12.hovered(goods_r4); })("mouseleave", function GoodsListComponent_ng_template_5_div_12_Template_div_mouseleave_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const goods_r4 = ctx.$implicit; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r14.unhovered(goods_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, GoodsListComponent_ng_template_5_div_12_span_10_Template, 2, 1, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, GoodsListComponent_ng_template_5_div_12_ng_template_11_Template, 2, 0, "ng-template", null, 16, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const goods_r4 = ctx.$implicit;
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", goods_r4.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](goods_r4.goods_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](goods_r4.size);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", goods_r4.amount, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !goods_r4.hovered)("ngIfElse", _r6);
} }
function GoodsListComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u540D\u524D");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u30B5\u30A4\u30BA");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u91CF");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\u30E1\u30E2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, GoodsListComponent_ng_template_5_div_12_Template, 13, 6, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.goodsListElement);
} }
class GoodsListElement extends _shared_models_goods__WEBPACK_IMPORTED_MODULE_1__["Goods"] {
}
class GoodsListComponent {
    //goodsList:Goods[] = null;
    constructor(router, goodsService) {
        this.router = router;
        this.goodsService = goodsService;
        this.goodsListElement = null;
    }
    ngOnInit() {
        this.goodsService.list()
            .subscribe((goodsList) => {
            this.goodsListElement = goodsList.map((goods) => {
                return Object.assign(Object.assign({}, goods), { hovered: false });
            });
            //this.goodsList = goodsList;
        });
        /*       this.goodsListElement = this.goodsList.map((goods:Goods) => {
                return {
                  ... goods,
                  hovered: false,
                };
              });  */
    }
    hovered(goods) { goods.hovered = true; }
    unhovered(goods) { goods.hovered = false; }
    saveGoods(id) {
        //this.goodsService.keep(id);
        this.router.navigate(['/goods/details']);
    }
}
GoodsListComponent.ɵfac = function GoodsListComponent_Factory(t) { return new (t || GoodsListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_goods_service__WEBPACK_IMPORTED_MODULE_3__["GoodsService"])); };
GoodsListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GoodsListComponent, selectors: [["app-goods-list"]], decls: 9, vars: 2, consts: [[1, "container"], [1, "title"], [1, "goods-list-container"], ["class", "waiting-for-goods", 4, "ngIf", "ngIfElse"], ["goodslist", ""], [1, "waiting-for-goods"], [1, "goods-list-table"], [1, "goods-line", "header"], [1, "goods-name"], [1, "goods-goods_id"], [1, "goods-size"], [1, "goods-amount"], [1, "goods-note"], ["class", "goods-line", 3, "mouseenter", "mouseleave", 4, "ngFor", "ngForOf"], [1, "goods-line", 3, "mouseenter", "mouseleave"], [4, "ngIf", "ngIfElse"], ["Unhovered", ""], [1, "button", "white", 3, "click"]], template: function GoodsListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u5546\u54C1\u4E00\u89A7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, GoodsListComponent_div_4_Template, 2, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, GoodsListComponent_ng_template_5_Template, 13, 1, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "aaaaaaaaaaaa");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.goodsListElement === null)("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], styles: [".container[_ngcontent-%COMP%] {\n  margin: auto;\n  padding: 32px 0;\n  width: 800px;\n}\n.container[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  padding: 8px 0;\n  text-align: center;\n  width: 100%;\n  font-weight: 600;\n  font-size: 18px;\n}\n.container[_ngcontent-%COMP%]   .goods-list-container[_ngcontent-%COMP%]   .goods-list-table[_ngcontent-%COMP%] {\n  border: 1px solid #D9DBDE;\n  border-radius: 4px;\n  overflow: hidden;\n}\n.container[_ngcontent-%COMP%]   .goods-list-container[_ngcontent-%COMP%]   .goods-list-table[_ngcontent-%COMP%]   .goods-line[_ngcontent-%COMP%] {\n  display: flex;\n  padding: 16px 24px;\n}\n.container[_ngcontent-%COMP%]   .goods-list-container[_ngcontent-%COMP%]   .goods-list-table[_ngcontent-%COMP%]   .goods-line.header[_ngcontent-%COMP%] {\n  background-color: #F5F5F5;\n}\n.container[_ngcontent-%COMP%]   .goods-list-container[_ngcontent-%COMP%]   .goods-list-table[_ngcontent-%COMP%]   .goods-line[_ngcontent-%COMP%]:nth-child(n+2) {\n  border-top: 1px solid #D9DBDE;\n}\n.container[_ngcontent-%COMP%]   .goods-list-container[_ngcontent-%COMP%]   .goods-list-table[_ngcontent-%COMP%]   .goods-line[_ngcontent-%COMP%]   .goods-name[_ngcontent-%COMP%] {\n  width: 150px;\n}\n.container[_ngcontent-%COMP%]   .goods-list-container[_ngcontent-%COMP%]   .goods-list-table[_ngcontent-%COMP%]   .goods-line[_ngcontent-%COMP%]   .goods-goods_id[_ngcontent-%COMP%] {\n  width: 130px;\n}\n.container[_ngcontent-%COMP%]   .goods-list-container[_ngcontent-%COMP%]   .goods-list-table[_ngcontent-%COMP%]   .goods-line[_ngcontent-%COMP%]   .goods-size[_ngcontent-%COMP%] {\n  width: 100px;\n}\n.container[_ngcontent-%COMP%]   .goods-list-container[_ngcontent-%COMP%]   .goods-list-table[_ngcontent-%COMP%]   .goods-line[_ngcontent-%COMP%]   .goods-amount[_ngcontent-%COMP%] {\n  width: 100px;\n}\n.container[_ngcontent-%COMP%]   .goods-list-container[_ngcontent-%COMP%]   .goods-list-table[_ngcontent-%COMP%]   .goods-line[_ngcontent-%COMP%]   .goods-note[_ngcontent-%COMP%] {\n  width: 160px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ29vZHMvZ29vZHMtbGlzdC9nb29kcy1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FBQ0o7QUFBSTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFFTjtBQUVNO0VBQ0UseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBQVI7QUFFUTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtBQUFWO0FBRVU7RUFDRSx5QkFBQTtBQUFaO0FBR1U7RUFDRSw2QkFBQTtBQURaO0FBSVU7RUFDRSxZQUFBO0FBRlo7QUFJVTtFQUNFLFlBQUE7QUFGWjtBQUlVO0VBQ0UsWUFBQTtBQUZaO0FBSVU7RUFDRSxZQUFBO0FBRlo7QUFJVTtFQUNFLFlBQUE7QUFGWiIsImZpbGUiOiJzcmMvYXBwL2dvb2RzL2dvb2RzLWxpc3QvZ29vZHMtbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgcGFkZGluZzogMzJweCAwO1xyXG4gICAgd2lkdGg6IDgwMHB4O1xyXG4gICAgLnRpdGxlIHtcclxuICAgICAgcGFkZGluZzogOHB4IDA7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIH1cclxuICBcclxuICAgIC5nb29kcy1saXN0LWNvbnRhaW5lciB7XHJcbiAgICAgIC5nb29kcy1saXN0LXRhYmxlIHtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjRDlEQkRFO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIFxyXG4gICAgICAgIC5nb29kcy1saW5lIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBwYWRkaW5nOiAxNnB4IDI0cHg7XHJcbiAgXHJcbiAgICAgICAgICAmLmhlYWRlciB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGNUY1RjU7XHJcbiAgICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgICAmOm50aC1jaGlsZChuKzIpIHtcclxuICAgICAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNEOURCREU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAuZ29vZHMtbmFtZSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxNTBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5nb29kcy1nb29kc19pZCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMzBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5nb29kcy1zaXplIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMHB4OyBcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5nb29kcy1hbW91bnQge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwcHg7IFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmdvb2RzLW5vdGUge1xyXG4gICAgICAgICAgICB3aWR0aDogMTYwcHg7IFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GoodsListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-goods-list',
                templateUrl: './goods-list.component.html',
                styleUrls: ['./goods-list.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _shared_services_goods_service__WEBPACK_IMPORTED_MODULE_3__["GoodsService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/goods/goods-update/goods-update.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/goods/goods-update/goods-update.component.ts ***!
  \**************************************************************/
/*! exports provided: GoodsUpdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoodsUpdateComponent", function() { return GoodsUpdateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shared_services_goods_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/goods.service */ "./src/app/shared/services/goods.service.ts");






class GoodsUpdateComponent {
    //goods:Goods;
    constructor(router, goodsService) {
        this.router = router;
        this.goodsService = goodsService;
        this.goodsForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            goods_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            size: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            amount: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            note: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
        });
    }
    ngOnInit() {
        //this.goodsService.getgoods().subscribe((goods: Goods) => {
        //this.goodsForm.setValue({ // <= 変更
        //name: goods.name,
        //goods_id: goods.goods_id,
        //size: goods.size,
        //amount:goods.amount,
        //note: goods.note
        //});
        //}); 
    }
    saveGoods() {
        const { name, goods_id, size, amount, note } = this.goodsForm.getRawValue(); // <= 追加
        //this.goodsService.update(new Goods(name, goods_id,size,amount,note)); 
        this.router.navigate(['/goods']);
    }
}
GoodsUpdateComponent.ɵfac = function GoodsUpdateComponent_Factory(t) { return new (t || GoodsUpdateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_goods_service__WEBPACK_IMPORTED_MODULE_3__["GoodsService"])); };
GoodsUpdateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GoodsUpdateComponent, selectors: [["app-goods-update"]], decls: 31, vars: 2, consts: [[1, "container"], [1, "title"], [3, "formGroup"], [1, "update-form"], [1, "update-line"], ["type", "text", "formControlName", "name"], ["type", "number", "formControlName", "size"], ["type", "number", "formControlName", "amount"], ["type", "text", "formControlName", "note"], [1, "footer"], [1, "button", "black", 3, "click"], ["routerLink", "/goods/details", 1, "button", "white"]], template: function GoodsUpdateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " \u5546\u54C1\u7DE8\u96C6 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u5546\u54C1ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\u540D\u524D");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "\u30B5\u30A4\u30BA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "\u91CF");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "\u30E1\u30E2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GoodsUpdateComponent_Template_div_click_27_listener() { return ctx.saveGoods(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "\u66F4\u65B0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "\u623B\u308B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.goodsForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.goodsForm.controls.goods_id.value);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]], styles: [".container[_ngcontent-%COMP%] {\n  margin: auto;\n  padding: 32px 0;\n  width: 800px;\n}\n.container[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  padding: 8px 0;\n  text-align: center;\n  width: 100%;\n  font-weight: 600;\n  font-size: 18px;\n}\n.container[_ngcontent-%COMP%]   .update-form[_ngcontent-%COMP%] {\n  padding: 16px 48px;\n  border: 1px solid #D9DBDE;\n  border-radius: 4px;\n  background-color: #FFFFFF;\n}\n.container[_ngcontent-%COMP%]   .update-form[_ngcontent-%COMP%]   .update-line[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 16px 0;\n  width: 100%;\n}\n.container[_ngcontent-%COMP%]   .update-form[_ngcontent-%COMP%]   .update-line[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  width: 15%;\n  font-size: 16px;\n  font-weight: 600;\n}\n.container[_ngcontent-%COMP%]   .update-form[_ngcontent-%COMP%]   .update-line[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border: 1px solid #BDBDBD;\n  border-radius: 4px;\n  padding: 0 8px;\n  width: 560px;\n  height: 40px;\n  font-size: 14px;\n}\n.container[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  padding: 24px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ29vZHMvZ29vZHMtdXBkYXRlL2dvb2RzLXVwZGF0ZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQUNKO0FBQUk7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBRU47QUFDSTtFQUNFLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FBQ047QUFDTTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FBQ1I7QUFDUTtFQUNFLFVBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFDVjtBQUVRO0VBQ0UseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUFBVjtBQUtJO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtBQUhOIiwiZmlsZSI6InNyYy9hcHAvZ29vZHMvZ29vZHMtdXBkYXRlL2dvb2RzLXVwZGF0ZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgcGFkZGluZzogMzJweCAwO1xyXG4gICAgd2lkdGg6IDgwMHB4O1xyXG4gICAgLnRpdGxlIHtcclxuICAgICAgcGFkZGluZzogOHB4IDA7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIH1cclxuICBcclxuICAgIC51cGRhdGUtZm9ybSB7XHJcbiAgICAgIHBhZGRpbmc6IDE2cHggNDhweDtcclxuICAgICAgYm9yZGVyOiAxcHggc29saWQgI0Q5REJERTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xyXG4gIFxyXG4gICAgICAudXBkYXRlLWxpbmUge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBwYWRkaW5nOiAxNnB4IDA7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgXHJcbiAgICAgICAgbGFiZWwge1xyXG4gICAgICAgICAgd2lkdGg6IDE1JTtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgfVxyXG4gIFxyXG4gICAgICAgIGlucHV0IHtcclxuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNCREJEQkQ7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgICBwYWRkaW5nOiAwIDhweDtcclxuICAgICAgICAgIHdpZHRoOiA1NjBweDtcclxuICAgICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICBcclxuICAgIC5mb290ZXIge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgcGFkZGluZzogMjRweCAwO1xyXG4gICAgfVxyXG4gIH0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GoodsUpdateComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-goods-update',
                templateUrl: './goods-update.component.html',
                styleUrls: ['./goods-update.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _shared_services_goods_service__WEBPACK_IMPORTED_MODULE_3__["GoodsService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/menu/menu.component.ts":
/*!****************************************!*\
  !*** ./src/app/menu/menu.component.ts ***!
  \****************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_models_goods__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/models/goods */ "./src/app/shared/models/goods.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shared_services_goods_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/services/goods.service */ "./src/app/shared/services/goods.service.ts");





class GoodsListElement extends _shared_models_goods__WEBPACK_IMPORTED_MODULE_1__["Goods"] {
}
class MenuComponent {
    constructor(router, goodsService) {
        this.router = router;
        this.goodsService = goodsService;
        this.goodsListElement = null;
        this.goodslist = null;
    }
    ngOnInit() {
    }
    saveGoods() {
        /* this.goodsService.list()
           .subscribe(res => {
             this.goodslist = res;
           });
   
         this.goodsListElement = this.goodslist.map((goods:Goods) => {
           return {
             ... goods,
             hovered: false,
           };
         }); */
        //this.goodsService.keep(id); 
        this.router.navigate(['/goods/list']);
    }
}
MenuComponent.ɵfac = function MenuComponent_Factory(t) { return new (t || MenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_goods_service__WEBPACK_IMPORTED_MODULE_3__["GoodsService"])); };
MenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MenuComponent, selectors: [["app-menu"]], decls: 7, vars: 0, consts: [[1, "menu"], ["routerLink", "/goods/create", 1, "button"], [1, "button", 3, "click"]], template: function MenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "menu works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " \u767B\u9332 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuComponent_Template_div_click_5_listener() { return ctx.saveGoods(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " \u691C\u7D22 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lbnUvbWVudS5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-menu',
                templateUrl: './menu.component.html',
                styleUrls: ['./menu.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _shared_services_goods_service__WEBPACK_IMPORTED_MODULE_3__["GoodsService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/models/goods.ts":
/*!****************************************!*\
  !*** ./src/app/shared/models/goods.ts ***!
  \****************************************/
/*! exports provided: Goods */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Goods", function() { return Goods; });
class Goods {
    constructor(name, goods_id, size, amount, note) {
        this.name = name;
        this.goods_id = goods_id;
        this.size = size;
        this.amount = amount;
        this.note = note;
    }
}


/***/ }),

/***/ "./src/app/shared/services/goods.service.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/services/goods.service.ts ***!
  \**************************************************/
/*! exports provided: GoodsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoodsService", function() { return GoodsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _models_goods__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/goods */ "./src/app/shared/models/goods.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");





//import {Http, Response} from '@angular/http';
//import 'rxjs/add/operator/toPromise';
class GoodsService {
    constructor(http) {
        this.http = http;
        this.goodslist = [
            new _models_goods__WEBPACK_IMPORTED_MODULE_1__["Goods"]('Angular入門1', '1', 1, 1, 'Angularが出来た。'),
            new _models_goods__WEBPACK_IMPORTED_MODULE_1__["Goods"]('Angular入門2', '2', 2, 2, 'Angularが出来た。'),
            new _models_goods__WEBPACK_IMPORTED_MODULE_1__["Goods"]('Angular入門3', '3', 3, 3, 'Angularが出来た。'),
        ];
        this.httpOptions = {
        // ヘッダ情報
        /*  headers: new HttpHeaders({
           'Content-Type': 'application/json'
         }), */
        // DELETE 実行時に `body` が必要になるケースがあるのでプロパティとして用意しておく
        // ( ここで用意しなくても追加できるけど... )
        //body: null
        };
        //goodslist :Goods[] ;
        this.url = 'http://localhost:3000'; //要変更
    }
    list() {
        //return this.goodslist; 
        return this.http.post(this.url + '/goods/search', this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((response) => Object.keys(response).map((key) => {
            const gds = response[key];
            return new _models_goods__WEBPACK_IMPORTED_MODULE_1__["Goods"](gds.name, gds.goods_id, gds.size, gds.amount, gds.note);
        })));
    }
    /*private handleError<T> (operation = 'operation', result?: T) {
      return (error: any): Observable<T> => {
        console.error(error);
        console.log(`${operation} failed: ${error.message}`);
        return of(result as T);
      };
    } */
    /*  private errorHandler(err) {
       console.log('Error occured.', err);
       return Promise.reject(err.message || err);
     } */
    /* getgoods():Observable<Goods>{
      for(var i=0;i<this.goodslist.length;i++){
        if(this.goods.goods_id==this.goodslist[i].goods_id){
          return of (this.goodslist[i]);
         }
      }
    }
    get(id:string):Observable<Goods>{
      for(var i=0;i<this.goodslist.length;i++){
        if(id==this.goodslist[i].goods_id){
          return of (this.goodslist[i]);
         }
      }
      this.goodslist.push(this.goods);
      return of (this.goodslist[this.goodslist.length-1]);
    }*/
    set(goods) {
        return this.http.post(this.url + '/goods', this.httpOptions)
            .pipe((response) => {
            const result = response;
            return result;
        });
    }
}
GoodsService.ɵfac = function GoodsService_Factory(t) { return new (t || GoodsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
GoodsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: GoodsService, factory: GoodsService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GoodsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


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
const environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\fbs\sample\open-sample\client\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map