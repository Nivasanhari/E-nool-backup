"use strict";
exports.id = 6702;
exports.ids = [6702];
exports.modules = {

/***/ 56702:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ page)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(52451);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./public/icons/backButton.svg
/* harmony default export */ const backButton = ({"src":"/_next/static/media/backButton.54d8c3cc.svg","height":15,"width":9,"blurWidth":0,"blurHeight":0});
;// CONCATENATED MODULE: ./public/icons/next.svg
/* harmony default export */ const next = ({"src":"/_next/static/media/next.202f92b9.svg","height":54,"width":54,"blurWidth":0,"blurHeight":0});
;// CONCATENATED MODULE: ./public/icons/previous.svg
/* harmony default export */ const previous = ({"src":"/_next/static/media/previous.ce75238f.svg","height":54,"width":54,"blurWidth":0,"blurHeight":0});
;// CONCATENATED MODULE: ./public/icons/preferences.svg
/* harmony default export */ const preferences = ({"src":"/_next/static/media/preferences.21e8170f.svg","height":23,"width":30,"blurWidth":0,"blurHeight":0});
;// CONCATENATED MODULE: ./public/icons/fontpreferences.svg
/* harmony default export */ const fontpreferences = ({"src":"/_next/static/media/fontpreferences.ec3df390.svg","height":17,"width":23,"blurWidth":0,"blurHeight":0});
;// CONCATENATED MODULE: ./public/icons/bookmark.svg
/* harmony default export */ const bookmark = ({"src":"/_next/static/media/bookmark.79a18996.svg","height":22,"width":16,"blurWidth":0,"blurHeight":0});
;// CONCATENATED MODULE: ./public/assets/Flipbook/book.png
/* harmony default export */ const Flipbook_book = ({"src":"/_next/static/media/book.e9e6911c.png","height":2339,"width":1654,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAICAIAAABVpBlvAAAAo0lEQVR42gGYAGf/AFE4XFtXeGB2nGZ6nFJXcCobOgCXlp6kp7KlrL+0usebmqR9fIYAra+zoaWwkpinmKGyw8LFqqaoAEo/Vig3YICDmXqEoVVgc1dISQBUR11WV2uHg4qXjox/dGZgWV0AOjpMWktcTDw7dW5tdXF0OTVKADkrPF5WZ1VrelVsfEdQYhoSQAA7MT1FRFd8ZoJ2VnAsMEg5N1FP7D22D0XdlAAAAABJRU5ErkJggg==","blurWidth":6,"blurHeight":8});
;// CONCATENATED MODULE: ./public/assets/Flipbook/Book1-01.png
/* harmony default export */ const Book1_01 = ({"src":"/_next/static/media/Book1-01.20fca427.png","height":2339,"width":1654,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAICAAAAAD/rdHkAAAAKUlEQVR42iWKUQoAIBTC3v0P3EfRbJgIsuEECEMMI4nO2pXnVsZK/9k8Nl0vo59bTPgAAAAASUVORK5CYII=","blurWidth":6,"blurHeight":8});
;// CONCATENATED MODULE: ./public/assets/Flipbook/Book1-02.png
/* harmony default export */ const Book1_02 = ({"src":"/_next/static/media/Book1-02.4bc53b0c.png","height":2339,"width":1654,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAICAAAAAD/rdHkAAAAG0lEQVR42mP49+//v3//GKDU//9AGs4DYlwUADb9L6fd78Q2AAAAAElFTkSuQmCC","blurWidth":6,"blurHeight":8});
;// CONCATENATED MODULE: ./public/icons/searchbook.svg
/* harmony default export */ const searchbook = ({"src":"/_next/static/media/searchbook.eebf66d0.svg","height":18,"width":19,"blurWidth":0,"blurHeight":0});
;// CONCATENATED MODULE: ./public/icons/moreoption.svg
/* harmony default export */ const moreoption = ({"src":"/_next/static/media/moreoption.efc5112f.svg","height":6,"width":24,"blurWidth":0,"blurHeight":0});
;// CONCATENATED MODULE: ./public/icons/fullscreen.svg
/* harmony default export */ const fullscreen = ({"src":"/_next/static/media/fullscreen.a79fe14e.svg","height":22,"width":22,"blurWidth":0,"blurHeight":0});
// EXTERNAL MODULE: ./node_modules/react-pageflip/build/index.js
var build = __webpack_require__(98320);
var build_default = /*#__PURE__*/__webpack_require__.n(build);
// EXTERNAL MODULE: ./node_modules/react-range/lib/index.js
var lib = __webpack_require__(96994);
;// CONCATENATED MODULE: ./app/components/FlipbookPlayer/page.jsx
/* __next_internal_client_entry_do_not_use__ default auto */ 
















function page() {
    const book = (0,react_.useRef)(null);
    const container = (0,react_.useRef)(null);
    const [progress, setProgress] = (0,react_.useState)(0);
    const [pageNumber, setPageNumber] = (0,react_.useState)(1);
    const [totalPage, setTotalPage] = (0,react_.useState)(105);
    const totalPageDive = Math.ceil(totalPage / 5);
    const handlePageChange = (page)=>{
        setCurrentPage(page);
        setProgress(page / 5); // Adjust the denominator based on the total number of pages
    };
    const handleSliderChange = (values)=>{
        const newProgress = values[0];
        setProgress(newProgress);
        const newPage = Math.round(newProgress * 5); // Adjust based on the total number of pages
        if (book.current) {
            const pageFlipObj = book.current.pageFlip();
            const currentPageIndex = pageFlipObj.getCurrentPageIndex();
            if (newPage < currentPageIndex) {
                for(let i = currentPageIndex; i > newPage; i--){
                    pageFlipObj.flipPrev();
                }
            } else if (newPage > currentPageIndex) {
                for(let i = currentPageIndex; i < newPage; i++){
                    pageFlipObj.flipNext();
                }
            }
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "fixed top-0 bottom-0 left-0 right-0 flex items-center justify-center overflow-hidden min-w-0 min-h-0 w-full",
        ref: container,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((build_default()), {
                width: 500,
                height: 907,
                size: "stretch",
                maxShadowOpacity: 0,
                showCover: true,
                mobileScrollSupport: true,
                className: "custom-pageflip",
                ref: book,
                onPageChange: handlePageChange,
                useMouseEvents: false,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            src: Flipbook_book,
                            className: "w-auto h-auto",
                            alt: ""
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            src: Book1_01,
                            className: "w-auto h-auto",
                            alt: ""
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            src: Book1_01,
                            className: "w-auto h-auto",
                            alt: ""
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            src: Book1_01,
                            className: "w-auto h-auto",
                            alt: ""
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            src: Book1_01,
                            className: "w-auto h-auto",
                            alt: ""
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            src: Book1_01,
                            className: "w-auto h-auto",
                            alt: ""
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                className: " left-4 bottom-4 w-10 h-10 lg:left-4 lg:top-[30%] md:top-[20%] md:absolute  md:mt-20",
                onClick: ()=>book.current.pageFlip().flipPrev(),
                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                    src: previous,
                    className: "w-full h-full",
                    alt: ""
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                className: " right-4 bottom-4 w-10 h-10 lg:right-4 lg:top-[30%] md:top-[20%] md:absolute md:mt-20 ",
                onClick: ()=>{
                    book.current.pageFlip().flipNext();
                    setPageNumber(pageNumber + 1);
                },
                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                    src: next,
                    className: "w-full h-full",
                    alt: ""
                })
            })
        ]
    });
}


/***/ })

};
;