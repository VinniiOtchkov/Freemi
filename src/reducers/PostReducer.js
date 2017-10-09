let initialState = [];

export default(state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case 'FETCH_PENDING':
      console.log('Request Pending');
      return state;

    case 'FETCH_FULFILLED':
      console.log('REQUEST DONE ', action.payload.data);
      return [...action.payload.data];

    case 'FETCH_REJECTED':
      console.log('Request Failed');
      return state;

    case 'ADD':
      return [...state.action.payload];

    case 'ADD_FULFILLED':
      console.log('Add Fulfilled');
      return [...action.payload.data];

    case 'ADD_REJECTED':
      console.log('Add Rejected');
      return state;

    default:
      return state;
  }
};
