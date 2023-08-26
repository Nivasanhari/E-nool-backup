"use strict";
exports.id = 5716;
exports.ids = [5716];
exports.modules = {

/***/ 62479:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
// components/StarRating.js
/* __next_internal_client_entry_do_not_use__ default auto */ 

const StarRating = ({ initialValue })=>{
    const [rating, setRating] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(initialValue);
    const handleRatingChange = (newRating)=>{
        setRating(newRating);
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: " text-xl ml-2 cursor-pointer text-[orange]",
        children: [
            1,
            2,
            3,
            4,
            5
        ].map((index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: `star ${rating >= index ? "filled" : ""}`,
                onClick: ()=>handleRatingChange(index),
                children: "★"
            }, index))
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StarRating);


/***/ }),

/***/ 13985:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/book.5550b65e.png","height":325,"width":219,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAICAYAAAAx8TU7AAAApklEQVR42gVATw+BUAD/vWS8JmvWlK3NheFi3WycXYzP7Ghz4OCCXFoaMtVKfxTvGZnPzJS2e5SKhNu3J2kheItD5UeJSuEkIAO9DskPJcF1AlQiC2y3wUgt4D4IIwD4WNcwbYQ4RR+sPXzF1WIJsAJdQwHPGeztGWJfb0JTa9gf7piYHbzsOgSZZbj6Jaq6AcsrIWeRIFyOXpYkHHKF8zguEeW19A/EPEZVrui5jQAAAABJRU5ErkJggg==","blurWidth":5,"blurHeight":8});

/***/ })

};
;