import './ourBeans.sass';
import Coffee from '../../imgs/other/coffee-img.png';
import MainLogo from "../../imgs/logo/about_logo.png";

const OurBeans = () => {
    return (
        <div className={'beans'}>
            <div className={'beans-content'}>
                <img src={Coffee} alt="Coffee"/>
                <div className={'beans-content-info'}>
                    <h3>About our beans</h3>
                    <div className='lines'><img src={MainLogo} alt="main logo"/></div>
                    <p>Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.</p>
                    <p>
                        Afraid at highly months do things on at. Situation recommend objection do intention
                        so questions.
                        As greatly removed calling pleased improve an. Last ask him cold feel
                        met spot shy want. Children me laughing we prospect answered followed. At it went
                        is song that held help face.</p>
                </div>
            </div>
            <hr/>
        </div>
    )
}

export default OurBeans;