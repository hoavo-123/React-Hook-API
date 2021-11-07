import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadPosts } from './redux/actions/PostAction';
import logo from './logo.svg';
import './App.css';
import PostList from './components/PostList';
import User from './components/User';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';

import RouterURL from './RouterURL/RouterURL';
import { BrowserRouter as Router } from "react-router-dom";


function App() {
  // const data = useSelector(state => state.posts.data);
  // const isLoading = useSelector(state => state.posts.isLoading);

  // const dispatch = useDispatch();
  // useEffect(() =>{
  //   dispatch(loadPosts());
  // },[dispatch]);

  return (
    <Router>
      <div className="App">
        <RouterURL></RouterURL>
      </div>
    </Router>

  );
}

export default App;
