import GroupImage from './logo/Group (2).png'
import './nav-bar.sass'
import {Link, NavLink} from "react-router-dom";
const NavBar = () => {
    return (
        <nav>
            <ul>
                <li><Link
                    // style={({isActive}) => ({
                    //   color: isActive ? '#e4c4ac' : 'white'
                    // })}
                    end
                    to={'/'}><img src={GroupImage} alt="logo"/></Link></li>
                <li><NavLink
                    className={'nav-link'}
/*                    style={({isActive}) => ({
                      color: isActive ? '#e4c4ac' : 'white'
                    })}*/
                    end
                    to={'/'}>Coffee house</NavLink></li>
                <li><NavLink
                    className={'nav-link'}
                    // style={({isActive}) => ({color: isActive ? '#e4c4ac' : 'white'})}
                    end
                    to={'/ourcoffee'}>Our coffee</NavLink></li>
                <li><NavLink
                    className={'nav-link'}

                    // style={({isActive}) => ({color: isActive ? '#e4c4ac' : 'white'})}
                    end
                    to={'/pleasure'}>For your pleasure</NavLink></li>
            </ul>
        </nav>
    )
}

export default NavBar