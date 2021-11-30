import { BREADS } from '../../data/breads';

const initialState = {
  breads: BREADS,
  filteredBreads: [],
  selected: null,
}

const BreadReducer = (state = initialState, action) => {
  return state;
}

export default BreadReducer;