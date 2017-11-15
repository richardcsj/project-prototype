webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: "<router-outlet></router-outlet>",
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_property_service__ = __webpack_require__("../../../../../src/app/services/property.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_review_service__ = __webpack_require__("../../../../../src/app/services/review.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_user_login_login_component__ = __webpack_require__("../../../../../src/app/components/user/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_user_register_register_component__ = __webpack_require__("../../../../../src/app/components/user/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_user_profile_profile_component__ = __webpack_require__("../../../../../src/app/components/user/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_menu_menu_component__ = __webpack_require__("../../../../../src/app/components/menu/menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_menu_customer_menu_customer_menu_component__ = __webpack_require__("../../../../../src/app/components/menu/customer-menu/customer-menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_menu_owner_menu_owner_menu_component__ = __webpack_require__("../../../../../src/app/components/menu/owner-menu/owner-menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_menu_admin_menu_admin_menu_component__ = __webpack_require__("../../../../../src/app/components/menu/admin-menu/admin-menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_admin_user_user_component__ = __webpack_require__("../../../../../src/app/components/admin/user/user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_admin_property_property_component__ = __webpack_require__("../../../../../src/app/components/admin/property/property.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_admin_review_review_component__ = __webpack_require__("../../../../../src/app/components/admin/review/review.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_admin_user_details_details_component__ = __webpack_require__("../../../../../src/app/components/admin/user/details/details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_admin_property_details_details_component__ = __webpack_require__("../../../../../src/app/components/admin/property/details/details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_owner_client_client_component__ = __webpack_require__("../../../../../src/app/components/owner/client/client.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_owner_property_property_component__ = __webpack_require__("../../../../../src/app/components/owner/property/property.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_owner_review_review_component__ = __webpack_require__("../../../../../src/app/components/owner/review/review.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_customer_search_search_component__ = __webpack_require__("../../../../../src/app/components/customer/search/search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__components_customer_list_list_component__ = __webpack_require__("../../../../../src/app/components/customer/list/list.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



























var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_user_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_user_register_register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_12__components_user_profile_profile_component__["a" /* ProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_13__components_menu_menu_component__["a" /* MenuComponent */],
            __WEBPACK_IMPORTED_MODULE_14__components_menu_customer_menu_customer_menu_component__["a" /* CustomerMenuComponent */],
            __WEBPACK_IMPORTED_MODULE_15__components_menu_owner_menu_owner_menu_component__["a" /* OwnerMenuComponent */],
            __WEBPACK_IMPORTED_MODULE_16__components_menu_admin_menu_admin_menu_component__["a" /* AdminMenuComponent */],
            __WEBPACK_IMPORTED_MODULE_17__components_admin_user_user_component__["a" /* UserComponent */],
            __WEBPACK_IMPORTED_MODULE_18__components_admin_property_property_component__["a" /* PropertyComponent */],
            __WEBPACK_IMPORTED_MODULE_19__components_admin_review_review_component__["a" /* ReviewComponent */],
            __WEBPACK_IMPORTED_MODULE_20__components_admin_user_details_details_component__["a" /* UserDetailsComponent */],
            __WEBPACK_IMPORTED_MODULE_21__components_admin_property_details_details_component__["a" /* PropertyDetailsComponent */],
            __WEBPACK_IMPORTED_MODULE_22__components_owner_client_client_component__["a" /* ClientComponent */],
            __WEBPACK_IMPORTED_MODULE_23__components_owner_property_property_component__["a" /* OwnerPropertyComponent */],
            __WEBPACK_IMPORTED_MODULE_24__components_owner_review_review_component__["a" /* OwnerReviewComponent */],
            __WEBPACK_IMPORTED_MODULE_25__components_customer_search_search_component__["a" /* SearchComponent */],
            __WEBPACK_IMPORTED_MODULE_26__components_customer_list_list_component__["a" /* ListComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__app_routing__["a" /* Routing */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_5__services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_6__services_property_service__["a" /* PropertyService */], __WEBPACK_IMPORTED_MODULE_7__services_review_service__["a" /* ReviewService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_user_login_login_component__ = __webpack_require__("../../../../../src/app/components/user/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_user_register_register_component__ = __webpack_require__("../../../../../src/app/components/user/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_user_profile_profile_component__ = __webpack_require__("../../../../../src/app/components/user/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_menu_menu_component__ = __webpack_require__("../../../../../src/app/components/menu/menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_admin_user_user_component__ = __webpack_require__("../../../../../src/app/components/admin/user/user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_admin_property_property_component__ = __webpack_require__("../../../../../src/app/components/admin/property/property.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_admin_review_review_component__ = __webpack_require__("../../../../../src/app/components/admin/review/review.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_admin_user_details_details_component__ = __webpack_require__("../../../../../src/app/components/admin/user/details/details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_admin_property_details_details_component__ = __webpack_require__("../../../../../src/app/components/admin/property/details/details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_owner_client_client_component__ = __webpack_require__("../../../../../src/app/components/owner/client/client.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_owner_property_property_component__ = __webpack_require__("../../../../../src/app/components/owner/property/property.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_owner_review_review_component__ = __webpack_require__("../../../../../src/app/components/owner/review/review.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_customer_search_search_component__ = __webpack_require__("../../../../../src/app/components/customer/search/search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_customer_list_list_component__ = __webpack_require__("../../../../../src/app/components/customer/list/list.component.ts");
















// Import all other components here
var APP_ROUTES = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_3__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_1__components_user_login_login_component__["a" /* LoginComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_2__components_user_register_register_component__["a" /* RegisterComponent */] },
    { path: 'profile/:userId', component: __WEBPACK_IMPORTED_MODULE_4__components_user_profile_profile_component__["a" /* ProfileComponent */] },
    { path: 'profile/:userId/menu', component: __WEBPACK_IMPORTED_MODULE_5__components_menu_menu_component__["a" /* MenuComponent */] },
    { path: 'admin/:adminId/user', component: __WEBPACK_IMPORTED_MODULE_6__components_admin_user_user_component__["a" /* UserComponent */] },
    { path: 'admin/:adminId/property', component: __WEBPACK_IMPORTED_MODULE_7__components_admin_property_property_component__["a" /* PropertyComponent */] },
    { path: 'admin/:adminId/review', component: __WEBPACK_IMPORTED_MODULE_8__components_admin_review_review_component__["a" /* ReviewComponent */] },
    { path: 'admin/:adminId/user/:userId', component: __WEBPACK_IMPORTED_MODULE_9__components_admin_user_details_details_component__["a" /* UserDetailsComponent */] },
    { path: 'admin/:adminId/property/:propertyId', component: __WEBPACK_IMPORTED_MODULE_10__components_admin_property_details_details_component__["a" /* PropertyDetailsComponent */] },
    { path: 'owner/:ownerId/client', component: __WEBPACK_IMPORTED_MODULE_11__components_owner_client_client_component__["a" /* ClientComponent */] },
    { path: 'owner/:ownerId/property', component: __WEBPACK_IMPORTED_MODULE_12__components_owner_property_property_component__["a" /* OwnerPropertyComponent */] },
    { path: 'owner/:ownerId/review', component: __WEBPACK_IMPORTED_MODULE_13__components_owner_review_review_component__["a" /* OwnerReviewComponent */] },
    { path: 'customer/:customerId/search', component: __WEBPACK_IMPORTED_MODULE_14__components_customer_search_search_component__["a" /* SearchComponent */] },
    { path: 'customer/:customerId/list', component: __WEBPACK_IMPORTED_MODULE_15__components_customer_list_list_component__["a" /* ListComponent */] },
    { path: 'customer/:customerId/type/:type', component: __WEBPACK_IMPORTED_MODULE_15__components_customer_list_list_component__["a" /* ListComponent */] }
];
// Export the routes as module providers
var Routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forRoot(APP_ROUTES);
//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ "../../../../../src/app/components/admin/property/details/details.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/admin/property/details/details.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n\r\n\t  <div \r\n\t    class=\"alert alert-info\">\r\n\t    <a (click)=\"back()\" class=\"pull-left\" > <i class=\"glyphicon glyphicon-chevron-left\"></i> </a>\r\n\t    Connected as  <b>{{admin.username}}</b> | role :<b> Admin </b>.<br>\r\n\t  </div>\r\n      <div class=\"panel panel-primary\">\r\n\t  <div class=\"panel-heading\">\r\n\t    <h3 class=\"panel-title\">Property's Info</h3>\r\n\t  </div>\r\n\t  <div class=\"panel-body\" style=\"color:black\">\r\n\t    Type : <b>{{property.type}}</b> <br>\r\n\t    Description : <b>{{property.description}}</b><br>\r\n\t    Size : <b>{{property.size}} m²</b><br>\r\n\t    Price : <b>{{property.price}}$/month</b><br>\r\n\t    Latitude : <b>{{property.latitude}}</b><br>\r\n\t    Longitude : <b>{{property.longitude}}</b><br>\r\n\t    Available : <b>{{property.available}}</b><br>\r\n\t    Owner : <b>{{property.owner.username}}</b><br>\r\n\t    Customer : <b>{{property.customer.username}}</b><br>\r\n\t    Valid : <b>{{property.valid}}</b><br>\r\n\t    Validated By : <b>{{property.validatedBy.username}}</b><br>\r\n\t    <button class=\"btn btn-danger\" (click)=\"deleteProperty(property._id)\" >Delete Property</button>\r\n\t  </div>\r\n\t</div>\r\n\r\n</div> <!-- /container -->\r\n"

/***/ }),

/***/ "../../../../../src/app/components/admin/property/details/details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PropertyDetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_property_service__ = __webpack_require__("../../../../../src/app/services/property.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PropertyDetailsComponent = (function () {
    function PropertyDetailsComponent(userService, propertyService, activatedRoute, router, _location) {
        this.userService = userService;
        this.propertyService = propertyService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this._location = _location;
    }
    PropertyDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.propertyId = params['propertyId'];
            _this.adminId = params['adminId'];
            _this.userService.findUserById(_this.adminId)
                .subscribe(function (admin) {
                _this.admin = admin;
                if (_this.admin.role != 'admin') {
                    _this.router.navigate(['profile', _this.adminId, 'menu']);
                }
            }, function (error) {
                console.log(error);
            });
            _this.propertyService.findPropertyById(_this.propertyId)
                .subscribe(function (property) {
                _this.property = property;
            }, function (error) {
                console.log(error);
            });
        });
    };
    PropertyDetailsComponent.prototype.deleteProperty = function (propertyId) {
        var _this = this;
        this.propertyService.deleteProperty(this.propertyId)
            .subscribe(function (done) {
            _this.router.navigate(['..'], { relativeTo: _this.activatedRoute });
        }, function (error) {
            console.log(error);
        });
    };
    PropertyDetailsComponent.prototype.back = function () {
        this._location.back();
    };
    return PropertyDetailsComponent;
}());
PropertyDetailsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-details',
        template: __webpack_require__("../../../../../src/app/components/admin/property/details/details.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/admin/property/details/details.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_property_service__["a" /* PropertyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_property_service__["a" /* PropertyService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__angular_common__["f" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_common__["f" /* Location */]) === "function" && _e || Object])
], PropertyDetailsComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=details.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/admin/property/property.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/admin/property/property.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n\t  <div \r\n\t    class=\"alert alert-info\">\r\n      <a (click)=\"back()\" class=\"pull-left\" > <i class=\"glyphicon glyphicon-chevron-left\"></i> </a>\r\n\t    Connected as  <b>{{admin.username}}</b> | role :<b> Admin </b>.<br>\r\n\t  </div>\r\n      <div *ngIf=\"errorFlag\"\r\n        class=\"alert alert-danger\">\r\n        {{errorMsg}}\r\n      </div>\r\n      <div *ngIf=\"messageFlag\"\r\n        class=\"alert alert-success\">\r\n        {{message}}\r\n      </div>\r\n      <table class=\"table table-bordered\">\r\n          <tr>\r\n            <th>#</th>\r\n            <th>type</th>\r\n            <th>Owner</th>\r\n            <th>Available</th>\r\n            <th>Customer</th>\r\n            <th>actions</th>\r\n          </tr>\r\n          <tr *ngFor=\"let property of properties\">\r\n            <td>{{property._id}}</td>\r\n            <td>{{property.type}}</td>\r\n            <td><a [routerLink]=\"['../user',property.owner._id]\" >{{property.owner.username}}</a></td>\r\n            <td>{{property.available}}</td>\r\n            <td><a [routerLink]=\"['../user',property.customer._id]\" >{{property.customer.username}}</a></td>\r\n            <td><button (click)=\"details(property._id)\" class=\"btn btn-primary\" ><i class=\"glyphicon glyphicon-info-sign\" ></i></button> | <button (click)=\"activate(property)\" class=\"btn btn-success\" [disabled]=\"property.valid\" ><i class=\"glyphicon glyphicon-ok\" ></i></button>\r\n            | <button (click)=\"deactivate(property)\" class=\"btn btn-danger\" [disabled]=\"!property.valid\"  ><i class=\"glyphicon glyphicon-remove\" ></i></button></td>\r\n          </tr>\r\n      </table>\r\n\r\n</div> <!-- /container -->"

/***/ }),

/***/ "../../../../../src/app/components/admin/property/property.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PropertyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_property_service__ = __webpack_require__("../../../../../src/app/services/property.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PropertyComponent = (function () {
    function PropertyComponent(userService, propertyService, activatedRoute, router, _location) {
        this.userService = userService;
        this.propertyService = propertyService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this._location = _location;
    }
    PropertyComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.adminId = params['adminId'];
            _this.userService.findUserById(_this.adminId)
                .subscribe(function (user) {
                _this.admin = user;
                if (_this.admin.role != 'admin') {
                    _this.router.navigate(['profile', _this.adminId, 'menu']);
                }
            }, function (error) {
                console.log(error);
            });
            _this.propertyService.findAllProperties()
                .subscribe(function (properties) {
                _this.properties = properties;
                _this.userService.findAllUsers()
                    .subscribe(function (users) {
                    _this.users = users;
                    for (var i = 0; i < _this.properties.length; i++) {
                        for (var j = 0; j < _this.users.length; j++) {
                            if (_this.properties[i].owner._id === _this.users[j]._id) {
                                _this.properties[i].owner = _this.users[j];
                            }
                            if (_this.properties[i].customer._id === _this.users[j]._id) {
                                _this.properties[i].customer = _this.users[j];
                            }
                        }
                        _this.propertyService.updateProperty(_this.properties[i]._id, _this.properties[i])
                            .subscribe(function (res) {
                        }, function (error) {
                        });
                    }
                }, function (error) {
                    console.log(error);
                });
            }, function (error) {
                console.log(error);
            });
        });
    };
    PropertyComponent.prototype.details = function (propertyId) {
        this.router.navigate([propertyId], { relativeTo: this.activatedRoute });
    };
    PropertyComponent.prototype.activate = function (property) {
        var _this = this;
        property.valid = true;
        property.validatedBy = this.admin;
        this.propertyService.updateProperty(property._id, property)
            .subscribe(function (res) {
            _this.messageFlag = true;
            _this.message = 'property is validated';
        }, function (error) {
            _this.errorFlag = true;
            _this.errorMsg = 'cannot validate property';
        });
    };
    PropertyComponent.prototype.deactivate = function (property) {
        var _this = this;
        property.valid = false;
        property.validatedBy = {};
        this.propertyService.updateProperty(property._id, property)
            .subscribe(function (res) {
            _this.messageFlag = true;
            _this.message = 'property is deactivated';
        }, function (error) {
            _this.errorFlag = true;
            _this.errorMsg = 'cannot deactivate property';
        });
    };
    PropertyComponent.prototype.back = function () {
        this._location.back();
    };
    return PropertyComponent;
}());
PropertyComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-property',
        template: __webpack_require__("../../../../../src/app/components/admin/property/property.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/admin/property/property.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_property_service__["a" /* PropertyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_property_service__["a" /* PropertyService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__angular_common__["f" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_common__["f" /* Location */]) === "function" && _e || Object])
], PropertyComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=property.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/admin/review/review.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/admin/review/review.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\t  <div \n\t    class=\"alert alert-info\">\n      <a (click)=\"back()\" class=\"pull-left\" > <i class=\"glyphicon glyphicon-chevron-left\"></i> </a>\n\t    Connected as  <b>{{admin.username}}</b> | role :<b> Admin </b>.<br>\n\t  </div>\n      <table class=\"table table-bordered\">\n          <tr>\n            <th>#</th>\n            <th>Rate</th>\n            <th>Text</th>\n            <th>Property</th>\n            <th>Customer</th>\n            <th>actions</th>\n          </tr>\n          <tr *ngFor=\"let review of reviews\">\n            <td>{{review._id}}</td>\n            <td>{{review.rate}} stars</td>\n            <td>{{review.text}}</td>\n            <td><a [routerLink]=\"['../property',review.property]\" >{{review.property}}</a></td>\n            <td><a [routerLink]=\"['../user',review.customer]\" >{{review.customer}}</a></td>\n            <td> <button (click)=\"remove(review._id)\" class=\"btn btn-danger\" ><i class=\"glyphicon glyphicon-remove\" ></i></button></td>\n          </tr>\n      </table>\n\n</div> <!-- /container -->"

/***/ }),

/***/ "../../../../../src/app/components/admin/review/review.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReviewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_review_service__ = __webpack_require__("../../../../../src/app/services/review.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ReviewComponent = (function () {
    function ReviewComponent(userService, reviewService, activatedRoute, router, _location) {
        this.userService = userService;
        this.reviewService = reviewService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this._location = _location;
    }
    ReviewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.adminId = params['adminId'];
            _this.userService.findUserById(_this.adminId)
                .subscribe(function (user) {
                _this.admin = user;
                if (_this.admin.role != 'admin') {
                    _this.router.navigate(['profile', _this.adminId, 'menu']);
                }
            }, function (error) {
                console.log(error);
            });
            _this.reviewService.findAllReviews()
                .subscribe(function (reviews) {
                _this.reviews = reviews;
            }, function (error) {
                console.log(error);
            });
        });
    };
    ReviewComponent.prototype.remove = function (reviewId) {
        var _this = this;
        this.reviewService.deleteReview(reviewId)
            .subscribe(function (done) {
            _this.router.navigate(['.'], { relativeTo: _this.activatedRoute });
        }, function (error) {
            console.log(error);
        });
    };
    ReviewComponent.prototype.back = function () {
        this._location.back();
    };
    return ReviewComponent;
}());
ReviewComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-review',
        template: __webpack_require__("../../../../../src/app/components/admin/review/review.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/admin/review/review.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_review_service__["a" /* ReviewService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_review_service__["a" /* ReviewService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__angular_common__["f" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_common__["f" /* Location */]) === "function" && _e || Object])
], ReviewComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=review.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/admin/user/details/details.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/admin/user/details/details.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n\t  <div \n\t    class=\"alert alert-info\">\n\t    <a (click)=\"back()\" class=\"pull-left\" > <i class=\"glyphicon glyphicon-chevron-left\"></i> </a>\n\t    Connected as  <b>{{admin.username}}</b> | role :<b> Admin </b>.<br>\n\t  </div>\n      <div class=\"panel panel-primary\">\n\t  <div class=\"panel-heading\">\n\t    <h3 class=\"panel-title\">User's Info</h3>\n\t  </div>\n\t  <div class=\"panel-body\" style=\"color:black\">\n\t    Username : <b>{{user.username}}</b> <br>\n\t    Password : <b>{{user.password}}</b><br>\n\t    Role : <b>{{user.role}}</b><br>\n\t    First name : <b>{{user.firstName}}</b><br>\n\t    Last name : <b>{{user.lastName}}</b><br>\n\t    Email : <b>{{user.email}}</b><br>\n\t    Phone : <b>{{user.phone}}</b><br>\n\t    Date of birth : <b>{{user.dob}}</b><br>\n\t    Verified : <b>{{user.valid}}</b><br>\n\t    Validated By : <b>{{user.validatedBy.username}}</b><br>\n\t    <button class=\"btn btn-danger\" (click)=\"deleteUser(user._id)\" >Delete user</button>\n\t  </div>\n\t</div>\n\n</div> <!-- /container -->"

/***/ }),

/***/ "../../../../../src/app/components/admin/user/details/details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserDetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserDetailsComponent = (function () {
    function UserDetailsComponent(userService, activatedRoute, router, _location) {
        this.userService = userService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this._location = _location;
    }
    UserDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.userId = params['userId'];
            _this.adminId = params['adminId'];
            _this.userService.findUserById(_this.adminId)
                .subscribe(function (admin) {
                _this.admin = admin;
                if (_this.admin.role != 'admin') {
                    _this.router.navigate(['profile', _this.adminId, 'menu']);
                }
            }, function (error) {
                console.log(error);
            });
            _this.userService.findUserById(_this.userId)
                .subscribe(function (user) {
                _this.user = user;
            }, function (error) {
                console.log(error);
            });
        });
    };
    UserDetailsComponent.prototype.deleteUser = function (userId) {
        var _this = this;
        this.userService.deleteUser(this.userId)
            .subscribe(function (done) {
            _this.router.navigate(['..'], { relativeTo: _this.activatedRoute });
        }, function (error) {
            console.log(error);
        });
    };
    UserDetailsComponent.prototype.back = function () {
        this._location.back();
    };
    return UserDetailsComponent;
}());
UserDetailsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-details',
        template: __webpack_require__("../../../../../src/app/components/admin/user/details/details.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/admin/user/details/details.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_common__["f" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_common__["f" /* Location */]) === "function" && _d || Object])
], UserDetailsComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=details.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/admin/user/user.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/admin/user/user.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n\t  <div \r\n\t    class=\"alert alert-info\">\r\n      <a (click)=\"back()\" class=\"pull-left\" > <i class=\"glyphicon glyphicon-chevron-left\"></i> </a>\r\n\t    Connected as  <b>{{admin.username}}</b> | role :<b> Admin </b>.<br>\r\n\t  </div>\r\n      <div *ngIf=\"errorFlag\"\r\n        class=\"alert alert-danger\">\r\n        {{errorMsg}}\r\n      </div>\r\n      <div *ngIf=\"messageFlag\"\r\n        class=\"alert alert-success\">\r\n        {{message}}\r\n      </div>\r\n      <table class=\"table table-bordered\">\r\n          <tr>\r\n            <th>#</th>\r\n            <th>first name</th>\r\n            <th>last name</th>\r\n            <th>registered as</th>\r\n            <th>actions</th>\r\n          </tr>\r\n          <tr *ngFor=\"let user of users\">\r\n            <td>{{user._id}}</td>\r\n            <td>{{user.firstName}}</td>\r\n            <td>{{user.lastName}}</td>\r\n            <td>{{user.role}}</td>\r\n            <td><button (click)=\"details(user._id)\" class=\"btn btn-primary\" ><i class=\"glyphicon glyphicon-info-sign\" ></i></button> | <button (click)=\"activate(user)\" class=\"btn btn-success\" [disabled]=\"user.valid\" ><i class=\"glyphicon glyphicon-ok\" ></i></button>\r\n            | <button (click)=\"deactivate(user)\" class=\"btn btn-danger\" [disabled]=\"!user.valid\"  ><i class=\"glyphicon glyphicon-remove\" ></i></button></td>\r\n          </tr>\r\n      </table>\r\n\r\n</div> <!-- /container -->"

/***/ }),

/***/ "../../../../../src/app/components/admin/user/user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserComponent = (function () {
    function UserComponent(userService, activatedRoute, router, _location) {
        this.userService = userService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this._location = _location;
    }
    UserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.adminId = params['adminId'];
            _this.userService.findUserById(_this.adminId)
                .subscribe(function (user) {
                _this.admin = user;
                if (_this.admin.role != 'admin') {
                    _this.router.navigate(['profile', _this.adminId, 'menu']);
                }
            }, function (error) {
                console.log(error);
            });
            _this.userService.findAllUsers()
                .subscribe(function (users) {
                _this.users = users;
            }, function (error) {
                console.log(error);
            });
        });
    };
    UserComponent.prototype.details = function (userId) {
        this.router.navigate([userId], { relativeTo: this.activatedRoute });
    };
    UserComponent.prototype.activate = function (user) {
        var _this = this;
        user.valid = true;
        user.validatedBy = this.admin;
        this.userService.updateUser(user._id, user)
            .subscribe(function (res) {
            _this.messageFlag = true;
            _this.message = user.username + '\'s account is validated';
        }, function (error) {
            _this.errorFlag = true;
            _this.errorMsg = 'cannot validate user';
        });
    };
    UserComponent.prototype.deactivate = function (user) {
        var _this = this;
        user.valid = false;
        user.validatedBy = {};
        this.userService.updateUser(user._id, user)
            .subscribe(function (res) {
            _this.messageFlag = true;
            _this.message = user.username + '\'s account is deactivated';
        }, function (error) {
            _this.errorFlag = true;
            _this.errorMsg = 'cannot validate user';
        });
    };
    UserComponent.prototype.back = function () {
        this._location.back();
    };
    return UserComponent;
}());
UserComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-user',
        template: __webpack_require__("../../../../../src/app/components/admin/user/user.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/admin/user/user.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_common__["f" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_common__["f" /* Location */]) === "function" && _d || Object])
], UserComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=user.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/customer/list/list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/customer/list/list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\t  <div \n\t    class=\"alert alert-info\">\n      <a (click)=\"back()\" class=\"pull-left\" > <i class=\"glyphicon glyphicon-chevron-left\"></i> </a>\n\t    Connected as  <b>{{customer.username}}</b> | role :<b> Customer </b>.<br>\n\t  </div>\n      <div *ngIf=\"errorFlag\"\n        class=\"alert alert-danger\">\n        {{errorMsg}}\n      </div>\n      <div *ngIf=\"messageFlag\"\n        class=\"alert alert-success\">\n        {{message}}\n      </div>\n      <div class=\"row\">\n        <div class=\"col-xs-6\">\n          <div *ngIf=\"property\" class=\"panel panel-primary\">\n            <div class=\"panel-heading\">\n              <h3 class=\"panel-title\">Property's Info</h3>\n            </div>\n            <div class=\"panel-body\" style=\"color:black\">\n              ID : <b>{{property._id}}</b> <br>\n              Type : <b>{{property.type}}</b> <br>\n              Description : <b>{{property.description}}</b><br>\n              Size : <b>{{property.size}} m²</b><br>\n              Price : <b>{{property.price}}$/month</b><br>\n              Latitude : <b>{{property.latitude}}</b><br>\n              Longitude : <b>{{property.longitude}}</b><br>\n              Available : <b>{{property.available}}</b><br>\n              Owner : <b>{{property.owner.username}}</b><br>\n              Reviews : <br>\n              <ul>\n                <li *ngFor=\"let review of property.reviews\">\n                  {{review.text}} - ({{review.rate}} stars)\n                </li>\n              </ul>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-xs-6\">\n          <table class=\"table table-bordered\">\n          <tr>\n            <th>#</th>\n            <th>type</th>\n            <th>Owner</th>\n            <th>Available</th>\n            <th>actions</th>\n          </tr>\n          <tr *ngFor=\"let property of properties\">\n            <td>{{property._id}}</td>\n            <td>{{property.type}}</td>\n            <td><a [routerLink]=\"['../user',property.owner._id]\" >{{property.owner.username}}</a></td>\n            <td>{{property.available}}</td>\n            <td><button (click)=\"details(property)\" [disabled]=\"!property.valid\" class=\"btn btn-primary\" ><i class=\"glyphicon glyphicon-info-sign\" ></i></button> | <button *ngIf=\"property.valid\" (click)=\"rent(property)\" class=\"btn btn-success\" [disabled]=\"!property.available\" >Rent</button></td>\n          </tr>\n      </table>\n        </div>\n      </div>\n\n</div> <!-- /container -->"

/***/ }),

/***/ "../../../../../src/app/components/customer/list/list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_property_service__ = __webpack_require__("../../../../../src/app/services/property.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_review_service__ = __webpack_require__("../../../../../src/app/services/review.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ListComponent = (function () {
    function ListComponent(userService, propertyService, reviewService, activatedRoute, router, _location) {
        this.userService = userService;
        this.propertyService = propertyService;
        this.reviewService = reviewService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this._location = _location;
    }
    ListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.customerId = params['customerId'];
            _this.type = params['type'];
            _this.userService.findUserById(_this.customerId)
                .subscribe(function (user) {
                _this.customer = user;
                if (_this.customer.role != 'customer') {
                    _this.router.navigate(['profile', _this.customerId, 'menu']);
                }
            }, function (error) {
                console.log(error);
            });
            _this.propertyService.findAllProperties()
                .subscribe(function (properties) {
                _this.properties = properties;
                _this.userService.findAllUsers()
                    .subscribe(function (users) {
                    _this.users = users;
                    for (var i = 0; i < _this.properties.length; i++) {
                        for (var j = 0; j < _this.users.length; j++) {
                            if (_this.properties[i].owner._id === _this.users[j]._id) {
                                _this.properties[i].owner = _this.users[j];
                            }
                            if (_this.properties[i].customer._id === _this.users[j]._id) {
                                _this.properties[i].customer = _this.users[j];
                            }
                        }
                        if (_this.type != undefined && properties[i].type != _this.type) {
                            _this.properties.splice(i, 1);
                            i--;
                        }
                    }
                }, function (error) {
                    console.log(error);
                });
            }, function (error) {
                console.log(error);
            });
        });
    };
    ListComponent.prototype.details = function (property) {
        var _this = this;
        this.property = property;
        this.reviewService.findReviewsForProperty(property._id)
            .subscribe(function (reviews) {
            _this.property.reviews = reviews;
        });
    };
    ListComponent.prototype.rent = function (property) {
        var _this = this;
        property.customer = { _id: this.customerId };
        property.available = false;
        this.propertyService.updateProperty(property._id, property)
            .subscribe(function (res) {
            _this.messageFlag = true;
            _this.message = 'You rented property with ID ' + property._id;
        }, function (error) {
            _this.errorFlag = true;
            _this.errorMsg = 'cannot rent property';
        });
    };
    ListComponent.prototype.back = function () {
        this._location.back();
    };
    return ListComponent;
}());
ListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-list',
        template: __webpack_require__("../../../../../src/app/components/customer/list/list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/customer/list/list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_property_service__["a" /* PropertyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_property_service__["a" /* PropertyService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_review_service__["a" /* ReviewService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_review_service__["a" /* ReviewService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__angular_common__["f" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_common__["f" /* Location */]) === "function" && _f || Object])
], ListComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=list.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/customer/search/search.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/customer/search/search.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\t<div \n\t    class=\"alert alert-info\">\n      <a (click)=\"back()\" class=\"pull-left\" > <i class=\"glyphicon glyphicon-chevron-left\"></i> </a>\n\t    Connected as  <b>{{customer.username}}</b> | role :<b> Customer </b>.<br>\n\t  </div>\n\t<div class=\"row\">\n\t\t<div class=\"col-sm-12\"><h1>Search For Property By : </h1></div>\n\t</div>\n\t<div class=\"row\">\n\t  <div class=\"col-sm-4\">\n\t  \t<label for=\"type\" >Type</label>\n\t  </div>\n\t  <div class=\"col-sm-8\">\n\t  \t<div class=\"input-group\">\n\t      <select class=\"form-control\" name=\"type\" [(ngModel)]=\"type\" id=\"type\">\n\t      \t<option>appartment</option>\n\t      \t<option>garage</option>\n\t      \t<option>house</option>\n\t      \t<option>offices</option>\n\t      </select>\n\t      <span class=\"input-group-btn\">\n\t        <button class=\"btn btn-primary\" (click)=\"searchByType()\" type=\"button\">Search</button>\n\t      </span>\n\t    </div>\n\t  </div>\n\t</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/customer/search/search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SearchComponent = (function () {
    function SearchComponent(router, activatedRoute, userService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.userService = userService;
    }
    SearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.customerId = params['customerId'];
            _this.userService.findUserById(_this.customerId)
                .subscribe(function (user) {
                _this.customer = user;
                if (_this.customer.role != 'customer') {
                    _this.router.navigate(['profile', _this.customerId, 'menu']);
                }
            }, function (error) {
                console.log(error);
            });
        });
    };
    SearchComponent.prototype.searchByType = function () {
        this.router.navigate(['../type', this.type], { relativeTo: this.activatedRoute });
    };
    return SearchComponent;
}());
SearchComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-search',
        template: __webpack_require__("../../../../../src/app/components/customer/search/search.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/customer/search/search.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */]) === "function" && _c || Object])
], SearchComponent);

var _a, _b, _c;
//# sourceMappingURL=search.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"site-wrapper\">\n\n      <div class=\"site-wrapper-inner\">\n\n        <div class=\"cover-container\">\n\n          <header class=\"masthead clearfix\">\n            <div class=\"inner\">\n              <a href=\"/\" class=\"masthead-brand\"><img src=\"assets/img/logo.png\"></a>\n              <nav class=\"nav nav-masthead\">\n                <a class=\"nav-link active\" href=\"/\">Home</a>\n                <a class=\"nav-link\" href=\"/login\">Login</a>\n                <a class=\"nav-link\" href=\"/register\">Register</a>\n              </nav>\n            </div>\n          </header>\n\n          <main role=\"main\" class=\"inner cover\">\n          \t<p class=\"lead\">\n\t\t\t\t      Welcome to home page of :\n            </p>\n            <p class=\"lead\">\n              <img src=\"assets/img/logo.png\" style=\"width:100%\"> \n            </p>\n            <p class=\"lead\"> Your shortest path to rent/manage properties.</p>\n            <p class=\"lead\">\n            <a href=\"/login\" class=\"btn btn-lg btn-primary\">Sign in</a> OR <a href=\"/register\" class=\"btn btn-lg btn-secondary\">Register</a>\n            </p>\n            \n\n\n          </main>\n\n          <footer class=\"mastfoot\">\n            <div class=\"inner\">\n              <p> 2017 &copy; property management system </p>\n            </div>\n          </footer>\n\n        </div>\n\n      </div>\n\n    </div>"

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/components/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/menu/admin-menu/admin-menu.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/menu/admin-menu/admin-menu.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\t  <div  class=\"alert alert-info\">\n\t    Connected as  <b>{{user.username}}</b> | role :<b> Admin </b>.\n\t  </div>\n      <div class=\"row\">\n          <div class=\"col-xs-4\">\n            <a [routerLink]=\"['/admin',userId,'user']\" class=\"thumbnail\">\n              <span class=\"btn btn-lg btn-primary glyphicon glyphicon-user\" ></span>\n              <div class=\"caption\">\n                <h3>Users Management</h3>\n              </div>\n            </a>\n          </div>\n          <div class=\"col-xs-4\">\n            <a [routerLink]=\"['/admin',userId,'property']\" class=\"thumbnail\">\n              <span class=\"btn btn-lg btn-primary glyphicon glyphicon-home\" ></span>\n              <div class=\"caption\">\n                <h3>Properties Management</h3>\n              </div>\n            </a>\n          </div>\n          <div class=\"col-xs-4\">\n            <a [routerLink]=\"['/admin',userId,'review']\" class=\"thumbnail\">\n              <span class=\"btn btn-lg btn-primary glyphicon glyphicon-comment\" ></span>\n              <div class=\"caption\">\n                <h3>Reviews Management</h3>\n              </div>\n            </a>\n          </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-xs-12\"><a class=\"btn btn-danger\" [routerLink]=\"['/login']\" >logout</a></div>\n      </div>\n\n</div> <!-- /container -->"

/***/ }),

/***/ "../../../../../src/app/components/menu/admin-menu/admin-menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminMenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdminMenuComponent = (function () {
    function AdminMenuComponent(userService, activatedRoute, router) {
        this.userService = userService;
        this.activatedRoute = activatedRoute;
        this.router = router;
    }
    AdminMenuComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.userId = params['userId'];
        });
        this.userService.findUserById(this.userId)
            .subscribe(function (user) {
            _this.user = user;
        }, function (error) {
            console.log(error);
        });
    };
    return AdminMenuComponent;
}());
AdminMenuComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-admin-menu',
        template: __webpack_require__("../../../../../src/app/components/menu/admin-menu/admin-menu.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/menu/admin-menu/admin-menu.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object])
], AdminMenuComponent);

var _a, _b, _c;
//# sourceMappingURL=admin-menu.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/menu/customer-menu/customer-menu.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/menu/customer-menu/customer-menu.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\t  <div  class=\"alert alert-info\">\n\t    Connected as  <b>{{user.username}}</b> | role :<b> Customer </b>.\n\t  </div>\n      <div class=\"row\">\n          <div class=\"col-xs-4\">\n            <a [routerLink]=\"['/customer',userId,'search']\" class=\"thumbnail\">\n              <span class=\"btn btn-lg btn-primary glyphicon glyphicon-search\" ></span>\n              <div class=\"caption\">\n                <h3>Search for property</h3>\n              </div>\n            </a>\n          </div>\n          <div class=\"col-xs-4\">\n            <a [routerLink]=\"['/customer',userId,'list']\" class=\"thumbnail\">\n              <span class=\"btn btn-lg btn-primary glyphicon glyphicon-list\" ></span>\n              <div class=\"caption\">\n                <h3>List properties</h3>\n              </div>\n            </a>\n          </div>\n          <div class=\"col-xs-4\">\n            <a [routerLink]=\"['/customer',userId,'rentals']\" class=\"thumbnail\">\n              <span class=\"btn btn-lg btn-primary glyphicon glyphicon-home\" ></span>\n              <div class=\"caption\">\n                <h3>My rentals</h3>\n              </div>\n            </a>\n          </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-xs-12\"><a class=\"btn btn-danger\" [routerLink]=\"['/login']\" >logout</a></div>\n      </div>\n\n</div> <!-- /container -->"

/***/ }),

/***/ "../../../../../src/app/components/menu/customer-menu/customer-menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerMenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CustomerMenuComponent = (function () {
    function CustomerMenuComponent(userService, activatedRoute, router) {
        this.userService = userService;
        this.activatedRoute = activatedRoute;
        this.router = router;
    }
    CustomerMenuComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.userId = params['userId'];
        });
        this.userService.findUserById(this.userId)
            .subscribe(function (user) {
            _this.user = user;
        }, function (error) {
            console.log(error);
        });
    };
    return CustomerMenuComponent;
}());
CustomerMenuComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-customer-menu',
        template: __webpack_require__("../../../../../src/app/components/menu/customer-menu/customer-menu.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/menu/customer-menu/customer-menu.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object])
], CustomerMenuComponent);

var _a, _b, _c;
//# sourceMappingURL=customer-menu.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/menu/menu.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/menu/menu.component.html":
/***/ (function(module, exports) {

module.exports = "<div [ngSwitch]=\"user.role\">\n\t<div *ngSwitchCase=\"'admin'\">\n\t\t<app-admin-menu></app-admin-menu>\n\t</div>\n\t<div *ngSwitchCase=\"'customer'\">\n\t\t<app-customer-menu></app-customer-menu>\n\t</div>\n\t<div *ngSwitchCase=\"'owner'\">\n\t\t<app-owner-menu></app-owner-menu>\n\t</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/menu/menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MenuComponent = (function () {
    function MenuComponent(userService, activatedRoute, router) {
        this.userService = userService;
        this.activatedRoute = activatedRoute;
        this.router = router;
    }
    MenuComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.userId = params['userId'];
            _this.userService.findUserById(_this.userId)
                .subscribe(function (user) {
                _this.user = user;
            }, function (error) {
                console.log(error);
            });
        });
    };
    return MenuComponent;
}());
MenuComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-menu',
        template: __webpack_require__("../../../../../src/app/components/menu/menu.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/menu/menu.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object])
], MenuComponent);

var _a, _b, _c;
//# sourceMappingURL=menu.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/menu/owner-menu/owner-menu.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/menu/owner-menu/owner-menu.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n\t  <div  class=\"alert alert-info\">\r\n\t    Connected as  <b>{{user.username}}</b> | role :<b> Owner </b>.\r\n\t  </div>\r\n      <div class=\"row\">\r\n          <div class=\"col-xs-4\">\r\n            <a [routerLink]=\"['/owner',userId,'client']\" class=\"thumbnail\">\r\n              <span class=\"btn btn-lg btn-primary glyphicon glyphicon-user\" ></span>\r\n              <div class=\"caption\">\r\n                <h3>My Clients</h3>\r\n              </div>\r\n            </a>\r\n          </div>\r\n          <div class=\"col-xs-4\">\r\n            <a [routerLink]=\"['/owner',userId,'property']\" class=\"thumbnail\">\r\n              <span class=\"btn btn-lg btn-primary glyphicon glyphicon-home\" ></span>\r\n              <div class=\"caption\">\r\n                <h3>My properties</h3>\r\n              </div>\r\n            </a>\r\n          </div>\r\n          <div class=\"col-xs-4\">\r\n            <a [routerLink]=\"['/owner',userId,'review']\" class=\"thumbnail\">\r\n              <span class=\"btn btn-lg btn-primary glyphicon glyphicon-comment\" ></span>\r\n              <div class=\"caption\">\r\n                <h3>My reviews</h3>\r\n              </div>\r\n            </a>\r\n          </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-xs-12\"><a class=\"btn btn-danger\" [routerLink]=\"['/login']\" >logout</a></div>\r\n      </div>\r\n\r\n</div> <!-- /container -->"

/***/ }),

/***/ "../../../../../src/app/components/menu/owner-menu/owner-menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OwnerMenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OwnerMenuComponent = (function () {
    function OwnerMenuComponent(userService, activatedRoute, router) {
        this.userService = userService;
        this.activatedRoute = activatedRoute;
        this.router = router;
    }
    OwnerMenuComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.userId = params['userId'];
        });
        this.userService.findUserById(this.userId)
            .subscribe(function (user) {
            _this.user = user;
        }, function (error) {
            console.log(error);
        });
    };
    return OwnerMenuComponent;
}());
OwnerMenuComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-owner-menu',
        template: __webpack_require__("../../../../../src/app/components/menu/owner-menu/owner-menu.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/menu/owner-menu/owner-menu.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object])
], OwnerMenuComponent);

var _a, _b, _c;
//# sourceMappingURL=owner-menu.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/owner/client/client.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/owner/client/client.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n\t  <div \r\n\t    class=\"alert alert-info\">\r\n      <a (click)=\"back()\" class=\"pull-left\" > <i class=\"glyphicon glyphicon-chevron-left\"></i> </a>\r\n\t    Connected as  <b>{{owner.username}}</b> | role :<b> Owner </b>.<br>\r\n\t  </div>\r\n\t  <div class=\"row\" >\r\n\t  \t<div class=\"col-xs-3\">\r\n\t  \t\t<div *ngIf=\"client\" class=\"panel panel-primary\">\r\n\t\t\t  <div class=\"panel-heading\">\r\n\t\t\t    <h3 class=\"panel-title\">User's Contact Info</h3>\r\n\t\t\t  </div>\r\n\t  \t\t<div class=\"panel-body\" style=\"color:black\">\r\n\t\t\t    First name : <b>{{client.firstName}}</b><br>\r\n\t\t\t    Last name : <b>{{client.lastName}}</b><br>\r\n\t\t\t    Email : <b>{{client.email}}</b><br>\r\n\t\t\t    Phone : <b>{{client.phone}}</b><br>\r\n\t\t\t    <a class=\"btn btn-primary\" href=\"mailto:{{client.email}}\"><i class=\"glyphicon glyphicon-envelope\"></i></a> | <a class=\"btn btn-warning\" href=\"tel:{{client.phone}}\"><i class=\"glyphicon glyphicon-earphone\"></i></a>\r\n\t\t\t  </div>\r\n\t\t\t</div>\r\n\t  \t</div>\r\n\t  \t<div class=\"col-xs-9\">\r\n\t\t  \t<table class=\"table table-bordered\">\r\n\t          <tr>\r\n\t            <th>#</th>\r\n\t            <th>first name</th>\r\n\t            <th>last name</th>\r\n\t            <th>Property</th>\r\n\t            <th>Contact</th>\r\n\t          </tr>\r\n\t          <tr *ngFor=\"let client of clients\">\r\n\t            <td>{{client._id}}</td>\r\n\t            <td>{{client.firstName}}</td>\r\n\t            <td>{{client.lastName}}</td>\r\n\t            <td>{{client.property._id}}</td>\r\n\t            <td><button (click)=\"contact(client)\" class=\"btn btn-primary\" >Contact</button></td>\r\n\t          </tr>\r\n\t      </table>\r\n\r\n\t  \t</div>\r\n\t  </div>\r\n      \r\n\r\n</div> <!-- /container -->"

/***/ }),

/***/ "../../../../../src/app/components/owner/client/client.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_property_service__ = __webpack_require__("../../../../../src/app/services/property.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ClientComponent = (function () {
    function ClientComponent(userService, propertyService, activatedRoute, router, _location) {
        this.userService = userService;
        this.propertyService = propertyService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this._location = _location;
    }
    ClientComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.ownerId = params['ownerId'];
            _this.userService.findUserById(_this.ownerId)
                .subscribe(function (user) {
                _this.owner = user;
                if (_this.owner.role != 'owner') {
                    _this.router.navigate(['profile', _this.ownerId, 'menu']);
                }
            }, function (error) {
                console.log(error);
            });
            _this.userService.findAllUsers()
                .subscribe(function (users) {
                _this.propertyService.findPropertiesByOwner(_this.ownerId)
                    .subscribe(function (properties) {
                    _this.clients = [];
                    for (var i = 0; i < properties.length; i++) {
                        for (var j = 0; j < users.length; j++) {
                            if (properties[i].customer._id == users[j]._id) {
                                users[j].property = properties[i];
                                _this.clients.push(users[j]);
                            }
                        }
                    }
                });
            }, function (error) {
                console.log(error);
            });
        });
    };
    ClientComponent.prototype.contact = function (client) {
        this.client = client;
    };
    ClientComponent.prototype.back = function () {
        this._location.back();
    };
    return ClientComponent;
}());
ClientComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-client',
        template: __webpack_require__("../../../../../src/app/components/owner/client/client.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/owner/client/client.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_property_service__["a" /* PropertyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_property_service__["a" /* PropertyService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__angular_common__["f" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_common__["f" /* Location */]) === "function" && _e || Object])
], ClientComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=client.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/owner/property/property.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/owner/property/property.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n\t  <div \r\n\t    class=\"alert alert-info\">\r\n      <a (click)=\"back()\" class=\"pull-left\" > <i class=\"glyphicon glyphicon-chevron-left\"></i> </a>\r\n\t    Connected as  <b>{{owner.username}}</b> | role :<b> Owner </b>.<br>\r\n\t  </div>\r\n      <div *ngIf=\"errorFlag\"\r\n        class=\"alert alert-danger\">\r\n        {{errorMsg}}\r\n      </div>\r\n      <div *ngIf=\"messageFlag\"\r\n        class=\"alert alert-success\">\r\n        {{message}}\r\n      </div>\r\n      <div class=\"row\">\r\n      \t<div class=\"col-xs-4\">\r\n      \t\t<div class=\"panel panel-primary\">\r\n\t\t\t  <div class=\"panel-heading\">\r\n\t\t\t    <h3 class=\"panel-title\">Add/Update property</h3>\r\n\t\t\t  </div>\r\n\t  \t\t<div class=\"panel-body\" style=\"color:black\">\r\n\t\t\t    <form class=\"form-horizontal\" #f=\"ngForm\">\r\n\t\t\t\t  <div class=\"form-group\">\r\n\t\t\t\t    <label for=\"propertyId\" class=\"control-label\">Id</label>\r\n\t\t\t\t      <input type=\"text\" class=\"form-control\" id=\"propertyId\" name=\"propertyId\" placeholder=\"id\" [(ngModel)]=\"propertyId\" >\r\n\t\t\t\t  </div>\r\n\t\t\t\t  \t<div class=\"form-group\">\r\n\r\n\t\t\t\t    <label for=\"type\" class=\"control-label\">Type</label>\r\n\t\t\t\t      <select class=\"form-control\" id=\"type\" name=\"type\" [(ngModel)]=\"type\">\r\n\t\t\t\t      \t<option value=\"appartment\">appartment</option>\r\n\t\t\t\t      \t<option value=\"garage\">garage</option>\r\n\t\t\t\t      \t<option value=\"house\">house</option>\r\n\t\t\t\t      \t<option value=\"offices\">offices</option>\r\n\t\t\t\t      </select>\r\n\t\t\t\t  </div>\r\n\t\t\t\t  <div class=\"form-group\">\r\n\t\t\t\t    <label for=\"description\" class=\"control-label\">Description</label>\r\n\t\t\t\t      <input type=\"text\" class=\"form-control\" id=\"description\" name=\"description\" placeholder=\"Description\" [(ngModel)]=\"description\">\r\n\t\t\t\t  </div>\r\n\t\t\t\t  <div class=\"form-group\">\r\n\t\t\t\t    <label for=\"size\" class=\"control-label\">Size</label>\r\n\t\t\t\t      <input type=\"number\" class=\"form-control\" id=\"size\" name=\"size\" placeholder=\"Size in m²\" [(ngModel)]=\"size\">\r\n\t\t\t\t  </div>\r\n\t\t\t\t  <div class=\"form-group\">\r\n\t\t\t\t    <label for=\"price\" class=\"control-label\">Price</label>\r\n\t\t\t\t      <input type=\"number\" class=\"form-control\" id=\"price\" name=\"price\" placeholder=\"Price in $ USD\" [(ngModel)]=\"price\">\r\n\t\t\t\t  </div>\r\n\t\t\t\t  <div class=\"form-group\">\r\n\t\t\t\t    <label for=\"latitude\" class=\"control-label\">Latitude</label>\r\n\t\t\t\t      <input type=\"number\" class=\"form-control\" id=\"latitude\" name=\"latitude\" placeholder=\"latitude\" [(ngModel)]=\"latitude\">\r\n\t\t\t\t  </div>\r\n\t\t\t\t  <div class=\"form-group\">\r\n\t\t\t\t    <label for=\"longitude\" class=\"control-label\">Longitude</label>\r\n\t\t\t\t      <input type=\"number\" class=\"form-control\" id=\"longitude\" name=\"longitude\" placeholder=\"longitude\" [(ngModel)]=\"longitude\">\r\n\t\t\t\t  </div>\r\n\t\t\t\t  <div class=\"form-group\">\r\n\t\t\t\t    <div>\r\n\t\t\t\t      <button (click)=\"save()\" class=\"btn btn-primary\">Save</button> <button (click)=\"update()\" class=\"btn btn-info\">Update</button>\r\n\t\t\t\t    </div>\r\n\t\t\t\t  </div>\r\n\t\t\t\t</form>\r\n\t\t\t  </div>\r\n\t\t\t</div>\r\n      \t</div>\r\n      \t<div class=\"col-xs-8\">\r\n      \t\t<table class=\"table table-bordered\">\r\n\t          <tr>\r\n\t            <th>#</th>\r\n\t            <th>type</th>\r\n\t            <th>Available</th>\r\n\t            <th>Customer</th>\r\n\t            <th>Verified</th>\r\n\t            <th>actions</th>\r\n\t          </tr>\r\n\t          <tr *ngFor=\"let property of properties\">\r\n\t            <td>{{property._id}}</td>\r\n\t            <td>{{property.type}}</td>\r\n\t            <td>{{property.available}}</td>\r\n\t            <td><a [routerLink]=\"['../client']\" >{{property.customer.username}}</a></td>\r\n\t            <td>{{property.valid}}</td>\r\n\t            <td><button (click)=\"edit(property)\" class=\"btn btn-primary\" ><i class=\"glyphicon glyphicon-check\r\n\" ></i></button></td>\r\n\t          </tr>\r\n\t      </table>\r\n      \t</div>\r\n      </div>\r\n\r\n</div> <!-- /container -->"

/***/ }),

/***/ "../../../../../src/app/components/owner/property/property.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OwnerPropertyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_property_service__ = __webpack_require__("../../../../../src/app/services/property.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var OwnerPropertyComponent = (function () {
    function OwnerPropertyComponent(userService, propertyService, activatedRoute, router, _location) {
        this.userService = userService;
        this.propertyService = propertyService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this._location = _location;
    }
    OwnerPropertyComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.ownerId = params['ownerId'];
            _this.userService.findUserById(_this.ownerId)
                .subscribe(function (user) {
                _this.owner = user;
                if (_this.owner.role != 'owner') {
                    _this.router.navigate(['profile', _this.ownerId, 'menu']);
                }
            }, function (error) {
                console.log(error);
            });
            _this.propertyService.findPropertiesByOwner(_this.ownerId)
                .subscribe(function (properties) {
                _this.properties = properties;
                _this.userService.findAllUsers()
                    .subscribe(function (users) {
                    _this.users = users;
                    for (var i = 0; i < _this.properties.length; i++) {
                        for (var j = 0; j < _this.users.length; j++) {
                            if (_this.properties[i].customer._id === _this.users[j]._id) {
                                _this.properties[i].customer = _this.users[j];
                            }
                        }
                        _this.propertyService.updateProperty(_this.properties[i]._id, _this.properties[i])
                            .subscribe(function (res) {
                        }, function (error) {
                        });
                    }
                }, function (error) {
                    console.log(error);
                });
            }, function (error) {
                console.log(error);
            });
        });
    };
    OwnerPropertyComponent.prototype.save = function () {
        var _this = this;
        var property = { type: this.type, description: this.description,
            valid: false, available: true, size: this.size, price: this.price,
            owner: { _id: this.ownerId }, customer: { _id: "" }, latitude: this.latitude, longitude: this.longitude, validatedBy: "" };
        this.propertyService.createProperty(this.ownerId, property)
            .subscribe(function (res) {
            _this.messageFlag = true;
            _this.message = 'Property created Successfully';
        }, function (error) {
            _this.errorFlag = true;
            _this.errorMsg = 'cannot create property';
        });
    };
    OwnerPropertyComponent.prototype.update = function () {
        var _this = this;
        var property = { _id: this.propertyId, type: this.type, description: this.description,
            valid: false, available: true, size: this.size, price: this.price,
            owner: { _id: this.ownerId }, customer: this.customer, latitude: this.latitude, longitude: this.longitude, validatedBy: "" };
        this.propertyService.updateProperty(property._id, property)
            .subscribe(function (res) {
            _this.messageFlag = true;
            _this.message = 'Property Updated Successfully';
        }, function (error) {
            _this.errorFlag = true;
            _this.errorMsg = 'cannot update property';
        });
    };
    OwnerPropertyComponent.prototype.edit = function (property) {
        this.propertyId = property._id;
        this.type = property.type;
        this.description = property.description;
        this.size = property.size;
        this.price = property.price;
        this.latitude = property.latitude;
        this.longitude = property.longitude;
        this.customer = property.customer;
    };
    OwnerPropertyComponent.prototype.back = function () {
        this._location.back();
    };
    return OwnerPropertyComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('f'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NgForm */]) === "function" && _a || Object)
], OwnerPropertyComponent.prototype, "propertyForm", void 0);
OwnerPropertyComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-property',
        template: __webpack_require__("../../../../../src/app/components/owner/property/property.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/owner/property/property.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_property_service__["a" /* PropertyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_property_service__["a" /* PropertyService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__angular_common__["f" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_common__["f" /* Location */]) === "function" && _f || Object])
], OwnerPropertyComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=property.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/owner/review/review.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/owner/review/review.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n\t  <div \r\n\t    class=\"alert alert-info\">\r\n      <a (click)=\"back()\" class=\"pull-left\" > <i class=\"glyphicon glyphicon-chevron-left\"></i> </a>\r\n\t    Connected as  <b>{{owner.username}}</b> | role :<b> Owner </b>.<br>\r\n\t  </div>\r\n      <table class=\"table table-bordered\">\r\n          <tr>\r\n            <th>#</th>\r\n            <th>Rate</th>\r\n            <th>Text</th>\r\n            <th>Property</th>\r\n            <th>Customer</th>\r\n          </tr>\r\n          <tr *ngFor=\"let review of reviews\">\r\n            <td>{{review._id}}</td>\r\n            <td>{{review.rate}} stars</td>\r\n            <td>{{review.text}}</td>\r\n            <td>{{review.property}}</td>\r\n            <td>{{review.customer}}</td>\r\n          </tr>\r\n      </table>\r\n\r\n</div> <!-- /container -->"

/***/ }),

/***/ "../../../../../src/app/components/owner/review/review.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OwnerReviewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_property_service__ = __webpack_require__("../../../../../src/app/services/property.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_review_service__ = __webpack_require__("../../../../../src/app/services/review.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var OwnerReviewComponent = (function () {
    function OwnerReviewComponent(userService, reviewService, propertyService, activatedRoute, router, _location) {
        this.userService = userService;
        this.reviewService = reviewService;
        this.propertyService = propertyService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this._location = _location;
    }
    OwnerReviewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.ownerId = params['ownerId'];
            _this.userService.findUserById(_this.ownerId)
                .subscribe(function (user) {
                _this.owner = user;
                if (_this.owner.role != 'owner') {
                    _this.router.navigate(['profile', _this.ownerId, 'menu']);
                }
            }, function (error) {
                console.log(error);
            });
            _this.reviewService.findAllReviews()
                .subscribe(function (reviews) {
                _this.reviews = [];
                _this.propertyService.findPropertiesByOwner(_this.ownerId)
                    .subscribe(function (properties) {
                    for (var i = 0; i < reviews.length; i++) {
                        for (var j = 0; j < properties.length; j++) {
                            if (reviews[i].property == properties[j]._id) {
                                _this.reviews.push(reviews[i]);
                            }
                        }
                    }
                });
            }, function (error) {
                console.log(error);
            });
        });
    };
    OwnerReviewComponent.prototype.back = function () {
        this._location.back();
    };
    return OwnerReviewComponent;
}());
OwnerReviewComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-review',
        template: __webpack_require__("../../../../../src/app/components/owner/review/review.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/owner/review/review.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__services_review_service__["a" /* ReviewService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_review_service__["a" /* ReviewService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_property_service__["a" /* PropertyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_property_service__["a" /* PropertyService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__angular_common__["f" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_common__["f" /* Location */]) === "function" && _f || Object])
], OwnerReviewComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=review.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/user/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\t<div *ngIf=\"errorFlag\"\n    class=\"alert alert-danger\">\n    {{errorMsg}}\n    </div>\n      <form (ngSubmit) = \"login()\" #f=\"ngForm\" class=\"form-signin\">\n        <h2 class=\"form-signin-heading\">Please sign in</h2>\n        <label for=\"username\" >Username</label>\n        <input type=\"text\" id=\"username\" name=\"username\" ngModel #username=\"ngModel\" class=\"form-control\" placeholder=\"Username\"  required autofocus>\n        <span class=\"help-block\" *ngIf=\"!username.valid && username.touched\">\n\t      Please enter username!\n\t    </span>\n        <label for=\"password\" >Password</label>\n        <input type=\"password\" id=\"password\" name=\"password\" ngModel #password=\"ngModel\" class=\"form-control\" placeholder=\"Password\"  required>\n        <span class=\"help-block\" *ngIf=\"!password.valid && password.touched\">\n      Please enter password!\n    </span>\n        <button class=\"btn btn-lg btn-primary btn-block\" [disabled]=\"!f.valid\" type=\"submit\">Sign in</button>\n        <a class=\"btn btn-lg btn-danger btn-block\" [routerLink]=\"['/register']\">Register</a>\n      </form>\n\n</div> <!-- /container -->"

/***/ }),

/***/ "../../../../../src/app/components/user/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    function LoginComponent(userService, route, router) {
        this.userService = userService;
        this.route = route;
        this.router = router;
        this.errorMsg = 'Invalid username or password !';
    }
    LoginComponent.prototype.ngOnInit = function () { };
    LoginComponent.prototype.login = function () {
        var _this = this;
        // fetching data from loginForm
        this.username = this.loginForm.value.username;
        this.password = this.loginForm.value.password;
        this.userService.findUserByCredentials(this.username, this.password)
            .subscribe(function (user) {
            _this.errorFlag = false;
            //redirect to profile
            _this.router.navigate(['/profile', user._id]);
        }, function (error) {
            _this.errorFlag = true;
        });
    };
    return LoginComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('f'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NgForm */]) === "function" && _a || Object)
], LoginComponent.prototype, "loginForm", void 0);
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/components/user/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/user/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _d || Object])
], LoginComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/user/profile/profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\t  <div *ngIf=\"errorFlag\"\n\t    class=\"alert alert-danger\">\n\t    {{errorMsg}}\n\t  </div>\n\t  <div *ngIf=\"messageFlag\"\n\t    class=\"alert alert-success\">\n\t    {{message}}\n\t  </div>\n      <form class=\"form-signin\">\n        <h2 class=\"form-signin-heading\">Profile Information \n        \t<span *ngIf=\"!valid\" class=\"label label-danger\">Unverified</span>\n\t\t\t<span *ngIf=\"valid\" class=\"label label-success\">Verified</span>\n        \t</h2>\n        <label for=\"firstName\" >First Name</label>\n        <input type=\"text\" id=\"firstName\" [(ngModel)]=\"firstName\" name=\"firstName\" class=\"form-control\" placeholder=\"First Name\" required>\n        <label for=\"lastName\" >Last Name</label>\n        <input type=\"text\" id=\"lastName\" name=\"lastName\" [(ngModel)]=\"lastName\" class=\"form-control\" placeholder=\"Last Name\" required>\n        <label for=\"email\" >Email</label>\n        <input type=\"email\" id=\"email\" name=\"email\" [(ngModel)]=\"email\" class=\"form-control\" placeholder=\"Email\" required>\n        <label for=\"phone\" >Phone</label>\n        <input type=\"text\" id=\"phone\" name=\"phone\" [(ngModel)]=\"phone\" class=\"form-control\" placeholder=\"Phone\" required>\n        <label for=\"dob\" >Date Of Birth</label>\n        <input type=\"string\" id=\"dob\" name=\"dob\" [(ngModel)]=\"dob\" class=\"form-control\" placeholder=\"dd/mm/yyyy\" required>\n        <button class=\"btn btn-lg btn-primary btn-block\" (click)=\"update()\">Save</button>\n        <button class=\"btn btn-lg btn-info btn-block\" [disabled]=\"!valid\" (click)=\"goToMenu()\">Go to Menu</button>     \n        <button class=\"btn btn-lg btn-danger btn-block\" (click)=\"logout()\">Logout</button>\n      </form>\n\n</div> <!-- /container -->"

/***/ }),

/***/ "../../../../../src/app/components/user/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileComponent = (function () {
    function ProfileComponent(userService, activatedRoute, router) {
        this.userService = userService;
        this.activatedRoute = activatedRoute;
        this.router = router;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.userId = params['userId'];
        });
        this.userService.findUserById(this.userId)
            .subscribe(function (user) {
            _this.user = user;
            _this.username = _this.user['username'];
            _this.email = _this.user['email'];
            _this.firstName = _this.user['firstName'];
            _this.lastName = _this.user['lastName'];
            _this.valid = _this.user['valid'];
            _this.phone = _this.user['phone'];
            _this.dob = _this.user['dob'];
        }, function (error) {
            console.log(error);
        });
    };
    ProfileComponent.prototype.update = function () {
        var _this = this;
        this.errorFlag = false;
        this.messageFlag = false;
        this.user['email'] = this.email;
        this.user['firstName'] = this.firstName;
        this.user['lastName'] = this.lastName;
        this.user['phone'] = this.phone;
        this.user['dob'] = this.dob;
        this.userService.updateUser(this.userId, this.user)
            .subscribe(function (res) {
            _this.messageFlag = true;
            _this.message = 'informations are updated';
        }, function (error) {
            _this.errorFlag = true;
            _this.errorMsg = 'cannot update informations';
        });
    };
    ProfileComponent.prototype.goToMenu = function () {
        //redirect to menu
        this.router.navigate(['menu'], { relativeTo: this.activatedRoute });
    };
    ProfileComponent.prototype.logout = function () {
        //redirect to home
        this.router.navigate(['/']);
    };
    return ProfileComponent;
}());
ProfileComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-profile',
        template: __webpack_require__("../../../../../src/app/components/user/profile/profile.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/user/profile/profile.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object])
], ProfileComponent);

var _a, _b, _c;
//# sourceMappingURL=profile.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/user/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\t  <div *ngIf=\"errorFlag\"\n\t    class=\"alert alert-danger\">\n\t    {{errorMsg}}\n\t  </div>\n      <form class=\"form-signin\" (ngSubmit) = \"register()\" #f=\"ngForm\">\n        <h2 class=\"form-signin-heading\">Register as new user</h2>\n        <label for=\"username\" >Username</label>\n        <input type=\"text\" id=\"username\" name=\"username\" class=\"form-control\" placeholder=\"Username\" ngModel #username=\"ngModel\" required autofocus>\n        <span class=\"help-block\" *ngIf=\"!username.valid && username.touched\">\n\t      Please enter username!\n\t  \t</span>\n        <label for=\"inputPassword\" >Password</label>\n        <input type=\"password\" id=\"inputPassword\" name=\"password\" class=\"form-control\" placeholder=\"Password\" ngModel #password=\"ngModel\" required>\n        <span class=\"help-block\" *ngIf=\"!password.valid && username.touched\">\n\t      Please enter password!\n\t  \t</span>\n        <label for=\"inputPassword2\" >Password confirmation</label>\n        <input type=\"password\" id=\"inputPassword2\" name=\"pwdconfirmation\" class=\"form-control\" placeholder=\"Password confirmation\" ngModel #pwdconfirmation=\"ngModel\" required>\n        <span class=\"help-block\" *ngIf=\"!pwdconfirmation.valid && pwdconfirmation.touched\">\n\t      Please enter password confirmation!\n\t  </span>\n        <label for=\"registerAs\" >Register As</label>\n        <select id=\"registerAs\" class=\"form-control\" name=\"registerAs\" ngModel #registerAs=\"ngModel\" required >\n        \t<option value=\"owner\" >Owner</option>\n        \t<option value=\"customer\">Customer</option>\n        </select>\n        <button class=\"btn btn-lg btn-primary btn-block\" type=\"submit\">Next</button>        \n        <button class=\"btn btn-lg btn-primary btn-block\" (click)=\"cancel()\">Cancel</button>\n      </form>\n\n</div> <!-- /container -->"

/***/ }),

/***/ "../../../../../src/app/components/user/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterComponent = (function () {
    function RegisterComponent(userService, route, router) {
        this.userService = userService;
        this.route = route;
        this.router = router;
        this.errorMsg = 'Invalid username!';
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.register = function () {
        var _this = this;
        //hide error msg if already there
        this.errorFlag = false;
        // fetching data from registerForm
        this.username = this.registerForm.value.username;
        this.password = this.registerForm.value.password;
        this.pwdconfirmation = this.registerForm.value.pwdconfirmation;
        this.registerAs = this.registerForm.value.registerAs;
        this.userService.findUserByUsername(this.username)
            .subscribe(function (user) {
            _this.errorFlag = true;
            _this.errorMsg = "The username is already taken";
        }, function (error) {
            if (_this.password == _this.pwdconfirmation) {
                var user = { _id: "", username: _this.username, password: _this.password, role: _this.registerAs };
                _this.userService.createUser(user)
                    .subscribe(function (newUser) {
                    //redirect to profile
                    _this.router.navigate(['/profile', newUser._id]);
                }, function (error) {
                    _this.errorFlag = true;
                    _this.errorMsg = "Couldn't create user";
                });
            }
            else {
                _this.errorFlag = true;
                _this.errorMsg = "password and password confirmation are not the same";
            }
        });
    };
    RegisterComponent.prototype.cancel = function () {
        this.router.navigate(['/login']);
    };
    return RegisterComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('f'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NgForm */]) === "function" && _a || Object)
], RegisterComponent.prototype, "registerForm", void 0);
RegisterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-register',
        template: __webpack_require__("../../../../../src/app/components/user/register/register.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/user/register/register.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _d || Object])
], RegisterComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ "../../../../../src/app/services/property.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PropertyService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PropertyService = (function () {
    function PropertyService(_http) {
        this._http = _http;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl;
    }
    PropertyService.prototype.createProperty = function (ownerId, property) {
        return this._http.post(this.baseUrl + '/api/property/owner/' + ownerId, { property: property })
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    PropertyService.prototype.findPropertiesByOwner = function (ownerId) {
        return this._http.get(this.baseUrl + '/api/property/owner/' + ownerId)
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    PropertyService.prototype.findAllProperties = function () {
        return this._http.get(this.baseUrl + '/api/property')
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    PropertyService.prototype.findPropertyById = function (propertyId) {
        return this._http.get(this.baseUrl + '/api/property/' + propertyId)
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    PropertyService.prototype.updateProperty = function (propertyId, property) {
        return this._http.put(this.baseUrl + '/api/property/' + propertyId, { property: property })
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    PropertyService.prototype.deleteProperty = function (propertyId) {
        return this._http.delete(this.baseUrl + '/api/property/' + propertyId)
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    return PropertyService;
}());
PropertyService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], PropertyService);

var _a;
//# sourceMappingURL=property.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/review.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReviewService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ReviewService = (function () {
    function ReviewService(_http) {
        this._http = _http;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl;
    }
    ReviewService.prototype.createReview = function (propertyId, customerId, review) {
        review.customer = customerId;
        review.property = propertyId;
        return this._http.post(this.baseUrl + '/api/review', { review: review })
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    ReviewService.prototype.findReviewsForProperty = function (propertyId) {
        return this._http.get(this.baseUrl + '/api/review/property/' + propertyId)
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    ReviewService.prototype.findAllReviews = function () {
        return this._http.get(this.baseUrl + '/api/review')
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    ReviewService.prototype.findReviewById = function (reviewId) {
        return this._http.get(this.baseUrl + '/api/review/' + reviewId)
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    ReviewService.prototype.updateReview = function (reviewId, review) {
        return this._http.put(this.baseUrl + '/api/review/' + reviewId, { review: review })
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    ReviewService.prototype.deleteReview = function (reviewId) {
        return this._http.delete(this.baseUrl + '/api/review/' + reviewId)
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    return ReviewService;
}());
ReviewService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], ReviewService);

var _a;
//# sourceMappingURL=review.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// injecting service into module
var UserService = (function () {
    function UserService(_http) {
        this._http = _http;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl;
    }
    UserService.prototype.createUser = function (user) {
        return this._http.post(this.baseUrl + '/api/user', { user: user })
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    UserService.prototype.findAllUsers = function () {
        return this._http.get(this.baseUrl + '/api/users')
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    UserService.prototype.findUserById = function (userId) {
        return this._http.get(this.baseUrl + '/api/user/' + userId)
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    UserService.prototype.findUserByUsername = function (username) {
        return this._http.get(this.baseUrl + '/api/user?username=' + username)
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    UserService.prototype.findUserByCredentials = function (username, password) {
        return this._http.get(this.baseUrl + '/api/user?username=' + username + "&password=" + password)
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    UserService.prototype.updateUser = function (userId, user) {
        return this._http.put(this.baseUrl + '/api/user/' + userId, { user: user });
    };
    UserService.prototype.deleteUser = function (userId) {
        return this._http.delete(this.baseUrl + '/api/user/' + userId).map(function (res) {
            var data = res.json();
            return data;
        });
    };
    return UserService;
}());
UserService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], UserService);

var _a;
//# sourceMappingURL=user.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false,
    baseUrl: 'http://localhost:3100'
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map