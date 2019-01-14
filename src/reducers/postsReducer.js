// maintain a list of posts
// set state default empty array
// returns the same state if there is no changes ie the type isn't the right type
export default (state = [], action) => {
  switch (action.type) {
    case 'FETCH_POSTS':
      return action.payload;
    default:
      return state;
  }
}