export default function toStore(state = [], action) {
  console.log('State s REDUCERS =>', action.payload);
  if (action.type === 'ADD_USER') {
    return [
      ...state,
      action.payload
    ];

  } else {
    return state
  }
}