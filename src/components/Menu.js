import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const Menu = (props) => (
    <nav id="menu">
        <div className="inner">
            <ul className="links">
                <li><Link onClick={props.onToggleMenu} to="/">Home</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/japan">Japan</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/korea">Korea</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/california">California</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/nevada">Nevada</Link></li>
            </ul>
        </div>
        <a className="close" onClick={props.onToggleMenu} href="javascript:;">Close</a>
    </nav>
)

Menu.propTypes = {
    onToggleMenu: PropTypes.func
}

export default Menu
