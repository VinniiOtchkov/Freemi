import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';

class PostList extends Component {
  render() {
    console.log('THIS.PROPS', this.props);
    console.log('THIS.PROPS.POSTS', this.props.posts);
    return(
      <Text></Text>
    );
  }
}

const mapStateToProps = state => {
  return { posts: state.posts }
};

export default connect(mapStateToProps)(PostList);
