import { Data } from '@/Components/Docs/DocLayout';

export type State = {
  data: Data[];
  selected: Data[];
};

export const docReducer = (state: State, action) => {
  switch (action.type) {
    case 'SET_DATA':
      return {
        ...state,
        data: action.payload,
      };
      break;
    case 'DELETE':
      return { ...state, selected: [], data: [...state.data.filter((el) => !action.payload.includes(el._id))] };
    case 'UPDATE':
      return {
        ...state,
        data: [
          ...state.data.map((el) => {
            if (el._id == action.payload._id) {
              return action.payload;
            } else {
              return el;
            }
          }),
        ],
      };
    case 'ADD':
      return { ...state, data: [...state.data, action.payload] };
    case 'SELECT_ALL':
      return { ...state, selected: state.data };
    case 'UNSELECT_ALL':
      return { ...state, selected: [] };
    case 'SELECT_ONE':
      return { ...state, selected: [...state.selected, action.payload] };
    case 'UNSELECT_ONE':
      return { ...state, selected: [...state.selected.filter((el) => el._id != action.payload._id)] };
    default:
      break;
  }
};
