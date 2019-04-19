"use strict";

module.exports = {

    pageInitial: 1,

    getPagePrevious: function getPagePrevious(pageCurrent) {
        var valueDecrement = 1;
        return pageCurrent - valueDecrement || this.pageInitial;
    },
    getPageNext: function getPageNext(pageCurrent) {
        var valueIncrement = 1;
        return pageCurrent + valueIncrement;
    }
};