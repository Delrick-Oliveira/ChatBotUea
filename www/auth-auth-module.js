(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["auth-auth-module"],{

/***/ "./src/app/auth/auth.module.ts":
/*!*************************************!*\
  !*** ./src/app/auth/auth.module.ts ***!
  \*************************************/
/*! exports provided: AuthPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthPageModule", function() { return AuthPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _auth_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth.page */ "./src/app/auth/auth.page.ts");







var routes = [
    {
        path: '',
        component: _auth_page__WEBPACK_IMPORTED_MODULE_6__["AuthPage"]
    }
];
var AuthPageModule = /** @class */ (function () {
    function AuthPageModule() {
    }
    AuthPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_auth_page__WEBPACK_IMPORTED_MODULE_6__["AuthPage"]]
        })
    ], AuthPageModule);
    return AuthPageModule;
}());



/***/ }),

/***/ "./src/app/auth/auth.page.html":
/*!*************************************!*\
  !*** ./src/app/auth/auth.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>Login</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content padding>\r\n  <form #f=\"ngForm\" (ngSubmit)=\"onSubmit(f)\">\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col size-sm=\"6\" offset-sm=\"3\">\r\n          <ion-list>\r\n            <ion-item>\r\n              <ion-label position=\"floating\">E-mail</ion-label>\r\n              <ion-input\r\n                type=\"email\"\r\n                ngModel\r\n                name=\"email\"\r\n                required\r\n                email\r\n                #emailCtrl=\"ngModel\"\r\n              ></ion-input>\r\n            </ion-item>\r\n            <ion-item\r\n              *ngIf=\"!emailCtrl.valid && emailCtrl.touched\"\r\n              lines=\"none\"\r\n            >\r\n              <ion-label color=\"danger\"\r\n                >Should be a valid email adddress !</ion-label\r\n              >\r\n            </ion-item>\r\n            <ion-item>\r\n              <ion-label position=\"floating\">Password</ion-label>\r\n              <ion-input\r\n                type=\"password\"\r\n                ngModel\r\n                name=\"password\"\r\n                ngModel\r\n                required\r\n                minlength=\"6\"\r\n                #passwordCtrl=\"ngModel\"\r\n              ></ion-input>\r\n            </ion-item>\r\n            <ion-item\r\n              *ngIf=\"!passwordCtrl.valid && passwordCtrl.touched\"\r\n              lines=\"none\"\r\n            >\r\n              <ion-label color=\"danger\">Should be a valid password !</ion-label>\r\n            </ion-item>\r\n          </ion-list>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col size-sm=\"6\" offset-sm=\"3\">\r\n          <ion-button\r\n            color=\"primary\"\r\n            padding\r\n            expand=\"block\"\r\n            type=\"submit\"\r\n            [disabled]=\"!f.valid\"\r\n          >\r\n            Login\r\n          </ion-button>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </form>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/auth/auth.page.scss":
/*!*************************************!*\
  !*** ./src/app/auth/auth.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvYXV0aC5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/auth/auth.page.ts":
/*!***********************************!*\
  !*** ./src/app/auth/auth.page.ts ***!
  \***********************************/
/*! exports provided: AuthPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthPage", function() { return AuthPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");





var AuthPage = /** @class */ (function () {
    function AuthPage(authService, router, loadingCtrl) {
        this.authService = authService;
        this.router = router;
        this.loadingCtrl = loadingCtrl;
        this.isLoading = false;
        this.isLogin = false;
    }
    AuthPage.prototype.ngOnInit = function () { };
    AuthPage.prototype.onLogin = function () {
        var _this = this;
        this.isLoading = true;
        this.authService.login();
        this.loadingCtrl
            .create({
            keyboardClose: true,
            message: 'Logging in ...'
        })
            .then(function (loadingElem) {
            loadingElem.present();
            setTimeout(function () {
                _this.isLoading = false;
                loadingElem.dismiss();
                _this.router.navigateByUrl('/ajuda');
            }, 1500);
        });
    };
    AuthPage.prototype.onSubmit = function (form) {
        if (!form.valid) {
            return;
        }
        this.onLogin();
        form.reset();
    };
    AuthPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-auth',
            template: __webpack_require__(/*! ./auth.page.html */ "./src/app/auth/auth.page.html"),
            styles: [__webpack_require__(/*! ./auth.page.scss */ "./src/app/auth/auth.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"]])
    ], AuthPage);
    return AuthPage;
}());



/***/ })

}]);
//# sourceMappingURL=auth-auth-module.js.map