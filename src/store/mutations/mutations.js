export default {
    OPEN_SIDEBAR(state) {
        window.document.body.style.overflow = 'hidden';
        state.isOpenSidebar = true;
    },
    CLOSE_SIDEBAR(state) {
        window.document.body.removeAttribute('style');
        state.isOpenSidebar = false;
    },
    HIDE_DATA(state) {
        state.isShowData = false;
    },
    SHOW_DATA(state) {
        state.isShowData = true;
    },
    REMOVE_COIN(state, item) {
        state.coins = state.coins.filter(i => i !== item);
    }
}