import { CART } from '../../data/cart';
import { CONFIRM_CART } from '../actions/cart.actions';

const INITIAL_STATE = {
  items: CART,
  total: 27000,
  status: null,
  orderID: null,
};

const CartReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case CONFIRM_CART:
      return {
        ...state,
        status: action.status,
        orderID: action.orderID,
      };
    default:
      return state;
  }
};

export default CartReducer;