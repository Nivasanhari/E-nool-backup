"use strict";
exports.id = 3655;
exports.ids = [3655];
exports.modules = {

/***/ 43655:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   X: () => (/* binding */ CardsList),
/* harmony export */   f: () => (/* binding */ CardsGrid)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(52451);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _dropdown_Dropdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(94152);
/* harmony import */ var public_assets_LandingPage_TrendingReads1_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(74546);
/* harmony import */ var public_icons_eye_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(17541);
/* harmony import */ var public_icons_heart_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(48197);
/* harmony import */ var public_icons_more_options_dotted_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(53327);
/* harmony import */ var _public_icons_arrow_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(81632);
/* harmony import */ var public_icons_heartred_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(72860);
/* harmony import */ var _CarouselCards_CarouselCards__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(58367);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(11440);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_11__);
/* __next_internal_client_entry_do_not_use__ CardsGrid,CardsList auto */ 











const CardsGrid = ({ title, author, rating, imageSrc, ratingCount, currency, price })=>{
    const [isDropdownOpen, setDropdownOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [isHeartRed, setIsHeartRed] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const handleHeartClick = ()=>{
        setIsHeartRed(!isHeartRed);
    };
    const handleDropdownToggle = ()=>{
        setDropdownOpen(!isDropdownOpen);
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
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "mb-40 mx-auto items-center justify-center font-graphik ",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                className: " rounded w-56 object-cover object-center mb-4  ",
                src: imageSrc,
                alt: "content"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                className: "text-[16px] text-[#1A6270] font-graphikBold  mb-2 ",
                children: title
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex flex-wrap mb-2  ",
                children: [
                    " ",
                    renderStars(rating),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                        className: "tracking-widest text-[#280c0c] text-xs  ",
                        children: [
                            "(",
                            ratingCount,
                            ")"
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                className: "text-[12px] tracking-widest text-[#015464] text-xs  mb-2  ",
                children: [
                    "by ",
                    author
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                className: "text-[12px] tracking-widest text-[#015464] text-xs  mb-2   ",
                children: [
                    currency,
                    ".",
                    price
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex flex-wrap space-x-4 pt-2 mb-1 text-center relative z-0 ",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_11___default()), {
                        href: "https://enoolwebflipbooktest.netlify.app/",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                            src: public_icons_eye_png__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z,
                            className: "w-8",
                            alt: ""
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        onClick: handleHeartClick,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                            src: isHeartRed ? public_icons_heartred_png__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z : public_icons_heart_png__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z,
                            className: "w-8",
                            alt: ""
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        onClick: handleDropdownToggle,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                            src: public_icons_more_options_dotted_png__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z,
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
};
const CardsList = ()=>{
    const [isDropdownOpen, setDropdownOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [isHeartRed, setIsHeartRed] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const handleHeartClick1 = ()=>{
        setIsHeartRed(!isHeartRed);
    };
    const handleDropdownToggle = ()=>{
        setDropdownOpen(!isDropdownOpen);
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "grid gap-8 grid-cols-1 sm:gap-12 xl:gap-16 ",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "border border-[#E4E4E4] rounded-[21px] bg-white p-5 flex flex-col md:flex-row",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "md:w-56",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                        className: "rounded  w-56 object-cover object-center my-auto",
                        src: public_assets_LandingPage_TrendingReads1_png__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z,
                        alt: "content"
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "flex flex-col justify-between  md:px-6  w-full",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "h-full",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex lg:flex-row flex-col",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                        className: "text-3xl text-[#1A6270] font-graphikBold  w-full",
                                        children: "King of Battle and Blood"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "flex flex-row  space-x-6 pt-2 mb-1 text-center relative z-0 xl:mx-5",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_11___default()), {
                                                href: "https://enoolwebflipbooktest.netlify.app/",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                    src: public_icons_eye_png__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z,
                                                    className: "w-8",
                                                    alt: ""
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                onClick: handleHeartClick1,
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                    src: isHeartRed ? public_icons_heartred_png__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z : public_icons_heart_png__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z,
                                                    className: "w-8",
                                                    alt: ""
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                onClick: handleDropdownToggle,
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                    src: public_icons_more_options_dotted_png__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z,
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
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex flex-wrap mb-2",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                        className: "w-4 h-4 text-yellow-300",
                                        "aria-hidden": "true",
                                        fill: "currentColor",
                                        viewBox: "0 0 22 20",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                            d: "M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                        className: "w-4 h-4 text-yellow-300",
                                        "aria-hidden": "true",
                                        fill: "currentColor",
                                        viewBox: "0 0 22 20",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                            d: "M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                        className: "w-4 h-4 text-yellow-300",
                                        "aria-hidden": "true",
                                        fill: "currentColor",
                                        viewBox: "0 0 22 20",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                            d: "M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                        className: "w-4 h-4 text-yellow-300",
                                        "aria-hidden": "true",
                                        fill: "currentColor",
                                        viewBox: "0 0 22 20",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                            d: "M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                        className: "w-4 h-4 text-gray-300 dark:text-gray-500",
                                        "aria-hidden": "true",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        fill: "currentColor",
                                        viewBox: "0 0 22 20",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                            d: "M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "text-[12px] tracking-widest text-[#1A6270] text-xs mb-2",
                                children: "by Scarlett St.Clair"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                className: "font-graphikItalic font-bold text-[#015464] mb-2",
                                children: "Describes what being a foster mom is really like, the effects of foster care on the whole family, and how the foster care system fails severely abused children."
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                children: "Foster children are society’s throwaway kids, the children no one wants—until someone finally does. Saving Michael provides an inside look Keri Vellis’ struggle to secure the best possible services for two severely abused and traumatized siblings. Some doors opened, but too many closed during her ten-year journey as the voice for children in her care who have no voice of...….."
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "flex flex-wrap",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                    className: "flex items-center text-white bg-[#015464] border-0 py-2 mt-10 px-6 focus:outline-none w-auto h-10 rounded-[21px] text-sm",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                            children: "Read More"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                            src: _public_icons_arrow_svg__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z,
                                            className: "ml-2"
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                })
            ]
        })
    });
};


/***/ }),

/***/ 81632:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/arrow.2e3cbb95.svg","height":9,"width":16,"blurWidth":0,"blurHeight":0});

/***/ })

};
;