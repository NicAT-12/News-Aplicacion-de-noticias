import { NavLink } from "react-router-dom";
import '../styles/components/NavBar.scss';

const Navbar = () => {
    return (
        <header className="navbar">
            <div className="navbar__logo">News</div>

            <nav className="navbar__links">
                <NavLink
                    end to="/"
                    className={({ isActive }) =>
                        isActive ? "active" : ""
                    }
                    >Home
                </NavLink>

                <NavLink
                    to="/sources"
                    className={({ isActive }) =>
                        isActive ? "active" : ""
                    }
                    >Sources
                </NavLink>
            </nav>
        </header>
    );
};

export default Navbar;