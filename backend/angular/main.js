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
/* harmony import */ var _components_employee_create_employee_create_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/employee-create/employee-create.component */ "./src/app/components/employee-create/employee-create.component.ts");
/* harmony import */ var _components_employee_edit_employee_edit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/employee-edit/employee-edit.component */ "./src/app/components/employee-edit/employee-edit.component.ts");
/* harmony import */ var _components_employee_list_employee_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/employee-list/employee-list.component */ "./src/app/components/employee-list/employee-list.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");
/* harmony import */ var _components_home_initial_setup_initial_setup_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/home/initial-setup/initial-setup.component */ "./src/app/components/home/initial-setup/initial-setup.component.ts");
/* harmony import */ var _components_home_journey_journey_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/home/journey/journey.component */ "./src/app/components/home/journey/journey.component.ts");











var routes = [
    { path: '', pathMatch: 'full', redirectTo: 'login' },
    { path: 'login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"] },
    {
        path: 'home', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"], children: [
            { path: 'initial-setup', component: _components_home_initial_setup_initial_setup_component__WEBPACK_IMPORTED_MODULE_9__["InitialSetupComponent"] },
            { path: 'journey', component: _components_home_journey_journey_component__WEBPACK_IMPORTED_MODULE_10__["JourneyComponent"] },
        ]
    },
    { path: 'register', component: _components_register_register_component__WEBPACK_IMPORTED_MODULE_8__["RegisterComponent"] },
    { path: 'create-employee', component: _components_employee_create_employee_create_component__WEBPACK_IMPORTED_MODULE_3__["EmployeeCreateComponent"] },
    { path: 'edit-employee/:id', component: _components_employee_edit_employee_edit_component__WEBPACK_IMPORTED_MODULE_4__["EmployeeEditComponent"] },
    { path: 'employees-list', component: _components_employee_list_employee_list_component__WEBPACK_IMPORTED_MODULE_5__["EmployeeListComponent"] }
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

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".menu-spacer {\r\n  flex: 1 1 auto;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWVudS1zcGFjZXIge1xyXG4gIGZsZXg6IDEgMSBhdXRvO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm\">\r\n  <h5 class=\"my-0 mr-md-auto font-weight-normal\">Innovation Platform</h5>\r\n</div>\r\n\r\n<router-outlet></router-outlet>"

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
        this.title = 'mean-stack-crud-app';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_employee_create_employee_create_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/employee-create/employee-create.component */ "./src/app/components/employee-create/employee-create.component.ts");
/* harmony import */ var _components_employee_edit_employee_edit_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/employee-edit/employee-edit.component */ "./src/app/components/employee-edit/employee-edit.component.ts");
/* harmony import */ var _components_employee_list_employee_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/employee-list/employee-list.component */ "./src/app/components/employee-list/employee-list.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _service_api_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./service/api.service */ "./src/app/service/api.service.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");
/* harmony import */ var _components_home_initial_setup_initial_setup_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/home/initial-setup/initial-setup.component */ "./src/app/components/home/initial-setup/initial-setup.component.ts");
/* harmony import */ var _components_home_journey_journey_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/home/journey/journey.component */ "./src/app/components/home/journey/journey.component.ts");
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _components_employee_create_employee_create_component__WEBPACK_IMPORTED_MODULE_7__["EmployeeCreateComponent"],
                _components_employee_list_employee_list_component__WEBPACK_IMPORTED_MODULE_9__["EmployeeListComponent"],
                _components_employee_edit_employee_edit_component__WEBPACK_IMPORTED_MODULE_8__["EmployeeEditComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_12__["HomeComponent"],
                _components_register_register_component__WEBPACK_IMPORTED_MODULE_13__["RegisterComponent"],
                _components_home_initial_setup_initial_setup_component__WEBPACK_IMPORTED_MODULE_14__["InitialSetupComponent"],
                _components_home_journey_journey_component__WEBPACK_IMPORTED_MODULE_15__["JourneyComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
            ],
            providers: [_service_api_service__WEBPACK_IMPORTED_MODULE_11__["ApiService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/employee-create/employee-create.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components/employee-create/employee-create.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZW1wbG95ZWUtY3JlYXRlL2VtcGxveWVlLWNyZWF0ZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/employee-create/employee-create.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/employee-create/employee-create.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row justify-content-center\">\r\n  <div class=\"col-md-4 register-employee\">\r\n    <!-- form card register -->\r\n    <div class=\"card-body\">\r\n      <form [formGroup]=\"employeeForm\" (ngSubmit)=\"onSubmit()\">\r\n        <div class=\"form-group\">\r\n          <label for=\"inputName\">Name</label>\r\n          <input class=\"form-control\" type=\"text\" formControlName=\"name\">\r\n          <!-- error -->\r\n          <div class=\"invalid-feedback\" *ngIf=\"submitted && myForm.name.errors?.required\">\r\n            Name is required.\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n          <label for=\"inputEmail3\">Email</label>\r\n          <input class=\"form-control\" type=\"text\" formControlName=\"email\">\r\n          <!-- error -->\r\n          <div class=\"invalid-feedback\" *ngIf=\"submitted && myForm.email.errors?.required\">\r\n            Enter your email.\r\n          </div>\r\n          <div class=\"invalid-feedback\" *ngIf=\"submitted && myForm.email.errors?.pattern\">\r\n            Enter valid email.\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n          <label for=\"inputPassword3\">Designation</label>\r\n          <select class=\"custom-select form-control\" (change)=\"updateProfile($event.target.value)\"\r\n            formControlName=\"designation\">\r\n            <option value=\"\">Choose...</option>\r\n            <option *ngFor=\"let employeeProfile of EmployeeProfile\" value=\"{{employeeProfile}}\">{{employeeProfile}}\r\n            </option>\r\n          </select>\r\n          <!-- error -->\r\n          <div class=\"invalid-feedback\" *ngIf=\"submitted && myForm.designation.errors?.required\">\r\n            Choose designation.\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n          <label for=\"inputVerify3\">Mobile No</label>\r\n          <input class=\"form-control\" type=\"text\" formControlName=\"phoneNumber\">\r\n          <!-- error -->\r\n          <div class=\"invalid-feedback\" *ngIf=\"submitted && myForm.phoneNumber.errors?.required\">\r\n            Enter your phone number.\r\n          </div>\r\n          <div class=\"invalid-feedback\" *ngIf=\"submitted && myForm.phoneNumber.errors?.pattern\">\r\n            Enter Numbers Only\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n          <button class=\"btn btn-success btn-lg btn-block\" type=\"submit\">Register</button>\r\n        </div>\r\n      </form>\r\n\r\n    </div>\r\n  </div><!-- form card register -->\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/employee-create/employee-create.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/employee-create/employee-create.component.ts ***!
  \*************************************************************************/
/*! exports provided: EmployeeCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeCreateComponent", function() { return EmployeeCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../service/api.service */ "./src/app/service/api.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");





var EmployeeCreateComponent = /** @class */ (function () {
    function EmployeeCreateComponent(fb, router, ngZone, apiService) {
        this.fb = fb;
        this.router = router;
        this.ngZone = ngZone;
        this.apiService = apiService;
        this.submitted = false;
        this.EmployeeProfile = ['Finance', 'BDM', 'HR', 'Sales', 'Admin'];
        this.mainForm();
    }
    EmployeeCreateComponent.prototype.ngOnInit = function () { };
    EmployeeCreateComponent.prototype.mainForm = function () {
        this.employeeForm = this.fb.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
            designation: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            phoneNumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('^[0-9]+$')]]
        });
    };
    // Choose designation with select dropdown
    EmployeeCreateComponent.prototype.updateProfile = function (e) {
        this.employeeForm.get('designation').setValue(e, {
            onlySelf: true
        });
    };
    Object.defineProperty(EmployeeCreateComponent.prototype, "myForm", {
        // Getter to access form control
        get: function () {
            return this.employeeForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    EmployeeCreateComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        if (!this.employeeForm.valid) {
            return false;
        }
        else {
            this.apiService.createEmployee(this.employeeForm.value).subscribe(function (res) {
                console.log('Employee successfully created!');
                _this.ngZone.run(function () { return _this.router.navigateByUrl('/employees-list'); });
            }, function (error) {
                console.log(error);
            });
        }
    };
    EmployeeCreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-employee-create',
            template: __webpack_require__(/*! ./employee-create.component.html */ "./src/app/components/employee-create/employee-create.component.html"),
            styles: [__webpack_require__(/*! ./employee-create.component.css */ "./src/app/components/employee-create/employee-create.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"],
            _service_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]])
    ], EmployeeCreateComponent);
    return EmployeeCreateComponent;
}());



/***/ }),

/***/ "./src/app/components/employee-edit/employee-edit.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/employee-edit/employee-edit.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZW1wbG95ZWUtZWRpdC9lbXBsb3llZS1lZGl0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/employee-edit/employee-edit.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/employee-edit/employee-edit.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " <div class=\"row justify-content-center\">\r\n   <div class=\"col-md-4 register-employee\">\r\n     <!-- form card register -->\r\n     <div class=\"card card-outline-secondary\">\r\n       <div class=\"card-header\">\r\n         <h3 class=\"mb-0\">Edit Employee</h3>\r\n       </div>\r\n       <div class=\"card-body\">\r\n         <form [formGroup]=\"editForm\" (ngSubmit)=\"onSubmit()\">\r\n\r\n           <div class=\"form-group\">\r\n             <label for=\"inputName\">Name</label>\r\n             <input class=\"form-control\" type=\"text\" formControlName=\"name\">\r\n             <div class=\"invalid-feedback\" *ngIf=\"submitted && myForm.name.errors?.required\">\r\n               Name is required.\r\n             </div>\r\n           </div>\r\n           <div class=\"form-group\">\r\n             <label for=\"inputEmail3\">Email</label>\r\n             <input class=\"form-control\" type=\"text\" formControlName=\"email\">\r\n             <!-- error -->\r\n             <div class=\"invalid-feedback\" *ngIf=\"submitted && myForm.email.errors?.required\">\r\n               Enter your email.\r\n             </div>\r\n             <div class=\"invalid-feedback\" *ngIf=\"submitted && myForm.email.errors?.pattern\">\r\n               Enter valid email.\r\n             </div>\r\n           </div>\r\n\r\n           <div class=\"form-group\">\r\n             <label for=\"inputPassword3\">Designation</label>\r\n             <select class=\"custom-select form-control\" (change)=\"updateProfile($event.target.value)\"\r\n               formControlName=\"designation\">\r\n               <option value=\"\">Choose...</option>\r\n               <option *ngFor=\"let employeeProfile of EmployeeProfile\" value=\"{{employeeProfile}}\">{{employeeProfile}}\r\n               </option>\r\n             </select>\r\n             <!-- error -->\r\n             <div class=\"invalid-feedback\" *ngIf=\"submitted && myForm.designation.errors?.required\">\r\n               Choose designation.\r\n             </div>\r\n           </div>\r\n\r\n           <div class=\"form-group\">\r\n             <label for=\"inputVerify3\">Mobile No</label>\r\n             <input class=\"form-control\" type=\"text\" formControlName=\"phoneNumber\">\r\n             <!-- error -->\r\n             <div class=\"invalid-feedback\" *ngIf=\"submitted && myForm.phoneNumber.errors?.required\">\r\n               Enter your phone number.\r\n             </div>\r\n             <div class=\"invalid-feedback\" *ngIf=\"submitted && myForm.phoneNumber.errors?.pattern\">\r\n               Enter Numbers Only\r\n             </div>\r\n           </div>\r\n\r\n           <div class=\"form-group\">\r\n             <button class=\"btn btn-success btn-lg btn-block\" type=\"submit\">Update</button>\r\n           </div>\r\n         </form>\r\n       </div>\r\n     </div><!-- form  -->\r\n   </div>\r\n </div>\r\n"

/***/ }),

/***/ "./src/app/components/employee-edit/employee-edit.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/employee-edit/employee-edit.component.ts ***!
  \*********************************************************************/
/*! exports provided: EmployeeEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeEditComponent", function() { return EmployeeEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../service/api.service */ "./src/app/service/api.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");





var EmployeeEditComponent = /** @class */ (function () {
    function EmployeeEditComponent(fb, actRoute, apiService, router) {
        this.fb = fb;
        this.actRoute = actRoute;
        this.apiService = apiService;
        this.router = router;
        this.submitted = false;
        this.EmployeeProfile = ['Finance', 'BDM', 'HR', 'Sales', 'Admin'];
    }
    EmployeeEditComponent.prototype.ngOnInit = function () {
        this.updateEmployee();
        var id = this.actRoute.snapshot.paramMap.get('id');
        this.getEmployee(id);
        this.editForm = this.fb.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
            designation: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            phoneNumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('^[0-9]+$')]]
        });
    };
    // Choose options with select-dropdown
    EmployeeEditComponent.prototype.updateProfile = function (e) {
        this.editForm.get('designation').setValue(e, {
            onlySelf: true
        });
    };
    Object.defineProperty(EmployeeEditComponent.prototype, "myForm", {
        // Getter to access form control
        get: function () {
            return this.editForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    EmployeeEditComponent.prototype.getEmployee = function (id) {
        var _this = this;
        this.apiService.getEmployee(id).subscribe(function (data) {
            _this.editForm.setValue({
                name: data['name'],
                email: data['email'],
                designation: data['designation'],
                phoneNumber: data['phoneNumber'],
            });
        });
    };
    EmployeeEditComponent.prototype.updateEmployee = function () {
        this.editForm = this.fb.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
            designation: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            phoneNumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('^[0-9]+$')]]
        });
    };
    EmployeeEditComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        if (!this.editForm.valid) {
            return false;
        }
        else {
            if (window.confirm('Are you sure?')) {
                var id = this.actRoute.snapshot.paramMap.get('id');
                this.apiService.updateEmployee(id, this.editForm.value)
                    .subscribe(function (res) {
                    _this.router.navigateByUrl('/employees-list');
                    console.log('Content updated successfully!');
                }, function (error) {
                    console.log(error);
                });
            }
        }
    };
    EmployeeEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-employee-edit',
            template: __webpack_require__(/*! ./employee-edit.component.html */ "./src/app/components/employee-edit/employee-edit.component.html"),
            styles: [__webpack_require__(/*! ./employee-edit.component.css */ "./src/app/components/employee-edit/employee-edit.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _service_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], EmployeeEditComponent);
    return EmployeeEditComponent;
}());



/***/ }),

/***/ "./src/app/components/employee-list/employee-list.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/employee-list/employee-list.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZW1wbG95ZWUtbGlzdC9lbXBsb3llZS1saXN0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/employee-list/employee-list.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/employee-list/employee-list.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <!-- No data message -->\r\n  <p *ngIf=\"Employee.length <= 0\" class=\"no-data text-center\">There is no employee added yet!</p>\r\n\r\n  <!-- Employee list -->\r\n  <table class=\"table table-bordered\" *ngIf=\"Employee.length > 0\">\r\n    <thead class=\"table-success\">\r\n      <tr>\r\n        <th scope=\"col\">Employee ID</th>\r\n        <th scope=\"col\">Name</th>\r\n        <th scope=\"col\">Email</th>\r\n        <th scope=\"col\">Designation</th>\r\n        <th scope=\"col\">Phone No</th>\r\n        <th scope=\"col center\">Update</th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr *ngFor=\"let employee of Employee; let i = index\">\r\n        <th scope=\"row\">{{employee._id}}</th>\r\n        <td>{{employee.name}}</td>\r\n        <td>{{employee.email}}</td>\r\n        <td>{{employee.designation}}</td>\r\n        <td>{{employee.phoneNumber}}</td>\r\n        <td class=\"text-center edit-block\">\r\n          <span class=\"edit\" [routerLink]=\"['/edit-employee/', employee._id]\">\r\n            <button type=\"button\" class=\"btn btn-success btn-sm\">Edit</button>\r\n          </span>\r\n          <span class=\"delete\" (click)=\"removeEmployee(employee, i)\">\r\n            <button type=\"button\" class=\"btn btn-danger btn-sm\">Delete</button>\r\n          </span>\r\n        </td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n</div>"

/***/ }),

/***/ "./src/app/components/employee-list/employee-list.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/employee-list/employee-list.component.ts ***!
  \*********************************************************************/
/*! exports provided: EmployeeListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeListComponent", function() { return EmployeeListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../service/api.service */ "./src/app/service/api.service.ts");



var EmployeeListComponent = /** @class */ (function () {
    function EmployeeListComponent(apiService) {
        this.apiService = apiService;
        this.Employee = [];
        this.readEmployee();
    }
    EmployeeListComponent.prototype.ngOnInit = function () { };
    EmployeeListComponent.prototype.readEmployee = function () {
        var _this = this;
        this.apiService.getEmployees().subscribe(function (data) {
            _this.Employee = data;
        });
    };
    EmployeeListComponent.prototype.removeEmployee = function (employee, index) {
        var _this = this;
        if (window.confirm('Are you sure?')) {
            this.apiService.deleteEmployee(employee._id).subscribe(function (data) {
                _this.Employee.splice(index, 1);
            });
        }
    };
    EmployeeListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-employee-list',
            template: __webpack_require__(/*! ./employee-list.component.html */ "./src/app/components/employee-list/employee-list.component.html"),
            styles: [__webpack_require__(/*! ./employee-list.component.css */ "./src/app/components/employee-list/employee-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]])
    ], EmployeeListComponent);
    return EmployeeListComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a (click)=\"navigate('/home/initial-setup')\">Initial Setup</a><br>\n<a (click)=\"navigate('/home/journey')\">Journey</a>\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var HomeComponent = /** @class */ (function () {
    function HomeComponent(router) {
        this.router = router;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.navigate = function (path) {
        this.router.navigate([path]);
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/home/initial-setup/initial-setup.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/components/home/initial-setup/initial-setup.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9pbml0aWFsLXNldHVwL2luaXRpYWwtc2V0dXAuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/home/initial-setup/initial-setup.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/components/home/initial-setup/initial-setup.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  initial-setup works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/home/initial-setup/initial-setup.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/components/home/initial-setup/initial-setup.component.ts ***!
  \**************************************************************************/
/*! exports provided: InitialSetupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InitialSetupComponent", function() { return InitialSetupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var InitialSetupComponent = /** @class */ (function () {
    function InitialSetupComponent() {
    }
    InitialSetupComponent.prototype.ngOnInit = function () {
    };
    InitialSetupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-initial-setup',
            template: __webpack_require__(/*! ./initial-setup.component.html */ "./src/app/components/home/initial-setup/initial-setup.component.html"),
            styles: [__webpack_require__(/*! ./initial-setup.component.css */ "./src/app/components/home/initial-setup/initial-setup.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], InitialSetupComponent);
    return InitialSetupComponent;
}());



/***/ }),

/***/ "./src/app/components/home/journey/journey.component.css":
/*!***************************************************************!*\
  !*** ./src/app/components/home/journey/journey.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9qb3VybmV5L2pvdXJuZXkuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/home/journey/journey.component.html":
/*!****************************************************************!*\
  !*** ./src/app/components/home/journey/journey.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  journey works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/home/journey/journey.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/home/journey/journey.component.ts ***!
  \**************************************************************/
/*! exports provided: JourneyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JourneyComponent", function() { return JourneyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var JourneyComponent = /** @class */ (function () {
    function JourneyComponent() {
    }
    JourneyComponent.prototype.ngOnInit = function () {
    };
    JourneyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-journey',
            template: __webpack_require__(/*! ./journey.component.html */ "./src/app/components/home/journey/journey.component.html"),
            styles: [__webpack_require__(/*! ./journey.component.css */ "./src/app/components/home/journey/journey.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], JourneyComponent);
    return JourneyComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/login/login.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".input-box {\r\n  max-width: 400px;\r\n}\r\n.login-form {\r\n  margin-top: 40px;\r\n  text-align: center;\r\n}\r\n.container {\r\n  max-width: 400px;\r\n}\r\n.login-page-logo {\r\n  margin: 20px;\r\n  border-radius: 50%;\r\n  width: 100px;\r\n}\r\n.register {\r\n  margin-top: 15px;\r\n}\r\n.innplat {\r\n  color: #007bff;\r\n}\r\n.facch {\r\n  color: grey;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsWUFBWTtBQUNkO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFFQTtFQUNFLGNBQWM7QUFDaEI7QUFFQTtFQUNFLFdBQVc7QUFDYiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbnB1dC1ib3gge1xyXG4gIG1heC13aWR0aDogNDAwcHg7XHJcbn1cclxuLmxvZ2luLWZvcm0ge1xyXG4gIG1hcmdpbi10b3A6IDQwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5jb250YWluZXIge1xyXG4gIG1heC13aWR0aDogNDAwcHg7XHJcbn1cclxuLmxvZ2luLXBhZ2UtbG9nbyB7XHJcbiAgbWFyZ2luOiAyMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICB3aWR0aDogMTAwcHg7XHJcbn1cclxuLnJlZ2lzdGVyIHtcclxuICBtYXJnaW4tdG9wOiAxNXB4O1xyXG59XHJcblxyXG4uaW5ucGxhdCB7XHJcbiAgY29sb3I6ICMwMDdiZmY7XHJcbn1cclxuXHJcbi5mYWNjaCB7XHJcbiAgY29sb3I6IGdyZXk7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"login-form\">\n  <form class=\"container\">\n    <h2 class=\"text-center innplat\">Innovation Platform</h2>\n    <h4 class=\"text-center facch\">facilitating change</h4>\n    <img class=\"login-page-logo\" src=\"/assets/images/login-page-logo.PNG\" alt=\"Avatar\">\n    <div class=\"input-box form-group\">\n      <input type=\"text\" class=\"form-control\" placeholder=\"Username\" required=\"required\">\n    </div>\n    <div class=\"input-box form-group\">\n      <input type=\"password\" class=\"form-control\" placeholder=\"Password\" required=\"required\">\n    </div>\n    <div class=\"input-box form-group\">\n      <button type=\"submit\" class=\"btn btn-primary btn-block\" (click)=\"login()\">Log in</button>\n    </div>\n    <div class=\"clearfix\">\n      <label class=\"float-left form-check-label\"><input type=\"checkbox\"> Remember me</label>\n      <a class=\"float-right\">Forgot Password?</a>\n    </div>\n  </form>\n  <p class=\"text-center register\"><a (click)=\"register()\">Create an Account</a></p>\n</div>"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var LoginComponent = /** @class */ (function () {
    function LoginComponent(router) {
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function () {
        console.log("login");
        this.router.navigate(['home']);
    };
    LoginComponent.prototype.register = function () {
        console.log("register");
        this.router.navigate(['register']);
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/register/register.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/register/register.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".input-box {\r\n  max-width: 400px;\r\n}\r\n.register-form {\r\n  text-align: center;\r\n}\r\n.container {\r\n  max-width: 400px;\r\n}\r\n.register-page-logo {\r\n  margin: 20px;\r\n  border-radius: 50%;\r\n  width: 100px;\r\n}\r\n.user-head {\r\n  margin: auto;\r\n}\r\n.register {\r\n  margin-top: 15px;\r\n}\r\n.innplat {\r\n  color: #007bff;\r\n}\r\n.facch {\r\n  color: grey;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixZQUFZO0FBQ2Q7QUFDQTtFQUNFLFlBQVk7QUFDZDtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSxjQUFjO0FBQ2hCO0FBRUE7RUFDRSxXQUFXO0FBQ2IiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW5wdXQtYm94IHtcclxuICBtYXgtd2lkdGg6IDQwMHB4O1xyXG59XHJcbi5yZWdpc3Rlci1mb3JtIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmNvbnRhaW5lciB7XHJcbiAgbWF4LXdpZHRoOiA0MDBweDtcclxufVxyXG4ucmVnaXN0ZXItcGFnZS1sb2dvIHtcclxuICBtYXJnaW46IDIwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIHdpZHRoOiAxMDBweDtcclxufVxyXG4udXNlci1oZWFkIHtcclxuICBtYXJnaW46IGF1dG87XHJcbn1cclxuLnJlZ2lzdGVyIHtcclxuICBtYXJnaW4tdG9wOiAxNXB4O1xyXG59XHJcblxyXG4uaW5ucGxhdCB7XHJcbiAgY29sb3I6ICMwMDdiZmY7XHJcbn1cclxuXHJcbi5mYWNjaCB7XHJcbiAgY29sb3I6IGdyZXk7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/register/register.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/register/register.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"register-form\">\n  <form class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-xs-6\">\n        <img class=\"register-page-logo\" src=\"/assets/images/user-logo.PNG\" alt=\"Avatar\">\n      </div>\n      <div class=\"col-xs-6 user-head\">\n        <h2 class=\"text-center innplat\">User</h2>\n        <h4 class=\"text-center facch\">Initial Setup</h4>\n      </div>\n    </div>\n    <div class=\"input-box form-group\">\n      <input type=\"text\" class=\"form-control\" placeholder=\"Firstname\" required=\"required\">\n    </div>\n    <div class=\"input-box form-group\">\n      <input type=\"text\" class=\"form-control\" placeholder=\"Lastname\" required=\"required\">\n    </div>\n    <div class=\"input-box form-group\">\n      <input type=\"text\" class=\"form-control\" placeholder=\"Email\" required=\"required\">\n    </div>\n    <div class=\"input-box form-group\">\n      <input type=\"password\" class=\"form-control\" placeholder=\"Password\" required=\"required\">\n    </div>\n    <div class=\"input-box form-group\">\n      <input type=\"password\" class=\"form-control\" placeholder=\"Confirm Password\" required=\"required\">\n    </div>\n    <div class=\"input-box form-group\">\n      <button type=\"submit\" class=\"btn btn-primary btn-block\" (click)=\"submit()\">Submit</button>\n    </div>\n    <div class=\"input-box form-group\">\n      <button type=\"submit\" class=\"btn btn-primary btn-block\" (click)=\"back()\">Go Back</button>\n    </div>\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/components/register/register.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/register/register.component.ts ***!
  \***********************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(router) {
        this.router = router;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.submit = function () {
        console.log("submit");
    };
    RegisterComponent.prototype.back = function () {
        this.router.navigate(['/login']);
    };
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/components/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/components/register/register.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/service/api.service.ts":
/*!****************************************!*\
  !*** ./src/app/service/api.service.ts ***!
  \****************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../environments/environment */ "./src/environments/environment.ts");






var ApiService = /** @class */ (function () {
    function ApiService(http) {
        this.http = http;
        this.baseUri = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].baseUri;
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set("Content-Type", "application/json");
    }
    // Create
    ApiService.prototype.createEmployee = function (data) {
        var url = this.baseUri + "/create";
        return this.http.post(url, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorMgmt));
    };
    // Get all employees
    ApiService.prototype.getEmployees = function () {
        return this.http.get("" + this.baseUri);
    };
    // Get employee
    ApiService.prototype.getEmployee = function (id) {
        var url = this.baseUri + "/read/" + id;
        return this.http.get(url, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            return res || {};
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorMgmt));
    };
    // Update employee
    ApiService.prototype.updateEmployee = function (id, data) {
        var url = this.baseUri + "/update/" + id;
        return this.http
            .put(url, data, { headers: this.headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorMgmt));
    };
    // Delete employee
    ApiService.prototype.deleteEmployee = function (id) {
        var url = this.baseUri + "/delete/" + id;
        return this.http
            .delete(url, { headers: this.headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorMgmt));
    };
    // Error handling
    ApiService.prototype.errorMgmt = function (error) {
        var errorMessage = "";
        if (error.error instanceof ErrorEvent) {
            // Get client-side error
            errorMessage = error.error.message;
        }
        else {
            // Get server-side error
            errorMessage = "Error Code: " + error.status + "\nMessage: " + error.message;
        }
        console.log(errorMessage);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(errorMessage);
    };
    ApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: "root",
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ApiService);
    return ApiService;
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
    production: false,
    baseUri: "http://localhost:4000/api"
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

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! F:\Humber\capstone\project\mean-app-humber-capstone\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map