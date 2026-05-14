import { Link } from 'react-router-dom';
import '../styles/pages/Home.scss';

const Home = () => {
    return (
        <main className='home'>
            <section className="home__hero">
                <h1 className='home__title'>Stay informed</h1>
                <p className='home__subtitle'>Real-time news from trusted global sources.</p>
                <nav className='home__navigation'>
                    <Link to="/sources" className='home__nav-card'>
                        <h2>Sources</h2>
                        <p>Browse global news providers.</p>
                    </Link>
                </nav>
            </section>
        </main>
    )
};

export default Home;