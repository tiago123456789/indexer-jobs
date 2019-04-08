module.exports = {

    pageInitial: 1,

    getPagePrevious(pageCurrent) {
        const valueDecrement = 1;
        return ((pageCurrent - valueDecrement) || this.pageInitial)
    },

    getPageNext(pageCurrent) {
        const valueIncrement = 1;
        return (pageCurrent + valueIncrement);
    }
}