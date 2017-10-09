import React from 'react';
import { View, StyleSheet } from 'react-native';
import { FormInput } from 'react-native-elements';

const Search = () => {
  return (
  <View style={styles.form}>
    <FormInput placeholder="Search" />
  </View>
  );
};

const styles = StyleSheet.create({
  form: {
    paddingTop: 0
  }
});

export default Search;
