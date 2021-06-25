import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        count: 0,
        presetName: 'DIY your own Box'
    },
    mutations: {
        setPresetName(state, name) {
            state.presetName = name
        }
    }
})

export default store
