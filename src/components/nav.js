import navStyles from'../styles/nav.module.css';
import '../styles/style.css';
import {
    Link
} from "react-router-dom";
import {useState} from 'react';
import Resume from "../assets/JenniferYuResume.pdf";

const NavBar = () => {

    const [showMenu, setShowMenu] = useState(false);

    const showLinks = () => {
        setShowMenu(!showMenu);
    }

    return (
        <nav>
            <div className={navStyles.navHeader}>
            <Link to="/"><h1 onClick={() => {if(showMenu) showLinks()}}>Jennifer Yu</h1></Link>
                <button className={navStyles.navToggle} onClick={showLinks}>
                    <div className={navStyles.bar}></div>
                    <div className={navStyles.bar}></div>
                    <div className={navStyles.bar}></div>
                </button>
            </div>
            <ul className={showMenu ? navStyles.hamburgerList : navStyles.list} onClick={showLinks}>
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
                    <a href={Resume} target="_blank" rel="noreferrer">Resume</a>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar;