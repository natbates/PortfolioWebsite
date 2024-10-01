import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ThemeButton from './themeButton';
import "../styles/navBar.css";


const NavBar = () =>
{
    return (
        <div className="nav-bar">
            <nav>
                <Link to ="/">Home</Link>
                <Link to ="/about">About</Link>
                <Link to ="/projects">Projects</Link>
                <Link to ="/contact">Contact</Link>
            </nav>
        </div>
    );
}

export default NavBar;