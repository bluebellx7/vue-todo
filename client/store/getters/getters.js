// Vuex中的getters相当于Vue中的计算属性
export default {
  fullName (state) {
    return `${state.firstName}-${state.lastName}`
  }
}
