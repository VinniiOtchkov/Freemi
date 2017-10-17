import * as firebase from 'firebase';

export const config = {
  apiKey: 'AIzaSyDEKGnKtgGJ50L-dmXlG7MWXf5Q7ovZLqs',
  databaseURL: 'https://freemi-383ac.firebaseio.com',
  storageBucket: 'freemi-383ac.appspot.com'
};

firebase.initializeApp(config);
const posts = firebase.database().ref();
const storage = firebase.storage();

export const getRef = () => {
  return dispatch => {
    storage.refFromURL('gs://freemi-383ac.appspot.com/12345/Freemi1.jpg').getDownloadURL().then((url) => {
    console.log('URL', url
    )});
  };
};


export const fetchPosts = () => {
  return dispatch => {
    posts.on('value', snapshot => {
      console.log('Snapshot', snapshot.val())
      dispatch({
        type: 'FETCH',
        payload: snapshot.val()
      });
    });
  };
};

export const addPost = (post) => {
  return dispatch => {
    dispatch({
      type: "ADD",
      payload: posts.push(post)
    })
  }
};
