import { Switch, Route} from 'react-router-dom';
import Home from './pages/Home'
import Game from "./pages/Game"

function App() {
  return (
    <div className="App">
      <Switch>
         <Route
              exact
              path="/"
              render={(props) => <Home {...props} />}
          />     
          <Route
          exact
          path="/question"
          render={(props) => <Game {...props} />}
          />
      </Switch>
    </div>
  );
}

export default App;
