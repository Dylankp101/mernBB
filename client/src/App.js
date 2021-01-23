import Main from './views/Main'
import './App.css';
import Pirate from './views/Pirate';
import New from './views/New';
import {Router} from '@reach/router'

function App() {
  return (
    <div className="App">
      <Router>
        <Main path="/"/>
        <Pirate path="/:id"/>
        <New path="/new"/>
      </Router>
    </div>
  );
}

export default App;
