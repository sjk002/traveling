import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerCalifornia from '../components/BannerCalifornia'

import California1 from '../assets/images/California1.jpg'
import California2 from '../assets/images/California2.jpg'
import California3 from '../assets/images/California3.jpg'

const California = (props) => (
    <Layout>
        <Helmet>
            <title>California - San Diego, Los Angeles</title>
            <meta name="description" content="California Page" />
        </Helmet>

        <BannerCalifornia />

        <div id="main">
            
            <section id="two" className="spotlights">
                <section>
                    <Link to="https://www.google.com/maps/place/Walt+Disney+Concert+Hall/@34.0554354,-118.2517279,17z/data=!3m1!4b1!4m5!3m4!1s0x80c2c64d9fbb11d3:0xb3728c2c3bff31b0!8m2!3d34.0553454!4d-118.249845" className="image">
                        <img src={California1} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Walt Disney Concert Hall</h3>
                            </header>
                            <p>Built in 2003, the Walt Disney Concert Hall hosts music performances and movie premieres. With an abstract exterior, the Walt Disney Concert Hall is an entertaining activity for young adults.</p>
                            <ul className="actions">
                                <li><Link to="https://www.google.com/maps/place/Walt+Disney+Concert+Hall/@34.0554354,-118.2517279,17z/data=!3m1!4b1!4m5!3m4!1s0x80c2c64d9fbb11d3:0xb3728c2c3bff31b0!8m2!3d34.0553454!4d-118.249845" className="button">Learn more</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <Link to="https://www.google.com/maps/place/The+Broad/@34.0541735,-118.2527101,17z/data=!3m1!4b1!4m5!3m4!1s0x80c2c64d122ca65d:0x98f1041528d11ebf!8m2!3d34.0541735!4d-118.2505214" className="image">
                        <img src={California2} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>The Broad Museum</h3>
                            </header>
                            <p>In Downtown Los Angeles, the Broad Museum holds around 2000 works of contemporary art and features 200 artists. For artists and curious individuals, the Broad Museum is a wonderful place to visit.</p>
                            <ul className="actions">
                                <li><Link to="https://www.google.com/maps/place/The+Broad/@34.0541735,-118.2527101,17z/data=!3m1!4b1!4m5!3m4!1s0x80c2c64d122ca65d:0x98f1041528d11ebf!8m2!3d34.0541735!4d-118.2505214" className="button">Learn more</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <Link to="https://www.google.com/maps/place/Black's+Beach/@32.8897396,-117.2708315,14z/data=!3m1!4b1!4m5!3m4!1s0x80dc068fc8820f2b:0xcea1029b3b92dc8f!8m2!3d32.8906575!4d-117.2534656" className="image">
                        <img src={California3} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Black's Beach</h3>
                            </header>
                            <p>Black's Beach is located in San Diego. It is about five minutes away from UCSD and often visited by students. While half of the beach allows nudity, the other half is a wonderful place to relax and enjoy the ocean.</p>
                            <ul className="actions">
                                <li><Link to="https://www.google.com/maps/place/Black's+Beach/@32.8897396,-117.2708315,14z/data=!3m1!4b1!4m5!3m4!1s0x80dc068fc8820f2b:0xcea1029b3b92dc8f!8m2!3d32.8906575!4d-117.2534656" className="button">Learn more</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>
            </section>
        </div>

    </Layout>
)

export default California