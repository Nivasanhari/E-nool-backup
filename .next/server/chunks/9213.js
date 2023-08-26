"use strict";
exports.id = 9213;
exports.ids = [9213];
exports.modules = {

/***/ 87056:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ page)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(52451);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var public_assets_LandingPage_TrendingReads1_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(74546);
/* harmony import */ var _app_components_CardsGrid_Cards__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(43655);
/* harmony import */ var _app_components_CategoriesButton_CategoriesButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(26580);
/* harmony import */ var _landingPage_FeaturedAuthors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(51203);
/* harmony import */ var _landingPage_FeaturedPublishers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(18770);
/* harmony import */ var _app_components_DefaultLayout_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(86543);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(11440);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_9__);
/* __next_internal_client_entry_do_not_use__ default auto */ 



// import TrendingCurve from 'public/assets/LandingPage/Trending curve.png';







function page() {
    const dropdown = "/icons/dropdown.svg";
    const gridEnabled = "/icons/grid-enabled.svg";
    const gridDisabled = "/icons/grid-disabled.svg";
    const listEnabled = "/icons/list-enabled.svg";
    const listdisabled = "/icons/list-disabled.svg";
    const [isGridView, setGridView] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    const enableGridView = ()=>{
        if (!isGridView) {
            setGridView(true);
        }
    };
    const enableListView = ()=>{
        if (isGridView) {
            setGridView(false);
        }
    };
    //Dropdown for categories
    const [isDropdownOpen, setDropdownOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const handleDropdownToggle = ()=>{
        setDropdownOpen(!isDropdownOpen);
    };
    //dropdown for filter
    const [isShowOpen, setShowOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const handleShowToggle = ()=>{
        setShowOpen(!isShowOpen);
    };
    const [isSortOpen, setSortOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const handleSortToggle = ()=>{
        setSortOpen(!isSortOpen);
    };
    const dropdownRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const handleClickOutside = (event)=>{
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setSortOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return ()=>{
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);
    const bookgrid = [
        {
            id: "1",
            imageSrc: public_assets_LandingPage_TrendingReads1_png__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,
            title: "King of Battle and Blood",
            rating: "4",
            ratingCount: "27",
            currency: "Rs",
            price: "50",
            author: "Scarlett St.Clair"
        },
        {
            id: "2",
            imageSrc: public_assets_LandingPage_TrendingReads1_png__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,
            title: "King of Battle and Blood",
            rating: "4",
            ratingCount: "27",
            currency: "Rs",
            price: "50",
            author: "Scarlett St.Clair"
        },
        {
            id: "3",
            imageSrc: public_assets_LandingPage_TrendingReads1_png__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,
            title: "King of Battle and Blood",
            rating: "4",
            ratingCount: "27",
            currency: "Rs",
            price: "50",
            author: "Scarlett St.Clair"
        },
        {
            id: "4",
            imageSrc: public_assets_LandingPage_TrendingReads1_png__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,
            title: "King of Battle and Blood",
            rating: "4",
            ratingCount: "27",
            currency: "Rs",
            price: "50",
            author: "Scarlett St.Clair"
        },
        {
            id: "5",
            imageSrc: public_assets_LandingPage_TrendingReads1_png__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,
            title: "King of Battle and Blood",
            rating: "4",
            ratingCount: "27",
            currency: "Rs",
            price: "50",
            author: "Scarlett St.Clair"
        },
        {
            id: "6",
            imageSrc: public_assets_LandingPage_TrendingReads1_png__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,
            title: "King of Battle and Blood",
            rating: "4",
            ratingCount: "27",
            currency: "Rs",
            price: "50",
            author: "Scarlett St.Clair"
        },
        {
            id: "7",
            imageSrc: public_assets_LandingPage_TrendingReads1_png__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,
            title: "King of Battle and Blood",
            rating: "4",
            ratingCount: "27",
            currency: "Rs",
            price: "50",
            author: "Scarlett St.Clair"
        },
        {
            id: "8",
            imageSrc: public_assets_LandingPage_TrendingReads1_png__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,
            title: "King of Battle and Blood",
            rating: "4",
            ratingCount: "27",
            currency: "Rs",
            price: "50",
            author: "Scarlett St.Clair"
        },
        {
            id: "9",
            imageSrc: public_assets_LandingPage_TrendingReads1_png__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,
            title: "King of Battle and Blood",
            rating: "4",
            ratingCount: "27",
            currency: "Rs",
            price: "50",
            author: "Scarlett St.Clair"
        }
    ];
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_app_components_DefaultLayout_layout__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
            className: " w-full z-40 container mx-auto",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: " pt-12 leading-6",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "mx-auto flex justify-between items-center sm:px-16 px-6 mt-20 lg:max-w-screen-2xl w-11/12  text-[#015464]",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("nav", {
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                className: "flex m-0 items-center p-0",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        className: "flex items-center text-left",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                            href: "#",
                                            title: "",
                                            className: "cursor-pointer text-sm font-normal leading-5 text-[#015464] hover:text-gray-900",
                                            children: [
                                                " ",
                                                "Browse",
                                                " "
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                        className: "flex items-center text-left",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                className: "block h-5 w-5 align-middle text-[#015464]",
                                                xmlns: "http://www.w3.org/2000/svg",
                                                fill: "currentColor",
                                                viewBox: "0 0 20 20",
                                                "aria-hidden": "true",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                    d: "M5.555 17.776l8-16 .894.448-8 16-.894-.448z"
                                                })
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                href: "#",
                                                title: "",
                                                className: "cursor-pointer text-sm font-normal leading-5 text-[#015464] hover:text-gray-900",
                                                children: [
                                                    " ",
                                                    "Categories",
                                                    " "
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                        className: "flex items-center text-left",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                className: "block h-5 w-5 align-middle text-[#015464]",
                                                xmlns: "http://www.w3.org/2000/svg",
                                                fill: "currentColor",
                                                viewBox: "0 0 20 20",
                                                "aria-hidden": "true",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                    d: "M5.555 17.776l8-16 .894.448-8 16-.894-.448z"
                                                })
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                href: "#",
                                                title: "",
                                                className: "cursor-pointer text-sm font-normal leading-5 text-[#015464] hover:text-gray-900",
                                                children: [
                                                    " ",
                                                    "Antiques&Collectibles",
                                                    " "
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            })
                        })
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: " mx-auto flex justify-between items-center sm:px-16 px-6 py-4",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "  md-px-24 relative  container  mx-auto",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "flex flex-wrap w-full ",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "lg:w-1/2 w-full mb-6 lg:mb-2",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                        className: "text-3xl  font-graphikBold title-font pb-4 text-[#015464]",
                                        children: "Antiques and Collectables"
                                    })
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "lg:flex justify-between mb-10 ",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                        type: "button",
                                        onClick: handleDropdownToggle,
                                        className: "flex items-center justify-between w-80 px-4 py-2 bg-[#7CC9B5] text-white rounded-3xl hover:bg-[#7CC9B5]/90 focus:outline-none space-x-2 flex-row",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "pl-5",
                                                children: "Browse By Subject"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                src: dropdown,
                                                alt: "Dropdown",
                                                className: "w-3 h-3",
                                                width: 3,
                                                height: 3
                                            })
                                        ]
                                    }),
                                    isDropdownOpen && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_app_components_CategoriesButton_CategoriesButton__WEBPACK_IMPORTED_MODULE_5__["default"], {
                                        isDropdownOpen: isDropdownOpen,
                                        setDropdownOpen: setDropdownOpen
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "sm:flex pt-3 sm:space-x-3 mx-auto justify-end ",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                        type: "button",
                                        onClick: handleShowToggle,
                                        className: "flex items-center justify-between w-80 sm:w-52 px-4 py-2 bg-[#EEF2F6] text-white rounded-xl hover:bg-[#EEF2F6]/90 focus:outline-none space-x-2 flex-row mb-2",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "pl-5 text-[#015464] text-sm ",
                                                children: "Show: All"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                src: dropdown,
                                                alt: "Dropdown",
                                                className: "w-3 h-3",
                                                width: 3,
                                                height: 3
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        ref: dropdownRef,
                                        children: isShowOpen && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                            className: "absolute mt-2 z-50 right-80 top-44 py-2 w-52 bg-[#EEF2F6] border border-gray-200 shadow-lg rounded-md  ",
                                            ref: dropdownRef,
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_9___default()), {
                                                    href: "#",
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                        className: "pl-5 text-[#015464] text-sm my-3 ",
                                                        children: [
                                                            "Lorem ipsum",
                                                            " "
                                                        ]
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_9___default()), {
                                                    href: "#",
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                        className: "pl-5 text-[#015464] text-sm my-3 ",
                                                        children: [
                                                            "Lorem ipsum",
                                                            " "
                                                        ]
                                                    })
                                                }),
                                                " ",
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_9___default()), {
                                                    href: "#",
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                        className: "pl-5 text-[#015464] text-sm my-3 ",
                                                        children: [
                                                            "Lorem ipsum",
                                                            " "
                                                        ]
                                                    })
                                                }),
                                                " ",
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_9___default()), {
                                                    href: "#",
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                        className: "pl-5 text-[#015464] text-sm my-3 ",
                                                        children: [
                                                            "Lorem ipsum",
                                                            " "
                                                        ]
                                                    })
                                                }),
                                                " ",
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_9___default()), {
                                                    href: "#",
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                        className: "pl-5 text-[#015464] text-sm my-3 ",
                                                        children: [
                                                            "Lorem ipsum",
                                                            " "
                                                        ]
                                                    })
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                        type: "button",
                                        onClick: handleSortToggle,
                                        className: "flex items-center justify-between w-80 sm:w-52 px-4 py-2 bg-[#EEF2F6] text-white rounded-xl hover:bg-[#EEF2F6]/90 focus:outline-none space-x-2 flex-row mb-2",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "pl-5 text-[#015464] text-sm",
                                                children: "Short By: Publisher"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                src: dropdown,
                                                alt: "Dropdown",
                                                className: "w-3 h-3",
                                                width: 3,
                                                height: 3
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        ref: dropdownRef,
                                        children: isSortOpen && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                            className: "absolute mt-2 z-50  right-10 top-44 py-2 w-52 bg-[#EEF2F6] border border-gray-200 shadow-lg rounded-md ",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_9___default()), {
                                                    href: "#",
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                        className: "pl-5 text-[#015464] text-sm my-3 ",
                                                        children: [
                                                            "Lorem ipsum",
                                                            " "
                                                        ]
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_9___default()), {
                                                    href: "#",
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                        className: "pl-5 text-[#015464] text-sm my-3 ",
                                                        children: [
                                                            "Lorem ipsum",
                                                            " "
                                                        ]
                                                    })
                                                }),
                                                " ",
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_9___default()), {
                                                    href: "#",
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                        className: "pl-5 text-[#015464] text-sm my-3 ",
                                                        children: [
                                                            "Lorem ipsum",
                                                            " "
                                                        ]
                                                    })
                                                }),
                                                " ",
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_9___default()), {
                                                    href: "#",
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                        className: "pl-5 text-[#015464] text-sm my-3 ",
                                                        children: [
                                                            "Lorem ipsum",
                                                            " "
                                                        ]
                                                    })
                                                }),
                                                " ",
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_9___default()), {
                                                    href: "#",
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                        className: "pl-5 text-[#015464] text-sm my-3 ",
                                                        children: [
                                                            "Lorem ipsum",
                                                            " "
                                                        ]
                                                    })
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                        onClick: enableGridView,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                            src: isGridView ? gridEnabled : gridDisabled,
                                            alt: "gridEnabled",
                                            className: "px-2 w-10",
                                            width: 10,
                                            height: 10
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                        onClick: enableListView,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                            src: !isGridView ? listEnabled : listdisabled,
                                            alt: "listdisabled",
                                            className: "px-2 w-9 items-center",
                                            width: 9,
                                            height: 10
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: " z-0 h-[2px] w-full bg-[#0FBF61] opacity-20 rounded mb-5"
                            }),
                            isGridView ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4 lg:gap-3 w-full",
                                children: bookgrid.map((book)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_app_components_CardsGrid_Cards__WEBPACK_IMPORTED_MODULE_4__/* .CardsGrid */ .f, {
                                        title: book.title,
                                        author: book.author,
                                        rating: book.rating,
                                        ratingCount: book.ratingCount,
                                        currency: book.currency,
                                        price: book.price,
                                        imageSrc: book.imageSrc
                                    }, book.id))
                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_app_components_CardsGrid_Cards__WEBPACK_IMPORTED_MODULE_4__/* .CardsList */ .X, {})
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "mx-auto flex justify-center items-center mt-4",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("nav", {
                        className: "inline-flex items-center justify-center rounded-md shadow-sm",
                        "aria-label": "Pagination",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                href: "#",
                                className: "relative  inline-flex items-center rounded-l-sm px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: "text-sm  text-[#408080]",
                                    children: "Previous"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                href: "#",
                                "aria-current": "page",
                                className: "relative  z-10 inline-flex items-center bg-[#7CC9B5] px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",
                                children: "1"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                href: "#",
                                className: "relative  inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0",
                                children: "2"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                href: "#",
                                className: "relative  hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex",
                                children: "3"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "relative  inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300 focus:outline-offset-0",
                                children: "..."
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                href: "#",
                                className: "relative  hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex",
                                children: "8"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                href: "#",
                                className: "relative   inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0",
                                children: "9"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                href: "#",
                                className: "relativem-1    inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0",
                                children: "10"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                href: "#",
                                className: "relative    inline-flex items-center rounded-r-sm px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: "text-sm text-[#408080] ",
                                    children: "Next"
                                })
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_landingPage_FeaturedAuthors__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_landingPage_FeaturedPublishers__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {})
            ]
        })
    });
}


/***/ }),

/***/ 39659:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $$typeof: () => (/* binding */ $$typeof),
/* harmony export */   __esModule: () => (/* binding */ __esModule),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61363);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`C:\Users\nivas\Downloads\E-nool-backup\app\Pages\Userside\browsecategories\page.jsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__default__);

/***/ })

};
;