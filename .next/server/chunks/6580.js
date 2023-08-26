"use strict";
exports.id = 6580;
exports.ids = [6580];
exports.modules = {

/***/ 26580:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11440);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* __next_internal_client_entry_do_not_use__ default auto */ 



const CategoriesButton = ({})=>{
    const [dropdownOpen, setDropdownOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const handleSortToggle = ()=>{
        setDropdownOpen(!dropdownOpen);
    };
    const dropdown = "/icons/dropdown.svg";
    const menuItems1 = [
        {
            label: "Antiques & Collectibles",
            href: "#"
        },
        {
            label: "Architecture",
            href: "#"
        },
        {
            label: "Art",
            href: "#"
        },
        {
            label: "Bibles",
            href: "#"
        },
        {
            label: "Biography & Autobiography",
            href: "#"
        },
        {
            label: "Business & Economics",
            href: "#"
        },
        {
            label: "Computers",
            href: "#"
        },
        {
            label: "Cooking",
            href: "#"
        },
        {
            label: "Online Stores",
            href: "#"
        },
        {
            label: "Crafts & Hobbies",
            href: "#"
        },
        {
            label: "Design",
            href: "#"
        },
        {
            label: "Online Stores",
            href: "#"
        },
        {
            label: "Drama",
            href: "#"
        },
        {
            label: "Education",
            href: "#"
        }
    ];
    const menuItems2 = [
        {
            label: "Family & Relationships",
            href: "#"
        },
        {
            label: "Fiction",
            href: "#"
        },
        {
            label: "Foreign Language Study",
            href: "#"
        },
        {
            label: "Games & Activities",
            href: "#"
        },
        {
            label: "Gardening",
            href: "#"
        },
        {
            label: "Health & Fitness",
            href: "#"
        },
        {
            label: "History",
            href: "#"
        },
        {
            label: "House & Home",
            href: "#"
        },
        {
            label: "Humor",
            href: "#"
        },
        {
            label: "Juvenile Fiction",
            href: "#"
        },
        {
            label: "Juvenile Nonfiction",
            href: "#"
        },
        {
            label: "Language Arts & Disciplines",
            href: "#"
        },
        {
            label: " Law",
            href: "#"
        },
        {
            label: "Literary Collections",
            href: "#"
        }
    ];
    const menuItems3 = [
        {
            label: "Family & Relationships",
            href: "#"
        },
        {
            label: "Fiction",
            href: "#"
        },
        {
            label: "Foreign Language Study",
            href: "#"
        },
        {
            label: "Games & Activities",
            href: "#"
        },
        {
            label: "Gardening",
            href: "#"
        },
        {
            label: "Health & Fitness",
            href: "#"
        },
        {
            label: "History",
            href: "#"
        },
        {
            label: "House & Home",
            href: "#"
        },
        {
            label: "Humor",
            href: "#"
        },
        {
            label: "Juvenile Fiction",
            href: "#"
        },
        {
            label: "Juvenile Nonfiction",
            href: "#"
        },
        {
            label: "Language Arts & Disciplines",
            href: "#"
        },
        {
            label: " Law",
            href: "#"
        },
        {
            label: "Literary Collections",
            href: "#"
        }
    ];
    const menuItems4 = [
        {
            label: "Family & Relationships",
            href: "#"
        },
        {
            label: "Fiction",
            href: "#"
        },
        {
            label: "Foreign Language Study",
            href: "#"
        },
        {
            label: "Games & Activities",
            href: "#"
        },
        {
            label: "Gardening",
            href: "#"
        },
        {
            label: "Health & Fitness",
            href: "#"
        },
        {
            label: "History",
            href: "#"
        },
        {
            label: "House & Home",
            href: "#"
        },
        {
            label: "Humor",
            href: "#"
        },
        {
            label: "Juvenile Fiction",
            href: "#"
        },
        {
            label: "Juvenile Nonfiction",
            href: "#"
        },
        {
            label: "Language Arts & Disciplines",
            href: "#"
        },
        {
            label: " Law",
            href: "#"
        },
        {
            label: "Literary Collections",
            href: "#"
        }
    ];
    const dropdownRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const categoriesRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const handleDocumentClick = (event)=>{
        if (dropdownRef.current && !dropdownRef.current.contains(event.target) && event.target !== categoriesRef.current) {
            setDropdownOpen(false);
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        document.addEventListener("click", handleDocumentClick);
        return ()=>{
            document.removeEventListener("click", handleDocumentClick);
        };
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "absolute   w-full lg:w-3/4    font-graphik",
        ref: dropdownRef,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "w-5 h-5 bg-transparent mt-5    border-l-[130px] border-l-transparent   border-b-[200px] border-[#7CC9B5]   border-r-[10px] border-r-transparent"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "absolute  z-50 top-12 left-0 w-full bg-[#7CC9B5]  rounded-lg shadow-lg ",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "grid max-w-screen-xl px-4 py-5 mx-auto text-sm text-white  lg:grid-cols-5 grid-cols-3 md:px-6",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                            href: "/Pages/Userside/browsecategories",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                className: "hidden mb-4 space-y-4 md:mb-0 md:block",
                                "aria-labelledby": "mega-menu-full-image-button",
                                children: menuItems1.map((item, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                            href: item.href,
                                            className: "inline-block px-4  rounded hover:bg-[#015464] hover:text-white hover:font-semibold transition-colors duration-300",
                                            children: [
                                                "                                      ",
                                                item.label
                                            ]
                                        })
                                    }, index))
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                            className: "mb-4 space-y-4 md:mb-0",
                            children: menuItems2.map((item, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                        href: item.href,
                                        className: "inline-block px-4  rounded hover:bg-[#015464] hover:text-white hover:font-semibold transition-colors duration-300",
                                        children: [
                                            "                                      ",
                                            item.label
                                        ]
                                    })
                                }, index))
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                            className: "mb-4 space-y-4 md:mb-0",
                            children: menuItems3.map((item, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                        href: item.href,
                                        className: "inline-block px-4  rounded hover:bg-[#015464] hover:text-white hover:font-semibold transition-colors duration-300",
                                        children: [
                                            "                                      ",
                                            item.label
                                        ]
                                    })
                                }, index))
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                            className: "mb-4 space-y-4 md:mb-0",
                            children: menuItems4.map((item, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                        href: item.href,
                                        className: "inline-block px-4  rounded hover:bg-[#015464] hover:text-white hover:font-semibold transition-colors duration-300",
                                        children: [
                                            "                                      ",
                                            item.label
                                        ]
                                    })
                                }, index))
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "p-8 md:mt-10 md:h-1/2    w-full text-left bg-local bg-[#015464] bg-center bg-no-repeat bg-cover rounded-lg  ",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                    className: "max-w-xl mb-5 font-extrabold leading-tight text-xl tracking-tight text-white",
                                    children: [
                                        "Join More Than ",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "text-[#7CC9B5]",
                                            children: "12000+ Book Lovers"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                        "Worldwide"
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    type: "button",
                                    className: "inline-flex items-center px-2.5 py-1.5 text-xs font-medium text-center bg-[#7CC9B5] text-white    rounded-lg  hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-700",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                        className: "font-graphik font-semibold",
                                        children: "Start Reading Now"
                                    })
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CategoriesButton);


/***/ })

};
;