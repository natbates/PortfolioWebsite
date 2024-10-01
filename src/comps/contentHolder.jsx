import NavBar from "./navbar";
import ThemeButton from "./themeButton";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../pages/home';
import Projects from "../pages/projects";
import About from "../pages/about"
import Contact from "../pages/contact";

const ContentHolder = () =>
{
    return(
        <div>
            <ThemeButton />
            <Router>
                <div className = "top-bar-holder">
                    <NavBar />
                </div>
                <div className="content">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About/>} />
                        <Route path="/projects" element={<Projects/>} />
                        <Route path="/contact" element={<Contact/>} />
                    </Routes>
                </div>
            </Router>
        </div>
    );
}

export default ContentHolder;