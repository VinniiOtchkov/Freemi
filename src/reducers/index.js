import { combineReducers } from 'redux';
import PostReducer from './PostReducer';
import PictureReducer from './PictureReducer';
import SelectionReducer from './SelectionReducer';

const rootReducer = combineReducers({
  posts: PostReducer,
  pictures: PictureReducer,
  selectedPostId: SelectionReducer
});

export default rootReducer;
