import MainLogo from '../../imgs/logo/main_logo1.png'
import './main-info.sass'
const MainInfo = () => {
    return (
        <div className="main_info">
            <h1>Everything You Love About Coffee</h1>
            <div className='main_lines'><img src={MainLogo} alt="main logo"/></div>
            <h3>We makes every day full of energy and taste <br/> Want to try our beans?</h3>
            <button>More</button>
        </div>
    )
}
export default MainInfo