export default function(state, action) {
  if(state === undefined) {
    return null;
  }

  // Case statement instead of if else
  switch(action.type) {
    case 'SELECT_FLAT':
      return action.payload;
    default:
      return state;
  }
}
