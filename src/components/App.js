import React from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  Image,
} from 'react-native';
import { Provider } from 'react-redux';
import Store from '../store';

import Header from './Header';
import PostList from './PostList';
import Footer from './Footer';

const StoreInstance = Store();

const App = () => {
    return (
      <Provider store={StoreInstance}>
        <View style={styles.container}>
          <Header />
          <ScrollView bounces>
          <Image style={styles.icon} source={require('../../public/logo.png')} />
          <PostList />
          </ScrollView>
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
