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
/* harmony import */ var _components_employee_list_employee_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/employee-list/employee-list.component */ "./src/app/components/employee-list/employee-list.component.ts");
/* harmony import */ var _components_employee_edit_employee_edit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/employee-edit/employee-edit.component */ "./src/app/components/employee-edit/employee-edit.component.ts");






var routes = [
    { path: '', pathMatch: 'full', redirectTo: 'create-employee' },
    { path: 'create-employee', component: _components_employee_create_employee_create_component__WEBPACK_IMPORTED_MODULE_3__["EmployeeCreateComponent"] },
    { path: 'edit-employee/:id', component: _components_employee_edit_employee_edit_component__WEBPACK_IMPORTED_MODULE_5__["EmployeeEditComponent"] },
    { path: 'employees-list', component: _components_employee_list_employee_list_component__WEBPACK_IMPORTED_MODULE_4__["EmployeeListComponent"] }
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

module.exports = "<div class=\"d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm\">\r\n  <h5 class=\"my-0 mr-md-auto font-weight-normal\">Business Innovation Platform</h5>\r\n  <nav class=\"my-2 my-md-0 mr-md-3\">\r\n    <a class=\"btn btn-outline-primary\" routerLinkActive=\"active\" routerLink=\"/employees-list\">View Employees</a>\r\n  </nav>\r\n  <a class=\"btn btn-outline-primary\" routerLinkActive=\"active\" routerLink=\"/create-employee\">Add Employee</a>\r\n</div>\r\n\r\n<router-outlet></router-outlet>"

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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_employee_create_employee_create_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/employee-create/employee-create.component */ "./src/app/components/employee-create/employee-create.component.ts");
/* harmony import */ var _components_employee_list_employee_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/employee-list/employee-list.component */ "./src/app/components/employee-list/employee-list.component.ts");
/* harmony import */ var _components_employee_edit_employee_edit_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/employee-edit/employee-edit.component */ "./src/app/components/employee-edit/employee-edit.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _service_api_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./service/api.service */ "./src/app/service/api.service.ts");











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _components_employee_create_employee_create_component__WEBPACK_IMPORTED_MODULE_5__["EmployeeCreateComponent"],
                _components_employee_list_employee_list_component__WEBPACK_IMPORTED_MODULE_6__["EmployeeListComponent"],
                _components_employee_edit_employee_edit_component__WEBPACK_IMPORTED_MODULE_7__["EmployeeEditComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"]
            ],
            providers: [_service_api_service__WEBPACK_IMPORTED_MODULE_10__["ApiService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");





var ApiService = /** @class */ (function () {
    function ApiService(http) {
        this.http = http;
        this.baseUri = "/api";
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]().set("Content-Type", "application/json");
    }
    // Create
    ApiService.prototype.createEmployee = function (data) {
        var url = this.baseUri + "/create";
        return this.http.post(url, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorMgmt));
    };
    // Get all employees
    ApiService.prototype.getEmployees = function () {
        return this.http.get("" + this.baseUri);
    };
    // Get employee
    ApiService.prototype.getEmployee = function (id) {
        var url = this.baseUri + "/read/" + id;
        return this.http.get(url, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            return res || {};
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorMgmt));
    };
    // Update employee
    ApiService.prototype.updateEmployee = function (id, data) {
        var url = this.baseUri + "/update/" + id;
        return this.http
            .put(url, data, { headers: this.headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorMgmt));
    };
    // Delete employee
    ApiService.prototype.deleteEmployee = function (id) {
        var url = this.baseUri + "/delete/" + id;
        return this.http
            .delete(url, { headers: this.headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorMgmt));
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
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(errorMessage);
    };
    ApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: "root",
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]])
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