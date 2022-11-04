import './styles/style.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from './pages/home.js';
import NavBar from './components/nav.js';

function App() {
  return (
    <Router>
      <div class = "app">
        <NavBar></NavBar>
        <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
