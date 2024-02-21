import FooterLogo from '../../imgs/logo/footer_logo.png'
import './footer-sect.sass'
import '../../lines_style/lines-style.sass';
import MainLogo from "../../imgs/logo/about_logo.png";
import {Link} from "react-router-dom";
const FooterSect = () => {
    return (
        <footer>
            <div className="footer_list">
                <ul>
                    <li><Link
                      to="/"
                      // reloadDocument
                      end><img src={FooterLogo} alt="ads"/></Link></li>
                    <li><Link
                      to={'/'}
                      // reloadDocument
                      end>Coffee house</Link></li>
                    <li><Link
                      to={'/ourcoffee'}
                      // reloadDocument
                      end>Our coffee</Link></li>
                    <li><Link
                      to={'/pleasure'}
                      // reloadDocument
                      end>For your pleasure</Link></li>
                </ul>
            </div>
            <div className='lines'><img src={MainLogo} alt="main logo"/></div>
        </footer>
    )
}

export default FooterSect