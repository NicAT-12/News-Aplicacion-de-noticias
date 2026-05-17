import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Moon, Sun } from "lucide-react";

import "../styles/components/NavBar.scss";

const NavBar = () => {
    const [darkMode, setDarkMode] = useState(() => {
        return localStorage.getItem("theme") === "dark";
    });

    useEffect(() => {
        document.body.classList.toggle("dark", darkMode);
        localStorage.setItem("theme", darkMode ? "dark" : "light");
    }, [darkMode]);

    return (
        <header className="navbar">
            <div className="navbar__container">
                <Link to="/" className="navbar__brand">
                    News
                </Link>

                <nav className="navbar__nav">
                    <Link to="/" className="navbar__link">
                        Home
                    </Link>

                    <Link to="/articles" className="navbar__link">
                        Articles
                    </Link>

                    <Link to="/about" className="navbar__link">
                        About
                    </Link>

                    <button
                        type="button"
                        className="navbar__theme"
                        onClick={() => setDarkMode(!darkMode)}
                    >
                        {darkMode ? <Sun size={18} /> : <Moon size={18} />}
                    </button>
                </nav>
            </div>
        </header>
    );
};

export default NavBar;