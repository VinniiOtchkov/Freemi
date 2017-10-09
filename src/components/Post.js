import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

const Post = (props) => {
  return (
    <p>{props.camera.title}</p>
  )
}


export default Post;
