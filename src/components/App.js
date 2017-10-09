import React from 'react';
import {
  View,
  StyleSheet,
  Image,
} from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promises from 'redux-promise-middleware';
import reducers from '../reducers';
import Header from './Header';
import Search from './Search';
import ImageUpload from './ImageUpload';
import PostList from './PostList';
import Footer from './Footer';

const store = createStore(reducers, applyMiddleware(promises()));

const App = () => {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Header />
          <Image style={styles.icon} source={require('../../public/logo.png')} />
          <Search />
          <ImageUpload />
          <PostList />
          <Footer />
        </View>
      </Provider>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  icon: {
    alignSelf: 'center',
    maxHeight: '80%',
    maxWidth: '80%'
  }
});

export default App;
