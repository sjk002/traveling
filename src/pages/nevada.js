import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerNevada from '../components/BannerNevada'

import Nevada1 from '../assets/images/Nevada1.jpg'
import Nevada2 from '../assets/images/Nevada2.jpg'
import Nevada3 from '../assets/images/Nevada3.jpg'

const Nevada = (props) => (
    <Layout>
        <Helmet>
            <title>Nevada - Las Vegas</title>
            <meta name="description" content="Nevada Page" />
        </Helmet>

        <BannerNevada />

        <div id="main">
            <section id="two" className="spotlights">
                <section>
                    <Link to="/generic" className="image">
                        <img src={Nevada1} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Luxor Hotel</h3>
                            </header>
                            <p>The Luxor Hotel is well known for its mascot, the Sphinx. The Hotel is built in the shape of a pyramid to mimic the Great Pyramid of Giza. Activities include gambling at slot machines, dining at buffets, and watcing performances.</p>
                            <ul className="actions">
                                <li><Link to="/generic" className="button">Learn more</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <Link to="/generic" className="image">
                        <img src={Nevada2} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Bellagio Towers</h3>
                            </header>
                            <p>The Bellagio Towers is a luxury casino hotel known for its beautiful fountains. In these fountains, the Bellagio hosts a water show where anybody can come to watch.</p>
                            <ul className="actions">
                                <li><Link to="/generic" className="button">Learn more</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <Link to="/generic" className="image">
                        <img src={Nevada3} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>MGM Grand Hotel</h3>
                            </header>
                            <p>The MGM Grand Hotel is one of the tallest buildings in Las Vegas at 293 feet tall. Activities range from lazing at the wave pool, exercising at the TopGolf course, and enjoying the beautiful view.</p>
                            <ul className="actions">
                                <li><Link to="/generic" className="button">Learn more</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>
            </section>
        </div>

    </Layout>
)

export default Nevada