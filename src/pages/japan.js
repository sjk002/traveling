import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerJapan from '../components/BannerJapan'

import Japan1 from '../assets/images/Japan1.jpg'
import Japan2 from '../assets/images/Japan2.jpg'
import Japan3 from '../assets/images/Japan3.jpg'

const Japan = (props) => (
    <Layout>
        <Helmet>
            <title>Japan - Tokyo, Hakone</title>
            <meta name="description" content="Japan Page" />
        </Helmet>

        <BannerJapan />

        <div id="main">
            <section id="one">
                
            </section>
            <section id="two" className="spotlights">
                <section>
                    <Link to="https://www.google.com/maps/place/Akasaka+St,+Akasaka,+Minato+City,+Tokyo+107-0052,+Japan/@35.6701023,139.7314281,17z/data=!3m1!4b1!4m5!3m4!1s0x60188b81b0a9078f:0xffc2a291ae9d2ee!8m2!3d35.6701023!4d139.7336168" className="image">
                        <img src={Japan1} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Akasaka Street</h3>
                            </header>
                            <p>Akasaka Street is a modern shopping district located Tokyo. With a wide selection of dining options ranging from takoyaki street stalls to sushi bars, Akasaka Street is an entertaining and delicious place to visit. </p>
                            <ul className="actions">
                                <li><Link to="https://www.google.com/maps/place/Akasaka+St,+Akasaka,+Minato+City,+Tokyo+107-0052,+Japan/@35.6701023,139.7314281,17z/data=!3m1!4b1!4m5!3m4!1s0x60188b81b0a9078f:0xffc2a291ae9d2ee!8m2!3d35.6701023!4d139.7336168" className="button">Learn more</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <Link to="https://www.google.com/maps/place/Hakone,+Ashigarashimo+District,+Kanagawa,+Japan/@35.2323904,138.9775544,12z/data=!3m1!4b1!4m5!3m4!1s0x6019a20c60b2dc7b:0x2605bd17ac977b26!8m2!3d35.2323825!4d139.1069355" className="image">
                        <img src={Japan2} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Hakone</h3>
                            </header>
                            <p>Known for its clean air and beautiful nature, Hakone is one of the most refreshing cities in Japan. Activities include relaxing at hot springs, hiking up mountains, and cruising along Hakone-machi (a first class pirate ship). </p>
                            <ul className="actions">
                                <li><Link to="https://www.google.com/maps/place/Hakone,+Ashigarashimo+District,+Kanagawa,+Japan/@35.2323904,138.9775544,12z/data=!3m1!4b1!4m5!3m4!1s0x6019a20c60b2dc7b:0x2605bd17ac977b26!8m2!3d35.2323825!4d139.1069355" className="button">Learn more</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <Link to="https://www.google.com/maps/place/Sens%C5%8D-ji/@35.7147651,139.7944666,17z/data=!3m1!4b1!4m5!3m4!1s0x60188ec1a4463df1:0x6c0d289a8292810d!8m2!3d35.7147651!4d139.7966553" className="image">
                        <img src={Japan3} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Sensoji Temple</h3>
                            </header>
                            <p>Sensoji Temple is one of the hottest tourist spots in Japan. Located in Tokyo, Sensoji Temple attracts tourists with its giant red lantern and its line of street vendors.</p>
                            <ul className="actions">
                                <li><Link to="https://www.google.com/maps/place/Sens%C5%8D-ji/@35.7147651,139.7944666,17z/data=!3m1!4b1!4m5!3m4!1s0x60188ec1a4463df1:0x6c0d289a8292810d!8m2!3d35.7147651!4d139.7966553" className="button">Learn more</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>
            </section>
        </div>

    </Layout>
)

export default Japan