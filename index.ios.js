import React from 'react';
import { AppRegistry, View, StyleSheet, Image } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers, compose} from 'redux';
import thunkMiddleWare from 'redux-thunk';
import createLogger from 'redux-logger';
import reducers from './src/reducers';

import Header from './src/components/Header';
import Search from './src/components/Search';
import PostList from './src/components/PostList';
import Footer from './src/components/Footer';


const App = () => (
<Provider store={createStore(reducers)}>
  <View style={styles.container}>
    <Header />
    <Image style={styles.icon} source={require('./public/logo.png')} />
    <Search />
    <PostList />
    <Footer />
  </View>
</Provider>
);

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
    icon: {
    top: 20,
    alignSelf: 'center',
    maxHeight: '80%',
    maxWidth: '80%'
  }
});

//Render it to the device
AppRegistry.registerComponent('Freemi', () => App);
