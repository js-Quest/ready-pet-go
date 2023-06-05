const initState = {
  userData: null
}

const reducer = (state = initState, action) => {
  switch (action.type){
    case 'TEST':
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default reducer;