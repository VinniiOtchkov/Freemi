import axios from 'axios';

export const fetchPosts = () => {
  console.log('WORKS!');
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

export const selectPost = (postId) => {
  return {
    type: 'SELECT',
    payload: postId
  };
};
