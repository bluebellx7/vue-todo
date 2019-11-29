export default {
  updateCount (state, { num, num1 }) {
    state.count = num
    console.log('updateCount第二个参数：', num1)
  }
}
