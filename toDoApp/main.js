(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./todo/todo.module": [
		"./src/app/todo/todo.module.ts",
		"todo-todo-module"
	],
	"./user/user.module": [
		"./src/app/user/user.module.ts"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error('Cannot find module "' + req + '".');
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		var module = __webpack_require__(ids[0]);
		return module;
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var _server_error_server_error_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./server-error/server-error.component */ "./src/app/server-error/server-error.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        path: 'user',
        loadChildren: './user/user.module#UserModule',
    },
    {
        path: 'todo',
        loadChildren: './todo/todo.module#TodoModule',
    },
    { path: '', redirectTo: 'user/login', pathMatch: 'full' },
    { path: 'serverError', component: _server_error_server_error_component__WEBPACK_IMPORTED_MODULE_4__["ServerErrorComponent"] },
    { path: '*', component: _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_3__["PageNotFoundComponent"] },
    { path: '**', component: _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_3__["PageNotFoundComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes),
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
            ],
            declarations: [],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'ToDoApp';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_user_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user/user.module */ "./src/app/user/user.module.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var _server_error_server_error_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./server-error/server-error.component */ "./src/app/server-error/server-error.component.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./app.service */ "./src/app/app.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_9__["PageNotFoundComponent"],
                _server_error_server_error_component__WEBPACK_IMPORTED_MODULE_10__["ServerErrorComponent"]
            ],
            imports: [
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_11__["ToastrModule"].forRoot({
                    timeOut: 7000,
                    positionClass: 'toast-top-right',
                    preventDuplicates: true,
                }),
                _user_user_module__WEBPACK_IMPORTED_MODULE_2__["UserModule"],
            ],
            providers: [_app_service__WEBPACK_IMPORTED_MODULE_12__["AppService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.service.ts":
/*!********************************!*\
  !*** ./src/app/app.service.ts ***!
  \********************************/
/*! exports provided: AppService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppService", function() { return AppService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppService = /** @class */ (function () {
    function AppService(_http) {
        this._http = _http;
        this.baseUrl = "http://localhost:3000/api/v1";
        this.userFriends = [];
        this.setUserInfoInLocalStorage = function (data) {
            localStorage.setItem('userInfo', JSON.stringify(data));
        }; //end of setlocalstorage Function
        this.getUserInfoFromLocalStorage = function () {
            return JSON.parse(localStorage.getItem('userInfo'));
        }; //end getlocalstorage function
        //console.log("App Service called")
    }
    /* Start Functions for User Management */
    AppService.prototype.signUp = function (data) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
            .set('firstName', data.firstName)
            .set('lastName', data.lastName)
            .set('mobileNumber', data.mobileNumber)
            .set('email', data.email)
            .set('password', data.password)
            .set('userName', data.userName)
            .set('countryName', data.countryName)
            .set('isAdmin', data.isAdmin);
        return this._http.post(this.baseUrl + "/users/signup", params);
    }; //end signUp 
    AppService.prototype.signIn = function (data) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
            .set('email', data.email)
            .set('password', data.password);
        return this._http.post(this.baseUrl + "/users/login", params);
    }; //end signIn
    AppService.prototype.resetPassword = function (data) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
            .set('email', data.email);
        return this._http.post(this.baseUrl + "/users/resetPassword", params);
    }; //end resetPassword
    AppService.prototype.updatePassword = function (data) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
            .set('validationToken', data.validationToken)
            .set('password', data.password);
        return this._http.put(this.baseUrl + "/users/updatePassword", params);
    }; //end updatePassword
    AppService.prototype.verifyEmail = function (userId) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
            .set('userId', userId);
        return this._http.put(this.baseUrl + "/users/verifyEmail", params);
    }; //end verifyEmail
    AppService.prototype.getCountryNames = function () {
        return this._http.get("./../assets/countryNames.json");
    }; //end getCountryNames
    AppService.prototype.getCountryNumbers = function () {
        return this._http.get("./../assets/countryPhoneCodes.json");
    }; //end getCountryNumbers
    AppService.prototype.getUsers = function (authToken) {
        return this._http.get(this.baseUrl + "/users/view/all?authToken=" + authToken);
    }; //end getUsers function
    AppService.prototype.logout = function (userId, authToken) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
            .set('authToken', authToken);
        return this._http.post(this.baseUrl + "/users/" + userId + "/logout", params);
    }; //end deleteMeeting
    /* End User Management Functions */
    /* Start To Do Functions : Single User */
    AppService.prototype.getListDetails = function (listId, authToken) {
        return this._http.get(this.baseUrl + "/lists/" + listId + "/details?authToken=" + authToken);
    }; //end getListDetails function
    AppService.prototype.getItemDetails = function (itemId, authToken) {
        return this._http.get(this.baseUrl + "/items/" + itemId + "/details?authToken=" + authToken);
    }; //end getItemDetails function
    AppService.prototype.getSubItemDetails = function (data) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
            .set('subItemId', data.subItemId);
        return this._http.post(this.baseUrl + "/items/subItems/" + data.itemId + "/details?authToken=" + data.authToken, params);
    }; //end getSubItemDetails function
    AppService.prototype.getAllList = function (userId, authToken) {
        return this._http.get(this.baseUrl + "/lists/view/all/lists/" + userId + "?authToken=" + authToken);
    }; //end getAllList function
    AppService.prototype.getAllSharedList = function (userId, authToken) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
            .set('userId', userId);
        return this._http.post(this.baseUrl + "/lists/view/all/shared/lists?authToken=" + authToken, params);
    }; //end getAllSharedList function
    AppService.prototype.getAllItems = function (listId, authToken) {
        return this._http.get(this.baseUrl + "/items/view/all/items/" + listId + "?authToken=" + authToken);
    }; //end getAllItems function
    AppService.prototype.addList = function (data) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
            .set('listName', data.listName)
            .set('listCreatorId', data.listCreatorId)
            .set('listCreatorName', data.listCreatorName)
            .set('listModifierId', data.listModifierId)
            .set('listModifierName', data.listModifierName)
            .set('listMode', data.listMode)
            .set('authToken', data.authToken);
        return this._http.post(this.baseUrl + "/lists/addList", params);
    }; //end addList 
    AppService.prototype.addItem = function (data) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
            .set('listId', data.listId)
            .set('itemName', data.itemName)
            .set('itemCreatorId', data.itemCreatorId)
            .set('itemCreatorName', data.itemCreatorName)
            .set('itemModifierId', data.itemModifierId)
            .set('itemModifierName', data.itemModifierName)
            .set('authToken', data.authToken);
        return this._http.post(this.baseUrl + "/items/addItem", params);
    }; //end addItem 
    AppService.prototype.updateItem = function (data) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
            .set('itemName', data.itemName)
            .set('itemModifierId', data.itemModifierId)
            .set('itemModifierName', data.itemModifierName)
            .set('itemDone', data.itemDone)
            .set('authToken', data.authToken);
        return this._http.put(this.baseUrl + "/items/" + data.itemId + "/updateitem", params);
    }; //end updateItem 
    AppService.prototype.addSubItem = function (data) {
        console.log(data);
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
            .set('subItemId', data.subItemId)
            .set('subItemName', data.subItemName)
            .set('subItemCreatorId', data.subItemCreatorId)
            .set('subItemCreatorName', data.subItemCreatorName)
            .set('subItemModifierId', data.subItemModifierId)
            .set('subItemModifierName', data.subItemModifierName)
            .set('authToken', data.authToken);
        return this._http.put(this.baseUrl + "/items/" + data.itemId + "/addSubItem", params);
    }; //end addSubItem 
    AppService.prototype.updateSubItem = function (data) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
            .set('subItemId', data.subItemId)
            .set('subItemName', data.subItemName)
            .set('subItemModifierId', data.subItemModifierId)
            .set('subItemModifierName', data.subItemModifierName)
            .set('subItemDone', data.subItemDone)
            .set('authToken', data.authToken);
        return this._http.put(this.baseUrl + "/items/" + data.itemId + "/updateSubItem", params);
    }; //end updateSubItem 
    AppService.prototype.updateList = function (data) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
            .set('listName', data.listName)
            .set('listModifierId', data.listModifierId)
            .set('listModifierName', data.listModifierName)
            .set('listMode', data.listMode)
            .set('authToken', data.authToken);
        return this._http.put(this.baseUrl + "/lists/" + data.listId + "/updateList", params);
    }; //end updateList 
    AppService.prototype.deleteList = function (data) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
            .set('authToken', data.authToken);
        return this._http.post(this.baseUrl + "/lists/" + data.listId + "/delete", params);
    }; //end deleteList 
    AppService.prototype.deleteItem = function (data) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
            .set('authToken', data.authToken);
        return this._http.post(this.baseUrl + "/items/" + data.itemId + "/delete", params);
    }; //end deleteItem
    AppService.prototype.deleteSubItem = function (data) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
            .set('subItemId', data.subItemId)
            .set('authToken', data.authToken);
        return this._http.put(this.baseUrl + "/items/" + data.itemId + "/deleteSubItem", params);
    }; //end deleteSubItem 
    /* Friends Management */
    AppService.prototype.getAllUsers = function (authToken) {
        return this._http.get(this.baseUrl + "/users/view/all?authToken=" + authToken);
    }; //end getAllUsers function
    AppService.prototype.getUserDetails = function (userId, authToken) {
        return this._http.get(this.baseUrl + "/users/" + userId + "/details?authToken=" + authToken);
    }; //end getUserDetails function
    AppService.prototype.sendFriendRequest = function (data) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
            .set('senderId', data.senderId)
            .set('senderName', data.senderName)
            .set('recieverId', data.recieverId)
            .set('recieverName', data.recieverName)
            .set('authToken', data.authToken);
        return this._http.post(this.baseUrl + "/friends/send/friend/request", params);
    }; //end sendFriendRequest
    AppService.prototype.rejectFriendRequest = function (data) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
            .set('senderId', data.senderId)
            .set('senderName', data.senderName)
            .set('recieverId', data.recieverId)
            .set('recieverName', data.recieverName)
            .set('authToken', data.authToken);
        return this._http.post(this.baseUrl + "/friends/reject/friend/request", params);
    }; //end sendFriendRequest
    AppService.prototype.cancelFriendRequest = function (data) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
            .set('senderId', data.senderId)
            .set('senderName', data.senderName)
            .set('recieverId', data.recieverId)
            .set('recieverName', data.recieverName)
            .set('authToken', data.authToken);
        return this._http.post(this.baseUrl + "/friends/cancel/friend/request", params);
    }; //end sendFriendRequest
    AppService.prototype.acceptFriendRequest = function (data) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
            .set('senderId', data.senderId)
            .set('senderName', data.senderName)
            .set('recieverId', data.recieverId)
            .set('recieverName', data.recieverName)
            .set('authToken', data.authToken);
        return this._http.post(this.baseUrl + "/friends/accept/friend/request", params);
    }; //end sendFriendRequest
    AppService.prototype.unfriendUser = function (data) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
            .set('senderId', data.senderId)
            .set('senderName', data.senderName)
            .set('recieverId', data.recieverId)
            .set('recieverName', data.recieverName)
            .set('authToken', data.authToken);
        return this._http.post(this.baseUrl + "/friends/unfriend/user", params);
    }; //end sendFriendRequest
    /* History Management */
    AppService.prototype.addHistory = function (data) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
            .set('listId', data.listId)
            .set('key', data.key)
            .set('itemId', data.itemId)
            .set('subItemId', data.subItemId)
            .set('authToken', data.authToken);
        return this._http.post(this.baseUrl + "/history/addHistory", params);
    }; //end addItem 
    AppService.prototype.getHistory = function (data) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
            .set('listId', data.listId)
            .set('authToken', data.authToken);
        return this._http.post(this.baseUrl + "/history/deleteHistory", params);
    }; //end addItem 
    AppService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AppService);
    return AppService;
}());



/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.css":
/*!*************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cardBorder{\r\n    box-shadow: 0 4px 8px 0 #4ABDAC, 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.html":
/*!**************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-wrapper\">\r\n  <div class=\"col-12 col-sm-12 col-md-12 col-lg-12 user-board-wrap\">\r\n    <div class=\"d-flex align-items-center\">\r\n      <div class=\"error-text\">\r\n        <h1>>Error <span class=\"errorcode\">404</span></h1>\r\n        <p class=\"output\">\r\n          > The page you are looking for might have been removed, had its name changed or is temporarily\r\n          unavailable.</p>\r\n        <p class=\"output\">\r\n          > Please try to <a href=\"#1\">[go back]</a> or <a href=\"#2\">[return to the homepage]</a>.\r\n        </p>  \r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.ts":
/*!************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.ts ***!
  \************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//Location services

var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent(location) {
        var _this = this;
        this.location = location;
        this.goBack = function () {
            _this.location.back();
        };
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-page-not-found',
            template: __webpack_require__(/*! ./page-not-found.component.html */ "./src/app/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__(/*! ./page-not-found.component.css */ "./src/app/page-not-found/page-not-found.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"]])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/server-error/server-error.component.css":
/*!*********************************************************!*\
  !*** ./src/app/server-error/server-error.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cardBorder{\r\n    box-shadow: 0 4px 8px 0 #4ABDAC, 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n}\r\n\r\n.icons{\r\n    color:lightblue;\r\n}\r\n"

/***/ }),

/***/ "./src/app/server-error/server-error.component.html":
/*!**********************************************************!*\
  !*** ./src/app/server-error/server-error.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-wrapper\">\r\n    <div class=\"col-12 col-sm-12 col-md-12 col-lg-12 user-board-wrap\">\r\n      <div class=\"d-flex align-items-center\">\r\n        <div class=\"error-text\">\r\n          <h1>>Error <span class=\"errorcode\">500</span></h1>\r\n          <p class=\"output\">\r\n            > Something went wrong!!</p>\r\n          <p class=\"output\">\r\n            > Please try to <a href=\"#1\">[go back]</a> or <a href=\"#2\">[return to the homepage]</a>.\r\n          </p>  \r\n        </div>\r\n      </div>\r\n    </div>\r\n  \r\n  </div>"

/***/ }),

/***/ "./src/app/server-error/server-error.component.ts":
/*!********************************************************!*\
  !*** ./src/app/server-error/server-error.component.ts ***!
  \********************************************************/
/*! exports provided: ServerErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServerErrorComponent", function() { return ServerErrorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ServerErrorComponent = /** @class */ (function () {
    function ServerErrorComponent(router) {
        this.router = router;
    }
    ServerErrorComponent.prototype.goToSignIn = function () {
        this.router.navigate(['/user/login']);
    }; //end of goToSign function
    ServerErrorComponent.prototype.ngOnInit = function () {
    };
    ServerErrorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-server-error',
            template: __webpack_require__(/*! ./server-error.component.html */ "./src/app/server-error/server-error.component.html"),
            styles: [__webpack_require__(/*! ./server-error.component.css */ "./src/app/server-error/server-error.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], ServerErrorComponent);
    return ServerErrorComponent;
}());



/***/ }),

/***/ "./src/app/user/forgot-password/forgot-password.component.css":
/*!********************************************************************!*\
  !*** ./src/app/user/forgot-password/forgot-password.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body, html {\r\n  height: 100%;\r\n}\r\n\r\n\r\n.bg-image { \r\n  /* The image used */\r\n  background-image: url('background-image.jpg');\r\n\r\n  /* Full height */\r\n  height: 100vh; \r\n\r\n  /* Center and scale the image nicely */\r\n  background-position: center;\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n}\r\n\r\n\r\n.form-field-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n  }\r\n\r\n\r\n.form-field-container > * {\r\n    width: 80%;\r\n    margin-left:3vw; \r\n  }\r\n\r\n\r\n.cardBorder{\r\n    box-shadow: 0 4px 8px 0 #48CDC8, 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n}\r\n   "

/***/ }),

/***/ "./src/app/user/forgot-password/forgot-password.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/user/forgot-password/forgot-password.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-wrapper\">\r\n    <div class=\"row\">\r\n        <div class=\"user-content-wrap col-12 col-sm-12 col-md-6 col-lg-6\">\r\n            <div class=\"user-content-inner-wrap\">\r\n                <img src=\"./../../../assets/images/todoapplogo.png\" alt=\"TodoApp Logo\" />\r\n                <p>\r\n                        ToDo App is an intuitive and easy to use online Todo list.\r\n                        It helps you to get organized,  \r\n                        simplify your life,\r\n                        and to get things done. Create todo lists,\r\n                        and manage them online from anywhere.\r\n    \r\n                    </p>  \r\n                    <h5>Recover your password  for ToDO List management system</h5>\r\n                    <ul>\r\n                        <li><span class=\"fa fa-check-circle\"></span>Create a ToDo List</li>\r\n                        <li><span class=\"fa fa-check-circle\"></span>Add, delete and edit items</li>\r\n                        <li><span class=\"fa fa-check-circle\"></span>Add sub-todo-items</li>\r\n                        <li><span class=\"fa fa-check-circle\"></span>Add Friends</li>\r\n                        <li><span class=\"fa fa-check-circle\"></span>Save & Share Todo List</li>\r\n                        <li><span class=\"fa fa-check-circle\"></span>Notifications</li>\r\n                    </ul>  \r\n    \r\n            </div>\r\n        </div>\r\n        <div class=\"col-12 col-sm-12 col-md-6 col-lg-6 user-board-wrap\">\r\n            <div class=\"card border-success cardBorder\">\r\n\r\n                <div class=\"card-body text-center\">\r\n                    <div class=\"text-center\">\r\n                        <h2>Forgot Password!</h2>\r\n                    </div>\r\n\r\n                    <form class=\"form-horizontal\" role=\"form\" #forgotForm=\"ngForm\">\r\n\r\n                        <div class=\"input-group form-field-container\">\r\n\r\n                            <mat-form-field appearance=\"standard\">\r\n                                <input matInput placeholder=\"Enter your email\" [formControl]=\"email\" required>\r\n                                <mat-error *ngIf=\"email.invalid\">{{getErrorMessage()}}</mat-error>\r\n                            </mat-form-field>\r\n                        </div>\r\n                        <div class=\"col-sm-12 controls\">\r\n                            <button id=\"btn-send\" type=\"button\" class=\"button btn btn-primary\"\r\n                                (click)=\"forgotPasswordFunction()\" [disabled]=\"!forgotForm.valid\">\r\n                                <span>Send</span>\r\n                            </button>\r\n                        </div>   \r\n                        <div class=\"links-wrap\">\r\n                            <a mat-raised-link [routerLink]=\"['/user/login']\">Have account? Sign\r\n                                In</a>\r\n                        </div>\r\n\r\n                    </form>\r\n                </div>\r\n\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/user/forgot-password/forgot-password.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/user/forgot-password/forgot-password.component.ts ***!
  \*******************************************************************/
/*! exports provided: ForgotPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordComponent", function() { return ForgotPasswordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../app.service */ "./src/app/app.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ForgotPasswordComponent = /** @class */ (function () {
    function ForgotPasswordComponent(appService, _route, router, toastr) {
        this.appService = appService;
        this._route = _route;
        this.router = router;
        this.toastr = toastr;
        this.email = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]);
    }
    ForgotPasswordComponent.prototype.ngOnInit = function () {
    };
    ForgotPasswordComponent.prototype.getErrorMessage = function () {
        return this.email.hasError('required') ? 'You must enter a value' :
            this.email.hasError('email') ? 'Not a valid email' :
                '';
    };
    ForgotPasswordComponent.prototype.forgotPasswordFunction = function () {
        var _this = this;
        if (!this.email.value) {
            this.toastr.warning("Email is required", "Warning!");
        }
        else if (this.email.hasError('email')) {
            this.toastr.warning("Not a valid email", "Warning!");
        }
        else {
            var data = {
                email: this.email.value,
            };
            //console.log(data)  
            this.appService.resetPassword(data).subscribe(function (apiResponse) {
                if (apiResponse.status == 200) {
                    _this.toastr.success("Reset Password", "Password reset instructions sent successfully");
                }
                else {
                    _this.toastr.error(apiResponse.message, "Error!");
                }
            }, function (error) {
                if (error.status == 404) {
                    _this.toastr.warning("Reset Password Failed", "Email Not Found!");
                }
                else {
                    _this.toastr.error("Some Error Occurred", "Error!");
                    _this.router.navigate(['/serverError']);
                }
            }); //end calling resetPassword
        }
    }; //end forgotPasswordFunction
    ForgotPasswordComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-forgot-password',
            template: __webpack_require__(/*! ./forgot-password.component.html */ "./src/app/user/forgot-password/forgot-password.component.html"),
            styles: [__webpack_require__(/*! ./forgot-password.component.css */ "./src/app/user/forgot-password/forgot-password.component.css")]
        }),
        __metadata("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]])
    ], ForgotPasswordComponent);
    return ForgotPasswordComponent;
}());



/***/ }),

/***/ "./src/app/user/login/login.component.css":
/*!************************************************!*\
  !*** ./src/app/user/login/login.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body, html {\r\n  height: 100%;\r\n}\r\n\r\n\r\n.bg-image { \r\n  /* The image used */\r\n \r\n\r\n  /* Full height */\r\n  height: 100vh; \r\n\r\n \r\n}\r\n\r\n\r\n.form-field-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n\r\n/* Media Query for 320px - 454px Devices*/\r\n\r\n\r\n@media only screen and (min-width:300px) and (max-width:454px){\r\n    .bg-container {\r\n        margin-top: 5vh;\r\n        margin-right: 5vw;        \r\n        max-width: 250px;\r\n    }\r\n}\r\n\r\n\r\n/* Media Query for 455px - 768px Devices*/\r\n\r\n\r\n@media only screen and (min-width:455px) and (max-width:768px) {\r\n    .icons {\r\n      font-size: 2.5em;\r\n    }\r\n    .nav-item{\r\n      margin-left: 1vw;\r\n      margin-right: 1vw;\r\n    }\r\n   \r\n  }\r\n\r\n\r\n/* Media Query for 769px - 992px Devices*/\r\n\r\n\r\n@media only screen and (min-width:769px) and (max-width:992px) {\r\n    .icons {\r\n      font-size: 3em;\r\n    }\r\n    .nav-item{\r\n      margin-left: 2vw;\r\n      margin-right: 2vw;\r\n    }\r\n   \r\n  }\r\n\r\n\r\n/* Media Query for 993px - 1169px Devices*/\r\n\r\n\r\n@media only screen and (min-width:993px) and (max-width:1169px) {\r\n    .icons {\r\n      font-size: 3.5em;\r\n    }\r\n    .nav-item{\r\n      margin-left: 4vw;\r\n      margin-right: 4vw;\r\n    }\r\n   \r\n  }\r\n\r\n\r\n/* Media Query above 1170px Devices*/\r\n\r\n\r\n@media only screen and (min-width:1170px)  {\r\n    .icons {\r\n      font-size: 3.8em;\r\n    }\r\n  \r\n    .nav-item{\r\n      margin-left: 3.8vw;\r\n      margin-right: 3.8vw;\r\n    }\r\n   \r\n  }\r\n  "

/***/ }),

/***/ "./src/app/user/login/login.component.html":
/*!*************************************************!*\
  !*** ./src/app/user/login/login.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-wrapper\">\r\n    <div class=\"row\">\r\n        <div class=\"user-content-wrap col-12 col-sm-12 col-md-6 col-lg-6\">\r\n            <div class=\"user-content-inner-wrap\">\r\n                <img src=\"./../../../assets/images/todoapplogo.png\" alt=\"TodoApp Logo\" />\r\n                <p>\r\n                    ToDo App is an intuitive and easy to use online Todo list.\r\n                    It helps you to get organized,  \r\n                    simplify your life,\r\n                    and to get things done. Create todo lists,\r\n                    and manage them online from anywhere.\r\n\r\n                </p>  \r\n                <h5>Signin for ToDO List management system</h5>\r\n                <ul>\r\n                    <li><span class=\"fa fa-check-circle\"></span>Create a ToDo List</li>\r\n                    <li><span class=\"fa fa-check-circle\"></span>Add, delete and edit items</li>\r\n                    <li><span class=\"fa fa-check-circle\"></span>Add sub-todo-items</li>\r\n                    <li><span class=\"fa fa-check-circle\"></span>Add Friends</li>\r\n                    <li><span class=\"fa fa-check-circle\"></span>Save & Share Todo List</li>\r\n                    <li><span class=\"fa fa-check-circle\"></span>Notifications</li>\r\n                </ul>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-12 col-sm-12 col-md-6 col-lg-6 user-board-wrap\">\r\n            <div class=\"card border-success cardBorder\">\r\n\r\n                <div class=\"card-body text-center\">\r\n                    <div class=\"text-center\">\r\n                        <h2>Sign in!</h2>\r\n                    </div>\r\n\r\n                    <form id=\"loginform\" class=\"form-horizontal\" role=\"form\" #loginForm=\"ngForm\">\r\n                        <div class=\"input-group  form-field-container\">\r\n                            <mat-form-field appearance=\"standard\">\r\n                                <input matInput placeholder=\"Email Id\" [formControl]=\"email\" required>\r\n                                <mat-error *ngIf=\"email.invalid\">{{getErrorMessage()}}\r\n                                </mat-error>\r\n                            </mat-form-field>\r\n                        </div>\r\n\r\n                        <div class=\"input-group form-field-container\">\r\n                            <mat-form-field appearance=\"standard\">\r\n                                <input matInput type=\"password\" placeholder=\"Password\" minlength=\"8\" #pwd=\"ngModel\"\r\n                                    [(ngModel)]=\"password\" name=\"password\" (keydown)=\"loginUsingKeypress($event)\"\r\n                                    required>\r\n                                <mat-hint>* Minimun 8 Characters</mat-hint>\r\n\r\n                                <mat-error *ngIf=\"pwd.errors?.required\">required</mat-error>\r\n                                <mat-error *ngIf=\"pwd.errors?.minlength\">Minimun 8 Characters Reuired</mat-error>\r\n\r\n                            </mat-form-field>\r\n\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <div class=\"col-sm-12\">\r\n                                <button id=\"btn-signin\" type=\"button\" class=\"button btn btn-primary\"\r\n                                    (click)=\"signInFunction()\" [disabled]=\"!loginForm.valid\">\r\n                                    <span> Sign In</span>\r\n                                </button>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"links-wrap\">\r\n                            <a mat-raised-link [routerLink]=\"['/user/forgot-password']\">Forgot\r\n                                password?</a>\r\n                            <a mat-raised-link [routerLink]=\"['/user/signup']\">Sign Up</a>\r\n\r\n                        </div>\r\n                    </form>\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/user/login/login.component.ts":
/*!***********************************************!*\
  !*** ./src/app/user/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../app.service */ "./src/app/app.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-cookies/ng2-cookies */ "./node_modules/ng2-cookies/ng2-cookies.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginComponent = /** @class */ (function () {
    function LoginComponent(appService, _route, router, toastr) {
        var _this = this;
        this.appService = appService;
        this._route = _route;
        this.router = router;
        this.toastr = toastr;
        this.email = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]);
        this.loginUsingKeypress = function (event) {
            if (event.keyCode === 13) {
                // 13 is keycode of enter.
                _this.signInFunction();
            }
        }; // end loginUsingKeypress
    }
    LoginComponent.prototype.getErrorMessage = function () {
        return this.email.hasError('required') ? 'You must enter a value' :
            this.email.hasError('email') ? 'Not a valid email' :
                '';
    };
    LoginComponent.prototype.signInFunction = function () {
        var _this = this;
        if (!this.email.value) {
            this.toastr.warning("Email is required", "Warning!");
        }
        else if (this.email.hasError('email')) {
            this.toastr.warning("Not a valid email", "Warning!");
        }
        else if (!this.password) {
            this.toastr.warning("Password is required", "Warning!");
        }
        else {
            var data = {
                email: this.email.value,
                password: this.password,
            };
            //console.log(data)  
            this.appService.signIn(data).subscribe(function (apiResponse) {
                if (apiResponse.status == 200) {
                    _this.toastr.success("Login Successfull", "Welcome to Todo");
                    //console.log(apiResponse.data)
                    ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5__["Cookie"].set('authToken', apiResponse.data.authToken);
                    ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5__["Cookie"].set('userId', apiResponse.data.userDetails.userId);
                    ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5__["Cookie"].set('userName', apiResponse.data.userDetails.firstName + " " + apiResponse.data.userDetails.lastName);
                    _this.appService.setUserInfoInLocalStorage(apiResponse.data.userDetails);
                    setTimeout(function () {
                        _this.router.navigate(['/todo/single-user']); //redirects the single user platform.
                    }, 1000);
                }
                else {
                    _this.toastr.error(apiResponse.message, "Error!");
                }
            }, function (error) {
                if (error.status == 404) {
                    _this.toastr.warning("Login Failed", "User Not Found or Email is not verified!");
                }
                else if (error.status == 400) {
                    _this.toastr.warning("Login Failed", "Wrong Password");
                }
                else {
                    _this.toastr.error("Some Error Occurred", "Error!");
                    _this.router.navigate(['/serverError']);
                }
            }); //end calling SignInFunction
        }
    }; //end signInFunction
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/user/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/user/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/user/reset-password/reset-password.component.css":
/*!******************************************************************!*\
  !*** ./src/app/user/reset-password/reset-password.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body, html {\r\n    height: 100%;\r\n  }\r\n  \r\n  \r\n  .bg-image { \r\n    /* The image used */\r\n    background-image: url('background-image.jpg');\r\n  \r\n    /* Full height */\r\n    height: 100vh; \r\n  \r\n    /* Center and scale the image nicely */\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n  }\r\n  \r\n  \r\n  .cardBorder{\r\n      box-shadow: 0 4px 8px 0 #48CDC8, 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n  }\r\n  \r\n  \r\n  .form-field-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n  }\r\n  \r\n  \r\n  .form-field-container > * {\r\n    width: 80%;\r\n    margin-left:3vw; \r\n  }\r\n  \r\n  \r\n  \r\n  \r\n"

/***/ }),

/***/ "./src/app/user/reset-password/reset-password.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/user/reset-password/reset-password.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-wrapper\">\r\n  <div class=\"row\">\r\n    <div class=\"user-content-wrap col-12 col-sm-12 col-md-6 col-lg-6\">\r\n      <div class=\"user-content-inner-wrap\">\r\n        <img src=\"./../../../assets/images/todoapplogo.png\" alt=\"TodoApp Logo\" />\r\n        <p>\r\n          lorem ispsm lorem ispsm lorem ispsm lorem\r\n          ispsm lorem ispsm lorem ispsmlorem ispsmlorem ispsm\r\n          lorem ispsm lorem ispsm lorem ispsm lorem ispsm lorem ispsm\r\n          lorem ispsmlorem ispsmlorem ispsm\r\n\r\n        </p>\r\n        <ul>\r\n          <li>lorem ispsm lorem ispsm</li>\r\n          <li>lorem ispsm lorem ispsm</li>\r\n          <li>lorem ispsm lorem ispsm</li>\r\n          <li>lorem ispsm lorem ispsm</li>\r\n          <li>lorem ispsm lorem ispsm</li>\r\n          <li>lorem ispsm lorem ispsm</li>\r\n          <li>lorem ispsm lorem ispsm</li>\r\n          <li>lorem ispsm lorem ispsm</li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-12 col-sm-12 col-md-6 col-lg-6 user-board-wrap\">\r\n      <div class=\"card border-success cardBorder\">\r\n\r\n        <div class=\"card-body text-center\">\r\n          <div class=\"text-center\">\r\n            <h2>Reset Password!</h2>\r\n          </div>\r\n\r\n          <form class=\"form-horizontal\" role=\"form\">\r\n            <div class=\"input-group mb-3 form-field-container\">\r\n\r\n              <mat-form-field appearance=\"standard\">\r\n                <mat-label>Password</mat-label>\r\n                <input matInput type=\"password\" placeholder=\"Enter your Password\" minlength=\"8\" #pwd=\"ngModel\"\r\n                  [(ngModel)]=\"password\" name=\"password\" required>\r\n                <mat-hint>* Min 8 Characters</mat-hint>\r\n\r\n                <mat-error *ngIf=\"pwd.errors?.required\">You must enter a value</mat-error>\r\n                <mat-error *ngIf=\"pwd.errors?.minlength\">You must enter atleast 8 Chars</mat-error>\r\n\r\n              </mat-form-field>\r\n\r\n            </div>\r\n            <br>\r\n            <div class=\"input-group mb-3 form-field-container\">\r\n\r\n              <mat-form-field appearance=\"standard\">\r\n                <mat-label>Re-enter Password</mat-label>\r\n                <input matInput type=\"password\" placeholder=\"Re-enter your Password\" minlength=\"8\" #conpwd=\"ngModel\"\r\n                  [(ngModel)]=\"confirmPassword\" name=\"confirmPassword\" required>\r\n                <mat-hint>* Min 8 Characters</mat-hint>\r\n\r\n                <mat-error *ngIf=\"conpwd.errors?.required\">You must enter a value</mat-error>\r\n                <mat-error *ngIf=\"conpwd.errors?.minlength\">You must enter atleast 8 Chars</mat-error>\r\n\r\n              </mat-form-field>\r\n\r\n            </div>\r\n            <div style=\"margin-top:10px\" class=\"form-group\">\r\n              <!-- Button -->\r\n\r\n              <div class=\"col-sm-12 controls\">\r\n                <button id=\"btn-save\" type=\"button\" class=\"btn btn-primary\" (click)=\"updatePasswordFunction()\">\r\n                  <i class=\"icon-hand-right\"></i> Save</button>\r\n              </div>\r\n            </div>\r\n\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/user/reset-password/reset-password.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/user/reset-password/reset-password.component.ts ***!
  \*****************************************************************/
/*! exports provided: ResetPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPasswordComponent", function() { return ResetPasswordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app.service */ "./src/app/app.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//import for toastr

//for Service

//for routing

var ResetPasswordComponent = /** @class */ (function () {
    function ResetPasswordComponent(appService, _route, router, toastr) {
        this.appService = appService;
        this._route = _route;
        this.router = router;
        this.toastr = toastr;
    }
    ResetPasswordComponent.prototype.ngOnInit = function () {
        this.validationToken = this._route.snapshot.paramMap.get('validationToken');
    };
    ResetPasswordComponent.prototype.goToSignIn = function () {
        this.router.navigate(['/user/login']);
    }; //end of goToSign function
    ResetPasswordComponent.prototype.updatePasswordFunction = function () {
        var _this = this;
        if (this.password != this.confirmPassword) {
            this.toastr.warning("Password doesn't match", "Warning!");
        }
        else {
            var data = {
                validationToken: this.validationToken,
                password: this.password,
            };
            this.appService.updatePassword(data).subscribe(function (apiResponse) {
                if (apiResponse.status == 200) {
                    _this.toastr.success("Please login", "Password Updated!");
                    setTimeout(function () {
                        _this.goToSignIn();
                    }, 1000); //redirecting to signIn page
                }
                else {
                    _this.toastr.error(apiResponse.message, "Error!");
                }
            }, function (error) {
                if (error.status == 404) {
                    _this.toastr.warning("Password Update failed", "Please request another password reset!");
                }
                else {
                    _this.toastr.error("Some Error Occurred", "Error!");
                    _this.router.navigate(['/serverError']);
                }
            }); //end calling updatePassword
        }
    }; //end updatePasswordFunction
    ResetPasswordComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-reset-password',
            template: __webpack_require__(/*! ./reset-password.component.html */ "./src/app/user/reset-password/reset-password.component.html"),
            styles: [__webpack_require__(/*! ./reset-password.component.css */ "./src/app/user/reset-password/reset-password.component.css")]
        }),
        __metadata("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_1__["ToastrService"]])
    ], ResetPasswordComponent);
    return ResetPasswordComponent;
}());



/***/ }),

/***/ "./src/app/user/signup/signup.component.css":
/*!**************************************************!*\
  !*** ./src/app/user/signup/signup.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body, html {\r\n    height: 100%;\r\n  }\r\n  \r\n  \r\n  .bg-image { \r\n    /* The image used */\r\n    background-image: url('background-image.jpg');\r\n  \r\n    /* Full height */\r\n    height: 100vh; \r\n  \r\n    /* Center and scale the image nicely */\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n  }\r\n  \r\n  \r\n  .cardBorder{\r\n    box-shadow: 0 4px 8px 0 #4ABDAC, 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n}\r\n  \r\n  \r\n  .form-field-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n  }\r\n  \r\n  \r\n  .form-field-container > * {\r\n    width: 80%;\r\n    margin-left:3vw; \r\n  }\r\n  "

/***/ }),

/***/ "./src/app/user/signup/signup.component.html":
/*!***************************************************!*\
  !*** ./src/app/user/signup/signup.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-wrapper\">\r\n  <div class=\"row\">\r\n    <div class=\"user-content-wrap col-12 col-sm-12 col-md-6 col-lg-6\">\r\n      <div class=\"user-content-inner-wrap\">\r\n        <img src=\"./../../../assets/images/todoapplogo.png\" alt=\"TodoApp Logo\" />\r\n        <p>\r\n          ToDo App is an intuitive and easy to use online Todo list.\r\n          It helps you to get organized,\r\n          simplify your life,\r\n          and to get things done. Create todo lists,\r\n          and manage them online from anywhere.\r\n          \r\n        </p>\r\n        <h5>Signup for ToDO List management system</h5>\r\n        <ul>\r\n          <li><span class=\"fa fa-check-circle\"></span>Create a ToDo List</li>\r\n          <li><span class=\"fa fa-check-circle\"></span>Add, delete and edit items</li>\r\n          <li><span class=\"fa fa-check-circle\"></span>Add sub-todo-items</li>\r\n          <li><span class=\"fa fa-check-circle\"></span>Add Friends</li>\r\n          <li><span class=\"fa fa-check-circle\"></span>Save & Share Todo List</li>\r\n          <li><span class=\"fa fa-check-circle\"></span>Notifications</li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-12 col-sm-12 col-md-6 col-lg-6 user-board-wrap\">\r\n      <div class=\"card border-success cardBorder\">\r\n\r\n        <div class=\"card-body text-center\">\r\n          <div class=\"text-center\">\r\n            <h2>Sign up!</h2>\r\n          </div>\r\n\r\n          <form id=\"signupform\" class=\"form-horizontal\" role=\"form\" #signupForm=\"ngForm\">\r\n\r\n            <div class=\"row\">\r\n\r\n              <div class=\"col-md-6 pr-0\">\r\n                <div class=\"form-group\">\r\n                  <div class=\"form-group form-field-container\">\r\n\r\n                    <mat-form-field appearance=\"standard\">\r\n                      <input matInput placeholder=\"First Name\" minlength=\"3\" #fstName=\"ngModel\" [(ngModel)]=\"firstName\"\r\n                        name=\"firstName\" required>\r\n                      <mat-hint>* Min 3 Characters</mat-hint>\r\n                      <mat-error *ngIf=\"fstName.errors?.required\">You must enter a value</mat-error>\r\n                      <mat-error *ngIf=\"fstName.errors?.minlength\">You must enter atleast 3 Chars</mat-error>\r\n                    </mat-form-field>\r\n                  </div>\r\n\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"col-md-6\">\r\n                <div class=\"form-group\">\r\n                  <div class=\"form-group form-field-container\">\r\n                    <mat-form-field appearance=\"standard\">\r\n\r\n                      <input matInput placeholder=\"Last Name\" minlength=\"3\" #lstName=\"ngModel\" [(ngModel)]=\"lastName\"\r\n                        name=\"lastName\" required>\r\n                      <mat-hint>* Min 3 Characters</mat-hint>\r\n\r\n                      <mat-error *ngIf=\"lstName.errors?.required\">You must enter a value</mat-error>\r\n                      <mat-error *ngIf=\"lstName.errors?.minlength\">You must enter atleast 3 Chars</mat-error>\r\n\r\n                    </mat-form-field>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"row\">\r\n              <div class=\"col-md-12\">\r\n                <div class=\"form-group\">\r\n                  <div class=\"form-group form-field-container\">\r\n                    <mat-form-field appearance=\"standard\">\r\n                      <input matInput placeholder=\"Enter your email\" [formControl]=\"email\" required>\r\n                      <mat-error *ngIf=\"email.invalid\">{{getErrorMessage()}}</mat-error>\r\n                    </mat-form-field>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"row\">\r\n              <div class=\"col-md-12\">\r\n                <div class=\"form-group\">\r\n                  <div class=\"form-group form-field-container\">\r\n                    <mat-form-field appearance=\"standard\">\r\n                      <input matInput type=\"password\" placeholder=\"Password\" minlength=\"8\" #pwd=\"ngModel\"\r\n                        [(ngModel)]=\"password\" name=\"password\" required>\r\n                      <mat-hint>* Min 8 Characters</mat-hint>\r\n\r\n                      <mat-error *ngIf=\"pwd.errors?.required\">You must enter a value</mat-error>\r\n                      <mat-error *ngIf=\"pwd.errors?.minlength\">You must enter atleast 8 Chars</mat-error>\r\n\r\n                    </mat-form-field>\r\n\r\n\r\n                  </div>\r\n\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"row\">\r\n              <div class=\"col-sm-12 col-md-6\">\r\n                <div class=\"form-group form-field-container\">\r\n                  <mat-form-field appearance=\"standard\">\r\n                    <mat-select placeholder=\"Select Country Name\" [(value)]=\"country\"\r\n                      (selectionChange)=\"onChangeOfCountry()\" required>\r\n                      <mat-option *ngFor=\"let country of countries\" [value]=\"country.code\">{{country.name}}</mat-option>\r\n                    </mat-select>\r\n\r\n                  </mat-form-field>\r\n\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"col-sm-12 col-md-6\">\r\n                <div class=\"form-group form-field-container\">\r\n                  <mat-form-field appearance=\"standard\">\r\n                    <input matInput placeholder=\"Mobile Number\" type=\"number\" class=\"example-right-align\"\r\n                      [(ngModel)]=\"mobileNumber\" name=\"mobileNumber\" pattern=\"^\\d{10}$\" maxlength=\"10\"\r\n                      #mobNumber=\"ngModel\" required>\r\n\r\n                    <span matPrefix>+{{countryCode}} &nbsp;</span>\r\n\r\n\r\n                    <mat-hint>* Max 10 Digits</mat-hint>\r\n\r\n                    <mat-error *ngIf=\"mobNumber.errors?.required\">You must enter a value</mat-error>\r\n                    <mat-error *ngIf=\"mobNumber.errors?.pattern\">Only 10 Digits</mat-error>\r\n                  </mat-form-field>\r\n                </div>\r\n              </div>\r\n\r\n            </div>\r\n\r\n            <div class=\"form-group text-center\">\r\n              <div class=\"col-md-12\">\r\n                <button id=\"btn-signup\" type=\"button\" class=\"button btn btn-primary\" (click)=\"signupFunction()\"\r\n                  [disabled]=\"!signupForm.valid\">\r\n                  <span>Sign Up</span>\r\n                </button>\r\n              </div>\r\n            </div>\r\n            <div class=\"links-wrap\">\r\n              <a mat-raised-link [routerLink]=\"['/user/login']\">Have account? Sign\r\n                In</a>\r\n            </div>\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/user/signup/signup.component.ts":
/*!*************************************************!*\
  !*** ./src/app/user/signup/signup.component.ts ***!
  \*************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app.service */ "./src/app/app.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import for toastr

//import for Routing

var SignupComponent = /** @class */ (function () {
    function SignupComponent(appService, _route, router, toastr) {
        this.appService = appService;
        this._route = _route;
        this.router = router;
        this.toastr = toastr;
        this.email = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]);
        this.countries = [];
    }
    SignupComponent.prototype.ngOnInit = function () {
        this.getCountries();
        this.getCountryCodes();
    };
    SignupComponent.prototype.getErrorMessage = function () {
        return this.email.hasError('required') ? 'You must enter a value' :
            this.email.hasError('email') ? 'Not a valid email' :
                '';
    };
    SignupComponent.prototype.onChangeOfCountry = function () {
        this.countryCode = this.countryCodes[this.country];
        this.countryName = this.country;
    }; //end onChangeOfCountry
    SignupComponent.prototype.getCountries = function () {
        var _this = this;
        this.appService.getCountryNames().subscribe(function (data) {
            _this.allCountries = data;
            for (var i in data) {
                var singleCountry = {
                    name: data[i],
                    code: i
                };
                _this.countries.push(singleCountry);
            }
            _this.countries = _this.countries.sort(function (first, second) {
                return first.name.toUpperCase() < second.name.toUpperCase() ? -1 : (first.name.toUpperCase() > second.name.toUpperCase() ? 1 : 0);
            }); //end sort
        }); //end subscribe
    }; //end getCountries
    SignupComponent.prototype.getCountryCodes = function () {
        var _this = this;
        this.appService.getCountryNumbers()
            .subscribe(function (data) {
            _this.countryCodes = data;
        }); //end subscribe
    }; //end getCountriesCodes
    SignupComponent.prototype.goToSignIn = function () {
        this.router.navigate(['/user/login']);
    }; //end of goToSign function
    SignupComponent.prototype.signupFunction = function () {
        var _this = this;
        if (!this.firstName) {
            this.toastr.warning("First Name is required", "Warning!");
        }
        else if (!this.lastName) {
            this.toastr.warning("Last Name is required", "Warning!");
        }
        else if (!this.mobileNumber) {
            this.toastr.warning("Mobile Number is required", "Warning!");
        }
        else if (!this.country) {
            this.toastr.warning("Country is required", "Warning!");
        }
        else if (!this.email.value) {
            this.toastr.warning("Email is required", "Warning!");
        }
        else if (!this.password) {
            this.toastr.warning("Password is required", "Warning!");
        }
        else if (this.email.hasError('email')) {
            this.toastr.warning("Not a valid email", "Warning!");
        }
        else {
            var data = {
                firstName: this.firstName,
                lastName: this.lastName,
                mobileNumber: this.countryCode + " " + this.mobileNumber,
                email: this.email.value,
                password: this.password,
                countryName: this.countryName,
            };
            //console.log(data)  
            this.appService.signUp(data)
                .subscribe(function (apiResponse) {
                if (apiResponse.status == 200) {
                    _this.toastr.success("Please check your email", "Registered with ToDo");
                    setTimeout(function () {
                        _this.goToSignIn();
                    }, 1000); //redirecting to signIn page
                }
                else {
                    _this.toastr.error(apiResponse.message, "Error!");
                }
            }, function (error) {
                _this.toastr.error("Some Error Occurred", "Error!");
                _this.router.navigate(['/serverError']);
            }); //end calling signUpFunction
        }
    }; //end signUp function
    SignupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/user/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/user/signup/signup.component.css")]
        }),
        __metadata("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/user/user-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/user/user-routing.module.ts ***!
  \*********************************************/
/*! exports provided: UserRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRoutingModule", function() { return UserRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/user/login/login.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/user/signup/signup.component.ts");
/* harmony import */ var _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./forgot-password/forgot-password.component */ "./src/app/user/forgot-password/forgot-password.component.ts");
/* harmony import */ var _verify_email_verify_email_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./verify-email/verify-email.component */ "./src/app/user/verify-email/verify-email.component.ts");
/* harmony import */ var _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./reset-password/reset-password.component */ "./src/app/user/reset-password/reset-password.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"], runGuardsAndResolvers: 'always' },
    { path: 'signup', component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_4__["SignupComponent"] },
    { path: 'forgot-password', component: _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_5__["ForgotPasswordComponent"] },
    { path: 'verify-email/:userId', component: _verify_email_verify_email_component__WEBPACK_IMPORTED_MODULE_6__["VerifyEmailComponent"] },
    { path: 'reset-password/:validationToken', component: _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_7__["ResetPasswordComponent"] },
];
var UserRoutingModule = /** @class */ (function () {
    function UserRoutingModule() {
    }
    UserRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
            ],
            declarations: []
        })
    ], UserRoutingModule);
    return UserRoutingModule;
}());



/***/ }),

/***/ "./src/app/user/user.module.ts":
/*!*************************************!*\
  !*** ./src/app/user/user.module.ts ***!
  \*************************************/
/*! exports provided: UserModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModule", function() { return UserModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _user_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-routing.module */ "./src/app/user/user-routing.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login/login.component */ "./src/app/user/login/login.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/user/signup/signup.component.ts");
/* harmony import */ var _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./forgot-password/forgot-password.component */ "./src/app/user/forgot-password/forgot-password.component.ts");
/* harmony import */ var _verify_email_verify_email_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./verify-email/verify-email.component */ "./src/app/user/verify-email/verify-email.component.ts");
/* harmony import */ var _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./reset-password/reset-password.component */ "./src/app/user/reset-password/reset-password.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





/* modules from Materialize */

/* Module for Toaster */






var UserModule = /** @class */ (function () {
    function UserModule() {
    }
    UserModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTooltipModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrModule"].forRoot({
                    timeOut: 10000,
                    positionClass: 'toast-top-right',
                    preventDuplicates: true,
                }),
                _user_routing_module__WEBPACK_IMPORTED_MODULE_2__["UserRoutingModule"],
            ],
            declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"], _signup_signup_component__WEBPACK_IMPORTED_MODULE_8__["SignupComponent"], _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_9__["ForgotPasswordComponent"], _verify_email_verify_email_component__WEBPACK_IMPORTED_MODULE_10__["VerifyEmailComponent"], _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_11__["ResetPasswordComponent"]],
        })
    ], UserModule);
    return UserModule;
}());



/***/ }),

/***/ "./src/app/user/verify-email/verify-email.component.css":
/*!**************************************************************!*\
  !*** ./src/app/user/verify-email/verify-email.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body, html {\r\n    height: 100%;\r\n  }\r\n  \r\n  \r\n  .bg-image { \r\n    /* The image used */\r\n    background-image: url('background-image.jpg');\r\n  \r\n    /* Full height */\r\n    height: 100vh; \r\n  \r\n    /* Center and scale the image nicely */\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n  }\r\n  \r\n  \r\n  .cardBorder{\r\n    box-shadow: 0 4px 8px 0 #4ABDAC, 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n}\r\n"

/***/ }),

/***/ "./src/app/user/verify-email/verify-email.component.html":
/*!***************************************************************!*\
  !*** ./src/app/user/verify-email/verify-email.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"full-screen container-fluid bg-orange\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-6 mx-auto col-sm-6 text-center\">\r\n            <div class=\"card border-info cardBorder\">\r\n\r\n\r\n                <div  class=\"card-body text-center \">\r\n                    <div class=\"text-center\">\r\n                        <img class=\"logo-app\" src=\"./../../../assets/images/todoapplogo.png\" alt=\"TodoApp Logo\" />\r\n                        <div>\r\n                            <h5>{{message}}</h5>\r\n                        </div>\r\n                        <div class=\"links-wrap\">\r\n                            <a class=\"button btn btn-primary\" mat-raised-link [routerLink]=\"['/user/login']\">Sign In</a>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <br>\r\n                </div>\r\n\r\n\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/user/verify-email/verify-email.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/user/verify-email/verify-email.component.ts ***!
  \*************************************************************/
/*! exports provided: VerifyEmailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerifyEmailComponent", function() { return VerifyEmailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../app.service */ "./src/app/app.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var VerifyEmailComponent = /** @class */ (function () {
    function VerifyEmailComponent(appService, _route, router, toastr) {
        this.appService = appService;
        this._route = _route;
        this.router = router;
        this.toastr = toastr;
    }
    VerifyEmailComponent.prototype.ngOnInit = function () {
        this.userId = this._route.snapshot.paramMap.get('userId');
        this.verifyEmailFunction();
    };
    VerifyEmailComponent.prototype.verifyEmailFunction = function () {
        var _this = this;
        this.appService.verifyEmail(this.userId).subscribe(function (apiResponse) {
            if (apiResponse.status == 200) {
                _this.toastr.success("Please login", "Email Verified!");
                _this.message = "Your account has been activated. You can login now";
            }
            else {
                _this.toastr.error(apiResponse.message, "Error!");
            }
        }, function (error) {
            if (error.status == 404) {
                _this.toastr.warning("Email Verification failed", "User Not Found!");
                _this.message = "Email Verification failed";
            }
            else {
                _this.toastr.error("Some Error Occurred", "Error!");
                _this.router.navigate(['/serverError']);
            }
        }); //end calling verifyEmail
    }; //end verifyEmailFunction
    VerifyEmailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-verify-email',
            template: __webpack_require__(/*! ./verify-email.component.html */ "./src/app/user/verify-email/verify-email.component.html"),
            styles: [__webpack_require__(/*! ./verify-email.component.css */ "./src/app/user/verify-email/verify-email.component.css")]
        }),
        __metadata("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]])
    ], VerifyEmailComponent);
    return VerifyEmailComponent;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\edwisor\learning\todoapp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map