import { combineReducers } from 'redux';
import PostReducer from './PostReducer';
import SelectionReducer from './SelectionReducer';

export default combineReducers({
  posts: PostReducer,
  selectedPostId: SelectionReducer
});
