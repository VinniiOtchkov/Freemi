import React from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  Image,
} from 'react-native';
import { Provider } from 'react-redux';
import { StackNavigator } from 'react-navigation';
import Store from '../store';

import Header from './Header';
import PostList from './PostList';
import Footer from './Footer';
import InputForm from './Input';

const StoreInstance = Store();



const App = (props) => {
    return (
      <Provider store={StoreInstance}>
        <View style={styles.container}>
          <Header navigation={props.navigation} />
          <ScrollView bounces>
          <Image style={styles.icon} source={require('../../public/logo.png')} />
          <PostList />
          </ScrollView>
          <Footer navigation={props.navigation} />
        </View>
      </Provider>
    );
};

const Nav = StackNavigator({
  Home: {
    screen: App
  },
  InputForm: {
    screen: InputForm
  }
},
{
 headerMode: 'none',
});


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

export default Nav;
