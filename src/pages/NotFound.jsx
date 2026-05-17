import { Link } from "react-router-dom";

import "../styles/pages/NotFound.scss";

const NotFound = () => {
    return (
        <main className="not-found">
            <div className="not-found__content">
                <span className="not-found__code">
                    404
                </span>

                <h1 className="not-found__title">
                    Page not found
                </h1>

                <p className="not-found__description">
                    The page you are looking for does not exist or may have been moved.
                </p>

                <Link to="/" className="not-found__button">
                    Return Home
                </Link>
            </div>
        </main>
    );
};

export default NotFound;