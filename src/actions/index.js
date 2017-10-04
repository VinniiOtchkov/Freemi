export const selectPost = (postId) => {
  return {
    type: 'select_post',
    payload: postId
  };
};
