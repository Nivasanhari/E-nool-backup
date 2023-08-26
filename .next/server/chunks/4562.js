"use strict";
exports.id = 4562;
exports.ids = [4562];
exports.modules = {

/***/ 84562:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(52451);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var public_assets_LandingPage_TrendingReads1_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(74546);
/* harmony import */ var public_icons_eye_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(17541);
/* harmony import */ var public_icons_heart_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(48197);
/* harmony import */ var public_icons_more_options_dotted_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(53327);
/* harmony import */ var _app_components_CardsGrid_Cards__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(43655);
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
const page = ()=>{
    const handleOptionSelect = (selectedOption)=>{
        console.log("Selected option:", selectedOption);
    // You can perform any other actions here based on the selected option.
    };
    const enableGridView = ()=>{
        if (!isGridView) {
            setGridView(true);
        }
    };
    const [isGridView, setGridView] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);
    const enableWishView = ()=>{
        if (!isGridView) {
            setGridView(true);
        }
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "mx-auto container pl-50",
        children: isGridView ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "ml-50",
            children: bookgrid.map((book)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_app_components_CardsGrid_Cards__WEBPACK_IMPORTED_MODULE_7__/* .CardsGrid */ .f, {
                    title: book.title,
                    author: book.author,
                    rating: book.rating,
                    ratingCount: book.ratingCount,
                    currency: book.currency,
                    price: book.price,
                    imageSrc: book.imageSrc
                }, book.id))
        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_app_components_CardsGrid_Cards__WEBPACK_IMPORTED_MODULE_7__/* .CardsList */ .X, {})
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (page);


/***/ })

};
;