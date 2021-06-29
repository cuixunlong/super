import vue from 'vue'
import vuex from 'vuex'

import mutations from './mutations'

vue.use(vuex)

const store = new vuex.Store({
    state: {
        countlist: []
    },
    mutations
})

export default store