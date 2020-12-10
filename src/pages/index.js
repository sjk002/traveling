import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'

import JapanBanner from '../assets/images/JapanBanner.jpg'
import KoreaBanner from '../assets/images/KoreaBanner.jpg'
import CaliforniaBanner from '../assets/images/CaliforniaBanner.jpg'
import NevadaBanner from '../assets/images/NevadaBanner.jpg'

class HomeIndex extends React.Component {
    render() {

        return (
            <Layout>
                <Helmet
                    title="Shawn Kim - Traveling"
                    meta={[
                        { name: 'description', content: 'Sample' },
                        { name: 'keywords', content: 'sample, something' },
                    ]}
                >
                </Helmet>

                <Banner />

                <div id="main">
                    <section id="one" className="tiles">
                        <article style={{backgroundImage: `url(${JapanBanner})`}}>
                            <header className="major">
                                <h3>Japan</h3>
                                <p>Tokyo, Hakone</p>
                            </header>
                            <Link to="/japan" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${KoreaBanner})`}}>
                            <header className="major">
                                <h3>Korea</h3>
                                <p>Seoul, Namsan</p>
                            </header>
                            <Link to="/korea" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${CaliforniaBanner})`}}>
                            <header className="major">
                                <h3>California</h3>
                                <p>San Diego, Los Angeles</p>
                            </header>
                            <Link to="/california" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${NevadaBanner})`}}>
                            <header className="major">
                                <h3>Nevada</h3>
                                <p>Las Vegas</p>
                            </header>
                            <Link to="/nevada" className="link primary"></Link>
                        </article>
                        
                    </section>
                    <section id="two">
                        <div className="inner">
                            <header className="major">
                                <h2>About Me</h2>
                            </header>
                            <p>Currently, I'm a sophomore at UCSD and majoring in Cognitive Science with a specialization in Machine Learning. Because I have the luxury to travel the world, I made this website to share my experiences. I have four years of experience in Photoshop and two months with Reactjs. </p>
                        </div>
                    </section>
                </div>

            </Layout>
        )
    }
}

export default HomeIndex