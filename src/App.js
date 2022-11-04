import './styles/style.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Outlet
} from "react-router-dom";
import Home from './pages/home.js';
import Art from './pages/art.js';
import NavBar from './components/nav.js';

function App() {
  return (
      <div className= "app">
        <NavBar></NavBar>
<Outlet/>
      </div>
  );
}

export default App;

{/* <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes>
        <Routes>
          <Route path="/art" element={<Art/>}/>
        </Routes> */}