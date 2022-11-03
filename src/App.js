import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from './pages/home.js';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/art">Art</Link>
            </li>
            <li>
              <Link to="/photos">Photos</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/resume">Resume</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
