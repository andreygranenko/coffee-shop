import GroupImage from './logo/group.png'
import './nav-bar.sass'
const NavBar = (props) => {
    return (
        <nav>
            <ul>

                <li><a href="#"><img src={GroupImage} alt="logo"/></a></li>
                <li><a href="#">Coffee house</a></li>
                <li><a href="#">Our coffee</a></li>
                <li><a href="#">For your pleasure</a></li>
            </ul>
        </nav>
    )
}

export default NavBar