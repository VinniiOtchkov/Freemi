import axios from 'axios';
import Firebase from 'firebase';

export const fetchPosts = () => {
  return {
    type: 'FETCH',
    payload: axios.get('https://freemi-383ac.firebaseio.com/.json')
  };
};

export const addPost = (post) =>{
  return {
    type: 'ADD',
    payload: axios.post('https://freemi-383ac.firebaseio.com/.json', post)
  };
};
