export default (state, action) => {
  switch(action.type){
    case 'ADD_POST':
      return {
        ...state,
        posts: [...state.posts, action.payload]
      }
    case 'GET_POSTS':
      return {
        ...state,
        posts: action.payload
      }
    case 'POST_ERROR':
      return {
        ...state,
        error: action.payload
      }
    default:
      return state;
  }
}