import './main-section.sass'
import NavBar from "../nav-bar/nav-bar";
import MainInfo from "../main-info/main-info";

const MainSection = (props) => {
    return (
        <div className="main_section">
            <NavBar/>
            <MainInfo/>
        </div>
    )
}

export default MainSection