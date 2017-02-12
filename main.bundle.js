webpackJsonp([1,4],{

/***/ 291:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 291;


/***/ }),

/***/ 292:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(381);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(409);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(402);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/Users/CasStef/WebstormProjects/test-deploy/manakn-web-test/src/main.js.map

/***/ }),

/***/ 401:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(473),
            styles: [__webpack_require__(466)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=/Users/CasStef/WebstormProjects/test-deploy/manakn-web-test/src/app.component.js.map

/***/ }),

/***/ 402:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(371);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(377);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(401);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__header_header_component__ = __webpack_require__(403);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__sections_whatwedo_section_component__ = __webpack_require__(408);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__sections_testimonials_section_component__ = __webpack_require__(407);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__sections_product_section_component__ = __webpack_require__(406);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__sections_about_section_component__ = __webpack_require__(404);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__sections_contact_section_component__ = __webpack_require__(405);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_9__sections_about_section_component__["a" /* AboutSectionComponent */],
                __WEBPACK_IMPORTED_MODULE_10__sections_contact_section_component__["a" /* ContactSectionComponent */],
                __WEBPACK_IMPORTED_MODULE_5__header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_8__sections_product_section_component__["a" /* ProductSectionComponent */],
                __WEBPACK_IMPORTED_MODULE_7__sections_testimonials_section_component__["a" /* TestimonialsSectionComponent */],
                __WEBPACK_IMPORTED_MODULE_6__sections_whatwedo_section_component__["a" /* WhatwedoSectionComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/Users/CasStef/WebstormProjects/test-deploy/manakn-web-test/src/app.module.js.map

/***/ }),

/***/ 403:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = (function () {
    function HeaderComponent() {
    }
    HeaderComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Component */])({
            selector: 'app-header',
            template: __webpack_require__(474),
            styles: [__webpack_require__(467)]
        }), 
        __metadata('design:paramtypes', [])
    ], HeaderComponent);
    return HeaderComponent;
}());
//# sourceMappingURL=/Users/CasStef/WebstormProjects/test-deploy/manakn-web-test/src/header.component.js.map

/***/ }),

/***/ 404:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutSectionComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutSectionComponent = (function () {
    function AboutSectionComponent() {
    }
    AboutSectionComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Component */])({
            selector: 'app-about-section',
            template: __webpack_require__(475),
            styles: [__webpack_require__(468)]
        }), 
        __metadata('design:paramtypes', [])
    ], AboutSectionComponent);
    return AboutSectionComponent;
}());
//# sourceMappingURL=/Users/CasStef/WebstormProjects/test-deploy/manakn-web-test/src/about-section.component.js.map

/***/ }),

/***/ 405:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactSectionComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactSectionComponent = (function () {
    function ContactSectionComponent() {
    }
    ContactSectionComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Component */])({
            selector: 'app-contact-section',
            template: __webpack_require__(476),
            styles: [__webpack_require__(469)]
        }), 
        __metadata('design:paramtypes', [])
    ], ContactSectionComponent);
    return ContactSectionComponent;
}());
//# sourceMappingURL=/Users/CasStef/WebstormProjects/test-deploy/manakn-web-test/src/contact-section.component.js.map

/***/ }),

/***/ 406:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductSectionComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProductSectionComponent = (function () {
    function ProductSectionComponent() {
    }
    ProductSectionComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Component */])({
            selector: 'app-product-section',
            template: __webpack_require__(477),
            styles: [__webpack_require__(470)]
        }), 
        __metadata('design:paramtypes', [])
    ], ProductSectionComponent);
    return ProductSectionComponent;
}());
//# sourceMappingURL=/Users/CasStef/WebstormProjects/test-deploy/manakn-web-test/src/product-section.component.js.map

/***/ }),

/***/ 407:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestimonialsSectionComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TestimonialsSectionComponent = (function () {
    function TestimonialsSectionComponent() {
    }
    TestimonialsSectionComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Component */])({
            selector: 'app-testimonials-section',
            template: __webpack_require__(478),
            styles: [__webpack_require__(471)]
        }), 
        __metadata('design:paramtypes', [])
    ], TestimonialsSectionComponent);
    return TestimonialsSectionComponent;
}());
//# sourceMappingURL=/Users/CasStef/WebstormProjects/test-deploy/manakn-web-test/src/testimonials-section.component.js.map

/***/ }),

/***/ 408:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WhatwedoSectionComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WhatwedoSectionComponent = (function () {
    function WhatwedoSectionComponent() {
    }
    WhatwedoSectionComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Component */])({
            selector: 'app-whatwedo-section',
            template: __webpack_require__(479),
            styles: [__webpack_require__(472)]
        }), 
        __metadata('design:paramtypes', [])
    ], WhatwedoSectionComponent);
    return WhatwedoSectionComponent;
}());
//# sourceMappingURL=/Users/CasStef/WebstormProjects/test-deploy/manakn-web-test/src/whatwedo-section.component.js.map

/***/ }),

/***/ 409:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=/Users/CasStef/WebstormProjects/test-deploy/manakn-web-test/src/environment.js.map

/***/ }),

/***/ 466:
/***/ (function(module, exports) {

module.exports = "/* Small devices (landscape phones, 576px and up) */\n@media (min-width: 576px) and (max-width: 767px) {\n\n}\n\n/* Medium devices (tablets, 768px and up) */\n@media (min-width: 768px) and (max-width: 991px) {\n\n}\n\n/* Large devices (desktops, 992px and up)*/\n@media (min-width: 992px) and (max-width: 1199px) {\n\n}\n\n/* Extra large devices (large desktops, 1200px and up) */\n@media (min-width: 1200px) {\n\n}\n"

/***/ }),

/***/ 467:
/***/ (function(module, exports) {

module.exports = "#home {\n  padding: 5% 12%;\n  color: white;\n  font-size: medium;\n}\n\n.home-page-bg {\n  background-image: url(../../assets/images/header_bg.jpg);\n  background-size: cover;\n}\n\n.nav-item:hover {\n  background-color: #3b4e5b;\n  border-top-left-radius: 15% 50%;\n  border-top-right-radius: 15% 50%;\n  border-bottom-right-radius: 15% 50%;\n  border-bottom-left-radius: 15% 50%;\n}\n\n.nav-pills .nav-link {\n  font-size: 14px;\n  color: white;\n  border-top-left-radius: 15% 50%;\n  border-top-right-radius: 15% 50%;\n  border-bottom-right-radius: 15% 50%;\n  border-bottom-left-radius: 15% 50%;\n  background-color: transparent;\n}\n\n.nav-pills .nav-item.show .nav-link, .nav-pills .nav-link.active {\n  background-color: #3b4e5b;\n}\n\n.btn-lg {\n  background-color: transparent;\n  border-color: white;\n}\n\n.jumbotron {\n  background-color: transparent;\n}\n\n.jumbotron h1 {\n  color: white;\n}\n\n.jumbotron p {\n  color: white;\n}\n"

/***/ }),

/***/ 468:
/***/ (function(module, exports) {

module.exports = "#about {\n  background-image: url(../../assets/images/dark-bg.png);\n  color: lightgray;\n  padding: 5% 20%;\n}\n\n#about h1 {\n  color: #d8f2c7;\n}\n\n#about p {\n  font-size: large;\n}\n"

/***/ }),

/***/ 469:
/***/ (function(module, exports) {

module.exports = "#contact {\n  background-image: url(../../assets/images/dark-bg.png);\n  color: lightgray;\n  padding: 2% 20% 5%;\n}\n\n#contact h3 {\n  color: #d8f2c7;\n}\n\n#contact p {\n  font-size: large;\n}\n\n#contact a {\n  color: lightgray;\n}\n\n#contact a:hover, a:visited {\n  text-decoration: none;\n}\n"

/***/ }),

/***/ 470:
/***/ (function(module, exports) {

module.exports = "#product {\n  color: lightgray;\n  padding: 5% 20%;\n}\n\n#product h1 {\n  font-size: 3em;\n  color: #3b4e5b;\n}\n\n#product p {\n  font-size: x-large;\n}\n"

/***/ }),

/***/ 471:
/***/ (function(module, exports) {

module.exports = "#testimonials {\n  color: #3b4e5b;\n  padding: 5% 25%;\n}\n\n.testimonials-page-bg {\n  background-image: url(../../assets/images/testemonials_full.jpg);\n  background-size: cover;\n}\n"

/***/ }),

/***/ 472:
/***/ (function(module, exports) {

module.exports = "#whatwedo {\n  padding: 5% 20%;\n  color: lightgray;\n}\n\n#whatwedo p {\n  font-size: large;\n}\n\n#whatwedo h1 {\n  font-size: 3em;\n  color: #3b4e5b;\n}\n"

/***/ }),

/***/ 473:
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<app-whatwedo-section></app-whatwedo-section>\n<app-testimonials-section></app-testimonials-section>\n<app-product-section></app-product-section>\n<app-about-section></app-about-section>\n<app-contact-section></app-contact-section>\n"

/***/ }),

/***/ 474:
/***/ (function(module, exports) {

module.exports = "<section id=\"home\" class=\"home-page-bg\">\n  <section class=\"row\">\n    <aside class=\"col\">\n      <img class=\"img-fluid\" src=\"../../assets/images/logo.png\">\n    </aside>\n    <aside class=\"col\">\n      <ul class=\"nav nav-pills row justify-content-center\">\n        <li class=\"nav-item text-uppercase\">\n          <a class=\"nav-link\" href=\"#home\" title=\"Home\">Home</a>\n        </li>\n        <li class=\"nav-item text-uppercase\">\n          <a class=\"nav-link\"  href=\"#whatwedo\" title=\"What We Do\">What We Do</a>\n        </li>\n        <li class=\"nav-item text-uppercase\">\n          <a class=\"nav-link\" href=\"#product\" title=\"Product\">Product</a>\n        </li>\n        <li class=\"nav-item text-uppercase\">\n          <a class=\"nav-link\" href=\"#about\" title=\"About Us\">About Us</a>\n        </li>\n        <li class=\"nav-item text-uppercase\">\n          <a class=\"nav-link\" href=\"#contact\" title=\"Contact\">Contact</a>\n        </li>\n      </ul>\n    </aside>\n  </section>\n  <section class=\"jumbotron-fluid\">\n    <h1 class=\"display-3\">Hello, world!</h1>\n    <a class=\"btn btn-primary btn-lg text-uppercase\" href=\"#\" role=\"button\">Learn more</a>\n  </section>\n</section>\n"

/***/ }),

/***/ 475:
/***/ (function(module, exports) {

module.exports = "<section id=\"about\" class=\"about\">\n  <h1>ABOUT US</h1>\n  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aperiam consectetur cupiditate dolorem fuga fugiat hic labore magni nobis nulla, odit.</p>\n  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius eos, sed? Architecto aspernatur cum dignissimos dolore ducimus ea expedita facilis, incidunt inventore itaque iure laborum molestias necessitatibus, perferendis porro possimus totam? Eum quasi suscipit totam. </p>\n</section>\n"

/***/ }),

/***/ 476:
/***/ (function(module, exports) {

module.exports = "<section id=\"contact\" class=\"contact\">\n  <section class=\"row justify-content-center text-center\">\n    <aside class=\"col\">\n      <img class=\"img-fluid\" src=\"../../assets/images/email.png\">\n      <h3>EMAIL</h3>\n      <p><a href=\"mailto:manakn@gmail.com\">manakn@gmail.com</a></p>\n    </aside>\n    <aside class=\"col\">\n      <img class=\"img-fluid\" src=\"../../assets/images/location.png\">\n      <h3>ADDRESS</h3>\n      <p>1010 Camden Ave.,</p>\n      <p>Toronto, ON</p>\n    </aside>\n    <aside class=\"col\">\n      <img class=\"img-fluid\" src=\"../../assets/images/phone.png\">\n      <h3>PHONE</h3>\n      <p>+18-889-997-070</p>\n    </aside>\n  </section>\n</section>\n"

/***/ }),

/***/ 477:
/***/ (function(module, exports) {

module.exports = "\n<section id=\"product\">\n  <section class=\"row justify-content-center\">\n    <aside class=\"col\">\n      <div class=\"row\">\n        <h1>Haachy is born</h1>\n      </div>\n      <div class=\"row\">\n        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aperiam consectetur cupiditate dolorem fuga fugiat hic labore magni nobis nulla, odit.</p>\n      </div>\n      <br>\n      <div class=\"row\">\n        <img class=\"img-fluid\" src=\"../../assets/images/download.png\">\n      </div>\n      <br>\n    </aside>\n    <aside class=\"col justify-content-center\">\n      <img class=\"img-fluid\" src=\"../../assets/images/iphone.png\">\n    </aside>\n  </section>\n</section>\n"

/***/ }),

/***/ 478:
/***/ (function(module, exports) {

module.exports = "<section id=\"testimonials\" class=\"testimonials-page-bg\">\n  <section class=\"row justify-content-center\">\n    <h1 class=\"text-center text-uppercase\">Testimonials</h1>\n  </section>\n  <section class=\"row justify-content-center\">\n    <div class=\"media\">\n      <img class=\"d-flex mr-3\" src=\"../../assets/images/man.png\" alt=\"person's image\">\n      <div class=\"media-body\">\n        <h2 class=\"mt-0\">John Doe <small>ACTOR</small></h2>\n        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.\n      </div>\n    </div>\n  </section>\n</section>\n"

/***/ }),

/***/ 479:
/***/ (function(module, exports) {

module.exports = "\n<section id=\"whatwedo\">\n  <section class=\"row justify-content-center container-fluid\">\n    <aside class=\"col\">\n      <div class=\"row justify-content-center\">\n        <img class=\"img-fluid\" src=\"../../assets/images/manakn.png\">\n      </div>\n    </aside>\n    <aside class=\"col\">\n      <h1 class=\"text-center text-uppercase\">What We Do</h1>\n      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet eum eveniet ex fuga, impedit libero modi nulla repellat repellendus soluta?</p>\n      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium architecto assumenda aut autem debitis deleniti exercitationem facilis inventore iure laborum libero magni omnis quaerat quas quos, recusandae repudiandae, rerum, ut veritatis vero! Aspernatur aut, commodi dolore, doloremque eligendi eos explicabo harum iusto, laudantium maiores molestiae nostrum sequi voluptas. Laboriosam, repudiandae!</p>\n      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, quam?</p>\n    </aside>\n  </section>\n</section>\n"

/***/ }),

/***/ 494:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(292);


/***/ })

},[494]);
//# sourceMappingURL=main.bundle.map