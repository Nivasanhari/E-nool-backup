"use strict";
exports.id = 9240;
exports.ids = [9240];
exports.modules = {

/***/ 83974:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Navbar)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(52451);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(11440);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./public/icons/search.svg
/* harmony default export */ const search = ({"src":"/_next/static/media/search.da8dcee3.svg","height":18,"width":19,"blurWidth":0,"blurHeight":0});
;// CONCATENATED MODULE: ./app/components/SearchBar/SearchBar.jsx




const SearchBar = ()=>{
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const toggleSearch = ()=>{
        setIsSearchOpen(!isSearchOpen);
    };
    return /*#__PURE__*/ _jsxs("div", {
        className: "relative",
        children: [
            /*#__PURE__*/ _jsx(Image, {
                src: searchbar,
                alt: "search",
                className: "h-4 w-4"
            }),
            isSearchOpen && /*#__PURE__*/ _jsx("input", {
                type: "text",
                placeholder: "Search...",
                className: "search-input bg-white border border-gray-300 rounded-md shadow-md py-2 px-4 absolute top-0 right-0 transition-all duration-300"
            })
        ]
    });
};
/* harmony default export */ const SearchBar_SearchBar = ((/* unused pure expression or super */ null && (SearchBar)));

;// CONCATENATED MODULE: ./public/icons/eNOOL_Logo.svg
/* harmony default export */ const eNOOL_Logo = ({"src":"/_next/static/media/eNOOL_Logo.1bd0f8a4.svg","height":84,"width":320,"blurWidth":0,"blurHeight":0});
;// CONCATENATED MODULE: ./public/icons/searchbar.svg
/* harmony default export */ const icons_searchbar = ({"src":"/_next/static/media/searchbar.99af0d61.svg","height":18,"width":19,"blurWidth":0,"blurHeight":0});
;// CONCATENATED MODULE: ./public/icons/searchclose.svg
/* harmony default export */ const searchclose = ({"src":"/_next/static/media/searchclose.3808c356.svg","height":19,"width":19,"blurWidth":0,"blurHeight":0});
// EXTERNAL MODULE: ./app/components/CategoriesButton/CategoriesButton.jsx
var CategoriesButton = __webpack_require__(26580);
;// CONCATENATED MODULE: ./app/components/Navbar/Navbar.jsx
/* __next_internal_client_entry_do_not_use__ default auto */ 








function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = (0,react_.useState)(false);
    const toggleMenu = ()=>{
        setIsMenuOpen(!isMenuOpen);
    };
    //search bar
    const [isInputVisible, setInputVisible] = (0,react_.useState)(false);
    const toggleInput = ()=>{
        setInputVisible(!isInputVisible);
    };
    const [isDropdownOpen, setDropdownOpen] = (0,react_.useState)(false);
    const handleDropdownToggle = ()=>{
        setDropdownOpen(!isDropdownOpen);
    };
    return /*#__PURE__*/ jsx_runtime_.jsx("header", {
        className: "w-full  absolute z-30 font-graphikBold",
        children: /*#__PURE__*/ jsx_runtime_.jsx("nav", {
            className: " mx-auto flex justify-between items-center sm:px-16 px-6 py-4   bg-white shadow ",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "container mx-auto",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex items-center justify-between h-16",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "flex-shrink-0 flex items-center ",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                            className: "h-8 w-auto",
                                            src: eNOOL_Logo,
                                            alt: "Logo"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "w-px h-10 bg-[#707070] mx-4 hidden lg:block"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "hidden lg:flex space-x-4 ",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "/components/browse",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                    href: "#",
                                                    className: "text-[#408080] hover:text-[#565656] px-3 py-2 rounded-md text-sm font-extrabold",
                                                    children: "Browse"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                onClick: handleDropdownToggle,
                                                className: "text-[#408080] hover:text-[#565656] px-3 py-2 rounded-md text-sm font-extrabold",
                                                children: "Categories"
                                            }),
                                            isDropdownOpen && /*#__PURE__*/ jsx_runtime_.jsx(CategoriesButton["default"], {
                                                isDropdownOpen: isDropdownOpen,
                                                setDropdownOpen: setDropdownOpen
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                href: "#",
                                                className: "text-[#408080] hover:text-[#565656] px-3 py-2 rounded-md text-sm font-extrabold",
                                                children: "How It Works"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "/Pages/Userside/publisher",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                    href: "#",
                                                    className: "text-[#408080] hover:text-[#565656] px-3 py-2 rounded-md text-sm font-extrabold",
                                                    children: "Publisher"
                                                })
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "flex items-center lg:hidden",
                                children: [
                                    !isInputVisible && /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                        className: "px-6",
                                        onClick: toggleInput,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                            src: icons_searchbar,
                                            alt: "search",
                                            className: "h-4 w-4"
                                        })
                                    }),
                                    isInputVisible && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "ml-2",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                type: "text",
                                                placeholder: "Search...",
                                                className: "border rounded p-2"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                onClick: toggleInput,
                                                className: "p-2 ml-2",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                    src: searchclose,
                                                    alt: "search",
                                                    className: "h-4 w-4"
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                        className: "text-[#408080] hover:text-[#565656] text-[18px] font-extrabold px-3 py-2",
                                        onClick: toggleMenu,
                                        children: "☰"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "hidden lg:flex items-center space-x-4 ",
                                children: [
                                    !isInputVisible && /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                        onClick: toggleInput,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                            src: icons_searchbar,
                                            alt: "search",
                                            className: "h-4 w-4"
                                        })
                                    }),
                                    isInputVisible && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "ml-2",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                type: "text",
                                                placeholder: "Search...",
                                                className: "border rounded p-2"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                onClick: toggleInput,
                                                className: "p-2 ml-2",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                    src: searchclose,
                                                    alt: "search",
                                                    className: "h-4 w-4"
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/Pages/Userside/login",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                            className: "rounded-full text-[#565656] text-[12px] px-4 py-1 bg-opacity-0 border font-extrabold border-[#707070]",
                                            children: "LOG IN"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/Pages/Userside/signup1",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                            className: "rounded-full text-white text-[12px] px-4 py-1 bg-[#075A68] font-extrabold hover:bg-[#04404a]",
                                            children: "SIGN UP"
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    isMenuOpen && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "lg:hidden flex flex-col space-y-4 items-center text-right",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/components/browse",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                    href: "#",
                                    className: "text-[#408080] hover:text-[#565656] px-3 py-2 rounded-md text-sm font-extrabold",
                                    children: "Browse"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/Pages/Userside/browsecategories",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                    href: "#",
                                    className: "text-[#408080] hover:text-[#565656] px-3 py-2 rounded-md text-sm font-extrabold",
                                    children: "Categories"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/Pages/Userside/landingPage",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                    href: "#",
                                    className: "text-[#408080] hover:text-[#565656] px-3 py-2 rounded-md text-sm font-extrabold",
                                    children: "How It Works"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/Pages/Userside/landingPage",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                    href: "#",
                                    className: "text-[#408080] hover:text-[#565656] px-3 py-2 rounded-md text-sm font-extrabold",
                                    children: "Publisher"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/Pages/Userside/login",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                    className: "rounded-full text-[#565656] text-[12px] px-4 py-1 bg-opacity-0 border font-extrabold border-[#707070]",
                                    children: "LOG IN"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/Pages/Userside/signup1",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                    className: "rounded-full text-white text-[12px] px-4 py-1 bg-[#075A68] font-extrabold hover:bg-[#04404a]",
                                    children: "SIGN UP"
                                })
                            })
                        ]
                    })
                ]
            })
        })
    });
}


/***/ }),

/***/ 55373:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/americanexpress-solid-large.3891322d.svg","height":35,"width":53,"blurWidth":0,"blurHeight":0});

/***/ }),

/***/ 73118:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/discover-solid-large.f72dc96f.svg","height":35,"width":53,"blurWidth":0,"blurHeight":0});

/***/ }),

/***/ 20607:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/eNOOL_Logo-white.faa65c66.svg","height":85,"width":325,"blurWidth":0,"blurHeight":0});

/***/ }),

/***/ 84136:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/facebook.fdc0821f.png","height":512,"width":512,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAWElEQVR42lXNsQ2AMBBDUWchKtghE5DQkRE8QsQYjMJiCCkWYIWC6+4V/gA0icpaxDbCb0G/Vh4S8fKgaiKUDLsOQ/qgajPMEK8AKCoCZ2j8j67u9Gx2FjdWFjKn24lmiwAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":8});

/***/ }),

/***/ 73030:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/instagram.ded7a523.png","height":512,"width":512,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAc0lEQVR42hWLsQqCYBhFL7QUDkL2LuIujjW4mFMRhC7l2qb23N+5/nLhDodzhGi8cvXNfxokag+SL84tD9TyEgdejMzxs7yKzmc+0cabmdx3uWcHXbSMFO6T5FM8EvqmP+5JxeTMhQsyJiqhKFl4pi1Rog0+HFBHMLGMIwAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":8});

/***/ }),

/***/ 29833:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/mastercard-solid-large.3723dc76.svg","height":35,"width":53,"blurWidth":0,"blurHeight":0});

/***/ }),

/***/ 46163:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/paypal-solid-large.74d903af.svg","height":35,"width":53,"blurWidth":0,"blurHeight":0});

/***/ }),

/***/ 90122:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/twitter.20b3f418.png","height":512,"width":512,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAYklEQVR42i2LsQ2DQBAEpx/euS3eAjl0YDB9kNEFfdAARVDVHLyAmU12pQVM/n2aHaw4a8ONrQl/4ANijhHs8AWxFfdYwUwJMcVefIM19uAnlvjCdalsubExAWXqzdZ2JjgAF8o4hcBIdrUAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":8});

/***/ }),

/***/ 48483:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/visa-solid-large.43feb986.svg","height":35,"width":53,"blurWidth":0,"blurHeight":0});

/***/ }),

/***/ 48220:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/youtube.ab7fccfb.png","height":512,"width":512,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAS1BMVEX+/v79/f38/f3+/v7+/v79/f3+/v79/f7+/v7+/v7+/v79/f3+/v79/f7+/v79/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v4n1lA/AAAAGHRSTlMABAQkLCwtLTw9Pj5NTVRUiImnsLGys8JcvsdcAAAAQElEQVR42jXKSw6AIBTF0CJyBUTw+WX/K9WYOGvSA6opVYEyQBbF2XGZK8j37e5ef0zvWvfThoXxw3OA0GJsgQdULQJTC7W5agAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":8});

/***/ })

};
;