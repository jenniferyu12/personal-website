import '../styles/nav.module.css';
import '../styles/style.css';
import {
    Link
} from "react-router-dom";

const NavBar = () => {
    return (
        <nav>
            <Link to="/"><h1>Jennifer Yu</h1></Link>
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
    )
}

export default NavBar