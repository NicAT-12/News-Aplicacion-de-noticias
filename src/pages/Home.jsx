import "../styles/pages/Home.scss";

const Home = () => {
    return (
        <main className="home">
            <section className="home__hero">
                <div className="home__content">
                    <span className="home__eyebrow">
                        Global News Platform
                    </span>

                    <h1 className="home__title">
                        Stay informed with reliable news from around the world.
                    </h1>

                    <p className="home__description">
                        Explore the latest articles, discover relevant topics and access trusted news in one clean and simple experience.
                    </p>

                    <div className="home__actions">
                        <a href="/articles" className="home__button home__button--primary">
                            Explore News
                        </a>

                        <a href="/about" className="home__button home__button--secondary">
                            Learn More
                        </a>
                    </div>
                </div>
            </section>

            <section className="home__features">
                <article className="home__feature">
                    <h2>Reliable Sources</h2>
                    <p>
                        Access articles from recognized publishers and media outlets across different regions.
                    </p>
                </article>

                <article className="home__feature">
                    <h2>Simple Search</h2>
                    <p>
                        Find news quickly by searching topics that matter to you.
                    </p>
                </article>

                <article className="home__feature">
                    <h2>Clean Reading</h2>
                    <p>
                        Enjoy a minimal interface designed to focus on content, clarity and readability.
                    </p>
                </article>
            </section>
        </main>
    );
};

export default Home;