import { SET_IS_LOGIN } from './constants';

export const initState = {
   todo: '',
   isLogin: false,
   todos: [],
};

function reducer(state, action) {
   switch (action.type) {
      case SET_IS_LOGIN:
         return { ...initState, isLogin: action.payload };
      default:
         throw new Error('Invalid action!');
   }
}

export default reducer;
