"use strict";
exports.id = 1513;
exports.ids = [1513];
exports.modules = {

/***/ 41513:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var public_assets_book_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13985);
/* harmony import */ var public_assets_img1_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(14899);
/* harmony import */ var _app_components_staricon_Staricon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(34199);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(52451);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_5__);
/* __next_internal_client_entry_do_not_use__ default auto */ 





const options = [
    {
        label: "Option 1",
        value: "option1"
    },
    {
        label: "Option 2",
        value: "option2"
    },
    {
        label: "Option 3",
        value: "option3"
    }
];
const page = ()=>{
    const handleOptionSelect = (selectedOption)=>{
        console.log("Selected option:", selectedOption);
    // You can perform any other actions here based on the selected option.
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: " container mb-[100px] mt-10 justify-start items-center ml-40 flex",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {
                className: " absolute top-[830px] ml-[-440px] w-[350px]",
                src: public_assets_img1_png__WEBPACK_IMPORTED_MODULE_3__["default"],
                alt: ""
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: " flex ",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {
                        className: " mt-16 w-44",
                        src: public_assets_book_png__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,
                        alt: "book-img"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: " mt-28 ml-16 flex flex-col justify-center ",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                className: " text-[#145464] text-2xl font-bold",
                                children: "King of Battle and Blood"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: " flex items-center",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_app_components_staricon_Staricon__WEBPACK_IMPORTED_MODULE_4__["default"], {}),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: " ml-2 text-xs",
                                        children: "(27)"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: " text-[#14adad] text-sm mt-",
                                children: "by Scarlett St. Clair"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: " text-[13px] mt-3 text-[#145464] font-bold max-w-md md:max-w-sm",
                                children: "Describes what being a foster mom is really like, the effects of foster care on the whole family, and how the foster care system fails severely abused children."
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: " mt-8",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                        className: " bg-[#145464] rounded-3xl text-white px-8 py-2",
                                        children: "Read"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                        className: " bg-[#7CC9B5] rounded-3xl text-white px-6 py-2 ml-10",
                                        children: "Write Review"
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
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