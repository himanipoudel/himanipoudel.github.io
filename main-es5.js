function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/about/about.component.ts":
  /*!******************************************!*\
    !*** ./src/app/about/about.component.ts ***!
    \******************************************/

  /*! exports provided: AboutComponent */

  /***/
  function srcAppAboutAboutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AboutComponent", function () {
      return AboutComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var AboutComponent = /*#__PURE__*/function () {
      function AboutComponent() {
        _classCallCheck(this, AboutComponent);
      }

      _createClass(AboutComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AboutComponent;
    }();

    AboutComponent.ɵfac = function AboutComponent_Factory(t) {
      return new (t || AboutComponent)();
    };

    AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AboutComponent,
      selectors: [["app-about"]],
      decls: 54,
      vars: 0,
      consts: [["id", "aboutme", 1, "container"], [1, "row"], [1, "col-xs-6"], ["src", "./assets/himani.jpg"], [1, "table"], ["href", "assets/Resume.pdf"]],
      template: function AboutComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "About Me");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "My love for computers began at a very young age when I got a chance to learn programming language. The first language I learned was QBasic. Coding was like solving puzzles to me. Getting older, I got to know about web development and now it helps me portray my imagination into my webpage.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "table", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Full Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, ":");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Himani Poudel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Age");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, ":");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "21");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Address");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, ":");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "3928 1/2 Desiard Street, Monroe, LA 71203");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, ":");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "poudelhimani11@gmail.com");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Phone");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, ":");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "+(318) 789 5274");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "button");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Download Resume");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["img[_ngcontent-%COMP%]\r\n{\r\n    height:300px;\r\n    border-radius: 150px;\r\n}\r\n\r\n\r\n.container[_ngcontent-%COMP%]\r\n{\r\n    height: 800px;\r\n    background-color:black;\r\n    border-radius: 50px;\r\n}\r\n\r\n\r\np[_ngcontent-%COMP%]\r\n{\r\n    margin-right: 20px;\r\n    font-size:20px;\r\n    text-align: justify;\r\n}\r\n\r\n\r\n.table[_ngcontent-%COMP%]\r\n{\r\n    font-size: 20px; \r\n}\r\n\r\n\r\n.col-xs-6[_ngcontent-%COMP%]\r\n{\r\n    padding-top:50px;\r\n}\r\n\r\n\r\nimg[_ngcontent-%COMP%]{\r\n    display: block;\r\n    margin:100px 75px;\r\n\r\n   }\r\n\r\n\r\nhr[_ngcontent-%COMP%]\r\n   {\r\n       border: 1px solid grey;\r\n   }\r\n\r\n\r\nh1[_ngcontent-%COMP%]\r\n{\r\n    text-align:center;\r\n}\r\n\r\n\r\n.col-xs-6[_ngcontent-%COMP%]\r\n{\r\n    margin-bottom:100px;\r\n}\r\n\r\n\r\nbutton[_ngcontent-%COMP%]{\r\n    height:50px;\r\n    border-radius: 10px;\r\n}\r\n\r\n\r\nbutton[_ngcontent-%COMP%]:hover\r\n{\r\n    background-color: grey;\r\n    \r\n\r\n}\r\n\r\n\r\na[_ngcontent-%COMP%]{\r\n    font-size: 25px;\r\n    text-align: center;\r\n   \r\n}\r\n\r\n\r\na[_ngcontent-%COMP%]:hover\r\n{\r\n    text-decoration: none;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7SUFFSSxZQUFZO0lBQ1osb0JBQW9CO0FBQ3hCOzs7QUFHQTs7SUFFSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtBQUN2Qjs7O0FBRUE7O0lBRUksa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxtQkFBbUI7QUFDdkI7OztBQUVBOztJQUVJLGVBQWU7QUFDbkI7OztBQUVBOztJQUVJLGdCQUFnQjtBQUNwQjs7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsaUJBQWlCOztHQUVsQjs7O0FBRUg7O09BRU8sc0JBQXNCO0dBQzFCOzs7QUFFSDs7SUFFSSxpQkFBaUI7QUFDckI7OztBQUVBOztJQUVJLG1CQUFtQjtBQUN2Qjs7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsbUJBQW1CO0FBQ3ZCOzs7QUFFQTs7SUFFSSxzQkFBc0I7OztBQUcxQjs7O0FBRUE7SUFDSSxlQUFlO0lBQ2Ysa0JBQWtCOztBQUV0Qjs7O0FBRUE7O0lBRUkscUJBQXFCO0FBQ3pCIiwiZmlsZSI6InNyYy9hcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImltZ1xyXG57XHJcbiAgICBoZWlnaHQ6MzAwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNTBweDtcclxufVxyXG5cclxuXHJcbi5jb250YWluZXJcclxue1xyXG4gICAgaGVpZ2h0OiA4MDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6YmxhY2s7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG59XHJcblxyXG5wXHJcbntcclxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxuICAgIGZvbnQtc2l6ZToyMHB4O1xyXG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxufVxyXG5cclxuLnRhYmxlXHJcbntcclxuICAgIGZvbnQtc2l6ZTogMjBweDsgXHJcbn1cclxuXHJcbi5jb2wteHMtNlxyXG57XHJcbiAgICBwYWRkaW5nLXRvcDo1MHB4O1xyXG59XHJcblxyXG5pbWd7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbjoxMDBweCA3NXB4O1xyXG5cclxuICAgfVxyXG5cclxuaHJcclxuICAge1xyXG4gICAgICAgYm9yZGVyOiAxcHggc29saWQgZ3JleTtcclxuICAgfVxyXG5cclxuaDFcclxue1xyXG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbn1cclxuXHJcbi5jb2wteHMtNlxyXG57XHJcbiAgICBtYXJnaW4tYm90dG9tOjEwMHB4O1xyXG59XHJcblxyXG5idXR0b257XHJcbiAgICBoZWlnaHQ6NTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuXHJcbmJ1dHRvbjpob3ZlclxyXG57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xyXG4gICAgXHJcblxyXG59XHJcblxyXG5he1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICBcclxufVxyXG5cclxuYTpob3ZlclxyXG57XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-about',
          templateUrl: './about.component.html',
          styleUrls: ['./about.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var routes = [];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./header/header.component */
    "./src/app/header/header.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _about_about_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./about/about.component */
    "./src/app/about/about.component.ts");
    /* harmony import */


    var _skills_skills_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./skills/skills.component */
    "./src/app/skills/skills.component.ts");
    /* harmony import */


    var _experiences_experiences_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./experiences/experiences.component */
    "./src/app/experiences/experiences.component.ts");
    /* harmony import */


    var _projects_projects_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./projects/projects.component */
    "./src/app/projects/projects.component.ts");
    /* harmony import */


    var _contact_contact_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./contact/contact.component */
    "./src/app/contact/contact.component.ts");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'portfolio';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 7,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-about");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-skills");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-experiences");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-projects");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-contact");
        }
      },
      directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"], _about_about_component__WEBPACK_IMPORTED_MODULE_3__["AboutComponent"], _skills_skills_component__WEBPACK_IMPORTED_MODULE_4__["SkillsComponent"], _experiences_experiences_component__WEBPACK_IMPORTED_MODULE_5__["ExperiencesComponent"], _projects_projects_component__WEBPACK_IMPORTED_MODULE_6__["ProjectsComponent"], _contact_contact_component__WEBPACK_IMPORTED_MODULE_7__["ContactComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./header/header.component */
    "./src/app/header/header.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _about_about_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./about/about.component */
    "./src/app/about/about.component.ts");
    /* harmony import */


    var _skills_skills_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./skills/skills.component */
    "./src/app/skills/skills.component.ts");
    /* harmony import */


    var _experiences_experiences_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./experiences/experiences.component */
    "./src/app/experiences/experiences.component.ts");
    /* harmony import */


    var _projects_projects_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./projects/projects.component */
    "./src/app/projects/projects.component.ts");
    /* harmony import */


    var _contact_contact_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./contact/contact.component */
    "./src/app/contact/contact.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"], _about_about_component__WEBPACK_IMPORTED_MODULE_6__["AboutComponent"], _skills_skills_component__WEBPACK_IMPORTED_MODULE_7__["SkillsComponent"], _experiences_experiences_component__WEBPACK_IMPORTED_MODULE_8__["ExperiencesComponent"], _projects_projects_component__WEBPACK_IMPORTED_MODULE_9__["ProjectsComponent"], _contact_contact_component__WEBPACK_IMPORTED_MODULE_10__["ContactComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"], _about_about_component__WEBPACK_IMPORTED_MODULE_6__["AboutComponent"], _skills_skills_component__WEBPACK_IMPORTED_MODULE_7__["SkillsComponent"], _experiences_experiences_component__WEBPACK_IMPORTED_MODULE_8__["ExperiencesComponent"], _projects_projects_component__WEBPACK_IMPORTED_MODULE_9__["ProjectsComponent"], _contact_contact_component__WEBPACK_IMPORTED_MODULE_10__["ContactComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/contact/contact.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/contact/contact.component.ts ***!
    \**********************************************/

  /*! exports provided: ContactComponent */

  /***/
  function srcAppContactContactComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactComponent", function () {
      return ContactComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ContactComponent = /*#__PURE__*/function () {
      function ContactComponent() {
        _classCallCheck(this, ContactComponent);
      }

      _createClass(ContactComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ContactComponent;
    }();

    ContactComponent.ɵfac = function ContactComponent_Factory(t) {
      return new (t || ContactComponent)();
    };

    ContactComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ContactComponent,
      selectors: [["app-contact"]],
      decls: 12,
      vars: 0,
      consts: [[1, "container"], [1, "icons-container", "animated"], [1, "icon-container"], ["href", "https://github.com/himanipoudel", "i", "", 1, "fa", "fa-github", "fa-3x"], ["href", "https://www.instagram.com/himanipoudel/", "i", "", 1, "fa", "fa-instagram", "fa-3x"], ["href", "https://www.linkedin.com/in/himani-poudel-973843174/", "i", "", 1, "fa", "fa-linkedin", "fa-3x"], ["href", "https://twitter.com/himani_poudel", "i", "", 1, "fa", "fa-twitter", "fa-3x"], ["href", "https://www.facebook.com/himani.poudel", "i", "", 1, "fa", "fa-facebook-f", "fa-3x", 2, "margin", "0 5px"]],
      template: function ContactComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".container[_ngcontent-%COMP%] {\r\n    max-width: 40%;\r\n    max-height: 100px;\r\n    margin: 0 auto;\r\n    \r\n   \r\n}\r\n.icons-container[_ngcontent-%COMP%] {\r\n    margin: 0;\r\n    height: 100px;\r\n    display: flex;\r\n    justify-content: space-around;\r\n    align-items: center;\r\n}\r\n.icon-container[_ngcontent-%COMP%]\r\n{\r\n    border: 0.5px solid rgba(255, 255, 255, 0.6);\r\n}\r\na[_ngcontent-%COMP%]:hover\r\n{\r\n    text-decoration: none;\r\n}\r\n.icons-container[_ngcontent-%COMP%]    > .icon-container[_ngcontent-%COMP%] {\r\n    padding: 1em 1.2em;\r\n    border-radius: 0.5em;\r\n    transition: all 0.2s ease-in-out;\r\n}\r\n.icons-container.not-animated[_ngcontent-%COMP%]    > .icon-container[_ngcontent-%COMP%] {\r\n    box-shadow: -8px -8px 8px 0 rgba(255, 255, 255, 0.6), 8px 8px 8px 0 rgba(0, 0, 0, 0.03);\r\n    transform: scale(1.0);\r\n}\r\n.icons-container.animated[_ngcontent-%COMP%]    > .icon-container[_ngcontent-%COMP%] {\r\n    -webkit-animation: raise-container 0.3s forwards 0.8s;\r\n            animation: raise-container 0.3s forwards 0.8s;\r\n}\r\n@-webkit-keyframes raise-container {\r\n    from {\r\n        box-shadow: none;\r\n        transform: scale(1);\r\n   }\r\n    to {\r\n        box-shadow: -4px -4px 4px 0 rgba(255, 255, 255, 0.6), 4px 4px 4px 0 rgba(0, 0, 0, 0.03);\r\n        transform: scale(1.05);\r\n   }\r\n}\r\n@keyframes raise-container {\r\n    from {\r\n        box-shadow: none;\r\n        transform: scale(1);\r\n   }\r\n    to {\r\n        box-shadow: -4px -4px 4px 0 rgba(255, 255, 255, 0.6), 4px 4px 4px 0 rgba(0, 0, 0, 0.03);\r\n        transform: scale(1.05);\r\n   }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksY0FBYztJQUNkLGlCQUFpQjtJQUNqQixjQUFjOzs7QUFHbEI7QUFDQTtJQUNJLFNBQVM7SUFDVCxhQUFhO0lBQ2IsYUFBYTtJQUNiLDZCQUE2QjtJQUM3QixtQkFBbUI7QUFDdkI7QUFDQTs7SUFFSSw0Q0FBNEM7QUFDaEQ7QUFFQTs7SUFFSSxxQkFBcUI7QUFDekI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIsZ0NBQWdDO0FBQ3BDO0FBQ0E7SUFDSSx1RkFBdUY7SUFDdkYscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSSxxREFBNkM7WUFBN0MsNkNBQTZDO0FBQ2pEO0FBQ0E7SUFDSTtRQUNJLGdCQUFnQjtRQUNoQixtQkFBbUI7R0FDeEI7SUFDQztRQUNJLHVGQUF1RjtRQUN2RixzQkFBc0I7R0FDM0I7QUFDSDtBQVRBO0lBQ0k7UUFDSSxnQkFBZ0I7UUFDaEIsbUJBQW1CO0dBQ3hCO0lBQ0M7UUFDSSx1RkFBdUY7UUFDdkYsc0JBQXNCO0dBQzNCO0FBQ0giLCJmaWxlIjoic3JjL2FwcC9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uY29udGFpbmVyIHtcclxuICAgIG1heC13aWR0aDogNDAlO1xyXG4gICAgbWF4LWhlaWdodDogMTAwcHg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIFxyXG4gICBcclxufVxyXG4uaWNvbnMtY29udGFpbmVyIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbi5pY29uLWNvbnRhaW5lclxyXG57XHJcbiAgICBib3JkZXI6IDAuNXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KTtcclxufVxyXG5cclxuYTpob3ZlclxyXG57XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuLmljb25zLWNvbnRhaW5lciA+IC5pY29uLWNvbnRhaW5lciB7XHJcbiAgICBwYWRkaW5nOiAxZW0gMS4yZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiAwLjVlbTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xyXG59XHJcbi5pY29ucy1jb250YWluZXIubm90LWFuaW1hdGVkID4gLmljb24tY29udGFpbmVyIHtcclxuICAgIGJveC1zaGFkb3c6IC04cHggLThweCA4cHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNiksIDhweCA4cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjAzKTtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wKTtcclxufVxyXG4uaWNvbnMtY29udGFpbmVyLmFuaW1hdGVkID4gLmljb24tY29udGFpbmVyIHtcclxuICAgIGFuaW1hdGlvbjogcmFpc2UtY29udGFpbmVyIDAuM3MgZm9yd2FyZHMgMC44cztcclxufVxyXG5Aa2V5ZnJhbWVzIHJhaXNlLWNvbnRhaW5lciB7XHJcbiAgICBmcm9tIHtcclxuICAgICAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgIH1cclxuICAgIHRvIHtcclxuICAgICAgICBib3gtc2hhZG93OiAtNHB4IC00cHggNHB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpLCA0cHggNHB4IDRweCAwIHJnYmEoMCwgMCwgMCwgMC4wMyk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcclxuICAgfVxyXG59XHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-contact',
          templateUrl: './contact.component.html',
          styleUrls: ['./contact.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/experiences/experiences.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/experiences/experiences.component.ts ***!
    \******************************************************/

  /*! exports provided: ExperiencesComponent */

  /***/
  function srcAppExperiencesExperiencesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ExperiencesComponent", function () {
      return ExperiencesComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ExperiencesComponent = /*#__PURE__*/function () {
      function ExperiencesComponent() {
        _classCallCheck(this, ExperiencesComponent);
      }

      _createClass(ExperiencesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ExperiencesComponent;
    }();

    ExperiencesComponent.ɵfac = function ExperiencesComponent_Factory(t) {
      return new (t || ExperiencesComponent)();
    };

    ExperiencesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ExperiencesComponent,
      selectors: [["app-experiences"]],
      decls: 51,
      vars: 0,
      consts: [["id", "experiences", 1, "container"], [1, "quotes"], [1, "card"], [1, "box", "box1"], [1, "bg"], [1, "box", "box2"], [1, "box", "box3"]],
      template: function ExperiencesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Experiences");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Help Desk Technician");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "ULM Computing Center | Dec 2019 - Present");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Image computers, set up devices into the network resolve any technical issues");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Work in team to troubleshoot any major computer issues and solve it. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Receive calls and make phone calls in a jubilant manner to customers and troubleshoot their issues through phone calls.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Follow up with customers to ensure issue has been resolved. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Library Assistant");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "University of Louisiana monroe | Jan 2019 - Dec 2019");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Troubleshoot the printers, change the toners, fix the paper jams in the printers.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Help students with any login problems in the library.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Front Desk Assistant");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "International Student Office | Aug 2018 - Jan 2019");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Receive the phone calls and help students or faculty with their issues.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "File international students' documents.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Help international students with their issues regarding I20s. travel documents, application proccess for the university.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".container[_ngcontent-%COMP%]\r\n{\r\n    \r\n    height:700px;\r\n    width:100%;\r\n    opacity:0.9;\r\n    font-family: 'Poppins', sans-serif;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    \r\n    background-color:black;\r\n    -webkit-font-smoothing: antialiased;\r\n    -moz-osx-font-smoothing: grayscale;\r\n\r\n}\r\n\r\n.quotes[_ngcontent-%COMP%] {\r\n    width: 80vw;\r\n    height: 300px;\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    justify-content: space-between;\r\n    z-index: 2;\r\n  }\r\n\r\n.quotes[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    width: 25vw;\r\n    height: 400px;\r\n   \r\n    background: black;\r\n    overflow: hidden;\r\n    transition: all 0.5s ease-in;\r\n    z-index: 2;\r\n    box-sizing: border-box;\r\n    border: 1px inset grey;\r\n    border-radius: 20px;\r\n    padding: 30px;\r\n    box-shadow: -10px 25px 50px rgba(0, 0, 0, 0.3);\r\n  }\r\n\r\n.quotes[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]::before {\r\n   \r\n    position: absolute;\r\n    top: -20px;\r\n    left: 5px;\r\n    width: 100%;\r\n    height: 100%;\r\n    font-size: 120px;\r\n    opacity: 0.2;\r\n    background: transparent;\r\n    pointer-events: none;\r\n  }\r\n\r\n.quotes[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]::after {\r\n    \r\n    position: absolute;\r\n    bottom: -10%;\r\n    right: 5%;\r\n    font-size: 120px;\r\n    opacity: 0.2;\r\n    \r\n    \r\n    pointer-events: none;\r\n  }\r\n\r\n.quotes[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    margin: 0;\r\n    padding: 10px;\r\n    font-size: 1.2rem;\r\n  }\r\n\r\n.quotes[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]:hover {\r\n    color: #f2f2f2;\r\n    box-shadow: 20px 50px 100px rgba(0, 0, 0, 0.5);\r\n  }\r\n\r\n.quotes[_ngcontent-%COMP%]   .box.box1[_ngcontent-%COMP%]:hover, .quotes[_ngcontent-%COMP%]   .box.box1[_ngcontent-%COMP%]:hover ~ .bg[_ngcontent-%COMP%] {\r\n    opacity: 1;\r\n    background: #e2a9e5;\r\n  background: linear-gradient(135deg, #e2a9e5 15%,#2b94e5 100%);\r\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#e2a9e5', endColorstr='#2b94e5',GradientType=1 );\r\n  }\r\n\r\n.quotes[_ngcontent-%COMP%]   .box.box2[_ngcontent-%COMP%]:hover, .quotes[_ngcontent-%COMP%]   .box.box2[_ngcontent-%COMP%]:hover ~ .bg[_ngcontent-%COMP%] {\r\n    opacity: 1;\r\n    background: #632c65;\r\n  background: linear-gradient(135deg, #632c65 15%,#56a5e2 100%);\r\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#632c65', endColorstr='#56a5e2',GradientType=1 );\r\n  }\r\n\r\n.quotes[_ngcontent-%COMP%]   .box.box3[_ngcontent-%COMP%]:hover, .quotes[_ngcontent-%COMP%]   .box.box3[_ngcontent-%COMP%]:hover ~ .bg[_ngcontent-%COMP%] {\r\n    opacity: 1;\r\n    background: #4b384c;\r\n  background: linear-gradient(135deg, #4b384c 15%,#da5de2 100%);\r\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#4b384c', endColorstr='#da5de2',GradientType=1 );\r\n  }\r\n\r\nh1[_ngcontent-%COMP%]{\r\n      \r\n      padding-bottom: 40px;\r\n      margin-top:0;\r\n      font-size:40px;\r\n      font-weight: bold;\r\n  }\r\n\r\nh2[_ngcontent-%COMP%]\r\n  {\r\n      font-size:25px;\r\n  }\r\n\r\nh3[_ngcontent-%COMP%]{\r\n      font-size:15px;\r\n      font-weight:bold;\r\n  }\r\n\r\nli[_ngcontent-%COMP%]{\r\n      font-size:15px;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXhwZXJpZW5jZXMvZXhwZXJpZW5jZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0lBR0ksWUFBWTtJQUNaLFVBQVU7SUFDVixXQUFXO0lBQ1gsa0NBQWtDO0lBQ2xDLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQix1Q0FBdUM7SUFDdkMsc0JBQXNCO0lBQ3RCLG1DQUFtQztJQUNuQyxrQ0FBa0M7O0FBRXRDOztBQUVBO0lBQ0ksV0FBVztJQUNYLGFBQWE7SUFDYixhQUFhO0lBQ2IsZUFBZTtJQUNmLDhCQUE4QjtJQUM5QixVQUFVO0VBQ1o7O0FBRUE7SUFDRSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGFBQWE7O0lBRWIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQiw0QkFBNEI7SUFDNUIsVUFBVTtJQUNWLHNCQUFzQjtJQUN0QixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYiw4Q0FBOEM7RUFDaEQ7O0FBRUE7O0lBRUUsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixTQUFTO0lBQ1QsV0FBVztJQUNYLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLHVCQUF1QjtJQUN2QixvQkFBb0I7RUFDdEI7O0FBRUE7O0lBRUUsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixTQUFTO0lBQ1QsZ0JBQWdCO0lBQ2hCLFlBQVk7OztJQUdaLG9CQUFvQjtFQUN0Qjs7QUFFQTtJQUNFLFNBQVM7SUFDVCxhQUFhO0lBQ2IsaUJBQWlCO0VBQ25COztBQUVBO0lBQ0UsY0FBYztJQUNkLDhDQUE4QztFQUNoRDs7QUFHQTs7SUFFRSxVQUFVO0lBQ1YsbUJBQW1CO0VBR3JCLDZEQUE2RDtFQUM3RCxtSEFBbUg7RUFDbkg7O0FBRUE7O0lBRUUsVUFBVTtJQUNWLG1CQUFtQjtFQUdyQiw2REFBNkQ7RUFDN0QsbUhBQW1IO0VBQ25IOztBQUVBOztJQUVFLFVBQVU7SUFDVixtQkFBbUI7RUFHckIsNkRBQTZEO0VBQzdELG1IQUFtSDtFQUNuSDs7QUFFQTs7TUFFSSxvQkFBb0I7TUFDcEIsWUFBWTtNQUNaLGNBQWM7TUFDZCxpQkFBaUI7RUFDckI7O0FBRUE7O01BRUksY0FBYztFQUNsQjs7QUFFQTtNQUNJLGNBQWM7TUFDZCxnQkFBZ0I7RUFDcEI7O0FBRUE7TUFDSSxjQUFjO0VBQ2xCIiwiZmlsZSI6InNyYy9hcHAvZXhwZXJpZW5jZXMvZXhwZXJpZW5jZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXJcclxue1xyXG4gICAgXHJcbiAgICBoZWlnaHQ6NzAwcHg7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgb3BhY2l0eTowLjk7XHJcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAvKmJhY2tncm91bmQtY29sb3I6cmdiKDIyNCwgMjA2LCAyMjQpOyovXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOmJsYWNrO1xyXG4gICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XHJcbiAgICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xyXG5cclxufVxyXG5cclxuLnF1b3RlcyB7XHJcbiAgICB3aWR0aDogODB2dztcclxuICAgIGhlaWdodDogMzAwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgei1pbmRleDogMjtcclxuICB9XHJcbiAgXHJcbiAgLnF1b3RlcyAuYm94IHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAyNXZ3O1xyXG4gICAgaGVpZ2h0OiA0MDBweDtcclxuICAgXHJcbiAgICBiYWNrZ3JvdW5kOiBibGFjaztcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluO1xyXG4gICAgei1pbmRleDogMjtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBib3JkZXI6IDFweCBpbnNldCBncmV5O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIHBhZGRpbmc6IDMwcHg7XHJcbiAgICBib3gtc2hhZG93OiAtMTBweCAyNXB4IDUwcHggcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG4gIH1cclxuICBcclxuICAucXVvdGVzIC5ib3g6OmJlZm9yZSB7XHJcbiAgIFxyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAtMjBweDtcclxuICAgIGxlZnQ6IDVweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgZm9udC1zaXplOiAxMjBweDtcclxuICAgIG9wYWNpdHk6IDAuMjtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgfVxyXG4gIFxyXG4gIC5xdW90ZXMgLmJveDo6YWZ0ZXIge1xyXG4gICAgXHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IC0xMCU7XHJcbiAgICByaWdodDogNSU7XHJcbiAgICBmb250LXNpemU6IDEyMHB4O1xyXG4gICAgb3BhY2l0eTogMC4yO1xyXG4gICAgXHJcbiAgICBcclxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gIH1cclxuICBcclxuICAucXVvdGVzIC5ib3ggcCB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgfVxyXG4gIFxyXG4gIC5xdW90ZXMgLmJveDpob3ZlciB7XHJcbiAgICBjb2xvcjogI2YyZjJmMjtcclxuICAgIGJveC1zaGFkb3c6IDIwcHggNTBweCAxMDBweCByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbiAgfVxyXG4gIFxyXG4gICBcclxuICAucXVvdGVzIC5ib3guYm94MTpob3ZlcixcclxuICAucXVvdGVzIC5ib3guYm94MTpob3Zlcn4uYmcge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIGJhY2tncm91bmQ6ICNlMmE5ZTU7XHJcbiAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQoLTQ1ZGVnLCAjZTJhOWU1IDE1JSwgIzJiOTRlNSAxMDAlKTtcclxuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCgtNDVkZWcsICNlMmE5ZTUgMTUlLCMyYjk0ZTUgMTAwJSk7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2UyYTllNSAxNSUsIzJiOTRlNSAxMDAlKTtcclxuICBmaWx0ZXI6IHByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5ncmFkaWVudCggc3RhcnRDb2xvcnN0cj0nI2UyYTllNScsIGVuZENvbG9yc3RyPScjMmI5NGU1JyxHcmFkaWVudFR5cGU9MSApO1xyXG4gIH1cclxuICBcclxuICAucXVvdGVzIC5ib3guYm94Mjpob3ZlcixcclxuICAucXVvdGVzIC5ib3guYm94Mjpob3Zlcn4uYmcge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIGJhY2tncm91bmQ6ICM2MzJjNjU7XHJcbiAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQoLTQ1ZGVnLCAjNjMyYzY1IDE1JSwgIzU2YTVlMiAxMDAlKTtcclxuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCgtNDVkZWcsICM2MzJjNjUgMTUlLCM1NmE1ZTIgMTAwJSk7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzYzMmM2NSAxNSUsIzU2YTVlMiAxMDAlKTtcclxuICBmaWx0ZXI6IHByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5ncmFkaWVudCggc3RhcnRDb2xvcnN0cj0nIzYzMmM2NScsIGVuZENvbG9yc3RyPScjNTZhNWUyJyxHcmFkaWVudFR5cGU9MSApO1xyXG4gIH1cclxuICBcclxuICAucXVvdGVzIC5ib3guYm94Mzpob3ZlcixcclxuICAucXVvdGVzIC5ib3guYm94Mzpob3Zlcn4uYmcge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIGJhY2tncm91bmQ6ICM0YjM4NGM7XHJcbiAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQoLTQ1ZGVnLCAjNGIzODRjIDE1JSwgI2RhNWRlMiAxMDAlKTtcclxuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCgtNDVkZWcsICM0YjM4NGMgMTUlLCNkYTVkZTIgMTAwJSk7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzRiMzg0YyAxNSUsI2RhNWRlMiAxMDAlKTtcclxuICBmaWx0ZXI6IHByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5ncmFkaWVudCggc3RhcnRDb2xvcnN0cj0nIzRiMzg0YycsIGVuZENvbG9yc3RyPScjZGE1ZGUyJyxHcmFkaWVudFR5cGU9MSApO1xyXG4gIH1cclxuXHJcbiAgaDF7XHJcbiAgICAgIFxyXG4gICAgICBwYWRkaW5nLWJvdHRvbTogNDBweDtcclxuICAgICAgbWFyZ2luLXRvcDowO1xyXG4gICAgICBmb250LXNpemU6NDBweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgfVxyXG5cclxuICBoMlxyXG4gIHtcclxuICAgICAgZm9udC1zaXplOjI1cHg7XHJcbiAgfVxyXG5cclxuICBoM3tcclxuICAgICAgZm9udC1zaXplOjE1cHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OmJvbGQ7XHJcbiAgfVxyXG5cclxuICBsaXtcclxuICAgICAgZm9udC1zaXplOjE1cHg7XHJcbiAgfVxyXG4gICJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExperiencesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-experiences',
          templateUrl: './experiences.component.html',
          styleUrls: ['./experiences.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/header/header.component.ts":
  /*!********************************************!*\
    !*** ./src/app/header/header.component.ts ***!
    \********************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var HeaderComponent = /*#__PURE__*/function () {
      function HeaderComponent() {
        _classCallCheck(this, HeaderComponent);
      }

      _createClass(HeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HeaderComponent;
    }();

    HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
      return new (t || HeaderComponent)();
    };

    HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HeaderComponent,
      selectors: [["app-header"]],
      decls: 30,
      vars: 0,
      consts: [[1, "navbar", "navbar-default", "fixed-top", "navbar-expand-lg"], ["ng-if", "selectedItem == #about", "ng-style", "{'background-color': 'black'}"], ["ng-if", "selectedItem == #skills", "ng-style", "{'background-color': 'blue'}"], ["ng-if", "selectedItem == #experiences", "ng-style", "{'background-color': 'black'}"], ["ng-if", "selectedItem == #projects", "ng-style", "{'background-color': 'black'}"], ["ng-if", "selectedItem == #contact", "ng-style", "{'background-color': 'black'}"], [1, "container-fluid"], [1, "navbar-header"], [1, "navbar-brand"], [1, "collapse", "navbar-collapse"], [1, "nav", "navbar-nav"], ["href", "#home"], ["href", "#aboutme"], ["href", "#skills"], ["href", "#experiences"], ["href", "#projects"], ["href", "#contact"]],
      template: function HeaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Himani Poudel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ul", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "About Me");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Skills");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Experiences");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Projects");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Contact");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".container-fluid[_ngcontent-%COMP%]\r\n{\r\n    font-size:20px;\r\n    margin:10px 0 0 170px;\r\n    max-height:70px;\r\n}\r\n\r\n.navbar-brand[_ngcontent-%COMP%]\r\n{\r\n    font-size:50px;\r\n    padding-right: 50px;\r\n}\r\n\r\n.navbar-expand-lg[_ngcontent-%COMP%]{\r\n    \r\n    background-color:black;\r\n    z-index:1030;\r\n    width:100%;\r\n    position:fixed;\r\n    \r\n}\r\n\r\n.navbar[_ngcontent-%COMP%]{\r\n    border:0;\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztJQUVJLGNBQWM7SUFDZCxxQkFBcUI7SUFDckIsZUFBZTtBQUNuQjs7QUFFQTs7SUFFSSxjQUFjO0lBQ2QsbUJBQW1CO0FBQ3ZCOztBQUVBOztJQUVJLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osVUFBVTtJQUNWLGNBQWM7O0FBRWxCOztBQUVBO0lBQ0ksUUFBUTs7QUFFWiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXItZmx1aWRcclxue1xyXG4gICAgZm9udC1zaXplOjIwcHg7XHJcbiAgICBtYXJnaW46MTBweCAwIDAgMTcwcHg7XHJcbiAgICBtYXgtaGVpZ2h0OjcwcHg7XHJcbn1cclxuXHJcbi5uYXZiYXItYnJhbmRcclxue1xyXG4gICAgZm9udC1zaXplOjUwcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA1MHB4O1xyXG59XHJcblxyXG4ubmF2YmFyLWV4cGFuZC1sZ3tcclxuICAgIFxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjpibGFjaztcclxuICAgIHotaW5kZXg6MTAzMDtcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBwb3NpdGlvbjpmaXhlZDtcclxuICAgIFxyXG59XHJcblxyXG4ubmF2YmFye1xyXG4gICAgYm9yZGVyOjA7XHJcblxyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-header',
          templateUrl: './header.component.html',
          styleUrls: ['./header.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/home/home.component.ts":
  /*!****************************************!*\
    !*** ./src/app/home/home.component.ts ***!
    \****************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var HomeComponent = /*#__PURE__*/function () {
      function HomeComponent() {
        _classCallCheck(this, HomeComponent);
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HomeComponent;
    }();

    HomeComponent.ɵfac = function HomeComponent_Factory(t) {
      return new (t || HomeComponent)();
    };

    HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomeComponent,
      selectors: [["app-home"]],
      decls: 9,
      vars: 0,
      consts: [["id", "home", 1, "container"], [1, "layer"], [1, "row"], [1, "col-12"]],
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Welcome to my Webpage");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " I am a software Developer.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".container[_ngcontent-%COMP%]\r\n{\r\n    background-image: url(\"https://directlinedev.com/media/cases/woodwell/header/background_1.wide.jpeg\"); \r\n    background-repeat: no-repeat;\r\n    background-attachment: fixed;\r\n    opacity:0.9;\r\n    background-size: cover;\r\n    position: relative;\r\n    width:100%;\r\n    height:800px;\r\n    color:grey;\r\n}\r\n\r\np[_ngcontent-%COMP%]{\r\n    padding:250px 0 100px 0;\r\n    text-align:center;\r\n    font-size:30px;\r\n}\r\n\r\nh1[_ngcontent-%COMP%]{\r\n    font-size:70px;\r\n    text-align:center;\r\n    margin-top:100px;\r\n    z-index:2000;\r\n}\r\n\r\n.layer[_ngcontent-%COMP%]\r\n{\r\n    background-color: black;\r\n    color:white;\r\n    opacity:0.4;\r\n    margin:auto;\r\n    margin-top:150px;\r\n    width: 60%;\r\n    height: 70%;\r\n\r\n    background: rgba( 255, 255, 255, 0.15 );\r\nbox-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );\r\nbackdrop-filter: blur( 11.0px );\r\n-webkit-backdrop-filter: blur( 11.0px );\r\nborder-radius: 10px;\r\nborder: 1px solid rgba( 255, 255, 255, 0.18 );\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBOztJQUVJLHFHQUFxRztJQUNyRyw0QkFBNEI7SUFDNUIsNEJBQTRCO0lBQzVCLFdBQVc7SUFDWCxzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixZQUFZO0lBQ1osVUFBVTtBQUNkOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGlCQUFpQjtJQUNqQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsWUFBWTtBQUNoQjs7QUFFQTs7SUFFSSx1QkFBdUI7SUFDdkIsV0FBVztJQUNYLFdBQVc7SUFDWCxXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLFVBQVU7SUFDVixXQUFXOztJQUVYLHVDQUF1QztBQUMzQyxrREFBa0Q7QUFDbEQsK0JBQStCO0FBQy9CLHVDQUF1QztBQUN2QyxtQkFBbUI7QUFDbkIsNkNBQTZDO0FBQzdDIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmNvbnRhaW5lclxyXG57XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJodHRwczovL2RpcmVjdGxpbmVkZXYuY29tL21lZGlhL2Nhc2VzL3dvb2R3ZWxsL2hlYWRlci9iYWNrZ3JvdW5kXzEud2lkZS5qcGVnXCIpOyBcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xyXG4gICAgb3BhY2l0eTowLjk7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIGhlaWdodDo4MDBweDtcclxuICAgIGNvbG9yOmdyZXk7XHJcbn1cclxuXHJcbnB7XHJcbiAgICBwYWRkaW5nOjI1MHB4IDAgMTAwcHggMDtcclxuICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gICAgZm9udC1zaXplOjMwcHg7XHJcbn1cclxuXHJcbmgxe1xyXG4gICAgZm9udC1zaXplOjcwcHg7XHJcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6MTAwcHg7XHJcbiAgICB6LWluZGV4OjIwMDA7XHJcbn1cclxuXHJcbi5sYXllclxyXG57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgIGNvbG9yOndoaXRlO1xyXG4gICAgb3BhY2l0eTowLjQ7XHJcbiAgICBtYXJnaW46YXV0bztcclxuICAgIG1hcmdpbi10b3A6MTUwcHg7XHJcbiAgICB3aWR0aDogNjAlO1xyXG4gICAgaGVpZ2h0OiA3MCU7XHJcblxyXG4gICAgYmFja2dyb3VuZDogcmdiYSggMjU1LCAyNTUsIDI1NSwgMC4xNSApO1xyXG5ib3gtc2hhZG93OiAwIDhweCAzMnB4IDAgcmdiYSggMzEsIDM4LCAxMzUsIDAuMzcgKTtcclxuYmFja2Ryb3AtZmlsdGVyOiBibHVyKCAxMS4wcHggKTtcclxuLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoIDExLjBweCApO1xyXG5ib3JkZXItcmFkaXVzOiAxMHB4O1xyXG5ib3JkZXI6IDFweCBzb2xpZCByZ2JhKCAyNTUsIDI1NSwgMjU1LCAwLjE4ICk7XHJcbn1cclxuXHJcblxyXG5cclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-home',
          templateUrl: './home.component.html',
          styleUrls: ['./home.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/projects/projects.component.ts":
  /*!************************************************!*\
    !*** ./src/app/projects/projects.component.ts ***!
    \************************************************/

  /*! exports provided: ProjectsComponent */

  /***/
  function srcAppProjectsProjectsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function () {
      return ProjectsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ProjectsComponent = /*#__PURE__*/function () {
      function ProjectsComponent() {
        _classCallCheck(this, ProjectsComponent);
      }

      _createClass(ProjectsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ProjectsComponent;
    }();

    ProjectsComponent.ɵfac = function ProjectsComponent_Factory(t) {
      return new (t || ProjectsComponent)();
    };

    ProjectsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ProjectsComponent,
      selectors: [["app-projects"]],
      decls: 27,
      vars: 0,
      consts: [[1, "container"], [1, "heading"], [1, "quotes"], [1, "card"], ["href", "http://himanipoudel.me/Rock_Paper_Scissors/"], [1, "box", "box1"], ["href", "http://himanipoudel.me/Weather/weather.php"], [1, "box", "box2"], ["href", "http://himanipoudel.me/TEDxULM/TEDX.jpg"], [1, "box", "box3"]],
      template: function ProjectsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "PROJECTS");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Rock Paper Scissors");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "- Game designed using HTML, CSS, Javascript.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Weather Forecast ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "- Weather Forecast webpage developed using PHP and weather API.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "TEDxULM ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "- Event ticket designed using Adobe Illustrator.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".container[_ngcontent-%COMP%] {\r\n  background-image:url(\"https://m.media-amazon.com/images/S/aplus-media/vc/a7fa3d7d-05a8-4de9-b5e1-17aeeaec1e49.jpg\");\r\n  background-repeat: no-repeat;\r\n  background-attachment: fixed;\r\n  background-size: cover;\r\n  position: relative;\r\n  font-family: 'Poppins', sans-serif;\r\n  opacity:0.7;\r\n  margin: 0;\r\n  padding: 0;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  height:600px;\r\n  width:100%;\r\n  text-align:center;\r\n  -webkit-font-smoothing: antialiased;\r\n  -moz-osx-font-smoothing: grayscale;\r\n}\r\n.heading[_ngcontent-%COMP%]\r\n{\r\n  width:20%;\r\n  border-radius:20px;\r\n  background-color:white;\r\n}\r\n.quotes[_ngcontent-%COMP%] {\r\n  width: 80vw;\r\n  padding-top:40px;\r\n  min-height: 300px;\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  justify-content: space-between;\r\n  z-index: 2;\r\n}\r\nh1[_ngcontent-%COMP%]{\r\n    color:grey;\r\n    font-weight:bold;\r\n }\r\nhr[_ngcontent-%COMP%]{\r\n  border: 1px solid black;\r\n  width:60%;\r\n\r\n}\r\n.quotes[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  width: 25vw;\r\n  height: 200px;\r\n  min-height: 200px;\r\n  background : white;\r\n  overflow: hidden;\r\n  transition: all 0.5s ease-in;\r\n  z-index: 2;\r\n  box-sizing: border-box;\r\n  opacity:0.8;\r\n  padding:25px;\r\n  border-radius:30px;\r\n  box-shadow: -10px 25px 50px rgba(0, 0, 0, 0.3);\r\n}\r\n.quotes[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]::before {\r\n \r\n  position: absolute;\r\n  top: -20px;\r\n  left: 5px;\r\n  width: 100%;\r\n  height: 200px;\r\n  font-size: 120px;\r\n  opacity: 0.9;\r\n  background: transparent;\r\n  pointer-events: none;\r\n}\r\n.quotes[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]::after {\r\n \r\n  position: absolute;\r\n  bottom: -10%;\r\n  right: 5%;\r\n  font-size: 120px;\r\n  opacity: 0.2;\r\n  background: transparent;\r\n  -webkit-filter: invert(1);\r\n          filter: invert(1);\r\n  pointer-events: none;\r\n}\r\n.quotes[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{\r\n \r\n  margin: 0;\r\n  padding: 10px;\r\n  font-size: 30px;\r\n}\r\n.quotes[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n \r\n  margin: 0;\r\n  padding: 0;\r\n  bottom: 10%;\r\n  right: 10%;\r\n  font-size: 20px;\r\n}\r\n.quotes[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]:hover {\r\n  color: #f2f2f2;\r\n  box-shadow: 20px 50px 100px rgba(0, 0, 0, 0.5);\r\n}\r\n.quotes[_ngcontent-%COMP%]   .bg[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  z-index: 1;\r\n  opacity: 0;\r\n  transition: all 0.5s ease-in;\r\n  pointer-events: none;\r\n  width: 100%;\r\n  height: 500px;\r\n  overflow: hidden;\r\n}\r\n.quotes[_ngcontent-%COMP%]   .box.box1[_ngcontent-%COMP%]:hover, .quotes[_ngcontent-%COMP%]   .box.box1[_ngcontent-%COMP%]:hover ~ .bg[_ngcontent-%COMP%] {\r\n  opacity: 1;\r\n  background: #e2a9e5;\r\nbackground: linear-gradient(135deg, #e2a9e5 15%,#2b94e5 100%);\r\nfilter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#e2a9e5', endColorstr='#2b94e5',GradientType=1 );\r\n}\r\n.quotes[_ngcontent-%COMP%]   .box.box2[_ngcontent-%COMP%]:hover, .quotes[_ngcontent-%COMP%]   .box.box2[_ngcontent-%COMP%]:hover ~ .bg[_ngcontent-%COMP%] {\r\n  opacity: 1;\r\n  background: #632c65;\r\nbackground: linear-gradient(135deg, #632c65 15%,#56a5e2 100%);\r\nfilter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#632c65', endColorstr='#56a5e2',GradientType=1 );\r\n}\r\n.quotes[_ngcontent-%COMP%]   .box.box3[_ngcontent-%COMP%]:hover, .quotes[_ngcontent-%COMP%]   .box.box3[_ngcontent-%COMP%]:hover ~ .bg[_ngcontent-%COMP%] {\r\n  opacity: 1;\r\n  background: #4b384c;\r\nbackground: linear-gradient(135deg, #4b384c 15%,#da5de2 100%);\r\nfilter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#4b384c', endColorstr='#da5de2',GradientType=1 );\r\n}\r\na[_ngcontent-%COMP%]:hover\r\n{\r\n  text-decoration: none ;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamVjdHMvcHJvamVjdHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1IQUFtSDtFQUNuSCw0QkFBNEI7RUFDNUIsNEJBQTRCO0VBQzVCLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsa0NBQWtDO0VBQ2xDLFdBQVc7RUFDWCxTQUFTO0VBQ1QsVUFBVTtFQUNWLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osVUFBVTtFQUNWLGlCQUFpQjtFQUNqQixtQ0FBbUM7RUFDbkMsa0NBQWtDO0FBQ3BDO0FBQ0E7O0VBRUUsU0FBUztFQUNULGtCQUFrQjtFQUNsQixzQkFBc0I7QUFDeEI7QUFDQztFQUNDLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixlQUFlO0VBQ2YsOEJBQThCO0VBQzlCLFVBQVU7QUFDWjtBQUVBO0lBQ0ksVUFBVTtJQUNWLGdCQUFnQjtDQUNuQjtBQUlEO0VBQ0UsdUJBQXVCO0VBQ3ZCLFNBQVM7O0FBRVg7QUFDQztFQUNDLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLDRCQUE0QjtFQUM1QixVQUFVO0VBQ1Ysc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLDhDQUE4QztBQUNoRDtBQUNDOztFQUVDLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsU0FBUztFQUNULFdBQVc7RUFDWCxhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWix1QkFBdUI7RUFDdkIsb0JBQW9CO0FBQ3RCO0FBQ0M7O0VBRUMsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixTQUFTO0VBQ1QsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWix1QkFBdUI7RUFDdkIseUJBQWlCO1VBQWpCLGlCQUFpQjtFQUNqQixvQkFBb0I7QUFDdEI7QUFDQzs7RUFFQyxTQUFTO0VBQ1QsYUFBYTtFQUNiLGVBQWU7QUFDakI7QUFDQztFQUNDLGtCQUFrQjs7RUFFbEIsU0FBUztFQUNULFVBQVU7RUFDVixXQUFXO0VBQ1gsVUFBVTtFQUNWLGVBQWU7QUFDakI7QUFDQztFQUNDLGNBQWM7RUFDZCw4Q0FBOEM7QUFDaEQ7QUFDQztFQUNDLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sT0FBTztFQUNQLFVBQVU7RUFDVixVQUFVO0VBQ1YsNEJBQTRCO0VBQzVCLG9CQUFvQjtFQUNwQixXQUFXO0VBQ1gsYUFBYTtFQUNiLGdCQUFnQjtBQUNsQjtBQUNDOztFQUVDLFVBQVU7RUFDVixtQkFBbUI7QUFHckIsNkRBQTZEO0FBQzdELG1IQUFtSDtBQUNuSDtBQUNDOztFQUVDLFVBQVU7RUFDVixtQkFBbUI7QUFHckIsNkRBQTZEO0FBQzdELG1IQUFtSDtBQUNuSDtBQUNDOztFQUVDLFVBQVU7RUFDVixtQkFBbUI7QUFHckIsNkRBQTZEO0FBQzdELG1IQUFtSDtBQUNuSDtBQUNDOztFQUVDLHNCQUFzQjtBQUN4QiIsImZpbGUiOiJzcmMvYXBwL3Byb2plY3RzL3Byb2plY3RzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOnVybChcImh0dHBzOi8vbS5tZWRpYS1hbWF6b24uY29tL2ltYWdlcy9TL2FwbHVzLW1lZGlhL3ZjL2E3ZmEzZDdkLTA1YTgtNGRlOS1iNWUxLTE3YWVlYWVjMWU0OS5qcGdcIik7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XHJcbiAgb3BhY2l0eTowLjc7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgaGVpZ2h0OjYwMHB4O1xyXG4gIHdpZHRoOjEwMCU7XHJcbiAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XHJcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcclxufVxyXG4uaGVhZGluZ1xyXG57XHJcbiAgd2lkdGg6MjAlO1xyXG4gIGJvcmRlci1yYWRpdXM6MjBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xyXG59XHJcbiAucXVvdGVzIHtcclxuICB3aWR0aDogODB2dztcclxuICBwYWRkaW5nLXRvcDo0MHB4O1xyXG4gIG1pbi1oZWlnaHQ6IDMwMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICB6LWluZGV4OiAyO1xyXG59XHJcblxyXG5oMXtcclxuICAgIGNvbG9yOmdyZXk7XHJcbiAgICBmb250LXdlaWdodDpib2xkO1xyXG4gfVxyXG5cclxuXHJcblxyXG5ocntcclxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICB3aWR0aDo2MCU7XHJcblxyXG59XHJcbiAucXVvdGVzIC5ib3gge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogMjV2dztcclxuICBoZWlnaHQ6IDIwMHB4O1xyXG4gIG1pbi1oZWlnaHQ6IDIwMHB4O1xyXG4gIGJhY2tncm91bmQgOiB3aGl0ZTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW47XHJcbiAgei1pbmRleDogMjtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIG9wYWNpdHk6MC44O1xyXG4gIHBhZGRpbmc6MjVweDtcclxuICBib3JkZXItcmFkaXVzOjMwcHg7XHJcbiAgYm94LXNoYWRvdzogLTEwcHggMjVweCA1MHB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcclxufVxyXG4gLnF1b3RlcyAuYm94OjpiZWZvcmUge1xyXG4gXHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogLTIwcHg7XHJcbiAgbGVmdDogNXB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMjAwcHg7XHJcbiAgZm9udC1zaXplOiAxMjBweDtcclxuICBvcGFjaXR5OiAwLjk7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbn1cclxuIC5xdW90ZXMgLmJveDo6YWZ0ZXIge1xyXG4gXHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvdHRvbTogLTEwJTtcclxuICByaWdodDogNSU7XHJcbiAgZm9udC1zaXplOiAxMjBweDtcclxuICBvcGFjaXR5OiAwLjI7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgZmlsdGVyOiBpbnZlcnQoMSk7XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbn1cclxuIC5xdW90ZXMgLmJveCBoMntcclxuIFxyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxufVxyXG4gLnF1b3RlcyAuYm94IGgzIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiBcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxuICBib3R0b206IDEwJTtcclxuICByaWdodDogMTAlO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG4gLnF1b3RlcyAuYm94OmhvdmVyIHtcclxuICBjb2xvcjogI2YyZjJmMjtcclxuICBib3gtc2hhZG93OiAyMHB4IDUwcHggMTAwcHggcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG59XHJcbiAucXVvdGVzIC5iZyB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgb3BhY2l0eTogMDtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluO1xyXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogNTAwcHg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG4gLnF1b3RlcyAuYm94LmJveDE6aG92ZXIsXHJcbi5xdW90ZXMgLmJveC5ib3gxOmhvdmVyfi5iZyB7XHJcbiAgb3BhY2l0eTogMTtcclxuICBiYWNrZ3JvdW5kOiAjZTJhOWU1O1xyXG5iYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCgtNDVkZWcsICNlMmE5ZTUgMTUlLCAjMmI5NGU1IDEwMCUpO1xyXG5iYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCgtNDVkZWcsICNlMmE5ZTUgMTUlLCMyYjk0ZTUgMTAwJSk7XHJcbmJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNlMmE5ZTUgMTUlLCMyYjk0ZTUgMTAwJSk7XHJcbmZpbHRlcjogcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KCBzdGFydENvbG9yc3RyPScjZTJhOWU1JywgZW5kQ29sb3JzdHI9JyMyYjk0ZTUnLEdyYWRpZW50VHlwZT0xICk7XHJcbn1cclxuIC5xdW90ZXMgLmJveC5ib3gyOmhvdmVyLFxyXG4ucXVvdGVzIC5ib3guYm94Mjpob3Zlcn4uYmcge1xyXG4gIG9wYWNpdHk6IDE7XHJcbiAgYmFja2dyb3VuZDogIzYzMmM2NTtcclxuYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQoLTQ1ZGVnLCAjNjMyYzY1IDE1JSwgIzU2YTVlMiAxMDAlKTtcclxuYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoLTQ1ZGVnLCAjNjMyYzY1IDE1JSwjNTZhNWUyIDEwMCUpO1xyXG5iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjNjMyYzY1IDE1JSwjNTZhNWUyIDEwMCUpO1xyXG5maWx0ZXI6IHByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5ncmFkaWVudCggc3RhcnRDb2xvcnN0cj0nIzYzMmM2NScsIGVuZENvbG9yc3RyPScjNTZhNWUyJyxHcmFkaWVudFR5cGU9MSApO1xyXG59XHJcbiAucXVvdGVzIC5ib3guYm94Mzpob3ZlcixcclxuLnF1b3RlcyAuYm94LmJveDM6aG92ZXJ+LmJnIHtcclxuICBvcGFjaXR5OiAxO1xyXG4gIGJhY2tncm91bmQ6ICM0YjM4NGM7XHJcbmJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KC00NWRlZywgIzRiMzg0YyAxNSUsICNkYTVkZTIgMTAwJSk7XHJcbmJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KC00NWRlZywgIzRiMzg0YyAxNSUsI2RhNWRlMiAxMDAlKTtcclxuYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzRiMzg0YyAxNSUsI2RhNWRlMiAxMDAlKTtcclxuZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoIHN0YXJ0Q29sb3JzdHI9JyM0YjM4NGMnLCBlbmRDb2xvcnN0cj0nI2RhNWRlMicsR3JhZGllbnRUeXBlPTEgKTtcclxufVxyXG4gYTpob3ZlclxyXG57XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lIDtcclxufVxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-projects',
          templateUrl: './projects.component.html',
          styleUrls: ['./projects.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/skills/skills.component.ts":
  /*!********************************************!*\
    !*** ./src/app/skills/skills.component.ts ***!
    \********************************************/

  /*! exports provided: SkillsComponent */

  /***/
  function srcAppSkillsSkillsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SkillsComponent", function () {
      return SkillsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var SkillsComponent = /*#__PURE__*/function () {
      function SkillsComponent() {
        _classCallCheck(this, SkillsComponent);
      }

      _createClass(SkillsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SkillsComponent;
    }();

    SkillsComponent.ɵfac = function SkillsComponent_Factory(t) {
      return new (t || SkillsComponent)();
    };

    SkillsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SkillsComponent,
      selectors: [["app-skills"]],
      decls: 43,
      vars: 0,
      consts: [["id", "skills", 1, "container"], [1, "layer"], [1, "row"], [1, "col-xs-4"]],
      template: function SkillsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Skills");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "HTML/CSS");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "NodeJS");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Bootstrap");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Javascript");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Kotlin");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Database");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Algorithm");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "jQuery");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "JUnit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "MySQL");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Discrete Structures");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Java");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "PHP");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Angular");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "MongoDB");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".container[_ngcontent-%COMP%]\r\n{\r\n    background-image: url(\"https://insights.dice.com/wp-content/uploads/2019/03/shutterstock_719504626.jpg\");\r\n    background-repeat: no-repeat;\r\n    background-attachment: fixed;\r\n    opacity:0.8;\r\n    background-size: cover;\r\n    position: relative;\r\n    width:100%;\r\n    height:700px;\r\n    padding-top:80px;\r\n    \r\n}\r\n\r\nli[_ngcontent-%COMP%]\r\n{\r\n    color: black;\r\n    font-weight: bold;;\r\n    font-size:20px;\r\n    padding: 10px 0;\r\n    margin-bottom:40px;\r\n    margin-right:50px;\r\n    border-radius:50px;\r\n    background-color:white;\r\n    text-align:center;\r\n    opacity:1;\r\n    \r\n}\r\n\r\n.box[_ngcontent-%COMP%]\r\n{\r\n    opacity:1;\r\n}\r\n\r\nhr[_ngcontent-%COMP%]{\r\n    border: 1px solid grey;\r\n}\r\n\r\nh1[_ngcontent-%COMP%]{\r\n    text-align:center;\r\n    padding-top: 20px;\r\n    font-size:50px;\r\n}\r\n\r\n.layer[_ngcontent-%COMP%]\r\n{\r\n    background-color:black;\r\n    color:white;\r\n    opacity:0.6;\r\n    margin:auto;\r\n    width: 70%;\r\n    height: 90%;\r\n    border-radius: 5%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2tpbGxzL3NraWxscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUE7O0lBRUksd0dBQXdHO0lBQ3hHLDRCQUE0QjtJQUM1Qiw0QkFBNEI7SUFDNUIsV0FBVztJQUNYLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFlBQVk7SUFDWixnQkFBZ0I7O0FBRXBCOztBQUVBOztJQUVJLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsY0FBYztJQUNkLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixzQkFBc0I7SUFDdEIsaUJBQWlCO0lBQ2pCLFNBQVM7O0FBRWI7O0FBRUE7O0lBRUksU0FBUztBQUNiOztBQUdBO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixjQUFjO0FBQ2xCOztBQUVBOztJQUVJLHNCQUFzQjtJQUN0QixXQUFXO0lBQ1gsV0FBVztJQUNYLFdBQVc7SUFDWCxVQUFVO0lBQ1YsV0FBVztJQUNYLGlCQUFpQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL3NraWxscy9za2lsbHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuLmNvbnRhaW5lclxyXG57XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJodHRwczovL2luc2lnaHRzLmRpY2UuY29tL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE5LzAzL3NodXR0ZXJzdG9ja183MTk1MDQ2MjYuanBnXCIpO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XHJcbiAgICBvcGFjaXR5OjAuODtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgaGVpZ2h0OjcwMHB4O1xyXG4gICAgcGFkZGluZy10b3A6ODBweDtcclxuICAgIFxyXG59XHJcblxyXG5saVxyXG57XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDs7XHJcbiAgICBmb250LXNpemU6MjBweDtcclxuICAgIHBhZGRpbmc6IDEwcHggMDtcclxuICAgIG1hcmdpbi1ib3R0b206NDBweDtcclxuICAgIG1hcmdpbi1yaWdodDo1MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czo1MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcclxuICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gICAgb3BhY2l0eToxO1xyXG4gICAgXHJcbn1cclxuXHJcbi5ib3hcclxue1xyXG4gICAgb3BhY2l0eToxO1xyXG59XHJcblxyXG5cclxuaHJ7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmV5O1xyXG59XHJcblxyXG5oMXtcclxuICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gICAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgICBmb250LXNpemU6NTBweDtcclxufVxyXG5cclxuLmxheWVyXHJcbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6YmxhY2s7XHJcbiAgICBjb2xvcjp3aGl0ZTtcclxuICAgIG9wYWNpdHk6MC42O1xyXG4gICAgbWFyZ2luOmF1dG87XHJcbiAgICB3aWR0aDogNzAlO1xyXG4gICAgaGVpZ2h0OiA5MCU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1JTtcclxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SkillsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-skills',
          templateUrl: './skills.component.html',
          styleUrls: ['./skills.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/himani/Desktop/HP Backup/Desktop/Nodejs/portfolio/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map