const data = [
  {
  item: 'Learn about reducers',
  completed: false,
  id: 3892987589,
  },
]

function UUID() {
  const x = () => String(Math.floor(Math.random() * 10))
  // random 10 digit int 
  return x()+x()+x()+x()+x()+x()+x()+x()+x()+x()
}

function reducer(state, action) {
  switch(action.type) {
    case 'ADD_TODO': 
      return [...state, {item: action.payload, completed: false, id: UUID() } ]
    case 'MARK': 
      //this is giving me a lot of trouble, because the spreader operator is shallow...hmm..
      const newState = [...state];
      newState[action.payload] = {
        ...state[action.payload],
        completed: !state[action.payload].completed
      };
      console.log(state[action.payload].completed)
      return newState; 
    case 'CLEAR': 
      return state.filter((item) => !item.completed)
    default:
      return state;
  }
}

export { data, reducer };