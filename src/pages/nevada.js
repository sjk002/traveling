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
                    <Link to="https://www.google.com/maps/place/Luxor+Hotel+%26+Casino/@36.09551,-115.1782559,17z/data=!3m1!4b1!4m8!3m7!1s0x80c8c5ce3e5cb447:0xb5a742eafd00138!5m2!4m1!1i2!8m2!3d36.09551!4d-115.1760672" className="image">
                        <img src={Nevada1} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Luxor Hotel</h3>
                            </header>
                            <p>The Luxor Hotel is well known for its mascot, the Sphinx. The Hotel is built in the shape of a pyramid to mimic the Great Pyramid of Giza. Activities include gambling at slot machines, dining at buffets, and watcing performances.</p>
                            <ul className="actions">
                                <li><Link to="https://www.google.com/maps/place/Luxor+Hotel+%26+Casino/@36.09551,-115.1782559,17z/data=!3m1!4b1!4m8!3m7!1s0x80c8c5ce3e5cb447:0xb5a742eafd00138!5m2!4m1!1i2!8m2!3d36.09551!4d-115.1760672" className="button">Learn more</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <Link to="https://www.google.com/maps/place/Bellagio+Hotel+and+Casino/@36.1126264,-115.1788938,17z/data=!3m1!4b1!4m8!3m7!1s0x80c8c430cb5147bd:0x82f2c7c5d9d10d84!5m2!4m1!1i2!8m2!3d36.1126264!4d-115.1767051" className="image">
                        <img src={Nevada2} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Bellagio Towers</h3>
                            </header>
                            <p>The Bellagio Towers is a luxury casino hotel known for its beautiful fountains. In these fountains, the Bellagio hosts a water show where anybody can come to watch.</p>
                            <ul className="actions">
                                <li><Link to="https://www.google.com/maps/place/Bellagio+Hotel+and+Casino/@36.1126264,-115.1788938,17z/data=!3m1!4b1!4m8!3m7!1s0x80c8c430cb5147bd:0x82f2c7c5d9d10d84!5m2!4m1!1i2!8m2!3d36.1126264!4d-115.1767051" className="button">Learn more</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <Link to="https://www.google.com/maps/place/MGM+Grand/@36.102576,-115.172442,17z/data=!3m2!4b1!5s0x80c8c5cc93820bd3:0x6c1168e3473cbd5b!4m8!3m7!1s0x80c8c5cc93820e25:0x9dd94505bd76107f!5m2!4m1!1i2!8m2!3d36.102576!4d-115.1702533" className="image">
                        <img src={Nevada3} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>MGM Grand Hotel</h3>
                            </header>
                            <p>The MGM Grand Hotel is one of the tallest buildings in Las Vegas at 293 feet tall. Activities range from lazing at the wave pool, exercising at the TopGolf course, and enjoying the beautiful view.</p>
                            <ul className="actions">
                                <li><Link to="https://www.google.com/maps/place/MGM+Grand/@36.102576,-115.172442,17z/data=!3m2!4b1!5s0x80c8c5cc93820bd3:0x6c1168e3473cbd5b!4m8!3m7!1s0x80c8c5cc93820e25:0x9dd94505bd76107f!5m2!4m1!1i2!8m2!3d36.102576!4d-115.1702533" className="button">Learn more</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>
            </section>
        </div>

    </Layout>
)

export default Nevada