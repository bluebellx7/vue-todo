import Vuex from 'vuex'

import defaultState from './state/state'
import mutations from './mutations/mutations'
import getters from './getters/getters'
import actions from './actions/actions'

// const isDev = process.env.NODE_ENV === 'development'

export default () => {
  const store = new Vuex.Store({
    // strict: isDev, // 是否采用严格模式
    state: defaultState,
    mutations,
    getters,
    actions,
    /**
     * 在Vue中State使用是单一状态树结构，应该的所有的状态都放在state里面，如果项目比较复杂，那state是一个很大的对象，store对象也将对变得非常大，难于管理。
     * module：可以让每一个模块拥有自己的state、mutation、action、getters,使得结构非常清晰，方便管理。
     **/
    modules: {
      a: {
        namespaced: true,
        state: {
          text: 'this is a text！'
        },
        mutations: {
          updateText (state, text) {
            console.log('a.state', state)
            state.text = text
          }
        },
        getters: {
          // 第三个参数，访问外层state
          textPlus (state, getters, rootState) {
            return state.text + rootState.b.text
          }
        },
        actions: {
          add ({ state, commit, rootState }) {
            // root: true 表示使用外层mutations
            commit('updateCount', { num: 1234567890 }, { root: true })
          }
        }
      },
      b: {
        namespaced: true,
        state: {
          text: 2
        },
        actions: {
          testAction ({ commit }) {
            commit('a/updateText', 'from b text', { root: true })
          }
        }
      }
    }
  })

  if (module.hot) {
    module.hot.accept([
      './state/state',
      './mutations/mutations',
      './actions/actions',
      './getters/getters'
    ], () => {
      const newState = require('./state/state').default
      const newMutations = require('./mutations/mutations').default
      const newActions = require('./actions/actions').default
      const newGetters = require('./getters/getters').default

      store.hotUpdate({
        state: newState,
        mutations: newMutations,
        getters: newGetters,
        actions: newActions
      })
    })
  }

  return store
}
