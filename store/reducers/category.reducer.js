import { CATEGORIES } from '../../data/categories';
import { SELECT_CATEGORY } from '../actions/category.actions';

const initialState = {
  categories: CATEGORIES,
  selected: null,
}

const CategoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_CATEGORY:
      return {
        ...state,
        selected: action.categoryID,
      };
    default:
      return state;
  }
}

export default CategoryReducer;