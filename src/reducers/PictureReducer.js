let initialState = [];

export default(state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_PICS_PENDING':
      console.log('Request Pending');
      return state;

    case 'FETCH_PICS_FULFILLED':
      console.log('REQUEST DONE ', action.payload.data);
      return [...action.payload.data];

    case 'FETCH_PICS_REJECTED':
      console.log('Request Failed');
      return state;

    default:
      return state;
  }
};
