const initialState = {
  orderList: [],
}

export const state = () => initialState

export const mutations = {
  RESET(state) {
    Object.keys(state).forEach((key) => {
      state[key] = initialState[key]
    })
  },
  ADD_FOOD_TO_ORDER_LIST(state, food) {
    const formattedFood = { ...food }
    formattedFood.quantity = 1
    state.orderList.push(formattedFood)
  },
  REMOVE_FOOD_FROM_ORDER_LIST(state, foodId) {
    state.orderList = state.orderList.filter((food) => food.id !== foodId)
  },
}

export const getters = {
  totalPrice: (state) => {
    return state.orderList.reduce(
      (prev, next) => prev + next.price * next.quantity,
      0
    )
  },
  orderListCount: (state) => state.orderList.length,
}
