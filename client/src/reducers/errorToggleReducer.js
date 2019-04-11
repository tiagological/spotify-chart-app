export default (state = '', action) => {
  switch (action.type) {
    case 'ERROR_TOGGLE':
      return action.payload;
    default:
      return state;
  }
};
