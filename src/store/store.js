import Vue from "vue";
import Vuex from "vuex";
import VuexPersistence from 'vuex-persist'

const vuexLocal = new VuexPersistence({
    storage: window.localStorage,
});

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        soundEnabled: true,
        navigation: {
            nav1: '/',
            nav2: '/directory',
            nav3: '/time-loop',
            nav4: '/branches',
            nav5: '/missions',
            options: {
                'Home': '/',
                'Miss Minutes': '/quiz',
                'Settings': '/settings',
                'Directory': '/directory',
                'Time loop': '/time-loop',
                'Branches': '/branches',
                'Missions': '/missions',
                'Time keepers': '/time-keepers',
                'Personnel': '/personnel',
                'Draw': '/draw',
            }
        }
    },
    mutations: {
        soundEnabled(state, value) {
            state.soundEnabled = value
            localStorage.setItem('store', state);
        },
        navOption(state, {option, value}) {
            state.navigation[option] = value
            localStorage.setItem('store', state);
        }
    },
    plugins: [vuexLocal.plugin]
})