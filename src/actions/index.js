import axios from 'axios';

export const fetchPosts = () => {
  return {
    type: 'FETCH',
    payload: axios.get('https://freemi-383ac.firebaseio.com/.json')
  };
};

export const fetchPics = () => {
  return {
    type: 'FETCH_PICS',
    payload: axios.get('freemi-383ac.appspot.com/12345')
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
