export default (state = [], action) => {
  switch (action.type) {
    case 'FETCH_PLAYLISTS':
      return action.payload;
    default:
      return state;
  }
};
