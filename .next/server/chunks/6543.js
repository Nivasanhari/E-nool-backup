"use strict";
exports.id = 6543;
exports.ids = [6543];
exports.modules = {

/***/ 86543:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ layout)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
// EXTERNAL MODULE: ./app/components/Navbar/Navbar.jsx + 5 modules
var Navbar = __webpack_require__(83974);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(52451);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(11440);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./public/icons/facebook.png
var facebook = __webpack_require__(84136);
// EXTERNAL MODULE: ./public/icons/youtube.png
var youtube = __webpack_require__(48220);
// EXTERNAL MODULE: ./public/icons/instagram.png
var instagram = __webpack_require__(73030);
// EXTERNAL MODULE: ./public/icons/twitter.png
var twitter = __webpack_require__(90122);
// EXTERNAL MODULE: ./public/icons/eNOOL_Logo-white.svg
var eNOOL_Logo_white = __webpack_require__(20607);
// EXTERNAL MODULE: ./public/icons/paypal-solid-large.svg
var paypal_solid_large = __webpack_require__(46163);
// EXTERNAL MODULE: ./public/icons/discover-solid-large.svg
var discover_solid_large = __webpack_require__(73118);
// EXTERNAL MODULE: ./public/icons/americanexpress-solid-large.svg
var americanexpress_solid_large = __webpack_require__(55373);
// EXTERNAL MODULE: ./public/icons/mastercard-solid-large.svg
var mastercard_solid_large = __webpack_require__(29833);
// EXTERNAL MODULE: ./public/icons/visa-solid-large.svg
var visa_solid_large = __webpack_require__(48483);
;// CONCATENATED MODULE: ./app/components/Footer/Footer.jsx














const Footer = ()=>{
    const currentYear = new Date().getFullYear();
    return /*#__PURE__*/ jsx_runtime_.jsx("footer", {
        className: " footer_bg pt-80 pb-2 mt-96 font-graphik",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "min-[2000px]:container min-[2000px]:mx-auto",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "mx-auto  space-y-8 px-4 mb-14  sm:px-6 lg:space-y-16 lg:px-8 lg:mt-20 ",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "grid grid-cols-1 gap-8 lg:grid-cols-3 ",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h2", {
                                        className: "text-xl   md:mt-10 lg:mt-0 text-white   lg:pl-0",
                                        children: [
                                            "Receive the latest offers & ",
                                            /*#__PURE__*/ jsx_runtime_.jsx("br", {
                                                className: "hidden lg:block"
                                            }),
                                            "updates via email"
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "items-center  2xl:mx-0 mt-10 space-y-5 max-w-screen-sm sm:flex sm:space-y-0 2xl:w-5/6  ",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "relative w-full ",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                    className: "block py-[16px] pl-5 w-full text-white bg-[#1E6B77]  border border-gray-300 sm:rounded-none placeholder:text-white ",
                                                    placeholder: "Your Email",
                                                    type: "email",
                                                    id: "email",
                                                    required: ""
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                    type: "submit",
                                                    className: "py-[18px] px-5 w-full  font-medium text-center text-white cursor-pointer bg-[#7CC9B5]  ",
                                                    children: "Subscribe"
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "lg:mx-auto 2xl:mx-0 my-5   max-w-screen-sm font-sfpro font-normal text-left text-white  0",
                                        children: [
                                            "By signing up, you agree to the",
                                            " ",
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                href: "#",
                                                className: "font-medium text-primary-600 dark:text-primary-500 hover:underline",
                                                children: [
                                                    " ",
                                                    "Privacy Policy"
                                                ]
                                            }),
                                            "."
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-4 pb-4 ",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                className: "font-medium text-white text-lg",
                                                children: "About Us"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                className: "mt-6 space-y-4 text-sm",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "#",
                                                            className: "text-white transition hover:opacity-75",
                                                            children: "Contact Us"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "#",
                                                            className: "text-white transition hover:opacity-75",
                                                            children: "Help Topics"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "#",
                                                            className: "text-white transition hover:opacity-75",
                                                            children: "Guarantee"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "#",
                                                            className: "text-white transition hover:opacity-75",
                                                            children: "Shipping"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "#",
                                                            className: "text-white transition hover:opacity-75",
                                                            children: "Store Pickup"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        className: "text-white transition hover:opacity-75",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "/Pages/Userside/terms&privacy",
                                                            children: "Terms"
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                className: "font-medium text-white text-lg",
                                                children: "Categories"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                className: "mt-6 space-y-4 text-sm",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "#",
                                                            className: "text-white transition hover:opacity-75",
                                                            children: "Action"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "#",
                                                            className: "text-white transition hover:opacity-75",
                                                            children: "Comedy"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "#",
                                                            className: "text-white transition hover:opacity-75",
                                                            children: "Horror"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "#",
                                                            className: "text-white transition hover:opacity-75",
                                                            children: "Drama"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "#",
                                                            className: "text-white transition hover:opacity-75",
                                                            children: "Kids"
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                className: "font-medium text-white text-lg",
                                                children: "Our Services"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                className: "mt-6 space-y-4 text-sm",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "#",
                                                            className: "text-white transition hover:opacity-75",
                                                            children: "Help Center"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "#",
                                                            className: "text-white transition hover:opacity-75",
                                                            children: "Returns"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "#",
                                                            className: "text-white transition hover:opacity-75",
                                                            children: "Product Recalls"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        className: "text-white transition hover:opacity-75",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "/Pages/Userside/contact",
                                                            children: "Contact Us"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "#",
                                                            className: "text-white transition hover:opacity-75",
                                                            children: "Store Pickup"
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                className: "font-medium text-white text-lg",
                                                children: "Get Started"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                className: "mt-6 space-y-4 text-sm",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        href: "/Pages/Userside/about",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            className: "text-white transition hover:opacity-75",
                                                            children: "About us"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "#",
                                                            className: "text-white transition hover:opacity-75 text-sm",
                                                            children: "Sitemap"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "#",
                                                            className: "text-white transition hover:opacity-75",
                                                            children: "Bookmarks"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        className: "text-white transition hover:opacity-75",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "/Pages/Userside/login",
                                                            children: "Sign in/Join"
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("table", {
                    className: "md:visible border-collapse border border-slate-400 w-full table-fixed  ",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("tbody", {
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                    className: "border border-slate-300 w-full  ",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: " my-10  px-4 lg:mx-auto md:w-5/6 xl:w-1/2 w-3/4  text-center ",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                                className: "text-white",
                                                children: "Follow Us"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "grid md:grid-cols-4 grid-col-2 text-xs text-white pt-4 justify-center font-semibold py-1",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                        className: "h-8 w-8   items-center justify-center  align-center mx-auto",
                                                        type: "button",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                            src: facebook["default"],
                                                            className: "justify-center ",
                                                            alt: ""
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                        className: "h-8 w-8  items-center justify-center align-center mx-auto",
                                                        type: "button",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                            src: youtube["default"],
                                                            className: "justify-center ",
                                                            alt: ""
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                        className: "h-8 w-8  items-center justify-center align-center mx-auto",
                                                        type: "button",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                            src: twitter["default"],
                                                            className: "justify-center ",
                                                            alt: ""
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                        className: "h-8 w-8  items-center justify-center align-center mx-auto",
                                                        type: "button",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                            src: instagram["default"],
                                                            className: "justify-center ",
                                                            alt: ""
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                    className: "border border-slate-300 w-full items-center justify-between",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                        className: "w-56 justify-center mx-auto",
                                        src: eNOOL_Logo_white["default"],
                                        alt: "Logo"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                    className: "border border-slate-300 w-full",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "   px-4  md:w-5/6 xl:w-1/2 w-3/4 md:mx-auto text-center",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                                className: "text-white pt-12 md:pt-0",
                                                children: "We Accept"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "grid md:grid-cols-5 grid-col-2 gap-2 text-xs pt-4 text-white justify-center font-semibold py-1",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                        className: "h-8 w-8  items-center  justify-center align-center mx-auto",
                                                        type: "button",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                            src: visa_solid_large["default"],
                                                            className: "justify-center ",
                                                            alt: ""
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                        className: "h-8 w-8  items-center justify-center align-center mx-auto",
                                                        type: "button",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                            src: mastercard_solid_large["default"],
                                                            className: "justify-center ",
                                                            alt: ""
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                        className: "h-8 w-8  items-center justify-center align-center mx-auto",
                                                        type: "button",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                            src: americanexpress_solid_large["default"],
                                                            className: "justify-center ",
                                                            alt: ""
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                        className: "h-8 w-8  items-center justify-center align-center mx-auto",
                                                        type: "button",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                            src: discover_solid_large["default"],
                                                            className: "justify-center ",
                                                            alt: ""
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                        className: "h-8 w-8  items-center justify-center align-center mx-auto",
                                                        type: "button",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                            src: paypal_solid_large["default"],
                                                            className: "justify-center ",
                                                            alt: ""
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "flex flex-wrap pt-3 items-center md:justify-between justify-center",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "w-full  px-4 mx-auto text-center",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "text-sm text-white font-graphik py-1 sm:space-y-3",
                            children: [
                                "Copyright \xa9 ",
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    id: "get-current-year",
                                    children: currentYear
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    href: "https://www.creative-tim.com/product/notus-js",
                                    className: "text-white hover:text-gray-800",
                                    target: "_blank"
                                }),
                                " E-Nool |",
                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    href: "#",
                                    className: "text-white hover:text-blueGray-800",
                                    children: "Powered By E-Nool"
                                }),
                                "."
                            ]
                        })
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const Footer_Footer = (Footer);

;// CONCATENATED MODULE: ./app/components/DefaultLayout/layout.js




const DefaultLayout = ({ children })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            "            ",
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "font-graphik",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Navbar["default"], {}),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "m-auto"
                    }),
                    children,
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "w-full mt-96  md:mt-0 md:pt-0  ",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(Footer_Footer, {})
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const layout = (DefaultLayout);


/***/ })

};
;