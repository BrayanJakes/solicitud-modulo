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
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");




var routes = [
    // {path: 'registro', component: RegistroComponent},
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] }
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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet>\n</router-outlet>"

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
        this.title = 'facturaciones';
        this.fecha = new Date();
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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _registro_registro_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./registro/registro.component */ "./src/app/registro/registro.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _layouts_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./layouts/toolbar/toolbar.component */ "./src/app/layouts/toolbar/toolbar.component.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _components_angular_material_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/angular-material.module */ "./src/app/components/angular-material.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");







// components




// angular material



var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _registro_registro_component__WEBPACK_IMPORTED_MODULE_7__["RegistroComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"],
                _layouts_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_9__["ToolbarComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_10__["ComponentsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatToolbarModule"],
                _components_angular_material_module__WEBPACK_IMPORTED_MODULE_12__["AngularMaterialModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/angular-material.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/angular-material.module.ts ***!
  \*******************************************************/
/*! exports provided: AngularMaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularMaterialModule", function() { return AngularMaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");



var AngularMaterialModule = /** @class */ (function () {
    function AngularMaterialModule() {
    }
    AngularMaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatBadgeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatBottomSheetModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"]],
            exports: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatBadgeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatBottomSheetModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"]]
        })
    ], AngularMaterialModule);
    return AngularMaterialModule;
}());



/***/ }),

/***/ "./src/app/components/clientes/clientes.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/clientes/clientes.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-form-field {\n    display: block;\n}\n\ntable {\n    width: 100%;\n}\n\n.alto {\n    height: 420px;\n    overflow: hidden;\n}\n\n.scroll {\n    overflow-y: scroll;\n    height: 400px;\n    /*background:gray;*/\n    padding: 5px;\n}\n\n.example-spacer {\n    -webkit-box-flex: 1;\n            flex: 1 1 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jbGllbnRlcy9jbGllbnRlcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGFBQWE7SUFDYixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksbUJBQWM7WUFBZCxjQUFjO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jbGllbnRlcy9jbGllbnRlcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWZvcm0tZmllbGQge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuXG50YWJsZSB7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5hbHRvIHtcbiAgICBoZWlnaHQ6IDQyMHB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5zY3JvbGwge1xuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgICBoZWlnaHQ6IDQwMHB4O1xuICAgIC8qYmFja2dyb3VuZDpncmF5OyovXG4gICAgcGFkZGluZzogNXB4O1xufVxuXG4uZXhhbXBsZS1zcGFjZXIge1xuICAgIGZsZXg6IDEgMSBhdXRvO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/clientes/clientes.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/clientes/clientes.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid mt-5\">\n\n\n    <div class=\"row\">\n\n\n        <div class=\"col-md-5\">\n\n            <mat-card>\n                <mat-card-title *ngIf=\"editandoCliente\">\n                    Editando Cliente\n                </mat-card-title>\n\n                <mat-card-title *ngIf=\"!editandoCliente\">\n                    Nuevo Cliente\n                </mat-card-title>\n\n                <mat-card-content>\n\n                    <form #form=\"ngForm\" (ngSubmit)=\"RegistrarCliente(form)\">\n                        <input type=\"hidden\" name=\"id\" [(ngModel)]=\"formulario._id\">\n                        <div class=\"row\">\n                            <div class=\"col-md-12 \">\n                                <mat-form-field appearance=\"outline\">\n                                    <mat-label>Nombre Completo</mat-label>\n                                    <input type=\"text\" matInput placeholder=\"Nombre completo\" name=\"nombre\" [(ngModel)]=\"formulario.nombre\" required>\n\n\n                                </mat-form-field>\n                            </div>\n\n                        </div>\n\n                        <div class=\"row\">\n\n\n\n                            <div class=\"col-md-6\">\n                                <mat-form-field appearance=\"outline\">\n                                    <mat-label>Cedula (Ejemplo: V-00000000)</mat-label>\n                                    <input type=\"text\" matInput placeholder=\"Cedula\" name=\"cedula\" [disabled]=\"editandoCliente\" [(ngModel)]=\"formulario.cedula\">\n\n\n                                </mat-form-field>\n                            </div>\n\n                            <div class=\"col-md-6\">\n                                <mat-form-field appearance=\"outline\">\n                                    <mat-label>Edad</mat-label>\n                                    <input type=\"text\" matInput placeholder=\"Edad\" name=\"edad\" [(ngModel)]=\"formulario.edad\" #edad (keyup)=\"edad1 = edad.value\" data-inputmask='\"mask\": \"99\"' data-mask>\n\n\n                                </mat-form-field>\n                            </div>\n\n\n\n                        </div>\n\n                        <div class=\"row\">\n                            <div class=\"col-md-12 \">\n                                <mat-form-field appearance=\"outline\">\n                                    <mat-label>Direccion local</mat-label>\n                                    <input type=\"text\" name=\"direccion\" [(ngModel)]=\"formulario.direccion\" required matInput placeholder=\"Direccion local\">\n\n\n                                </mat-form-field>\n                            </div>\n\n                        </div>\n\n                        <div class=\"row\">\n                            <div class=\"col-md-6\">\n                                <mat-form-field appearance=\"outline\">\n                                    <mat-label>Celular</mat-label>\n                                    <input type=\"text\" matInput placeholder=\"Celular\" name=\"celular\" [(ngModel)]=\"formulario.celular\" #celular (keyup)=\"celular1 = celular.value\" data-inputmask='\"mask\": \"(9999)-999-9999\"' data-mask>\n\n\n                                </mat-form-field>\n                            </div>\n\n                            <div class=\"col-md-6\">\n                                <mat-form-field appearance=\"outline\">\n                                    <mat-label>Telefono (Opcional)</mat-label>\n                                    <input type=\"text\" matInput placeholder=\"Telefono (Opcional)\" name=\"telefono\" [(ngModel)]=\"formulario.telefono\" #telefono (keyup)=\"telefono1 = telefono.value\" data-inputmask='\"mask\": \"(9999)-999-9999\"' data-mask>\n\n\n                                </mat-form-field>\n                            </div>\n\n                        </div>\n\n\n                        <button *ngIf=\" !editandoCliente \" class=\"btn-block\" [disabled]=\"form.valid === false\" mat-raised-button color=\"primary\">Agregar Cliente</button  >\n                        <button  *ngIf=\" editandoCliente \" class=\"btn-block\" [disabled]=\"form.valid === false\" mat-raised-button color=\"primary\">Editar Cliente</button>\n\n                    </form>\n\n\n\n                </mat-card-content>\n\n                <mat-progress-bar mode=\"indeterminate\" *ngIf=\"clickSubmit\"></mat-progress-bar>\n\n            </mat-card>\n\n        </div>\n\n\n        <div class=\"col-md-7\">\n\n            <mat-card>\n                <mat-card-title>\n                    Clientes registrado\n\n                    <span class=\"example-spacer \"></span>\n                    <div class=\"float-right\">\n\n                        <input type=\"text\" matInput placeholder=\"Buscar Cliente\" #buscar (keyup)=\"buscarCliente(buscar.value)\">\n\n\n                    </div>\n                </mat-card-title>\n\n                <mat-card-content class=\"alto\">\n\n                    <div class=\"scroll\">\n                        <table class=\"table table \">\n\n\n                            <thead>\n                                <tr>\n                                    <th>Cliente</th>\n\n                                    <th>Cedula</th>\n\n                                    <th>Celular</th>\n\n                                    <th>Fecha de Creacion</th>\n                                </tr>\n\n                            </thead>\n\n\n                            <tbody>\n                                <h3 *ngIf=\"!existeCliente\" class=\"text-center\"> No existe el cliente </h3>\n                                <tr *ngFor=\"let cliente of clientes\">\n                                    <td> {{cliente.nombre}} </td>\n\n                                    <td>{{cliente.cedula}}</td>\n\n                                    <td>{{cliente.celular}}</td>\n\n                                    <td>{{cliente.fechaCreacion | date: \"short\"}}</td>\n\n                                    <td>\n                                        <button mat-mini-fab color=\"primary\" (click)=\"VerCliente(cliente._id)\"><mat-icon>visibility</mat-icon></button> &nbsp;\n                                        <button mat-mini-fab color=\"primary\" (click)=\"EditarCliente(cliente._id)\"><mat-icon>create</mat-icon></button> &nbsp;\n                                        <button mat-mini-fab color=\"primary\" (click)=\"EliminarCliente(cliente._id)\"><mat-icon>delete</mat-icon></button>\n                                    </td>\n                                </tr>\n\n                            </tbody>\n\n\n\n                        </table>\n                    </div>\n\n                </mat-card-content>\n            </mat-card>\n        </div>\n\n\n\n\n\n\n    </div>\n\n\n\n\n\n</div>"

/***/ }),

/***/ "./src/app/components/clientes/clientes.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/clientes/clientes.component.ts ***!
  \***********************************************************/
/*! exports provided: ClientesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientesComponent", function() { return ClientesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_cliente_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/cliente.service */ "./src/app/services/cliente.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _vercliente_vercliente_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../vercliente/vercliente.component */ "./src/app/components/vercliente/vercliente.component.ts");





var ClientesComponent = /** @class */ (function () {
    function ClientesComponent(clienteService, bottomSheet, snackBar) {
        this.clienteService = clienteService;
        this.bottomSheet = bottomSheet;
        this.snackBar = snackBar;
        this.clickSubmit = false;
        this.formulario = {
            nombre: '',
            cedula: 'V-',
            edad: '',
            celular: '',
            telefono: '',
            direccion: '',
            id: ''
        };
        this.clientes = [];
        this.editandoCliente = false;
        this.existeCliente = true;
    }
    ClientesComponent.prototype.ngOnInit = function () {
        this.llamarCliente();
    };
    ClientesComponent.prototype.RegistrarCliente = function (form) {
        var _this = this;
        if (this.formulario.cedula.charAt(0) === 'V' || this.formulario.cedula.charAt(0) === 'E') {
            this.clickSubmit = true;
            if (this.formulario.id !== '') {
                var cliente_1 = {
                    cedula: this.formulario.cedula,
                    celular: this.celular1,
                    direccion: this.formulario.direccion,
                    edad: this.edad1,
                    nombre: this.formulario.nombre,
                    telefono: this.telefono1
                };
                return this.clienteService.actualizarCliente(this.formulario.id, cliente_1).subscribe(function (resp4) {
                    _this.toast('Cliente editado con exito', 'Cerrar');
                    _this.clickSubmit = false;
                    _this.llamarCliente();
                    form.reset();
                    _this.formulario.cedula = 'V-';
                    _this.formulario.id = '';
                    _this.editandoCliente = false;
                });
            }
            var cliente = {
                cedula: this.formulario.cedula,
                celular: this.celular1,
                direccion: this.formulario.direccion,
                edad: this.edad1,
                fechaCreacion: Date.now(),
                nombre: this.formulario.nombre,
                telefono: this.telefono1
            };
            return this.clienteService.CrearCliente(cliente).subscribe(function (resp) {
                if (!resp.err) {
                    form.reset();
                    _this.formulario.cedula = 'V-';
                    _this.llamarCliente();
                    _this.clickSubmit = false;
                    return _this.toast('Cliente creado con exito', 'Cerrar');
                }
                if (resp.err.message === 'clientes validation failed: cedula: cedula debe ser unico') {
                    _this.clickSubmit = false;
                    return _this.toast("Ya existe un usuario con la cedula " + _this.formulario.cedula, 'Cerrar');
                }
            });
        }
        else {
            this.clickSubmit = false;
            return this.toast('La cedula debe empezar con V o E, verifique el ejemplo', 'Cerrar');
        }
    };
    ClientesComponent.prototype.llamarCliente = function () {
        var _this = this;
        this.clienteService.llamarClientes().subscribe(function (resp2) {
            _this.clientes = resp2.listado;
        });
    };
    ClientesComponent.prototype.VerCliente = function (id) {
        var solicitud = this.bottomSheet.open(_vercliente_vercliente_component__WEBPACK_IMPORTED_MODULE_4__["VerclienteComponent"], { data: id });
        solicitud.afterDismissed().subscribe(function (resp) {
        });
    };
    ClientesComponent.prototype.EditarCliente = function (id) {
        var _this = this;
        this.clienteService.verCliente(id).subscribe(function (resp) {
            _this.editandoCliente = true;
            _this.formulario.nombre = resp.solicitud.nombre;
            _this.formulario.cedula = resp.solicitud.cedula;
            _this.formulario.direccion = resp.solicitud.direccion;
            _this.formulario.edad = resp.solicitud.edad;
            _this.formulario.celular = resp.solicitud.celular;
            _this.formulario.telefono = resp.solicitud.telefono;
            _this.formulario.id = resp.solicitud._id;
        });
    };
    ClientesComponent.prototype.buscarCliente = function (key) {
        var _this = this;
        if (key.length > 0) {
            return this.clienteService.buscarCliente(key).subscribe(function (resp) {
                _this.clientes = resp.listado;
                _this.existeCliente = true;
                if (_this.clientes.length === 0) {
                    _this.existeCliente = false;
                }
            });
        }
        this.existeCliente = true;
        this.llamarCliente();
    };
    ClientesComponent.prototype.EliminarCliente = function (id) {
        var _this = this;
        this.clienteService.EliminarCliente(id).subscribe(function () {
            _this.toast('Cliente Eliminado', 'Cerrar');
            _this.editandoCliente = false;
            _this.formulario.id = '';
            return _this.llamarCliente();
        });
    };
    ClientesComponent.prototype.toast = function (mensaje, accion) {
        this.snackBar.open(mensaje, accion, {
            duration: 3000,
        });
    };
    ClientesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-clientes',
            template: __webpack_require__(/*! ./clientes.component.html */ "./src/app/components/clientes/clientes.component.html"),
            styles: [__webpack_require__(/*! ./clientes.component.css */ "./src/app/components/clientes/clientes.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_cliente_service__WEBPACK_IMPORTED_MODULE_2__["ClienteService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatBottomSheet"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]])
    ], ClientesComponent);
    return ClientesComponent;
}());



/***/ }),

/***/ "./src/app/components/components.module.ts":
/*!*************************************************!*\
  !*** ./src/app/components/components.module.ts ***!
  \*************************************************/
/*! exports provided: ComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsModule", function() { return ComponentsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _components_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components.routing */ "./src/app/components/components.routing.ts");
/* harmony import */ var _angular_material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./angular-material.module */ "./src/app/components/angular-material.module.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var _pages_pages_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/pages.component */ "./src/app/components/pages/pages.component.ts");
/* harmony import */ var _nueva_factura_nueva_factura_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./nueva-factura/nueva-factura.component */ "./src/app/components/nueva-factura/nueva-factura.component.ts");
/* harmony import */ var _productos_productos_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./productos/productos.component */ "./src/app/components/productos/productos.component.ts");
/* harmony import */ var _clientes_clientes_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./clientes/clientes.component */ "./src/app/components/clientes/clientes.component.ts");
/* harmony import */ var _vercliente_vercliente_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./vercliente/vercliente.component */ "./src/app/components/vercliente/vercliente.component.ts");
/* harmony import */ var _verfactura_verfactura_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./verfactura/verfactura.component */ "./src/app/components/verfactura/verfactura.component.ts");








// components







var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            entryComponents: [_nueva_factura_nueva_factura_component__WEBPACK_IMPORTED_MODULE_10__["NuevaFacturaComponent"], _vercliente_vercliente_component__WEBPACK_IMPORTED_MODULE_13__["VerclienteComponent"], _verfactura_verfactura_component__WEBPACK_IMPORTED_MODULE_14__["VerfacturaComponent"]],
            declarations: [_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__["DashboardComponent"], _pages_pages_component__WEBPACK_IMPORTED_MODULE_9__["PagesComponent"], _nueva_factura_nueva_factura_component__WEBPACK_IMPORTED_MODULE_10__["NuevaFacturaComponent"], _productos_productos_component__WEBPACK_IMPORTED_MODULE_11__["ProductosComponent"], _clientes_clientes_component__WEBPACK_IMPORTED_MODULE_12__["ClientesComponent"], _vercliente_vercliente_component__WEBPACK_IMPORTED_MODULE_13__["VerclienteComponent"], _verfactura_verfactura_component__WEBPACK_IMPORTED_MODULE_14__["VerfacturaComponent"]],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _components_routing__WEBPACK_IMPORTED_MODULE_4__["ComponentsRoutingModule"],
                _angular_material_module__WEBPACK_IMPORTED_MODULE_5__["AngularMaterialModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"]
            ],
            exports: []
        })
    ], ComponentsModule);
    return ComponentsModule;
}());



/***/ }),

/***/ "./src/app/components/components.routing.ts":
/*!**************************************************!*\
  !*** ./src/app/components/components.routing.ts ***!
  \**************************************************/
/*! exports provided: ComponentsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsRoutingModule", function() { return ComponentsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pages_pages_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/pages.component */ "./src/app/components/pages/pages.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var _productos_productos_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./productos/productos.component */ "./src/app/components/productos/productos.component.ts");
/* harmony import */ var _clientes_clientes_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./clientes/clientes.component */ "./src/app/components/clientes/clientes.component.ts");
/* harmony import */ var _guards_logeado_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../guards/logeado.guard */ "./src/app/guards/logeado.guard.ts");



// components





var routesPage = [
    { path: '', component: _pages_pages_component__WEBPACK_IMPORTED_MODULE_3__["PagesComponent"], canActivate: [_guards_logeado_guard__WEBPACK_IMPORTED_MODULE_7__["LogeadoGuard"]], children: [
            { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"] },
            { path: 'productos', component: _productos_productos_component__WEBPACK_IMPORTED_MODULE_5__["ProductosComponent"] },
            { path: 'clientes', component: _clientes_clientes_component__WEBPACK_IMPORTED_MODULE_6__["ClientesComponent"] },
            { path: '**', redirectTo: 'dashboard' }
        ] }
];
var ComponentsRoutingModule = /** @class */ (function () {
    function ComponentsRoutingModule() {
    }
    ComponentsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routesPage)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], ComponentsRoutingModule);
    return ComponentsRoutingModule;
}());



/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-spacer {\n    -webkit-box-flex: 1;\n            flex: 1 1 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxtQkFBYztZQUFkLGNBQWM7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLXNwYWNlciB7XG4gICAgZmxleDogMSAxIGF1dG87XG59Il19 */"

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container mt-5\">\n\n\n\n    <mat-card>\n        <mat-card-title>\n            Facturaciones\n\n            <span class=\"example-spacer \"></span>\n            <div class=\"float-right\">\n\n                <input type=\"text\" matInput placeholder=\"Buscar Cliente\" #buscar (keyup)=\"buscarCliente(buscar.value)\">\n\n\n            </div>\n        </mat-card-title>\n\n        <mat-card-content>\n\n            <table class=\"table table \">\n\n\n                <thead>\n                    <tr>\n                        <th class=\"text-center\">Codigo Factura</th>\n\n                        <th class=\"text-center\">Cliente</th>\n\n                        <th class=\"text-center\">Cedula</th>\n\n                        <th class=\"text-center\">Fecha Creacion</th>\n\n\n                    </tr>\n\n                </thead>\n\n\n                <tbody>\n                    <h3 *ngIf=\"!existeFactura\"> Cliente solicitado no existe </h3>\n\n                    <tr *ngFor=\"let factura of Facturas\">\n                        <td class=\"text-center\"> {{factura.codigoFactura}} </td>\n\n                        <td class=\"text-center\"> {{factura.cliente}} </td>\n\n                        <td class=\"text-center\"> {{factura.cedula}}</td>\n\n                        <td class=\"text-center\"> {{factura.fechaCreacion | date: \"short\"}}</td>\n\n\n\n                        <td>\n                            <button mat-mini-fab color=\"primary\" (click)=\"abrirDialog(factura._id)\"><mat-icon>visibility</mat-icon></button>&nbsp;\n                            <button mat-mini-fab color=\"primary\" (click)=\"EliminarFactura(factura._id)\"><mat-icon>delete</mat-icon></button>\n                        </td>\n                    </tr>\n\n                </tbody>\n\n\n\n\n\n            </table>\n\n\n\n        </mat-card-content>\n    </mat-card>\n\n\n\n\n\n\n\n</div>"

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.ts ***!
  \*************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_facturacion_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/facturacion.service */ "./src/app/services/facturacion.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _verfactura_verfactura_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../verfactura/verfactura.component */ "./src/app/components/verfactura/verfactura.component.ts");





var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(facturacionService, dialog, snackBar) {
        var _this = this;
        this.facturacionService = facturacionService;
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.Facturas = [];
        this.existeFactura = true;
        setInterval(function () {
            if (_this.facturacionService.NuevaFactura) {
                _this.llamarFacturas();
                _this.facturacionService.NuevaFactura = false;
            }
        }, 1000);
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.llamarFacturas();
    };
    DashboardComponent.prototype.llamarFacturas = function () {
        var _this = this;
        this.facturacionService.llamarFacturas().subscribe(function (resp) {
            _this.Facturas = resp.listado;
        });
    };
    DashboardComponent.prototype.abrirDialog = function (id) {
        var dialogRef = this.dialog.open(_verfactura_verfactura_component__WEBPACK_IMPORTED_MODULE_4__["VerfacturaComponent"], {
            data: id
        });
        dialogRef.afterClosed().subscribe(function (result) {
        });
    };
    DashboardComponent.prototype.EliminarFactura = function (id) {
        var _this = this;
        this.facturacionService.EliminarFactura(id).subscribe(function () {
            _this.toast('Factura Eliminada', 'Cerrar');
            return _this.llamarFacturas();
        });
    };
    DashboardComponent.prototype.buscarCliente = function (key) {
        var _this = this;
        if (key.length > 0) {
            return this.facturacionService.buscarFacturaporCliente(key).subscribe(function (resp) {
                _this.Facturas = resp.listado;
                _this.existeFactura = true;
                if (_this.Facturas.length === 0) {
                    _this.existeFactura = false;
                }
            });
        }
        this.existeFactura = true;
        this.llamarFacturas();
    };
    DashboardComponent.prototype.toast = function (mensaje, accion) {
        this.snackBar.open(mensaje, accion, {
            duration: 3000,
        });
    };
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/components/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/components/dashboard/dashboard.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_facturacion_service__WEBPACK_IMPORTED_MODULE_2__["FacturacionService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/components/nueva-factura/nueva-factura.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/nueva-factura/nueva-factura.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-form-field {\n    display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9udWV2YS1mYWN0dXJhL251ZXZhLWZhY3R1cmEuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL251ZXZhLWZhY3R1cmEvbnVldmEtZmFjdHVyYS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWZvcm0tZmllbGQge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/nueva-factura/nueva-factura.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/nueva-factura/nueva-factura.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Nueva Solicitud</h2>\n<mat-horizontal-stepper linear #stepper>\n    <mat-step>\n        <form #form1=\"ngForm\">\n            <ng-template matStepLabel>Selecciona un cliente (sino se encuentra puedes agregarlo en la seccion \"Nuevo cliente\")</ng-template>\n            <div class=\"row\">\n                <div class=\"col-md-4\">\n                    <mat-form-field appearance=\"outline\" class=\"texto\">\n\n                        <mat-label>Ingresa la cedula y presiona Enter</mat-label>\n\n                        <input matInput placeholder=\"Ingresa la cedula del cliente\" name=\"cedula\" [(ngModel)]=\"nuevaFacturacion.cedula\" #cedula (keyup.enter)=\"buscarCliente(cedula.value)\">\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-8\">\n                    <mat-form-field appearance=\"outline\" class=\"texto\">\n\n                        <mat-label>Cliente</mat-label>\n\n                        <input matInput disabled name=\"cliente\" [(ngModel)]=\"nuevaFacturacion.cliente\">\n                    </mat-form-field>\n                </div>\n            </div>\n            <div>\n                <button mat-button (click)=\"buscarCliente(cedula.value)\">Buscar Cliente</button>\n                <button mat-button matStepperNext [disabled]=\"nuevaFacturacion.cliente === ''\">Siguiente</button>\n            </div>\n        </form>\n    </mat-step>\n    <mat-step>\n        <form #form2=\"ngForm\">\n            <ng-template matStepLabel> Productos </ng-template>\n            <div class=\"row\">\n                <div class=\"col-md-4\">\n                    <mat-form-field appearance=\"outline\" class=\"texto\">\n                        <mat-label>Ingresa el codigo del producto y presina enter</mat-label>\n\n                        <input type=\"number\" [disabled]=\"Producto.producto !== ''\" placeholder=\"Codigo del producto\" value=\"1000\" #codigo (keyup.enter)=\"buscarProducto(codigo.value)\" matInput>\n\n\n                    </mat-form-field>\n\n                    <span *ngIf=\"Producto.producto !== ''\">\n\n                    <mat-form-field  appearance=\"outline\" class=\"texto\">\n                        <mat-label>Producto</mat-label>\n\n                        <input type=\"text\" disabled value=\"{{Producto.producto}}   |   {{Producto.monto}} Bs.S\" matInput>\n\n                    </mat-form-field>\n\n                    <div class=\"row\">\n                        <div class=\"col-md-6\">\n                            <button mat-button (click)=\"agregarProducto(Producto)\" >Agregar producto</button>\n                            \n                        </div>\n                        <div class=\"col-md-6\">\n                            <button mat-button (click)=\"clear()\" >Limpiar</button>\n                        </div>\n                    </div>\n\n                </span>\n\n                    <button mat-button *ngIf=\"Producto.producto === ''\" (click)=\"buscarProducto(codigo.value)\"></button>\n                </div>\n\n                <div class=\"col-md-8\">\n                    <table class=\"table table \">\n\n\n                        <thead>\n                            <tr>\n                                <th class=\"text-center\">Codigo Producto</th>\n\n                                <th class=\"text-center\">Nombre</th>\n\n                                <th class=\"text-center\">Monto</th>\n\n\n                            </tr>\n\n                        </thead>\n\n\n                        <tbody>\n                            <tr *ngFor=\"let producto of nuevaFacturacion.productos; let i = index\">\n                                <td class=\"text-center\"> {{producto.codigoProducto}} </td>\n\n                                <td class=\"text-center\"> {{producto.producto}} </td>\n\n                                <td class=\"text-center\"> {{producto.monto}} Bs.S </td>\n\n\n\n                                <td>\n                                    <button mat-mini-fab color=\"primary\" (click)=\"borrarProducto(i)\"><mat-icon>delete</mat-icon></button>\n                                </td>\n                            </tr>\n\n                        </tbody>\n\n                        <tfoot>\n                            <tr *ngIf=\"nuevaFacturacion.productos.length > 0\">\n                                <td></td>\n                                <td></td>\n                                <td>\n                                    Total Productos: {{ nuevaFacturacion.productos.length }}\n                                </td>\n                            </tr>\n                        </tfoot>\n\n\n\n                    </table>\n                </div>\n            </div>\n            <div>\n                <button mat-button matStepperPrevious>Regresar</button>\n                <button mat-button matStepperNext [disabled]=\"nuevaFacturacion.productos.length === 0\">Siguiente</button>\n            </div>\n        </form>\n    </mat-step>\n    <mat-step>\n        <form #form3=\"ngForm\">\n            <ng-template matStepLabel>Resumen Factura</ng-template>\n\n            <div class=\"row\">\n                <div class=\"col-md-6\">\n                    <mat-form-field appearance=\"outline\">\n                        <mat-label>Cliente</mat-label>\n                        <input matInput disabled type=\"text\" [value]=\"cliente.nombre\" required>\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-6\">\n                    <mat-form-field appearance=\"outline\">\n                        <mat-label>Cedula</mat-label>\n                        <input matInput disabled type=\"text\" [value]=\"cliente.cedula\" required>\n                    </mat-form-field>\n                </div>\n            </div>\n            <hr>\n            <mat-card>\n                <mat-card-title>\n                    Productos a comprar\n                </mat-card-title>\n\n                <mat-card-content>\n                    <table class=\"table table \">\n\n\n                        <thead>\n                            <tr>\n                                <th class=\"text-center\">Codigo Producto</th>\n\n                                <th class=\"text-center\">Nombre</th>\n\n                                <th class=\"text-center\">Monto</th>\n\n\n                            </tr>\n\n                        </thead>\n\n\n                        <tbody>\n                            <tr *ngFor=\"let producto of nuevaFacturacion.productos; let i = index\">\n                                <td class=\"text-center\"> {{producto.codigoProducto}} </td>\n\n                                <td class=\"text-center\"> {{producto.producto}} </td>\n\n                                <td class=\"text-center\"> {{producto.monto}} Bs.S </td>\n\n                            </tr>\n\n                        </tbody>\n\n                        <tfoot>\n                            <tr>\n                                <td></td>\n                                <td></td>\n                                <td class=\"text-center\">\n                                    <strong>Total Productos:</strong> {{ nuevaFacturacion.productos.length }}\n                                </td>\n                            </tr>\n                            <tr>\n                                <td></td>\n                                <td></td>\n                                <td class=\"text-center\">\n                                    <strong>Subtotal:</strong> {{ subtotalMonto }} Bs.S\n                                </td>\n                            </tr>\n                            <tr>\n                                <td></td>\n                                <td></td>\n                                <td class=\"text-center\">\n                                    <strong>IVA 16%:</strong> {{ iva }} Bs.S\n                                </td>\n                            </tr>\n                            <tr>\n                                <td></td>\n                                <td></td>\n                                <td class=\"text-center\">\n                                    <strong>Total:</strong> {{ TotalMonto }} Bs.S\n                                </td>\n                            </tr>\n                        </tfoot>\n\n\n\n                    </table>\n                </mat-card-content>\n            </mat-card>\n            <br>\n            <div class=\"text-right\">\n                <button mat-button matStepperPrevious>Regresar</button>\n                <button mat-button matStepperPrevious (click)=\"cerrarModal($event)\">Aceptar</button>\n                <mat-progress-bar mode=\"indeterminate\" *ngIf=\"clickSubmit\"></mat-progress-bar>\n\n            </div>\n        </form>\n    </mat-step>\n</mat-horizontal-stepper>"

/***/ }),

/***/ "./src/app/components/nueva-factura/nueva-factura.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/nueva-factura/nueva-factura.component.ts ***!
  \*********************************************************************/
/*! exports provided: NuevaFacturaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NuevaFacturaComponent", function() { return NuevaFacturaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_facturacion_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/facturacion.service */ "./src/app/services/facturacion.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var NuevaFacturaComponent = /** @class */ (function () {
    function NuevaFacturaComponent(bottomSheetRef, data, snackBar, facturacionService, router) {
        this.bottomSheetRef = bottomSheetRef;
        this.data = data;
        this.snackBar = snackBar;
        this.facturacionService = facturacionService;
        this.router = router;
        this.Producto = { codigoProducto: 0,
            producto: '',
            monto: 0 };
        this.cliente = {};
        this.existeCliente = true;
        this.nuevaFacturacion = {
            cedula: 'V-',
            cliente: '',
            productos: []
        };
        this.clickSubmit = false;
    }
    NuevaFacturaComponent.prototype.ngOnInit = function () {
        this.llamarFacturas();
    };
    NuevaFacturaComponent.prototype.cerrarModal = function (event) {
        var _this = this;
        event.preventDefault();
        this.clickSubmit = true;
        var factura = {
            cliente: this.nuevaFacturacion.cliente,
            cedula: this.cliente.cedula,
            productos: this.nuevaFacturacion.productos,
            subtotal: this.subtotalMonto,
            iva: this.iva,
            totalmonto: this.TotalMonto,
            codigoFactura: this.UltimoCodigoFatura + 1 || 10000,
            fechaCreacion: Date.now()
        };
        this.facturacionService.crearFactura(factura).subscribe(function (resp) {
            if (resp.ok === true) {
                _this.clickSubmit = false;
                _this.router.navigate(['/dashboard']);
                _this.bottomSheetRef.afterDismissed().subscribe(function () {
                    _this.facturacionService.NuevaFactura = true;
                });
                _this.toast('Factura creada con exito', 'Cerrar');
                return _this.bottomSheetRef.dismiss();
            }
        });
    };
    NuevaFacturaComponent.prototype.buscarCliente = function (key) {
        var _this = this;
        if (key.length === 0) {
            return;
        }
        this.facturacionService.ObtenerClientePorCedula(key).subscribe(function (resp) {
            if (resp.message === 'exito') {
                _this.cliente = resp.cliente;
                _this.existeCliente = true;
                return _this.nuevaFacturacion.cliente = resp.cliente.nombre;
            }
            if (resp.message === 'no se encontro cliente') {
                _this.existeCliente = false;
                _this.toast("No existe cliente con la cedula " + key, 'Cerrar');
                return _this.nuevaFacturacion.cliente = '';
            }
        });
    };
    NuevaFacturaComponent.prototype.llamarFacturas = function () {
        var _this = this;
        this.facturacionService.llamarFacturas().subscribe(function (resp) {
            _this.UltimoCodigoFatura = resp.listado[0].codigoFactura;
        });
    };
    NuevaFacturaComponent.prototype.buscarProducto = function (key) {
        var _this = this;
        if (key.length === 0) {
            return;
        }
        this.facturacionService.BuscarCodigoProducto(key).subscribe(function (resp) {
            if (resp.message === 'Exito') {
                _this.Producto = {
                    codigoProducto: resp.codigoProducto.codigoProducto,
                    producto: resp.codigoProducto.producto,
                    monto: resp.codigoProducto.monto
                };
            }
            if (resp.message === 'No existe codigo') {
                _this.toast("No existe producto con el codigo " + key, 'Cerrar');
                return _this.Producto = { codigoProducto: 0,
                    producto: '',
                    monto: 0 };
            }
        });
    };
    NuevaFacturaComponent.prototype.clear = function () {
        return this.Producto = { codigoProducto: 0,
            producto: '',
            monto: 0 };
    };
    NuevaFacturaComponent.prototype.agregarProducto = function (producto) {
        this.clear();
        this.nuevaFacturacion.productos.push({
            codigoProducto: producto.codigoProducto,
            producto: producto.producto,
            monto: producto.monto
        });
        var monto = 0;
        for (var i = 0; i <= this.nuevaFacturacion.productos.length; i++) {
            monto = monto + this.nuevaFacturacion.productos[i].monto;
            this.subtotalMonto = monto;
            this.iva = (this.subtotalMonto * 16) / 100;
            this.TotalMonto = this.subtotalMonto + this.iva;
            i++;
            monto = monto + this.nuevaFacturacion.productos[i].monto || 0;
            this.subtotalMonto = monto;
            this.iva = (this.subtotalMonto * 16) / 100;
            this.TotalMonto = this.subtotalMonto + this.iva;
        }
    };
    NuevaFacturaComponent.prototype.borrarProducto = function (i) {
        this.subtotalMonto = this.subtotalMonto - this.nuevaFacturacion.productos[i].monto;
        this.iva = (this.subtotalMonto * 16) / 100;
        this.TotalMonto = this.subtotalMonto + this.iva;
        return this.nuevaFacturacion.productos.splice(i, 1);
    };
    NuevaFacturaComponent.prototype.toast = function (mensaje, accion) {
        this.snackBar.open(mensaje, accion, {
            duration: 3000,
        });
    };
    NuevaFacturaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-nueva-factura',
            template: __webpack_require__(/*! ./nueva-factura.component.html */ "./src/app/components/nueva-factura/nueva-factura.component.html"),
            styles: [__webpack_require__(/*! ./nueva-factura.component.css */ "./src/app/components/nueva-factura/nueva-factura.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_BOTTOM_SHEET_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatBottomSheetRef"], Object, _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"],
            _services_facturacion_service__WEBPACK_IMPORTED_MODULE_3__["FacturacionService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], NuevaFacturaComponent);
    return NuevaFacturaComponent;
}());



/***/ }),

/***/ "./src/app/components/pages/pages.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/pages/pages.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-icon {\n    padding: 0 14px;\n}\n\n.example-spacer {\n    -webkit-box-flex: 1;\n            flex: 1 1 auto;\n}\n\n.example-header-image {\n    /* background-image: url('../../../assets/img/60346624_1073310059523500_5022068167875231744_n.jpg'); */\n    background-size: cover;\n}\n\n.image {\n    background-size: cover;\n}\n\n.container-full {\n    width: 100%;\n    height: 100%;\n}\n\n.example-sidenav-content {\n    display: -webkit-box;\n    display: flex;\n    height: 100%;\n    -webkit-box-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n            justify-content: center;\n}\n\n.example-sidenav {\n    padding: 20px;\n}\n\n.cursor {\n    cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wYWdlcy9wYWdlcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLG1CQUFjO1lBQWQsY0FBYztBQUNsQjs7QUFFQTtJQUNJLHNHQUFzRztJQUN0RyxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLG9CQUFhO0lBQWIsYUFBYTtJQUNiLFlBQVk7SUFDWix5QkFBbUI7WUFBbkIsbUJBQW1CO0lBQ25CLHdCQUF1QjtZQUF2Qix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZXMvcGFnZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLWljb24ge1xuICAgIHBhZGRpbmc6IDAgMTRweDtcbn1cblxuLmV4YW1wbGUtc3BhY2VyIHtcbiAgICBmbGV4OiAxIDEgYXV0bztcbn1cblxuLmV4YW1wbGUtaGVhZGVyLWltYWdlIHtcbiAgICAvKiBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWcvNjAzNDY2MjRfMTA3MzMxMDA1OTUyMzUwMF81MDIyMDY4MTY3ODc1MjMxNzQ0X24uanBnJyk7ICovXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuLmltYWdlIHtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG4uY29udGFpbmVyLWZ1bGwge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbn1cblxuLmV4YW1wbGUtc2lkZW5hdi1jb250ZW50IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uZXhhbXBsZS1zaWRlbmF2IHtcbiAgICBwYWRkaW5nOiAyMHB4O1xufVxuXG4uY3Vyc29yIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59Il19 */"

/***/ }),

/***/ "./src/app/components/pages/pages.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/pages/pages.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\"> <strong>F</strong>actuarion &nbsp;\n    <span> |\n            <button mat-button (click)=\"dashboard()\">Dashboard </button>\n        </span>\n    <span> |\n    <button mat-button matTooltip=\"Crear una nueva solicitud\"\n    matTooltipPosition=\"below\" (click)=\"abrirModal()\">Nueva facturacion </button>\n</span>\n\n    <span class=\"example-spacer\"></span>\n\n    <button mat-button (click)=\"drawer.toggle()\"> <mat-icon>home</mat-icon> </button>\n</mat-toolbar>\n\n\n<mat-drawer-container class=\"container-full\" autosize>\n    <mat-drawer #drawer class=\"example-sidenav\" mode=\"over\">\n\n        <mat-list>\n\n            <h2>Facturacion</h2>\n\n            <div class=\"text-center\">\n\n\n                <img class=\"rounded-circle\" src=\"../../../assets/img/prueba.jpg\" height=\"140\" width=\"140\">\n\n                <h6 class=\"mt-3\">{{ nombre }}</h6>\n            </div>\n            <mat-divider></mat-divider>\n            <a mat-list-item class=\"cursor\" (click)=\"drawer.toggle()\" (click)=\"cliente()\">\n                <mat-icon>person_add</mat-icon> &nbsp; Nuevo Cliente</a>\n            <a mat-list-item class=\"cursor\" (click)=\"drawer.toggle()\" (click)=\"producto()\">\n                <mat-icon>add_circle</mat-icon> &nbsp; Nuevo Producto</a>\n            <mat-divider></mat-divider>\n            <a mat-list-item class=\"cursor\" (click)=\"salir()\">\n                <mat-icon>power_settings_new</mat-icon> &nbsp; Salir</a>\n\n\n\n        </mat-list>\n\n\n    </mat-drawer>\n\n\n\n    <div class=\"container-fluid mt-5\">\n\n        <router-outlet></router-outlet>\n    </div>\n</mat-drawer-container>"

/***/ }),

/***/ "./src/app/components/pages/pages.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/pages/pages.component.ts ***!
  \*****************************************************/
/*! exports provided: PagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesComponent", function() { return PagesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _nueva_factura_nueva_factura_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../nueva-factura/nueva-factura.component */ "./src/app/components/nueva-factura/nueva-factura.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var _services_facturacion_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/facturacion.service */ "./src/app/services/facturacion.service.ts");







var PagesComponent = /** @class */ (function () {
    function PagesComponent(bottomSheet, router, snackBar, facturacionService) {
        this.bottomSheet = bottomSheet;
        this.router = router;
        this.snackBar = snackBar;
        this.facturacionService = facturacionService;
        this.nombre = localStorage.getItem('nombre');
    }
    PagesComponent.prototype.ngOnInit = function () {
    };
    PagesComponent.prototype.abrirModal = function () {
        this.bottomSheet.open(_nueva_factura_nueva_factura_component__WEBPACK_IMPORTED_MODULE_3__["NuevaFacturaComponent"], { data: '123' });
    };
    PagesComponent.prototype.dashboard = function () {
        return this.router.navigate(['dashboard']);
    };
    PagesComponent.prototype.toast = function (mensaje, accion) {
        this.snackBar.open(mensaje, accion, {
            duration: 3000,
        });
    };
    PagesComponent.prototype.salir = function () {
        localStorage.clear();
        return this.router.navigate(['/login']);
    };
    PagesComponent.prototype.cliente = function () {
        return this.router.navigate(['/clientes']);
    };
    PagesComponent.prototype.producto = function () {
        return this.router.navigate(['/productos']);
    };
    PagesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pages',
            template: __webpack_require__(/*! ./pages.component.html */ "./src/app/components/pages/pages.component.html"),
            styles: [__webpack_require__(/*! ./pages.component.css */ "./src/app/components/pages/pages.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatBottomSheet"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"],
            _services_facturacion_service__WEBPACK_IMPORTED_MODULE_6__["FacturacionService"]])
    ], PagesComponent);
    return PagesComponent;
}());



/***/ }),

/***/ "./src/app/components/productos/productos.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/productos/productos.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-form-field {\n    display: block;\n}\n\ntable {\n    width: 100%;\n}\n\n.alto {\n    height: 420px;\n    overflow: hidden;\n}\n\n.scroll {\n    overflow-y: scroll;\n    height: 400px;\n    /*background:gray;*/\n    padding: 5px;\n}\n\n.example-spacer {\n    -webkit-box-flex: 1;\n            flex: 1 1 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9kdWN0b3MvcHJvZHVjdG9zLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxtQkFBYztZQUFkLGNBQWM7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3Byb2R1Y3Rvcy9wcm9kdWN0b3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1mb3JtLWZpZWxkIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cblxudGFibGUge1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4uYWx0byB7XG4gICAgaGVpZ2h0OiA0MjBweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uc2Nyb2xsIHtcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gICAgaGVpZ2h0OiA0MDBweDtcbiAgICAvKmJhY2tncm91bmQ6Z3JheTsqL1xuICAgIHBhZGRpbmc6IDVweDtcbn1cblxuLmV4YW1wbGUtc3BhY2VyIHtcbiAgICBmbGV4OiAxIDEgYXV0bztcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/productos/productos.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/productos/productos.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid mt-5\">\n\n\n    <div class=\"row\">\n\n\n        <div class=\"col-md-5\">\n\n            <mat-card>\n\n                <mat-card-title>\n                    Nuevo Producto\n                </mat-card-title>\n\n                <mat-card-content>\n\n                    <form #form=\"ngForm\" (ngSubmit)=\"RegistrarProducto(form)\">\n                        <!-- <input type=\"hidden\" name=\"id\" [(ngModel)]=\"formulario._id\"> -->\n                        <div class=\"row\">\n                            <div class=\"col-md-12 \">\n                                <mat-form-field appearance=\"outline\">\n                                    <mat-label>Nombre del producto</mat-label>\n                                    <input type=\"text\" matInput placeholder=\"Nombre del producto\" name=\"producto\" [(ngModel)]=\"formulario.producto\" required>\n\n\n                                </mat-form-field>\n                            </div>\n\n                        </div>\n\n\n\n                        <div class=\"row\">\n                            <div class=\"col-md-3\">\n                                <mat-form-field appearance=\"outline\">\n                                    <mat-label>Bs.S</mat-label>\n                                    <input type=\"text\" matInput placeholder=\"bsS\" disabled name=\"bsS\">\n\n\n                                </mat-form-field>\n                            </div>\n\n                            <div class=\"col-md-9\">\n                                <mat-form-field appearance=\"outline\">\n                                    <mat-label>Monto (Numerico)</mat-label>\n                                    <input type=\"number\" matInput placeholder=\"Ingresa el costo del producto\" name=\"monto\" [(ngModel)]=\"formulario.monto\">\n\n\n                                </mat-form-field>\n                            </div>\n\n                        </div>\n\n\n                        <button class=\"btn-block\" [disabled]=\"form.valid === false\" mat-raised-button color=\"primary\">Agregar Cliente</button  >\n\n\n                    </form>\n\n\n\n                </mat-card-content>\n                <mat-progress-bar mode=\"indeterminate\" *ngIf=\"clickSubmit\"></mat-progress-bar>\n\n            </mat-card>\n\n        </div>\n\n\n        <div class=\"col-md-7\">\n\n            <mat-card>\n                <mat-card-title>\n                    Productos registrado\n\n                    <span class=\"example-spacer \"></span>\n                    <div class=\"float-right\">\n\n                        <input type=\"text\" matInput placeholder=\"Buscar Producto\" #buscar (keyup)=\"buscarProducto(buscar.value)\">\n\n\n                    </div>\n                </mat-card-title>\n\n                <mat-card-content class=\"alto\">\n\n                    <div class=\"scroll\">\n                        <table class=\"table table \">\n\n\n                            <thead>\n                                <tr>\n                                    <th class=\"text-center\">Codigo Producto</th>\n\n                                    <th class=\"text-center\">Nombre</th>\n\n                                    <th class=\"text-center\">Monto</th>\n\n                                    <th class=\"text-center\">Fecha de Creacion</th>\n                                </tr>\n\n                            </thead>\n\n\n                            <tbody>\n                                <h3 *ngIf=\"!existeCliente\" class=\"text-center\"> No existe el Producto solicitado </h3>\n                                <tr *ngFor=\"let producto of Productos\" >\n                                    <td class=\"text-center\" > {{ producto.codigoProducto  }} </td>\n\n                                    <td class=\"text-center\"> {{ producto.producto}} </td>\n\n                                    <td class=\"text-center\"> {{ producto.monto}} Bs.S </td>\n\n                                    <td class=\"text-center\"> {{ producto.fechaCreacion | date: \"short\" }} </td>\n\n                                    <td>\n                                        <button mat-mini-fab color=\"primary\" (click)=\"EliminarProducto(producto._id)\" ><mat-icon>delete</mat-icon></button>\n                        </td>\n                        </tr>\n\n                        </tbody>\n\n\n\n                        </table>\n        </div>\n\n        </mat-card-content>\n        </mat-card>\n    </div>\n\n\n\n\n\n\n</div>\n\n\n\n\n\n</div>"

/***/ }),

/***/ "./src/app/components/productos/productos.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/productos/productos.component.ts ***!
  \*************************************************************/
/*! exports provided: ProductosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductosComponent", function() { return ProductosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_producto_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/producto.service */ "./src/app/services/producto.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");




var ProductosComponent = /** @class */ (function () {
    function ProductosComponent(productoService, snackBar) {
        this.productoService = productoService;
        this.snackBar = snackBar;
        this.clickSubmit = false;
        this.formulario = {
            producto: '',
            monto: 0,
            codigoProducto: 1000
        };
        this.Productos = [];
        this.existeCliente = true;
    }
    ProductosComponent.prototype.ngOnInit = function () {
        this.llamarProductos();
    };
    ProductosComponent.prototype.RegistrarProducto = function (form) {
        var _this = this;
        if (this.formulario.producto === '') {
            return;
        }
        this.clickSubmit = true;
        var producto = {
            producto: this.formulario.producto,
            monto: this.formulario.monto,
            fechaCreacion: Date.now(),
            codigoProducto: this.UltimoCodigoProducto + 1 || 1000
        };
        this.productoService.CrearProducto(producto).subscribe(function (resp) {
            _this.toast('Producto Creado con exito', 'Cerrar');
            _this.clickSubmit = false;
            form.reset();
            _this.llamarProductos();
        });
    };
    ProductosComponent.prototype.llamarProductos = function () {
        var _this = this;
        this.productoService.llamarProductos().subscribe(function (resp2) {
            _this.Productos = resp2.listado;
            _this.UltimoCodigoProducto = resp2.listado[0].codigoProducto;
        });
    };
    ProductosComponent.prototype.EliminarProducto = function (id) {
        var _this = this;
        this.productoService.EliminarProducto(id).subscribe(function (resp) {
            _this.toast('Producto eliminado', 'Cerrar');
            _this.llamarProductos();
        });
    };
    ProductosComponent.prototype.buscarProducto = function (key) {
        var _this = this;
        if (key.length > 0) {
            return this.productoService.buscarProducto(key).subscribe(function (resp) {
                _this.Productos = resp.listado;
                _this.existeCliente = true;
                if (_this.Productos.length === 0) {
                    _this.existeCliente = false;
                }
            });
        }
        this.existeCliente = true;
        this.llamarProductos();
    };
    ProductosComponent.prototype.toast = function (mensaje, accion) {
        this.snackBar.open(mensaje, accion, {
            duration: 3000,
        });
    };
    ProductosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-productos',
            template: __webpack_require__(/*! ./productos.component.html */ "./src/app/components/productos/productos.component.html"),
            styles: [__webpack_require__(/*! ./productos.component.css */ "./src/app/components/productos/productos.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_producto_service__WEBPACK_IMPORTED_MODULE_2__["ProductoService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]])
    ], ProductosComponent);
    return ProductosComponent;
}());



/***/ }),

/***/ "./src/app/components/vercliente/vercliente.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/vercliente/vercliente.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-form-field {\n    display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy92ZXJjbGllbnRlL3ZlcmNsaWVudGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3ZlcmNsaWVudGUvdmVyY2xpZW50ZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWZvcm0tZmllbGQge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/vercliente/vercliente.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/vercliente/vercliente.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n    <mat-card-title>\n        Datos del Cliente\n        <br>\n    </mat-card-title>\n\n    <mat-card-content>\n\n        <form #form=\"ngForm\" (ngSubmit)=\"RegistrarCliente(form)\">\n            <div class=\"row\">\n                <div class=\"col-md-12 \">\n                    <mat-form-field appearance=\"outline\">\n                        <mat-label>Nombre Completo</mat-label>\n                        <input type=\"text\" matInput placeholder=\"Nombre completo\" disabled name=\"nombre\" [(ngModel)]=\"cliente.nombre\" required>\n\n\n                    </mat-form-field>\n                </div>\n\n            </div>\n\n            <div class=\"row\">\n\n\n\n                <div class=\"col-md-6\">\n                    <mat-form-field appearance=\"outline\">\n                        <mat-label>Cedula (Opcional)</mat-label>\n                        <input type=\"text\" matInput placeholder=\"Cedula\" disabled name=\"cedula\" [(ngModel)]=\"cliente.cedula\">\n\n\n                    </mat-form-field>\n                </div>\n\n                <div class=\"col-md-6\">\n                    <mat-form-field appearance=\"outline\">\n                        <mat-label>Edad</mat-label>\n                        <input type=\"text\" matInput placeholder=\"Edad\" disabled name=\"edad\" [(ngModel)]=\"cliente.edad\" #edad (keyup)=\"edad1 = edad.value\" data-inputmask='\"mask\": \"99\"' data-mask>\n\n\n                    </mat-form-field>\n                </div>\n\n\n\n            </div>\n\n            <div class=\"row\">\n                <div class=\"col-md-12 \">\n                    <mat-form-field appearance=\"outline\">\n                        <mat-label>Direccion local</mat-label>\n                        <textarea type=\"text\" disabled name=\"direccion\" [(ngModel)]=\"cliente.direccion\" required matInput placeholder=\"Direccion local\"></textarea>\n\n\n                    </mat-form-field>\n                </div>\n\n            </div>\n\n            <div class=\"row\">\n                <div class=\"col-md-6\">\n                    <mat-form-field appearance=\"outline\">\n                        <mat-label>Celular</mat-label>\n                        <input type=\"text\" matInput placeholder=\"Celular\" disabled name=\"celular\" [(ngModel)]=\"cliente.celular\" #celular (keyup)=\"celular1 = celular.value\" data-inputmask='\"mask\": \"(9999)-999-9999\"' data-mask>\n\n\n                    </mat-form-field>\n                </div>\n\n                <div class=\"col-md-6\">\n                    <mat-form-field appearance=\"outline\">\n                        <mat-label>Telefono </mat-label>\n                        <input type=\"text\" matInput placeholder=\"Telefono (Opcional)\" disabled name=\"telefono\" [(ngModel)]=\"cliente.telefono\" #telefono (keyup)=\"telefono1 = telefono.value\" data-inputmask='\"mask\": \"(9999)-999-9999\"' data-mask>\n\n\n                    </mat-form-field>\n                </div>\n\n            </div>\n\n\n\n\n        </form>\n\n\n\n    </mat-card-content>\n</mat-card>"

/***/ }),

/***/ "./src/app/components/vercliente/vercliente.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/vercliente/vercliente.component.ts ***!
  \***************************************************************/
/*! exports provided: VerclienteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerclienteComponent", function() { return VerclienteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/bottom-sheet */ "./node_modules/@angular/material/esm5/bottom-sheet.es5.js");
/* harmony import */ var src_app_services_cliente_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/cliente.service */ "./src/app/services/cliente.service.ts");




var VerclienteComponent = /** @class */ (function () {
    function VerclienteComponent(bottomSheetRef, data, clienteService) {
        this.bottomSheetRef = bottomSheetRef;
        this.data = data;
        this.clienteService = clienteService;
        this.cliente = {};
        this.ObtenerCliente(data);
    }
    VerclienteComponent.prototype.ngOnInit = function () {
    };
    VerclienteComponent.prototype.ObtenerCliente = function (id) {
        var _this = this;
        this.clienteService.verCliente(id).subscribe(function (resp) {
            _this.cliente = resp.solicitud;
        });
    };
    VerclienteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-vercliente',
            template: __webpack_require__(/*! ./vercliente.component.html */ "./src/app/components/vercliente/vercliente.component.html"),
            styles: [__webpack_require__(/*! ./vercliente.component.css */ "./src/app/components/vercliente/vercliente.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_2__["MAT_BOTTOM_SHEET_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_2__["MatBottomSheetRef"], Object, src_app_services_cliente_service__WEBPACK_IMPORTED_MODULE_3__["ClienteService"]])
    ], VerclienteComponent);
    return VerclienteComponent;
}());



/***/ }),

/***/ "./src/app/components/verfactura/verfactura.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/verfactura/verfactura.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".alto {\n    height: 420px;\n    overflow: hidden;\n}\n\n.scroll {\n    overflow-y: scroll;\n    height: 400px;\n    /*background:gray;*/\n    padding: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy92ZXJmYWN0dXJhL3ZlcmZhY3R1cmEuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixZQUFZO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy92ZXJmYWN0dXJhL3ZlcmZhY3R1cmEuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hbHRvIHtcbiAgICBoZWlnaHQ6IDQyMHB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5zY3JvbGwge1xuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgICBoZWlnaHQ6IDQwMHB4O1xuICAgIC8qYmFja2dyb3VuZDpncmF5OyovXG4gICAgcGFkZGluZzogNXB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/verfactura/verfactura.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/verfactura/verfactura.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>\n    Resumen Factura</h3>\n\n<div class=\"row\">\n    <div class=\"col-md-6\">\n        <mat-form-field appearance=\"outline\">\n            <mat-label>Cliente</mat-label>\n            <input matInput disabled type=\"text\" [value]=\"factura.cliente\" required>\n        </mat-form-field>\n    </div>\n    <div class=\"col-md-6\">\n        <mat-form-field appearance=\"outline\">\n            <mat-label>Cedula</mat-label>\n            <input matInput disabled type=\"text\" [value]=\"factura.cedula\" required>\n        </mat-form-field>\n    </div>\n</div>\n<hr>\n\n<mat-card>\n    <mat-card-title>\n        Productos comprado\n    </mat-card-title>\n\n    <mat-card-content class=\"alto\">\n\n        <div class=\"scroll\">\n            <table class=\"table table \">\n\n\n                <thead>\n                    <tr>\n                        <th class=\"text-center\">Codigo Producto</th>\n\n                        <th class=\"text-center\">Nombre</th>\n\n                        <th class=\"text-center\">Monto</th>\n\n\n                    </tr>\n\n                </thead>\n\n\n                <tbody>\n                    <tr *ngFor=\"let producto of factura.productos\">\n                        <td class=\"text-center\"> {{ producto.codigoProducto }} </td>\n\n                        <td class=\"text-center\"> {{ producto.producto }} </td>\n\n                        <td class=\"text-center\"> {{ producto.monto }} Bs.S </td>\n\n                    </tr>\n\n                </tbody>\n\n                <tfoot>\n                    <tr>\n                        <td></td>\n                        <td></td>\n                        <td class=\"text-center\">\n                            <strong>Total Productos: {{ factura.productos.length }} </strong>\n                        </td>\n                    </tr>\n                    <tr>\n                        <td></td>\n                        <td></td>\n                        <td class=\"text-center\">\n                            <strong>Subtotal:</strong> {{ factura.subtotal }} Bs.S\n                        </td>\n                    </tr>\n                    <tr>\n                        <td></td>\n                        <td></td>\n                        <td class=\"text-center\">\n                            <strong>IVA 16%:</strong> {{ factura.iva }} Bs.S\n                        </td>\n                    </tr>\n                    <tr>\n                        <td></td>\n                        <td></td>\n                        <td class=\"text-center\">\n                            <strong>Total:</strong> {{ factura.totalmonto }} Bs.S\n                        </td>\n                    </tr>\n                </tfoot>\n\n\n\n            </table>\n\n        </div>\n    </mat-card-content>\n</mat-card>"

/***/ }),

/***/ "./src/app/components/verfactura/verfactura.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/verfactura/verfactura.component.ts ***!
  \***************************************************************/
/*! exports provided: VerfacturaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerfacturaComponent", function() { return VerfacturaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_facturacion_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/facturacion.service */ "./src/app/services/facturacion.service.ts");




var VerfacturaComponent = /** @class */ (function () {
    function VerfacturaComponent(dialogRef, data, facturacionService) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.facturacionService = facturacionService;
        this.factura = {};
    }
    VerfacturaComponent.prototype.ngOnInit = function () {
        this.ObtenerFactura(this.data);
    };
    VerfacturaComponent.prototype.CerrarDialogo = function () {
        this.dialogRef.close();
    };
    VerfacturaComponent.prototype.ObtenerFactura = function (id) {
        var _this = this;
        this.facturacionService.ObtenerunaFactura(id).subscribe(function (resp) {
            _this.factura = resp.solicitud;
        });
    };
    VerfacturaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-verfactura',
            template: __webpack_require__(/*! ./verfactura.component.html */ "./src/app/components/verfactura/verfactura.component.html"),
            styles: [__webpack_require__(/*! ./verfactura.component.css */ "./src/app/components/verfactura/verfactura.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object, _services_facturacion_service__WEBPACK_IMPORTED_MODULE_3__["FacturacionService"]])
    ], VerfacturaComponent);
    return VerfacturaComponent;
}());



/***/ }),

/***/ "./src/app/config/url.ts":
/*!*******************************!*\
  !*** ./src/app/config/url.ts ***!
  \*******************************/
/*! exports provided: URI */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "URI", function() { return URI; });
var URI = '';
// const URI = 'http://localhost:3000'


/***/ }),

/***/ "./src/app/guards/logeado.guard.ts":
/*!*****************************************!*\
  !*** ./src/app/guards/logeado.guard.ts ***!
  \*****************************************/
/*! exports provided: LogeadoGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogeadoGuard", function() { return LogeadoGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/login.service */ "./src/app/services/login.service.ts");




var LogeadoGuard = /** @class */ (function () {
    function LogeadoGuard(login, router) {
        this.login = login;
        this.router = router;
    }
    LogeadoGuard.prototype.canActivate = function () {
        if (this.login.estaLogueado()) {
            return true;
        }
        this.router.navigate(['login']);
        return false;
    };
    LogeadoGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LogeadoGuard);
    return LogeadoGuard;
}());



/***/ }),

/***/ "./src/app/layouts/toolbar/toolbar.component.css":
/*!*******************************************************!*\
  !*** ./src/app/layouts/toolbar/toolbar.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dHMvdG9vbGJhci90b29sYmFyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/layouts/toolbar/toolbar.component.html":
/*!********************************************************!*\
  !*** ./src/app/layouts/toolbar/toolbar.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\"> <strong>F</strong>acturacion </mat-toolbar>"

/***/ }),

/***/ "./src/app/layouts/toolbar/toolbar.component.ts":
/*!******************************************************!*\
  !*** ./src/app/layouts/toolbar/toolbar.component.ts ***!
  \******************************************************/
/*! exports provided: ToolbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolbarComponent", function() { return ToolbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ToolbarComponent = /** @class */ (function () {
    function ToolbarComponent() {
    }
    ToolbarComponent.prototype.ngOnInit = function () {
    };
    ToolbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-toolbar',
            template: __webpack_require__(/*! ./toolbar.component.html */ "./src/app/layouts/toolbar/toolbar.component.html"),
            styles: [__webpack_require__(/*! ./toolbar.component.css */ "./src/app/layouts/toolbar/toolbar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ToolbarComponent);
    return ToolbarComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-form-field {\n    display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWZvcm0tZmllbGQge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-toolbar></app-toolbar>\n\n\n<div class=\"container mt-5 \">\n    <h2 class=\"text-center\">Modulo de facturacion</h2>\n\n    <mat-card>\n\n        <br>\n        <mat-card-title>\n            <mat-icon>https</mat-icon>Login</mat-card-title>\n\n        <mat-card-content>\n\n            <form #form=\"ngForm\" (ngSubmit)=\"logear(form)\">\n                <div class=\"row\">\n                    <div class=\"col-md-12 \">\n                        <mat-form-field appearance=\"outline\">\n                            <mat-label>Email</mat-label>\n                            <input type=\"email\" matInput placeholder=\"Email\" name=\"email\" required [(ngModel)]=\"form.value.email\">\n\n\n                        </mat-form-field>\n                    </div>\n\n                </div>\n\n                <div class=\"row\">\n\n\n\n                    <div class=\"col-md-12\">\n                        <mat-form-field appearance=\"outline\">\n                            <mat-label>Password</mat-label>\n                            <input type=\"password\" matInput placeholder=\"Password\" name=\"clave\" required minlength=\"8\" [(ngModel)]=\"form.value.clave\">\n\n\n                        </mat-form-field>\n                    </div>\n\n\n\n                </div>\n\n\n\n\n\n\n\n                <button class=\"btn-block\" [disabled]=\"form.valid === false\" mat-raised-button color=\"primary\">Iniciar Session</button>\n\n            </form>\n\n        </mat-card-content>\n\n        <mat-progress-bar mode=\"indeterminate\" *ngIf=\"clickSubmit\"></mat-progress-bar>\n\n    </mat-card>\n</div>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/login.service */ "./src/app/services/login.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var LoginComponent = /** @class */ (function () {
    function LoginComponent(loginService, snackBar, router) {
        this.loginService = loginService;
        this.snackBar = snackBar;
        this.router = router;
        this.clickSubmit = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.logear = function (form) {
        var _this = this;
        this.clickSubmit = true;
        var admin = {
            email: form.value.email,
            password: form.value.clave
        };
        this.loginService.Login(admin).subscribe(function (resp) {
            if (resp.message === 'Email Incorrecto') {
                _this.clickSubmit = false;
                return _this.toast('Email invalido', 'Cerrar');
            }
            if (resp.message === 'Contraseña invalida') {
                _this.clickSubmit = false;
                return _this.toast('Contraseña invalida', 'Cerrar');
            }
            if (resp.message === 'Logeado') {
                _this.clickSubmit = false;
                localStorage.setItem('nombre', resp.user.nombre);
                localStorage.setItem('JWT', resp.JWT);
                _this.toast("Bienvenido " + resp.user.nombre, 'Cerrar');
                return _this.router.navigate(['/dashboard']);
            }
        });
    };
    LoginComponent.prototype.toast = function (mensaje, accion) {
        this.snackBar.open(mensaje, accion, {
            duration: 3000,
        });
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/registro/registro.component.css":
/*!*************************************************!*\
  !*** ./src/app/registro/registro.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-form-field {\n    display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0cm8vcmVnaXN0cm8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9yZWdpc3Ryby9yZWdpc3Ryby5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWZvcm0tZmllbGQge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/registro/registro.component.html":
/*!**************************************************!*\
  !*** ./src/app/registro/registro.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-toolbar></app-toolbar>\n\n\n<div class=\"container mt-5 \">\n    <h2 class=\"text-center\">Modulo de Facturacion</h2>\n\n    <mat-card>\n        <mat-card-title>Registro</mat-card-title>\n\n        <mat-card-content>\n\n            <form #form=\"ngForm\" (ngSubmit)=\"Registro(form)\">\n                <div class=\"row\">\n                    <div class=\"col-md-12 \">\n                        <mat-form-field>\n\n                            <input type=\"text\" matInput placeholder=\"Nombre Completo\" name=\"nombre\" [(ngModel)]=\"form.value.nombre\" required>\n\n\n                        </mat-form-field>\n                    </div>\n\n                </div>\n\n                <div class=\"row\">\n\n\n                    <div class=\"col-md-2\">\n                        <mat-form-field>\n                            <mat-label>Inicial de tu cedula</mat-label>\n                            <mat-select name=\"initCedula\" [(ngModel)]=\"form.value.initCedula\">\n                                <mat-option value=\"V-\">\n                                    V\n                                </mat-option>\n                                <mat-option value=\"E-\">\n                                    E\n                                </mat-option>\n                            </mat-select>\n                        </mat-form-field>\n                    </div>\n\n                    <div class=\"col-md-4\">\n                        <mat-form-field>\n\n                            <input type=\"text\" matInput placeholder=\"Cedula\" name=\"cedula\" [(ngModel)]=\"form.value.cedula\" #cedula (keyup)=\"cedula1 = cedula.value\" data-inputmask='\"mask\": \"99.999.999\"' data-mask>\n\n\n                        </mat-form-field>\n                    </div>\n\n\n\n                    <div class=\"col-md-6\">\n                        <mat-form-field>\n\n                            <input type=\"text\" matInput placeholder=\"Edad\" name=\"edad\" [(ngModel)]=\"form.value.edad\" #edad (keyup)=\"edad1 = edad.value\" data-inputmask='\"mask\": \"99\"' data-mask>\n\n\n                        </mat-form-field>\n                    </div>\n                </div>\n\n\n                <div class=\"row\">\n                    <div class=\"col-md-6\">\n                        <mat-form-field>\n\n                            <input type=\"email\" name=\"email\" [(ngModel)]=\"form.value.email\" required matInput placeholder=\"Email\">\n\n\n                        </mat-form-field>\n                    </div>\n                    <div class=\"col-md-6\">\n                        <mat-form-field>\n\n                            <input type=\"email\" name=\"email2\" [(ngModel)]=\"form.value.email2\" required matInput placeholder=\"Confirmar Email\">\n\n\n                        </mat-form-field>\n                    </div>\n                </div>\n\n                <div class=\"row\">\n                    <div class=\"col-md-12\">\n                        <mat-form-field>\n\n                            <input type=\"text\" name=\"direccion\" [(ngModel)]=\"form.value.direccion\" required matInput placeholder=\"Direccion local\">\n\n\n                        </mat-form-field>\n                    </div>\n                </div>\n\n\n                <div class=\"row\">\n                    <div class=\"col-md-6\">\n                        <mat-form-field>\n\n                            <input type=\"text\" matInput placeholder=\"Celular\" name=\"celular\" [(ngModel)]=\"form.value.celular\" #celular (keyup)=\"celular1 = celular.value\" data-inputmask='\"mask\": \"(9999)-999-9999\"' data-mask>\n\n\n                        </mat-form-field>\n                    </div>\n                    <div class=\"col-md-6\">\n                        <mat-form-field>\n\n                            <input type=\"text\" matInput placeholder=\"Telefono (Opcional)\" name=\"telefono\" [(ngModel)]=\"form.value.telefono\" #telefono (keyup)=\"telefono1 = telefono.value\" data-inputmask='\"mask\": \"(9999)-999-9999\"' data-mask>\n\n\n                        </mat-form-field>\n                    </div>\n                </div>\n\n\n\n                <div class=\"row\">\n                    <div class=\"col-md-6\">\n                        <mat-form-field>\n\n                            <input type=\"password\" name=\"clave\" minlength=\"8\" [(ngModel)]=\"form.value.clave\" required matInput placeholder=\"Contraseña (minimo 8 caracter)\">\n\n\n                        </mat-form-field>\n\n                    </div>\n                    <div class=\"col-md-6\">\n                        <mat-form-field>\n\n                            <input type=\"password\" name=\"clave2\" minlength=\"8\" [(ngModel)]=\"form.value.clave2\" required required matInput placeholder=\"Confirmar contraseña\">\n\n\n                        </mat-form-field>\n                    </div>\n                </div>\n\n\n\n\n\n\n                <button class=\"btn-block\" [disabled]=\"form.valid === false\" mat-raised-button color=\"primary\">Registrar</button>\n\n            </form>\n\n        </mat-card-content>\n\n        <mat-card-actions>\n\n            <p class=\"text-center\">Ya tienes cuenta? <a [routerLink]=\"['/login']\">Click aqui</a></p>\n        </mat-card-actions>\n\n\n        <mat-progress-bar mode=\"indeterminate\"></mat-progress-bar>\n    </mat-card>\n</div>"

/***/ }),

/***/ "./src/app/registro/registro.component.ts":
/*!************************************************!*\
  !*** ./src/app/registro/registro.component.ts ***!
  \************************************************/
/*! exports provided: RegistroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistroComponent", function() { return RegistroComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_registro_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/registro.service */ "./src/app/services/registro.service.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var RegistroComponent = /** @class */ (function () {
    function RegistroComponent(registroService, snackBar, router) {
        this.registroService = registroService;
        this.snackBar = snackBar;
        this.router = router;
    }
    RegistroComponent.prototype.ngOnInit = function () {
    };
    RegistroComponent.prototype.Registro = function (form) {
        var _this = this;
        if (form.value.clave != form.value.clave2) {
            return this.toast('Las contraseña deben ser iguales', 'Cerrar');
        }
        if (form.value.email != form.value.email2) {
            return this.toast('Los email deben ser iguales', 'Cerrar');
        }
        var cliente = {
            cedula: form.value.initCedula + this.cedula1,
            celular: this.celular1,
            direccion: form.value.direccion,
            edad: this.edad1,
            email: form.value.email,
            nombre: form.value.nombre,
            password: form.value.clave,
            telefono: this.telefono1
        };
        this.registroService.AgregarCliente(cliente).subscribe(function (resp) {
            _this.toast('Usuario Creado con exito', 'Cerrar');
            return _this.router.navigate(['login']);
        });
    };
    RegistroComponent.prototype.toast = function (mensaje, accion) {
        this.snackBar.open(mensaje, accion, {
            duration: 4000,
        });
    };
    RegistroComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-registro',
            template: __webpack_require__(/*! ./registro.component.html */ "./src/app/registro/registro.component.html"),
            styles: [__webpack_require__(/*! ./registro.component.css */ "./src/app/registro/registro.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_registro_service__WEBPACK_IMPORTED_MODULE_2__["RegistroService"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], RegistroComponent);
    return RegistroComponent;
}());



/***/ }),

/***/ "./src/app/services/cliente.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/cliente.service.ts ***!
  \*********************************************/
/*! exports provided: ClienteService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClienteService", function() { return ClienteService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _config_url__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config/url */ "./src/app/config/url.ts");




var ClienteService = /** @class */ (function () {
    function ClienteService(http) {
        this.http = http;
        this.token = localStorage.getItem('JWT');
    }
    ClienteService.prototype.CrearCliente = function (cliente) {
        var uri = _config_url__WEBPACK_IMPORTED_MODULE_3__["URI"] + "/cliente?token=" + this.token;
        return this.http.post(uri, cliente);
    };
    ClienteService.prototype.llamarClientes = function () {
        var uri = _config_url__WEBPACK_IMPORTED_MODULE_3__["URI"] + "/cliente?token=" + this.token;
        return this.http.get(uri);
    };
    ClienteService.prototype.verCliente = function (id) {
        var uri = _config_url__WEBPACK_IMPORTED_MODULE_3__["URI"] + "/cliente/" + id + "?token=" + this.token;
        return this.http.get(uri);
    };
    ClienteService.prototype.actualizarCliente = function (id, body) {
        var uri = _config_url__WEBPACK_IMPORTED_MODULE_3__["URI"] + "/cliente/" + id + "?token=" + this.token;
        return this.http.put(uri, body);
    };
    ClienteService.prototype.buscarCliente = function (busqueda) {
        var uri = _config_url__WEBPACK_IMPORTED_MODULE_3__["URI"] + "/cliente/busqueda/" + busqueda + "?token=" + this.token;
        return this.http.get(uri);
    };
    ClienteService.prototype.EliminarCliente = function (id) {
        var uri = _config_url__WEBPACK_IMPORTED_MODULE_3__["URI"] + "/cliente/" + id + "?token=" + this.token;
        return this.http.delete(uri);
    };
    ClienteService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ClienteService);
    return ClienteService;
}());



/***/ }),

/***/ "./src/app/services/facturacion.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/facturacion.service.ts ***!
  \*************************************************/
/*! exports provided: FacturacionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FacturacionService", function() { return FacturacionService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _config_url__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config/url */ "./src/app/config/url.ts");




var FacturacionService = /** @class */ (function () {
    function FacturacionService(http) {
        this.http = http;
        this.token = localStorage.getItem('JWT');
        this.NuevaFactura = false;
    }
    FacturacionService.prototype.ObtenerClientePorCedula = function (cedula) {
        var uri = _config_url__WEBPACK_IMPORTED_MODULE_3__["URI"] + "/cliente/cedula/" + cedula + "?token=" + this.token;
        return this.http.get(uri);
    };
    FacturacionService.prototype.llamarProductos = function () {
        var uri = _config_url__WEBPACK_IMPORTED_MODULE_3__["URI"] + "/producto?token=" + this.token;
        return this.http.get(uri);
    };
    FacturacionService.prototype.BuscarCodigoProducto = function (codigo) {
        var uri = _config_url__WEBPACK_IMPORTED_MODULE_3__["URI"] + "/producto/codigo/" + codigo + "?token=" + this.token;
        return this.http.get(uri);
    };
    FacturacionService.prototype.crearFactura = function (factura) {
        var uri = _config_url__WEBPACK_IMPORTED_MODULE_3__["URI"] + "/factura?token=" + this.token;
        return this.http.post(uri, factura);
    };
    FacturacionService.prototype.ObtenerunaFactura = function (id) {
        var uri = _config_url__WEBPACK_IMPORTED_MODULE_3__["URI"] + "/factura/" + id + "?token=" + this.token;
        return this.http.get(uri);
    };
    FacturacionService.prototype.llamarFacturas = function () {
        var uri = _config_url__WEBPACK_IMPORTED_MODULE_3__["URI"] + "/factura?token=" + this.token;
        return this.http.get(uri);
    };
    FacturacionService.prototype.EliminarFactura = function (id) {
        var uri = _config_url__WEBPACK_IMPORTED_MODULE_3__["URI"] + "/factura/" + id + "?token=" + this.token;
        return this.http.delete(uri);
    };
    FacturacionService.prototype.buscarFacturaporCliente = function (busqueda) {
        var uri = _config_url__WEBPACK_IMPORTED_MODULE_3__["URI"] + "/factura/busqueda/" + busqueda + "?token=" + this.token;
        return this.http.get(uri);
    };
    FacturacionService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], FacturacionService);
    return FacturacionService;
}());



/***/ }),

/***/ "./src/app/services/login.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/login.service.ts ***!
  \*******************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _config_url__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config/url */ "./src/app/config/url.ts");




var LoginService = /** @class */ (function () {
    function LoginService(http) {
        this.http = http;
    }
    LoginService.prototype.Login = function (admin) {
        var uri = _config_url__WEBPACK_IMPORTED_MODULE_3__["URI"] + "/login";
        return this.http.post(uri, admin);
    };
    LoginService.prototype.estaLogueado = function () {
        return (localStorage.getItem('JWT')) ? true : false;
    };
    LoginService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], LoginService);
    return LoginService;
}());



/***/ }),

/***/ "./src/app/services/producto.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/producto.service.ts ***!
  \**********************************************/
/*! exports provided: ProductoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductoService", function() { return ProductoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _config_url__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config/url */ "./src/app/config/url.ts");




var ProductoService = /** @class */ (function () {
    function ProductoService(http) {
        this.http = http;
        this.token = localStorage.getItem('JWT');
    }
    ProductoService.prototype.CrearProducto = function (producto) {
        var uri = _config_url__WEBPACK_IMPORTED_MODULE_3__["URI"] + "/producto?token=" + this.token;
        return this.http.post(uri, producto);
    };
    ProductoService.prototype.llamarProductos = function () {
        var uri = _config_url__WEBPACK_IMPORTED_MODULE_3__["URI"] + "/producto?token=" + this.token;
        return this.http.get(uri);
    };
    ProductoService.prototype.buscarProducto = function (busqueda) {
        var uri = _config_url__WEBPACK_IMPORTED_MODULE_3__["URI"] + "/producto/busqueda/" + busqueda + "?token=" + this.token;
        return this.http.get(uri);
    };
    ProductoService.prototype.EliminarProducto = function (id) {
        var uri = _config_url__WEBPACK_IMPORTED_MODULE_3__["URI"] + "/producto/" + id + "?token=" + this.token;
        return this.http.delete(uri);
    };
    ProductoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ProductoService);
    return ProductoService;
}());



/***/ }),

/***/ "./src/app/services/registro.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/registro.service.ts ***!
  \**********************************************/
/*! exports provided: RegistroService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistroService", function() { return RegistroService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _config_url__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config/url */ "./src/app/config/url.ts");




var RegistroService = /** @class */ (function () {
    function RegistroService(http) {
        this.http = http;
    }
    RegistroService.prototype.AgregarCliente = function (Cliente) {
        var uri = _config_url__WEBPACK_IMPORTED_MODULE_3__["URI"] + "/usuario";
        return this.http.post(uri, Cliente);
    };
    RegistroService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], RegistroService);
    return RegistroService;
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
    production: true
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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/depredador/Escritorio/facturacion/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map