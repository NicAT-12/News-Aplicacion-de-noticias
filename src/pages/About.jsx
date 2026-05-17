import "../styles/pages/About.scss";

const About = () => {
    return (
        <main className="about">
            <section className="about__hero">
                <div className="about__container">
                    <span className="about__eyebrow">
                        About The Platform
                    </span>

                    <h1 className="about__title">
                        A modern space to explore news with clarity and simplicity.
                    </h1>

                    <p className="about__description">
                        This project was created to provide a clean and focused reading experience,
                        helping users discover relevant articles from trusted global sources.
                    </p>
                </div>
            </section>

            <section className="about__content">
                <div className="about__container">
                    <article className="about__card">
                        <h2>Our Vision</h2>

                        <p>
                            We believe news platforms should feel simple, accessible and distraction-free.
                            The goal is to focus on content quality and readability.
                        </p>
                    </article>

                    <article className="about__card">
                        <h2>Technology</h2>

                        <p>
                            Built with React, Sass and modern frontend practices, this application
                            uses external APIs to provide updated information in real time.
                        </p>
                    </article>

                    <article className="about__card">
                        <h2>User Experience</h2>

                        <p>
                            Every section was designed with a minimal approach, emphasizing typography,
                            spacing and comfortable reading across all devices.
                        </p>
                    </article>
                </div>
            </section>
        </main>
    );
};

export default About;