import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerKorea from '../components/BannerKorea'

import Korea1 from '../assets/images/Korea1.jpg'
import Korea2 from '../assets/images/Korea2.jpg'
import Korea3 from '../assets/images/Korea3.jpg'

const Korea = (props) => (
    <Layout>
        <Helmet>
            <title>Korea - Seoul, Namsan</title>
            <meta name="description" content="Korea Page" />
        </Helmet>

        <BannerKorea />

        <div id="main">
            <section id="one">

            </section>
            <section id="two" className="spotlights">
                <section>
                    <Link to="https://www.google.com/maps/place/N+Seoul+Tower/@37.5511694,126.9860379,17z/data=!3m1!4b1!4m5!3m4!1s0x357ca257a88e6aa9:0x5cf8577c2e7982a5!8m2!3d37.5511694!4d126.9882266" className="image">
                        <img src={Korea1} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Namsan Tower</h3>
                            </header>
                            <p>Namsan Tower is the second highest point in Seoul. At 236 meters tall, Namsan Tower is a beautiful location for photography and city viewing.</p>
                            <ul className="actions">
                                <li><Link to="https://www.google.com/maps/place/N+Seoul+Tower/@37.5511694,126.9860379,17z/data=!3m1!4b1!4m5!3m4!1s0x357ca257a88e6aa9:0x5cf8577c2e7982a5!8m2!3d37.5511694!4d126.9882266" className="button">Learn more</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <Link to="https://www.google.com/maps/place/Gyeongbokgung+Palace/@37.579617,126.9748523,17z/data=!3m1!4b1!4m5!3m4!1s0x357ca2c74aeddea1:0x8b3046532cc715f6!8m2!3d37.579617!4d126.977041" className="image">
                        <img src={Korea2} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Gyeongbokgung Palace</h3>
                            </header>
                            <p>Built in 1395, Gyeongbokgung Palace is the largest of the Five Grand Palaces housing King Sejong the Great. Gyeongbokung Palace is a great place to learn about Korean History and the Joseon Dynasty.</p>
                            <ul className="actions">
                                <li><Link to="https://www.google.com/maps/place/Gyeongbokgung+Palace/@37.579617,126.9748523,17z/data=!3m1!4b1!4m5!3m4!1s0x357ca2c74aeddea1:0x8b3046532cc715f6!8m2!3d37.579617!4d126.977041" className="button">Learn more</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <Link to="https://www.google.com/maps/place/Seoul,+South+Korea/@37.579617,126.9748523,17z/data=!4m5!3m4!1s0x357ca28b61c565cd:0x858aedb4e4ea83eb!8m2!3d37.566535!4d126.9779692" className="image">
                        <img src={Korea3} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Seoul</h3>
                            </header>
                            <p>Seoul is the capital and heart of Korea. Seoul is a developing rapidly and is home to the headquarters of Samsung, LG, and Hyundai. Activities range from visiting historic palaces to exploring modern shopping districts.</p>
                            <ul className="actions">
                                <li><Link to="https://www.google.com/maps/place/Seoul,+South+Korea/@37.579617,126.9748523,17z/data=!4m5!3m4!1s0x357ca28b61c565cd:0x858aedb4e4ea83eb!8m2!3d37.566535!4d126.9779692" className="button">Learn more</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>
            </section>
        </div>

    </Layout>
)

export default Korea