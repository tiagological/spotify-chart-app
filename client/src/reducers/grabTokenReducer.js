export default (state = '', action) => {
  switch (action.type) {
    case 'GRAB_TOKEN':
      return action.payload;
    default:
      return state;
  }
};
