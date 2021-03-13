export default {
    async OPEN_SIDEBAR({ commit }) {
        await commit('OPEN_SIDEBAR');
    },
    async CLOSE_SIDEBAR({ commit }) {
        await commit('CLOSE_SIDEBAR');
    },
    async TOGGLE_SIDEBAR({ commit, state }) {
        await commit(state.isOpenSidebar ? 'CLOSE_SIDEBAR' : 'OPEN_SIDEBAR');
    },
    async SHOW_DATA({ commit }) {
        await commit('SHOW_DATA');
    },
    async HIDE_DATA({ commit }) {
        await commit('HIDE_DATA');
    },
    async TOGGLE_DATA({ commit, state }) {
        await commit(state.isShowData ? 'HIDE_DATA' : 'SHOW_DATA');
    }
}