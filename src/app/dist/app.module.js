"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var forms_1 = require("@angular/forms");
var angular_1 = require("@mobiscroll/angular");
var http_1 = require("@angular/common/http");
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var router_1 = require("@angular/router");
var angular_2 = require("@ionic/angular");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var environment_1 = require("../environments/environment");
var fire_1 = require("@angular/fire");
var auth_1 = require("@angular/fire/auth");
var storage_1 = require("@angular/fire/storage");
var database_1 = require("@angular/fire/database");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [app_component_1.AppComponent],
            entryComponents: [],
            imports: [
                forms_1.FormsModule,
                angular_1.MbscModule, platform_browser_1.BrowserModule, angular_2.IonicModule.forRoot({ mode: 'md' }), app_routing_module_1.AppRoutingModule, http_1.HttpClientModule, app_routing_module_1.AppRoutingModule,
                fire_1.AngularFireModule.initializeApp(environment_1.environment.firebaseConfig),
                auth_1.AngularFireAuthModule,
                storage_1.AngularFireStorageModule,
                database_1.AngularFireDatabaseModule
            ],
            providers: [http_1.HttpClientModule, { provide: router_1.RouteReuseStrategy, useClass: angular_2.IonicRouteStrategy }],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
