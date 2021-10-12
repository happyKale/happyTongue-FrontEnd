import './App.css';
import {Grid, Image, Button} from "./elements"
import {Route, Provider} from "react-router-dom"
import PostList from "./pages/PostList";
import PostDetail from "./pages/PostDetail";
import Login from "./pages/Login";
import Signup from './pages/Signup';
import Header from './shared/Header';
import PostWrite from './pages/PostWrite';
import Mypage from './pages/Mypage';

function App() {
  return (
    <div className="App">
      <Grid margin="auto">
        <Header></Header>
        <Route path="/" exact component={PostList}/>
        <Route path="/detail" exact component={PostDetail}/>
        <Route path="/login" exact component={Login}/>
        <Route path="/signup" exact component={Signup}/>
        <Route path="/write" exact component={PostWrite}/>
        <Route path="/mypage" exact component={Mypage}/>
      </Grid>
    </div>
  );
}

export default App;
