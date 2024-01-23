import GroupImage from './logo/Group (2).png'
import './nav-bar.sass'
import {NavLink} from "react-router-dom";
const NavBar = () => {
    return (
        <nav>
            <ul>
                <li><NavLink
                    style={({isActive}) => ({color: isActive ? '#e4c4ac' : 'white'})}
                    end
                    to={'/'}><img src={GroupImage} alt="logo"/></NavLink></li>
                <li><NavLink
                    style={({isActive}) => ({color: isActive ? '#e4c4ac' : 'white'})}
                    end
                    to={'/'}>Coffee house</NavLink></li>
                <li><NavLink
                    style={({isActive}) => ({color: isActive ? '#e4c4ac' : 'white'})}
                    end
                    to={'/ourcoffee'}>Our coffee</NavLink></li>
                <li><NavLink
                    style={({isActive}) => ({color: isActive ? '#e4c4ac' : 'white'})}
                    end
                    to={'/pleasure'}>For your pleasure</NavLink></li>
            </ul>
        </nav>
    )
}

export default NavBar