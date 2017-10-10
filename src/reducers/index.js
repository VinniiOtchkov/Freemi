import { combineReducers } from 'redux';
import PostReducer from './PostReducer';
import SelectionReducer from './SelectionReducer';

const rootReducer = combineReducers({
  posts: PostReducer,
  selectedPostId: SelectionReducer
});

export default rootReducer;
