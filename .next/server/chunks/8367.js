"use strict";
exports.id = 8367;
exports.ids = [8367];
exports.modules = {

/***/ 58367:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(52451);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _dropdown_Dropdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(94152);
/* harmony import */ var public_assets_LandingPage_TrendingReads1_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(74546);
/* harmony import */ var public_assets_LandingPage_TrendingReads2_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(87890);
/* harmony import */ var public_assets_LandingPage_TrendingReads3_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(80287);
/* harmony import */ var public_assets_LandingPage_TrendingReads4_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(49310);
/* harmony import */ var public_assets_LandingPage_TrendingReads5_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(68234);
/* harmony import */ var public_icons_eye_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(17541);
/* harmony import */ var public_icons_heart_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(48197);
/* harmony import */ var public_icons_heartred_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(72860);
/* harmony import */ var public_icons_more_options_dotted_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(53327);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(11440);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_13__);
/* __next_internal_client_entry_do_not_use__ default auto */ 













function CarouselCardItems({ title, author, rating, imageSrc, ratingCount, currency, price }) {
    const [isHeartRed, setIsHeartRed] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const handleHeartClick = ()=>{
        setIsHeartRed(!isHeartRed);
    };
    const renderStars = (count)=>{
        const stars = [];
        for(let i = 0; i < count; i++){
            stars.push(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                className: "w-4 h-4 text-yellow-300",
                "aria-hidden": "true",
                fill: "currentColor",
                viewBox: "0 0 22 20",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
                })
            }, i));
        }
        return stars;
    };
    const [isDropdownOpen, setDropdownOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const handleDropdownToggle = ()=>{
        setDropdownOpen(!isDropdownOpen);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "mb-40 mx-10 xl:mx-auto items-center justify-center font-graphik ",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                className: " rounded w-56 object-cover object-center mb-4 xl:mx-8   ",
                src: imageSrc,
                alt: "content"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                className: "text-[16px] text-[#1A6270] font-graphikBold  mb-2 xl:mx-8",
                children: title
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex flex-wrap mb-2 xl:mx-8 ",
                children: [
                    " ",
                    renderStars(rating),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                        className: "tracking-widest text-[#280c0c] text-xs xl:mx-8 ",
                        children: [
                            "(",
                            ratingCount,
                            ")"
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                className: "text-[12px] tracking-widest text-[#015464] text-xs  mb-2 xl:mx-8  ",
                children: [
                    "by ",
                    author
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                className: "text-[12px] tracking-widest text-[#015464] text-xs  mb-2 xl:mx-8  ",
                children: [
                    currency,
                    ".",
                    price
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex flex-wrap space-x-4 pt-2 mb-1 text-center relative z-0 xl:mx-8",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_13___default()), {
                        href: "https://enoolwebflipbooktest.netlify.app/",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                            src: public_icons_eye_png__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z,
                            className: "w-8",
                            alt: ""
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        onClick: handleHeartClick,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                            src: isHeartRed ? public_icons_heartred_png__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z : public_icons_heart_png__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z,
                            className: "w-8",
                            alt: ""
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        onClick: handleDropdownToggle,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                            src: public_icons_more_options_dotted_png__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z,
                            className: "w-8",
                            alt: ""
                        })
                    }),
                    isDropdownOpen && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_dropdown_Dropdown__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                        isDropdownOpen: isDropdownOpen,
                        setDropdownOpen: setDropdownOpen
                    })
                ]
            })
        ]
    });
}
;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CarouselCardItems);


/***/ }),

/***/ 94152:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var public_icons_more_options_dotted_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(53327);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(52451);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(11440);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);





const Dropdown = ({ isDropdownOpen, setDropdownOpen })=>{
    const dropdownRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const moreOptionRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const handleDocumentClick = (event)=>{
        if (dropdownRef.current && !dropdownRef.current.contains(event.target) && event.target !== moreOptionRef.current) {
            setDropdownOpen(false);
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        document.addEventListener("click", handleDocumentClick);
        return ()=>{
            document.removeEventListener("click", handleDocumentClick);
        };
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: " absolute z-50 top-10 left-16 ",
        ref: dropdownRef,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                    type: "checkbox",
                    className: "peer hidden",
                    id: "dropdown-open",
                    checked: true
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "peer-checked:block z-10 mt-2 hidden w-36 divide-y divide-gray-100 rounded border bg-white shadow",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                        className: "py-1 text-sm text-[#7CC9B5]",
                        "aria-labelledby": "dropdownDefault",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                className: "block px-4 py-2 hover:bg-gray-100 text-xs",
                                children: "Buy Now"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                                href: "/Pages/Userside/productdetail",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                    className: "block px-4 py-2 hover:bg-gray-100 text-xs",
                                    children: "View Book Details"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                className: "block px-4 py-2 hover:bg-gray-100 text-xs",
                                children: "Add to Bookshelf"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                className: "block px-4 py-2 hover:bg-gray-100 text-xs",
                                children: "Report a Book"
                            })
                        ]
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Dropdown);


/***/ }),

/***/ 72860:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/heartred.18cb63d4.png","height":512,"width":512,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAV1BMVEXXRD7XRD3WRD3XQz3WQz3XQz3WQz3XQz3XQz3XQz3WQz3XQz3XQz3WQz3WQz3WQz3XRD3WQz3WQz3XRD3XQz3WQz3WQz3XQz3WQz3XQz7XQz3WQz7WQz1D+2pIAAAAGXRSTlMAAAAAAAEBAgMEBAc6O0llZmlrcXKTlPv78JoXsQAAAENJREFUeNoNxkcSgCAQBMCRHQmLYk4r/38nVPWhIaMmTZ7wpAykB/J9HlcmuNbP/qVnsvepMxFlM9slgoGlMDhQtHNsX98CqY5jqEAAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":8});

/***/ })

};
;