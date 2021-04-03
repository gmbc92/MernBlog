import React from 'react';
import { useSelector } from 'react-redux';
import Post from './Post/Post';
import useStyles from './styles';

const Posts = () => {
  // parametro do useSelector eh state.posts pq no reducers exportamos o combineReducers como posts
  //useSelector pega os parametros do store global do redux
  const posts = useSelector((state) => state.posts);
  const classes = useStyles();


  console.log(posts);

  return (
    <>
      <h1> POSTS </h1>
      <Post />
      <Post />
    </>
  );
};

export default Posts;
