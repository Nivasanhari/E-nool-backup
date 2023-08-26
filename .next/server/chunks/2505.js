"use strict";
exports.id = 2505;
exports.ids = [2505];
exports.modules = {

/***/ 59880:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const page = ({ isVisivle, onClose })=>{
    if (!isVisivle) return null;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: " fixed inset-0 bg-[#015464] bg-opacity-40 flex justify-center items-center",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: " bg-[#015464] h-[550px] rounded-2xl",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: " flex text-white mt-8 ",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                            className: " text-xl font-extrabold ml-24",
                            children: "Create booksshelves deatils"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            className: " text-xl ml-32 mr-10 bg-[#7CC9B5] rounded-full p-1 px-3 text-white bg-opacity-25",
                            onClick: ()=>onClose(),
                            children: "x"
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {
                    className: " bg-[#7CC9B5] p-[0.5px] mt-5"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: " text-white mt-10 ml-14",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                            className: " text-sm font-light mb-5",
                            children: "My Bookshelf tittle"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                            className: " outline-none text-black p-3 pr-28 rounded-lg text-sm",
                            type: "text"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: " text-[12px] mt-1 font-light",
                            children: "Bookshels Name Must Be Between 1-60 characters"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                            className: " mt-8 font-light text-sm",
                            children: "Descreption"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                            className: " mt-6 outline-0 rounded text-[11px]",
                            type: "type",
                            cols: "60",
                            rows: "8"
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                    className: " text-white bg-[#7CC9B5] px-28 mt-6 ml-32 p-2 rounded-2xl",
                    children: "Save"
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (page);


/***/ }),

/***/ 34199:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
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

/***/ 49095:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/Add.614a8e2f.png","height":208,"width":175,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAYAAAA1BOUGAAAAd0lEQVR42kXNMWpCYQDD8V8eH3QoHTq49B69W4deyyO4CC6ewGMo6IvCg88sCQl/kv/j/q+1S/qhIVSlWZfyI06tRWwqIiPc0dltA9Vli+9u0mFgLVcvx2PO1VE+1W/40nbycRupczk0iamsre+BS3RVy/vNneyePDEwWUybjT4AAAAASUVORK5CYII=","blurWidth":7,"blurHeight":8});

/***/ }),

/***/ 36315:
/***/ (() => {

/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/bg1.3f5f09bf.png","height":1540,"width":1811,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHCAMAAAACh/xsAAAAS1BMVEV+xbN/xLGAw7B/w7F/w7CAwq9/xLF/xLF/xLF/xLF/xLF/xLF/xLF/xLF/xLF/xLF/xLGAxLGAxLB/xLF/xLCAw7B/w7CAw7CAw7B5UEk+AAAAGXRSTlMAAAAAAAABAwkNEhMUFRcYGRoaGhoaGhscitjNAwAAADxJREFUeNoVyMkRgDAMBMEVh7lBMMhy/pFS9LN1pfMAmr3FS62yacvgRmbdmhAaSr804p9yJuEyjUeS+wdrhgMxyWywdQAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":7});

/***/ }),

/***/ 13985:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/book.5550b65e.png","height":325,"width":219,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAICAYAAAAx8TU7AAAApklEQVR42gVATw+BUAD/vWS8JmvWlK3NheFi3WycXYzP7Ghz4OCCXFoaMtVKfxTvGZnPzJS2e5SKhNu3J2kheItD5UeJSuEkIAO9DskPJcF1AlQiC2y3wUgt4D4IIwD4WNcwbYQ4RR+sPXzF1WIJsAJdQwHPGeztGWJfb0JTa9gf7piYHbzsOgSZZbj6Jaq6AcsrIWeRIFyOXpYkHHKF8zguEeW19A/EPEZVrui5jQAAAABJRU5ErkJggg==","blurWidth":5,"blurHeight":8});

/***/ }),

/***/ 14899:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/img1.9463f727.png","height":604,"width":505,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAMAAAAC2hU0AAAAUVBMVEUk6r4g6sUm374n3r8o3cEn3r4m3r8m3r4n3b8n3b4m3b4o274AAAAn3r8n3r4m3r8m3r4n3b8n3b4m3b4n3r8n3r4m3r8m3r4n3b8n3b4m3b81YMXeAAAAG3RSTlMAAAAAAAAAAAAAAAAAAQEBAQEBAQICAgICAgJi4TjxAAAAPUlEQVR42gVAARZAIAz9pDZDJquZ+x+0h3JbHYUgquRCKHWkqwuiLQe/Dss5ESlcse38gL/1bNmQrEf4PwFYlQLqj/kWbQAAAABJRU5ErkJggg==","blurWidth":7,"blurHeight":8});

/***/ })

};
;