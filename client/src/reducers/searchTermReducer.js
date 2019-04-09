export default (state = '', action) => {
  switch (action.type) {
    case 'SEARCH_TERM':
      return action.payload;
    case 'CLEAR_SEARCH':
      return '';
    default:
      return state;
  }
};
