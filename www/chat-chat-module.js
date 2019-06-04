(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chat-chat-module"],{

/***/ "./src/app/chat/chat.module.ts":
/*!*************************************!*\
  !*** ./src/app/chat/chat.module.ts ***!
  \*************************************/
/*! exports provided: ChatPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatPageModule", function() { return ChatPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _chat_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./chat.page */ "./src/app/chat/chat.page.ts");







var routes = [
    {
        path: '',
        component: _chat_page__WEBPACK_IMPORTED_MODULE_6__["ChatPage"]
    }
];
var ChatPageModule = /** @class */ (function () {
    function ChatPageModule() {
    }
    ChatPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_chat_page__WEBPACK_IMPORTED_MODULE_6__["ChatPage"]]
        })
    ], ChatPageModule);
    return ChatPageModule;
}());



/***/ }),

/***/ "./src/app/chat/chat.page.html":
/*!*************************************!*\
  !*** ./src/app/chat/chat.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>\r\n      <div class=\"title-block\">\r\n        <ion-icon name=\"chatboxes\" color=\"d3blue\" class=\"title-icon\"></ion-icon>\r\n        <ion-text color=\"d3blue\" class=\"title-text\">Chat</ion-text>\r\n      </div>\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content padding-vertical fullscreen>\r\n  <div\r\n    id=\"chat-parent\"\r\n    class=\"bg-image\"\r\n    [ngClass]=\"{ 'bg-image-X': phone_model == 'iPhone X' }\"\r\n  >\r\n    <div id=\"chat-container\">\r\n      <ion-row\r\n        *ngFor=\"let conv of conversation; let i = index\"\r\n        class=\"full no-padding\"\r\n      >\r\n        <ion-col\r\n          class=\"no-padding chat-row\"\r\n          [ngClass]=\"{ reverse: conv.sender }\"\r\n        >\r\n          <div class=\"avatar-parent\">\r\n            <div class=\"avatar-border\"></div>\r\n            <img [src]=\"conv.image\" class=\"avatar\" />\r\n          </div>\r\n          <div\r\n            [ngClass]=\"{\r\n              'name-row-parent-right': conv.sender,\r\n              'name-row-parent-left': !conv.sender\r\n            }\"\r\n          >\r\n            <div\r\n              class=\"no-padding\"\r\n              [ngClass]=\"{\r\n                'name-row-right': conv.sender,\r\n                'name-row-left': !conv.sender\r\n              }\"\r\n            >\r\n              {{ conv.sender ? 'Martha' : 'Shawn' }}\r\n              <div\r\n                [ngClass]=\"{\r\n                  'timer-right': conv.sender,\r\n                  'timer-left': !conv.sender\r\n                }\"\r\n              >\r\n                {{ i + 5 }} mins ago\r\n                <ion-icon\r\n                  *ngIf=\"conv.sender && conv.sent\"\r\n                  name=\"checkmark\"\r\n                  [color]=\"conv.read ? 'd3green' : 'light'\"\r\n                  class=\"first-tick\"\r\n                ></ion-icon>\r\n              </div>\r\n              <div\r\n                [ngClass]=\"{\r\n                  'reverse-arc-right': conv.sender,\r\n                  'reverse-arc-left': !conv.sender\r\n                }\"\r\n              >\r\n                <div\r\n                  [ngClass]=\"{\r\n                    'reverse-arc-color-right': conv.sender,\r\n                    'reverse-arc-color-left': !conv.sender\r\n                  }\"\r\n                ></div>\r\n              </div>\r\n            </div>\r\n            <div\r\n              class=\"no-padding\"\r\n              [ngClass]=\"{\r\n                'message-row-right': conv.sender,\r\n                'message-row-left': !conv.sender\r\n              }\"\r\n            >\r\n              <ion-text no-margin class=\"text\">{{ conv.text }}</ion-text>\r\n            </div>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n<ion-footer\r\n  translucent\r\n  [ngClass]=\"{ 'custom-footer': phone_model == 'iPhone X' }\"\r\n>\r\n  <ion-row\r\n    class=\"input-position\"\r\n    [ngClass]=\"{ 'custom-footer-row': phone_model == 'iPhone X' }\"\r\n  >\r\n    <ion-col size=\"9\">\r\n      <ion-input\r\n        class=\"input restrict\"\r\n        type=\"text\"\r\n        placeholder=\"Type a message\"\r\n        [(ngModel)]=\"input\"\r\n        padding-start\r\n      >\r\n      </ion-input>\r\n    </ion-col>\r\n    <ion-col size=\"3\">\r\n      <ion-button\r\n        shape=\"round\"\r\n        class=\"send-button\"\r\n        color=\"d3blue\"\r\n        (click)=\"send()\"\r\n      >\r\n        <ion-text color=\"light\">SEND</ion-text>\r\n      </ion-button>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-footer>\r\n"

/***/ }),

/***/ "./src/app/chat/chat.page.scss":
/*!*************************************!*\
  !*** ./src/app/chat/chat.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".menu {\n  color: white !important; }\n\n.white {\n  color: white !important; }\n\n.full {\n  display: block;\n  width: 100%;\n  margin-top: 25px; }\n\n.left {\n  float: left; }\n\n.avatar {\n  width: calc(16vw - 4px);\n  height: calc(16vw - 4px);\n  border-radius: calc(8vw - 2px);\n  z-index: 2; }\n\n.restrict {\n  --height: 33px; }\n\n.input {\n  background-color: white;\n  border-radius: 20px;\n  font-size: 0.9em !important;\n  box-shadow: 0 0 10px #444; }\n\n.animate {\n  -webkit-animation-name: fadeIn;\n          animation-name: fadeIn;\n  -webkit-animation-duration: 1s;\n          animation-duration: 1s;\n  transition: 0.1s; }\n\n.right {\n  float: right; }\n\n.text {\n  font-size: 16px; }\n\n.card {\n  margin-bottom: 9px;\n  max-width: 80%;\n  padding: 12px;\n  border-radius: 6px;\n  border: 0.5px solid #d2d2d2;\n  background-color: white; }\n\n.item-inner {\n  height: 33px; }\n\n@-webkit-keyframes fadeIn {\n  0% {\n    -webkit-transform: translateY(15px);\n            transform: translateY(15px);\n    opacity: 0; }\n  100% {\n    -webkit-transform: translateY(0px);\n            transform: translateY(0px);\n    opacity: 1; } }\n\n@keyframes fadeIn {\n  0% {\n    -webkit-transform: translateY(15px);\n            transform: translateY(15px);\n    opacity: 0; }\n  100% {\n    -webkit-transform: translateY(0px);\n            transform: translateY(0px);\n    opacity: 1; } }\n\n.input-position {\n  background: linear-gradient(transparent, rgba(0, 0, 0, 0.8)); }\n\n.custom-footer-row {\n  height: 65px; }\n\n.send-button {\n  height: 36px;\n  width: 90%;\n  box-shadow: 0 0 10px #444;\n  border-radius: 50%; }\n\n.bg-image {\n  height: 100%;\n  width: 100%;\n  background-image: url('skyline.jpg');\n  background-size: cover;\n  background-position: center;\n  padding: 60px 15px 55px 15px;\n  overflow: scroll; }\n\n.bg-image-X {\n  padding: 80px 15px 75px 15px; }\n\n.chat-item {\n  --background: transparent; }\n\nion-content {\n  --padding-top: 0;\n  --padding-bottom: 0;\n  padding-top: 0;\n  padding-bottom: 0; }\n\n.no-padding {\n  --padding: 0;\n  padding: 0; }\n\n.chat-row {\n  display: flex;\n  flex-direction: row; }\n\n.reverse {\n  flex-direction: row-reverse; }\n\n.name-row-left {\n  background: white;\n  padding: 5px 10px 5px 9vw;\n  margin-left: -8vw;\n  z-index: 1;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  border-top-right-radius: 16px;\n  font-size: 12px;\n  position: relative;\n  height: 6vw; }\n\n.name-row-right {\n  background: white;\n  padding: 5px 9vw 5px 10px;\n  margin-right: -8vw;\n  z-index: 1;\n  text-align: right;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  border-top-left-radius: 16px;\n  font-size: 12px;\n  position: relative;\n  height: 6vw; }\n\n.name-row-parent-left {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start; }\n\n.name-row-parent-right {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end; }\n\n.message-row-left {\n  background: #0c96df;\n  padding: 7px 15px 8px 11vw;\n  margin-left: -8vw;\n  min-height: 10vw;\n  display: flex;\n  align-items: center;\n  border-top-right-radius: 5vw;\n  border-bottom-right-radius: 5vw;\n  color: white;\n  position: relative; }\n\n.message-row-right {\n  background: #00c06d;\n  padding: 7px 15vw 8px 11px;\n  margin-right: -8vw;\n  min-height: 10vw;\n  display: flex;\n  align-items: center;\n  border-top-left-radius: 5vw;\n  border-bottom-left-radius: 5vw;\n  color: white;\n  position: relative; }\n\n.avatar-parent {\n  z-index: 2;\n  border-radius: 8vw;\n  min-width: 16vw;\n  height: 16vw;\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center; }\n\n.avatar-border {\n  position: absolute;\n  width: 16vw;\n  height: 16vw;\n  top: 0;\n  left: 0;\n  border: 1vw solid white;\n  border-radius: 50%;\n  box-shadow: none;\n  outline: none; }\n\n.reverse-arc-left {\n  width: 6vw;\n  height: 4vw;\n  position: absolute;\n  background: white;\n  left: 5.8vw;\n  bottom: -4vw;\n  display: flex;\n  justify-content: flex-end;\n  border-bottom-right-radius: 4vw; }\n\n.reverse-arc-color-left {\n  width: 4vw;\n  height: 4vw;\n  background: #0c96df;\n  border-top-left-radius: 4vw;\n  border-bottom-right-radius: 2vw; }\n\n.reverse-arc-right {\n  width: 6vw;\n  height: 4vw;\n  position: absolute;\n  background: white;\n  right: 5.8vw;\n  bottom: -4vw;\n  display: flex;\n  justify-content: flex-start;\n  border-bottom-left-radius: 4vw; }\n\n#chat-parent {\n  scroll-behavior: smooth; }\n\n.reverse-arc-color-right {\n  width: 4vw;\n  height: 4vw;\n  background: #00c06d;\n  border-top-right-radius: 4vw;\n  border-bottom-left-radius: 3vw; }\n\n.timer-left {\n  position: absolute;\n  right: -75px;\n  color: rgba(255, 255, 255, 0.7);\n  font-size: 12px;\n  top: 4px; }\n\n.timer-right {\n  position: absolute;\n  left: -75px;\n  color: rgba(255, 255, 255, 0.7);\n  font-size: 12px;\n  top: 4px; }\n\n.title-block {\n  display: flex;\n  justify-content: center;\n  align-content: center; }\n\n.title-icon {\n  font-size: 32px; }\n\n.title-text {\n  padding-left: 5px;\n  align-self: center; }\n\n.first-tick {\n  font-size: 25px;\n  position: absolute;\n  left: -24px;\n  top: -4px; }\n\n.second-tick {\n  font-size: 25px;\n  position: absolute;\n  left: -28px;\n  top: -4px; }\n\n.custom-footer {\n  height: 65px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhdC9DOlxcVXNlcnNcXFBSRURBVE9SXFxEb2N1bWVudHNcXEdpdEh1YlxcQ2hhdEJvdFVlYS9zcmNcXGFwcFxcY2hhdFxcY2hhdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx1QkFBdUIsRUFBQTs7QUFFekI7RUFDRSx1QkFBdUIsRUFBQTs7QUFFekI7RUFDRSxjQUFjO0VBQ2QsV0FBVztFQUNYLGdCQUFnQixFQUFBOztBQUVsQjtFQUNFLFdBQVcsRUFBQTs7QUFFYjtFQUNFLHVCQUF1QjtFQUN2Qix3QkFBd0I7RUFDeEIsOEJBQThCO0VBQzlCLFVBQVUsRUFBQTs7QUFFWjtFQUNFLGNBQVMsRUFBQTs7QUFFWDtFQUNFLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsMkJBQTJCO0VBQzNCLHlCQUF5QixFQUFBOztBQUUzQjtFQUNFLDhCQUFzQjtVQUF0QixzQkFBc0I7RUFDdEIsOEJBQXNCO1VBQXRCLHNCQUFzQjtFQUN0QixnQkFBZ0IsRUFBQTs7QUFFbEI7RUFDRSxZQUFZLEVBQUE7O0FBRWQ7RUFDRSxlQUFlLEVBQUE7O0FBRWpCO0VBQ0Usa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLDJCQUFzQztFQUN0Qyx1QkFBdUIsRUFBQTs7QUFFekI7RUFDRSxZQUFZLEVBQUE7O0FBR2Q7RUFDRTtJQUNFLG1DQUEyQjtZQUEzQiwyQkFBMkI7SUFDM0IsVUFBVSxFQUFBO0VBRVo7SUFDRSxrQ0FBMEI7WUFBMUIsMEJBQTBCO0lBQzFCLFVBQVUsRUFBQSxFQUFBOztBQVBkO0VBQ0U7SUFDRSxtQ0FBMkI7WUFBM0IsMkJBQTJCO0lBQzNCLFVBQVUsRUFBQTtFQUVaO0lBQ0Usa0NBQTBCO1lBQTFCLDBCQUEwQjtJQUMxQixVQUFVLEVBQUEsRUFBQTs7QUFHZDtFQUNFLDREQUE0RCxFQUFBOztBQUU5RDtFQUNFLFlBQVksRUFBQTs7QUFFZDtFQUNFLFlBQVk7RUFDWixVQUFV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akI7RUFDRSxpQkFBaUI7RUFDakIsa0JBQWtCLEVBQUE7O0FBRXBCO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsU0FBUyxFQUFBOztBQUVYO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsU0FBUyxFQUFBOztBQUVYO0VBQ0UsWUFBWSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvY2hhdC9jaGF0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tZW51IHtcclxuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxufVxyXG4ud2hpdGUge1xyXG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG59XHJcbi5mdWxsIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW4tdG9wOiAyNXB4O1xyXG59XHJcbi5sZWZ0IHtcclxuICBmbG9hdDogbGVmdDtcclxufVxyXG4uYXZhdGFyIHtcclxuICB3aWR0aDogY2FsYygxNnZ3IC0gNHB4KTtcclxuICBoZWlnaHQ6IGNhbGMoMTZ2dyAtIDRweCk7XHJcbiAgYm9yZGVyLXJhZGl1czogY2FsYyg4dncgLSAycHgpO1xyXG4gIHotaW5kZXg6IDI7XHJcbn1cclxuLnJlc3RyaWN0IHtcclxuICAtLWhlaWdodDogMzNweDtcclxufVxyXG4uaW5wdXQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgZm9udC1zaXplOiAwLjllbSAhaW1wb3J0YW50O1xyXG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4ICM0NDQ7XHJcbn1cclxuLmFuaW1hdGUge1xyXG4gIGFuaW1hdGlvbi1uYW1lOiBmYWRlSW47XHJcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcclxuICB0cmFuc2l0aW9uOiAwLjFzO1xyXG59XHJcbi5yaWdodCB7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcbi50ZXh0IHtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuLmNhcmQge1xyXG4gIG1hcmdpbi1ib3R0b206IDlweDtcclxuICBtYXgtd2lkdGg6IDgwJTtcclxuICBwYWRkaW5nOiAxMnB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICBib3JkZXI6IDAuNXB4IHNvbGlkIHJnYigyMTAsIDIxMCwgMjEwKTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG4uaXRlbS1pbm5lciB7XHJcbiAgaGVpZ2h0OiAzM3B4O1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGZhZGVJbiB7XHJcbiAgMCUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDE1cHgpO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG59XHJcbi5pbnB1dC1wb3NpdGlvbiB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRyYW5zcGFyZW50LCByZ2JhKDAsIDAsIDAsIDAuOCkpO1xyXG59XHJcbi5jdXN0b20tZm9vdGVyLXJvdyB7XHJcbiAgaGVpZ2h0OiA2NXB4O1xyXG59XHJcbi5zZW5kLWJ1dHRvbiB7XHJcbiAgaGVpZ2h0OiAzNnB4O1xyXG4gIHdpZHRoOiA5MCU7XHJcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggIzQ0NDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuLmJnLWltYWdlIHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi9hc3NldHMvaW1hZ2VzL3NreWxpbmUuanBnJyk7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogNjBweCAxNXB4IDU1cHggMTVweDtcclxuICBvdmVyZmxvdzogc2Nyb2xsO1xyXG59XHJcbi5iZy1pbWFnZS1YIHtcclxuICBwYWRkaW5nOiA4MHB4IDE1cHggNzVweCAxNXB4O1xyXG59XHJcbi5jaGF0LWl0ZW0ge1xyXG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbn1cclxuaW9uLWNvbnRlbnQge1xyXG4gIC0tcGFkZGluZy10b3A6IDA7XHJcbiAgLS1wYWRkaW5nLWJvdHRvbTogMDtcclxuICBwYWRkaW5nLXRvcDogMDtcclxuICBwYWRkaW5nLWJvdHRvbTogMDtcclxufVxyXG4ubm8tcGFkZGluZyB7XHJcbiAgLS1wYWRkaW5nOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbn1cclxuLmNoYXQtcm93IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbn1cclxuLnJldmVyc2Uge1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcclxufVxyXG4ubmFtZS1yb3ctbGVmdCB7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgcGFkZGluZzogNXB4IDEwcHggNXB4IDl2dztcclxuICBtYXJnaW4tbGVmdDogLTh2dztcclxuICB6LWluZGV4OiAxO1xyXG4gIHdpZHRoOiBmaXQtY29udGVudDtcclxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTZweDtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGhlaWdodDogNnZ3O1xyXG59XHJcbi5uYW1lLXJvdy1yaWdodCB7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgcGFkZGluZzogNXB4IDl2dyA1cHggMTBweDtcclxuICBtYXJnaW4tcmlnaHQ6IC04dnc7XHJcbiAgei1pbmRleDogMTtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxuICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTZweDtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGhlaWdodDogNnZ3O1xyXG59XHJcbi5uYW1lLXJvdy1wYXJlbnQtbGVmdCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG59XHJcbi5uYW1lLXJvdy1wYXJlbnQtcmlnaHQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcbn1cclxuLm1lc3NhZ2Utcm93LWxlZnQge1xyXG4gIGJhY2tncm91bmQ6ICMwYzk2ZGY7XHJcbiAgcGFkZGluZzogN3B4IDE1cHggOHB4IDExdnc7XHJcbiAgbWFyZ2luLWxlZnQ6IC04dnc7XHJcbiAgbWluLWhlaWdodDogMTB2dztcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDV2dztcclxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNXZ3O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLm1lc3NhZ2Utcm93LXJpZ2h0IHtcclxuICBiYWNrZ3JvdW5kOiAjMDBjMDZkO1xyXG4gIHBhZGRpbmc6IDdweCAxNXZ3IDhweCAxMXB4O1xyXG4gIG1hcmdpbi1yaWdodDogLTh2dztcclxuICBtaW4taGVpZ2h0OiAxMHZ3O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1dnc7XHJcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNXZ3O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLmF2YXRhci1wYXJlbnQge1xyXG4gIC8vIGJvcmRlcjogMXZ3IHNvbGlkIHdoaXRlO1xyXG4gIHotaW5kZXg6IDI7XHJcbiAgYm9yZGVyLXJhZGl1czogOHZ3O1xyXG4gIG1pbi13aWR0aDogMTZ2dztcclxuICBoZWlnaHQ6IDE2dnc7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4uYXZhdGFyLWJvcmRlciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAxNnZ3O1xyXG4gIGhlaWdodDogMTZ2dztcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICBib3JkZXI6IDF2dyBzb2xpZCB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgYm94LXNoYWRvdzogbm9uZTtcclxuICBvdXRsaW5lOiBub25lO1xyXG59XHJcbi5yZXZlcnNlLWFyYy1sZWZ0IHtcclxuICB3aWR0aDogNnZ3O1xyXG4gIGhlaWdodDogNHZ3O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBsZWZ0OiA1Ljh2dztcclxuICBib3R0b206IC00dnc7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA0dnc7XHJcbn1cclxuLnJldmVyc2UtYXJjLWNvbG9yLWxlZnQge1xyXG4gIHdpZHRoOiA0dnc7XHJcbiAgaGVpZ2h0OiA0dnc7XHJcbiAgYmFja2dyb3VuZDogIzBjOTZkZjtcclxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA0dnc7XHJcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDJ2dztcclxufVxyXG4ucmV2ZXJzZS1hcmMtcmlnaHQge1xyXG4gIHdpZHRoOiA2dnc7XHJcbiAgaGVpZ2h0OiA0dnc7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIHJpZ2h0OiA1Ljh2dztcclxuICBib3R0b206IC00dnc7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNHZ3O1xyXG59XHJcbiNjaGF0LXBhcmVudCB7XHJcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XHJcbn1cclxuLnJldmVyc2UtYXJjLWNvbG9yLXJpZ2h0IHtcclxuICB3aWR0aDogNHZ3O1xyXG4gIGhlaWdodDogNHZ3O1xyXG4gIGJhY2tncm91bmQ6ICMwMGMwNmQ7XHJcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDR2dztcclxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAzdnc7XHJcbn1cclxuLnRpbWVyLWxlZnQge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogLTc1cHg7XHJcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KTtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgdG9wOiA0cHg7XHJcbn1cclxuLnRpbWVyLXJpZ2h0IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogLTc1cHg7XHJcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KTtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgdG9wOiA0cHg7XHJcbn1cclxuLnRpdGxlLWJsb2NrIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG4udGl0bGUtaWNvbiB7XHJcbiAgZm9udC1zaXplOiAzMnB4O1xyXG59XHJcbi50aXRsZS10ZXh0IHtcclxuICBwYWRkaW5nLWxlZnQ6IDVweDtcclxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbn1cclxuLmZpcnN0LXRpY2sge1xyXG4gIGZvbnQtc2l6ZTogMjVweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogLTI0cHg7XHJcbiAgdG9wOiAtNHB4O1xyXG59XHJcbi5zZWNvbmQtdGljayB7XHJcbiAgZm9udC1zaXplOiAyNXB4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiAtMjhweDtcclxuICB0b3A6IC00cHg7XHJcbn1cclxuLmN1c3RvbS1mb290ZXIge1xyXG4gIGhlaWdodDogNjVweDtcclxufVxyXG4vLyAucmV2ZXJzZS1tc2ctYXJjLWxlZnR7XHJcbi8vICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbi8vICAgICBsZWZ0OiAtMTlweDtcclxuLy8gICAgIGJvdHRvbTogLTNweDtcclxuLy8gICAgIHdpZHRoOiAyMHB4O1xyXG4vLyAgICAgaGVpZ2h0OiAyMHB4O1xyXG4vLyAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4vLyAgICAgYm94LXNoYWRvdzogMTBweCAwcHggMCAwICMwYzk2ZGY7XHJcbi8vICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMzRkZWcpO1xyXG4vLyB9XHJcbi8vIC5yZXZlcnNlLW1zZy1hcmMtcmlnaHR7XHJcbi8vICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbi8vICAgICByaWdodDogLTE5cHg7XHJcbi8vICAgICBib3R0b206IC0zcHg7XHJcbi8vICAgICB3aWR0aDogMjBweDtcclxuLy8gICAgIGhlaWdodDogMjBweDtcclxuLy8gICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuLy8gICAgIGJveC1zaGFkb3c6IDEwcHggMHB4IDAgMCAjMDBDMDZEO1xyXG4vLyAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTM0ZGVnKTtcclxuLy8gfVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/chat/chat.page.ts":
/*!***********************************!*\
  !*** ./src/app/chat/chat.page.ts ***!
  \***********************************/
/*! exports provided: ChatPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatPage", function() { return ChatPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");




var ChatPage = /** @class */ (function () {
    function ChatPage(platform, alertController, menuCtrl) {
        this.platform = platform;
        this.alertController = alertController;
        this.menuCtrl = menuCtrl;
        this.conversation = [
            {
                text: "Hey, that's an awesome chat UI",
                sender: 0,
                image: 'assets/images/sg2.jpg'
            },
            {
                text: 'Right, it totally blew my mind',
                sender: 1,
                image: 'assets/images/sg1.jpg',
                read: true,
                delivered: true,
                sent: true
            },
            { text: 'And it is free ?', sender: 0, image: 'assets/images/sg2.jpg' },
            {
                text: 'Yes, totally free',
                sender: 1,
                image: 'assets/images/sg1.jpg',
                read: true,
                delivered: true,
                sent: true
            },
            { text: "Wow, that's so cool", sender: 0, image: 'assets/images/sg2.jpg' },
            {
                text: 'Hats off to the developers',
                sender: 1,
                image: 'assets/images/sg1.jpg',
                read: false,
                delivered: true,
                sent: true
            },
            {
                text: 'Oh yes, this is gooood stuff',
                sender: 0,
                image: 'assets/images/sg2.jpg'
            },
            {
                text: 'Check out their other designs ',
                sender: 1,
                image: 'assets/images/sg1.jpg',
                read: false,
                delivered: false,
                sent: true
            }
        ];
        this.phone_model = 'iPhone';
        this.input = '';
    }
    ChatPage.prototype.ngOnInit = function () { };
    ChatPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.menuCtrl.enable(false, 'end');
        this.menuCtrl.enable(true, 'start');
        setTimeout(function () {
            _this.scrollToBottom();
        }, 10);
        setTimeout(function () {
            //this.presentAlert();
        }, 100);
    };
    ChatPage.prototype.send = function () {
        var _this = this;
        if (this.input != '') {
            this.conversation.push({
                text: this.input,
                sender: 1,
                image: 'assets/images/sg1.jpg'
            });
            this.input = '';
            setTimeout(function () {
                _this.scrollToBottom();
            }, 10);
        }
    };
    ChatPage.prototype.scrollToBottom = function () {
        var content = document.getElementById('chat-container');
        var parent = document.getElementById('chat-parent');
        var scrollOptions = {
            left: 0,
            top: content.offsetHeight
        };
        parent.scrollTo(scrollOptions);
    };
    ChatPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-chat',
            template: __webpack_require__(/*! ./chat.page.html */ "./src/app/chat/chat.page.html"),
            styles: [__webpack_require__(/*! ./chat.page.scss */ "./src/app/chat/chat.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"]])
    ], ChatPage);
    return ChatPage;
}());



/***/ })

}]);
//# sourceMappingURL=chat-chat-module.js.map