import * as api from '../api';


// toda action eh um obj que tem type e payload, em vez de return se tem dispatch
//async, usamos react-thunk

export const getPosts = () => async (dispatch) => {
  try {
    //const responde and get {data}
    const { data } = await api.fetchPosts();

    dispatch({ type: 'FETCH_ALL', payload: data });
  } catch (error) {
      console.log(error.message)
  }
};

export const createPost = (post) => async (dispatch) => {
  try {
    const { data} = await api.createPost(post);
    dispatch ({ type: 'CREATE', payload: data})
  } catch (error) {
    
  }
}