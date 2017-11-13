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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_user_login_login_component__ = __webpack_require__("../../../../../src/app/components/user/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_user_register_register_component__ = __webpack_require__("../../../../../src/app/components/user/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_user_profile_profile_component__ = __webpack_require__("../../../../../src/app/components/user/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_menu_menu_component__ = __webpack_require__("../../../../../src/app/components/menu/menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_menu_customer_menu_customer_menu_component__ = __webpack_require__("../../../../../src/app/components/menu/customer-menu/customer-menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_menu_owner_menu_owner_menu_component__ = __webpack_require__("../../../../../src/app/components/menu/owner-menu/owner-menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_menu_admin_menu_admin_menu_component__ = __webpack_require__("../../../../../src/app/components/menu/admin-menu/admin-menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_admin_user_user_component__ = __webpack_require__("../../../../../src/app/components/admin/user/user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_admin_property_property_component__ = __webpack_require__("../../../../../src/app/components/admin/property/property.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_admin_review_review_component__ = __webpack_require__("../../../../../src/app/components/admin/review/review.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_admin_user_details_details_component__ = __webpack_require__("../../../../../src/app/components/admin/user/details/details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_admin_property_details_details_component__ = __webpack_require__("../../../../../src/app/components/admin/property/details/details.component.ts");
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
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_8__components_home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_user_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_user_register_register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_user_profile_profile_component__["a" /* ProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_12__components_menu_menu_component__["a" /* MenuComponent */],
            __WEBPACK_IMPORTED_MODULE_13__components_menu_customer_menu_customer_menu_component__["a" /* CustomerMenuComponent */],
            __WEBPACK_IMPORTED_MODULE_14__components_menu_owner_menu_owner_menu_component__["a" /* OwnerMenuComponent */],
            __WEBPACK_IMPORTED_MODULE_15__components_menu_admin_menu_admin_menu_component__["a" /* AdminMenuComponent */],
            __WEBPACK_IMPORTED_MODULE_16__components_admin_user_user_component__["a" /* UserComponent */],
            __WEBPACK_IMPORTED_MODULE_17__components_admin_property_property_component__["a" /* PropertyComponent */],
            __WEBPACK_IMPORTED_MODULE_18__components_admin_review_review_component__["a" /* ReviewComponent */],
            __WEBPACK_IMPORTED_MODULE_19__components_admin_user_details_details_component__["a" /* UserDetailsComponent */],
            __WEBPACK_IMPORTED_MODULE_20__components_admin_property_details_details_component__["a" /* PropertyDetailsComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__app_routing__["a" /* Routing */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_5__services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_6__services_property_service__["a" /* PropertyService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
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
    { path: 'admin/:adminId/property/:propertyId', component: __WEBPACK_IMPORTED_MODULE_10__components_admin_property_details_details_component__["a" /* PropertyDetailsComponent */] }
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

module.exports = "<p>\n  details works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/components/admin/property/details/details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PropertyDetailsComponent; });
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

var PropertyDetailsComponent = (function () {
    function PropertyDetailsComponent() {
    }
    PropertyDetailsComponent.prototype.ngOnInit = function () {
    };
    return PropertyDetailsComponent;
}());
PropertyDetailsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-details',
        template: __webpack_require__("../../../../../src/app/components/admin/property/details/details.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/admin/property/details/details.component.css")]
    }),
    __metadata("design:paramtypes", [])
], PropertyDetailsComponent);

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

module.exports = "<div class=\"container\">\r\n\t  <div \r\n\t    class=\"alert alert-info\">\r\n      <a [routerLink]=\"['/profile',adminId,'menu']\" class=\"pull-left\" > <i class=\"glyphicon glyphicon-chevron-left\"></i> </a>\r\n\t    Connected as  <b>{{admin.username}}</b> | role :<b> Admin </b>.<br>\r\n\t  </div>\r\n      <div *ngIf=\"errorFlag\"\r\n        class=\"alert alert-danger\">\r\n        {{errorMsg}}\r\n      </div>\r\n      <div *ngIf=\"messageFlag\"\r\n        class=\"alert alert-success\">\r\n        {{message}}\r\n      </div>\r\n      <table class=\"table table-bordered\">\r\n          <tr>\r\n            <th>#</th>\r\n            <th>type</th>\r\n            <th>Owner</th>\r\n            <th>Available</th>\r\n            <th>Customer</th>\r\n            <th>actions</th>\r\n          </tr>\r\n          <tr *ngFor=\"let property of properties\">\r\n            <td>{{property._id}}</td>\r\n            <td>{{property.type}}</td>\r\n            <td><a [routerLink]=\"['../user',property.owner._id]\" >{{property.owner.username}}</a></td>\r\n            <td>{{property.available}}</td>\r\n            <td><a [routerLink]=\"['../user',property.customer._id]\" >{{property.customer.username}}</a></td>\r\n            <td><button (click)=\"details(property._id)\" class=\"btn btn-primary\" ><i class=\"glyphicon glyphicon-info-sign\" ></i></button> | <button (click)=\"activate(property)\" class=\"btn btn-success\" [disabled]=\"property.valid\" ><i class=\"glyphicon glyphicon-ok\" ></i></button>\r\n            | <button (click)=\"deactivate(property)\" class=\"btn btn-danger\" [disabled]=\"!property.valid\"  ><i class=\"glyphicon glyphicon-remove\" ></i></button></td>\r\n          </tr>\r\n      </table>\r\n\r\n</div> <!-- /container -->"

/***/ }),

/***/ "../../../../../src/app/components/admin/property/property.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PropertyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_property_service__ = __webpack_require__("../../../../../src/app/services/property.service.ts");
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
    function PropertyComponent(userService, propertyService, activatedRoute, router) {
        this.userService = userService;
        this.propertyService = propertyService;
        this.activatedRoute = activatedRoute;
        this.router = router;
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
                            if (_this.properties[i].owner === _this.users[j]._id) {
                                _this.properties[i].owner = _this.users[j];
                            }
                            if (_this.properties[i].customer === _this.users[j]._id) {
                                _this.properties[i].customer = _this.users[j];
                            }
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
            _this.errorMsg = 'cannot validate property';
        });
    };
    return PropertyComponent;
}());
PropertyComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-property',
        template: __webpack_require__("../../../../../src/app/components/admin/property/property.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/admin/property/property.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_property_service__["a" /* PropertyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_property_service__["a" /* PropertyService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _d || Object])
], PropertyComponent);

var _a, _b, _c, _d;
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

module.exports = "<p>\r\n  review works!\r\n</p>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/admin/review/review.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReviewComponent; });
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

var ReviewComponent = (function () {
    function ReviewComponent() {
    }
    ReviewComponent.prototype.ngOnInit = function () {
    };
    return ReviewComponent;
}());
ReviewComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-review',
        template: __webpack_require__("../../../../../src/app/components/admin/review/review.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/admin/review/review.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ReviewComponent);

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

module.exports = "<div class=\"container\">\r\n\r\n\t  <div \r\n\t    class=\"alert alert-info\">\r\n\t    <a [routerLink]=\"['..']\" class=\"pull-left\" > <i class=\"glyphicon glyphicon-chevron-left\"></i> </a>\r\n\t    Connected as  <b>{{admin.username}}</b> | role :<b> Admin </b>.<br>\r\n\t  </div>\r\n      <div class=\"panel panel-primary\">\r\n\t  <div class=\"panel-heading\">\r\n\t    <h3 class=\"panel-title\">User's Info</h3>\r\n\t  </div>\r\n\t  <div class=\"panel-body\" style=\"color:black\">\r\n\t    Username : <b>{{user.username}}</b> <br>\r\n\t    Password : <b>{{user.password}}</b><br>\r\n\t    Role : <b>{{user.role}}</b><br>\r\n\t    First name : <b>{{user.firstName}}</b><br>\r\n\t    Last name : <b>{{user.lastName}}</b><br>\r\n\t    Email : <b>{{user.email}}</b><br>\r\n\t    Phone : <b>{{user.phone}}</b><br>\r\n\t    Date of birth : <b>{{user.dob}}</b><br>\r\n\t    Verified : <b>{{user.valid}}</b><br>\r\n\t    Validated By : <b>{{user.validatedBy.username}}</b><br>\r\n\t    <button class=\"btn btn-danger\" (click)=\"deleteUser(user._id)\" >Delete user</button>\r\n\t  </div>\r\n\t</div>\r\n\r\n</div> <!-- /container -->"

/***/ }),

/***/ "../../../../../src/app/components/admin/user/details/details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserDetailsComponent; });
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



var UserDetailsComponent = (function () {
    function UserDetailsComponent(userService, activatedRoute, router) {
        this.userService = userService;
        this.activatedRoute = activatedRoute;
        this.router = router;
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
    return UserDetailsComponent;
}());
UserDetailsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-details',
        template: __webpack_require__("../../../../../src/app/components/admin/user/details/details.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/admin/user/details/details.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object])
], UserDetailsComponent);

var _a, _b, _c;
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

module.exports = "<div class=\"container\">\r\n\t  <div \r\n\t    class=\"alert alert-info\">\r\n      <a [routerLink]=\"['/profile',adminId,'menu']\" class=\"pull-left\" > <i class=\"glyphicon glyphicon-chevron-left\"></i> </a>\r\n\t    Connected as  <b>{{admin.username}}</b> | role :<b> Admin </b>.<br>\r\n\t  </div>\r\n      <div *ngIf=\"errorFlag\"\r\n        class=\"alert alert-danger\">\r\n        {{errorMsg}}\r\n      </div>\r\n      <div *ngIf=\"messageFlag\"\r\n        class=\"alert alert-success\">\r\n        {{message}}\r\n      </div>\r\n      <table class=\"table table-bordered\">\r\n          <tr>\r\n            <th>#</th>\r\n            <th>first name</th>\r\n            <th>last name</th>\r\n            <th>registered as</th>\r\n            <th>actions</th>\r\n          </tr>\r\n          <tr *ngFor=\"let user of users\">\r\n            <td>{{user._id}}</td>\r\n            <td>{{user.firstName}}</td>\r\n            <td>{{user.lastName}}</td>\r\n            <td>{{user.role}}</td>\r\n            <td><button (click)=\"details(user._id)\" class=\"btn btn-primary\" ><i class=\"glyphicon glyphicon-info-sign\" ></i></button> | <button (click)=\"activate(user)\" class=\"btn btn-success\" [disabled]=\"user.valid\" ><i class=\"glyphicon glyphicon-ok\" ></i></button>\r\n            | <button (click)=\"deactivate(user)\" class=\"btn btn-danger\" [disabled]=\"!user.valid\"  ><i class=\"glyphicon glyphicon-remove\" ></i></button></td>\r\n          </tr>\r\n      </table>\r\n\r\n</div> <!-- /container -->"

/***/ }),

/***/ "../../../../../src/app/components/admin/user/user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserComponent; });
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



var UserComponent = (function () {
    function UserComponent(userService, activatedRoute, router) {
        this.userService = userService;
        this.activatedRoute = activatedRoute;
        this.router = router;
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
    return UserComponent;
}());
UserComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-user',
        template: __webpack_require__("../../../../../src/app/components/admin/user/user.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/admin/user/user.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object])
], UserComponent);

var _a, _b, _c;
//# sourceMappingURL=user.component.js.map

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

module.exports = "<div class=\"site-wrapper\">\r\n\r\n      <div class=\"site-wrapper-inner\">\r\n\r\n        <div class=\"cover-container\">\r\n\r\n          <header class=\"masthead clearfix\">\r\n            <div class=\"inner\">\r\n              <a href=\"/\" class=\"masthead-brand\"><img src=\"assets/img/logo.png\"></a>\r\n              <nav class=\"nav nav-masthead\">\r\n                <a class=\"nav-link active\" href=\"/\">Home</a>\r\n                <a class=\"nav-link\" href=\"/login\">Login</a>\r\n                <a class=\"nav-link\" href=\"/register\">Register</a>\r\n              </nav>\r\n            </div>\r\n          </header>\r\n\r\n          <main role=\"main\" class=\"inner cover\">\r\n          \t<p class=\"lead\">\r\n\t\t\t\t      Welcome to home page of :\r\n            </p>\r\n            <p class=\"lead\">\r\n              <img src=\"assets/img/logo.png\" style=\"width:100%\"> \r\n            </p>\r\n            <p class=\"lead\"> Your shortest path to rent/manage properties.</p>\r\n            <p class=\"lead\">\r\n            <a href=\"/login\" class=\"btn btn-lg btn-primary\">Sign in</a> OR <a href=\"/register\" class=\"btn btn-lg btn-secondary\">Register</a>\r\n            </p>\r\n            \r\n\r\n\r\n          </main>\r\n\r\n          <footer class=\"mastfoot\">\r\n            <div class=\"inner\">\r\n              <p> 2017 &copy; property management system </p>\r\n            </div>\r\n          </footer>\r\n\r\n        </div>\r\n\r\n      </div>\r\n\r\n    </div>"

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

module.exports = "<div class=\"container\">\r\n\t  <div  class=\"alert alert-info\">\r\n\t    Connected as  <b>{{user.username}}</b> | role :<b> Admin </b>.\r\n\t  </div>\r\n      <div class=\"row\">\r\n          <div class=\"col-xs-4\">\r\n            <a [routerLink]=\"['/admin',userId,'user']\" class=\"thumbnail\">\r\n              <span class=\"btn btn-lg btn-primary glyphicon glyphicon-user\" ></span>\r\n              <div class=\"caption\">\r\n                <h3>Users Management</h3>\r\n              </div>\r\n            </a>\r\n          </div>\r\n          <div class=\"col-xs-4\">\r\n            <a [routerLink]=\"['/admin',userId,'property']\" class=\"thumbnail\">\r\n              <span class=\"btn btn-lg btn-primary glyphicon glyphicon-home\" ></span>\r\n              <div class=\"caption\">\r\n                <h3>Properties Management</h3>\r\n              </div>\r\n            </a>\r\n          </div>\r\n          <div class=\"col-xs-4\">\r\n            <a [routerLink]=\"['/admin',userId,'review']\" class=\"thumbnail\">\r\n              <span class=\"btn btn-lg btn-primary glyphicon glyphicon-comment\" ></span>\r\n              <div class=\"caption\">\r\n                <h3>Reviews Management</h3>\r\n              </div>\r\n            </a>\r\n          </div>\r\n      </div>\r\n\r\n</div> <!-- /container -->"

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

module.exports = "<p>\r\n  customer-menu works!\r\n</p>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/menu/customer-menu/customer-menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerMenuComponent; });
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

var CustomerMenuComponent = (function () {
    function CustomerMenuComponent() {
    }
    CustomerMenuComponent.prototype.ngOnInit = function () {
    };
    return CustomerMenuComponent;
}());
CustomerMenuComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-customer-menu',
        template: __webpack_require__("../../../../../src/app/components/menu/customer-menu/customer-menu.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/menu/customer-menu/customer-menu.component.css")]
    }),
    __metadata("design:paramtypes", [])
], CustomerMenuComponent);

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

module.exports = "<div [ngSwitch]=\"user.role\">\r\n\t<div *ngSwitchCase=\"'admin'\">\r\n\t\t<app-admin-menu></app-admin-menu>\r\n\t</div>\r\n\t<div *ngSwitchCase=\"'customer'\">\r\n\t\t<app-customer-menu></app-customer-menu>\r\n\t</div>\r\n\t<div *ngSwitchCase=\"'owner'\">\r\n\t\t<app-owner-menu></app-owner-menu>\r\n\t</div>\r\n</div>"

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

module.exports = "<p>\r\n  owner-menu works!\r\n</p>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/menu/owner-menu/owner-menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OwnerMenuComponent; });
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

var OwnerMenuComponent = (function () {
    function OwnerMenuComponent() {
    }
    OwnerMenuComponent.prototype.ngOnInit = function () {
    };
    return OwnerMenuComponent;
}());
OwnerMenuComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-owner-menu',
        template: __webpack_require__("../../../../../src/app/components/menu/owner-menu/owner-menu.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/menu/owner-menu/owner-menu.component.css")]
    }),
    __metadata("design:paramtypes", [])
], OwnerMenuComponent);

//# sourceMappingURL=owner-menu.component.js.map

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

module.exports = "<div class=\"container\">\r\n\t<div *ngIf=\"errorFlag\"\r\n    class=\"alert alert-danger\">\r\n    {{errorMsg}}\r\n    </div>\r\n      <form (ngSubmit) = \"login()\" #f=\"ngForm\" class=\"form-signin\">\r\n        <h2 class=\"form-signin-heading\">Please sign in</h2>\r\n        <label for=\"username\" >Username</label>\r\n        <input type=\"text\" id=\"username\" name=\"username\" ngModel #username=\"ngModel\" class=\"form-control\" placeholder=\"Username\"  required autofocus>\r\n        <span class=\"help-block\" *ngIf=\"!username.valid && username.touched\">\r\n\t      Please enter username!\r\n\t    </span>\r\n        <label for=\"password\" >Password</label>\r\n        <input type=\"password\" id=\"password\" name=\"password\" ngModel #password=\"ngModel\" class=\"form-control\" placeholder=\"Password\"  required>\r\n        <span class=\"help-block\" *ngIf=\"!password.valid && password.touched\">\r\n      Please enter password!\r\n    </span>\r\n        <button class=\"btn btn-lg btn-primary btn-block\" [disabled]=\"!f.valid\" type=\"submit\">Sign in</button>\r\n        <a class=\"btn btn-lg btn-danger btn-block\" [routerLink]=\"['/register']\">Register</a>\r\n      </form>\r\n\r\n</div> <!-- /container -->"

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

module.exports = "<div class=\"container\">\r\n\t  <div *ngIf=\"errorFlag\"\r\n\t    class=\"alert alert-danger\">\r\n\t    {{errorMsg}}\r\n\t  </div>\r\n\t  <div *ngIf=\"messageFlag\"\r\n\t    class=\"alert alert-success\">\r\n\t    {{message}}\r\n\t  </div>\r\n      <form class=\"form-signin\">\r\n        <h2 class=\"form-signin-heading\">Profile Information \r\n        \t<span *ngIf=\"!valid\" class=\"label label-danger\">Unverified</span>\r\n\t\t\t<span *ngIf=\"valid\" class=\"label label-success\">Verified</span>\r\n        \t</h2>\r\n        <label for=\"firstName\" >First Name</label>\r\n        <input type=\"text\" id=\"firstName\" [(ngModel)]=\"firstName\" name=\"firstName\" class=\"form-control\" placeholder=\"First Name\" required>\r\n        <label for=\"lastName\" >Last Name</label>\r\n        <input type=\"text\" id=\"lastName\" name=\"lastName\" [(ngModel)]=\"lastName\" class=\"form-control\" placeholder=\"Last Name\" required>\r\n        <label for=\"email\" >Email</label>\r\n        <input type=\"email\" id=\"email\" name=\"email\" [(ngModel)]=\"email\" class=\"form-control\" placeholder=\"Email\" required>\r\n        <label for=\"phone\" >Phone</label>\r\n        <input type=\"text\" id=\"phone\" name=\"phone\" [(ngModel)]=\"phone\" class=\"form-control\" placeholder=\"Phone\" required>\r\n        <label for=\"dob\" >Date Of Birth</label>\r\n        <input type=\"string\" id=\"dob\" name=\"dob\" [(ngModel)]=\"dob\" class=\"form-control\" placeholder=\"dd/mm/yyyy\" required>\r\n        <button class=\"btn btn-lg btn-primary btn-block\" (click)=\"update()\">Save</button>\r\n        <button class=\"btn btn-lg btn-info btn-block\" [disabled]=\"!valid\" (click)=\"goToMenu()\">Go to Menu</button>     \r\n        <button class=\"btn btn-lg btn-danger btn-block\" (click)=\"logout()\">Logout</button>\r\n      </form>\r\n\r\n</div> <!-- /container -->"

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

module.exports = "<div class=\"container\">\r\n\t  <div *ngIf=\"errorFlag\"\r\n\t    class=\"alert alert-danger\">\r\n\t    {{errorMsg}}\r\n\t  </div>\r\n      <form class=\"form-signin\" (ngSubmit) = \"register()\" #f=\"ngForm\">\r\n        <h2 class=\"form-signin-heading\">Register as new user</h2>\r\n        <label for=\"username\" >Username</label>\r\n        <input type=\"text\" id=\"username\" name=\"username\" class=\"form-control\" placeholder=\"Username\" ngModel #username=\"ngModel\" required autofocus>\r\n        <span class=\"help-block\" *ngIf=\"!username.valid && username.touched\">\r\n\t      Please enter username!\r\n\t  \t</span>\r\n        <label for=\"inputPassword\" >Password</label>\r\n        <input type=\"password\" id=\"inputPassword\" name=\"password\" class=\"form-control\" placeholder=\"Password\" ngModel #password=\"ngModel\" required>\r\n        <span class=\"help-block\" *ngIf=\"!password.valid && username.touched\">\r\n\t      Please enter password!\r\n\t  \t</span>\r\n        <label for=\"inputPassword2\" >Password confirmation</label>\r\n        <input type=\"password\" id=\"inputPassword2\" name=\"pwdconfirmation\" class=\"form-control\" placeholder=\"Password confirmation\" ngModel #pwdconfirmation=\"ngModel\" required>\r\n        <span class=\"help-block\" *ngIf=\"!pwdconfirmation.valid && pwdconfirmation.touched\">\r\n\t      Please enter password confirmation!\r\n\t  </span>\r\n        <label for=\"registerAs\" >Register As</label>\r\n        <select id=\"registerAs\" class=\"form-control\" name=\"registerAs\" ngModel #registerAs=\"ngModel\" required >\r\n        \t<option value=\"owner\" >Owner</option>\r\n        \t<option value=\"customer\">Customer</option>\r\n        </select>\r\n        <button class=\"btn btn-lg btn-primary btn-block\" type=\"submit\">Next</button>        \r\n        <button class=\"btn btn-lg btn-primary btn-block\" (click)=\"cancel()\">Cancel</button>\r\n      </form>\r\n\r\n</div> <!-- /container -->"

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
        return this._http.post(this.baseUrl + '/api/property/owner/' + ownerId, property)
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
        return this._http.put(this.baseUrl + '/api/property/' + propertyId, property)
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