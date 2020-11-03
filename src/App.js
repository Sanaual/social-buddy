import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import PostDetails from './components/PostDetails/PostDetails';

function App() {
  return (
    <Router className="App">
      <Switch>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/post/:postId">
          <PostDetails></PostDetails>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
