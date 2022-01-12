export default function (state, action) {
  if (state === undefined) {
    return [];
  }
  if (action.type === 'SELECT_CITY') {
    return action.payload;
  } else {
    return state;
  }
}
