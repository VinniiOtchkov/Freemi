const initialState = [];
import * as firebase from 'firebase'
import { config } from '../actions'

let someshit = [];

const posts = firebase.database().ref();
posts.on('value', snapshot => {
  snapshot.forEach(child => {
    console.log('child val', child.val())
    someshit.push(child.val())
  });
});

export default(state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_PENDING':
      console.log('Request Pending');
      return state;

    case 'FETCH':
      console.log('REQUEST DONE ', action.payload);
      return [...someshit];

    case 'FETCH_REJECTED':
      console.log('Request Failed');
      return state;

    case 'ADD':
      return state;

    case 'ADD_FULFILLED':
      console.log('Add Fulfilled', someshit);
      return [...someshit];

    case 'ADD_REJECTED':
      console.log('Add Rejected');
      return state;

    default:
      return state;
  }
};
