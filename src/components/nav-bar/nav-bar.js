import GroupImage from './logo/Group (2).png'
import './nav-bar.sass'
import {NavLink} from "react-router-dom";
const NavBar = () => {
    return (
        <nav>
            <ul>
                <li><NavLink to={'/'}><img src={GroupImage} alt="logo"/></NavLink></li>
                <li><NavLink to={'/'}>Coffee house</NavLink></li>
                <li><NavLink to={'/ourcoffee'}>Our coffee</NavLink></li>
                <li><a href="#">For your pleasure</a></li>
            </ul>
        </nav>
    )
}

export default NavBar