const Home = () => {
    return (
        <>

            <main>
                <section className="section-hero">
                    <div className="container grid grid-two-cols">
                        <div className="hero-content">
                            <p>We are the best IT sites to provide the latest feed...</p>
                            <h1>Welcome to Connex ! </h1>
                            <p>
                                Are you ready to have the latest new about our upcoming
                                events ? Get ready to have some Event with us !
                            </p>
                            <div className="btn btn-group">
                                <a href="/contact">
                                    <button className="btn">
                                        Connect Now
                                    </button>
                                </a>
                                <a href="/service">
                                    <button className="btn secondary-btn">
                                        Learn more
                                    </button>
                                </a>
                            </div>
                        </div>

                        {/*hero images */}
                        <div className="hero-images">
                            <img src="/images/pic5.jpg" alt="" width="500" height="500" />
                        </div>
                    </div>
                </section>
            </main>

            {/*2nd Section */}
            <section className="section-analytics">
                <div className="container grid grid-four-cols">
                    <div className="div1">
                        <h2>50+</h2>
                        <p>Registered Companies</p>
                    </div>
                    <div className="div1">
                        <h2>10000</h2>
                        <p>Happy Clients</p>
                    </div>
                    <div className="div1">
                        <h2>500+</h2>
                        <p>Well known Developers</p>
                    </div>
                    <div className="div1">
                        <h2>24/7</h2>
                        <p>Service</p>
                    </div>
                </div>
            </section>

            {/* 3rd section */}

            <section className="section-hero">
                <div className="container grid grid-two-cols">

                    {/*hero images */}
                    <div className="hero-images">
                        <img src="/images/pic4.jpg" alt="" width="660" height="400" />
                    </div>


                    <div className="hero-content">
                        <p>We are here to help you out.</p>
                        <h1>Get Started Today </h1>
                        <p>
                            Ready to take you first step towards a more efficient and secure IT infrastructure
                            Contact us today for free.
                        </p>
                        <div className="btn btn-group">
                            <a href="/contact">
                                <button className="btn">
                                    Connect Now
                                </button>
                            </a>
                            <a href="/services">
                                <button className="btn secondary-btn">
                                    Learn more
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </section>


          
            


        </>
    );
};



export default Home;












































































































