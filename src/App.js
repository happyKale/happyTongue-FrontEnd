import "./App.css";
import React from "react";
import { Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";

import { history } from "./redux/ConfigureStore";
import { Grid } from "./elements";

import PostList from "./pages/PostList";
import PostDetail from "./pages/PostDetail";
import Login from "./pages/Login";
import Signup from './pages/Signup';
import PostWrite from './pages/PostWrite';
import Mypage from './pages/Mypage';

import Header from './shared/Header';
import Chat from './components/Chat';

function App() {
  return (
    <div className="App">
      <Grid margin="auto">
        <Header></Header>
        <ConnectedRouter history = {history}>
          <Route path="/" exact component={PostList}/>
          <Route path="/post/:id" exact component={PostDetail}/>
          <Route path="/login" exact component={Login}/>
          <Route path="/signup" exact component={Signup}/>
          <Route path="/write" exact component={PostWrite}/>
          <Route path="/mypage" exact component={Mypage}/>
          <Route path="/chat" exact component={Chat}/>
        </ConnectedRouter>
      </Grid>
    </div>
    
  );
}

export default App;
