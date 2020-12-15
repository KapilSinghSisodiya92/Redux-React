import { BUY_ICECREAM } from "./iceCreamTypes";

const initialState = {
  numberOfIceCreeams: 20,
};

const iceCreamReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        ...state,
        numberOfIceCreeams: state.numberOfIceCreeams - 1,
      };
    default:
      return state;
  }
};

export default iceCreamReducer;
