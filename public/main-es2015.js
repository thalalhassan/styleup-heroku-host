(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/additem/additem.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/additem/additem.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Reactive Form -->\n<hr>\n<h1 class=\"text-center\" id=\"addItem\">{{add_edit}} Item</h1>\n<hr>\n<div class=\"card m-3\" >\n        <h5 class=\"card-header\">{{add_edit}} Item</h5>\n        <div class=\"card-body\">\n            <form [formGroup]=\"addItem\" (ngSubmit)=\"onSubmit()\">\n                <div class=\"form-row\">\n                    <div class=\"form-group col-6\">\n                        <label>Item Code</label>\n                        <input type=\"text\" formControlName=\"itemCode\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.itemCode.errors }\" />\n                        <div *ngIf=\"submitted && f.itemCode.errors\" class=\"invalid-feedback\">\n                            <div *ngIf=\"f.itemCode.errors.required\">Item Code is required</div>\n                        </div>\n                    </div>\n                    <div class=\"form-group col-6\">\n                            <label>Item Brand</label>\n                            <input type=\"text\" formControlName=\"itemBrand\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.itemBrand.errors }\" />\n                            <div *ngIf=\"submitted && f.itemBrand.errors\" class=\"invalid-feedback\">\n                                <div *ngIf=\"f.itemBrand.errors.required\">Item Brand is required</div>\n                                <div *ngIf=\"f.itemBrand.errors.pattern\">Item Brand Should be in Alphabet</div>\n                            </div>\n                    </div>\n\n                    <div class=\"form-group col-6\">\n                        <label>Item Gender</label>\n                        <select formControlName=\"itemGender\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.itemGender.errors }\" >\n                            <option value=\"men\">Mens Clothing</option>\n                            <option value=\"women\">Womens Clothing</option>\n                            <option value=\"kids\">Kids Clothing</option>\n                        </select>\n                         <div *ngIf=\"submitted && f.itemGender.errors\" class=\"invalid-feedback\">\n                            <div *ngIf=\"f.itemGender.errors.required\">Item Gender is required</div>\n                        </div>\n                    </div>\n                    \n                    <div class=\"form-group col-6\">\n                        <label>Item Style</label>\n                        <select formControlName=\"itemStyle\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.itemStyle.errors }\">\n                                <option value=\"shirt\">Shirt</option>\n                                <option value=\"tshirt\">T-Shirt</option>\n                                <option value=\"kurtha\">Kurtha</option>\n                        </select>\n                         <div *ngIf=\"submitted && f.itemStyle.errors\" class=\"invalid-feedback\">\n                            <div *ngIf=\"f.itemStyle.errors.required\">Item Style is required</div>\n                        </div>\n                    </div>\n                    <div class=\"form-group col-6\">\n                        <label>Item Slevee</label>\n                        <select formControlName=\"itemSleeve\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.itemSleeve.errors }\">\n                                <option value=\"fsleeve\">Full Sleeve</option>\n                                <option value=\"ssleeve\">Short Sleeve</option>\n                        </select>\n                        <div *ngIf=\"submitted && f.itemSleeve.errors\" class=\"invalid-feedback\">\n                                <div *ngIf=\"f.itemSleeve.errors.required\">Item Sleeve is required</div>\n                        </div>\n                    </div>\n                    <div class=\"form-group col-6\">\n                        <label>Item Colour</label>\n                        <input type=\"text\" formControlName=\"itemColour\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.itemColour.errors }\">\n                        <div *ngIf=\"submitted && f.itemColour.errors\" class=\"invalid-feedback\">\n                                <div *ngIf=\"f.itemColour.errors.required\">Item Colour is required</div>\n                                <div *ngIf=\"f.itemColour.errors.pattern\">Item Colour Should be in Alphabet</div>\n\n                        </div>\n                    </div>\n\n                    <div class=\"form-group col\"> Item Quantity <span class=\"text-muted\">(Please enter the Quantity of items available for each size)</span></div>\n\n                    <div formGroupName=\"itemSize\" class=\"form-row\" style=\"width:100%;\">\n                            <div class=\"form-group col-3\">\n                                Size S :<input type=\"number\" formControlName=\"s\"  class=\"form-control\" min=\"0\" max=\"10\"  [ngClass]=\"{ 'is-invalid': submitted && f2.s.errors }\" />\n                                <div *ngIf=\"submitted && f2.s.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f2.s.errors.required\">Size is required</div>\n                                    <div *ngIf=\"f2.s.errors.required\">Size Range [0-20]</div>\n                                </div>\n                            </div>\n                            <div class=\"form-group col-3\">\n                                Size M :<input type=\"number\" formControlName=\"m\"  class=\"form-control\"  min=\"0\" max=\"10\"[ngClass]=\"{ 'is-invalid': submitted && f2.m.errors }\" />\n                                <div *ngIf=\"submitted && f2.m.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f2.m.errors.required\">Size is required</div>\n                                    <div *ngIf=\"f2.m.errors.required\">Size Range [0-20]</div>\n                                </div>\n                            </div>\n                            <div class=\"form-group col-3 \">\n                                Size L :<input type=\"number\" formControlName=\"l\" class=\"form-control\"   min=\"0\" max=\"10\"[ngClass]=\"{ 'is-invalid': submitted && f2.l.errors }\" />\n                                <div *ngIf=\"submitted && f2.l.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f2.l.errors.required\">Size is required</div>\n                                    <div *ngIf=\"f2.l.errors.required\">Size Range [0-20]</div>\n                                </div>\n                            </div>\n                            <div class=\"form-group col-3\">\n                                Size XL :<input type=\"number\" formControlName=\"xl\" class=\"form-control\"   min=\"0\" max=\"10\"[ngClass]=\"{ 'is-invalid': submitted && f2.xl.errors }\" />\n                                <div *ngIf=\"submitted && f2.xl.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f2.xl.errors.required\">Size is required</div>\n                                    <div *ngIf=\"f2.xl.errors.required\">Size Range [0-20]</div>\n                                </div>\n                            </div>\n                                                       \n                    </div>\n\n                    <div class=\"form-group col-6\">\n                            <label>Item Price</label>\n                            <!-- <input type=\"number\" min=\"0.00\" max=\"10000.00\" step=\"0.01\" /> -->\n\n                            <input type=\"text\" formControlName=\"itemPrice\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.itemPrice.errors }\" />\n                            <div *ngIf=\"submitted && f.itemPrice.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.itemPrice.errors.required\">Item Price is required</div>\n                                    <div *ngIf=\"f2.m.errors.required\">Item Price Should be numbers</div>\n                                    <div *ngIf=\"f2.m.errors.required\">Price Range [1-50000]</div>\n                            </div>\n                    </div>\n                    <div class=\"form-group col-6\">\n                            <label>Item Image Url</label>\n                            <input type=\"text\" formControlName=\"itemImage\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.itemImage.errors }\" />\n                            <div *ngIf=\"submitted && f.itemImage.errors\" class=\"invalid-feedback\">\n                                <div *ngIf=\"f.itemImage.errors.required\">Item Image is required</div>\n                            </div>\n                    </div>\n                </div>\n                \n                <!-- <div class=\"form-group form-check\">\n                    <input type=\"checkbox\" formControlName=\"acceptTerms\" id=\"acceptTerms\" class=\"form-check-input\" [ngClass]=\"{ 'is-invalid': submitted && f.acceptTerms.errors }\" />\n                    <label for=\"acceptTerms\" class=\"form-check-label\">Accept Terms & Conditions</label>\n                    <div *ngIf=\"submitted && f.acceptTerms.errors\" class=\"invalid-feedback\">Accept Ts & Cs is required</div>\n                </div> -->\n                <div class=\"text-center\">\n                    <button class=\"btn btn-primary mr-1\" >{{add_edit}} Item</button>\n                    <button class=\"btn btn-secondary\" type=\"reset\" (click)=\"onReset()\">Cancel</button>\n                </div>\n            </form>\n        </div>\n    </div>\n\n<section id=\"products\">\n    <hr>\n    <h1 class=\"text-center\">Your Products</h1>\n    <hr>\n    <input class=\"form-control mx-auto\" style=\"width:50%\"   placeholder=\"Search for your product\" type=\"search\" [(ngModel)]=\"item\">\n    <div class=\"card m-3\">\n        <div class=\"row\">\n            <div class=\"col col-md-3 col-lg-2 \" style=\"min-width: 19rem;\" *ngFor=\"let item of items | filter:item\">\n                <div class=\"card-body\" >\n                    <img src=\"{{item.itemImage}}\" height=\"300px\" class=\"card-img-top\" alt=\"...\">\n                    <div class=\"card-body\">\n                    <h5 class=\"card-title\">{{item.itemBrand}}</h5>\n                    <p class=\"card-text m-1\">{{item.itemGender}}'s {{item.itemStyle}}</p>\n                    <p class=\"card-text m-1\">Rs.{{item.itemPrice}}</p>\n                    <button class=\"btn btn-primary mr-1\" (click)=\"onEdit(item)\">Edit</button>\n                    <button class=\"btn btn-primary\" (click)=\"onDelete(item._id)\">Delete</button>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>\n\n<!-- Since you didn't really provide a StackBlitz and I'm not having the time to create a whole Form Stackblitz for you, here's what I suggest you do:\n\nIn your CreateFormComponent, when in the ngOnInit(), initialize a ReactiveForm, either using a FormBuilder, or by manually creating one using FormGroup and FormControls.\n\nAlso inject ActivatedRoute in this component and subscribe to activatedRouterInstance's params BehaviorSubject. If there's any id coming in from there, get the details of the item by that id and populate the form that you creted by calling setValue or patchValue on it.\n\nIn case of Create, since there won't be any id in the params, the user will only see an empty form. But in case of edit, since the value of the form would be achieved, the user will see the form filled with the achieved data.\n\nHope that makes some sense and helps you out. -->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"card m-5 p-5 text-center border-0\">\n        <h5  >\n            <img class=\"mb-4\" src=\"https://image.winudf.com/v2/image/Y29tLm9iYWFzZW1hLnN0eWxldXBfaWNvbl8wX2I2ODQ3Yjgw/icon.png?w=170&fakeurl=1\" alt=\"\" width=\"72\" height=\"72\"><br>\n            SignIn <br> \n        </h5>\n        <div *ngIf=\"errorMessage\" class=\"alert alert-danger\" > Error in SignIn Details</div>    \n        <div class=\"card-body\">\n            <form name=\"form\" (ngSubmit)=\"f.form.valid && onSubmit()\" #f=\"ngForm\"  > <!-- [mustMatch]=\"['password', 'confirmPassword']\" novalidate-->\n                    <div class=\"form-group \">\n                        <input type=\"text\" name=\"userName\" placeholder=\"username\" class=\"form-control\" [(ngModel)]=\"admin.adminName\" #adminName=\"ngModel\" [ngClass]=\"{ 'is-invalid': f.submitted && adminName.invalid }\" required>\n                        <div *ngIf=\"f.submitted && adminName.invalid\" class=\"invalid-feedback\">\n                            <div *ngIf=\"adminName.errors.required\">Admin Name Required</div>\n                        </div>\n                    </div>\n                    <div class=\"form-group\">\n                        <input type=\"password\" name=\"password\" placeholder=\"password\" class=\"form-control \" [(ngModel)]=\"admin.password\" #password=\"ngModel\" [ngClass]=\"{ 'is-invalid': f.submitted && password.invalid }\" required minlength=\"6\">\n                        <div *ngIf=\"f.submitted && password.invalid\" class=\"invalid-feedback\">\n                            <div *ngIf=\"password.errors.required\">Password is required</div>\n                            <div *ngIf=\"password.errors.minlength\">Password must be at least 6 characters</div>\n                        </div>\n                    </div>\n                <div class=\"text-center\">\n                    <button class=\"btn btn-primary mr-1\">SignIn</button>\n                    <button class=\"btn btn-secondary\" type=\"reset\">Cancel</button>\n                </div>\n                <p class=\"mt-2 mb-5 text-muted\">Not Registered <a routerLink=\"/signup\">SignUp</a></p>\n              \n    \n            </form>\n        </div>\n    </div>\n    \n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\n<router-outlet></router-outlet>\n<app-footer></app-footer>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<footer class=\"page-footer font-small unique-color-dark\">\n        <div class=\"container socialmedia\">\n                <div class=\"row py-3 align-items-center\">\n                    <div class=\"col-md-12 col-lg-12 \">\n                          <a class=\"fb-ic\" routerLink=\"\">\n                            <i class=\"fab fa-facebook-f white-text mr-4\"> </i>\n                          </a>\n                          <a class=\"tw-ic\" routerLink=\"\">\n                            <i class=\"fab fa-twitter white-text mr-4\"> </i>\n                          </a>\n                          <a class=\"gplus-ic\" routerLink=\"\">\n                            <i class=\"fab fa-google-plus-g white-text mr-4\"> </i>\n                          </a>\n                          <a class=\"li-ic\" routerLink=\"\">\n                            <i class=\"fab fa-linkedin-in white-text mr-4\"> </i>\n                          </a>\n                          <a class=\"ins-ic\" routerLink=\"\">\n                            <i class=\"fab fa-instagram white-text\"> </i>\n                          </a>     \n                    </div>                     \n            </div>             \n        </div>\n<hr class=\"m-0 p-0\">\n        <div class=\"container text-left text-md-left pt-2\">    \n          <div class=\"row mt-3\">\n            <div class=\"col-md-3 col-lg-4 col-xl-3 mx-auto \">\n              <h6 class=\"text-uppercase font-weight-bold\">StyleUp</h6>\n              <hr class=\"deep-purple accent-2 mt-0 d-inline-block mx-auto\" style=\"width: 70px;\">\n              <p>We offer you the best of Fashion products in the World Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo ut quisquam maiores eius ipsa sunt eos sit!</p>\n            </div>\n\n            <div class=\"col-md-2 col-lg-2 col-xl-2 mx-auto \">\n              <h6 class=\"text-uppercase font-weight-bold\">Products</h6>\n              <hr class=\"deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto\" style=\"width: 70px;\">\n              <p>\n                <a routerLink=\"/shop/men\">Mens Clothig</a>\n              </p>\n              <p>\n                <a routerLink=\"/shop/women\">Womens Clothing</a>\n              </p>\n              <p>\n                <a routerLink=\"/shop/kids\">Kids Cloathing</a>\n              </p>  \n            </div>\n            \n            <div class=\"col-md-3 col-lg-2 col-xl-2 mx-auto \">\n              <h6 class=\"text-uppercase font-weight-bold\">Help Desk</h6>\n              <hr class=\"deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto\" style=\"width: 70px;\">\n              <p>\n                <a routerLink=\"/\">Your Account</a>\n              </p>\n              <p>\n                <a routerLink=\"/\">Become an Affiliate</a>\n              </p>\n              <p>\n                <a routerLink=\"/\">Help</a>\n              </p>\n            </div>\n            <div class=\"col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0\">\n              <h6 class=\"text-uppercase font-weight-bold\">Contact</h6>\n              <hr class=\"deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto\" style=\"width: 70px;\">\n              <p>\n                <i class=\"fas fa-home mr-3\"></i> New York, NY 10012, US</p>\n              <p>\n                <i class=\"fas fa-envelope mr-3\"></i> info@styleup.com</p>\n              <p>\n                <i class=\"fas fa-phone mr-3\"></i> + 01 234 567 88</p>\n            </div>\n          </div>      \n        </div>\n        <a routerLink=\"/admin\" class=\"p-\">© StyleUp Admin</a>\n</footer>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\" navbar-custom navbar navbar-expand-lg navbar-light sticky-top\" *ngIf=\"!adminIn\">\n        <a class=\"navbar-brand\" routerLink=\"/\">StyleUp</a>\n        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n          <span class=\"navbar-toggler-icon\"></span>\n        </button>\n      \n        <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n            <ul class=\"navbar-nav mr-auto\">\n              <li class=\"nav-item \">\n                <a class=\"nav-link\"  routerLink=\"/shop/men\">MEN</a>\n              </li>\n              <li class=\"nav-item\">\n                <a class=\"nav-link\"  routerLink=\"/shop/women\">WOMEN</a>\n              </li>\n              <li class=\"nav-item\">\n                <a class=\"nav-link\"  routerLink=\"/shop/kids\">KIDS</a>\n              </li>\n            </ul>\n\n            <ul class=\"navbar-nav\">\n                <li class=\"nav-item dropdown\" *ngIf=\"!userIn\">\n                    <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\" >\n                    <i class=\"far fa-user pl-3\" ></i><br> Proile</a>\n                    <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\" >\n                        <a class=\"dropdown-item\" routerLink=\"/signin\">SignIn</a>\n                        <a class=\"dropdown-item\" routerLink=\"/signup\">SignUp</a>  \n                    </div>\n                </li>\n                <li class=\"nav-item dropdown\" *ngIf=\"userIn\">\n                    <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\" >\n                    <i class=\"far fa-user pl-3\" ></i><br> {{userName}}</a>\n                    <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\" >\n                        <p class=\"dropdown-item\"> Hi {{userName}}</p>\n                        <a class=\"dropdown-item\" routerLink=\"\">Profile</a>  \n                        <a class=\"dropdown-item\" routerLink=\"\" (click)=\"logOut()\">LogOut</a>\n\n                    </div>\n                </li>\n                <li class=\"nav-item\">\n                    <a class=\"nav-link\" routerLink=\"/shopcart\" ><i class=\"fas fa-cart-plus pl-2\"></i>\n                      <br> Cart\n                      <span *ngIf=\"cartLength>0\" class='badge badge-warning' id='lblCartCount'> {{cartLength}}</span>\n                    </a>\n                </li>\n             </ul>\n\n        </div>\n</nav>\n\n\n<!-- Admin Header -->\n<nav class=\" navbar-custom navbar navbar-expand-lg sticky-top\" *ngIf=\"adminIn\" style=\"background-color: rgb(205, 223, 217)\">\n    <a class=\"navbar-brand\" routerLink=\"/additem\">StyleUp Admin Dashboard</a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n      <ul class=\"navbar-nav ml-auto\">\n          <li class=\"nav-item dropdown\">\n              <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\" >\n              <i class=\"far fa-user pl-3\" ></i><br> Proile</a>\n              <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\" >\n                  <p>Hi Admin</p>\n                  <a class=\"dropdown-item\" routerLink=\"\">Profile</a>  \n                  <a class=\"dropdown-item\" routerLink=\"\" (click)=\"adminlogOut()\">LogOut</a>\n\n              </div>\n          </li>      \n      </ul>\n    </div>\n</nav>\n\n  \n\n\n\n\n\n\n<!-- <div class=\"input-group mr-2  \" style=\"width:300px;\">\n            <form action=\"\" class=\"form-inline\">\n              <input class=\"form-control border-right-0\" type=\"search \" placeholder=\"search for brand,gender,style\" id=\"example-search-input\">\n              <span class=\"input-group-append\">\n                <a href=\"\" class=\"input-group-text bg-white border-left-0\" ><span ><i class=\"fa fa-search\" ></i></span></a>\n              </span>\n            </form>\n          </div> -->\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div id=\"demo\" class=\"carousel slide\" data-ride=\"carousel\">\n    <ul class=\"carousel-indicators\">\n      <li data-target=\"#demo\" data-slide-to=\"0\" class=\"active\"></li>\n      <li data-target=\"#demo\" data-slide-to=\"1\"></li>\n      <li data-target=\"#demo\" data-slide-to=\"2\"></li>\n    </ul>\n    <div class=\"carousel-inner\">\n      <div class=\"carousel-item active\">\n        <img src=\"https://social.fbbonline.in/images/home_banner.jpg?version=2.2.11&subv=1\" alt=\"\" class=\"d-block w-100\" height=\"500px\"  height=\"500\">\n        <div class=\"carousel-caption\">\n          <h3>sTyleUp</h3>\n          <p>The Fashion world For You</p>\n        </div>   \n      </div>\n      <div class=\"carousel-item\">\n          <img src=\"https://www.reliancetrends.com/medias/sys_master/images/images/hb6/h11/9246268850206/RTDC-Trends.Ajio-Banner-Desktop-CTA.jpg\" class=\"d-block w-100\" height=\"500px\" alt=\"hello\">\n          <div class=\"carousel-caption\">\n          <h3>sTyleUp</h3>\n          <p>The Fashion world For You</p>\n        </div>   \n      </div>\n      <div class=\"carousel-item\">\n          <img src=\"https://i.pinimg.com/originals/b8/ce/12/b8ce12af4e594bcb26b8f55b0377dad4.jpg\" class=\"d-block w-100\" height=\"500px\" alt=\"\">\n          <div class=\"carousel-caption\">\n          <h3>sTyleUp</h3>\n          <p>The Fashion world For You</p>\n        </div>   \n      </div>\n    </div>\n    <a class=\"carousel-control-prev\" href=\"#demo\" data-slide=\"prev\">\n      <span class=\"carousel-control-prev-icon\"></span>\n    </a>\n    <a class=\"carousel-control-next\" href=\"#demo\" data-slide=\"next\">\n      <span class=\"carousel-control-next-icon\"></span>\n    </a>\n</div>\n  \n\n<div class=\"container-fluid\">\n  <hr>\n  <h1>Featured Items</h1>\n  <hr>\n  <div class=\"row \">\n    <ng-template ngFor let-item [ngForOf]=\"items\" let-i=\"index\">\n            <div class=\"col-sm-6 col-md-3 col-lg-2\" style=\"min-width:18rem;\" *ngIf=\"i<6\">\n                <div class=\"card mb-2\">\n                  <a routerLink=\"/shopitem\" (click)=\"sharedService.viewItem(item)\">\n                  <img src=\"{{item.itemImage}}\" height=\"300px\" class=\"card-img-top\" alt=\"...\"></a>\n                  <div class=\"card-body\">\n                  <h5 class=\"card-title\">{{item.itemBrand}}</h5>\n                  <p class=\"card-text m-1\">{{item.itemGender}}'s {{item.itemStyle}}</p>\n                  <button class=\"btn btn-primary btn-block mt-3\" (click)=\"explore(item.itemGender)\">Explore</button>\n                  </div>\n              </div>\n           </div>\n    </ng-template>\n  </div>\n</div>\n\n<div class=\"container-fluid\">\n  <hr>\n  <h1>Trending Items</h1>\n  <hr>\n  <div class=\"row \">\n      <ng-template ngFor let-item [ngForOf]=\"items\" let-i=\"index\">\n          <div class=\"col-sm-6 col-md-3 col-lg-2\" style=\"min-width:18rem;\" *ngIf=\"i>5\">\n              <div class=\"card mb-2\" >\n                  <a (click)=\"interactionService.viewItem(item)\">\n                  <img src=\"{{item.itemImage}}\" height=\"300px\" class=\"card-img-top\" alt=\"...\"></a>\n                  <div class=\"card-body\">\n                    <h5 class=\"card-title\">{{item.itemBrand}}</h5>\n                    <p class=\"card-text m-1\"> {{item.itemGender}}'s {{item.itemStyle}}</p>\n                    <button class=\"btn btn-primary btn-block mt-3\" (click)=\"explore(item.itemGender)\">Explore</button>\n\n                  </div>\n              </div>\n           </div>\n    </ng-template>\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shop-item/shop-item.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shop-item/shop-item.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<hr><h1 class=\"text-center\">{{item.itemBrand}} {{item.itemGender}}'s {{item.itemStyle}}</h1><hr>\n<div class=\"container-fluid\">\n        <div class=\"col-sm-6 mx-auto \" >\n                <div class=\"card mb-2 mx-auto\">\n                    <img src=\"{{item.itemImage}}\"class=\"card-img-top\" alt=\"...\" >\n                \n                <div *ngIf=\"selectSize\"  class=\"float pl-3\">\n                    <ul class=\"select-size \">         \n                      <li>\n                        <input type=\"radio\" id=\"sizeS\" name=\"amount\" (change)=\"selectedSize('s',item)\"/>\n                        <label for=\"sizeS\">S</label>\n                      </li>\n                      <li>\n                        <input type=\"radio\" id=\"sizeM\" name=\"amount\" (change)=\"selectedSize('m',item)\" />\n                        <label for=\"sizeM\">M</label>\n                      </li>\n                      <li>\n                        <input type=\"radio\" id=\"sizeL\" name=\"amount\" (change)=\"selectedSize('l',item)\"/>\n                        <label for=\"sizeL\"> L </label>\n                      </li>\n                      <li>\n                        <input type=\"radio\" id=\"sizeXL\" name=\"amount\"(change)=\"selectedSize('xl',item)\" />\n                        <label for=\"sizeXL\">XL</label>\n                      </li>\n                    </ul>\n                    <button class=\"btn btn-primary mt-3 ml-3\" (click)=\"addToCart(item)\">{{mode}}</button>\n                    <button class=\"btn btn-secondary mt-3 ml-1\" (click)=\"cancel()\">Cancel</button>\n              </div> \n              <div *ngIf=\"!selectSize\" class=\"card-body\">\n                    <h5 class=\"card-title\">{{item.itemBrand}}</h5>\n                    <p class=\"card-text m-1 text-uppercase\">{{item.itemColour}} coloured {{item.itemGender}}'s {{item.itemStyle}}</p>\n                    <p class=\"card-text m-1\">Rs.{{item.itemPrice}}</p>\n                    <button class=\"btn btn-primary mr-1\" (click)=\"addToCart(item)\">Add to cart</button>\n                    <button class=\"btn btn-primary \" (click)=\"buyItem()\">Buy</button>\n                    </div>\n                </div>\n        </div>\n</div>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shop/shop.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shop/shop.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<hr><h1 class=\"text-center\">{{title}} Fashion</h1><hr>\n<div class=\"container-fluid\">\n  <div class=\"row\">\n    \n      <div class=\"col-sm-6 col-md-4 col-lg-2\" style=\"min-width:18rem;\" *ngFor=\"let item of items\">\n            <div class=\"card mb-2\" style=\"height:450px\" >\n                <a routerLink=\"\" (click)=\"sharedService.viewItem(item)\">\n                    <img src=\"{{item.itemImage}}\" height=\"300px\" class=\"card-img-top\" alt=\"...\"></a>\n                <div *ngIf=\"selectSize\"  class=\"float pl-3\">\n                    <ul class=\"select-size \">         \n                      <li>\n                        <input type=\"radio\" id=\"sizeS\" name=\"amount\" (change)=\"selectedSize('s',item)\"/>\n                        <label for=\"sizeS\">S</label>\n                      </li>\n                      <li>\n                        <input type=\"radio\" id=\"sizeM\" name=\"amount\" (change)=\"selectedSize('m',item)\" />\n                        <label for=\"sizeM\">M</label>\n                      </li>\n                      <li>\n                        <input type=\"radio\" id=\"sizeL\" name=\"amount\" (change)=\"selectedSize('l',item)\"/>\n                        <label for=\"sizeL\"> L </label>\n                      </li>\n                      <li>\n                        <input type=\"radio\" id=\"sizeXL\" name=\"amount\"(change)=\"selectedSize('xl',item)\" />\n                        <label for=\"sizeXL\">XL</label>\n                      </li>\n                    </ul>\n                    <button class=\"btn btn-primary mt-3 ml-3\" (click)=\"addToCart(item)\">{{mode}}</button>\n                    <button class=\"btn btn-secondary mt-3 ml-1\" (click)=\"cancel()\">Cancel</button>\n\n                </div> \n              <div *ngIf=\"!selectSize\" class=\"card-body\">\n              <h5 class=\"card-title\">{{item.itemBrand}}</h5>\n              <p class=\"card-text\">Rs.{{item.itemPrice}}</p>\n              <button class=\"btn btn-primary mr-1\" (click)=\"addToCart(item)\">Add to cart</button>\n              <button class=\"btn btn-primary \" (click)=\"buyItem()\">Buy</button>\n            </div>\n          </div>\n      </div>\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shopcart/shopcart.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shopcart/shopcart.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card\">\n    <div class=\"card-header\">\n     <h3 class=\"text-center\">My Cart</h3>\n    </div>\n    <div class=\"card-body\">\n      <div class=\"table-responsive\">\n        <table class=\"table\" *ngIf='items && cartLength'>\n          <thead>\n            <tr>\n              <th>Item</th>\n              <th>Size</th>\n              <th>Quantity</th>\n              <th>Price</th>\n              <th>Total</th>\n              <th>Action</th>\n\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor='let item of items'>\n              <td><a routerLink=\"/shopitem\" (click)=\"viewItem()\"><img [src]=\"item.itemImage\" [title]=\"item.itemName\" alt=\"\" height=\"200px\" width=\"150px\"></a></td>\n              <td class=\"mt-5 text-uppercase\">{{ item.itemSize}}</td>\n              <td>{{ item.quantity}}</td>\n              <td>{{ item.itemPrice | currency :'INR' : symbol :'2.2-2'}}</td>\n              <td>{{ item.itemPrice * item.quantity | currency :'INR' : symbol :'2.2-2'}}</td>\n              <td>\n                <input type=\"button\" class=\"btn btn-success \" (click)=\"checkOut(item)\" value=\"Buy\">\n                <input type=\"button\" class=\"btn btn-danger ml-1\" *ngIf=\"item.quantity>1\" (click)=\"removeCartItem(item)\" value=\"Remove One\">\n                <input type=\"button\" class=\"btn btn-danger ml-1\" *ngIf=\"item.quantity==1\" (click)=\"removeCartItem(item)\" value=\"Delete\">\n              </td>\n            </tr>\n          </tbody>\n        </table>\n        <div class=\"text-center my-5\" *ngIf='!cartLength'>\n          <h1 class=\"text-muted\"> OOPS! your cart is empty</h1>\n          <p class=\"text-muted\"> please add some items to your cart</p>\n        </div>\n      </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/signin/signin.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/signin/signin.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"container-fluid text-center \">\n    <h5  >\n        <img class=\"mb-4\" src=\"https://image.winudf.com/v2/image/Y29tLm9iYWFzZW1hLnN0eWxldXBfaWNvbl8wX2I2ODQ3Yjgw/icon.png?w=170&fakeurl=1\" alt=\"\" width=\"72\" height=\"72\" style=\"border-radius: 5px;\"><br>\n        SignIn <br> \n    </h5>\n    <div *ngIf=\"errorMessage\" class=\"alert alert-danger\" > Error in LogIn Details</div>\n    <div class=\"container-fluid mx-auto\">\n        <form name=\"form\" (ngSubmit)=\"f.form.valid && onSubmit()\" #f=\"ngForm\"  > <!-- [mustMatch]=\"['password', 'confirmPassword']\" novalidate-->\n                <div class=\"form-group \">\n                    <input type=\"text\" name=\"userName\" placeholder=\"username\" class=\"form-control\" [(ngModel)]=\"user.userName\" #userName=\"ngModel\" [ngClass]=\"{ 'is-invalid': f.submitted && userName.invalid }\" required>\n                    <div *ngIf=\"f.submitted && userName.invalid\" class=\"invalid-feedback\">\n                        <div *ngIf=\"userName.errors.required\">User Name is required</div>\n                    </div>\n                </div>\n                <div class=\"form-group\">\n                    <input type=\"password\" name=\"password\" placeholder=\"password\" class=\"form-control \" [(ngModel)]=\"user.password\" #password=\"ngModel\" [ngClass]=\"{ 'is-invalid': f.submitted && password.invalid }\" required minlength=\"6\">\n                    <div *ngIf=\"f.submitted && password.invalid\" class=\"invalid-feedback\">\n                        <div *ngIf=\"password.errors.required\">Password is required</div>\n                        <div *ngIf=\"password.errors.minlength\">Password must be at least 6 characters</div>\n                    </div>\n                </div>\n            <div class=\"text-center\">\n                <button class=\"btn btn-primary mr-1\">SignIn</button>\n                <button class=\"btn btn-secondary\" type=\"reset\">Cancel</button>\n            </div>\n            <p class=\"mt-2 mb-5 text-muted\">Not Registered <a routerLink=\"/signup\">SignUp</a></p>\n        </form>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/signup/signup.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/signup/signup.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid text-center\">\n        <h5>\n                <img class=\"mb-4\" src=\"https://image.winudf.com/v2/image/Y29tLm9iYWFzZW1hLnN0eWxldXBfaWNvbl8wX2I2ODQ3Yjgw/icon.png?w=170&fakeurl=1\" alt=\"\" width=\"72\" height=\"72\" style=\"border-radius: 5px;\"><br>\n                SignUp <br> \n        </h5>\n        <div *ngIf=\"errorMessage\" class=\"alert alert-danger\" > User Details already exist</div>\n        <div class=\"card-body\">\n            <form name=\"form\" (ngSubmit)=\"f.form.valid && onSubmit()\" #f=\"ngForm\" novalidate > \n                <div class=\"form-group\">\n                        <input type=\"text\" name=\"userName\" placeholder=\"Username\" class=\"form-control\" [(ngModel)]=\"user.userName\" #userName=\"ngModel\" [ngClass]=\"{ 'is-invalid': f.submitted && userName.invalid }\" required pattern=\"^[a-zA-Z_]{1,}[a-zA-Z_0-9]*$\">\n                        <div *ngIf=\"f.submitted && userName.invalid\" class=\"invalid-feedback\">\n                            <div *ngIf=\"userName.errors.pattern\">UserName not valid </div>\n                            <div *ngIf=\"userName.errors.required\">UserName is required</div>\n                        </div>\n                </div>\n                <div class=\"form-group \">\n                        <input type=\"text\" name=\"name\" placeholder=\"Name\" class=\"form-control\" [(ngModel)]=\"user.name\" #name=\"ngModel\" [ngClass]=\"{ 'is-invalid': f.submitted && name.invalid }\" required pattern=\"^[A-Za-z\\s]{1,}[\\.]{0,1}[A-Za-z\\s]{0,}$\">\n                        <div *ngIf=\"f.submitted && name.invalid\" class=\"invalid-feedback\">\n                            <div *ngIf=\"name.errors.required\">Name is required</div>\n                            <div *ngIf=\"name.errors.pattern\">Name not valid </div>\n                        </div>\n                </div>\n                <div class=\"form-group\">\n                    <input type=\"text\" name=\"email\"placeholder=\"Email\" class=\"form-control\" [(ngModel)]=\"user.email\" #email=\"ngModel\" [ngClass]=\"{ 'is-invalid': f.submitted && email.invalid }\" required email>\n                    <div *ngIf=\"f.submitted && email.invalid\" class=\"invalid-feedback\">\n                        <div *ngIf=\"email.errors.required\">Email is required</div>\n                        <div *ngIf=\"email.errors.email\">Email must be a valid email address</div>\n                    </div>\n                </div>\n                <div class=\"form-group\">\n                        <input type=\"tel\" name=\"mobile\" placeholder=\"Mobile\" class=\"form-control\" [(ngModel)]=\"user.mobile\" #mobile=\"ngModel\" [ngClass]=\"{ 'is-invalid': f.submitted && mobile.invalid }\" required pattern=\"^[6-9]\\d{9}$\">\n                        <div *ngIf=\"f.submitted && mobile.invalid\" class=\"invalid-feedback\">\n                            <div *ngIf=\"mobile.errors.required\">mobile is required</div>\n                            <div *ngIf=\"mobile.errors.pattern\">mobile no. not valid </div>\n                        </div>\n                    </div>\n                    <div class=\"form-group \">\n                        <input type=\"password\" name=\"password\" placeholder=\"Password\" class=\"form-control\" [(ngModel)]=\"user.password\" #password=\"ngModel\" [ngClass]=\"{ 'is-invalid': f.submitted && password.invalid }\" required minlength=\"6\">\n                        <div *ngIf=\"f.submitted && password.invalid\" class=\"invalid-feedback\">\n                            <div *ngIf=\"password.errors.required\">Password is required</div>\n                            <div *ngIf=\"password.errors.minlength\">Password must be at least 6 characters</div>\n                        </div>\n                    </div>\n                <div class=\"form-group form-check\">\n                    <input type=\"checkbox\" name=\"acceptTerms\" id=\"acceptTerms\" class=\"form-check-input\" [(ngModel)]=\"user.acceptTerms\" #acceptTerms=\"ngModel\" [ngClass]=\"{ 'is-invalid': f.submitted && acceptTerms.invalid }\" required>\n                    <label for=\"acceptTerms\" class=\"form-check-label\">Accept Terms & Conditions</label>\n                    <div *ngIf=\"f.submitted && acceptTerms.invalid\" class=\"invalid-feedback\">Accept Ts & Cs is required</div>\n                </div>\n                <div class=\"text-center\">\n                    <button class=\"btn btn-primary mr-1\">Register</button>\n                    <button class=\"btn btn-secondary\" type=\"reset\">Cancel</button>\n                </div>\n                <p class=\"mt-3 mb-5 text-muted\">Already Registered <a routerLink=\"/signin\">SignIn</a></p>\n            </form>\n        </div>\n    </div>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/additem/additem.component.css":
/*!***********************************************!*\
  !*** ./src/app/additem/additem.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".item-size input{\n    width:5rem;\n    margin-right: 8px;;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRkaXRlbS9hZGRpdGVtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0lBQ1YsaUJBQWlCO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvYWRkaXRlbS9hZGRpdGVtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaXRlbS1zaXplIGlucHV0e1xuICAgIHdpZHRoOjVyZW07XG4gICAgbWFyZ2luLXJpZ2h0OiA4cHg7O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/additem/additem.component.ts":
/*!**********************************************!*\
  !*** ./src/app/additem/additem.component.ts ***!
  \**********************************************/
/*! exports provided: AdditemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdditemComponent", function() { return AdditemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _server_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../server.service */ "./src/app/server.service.ts");
/* harmony import */ var _interaction_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../interaction.service */ "./src/app/interaction.service.ts");





let AdditemComponent = class AdditemComponent {
    // urlPattern= "/^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/"
    // menClothing =['Shirt','T-Shirt','Kurtha','Jeans','Trouser',];
    // womenClothing =['Shirt','T-Shirt','Saree','Jeans','Trouser',];
    constructor(formBuilder, serverService, interactionService) {
        this.formBuilder = formBuilder;
        this.serverService = serverService;
        this.interactionService = interactionService;
        this.submitted = false;
        this.itemUpdate = [];
        this.item_id = null;
        this.add_edit = "Add ";
        this.interactionService.isAdminLogIn.subscribe(value => {
            if (!value)
                this.interactionService.isAdminLogIn.next(true);
        });
    }
    ngOnInit() {
        this.serverService.getItems().subscribe(res => {
            console.log('getting items', res);
            this.items = res;
        });
        this.addItem = this.formBuilder.group({
            itemCode: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            itemBrand: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("[a-zA-Z ]*")]],
            itemGender: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            itemStyle: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            itemSleeve: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            itemColour: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("[a-zA-Z ]*")]],
            itemSize: this.formBuilder.group({
                s: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].max(20)]],
                m: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].max(20)]],
                l: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].max(20)]],
                xl: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].max(20)]],
            }),
            itemPrice: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("[0-9]+"), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].max(50000)]],
            itemImage: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
        });
    }
    get f() { return this.addItem.controls; }
    get f2() { return this.addItem['controls'].itemSize['controls']; }
    // get f2() { return this.addItem.controls['sizeItem']; }
    onSubmit() {
        this.submitted = true;
        // stop here if form is invalid
        if (this.addItem.invalid) {
            return;
        }
        else if (this.item_id == null) {
            // add item
            this.items = JSON.parse(JSON.stringify(this.addItem.value));
            this.serverService.addItem(this.items).subscribe((data) => {
                this.ngOnInit();
                document.getElementById("products").scrollIntoView();
                this.submitted = false;
            });
        }
        else if (this.item_id != null) {
            // update item
            this.itemUpdate = JSON.parse(JSON.stringify(this.addItem.value));
            this.serverService.editItem(this.item_id, this.itemUpdate).subscribe((data) => {
                this.ngOnInit();
                document.getElementById("products").scrollIntoView();
                this.submitted = false;
                this.add_edit = "Add ";
            });
        }
    }
    onReset() {
        this.submitted = false;
        this.addItem.reset;
        this.add_edit = "Add ";
    }
    onEdit(item) {
        this.item_id = item._id;
        this.add_edit = "Edit";
        this.addItem.patchValue(item);
        document.getElementById("addItem").scrollIntoView();
    }
    onDelete(id) {
        if (confirm('Do you want to Delete Item?') == true) {
            this.serverService.deleteItem(id).subscribe(res => {
                console.log(JSON.parse(JSON.stringify(res)).msg);
                this.ngOnInit();
            });
        }
    }
};
AdditemComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _server_service__WEBPACK_IMPORTED_MODULE_3__["ServerService"] },
    { type: _interaction_service__WEBPACK_IMPORTED_MODULE_4__["InteractionService"] }
];
AdditemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-additem',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./additem.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/additem/additem.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./additem.component.css */ "./src/app/additem/additem.component.css")).default]
    })
], AdditemComponent);



/***/ }),

/***/ "./src/app/admin.guard.ts":
/*!********************************!*\
  !*** ./src/app/admin.guard.ts ***!
  \********************************/
/*! exports provided: AdminGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminGuard", function() { return AdminGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared.service */ "./src/app/shared.service.ts");




let AdminGuard = class AdminGuard {
    constructor(sharedService, router) {
        this.sharedService = sharedService;
        this.router = router;
    }
    canActivate() {
        if (this.sharedService.signedIn().adminToken) {
            console.log('true');
            return true;
        }
        else {
            console.log('false');
            this.router.navigate(['/admin']);
            return false;
        }
    }
};
AdminGuard.ctorParameters = () => [
    { type: _shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AdminGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AdminGuard);



/***/ }),

/***/ "./src/app/admin/admin.component.css":
/*!*******************************************!*\
  !*** ./src/app/admin/admin.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("input,.alert{\n    width: 300px;\n    margin: auto;\n\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vYWRtaW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixZQUFZOztBQUVoQiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbnB1dCwuYWxlcnR7XG4gICAgd2lkdGg6IDMwMHB4O1xuICAgIG1hcmdpbjogYXV0bztcblxufSJdfQ== */");

/***/ }),

/***/ "./src/app/admin/admin.component.ts":
/*!******************************************!*\
  !*** ./src/app/admin/admin.component.ts ***!
  \******************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _server_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../server.service */ "./src/app/server.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _interaction_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../interaction.service */ "./src/app/interaction.service.ts");





let AdminComponent = class AdminComponent {
    constructor(serverService, router, interactionService) {
        this.serverService = serverService;
        this.router = router;
        this.interactionService = interactionService;
        this.submitted = false;
        this.errorMessage = false;
        this.admin = {
            adminName: 'admin',
            password: '12345678'
        };
    }
    ngOnInit() {
    }
    onSubmit() {
        this.submitted = true;
        this.serverService.admin(this.admin).subscribe(res => {
            localStorage.setItem('adminToken', res.token);
            this.interactionService.isAdminLogIn.next(true);
            this.interactionService.isUserLoggedIn.next(false);
            this.router.navigate(['/additem']);
        }, err => {
            this.errorMessage = true;
            console.log(err);
        });
        // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.model, null, 4));
    }
};
AdminComponent.ctorParameters = () => [
    { type: _server_service__WEBPACK_IMPORTED_MODULE_2__["ServerService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _interaction_service__WEBPACK_IMPORTED_MODULE_4__["InteractionService"] }
];
AdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-admin',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./admin.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./admin.component.css */ "./src/app/admin/admin.component.css")).default]
    })
], AdminComponent);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _shopcart_shopcart_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shopcart/shopcart.component */ "./src/app/shopcart/shopcart.component.ts");
/* harmony import */ var _shop_shop_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shop/shop.component */ "./src/app/shop/shop.component.ts");
/* harmony import */ var _additem_additem_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./additem/additem.component */ "./src/app/additem/additem.component.ts");
/* harmony import */ var _signin_signin_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./signin/signin.component */ "./src/app/signin/signin.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./auth.guard */ "./src/app/auth.guard.ts");
/* harmony import */ var _shop_item_shop_item_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shop-item/shop-item.component */ "./src/app/shop-item/shop-item.component.ts");
/* harmony import */ var _admin_guard__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./admin.guard */ "./src/app/admin.guard.ts");













const routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"] },
    { path: 'shop',
        children: [
            { path: 'men', component: _shop_shop_component__WEBPACK_IMPORTED_MODULE_6__["ShopComponent"], data: { gender: 'men' } },
            { path: 'women', component: _shop_shop_component__WEBPACK_IMPORTED_MODULE_6__["ShopComponent"], data: { gender: 'women' } },
            { path: 'kids', component: _shop_shop_component__WEBPACK_IMPORTED_MODULE_6__["ShopComponent"], data: { gender: 'kids' } },
        ] },
    { path: 'shopcart', canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]], component: _shopcart_shopcart_component__WEBPACK_IMPORTED_MODULE_5__["ShopcartComponent"] },
    { path: 'shopitem', component: _shop_item_shop_item_component__WEBPACK_IMPORTED_MODULE_11__["ShopItemComponent"], data: {} },
    { path: 'admin', component: _admin_admin_component__WEBPACK_IMPORTED_MODULE_3__["AdminComponent"] },
    { path: 'additem', canActivate: [_admin_guard__WEBPACK_IMPORTED_MODULE_12__["AdminGuard"]], component: _additem_additem_component__WEBPACK_IMPORTED_MODULE_7__["AdditemComponent"] },
    { path: 'signin', component: _signin_signin_component__WEBPACK_IMPORTED_MODULE_8__["SigninComponent"] },
    { path: 'signup', component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_9__["SignupComponent"] },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { onSameUrlNavigation: 'reload' })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'AngularFrontEnd';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-search-filter */ "./node_modules/ng2-search-filter/ng2-search-filter.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _shop_shop_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./shop/shop.component */ "./src/app/shop/shop.component.ts");
/* harmony import */ var _shopcart_shopcart_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./shopcart/shopcart.component */ "./src/app/shopcart/shopcart.component.ts");
/* harmony import */ var _signin_signin_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./signin/signin.component */ "./src/app/signin/signin.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _additem_additem_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./additem/additem.component */ "./src/app/additem/additem.component.ts");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./auth.guard */ "./src/app/auth.guard.ts");
/* harmony import */ var _server_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./server.service */ "./src/app/server.service.ts");
/* harmony import */ var _shop_item_shop_item_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./shop-item/shop-item.component */ "./src/app/shop-item/shop-item.component.ts");






//Components














let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
            _header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"],
            _admin_admin_component__WEBPACK_IMPORTED_MODULE_9__["AdminComponent"],
            _footer_footer_component__WEBPACK_IMPORTED_MODULE_10__["FooterComponent"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"],
            _shop_shop_component__WEBPACK_IMPORTED_MODULE_12__["ShopComponent"],
            _shopcart_shopcart_component__WEBPACK_IMPORTED_MODULE_13__["ShopcartComponent"],
            _signin_signin_component__WEBPACK_IMPORTED_MODULE_14__["SigninComponent"],
            _signup_signup_component__WEBPACK_IMPORTED_MODULE_15__["SignupComponent"],
            _additem_additem_component__WEBPACK_IMPORTED_MODULE_16__["AdditemComponent"],
            _shop_item_shop_item_component__WEBPACK_IMPORTED_MODULE_19__["ShopItemComponent"],
        ],
        imports: [
            ng2_search_filter__WEBPACK_IMPORTED_MODULE_5__["Ng2SearchPipeModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
        ],
        providers: [_auth_guard__WEBPACK_IMPORTED_MODULE_17__["AuthGuard"], _server_service__WEBPACK_IMPORTED_MODULE_18__["ServerService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/auth.guard.ts":
/*!*******************************!*\
  !*** ./src/app/auth.guard.ts ***!
  \*******************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared.service */ "./src/app/shared.service.ts");




let AuthGuard = class AuthGuard {
    constructor(sharedService, router) {
        this.sharedService = sharedService;
        this.router = router;
    }
    canActivate() {
        if (this.sharedService.signedIn().userToken) {
            console.log('true');
            return true;
        }
        else {
            console.log('false');
            this.router.navigate(['/signin']);
            return false;
        }
    }
};
AuthGuard.ctorParameters = () => [
    { type: _shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthGuard);



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("footer{\n    text-align: center;\n    background-color:rgb(246, 241, 241);\n    color: black;\n    position: relative;\n    bottom: 0;\n}\na{\n    text-decoration: none !important;\n    color:black;\n}\nsocialmedia{\n    margin:auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLG1DQUFtQztJQUNuQyxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFNBQVM7QUFDYjtBQUNBO0lBQ0ksZ0NBQWdDO0lBQ2hDLFdBQVc7QUFDZjtBQUNBO0lBQ0ksV0FBVztBQUNmIiwiZmlsZSI6InNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZm9vdGVye1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYigyNDYsIDI0MSwgMjQxKTtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJvdHRvbTogMDtcbn1cbmF7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6YmxhY2s7XG59XG5zb2NpYWxtZWRpYXtcbiAgICBtYXJnaW46YXV0bztcbn0iXX0= */");

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FooterComponent = class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
};
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")).default]
    })
], FooterComponent);



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("nav{\n    padding-left: 10%;\n    padding-right: 10%;\n}\n/* change the background color */\n.navbar-custom {\n    background-color: #ffffff;\n}\n/* change the brand and text color */\n.navbar-custom .navbar-brand,\n.navbar-custom .navbar-text {\n    color: rgba(17, 16, 16, 0.8);\n}\n/* change the link color */\n.navbar-custom .navbar-nav .nav-link {\n    color: rgba(0, 0, 0, 0.5);\n}\n/* change the color of active or hovered links */\n.navbar-custom .nav-item.active .nav-link,\n.navbar-custom .nav-item:focus .nav-link,\n.navbar-custom .nav-item:hover .nav-link {\n    color: rgba(6, 35, 42, 0.5);\n}\n.badge {\n  border-radius: 100%;\n}\n#lblCartCount {\n    background: #950707a8;\n    color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0QjtBQUNBLGdDQUFnQztBQUNoQztJQUNJLHlCQUF5QjtBQUM3QjtBQUNBLG9DQUFvQztBQUNwQzs7SUFFSSw0QkFBNEI7QUFDaEM7QUFDQSwwQkFBMEI7QUFDMUI7SUFDSSx5QkFBeUI7QUFDN0I7QUFDQSxnREFBZ0Q7QUFDaEQ7OztJQUdJLDJCQUEyQjtBQUMvQjtBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCO0FBQ0E7SUFDSSxxQkFBcUI7SUFDckIsV0FBVztBQUNmIiwiZmlsZSI6InNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibmF2e1xuICAgIHBhZGRpbmctbGVmdDogMTAlO1xuICAgIHBhZGRpbmctcmlnaHQ6IDEwJTtcbn1cbi8qIGNoYW5nZSB0aGUgYmFja2dyb3VuZCBjb2xvciAqL1xuLm5hdmJhci1jdXN0b20ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG59XG4vKiBjaGFuZ2UgdGhlIGJyYW5kIGFuZCB0ZXh0IGNvbG9yICovXG4ubmF2YmFyLWN1c3RvbSAubmF2YmFyLWJyYW5kLFxuLm5hdmJhci1jdXN0b20gLm5hdmJhci10ZXh0IHtcbiAgICBjb2xvcjogcmdiYSgxNywgMTYsIDE2LCAwLjgpO1xufVxuLyogY2hhbmdlIHRoZSBsaW5rIGNvbG9yICovXG4ubmF2YmFyLWN1c3RvbSAubmF2YmFyLW5hdiAubmF2LWxpbmsge1xuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG59XG4vKiBjaGFuZ2UgdGhlIGNvbG9yIG9mIGFjdGl2ZSBvciBob3ZlcmVkIGxpbmtzICovXG4ubmF2YmFyLWN1c3RvbSAubmF2LWl0ZW0uYWN0aXZlIC5uYXYtbGluayxcbi5uYXZiYXItY3VzdG9tIC5uYXYtaXRlbTpmb2N1cyAubmF2LWxpbmssXG4ubmF2YmFyLWN1c3RvbSAubmF2LWl0ZW06aG92ZXIgLm5hdi1saW5rIHtcbiAgICBjb2xvcjogcmdiYSg2LCAzNSwgNDIsIDAuNSk7XG59XG5cbi5iYWRnZSB7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG59XG4jbGJsQ2FydENvdW50IHtcbiAgICBiYWNrZ3JvdW5kOiAjOTUwNzA3YTg7XG4gICAgY29sb3I6ICNmZmY7XG59Il19 */");

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _interaction_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../interaction.service */ "./src/app/interaction.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let HeaderComponent = class HeaderComponent {
    constructor(router, interactionService) {
        this.router = router;
        this.interactionService = interactionService;
        this.interactionService.isUserLoggedIn.subscribe(value => {
            this.userIn = value;
            if (localStorage.getItem('userName')) {
                this.userIn = true;
            }
        });
        this.interactionService.isAdminLogIn.subscribe(value => {
            this.adminIn = value;
        });
        this.interactionService.cartLength.subscribe(value => {
            this.cartLength = value;
            if (value == 0) {
                if (localStorage.getItem('cartLength')) {
                    this.cartLength = parseInt(localStorage.getItem('cartLength'));
                }
            }
        });
        this.interactionService.userName.subscribe(value => {
            this.userName = value;
            if (localStorage.getItem('userName')) {
                this.userName = localStorage.getItem('userName');
            }
        });
    }
    ngOnInit() {
    }
    adminlogOut() {
        localStorage.clear();
        this.adminIn = false;
        this.interactionService.isAdminLogIn.next(false);
        this.router.navigate(['/admin']);
    }
    logOut() {
        localStorage.clear();
        this.userIn = false;
        this.interactionService.isUserLoggedIn.next(false);
        this.interactionService.cartLength.next(-1);
        this.router.navigate(['/']);
    }
};
HeaderComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _interaction_service__WEBPACK_IMPORTED_MODULE_2__["InteractionService"] }
];
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")).default]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _server_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../server.service */ "./src/app/server.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _interaction_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../interaction.service */ "./src/app/interaction.service.ts");
/* harmony import */ var _shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared.service */ "./src/app/shared.service.ts");






let HomeComponent = class HomeComponent {
    constructor(serverService, router, interactionService, sharedService) {
        this.serverService = serverService;
        this.router = router;
        this.interactionService = interactionService;
        this.sharedService = sharedService;
        this.items = [];
        this.interactionService.isAdminLogIn.subscribe(value => {
            if (value)
                this.interactionService.isAdminLogIn.next(false);
        });
    }
    ngOnInit() {
        this.serverService.getItems().subscribe(res => {
            console.log('getting items', res);
            this.items = res;
        });
    }
    explore(gender) {
        if (gender == 'men') {
            this.router.navigate(['/shop/men']);
        }
        else if (gender == 'women') {
            this.router.navigate(['/shop/women']);
        }
        else if (gender == 'kids') {
            this.router.navigate(['/shop/kids']);
        }
    }
};
HomeComponent.ctorParameters = () => [
    { type: _server_service__WEBPACK_IMPORTED_MODULE_2__["ServerService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _interaction_service__WEBPACK_IMPORTED_MODULE_4__["InteractionService"] },
    { type: _shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"] }
];
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")).default]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/interaction.service.ts":
/*!****************************************!*\
  !*** ./src/app/interaction.service.ts ***!
  \****************************************/
/*! exports provided: InteractionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InteractionService", function() { return InteractionService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let InteractionService = class InteractionService {
    constructor(router) {
        this.router = router;
        this.isUserLoggedIn = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
        this.isAdminLogIn = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
        this.userName = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]('');
        this.cartLength = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](0);
    }
};
InteractionService.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
InteractionService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], InteractionService);

// public role$ = new Subject<String>();
// public item$ = new Subject<any>();
// public userIn$ = new Subject<String>();
// or public gender = new Subject<String>();
//    gender$ = this.gender.asObservable();  // $ for asObservable
//to send gender to those whose access gender$ observable
// setRole(role : String){
//   this.role$.next(role);
// }
// setItem(item){
//   console.log("in set"+item)
//   this.item$.next(item);
// }
// setUserIn(user){
//   this.userIn$.next(user);
// }


/***/ }),

/***/ "./src/app/server.service.ts":
/*!***********************************!*\
  !*** ./src/app/server.service.ts ***!
  \***********************************/
/*! exports provided: ServerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServerService", function() { return ServerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");




let ServerService = class ServerService {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.signinUrl = 'user/signin';
        this.signupUrl = 'user/signup';
        this.adminUrl = 'admin/signin';
        this.getitemsUrl = 'getitems';
        this.orderUrl = 'cart/order';
        this.additemUrl = 'admin/additem';
        this.deleteitemUrl = 'admin/deleteitem';
        this.edititemUrl = 'admin/edititem';
        this.addcartUrl = 'cart/addtocart';
        this.getcartURL = "cart/getcart";
        this.removecartUrl = "cart/removecart";
    }
    getItems() {
        return this.http.get(this.getitemsUrl);
    }
    getItemsByGender(gender) {
        return this.http.get(this.getitemsUrl + `/${gender}`);
    }
    signIn(user) {
        return this.http.post(this.signinUrl, { user });
    }
    signUp(user) {
        return this.http.post(this.signupUrl, { user });
    }
    admin(admin) {
        return this.http.post(this.adminUrl, { admin });
    }
    placeOrder(item, userId) {
        return this.http.post(this.orderUrl, { 'item': item, 'userId': userId });
    }
    addItem(item) {
        return this.http.post(this.additemUrl, { item });
    }
    editItem(id, item) {
        console.log(item);
        return this.http.put(this.edititemUrl + `/${id}`, { item });
    }
    deleteItem(id) {
        return this.http.delete(this.deleteitemUrl + `/${id}`);
    }
    addCart(id, item, size) {
        return this.http.post(this.addcartUrl + `/${id}`, { 'item': item, 'size': size });
    }
    getCart(id) {
        return this.http.get(this.getcartURL + `/${id}`);
    }
    removeCartItem(item, userId, mode) {
        return this.http.post(this.removecartUrl + `/${userId}`, { 'item': item, mode: mode });
    }
};
ServerService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
ServerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ServerService);



/***/ }),

/***/ "./src/app/shared.service.ts":
/*!***********************************!*\
  !*** ./src/app/shared.service.ts ***!
  \***********************************/
/*! exports provided: SharedService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedService", function() { return SharedService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let SharedService = class SharedService {
    constructor(router) {
        this.router = router;
    }
    viewItem(item) {
        localStorage.setItem('item', JSON.stringify(item));
        this.router.navigate(['/shopitem']);
    }
    getToken() {
        return {
            userToken: localStorage.getItem('userToken'),
            adminToken: localStorage.getItem('adminToken')
        };
    }
    signedIn() {
        return {
            userToken: !!localStorage.getItem('userToken'),
            adminToken: !!localStorage.getItem('adminToken')
        };
    }
};
SharedService.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
SharedService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], SharedService);



/***/ }),

/***/ "./src/app/shop-item/shop-item.component.css":
/*!***************************************************!*\
  !*** ./src/app/shop-item/shop-item.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Nob3AtaXRlbS9zaG9wLWl0ZW0uY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/shop-item/shop-item.component.ts":
/*!**************************************************!*\
  !*** ./src/app/shop-item/shop-item.component.ts ***!
  \**************************************************/
/*! exports provided: ShopItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopItemComponent", function() { return ShopItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared.service */ "./src/app/shared.service.ts");
/* harmony import */ var _interaction_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../interaction.service */ "./src/app/interaction.service.ts");
/* harmony import */ var _server_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../server.service */ "./src/app/server.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






let ShopItemComponent = class ShopItemComponent {
    constructor(sharedService, interactionService, serverService, router) {
        this.sharedService = sharedService;
        this.interactionService = interactionService;
        this.serverService = serverService;
        this.router = router;
        this.selectSize = false;
        this.mode = 'Add to cart';
        this.item = JSON.parse(localStorage.getItem('item'));
    }
    ngOnInit() {
        this.id = localStorage.getItem('userId');
    }
    addToCart(item) {
        if (this.id) {
            if (this.size) {
                this.serverService.addCart(this.id, item, this.size).subscribe(res => {
                    this.cartLength = res.cart.cartItem.length;
                    console.log(this.cartLength);
                    this.interactionService.cartLength.next(parseInt(this.cartLength) + 1);
                    localStorage.setItem('cartLength', JSON.stringify(parseInt(this.cartLength) + 1));
                    alert(res.msg);
                    this.selectSize = false;
                    this.size = undefined;
                    if (this.mode == 'Buy Now') {
                        this.router.navigate(['/shopcart']);
                    }
                }, err => {
                    alert('error');
                });
            }
            else {
                this.selectSize = true;
            }
        }
        else {
            alert('Please signIn');
            this.router.navigate(['/signin']);
        }
    }
    selectedSize(size, item) {
        if (item.itemSize[size] <= 0) {
            alert('item size not available');
            return false;
        }
        else {
            this.size = size;
        }
    }
    cancel() {
        this.mode = 'Add to cart';
        this.selectSize = false;
    }
    buyItem() {
        if (this.id) {
            this.mode = 'Buy Now';
            this.selectSize = true;
        }
        else {
            alert('Please signIn');
            this.router.navigate(['/signin']);
        }
    }
};
ShopItemComponent.ctorParameters = () => [
    { type: _shared_service__WEBPACK_IMPORTED_MODULE_2__["SharedService"] },
    { type: _interaction_service__WEBPACK_IMPORTED_MODULE_3__["InteractionService"] },
    { type: _server_service__WEBPACK_IMPORTED_MODULE_4__["ServerService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
ShopItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-shop-item',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./shop-item.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shop-item/shop-item.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./shop-item.component.css */ "./src/app/shop-item/shop-item.component.css")).default]
    })
], ShopItemComponent);



/***/ }),

/***/ "./src/app/shop/shop.component.css":
/*!*****************************************!*\
  !*** ./src/app/shop/shop.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* You can add global styles to this file, and also import other style files */\n    .select-size {\n        list-style-type: none;\n        padding: 0;\n      }\n    .select-size li {\n        float: left;\n        margin-left: 5px;\n        width: 40px;\n        height: 40px;\n        position: relative;\n      }\n    .select-size label,\n      .select-size input {\n        display: block;\n        position: absolute;\n        border-radius:50%; \n      }\n    .select-size input[type=\"radio\"] {\n        opacity: 0.01;\n        z-index: 100;\n      }\n    .select-size input[type=\"radio\"]:checked+label,\n      .Checked+label {\n        background: rgb(212, 212, 198);\n      }\n    .select-size label {\n        font-size: 15px;\n        text-align: center;\n        border: 1px solid #CCC;\n        cursor: pointer;\n        z-index: 90;\n      }\n    .select-size label:hover {\n        background: #DDD;\n      }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hvcC9zaG9wLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsOEVBQThFO0lBQzFFO1FBQ0kscUJBQXFCO1FBQ3JCLFVBQVU7TUFDWjtJQUVBO1FBQ0UsV0FBVztRQUNYLGdCQUFnQjtRQUNoQixXQUFXO1FBQ1gsWUFBWTtRQUNaLGtCQUFrQjtNQUNwQjtJQUVBOztRQUVFLGNBQWM7UUFDZCxrQkFBa0I7UUFDbEIsaUJBQWlCO01BQ25CO0lBRUE7UUFDRSxhQUFhO1FBQ2IsWUFBWTtNQUNkO0lBRUE7O1FBRUUsOEJBQThCO01BQ2hDO0lBRUE7UUFDRSxlQUFlO1FBQ2Ysa0JBQWtCO1FBQ2xCLHNCQUFzQjtRQUN0QixlQUFlO1FBQ2YsV0FBVztNQUNiO0lBRUE7UUFDRSxnQkFBZ0I7TUFDbEIiLCJmaWxlIjoic3JjL2FwcC9zaG9wL3Nob3AuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cbiAgICAuc2VsZWN0LXNpemUge1xuICAgICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICB9XG4gICAgICBcbiAgICAgIC5zZWxlY3Qtc2l6ZSBsaSB7XG4gICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICBtYXJnaW4tbGVmdDogNXB4O1xuICAgICAgICB3aWR0aDogNDBweDtcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB9XG4gICAgICBcbiAgICAgIC5zZWxlY3Qtc2l6ZSBsYWJlbCxcbiAgICAgIC5zZWxlY3Qtc2l6ZSBpbnB1dCB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6NTAlOyBcbiAgICAgIH1cbiAgICAgIFxuICAgICAgLnNlbGVjdC1zaXplIGlucHV0W3R5cGU9XCJyYWRpb1wiXSB7XG4gICAgICAgIG9wYWNpdHk6IDAuMDE7XG4gICAgICAgIHotaW5kZXg6IDEwMDtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgLnNlbGVjdC1zaXplIGlucHV0W3R5cGU9XCJyYWRpb1wiXTpjaGVja2VkK2xhYmVsLFxuICAgICAgLkNoZWNrZWQrbGFiZWwge1xuICAgICAgICBiYWNrZ3JvdW5kOiByZ2IoMjEyLCAyMTIsIDE5OCk7XG4gICAgICB9XG4gICAgICBcbiAgICAgIC5zZWxlY3Qtc2l6ZSBsYWJlbCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjQ0NDO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIHotaW5kZXg6IDkwO1xuICAgICAgfVxuICAgICAgXG4gICAgICAuc2VsZWN0LXNpemUgbGFiZWw6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjREREO1xuICAgICAgfSJdfQ== */");

/***/ }),

/***/ "./src/app/shop/shop.component.ts":
/*!****************************************!*\
  !*** ./src/app/shop/shop.component.ts ***!
  \****************************************/
/*! exports provided: ShopComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopComponent", function() { return ShopComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _server_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../server.service */ "./src/app/server.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared.service */ "./src/app/shared.service.ts");
/* harmony import */ var _interaction_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../interaction.service */ "./src/app/interaction.service.ts");






let ShopComponent = class ShopComponent {
    constructor(serverService, sharedService, activatedRouterService, interactionService, router) {
        this.serverService = serverService;
        this.sharedService = sharedService;
        this.activatedRouterService = activatedRouterService;
        this.interactionService = interactionService;
        this.router = router;
        this.selectSize = false;
        this.mode = 'Add to cart';
    }
    ngOnInit() {
        this.gender = this.activatedRouterService.snapshot.data.gender;
        if (this.gender === 'men') {
            this.title = "Men's";
            this.serverService.getItemsByGender('men').subscribe(res => {
                this.items = res;
                console.log('getting items', res);
            });
        }
        else if (this.gender === 'women') {
            this.title = "Women's";
            this.serverService.getItemsByGender('women').subscribe(res => {
                this.items = res;
                console.log('getting items', res);
            });
        }
        else if (this.gender === 'kids') {
            this.title = 'Kids';
            this.serverService.getItemsByGender('kids').subscribe(res => {
                this.items = res;
                console.log('getting items', res);
            });
        }
        this.id = localStorage.getItem('userId');
    }
    addToCart(item) {
        if (this.id) {
            if (this.size) {
                this.serverService.addCart(this.id, item, this.size).subscribe(res => {
                    this.cartLength = res.cart.cartItem.length;
                    console.log(this.cartLength);
                    this.interactionService.cartLength.next(parseInt(this.cartLength) + 1);
                    localStorage.setItem('cartLength', JSON.stringify(parseInt(this.cartLength) + 1));
                    alert(res.msg);
                    this.selectSize = false;
                    this.size = undefined;
                    if (this.mode == 'Buy Now') {
                        this.router.navigate(['/shopcart']);
                    }
                }, err => {
                    alert('error');
                });
            }
            else {
                this.selectSize = true;
            }
        }
        else {
            alert('Please signIn');
            this.router.navigate(['/signin']);
        }
    }
    selectedSize(size, item) {
        if (item.itemSize[size] <= 0) {
            alert('item size not available');
            return false;
        }
        else {
            this.size = size;
        }
    }
    cancel() {
        this.mode = 'Add to cart';
        this.selectSize = false;
    }
    buyItem() {
        if (this.id) {
            this.mode = 'Buy Now';
            this.selectSize = true;
        }
        else {
            alert('Please signIn');
            this.router.navigate(['/signin']);
        }
    }
};
ShopComponent.ctorParameters = () => [
    { type: _server_service__WEBPACK_IMPORTED_MODULE_2__["ServerService"] },
    { type: _shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _interaction_service__WEBPACK_IMPORTED_MODULE_5__["InteractionService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
ShopComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-shop',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./shop.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shop/shop.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./shop.component.css */ "./src/app/shop/shop.component.css")).default]
    })
], ShopComponent);



/***/ }),

/***/ "./src/app/shopcart/shopcart.component.css":
/*!*************************************************!*\
  !*** ./src/app/shopcart/shopcart.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Nob3BjYXJ0L3Nob3BjYXJ0LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/shopcart/shopcart.component.ts":
/*!************************************************!*\
  !*** ./src/app/shopcart/shopcart.component.ts ***!
  \************************************************/
/*! exports provided: ShopcartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopcartComponent", function() { return ShopcartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _server_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../server.service */ "./src/app/server.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _interaction_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../interaction.service */ "./src/app/interaction.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");






let ShopcartComponent = class ShopcartComponent {
    constructor(serverService, router, interactionService, _location) {
        this.serverService = serverService;
        this.router = router;
        this.interactionService = interactionService;
        this._location = _location;
        this.mode = 'remove';
    }
    ngOnInit() {
        this.mode = 'remove';
        this.userId = localStorage.getItem('userId');
        if (this.userId) {
            this.serverService.getCart(this.userId).subscribe(res => {
                this.items = res.cart.cartItem;
                this.cartLength = res.cart.cartItem.length;
                this.interactionService.cartLength.next(parseInt(this.cartLength));
                localStorage.setItem('cartLength', this.cartLength);
            }, err => {
            });
        }
        else {
            alert('Please signIn');
            this.router.navigate(['/signin']);
        }
    }
    removeCartItem(item) {
        this.serverService.removeCartItem(item, this.userId, this.mode).subscribe((res) => {
            console.log(res);
            this.cartLength = res.cart.cartItem.length;
            console.log(this.cartLength);
            this.interactionService.cartLength.next(parseInt(this.cartLength) - 1);
            localStorage.setItem('cartLength', JSON.stringify(parseInt(this.cartLength) - 1));
            this.ngOnInit();
        }, err => {
            console.log(err);
        });
    }
    checkOut(item) {
        this.serverService.placeOrder(item, this.userId).subscribe(data => {
            if (data.flag == true) {
                this.mode = 'order';
                this.removeCartItem(item);
            }
            alert(data.msg + "\nItem Left :" + data.itemLeft);
        });
    }
};
ShopcartComponent.ctorParameters = () => [
    { type: _server_service__WEBPACK_IMPORTED_MODULE_2__["ServerService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _interaction_service__WEBPACK_IMPORTED_MODULE_4__["InteractionService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"] }
];
ShopcartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-shopcart',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./shopcart.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shopcart/shopcart.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./shopcart.component.css */ "./src/app/shopcart/shopcart.component.css")).default]
    })
], ShopcartComponent);



/***/ }),

/***/ "./src/app/signin/signin.component.css":
/*!*********************************************!*\
  !*** ./src/app/signin/signin.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("input,.alert{\n    width: 300px;\n    margin: auto;\n\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lnbmluL3NpZ25pbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7O0FBRWhCIiwiZmlsZSI6InNyYy9hcHAvc2lnbmluL3NpZ25pbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW5wdXQsLmFsZXJ0e1xuICAgIHdpZHRoOiAzMDBweDtcbiAgICBtYXJnaW46IGF1dG87XG5cbn0iXX0= */");

/***/ }),

/***/ "./src/app/signin/signin.component.ts":
/*!********************************************!*\
  !*** ./src/app/signin/signin.component.ts ***!
  \********************************************/
/*! exports provided: SigninComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigninComponent", function() { return SigninComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _server_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../server.service */ "./src/app/server.service.ts");
/* harmony import */ var _interaction_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../interaction.service */ "./src/app/interaction.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");






let SigninComponent = class SigninComponent {
    constructor(serverService, interactionService, router, _location) {
        this.serverService = serverService;
        this.interactionService = interactionService;
        this.router = router;
        this._location = _location;
        this.errorMessage = false;
        this.user = {};
    }
    ngOnInit() {
    }
    onSubmit() {
        this.serverService.signIn(this.user).subscribe(res => {
            localStorage.setItem('userToken', res.token);
            localStorage.setItem('userId', res.user._id);
            this.userName = res.user.userName;
            localStorage.setItem('userName', this.userName);
            this.interactionService.userName.next(this.userName);
            this.interactionService.isUserLoggedIn.next(true);
            this.serverService.getCart(res.user._id).subscribe(res => {
                this.cartLength = res.cart.cartItem.length;
                console.log(this.cartLength);
                localStorage.setItem('cartLength', this.cartLength);
                this.interactionService.cartLength.next(parseInt(this.cartLength));
            }, err => {
                this.errorMessage = true;
                console.log(err);
            });
            this._location.back();
        }, err => {
            this.errorMessage = true;
            console.log(err);
        });
    }
};
SigninComponent.ctorParameters = () => [
    { type: _server_service__WEBPACK_IMPORTED_MODULE_3__["ServerService"] },
    { type: _interaction_service__WEBPACK_IMPORTED_MODULE_4__["InteractionService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"] }
];
SigninComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-signin',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./signin.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/signin/signin.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./signin.component.css */ "./src/app/signin/signin.component.css")).default]
    })
], SigninComponent);



/***/ }),

/***/ "./src/app/signup/signup.component.css":
/*!*********************************************!*\
  !*** ./src/app/signup/signup.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\ninput[type=text],[type=password],[type=tel],.alert{\n    max-width: 500px;\n    margin: auto;\n\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixZQUFZOztBQUVoQiIsImZpbGUiOiJzcmMvYXBwL3NpZ251cC9zaWdudXAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW5wdXRbdHlwZT10ZXh0XSxbdHlwZT1wYXNzd29yZF0sW3R5cGU9dGVsXSwuYWxlcnR7XG4gICAgbWF4LXdpZHRoOiA1MDBweDtcbiAgICBtYXJnaW46IGF1dG87XG5cbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/signup/signup.component.ts":
/*!********************************************!*\
  !*** ./src/app/signup/signup.component.ts ***!
  \********************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _server_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../server.service */ "./src/app/server.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let SignupComponent = class SignupComponent {
    constructor(serverService, router) {
        this.serverService = serverService;
        this.router = router;
        this.user = {};
        this.errorMessage = false;
        if (!!localStorage.getItem('userToken')) {
            this.router.navigate(['/']);
        }
    }
    ngOnInit() {
    }
    onSubmit() {
        this.serverService.signUp(this.user).subscribe(data => {
            console.log('Message!! ' + JSON.parse(JSON.stringify(data)).msg);
            this.router.navigate(['/signin']);
        }, err => {
            this.errorMessage = true;
            console.log(err);
        });
        // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.user, null, 4));
    }
};
SignupComponent.ctorParameters = () => [
    { type: _server_service__WEBPACK_IMPORTED_MODULE_2__["ServerService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-signup',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./signup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/signup/signup.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./signup.component.css */ "./src/app/signup/signup.component.css")).default]
    })
], SignupComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/thalalhassan/Desktop/Thalal/styleupHost/AngularFrontEnd/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map