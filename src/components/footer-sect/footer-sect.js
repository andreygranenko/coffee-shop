import FooterLogo from '../../imgs/logo/footer_logo.png'
import './footer-sect.sass'
import '../../lines_style/lines-style.sass';
import MainLogo from "../../imgs/logo/about_logo.png";
const FooterSect = () => {
    return (
        <footer>
            <div className="footer_list">
                <ul>
                    <li><a href="#"><img src={FooterLogo} alt="ads"/></a></li>
                    <li><a href="#">Coffee house</a></li>
                    <li><a href="#">Our coffee</a></li>
                    <li><a href="#">For your pleasure</a></li>
                </ul>
            </div>
            <div className='lines'><img src={MainLogo} alt="main logo"/></div>
        </footer>
    )
}

export default FooterSect