import Coffee from "../../imgs/other/coffee-goods.png";
import MainLogo from "../../imgs/logo/about_logo.png";
import './ourGoods.sass'
const OurGoods = () => {
  return (
    <div className={'goods'}>
      <div className={'goods-content'}>
        <img src={Coffee} alt="Coffee"/>
        <div className={'goods-content-info'}>
          <h3>About our goods</h3>
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

export default OurGoods;