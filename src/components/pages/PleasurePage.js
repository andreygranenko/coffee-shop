import PleasureMain from "../pleasure-main/PleasureMain";
import OurGoods from "../our-goods/OurGoods";
import CoffeeImgBrazil from "../../imgs/other/coffee_item.png";
import CoffeeImgKenya from "../../imgs/other/peru_coffee.png";
import FooterSect from "../footer-sect/footer-sect";
import {useEffect} from "react";

const coffeeList = [
  {title: "AROMISTICO Coffee 1 kg", filterOpt: "Brazil", price: "6.99$", img: CoffeeImgBrazil},
  {title: "Espresso Supreme 500g", filterOpt: "Brazil", price: "6.99$", img: CoffeeImgBrazil},
  {title: "Morning Bliss Blend 750g", filterOpt: "Kenya", price: "6.99$", img: CoffeeImgKenya},
  {title: "Java Delight Dark Roast 1.2 kg", filterOpt: "Columbia", price: "6.99$", img: CoffeeImgBrazil},
  {title: "Morning Bliss Blend 750g", filterOpt: "Kenya", price: "6.99$", img: CoffeeImgKenya},
  {title: "AROMISTICO Coffee 1 kg", filterOpt: "Columbia", price: "6.99$", img: CoffeeImgBrazil},
  {title: "Caramel Delight 800g", filterOpt: "Colombia", price: "7.99$", img: CoffeeImgBrazil},
  {title: "Hazelnut Heaven 600g", filterOpt: "Brazil", price: "8.49$", img: CoffeeImgBrazil},
  {title: "Vanilla Dream 700g", filterOpt: "Kenya", price: "7.79$", img: CoffeeImgKenya},
  {title: "Dark Chocolate Infusion 900g", filterOpt: "Colombia", price: "8.99$", img: CoffeeImgKenya},
  {title: "Irish Cream 1 kg", filterOpt: "Brazil", price: "8.99$", img: CoffeeImgBrazil},
  {title: "Cinnamon Swirl 750g", filterOpt: "Kenya", price: "7.29$", img: CoffeeImgKenya}
];
const PleasurePage = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  return (
    <>
      <PleasureMain/>
      <OurGoods/>
      <div style={{paddingBottom: '35px'}} className="coffee-list">
        {coffeeList.map((item, index) => {
          return (
            <a href="#" key={index}>
              <div className={'coffee-list-item'}>
                <img src={item.img} alt=""/>
                <div className="title">{item.title.length > 23 ? `${item.title.slice(0, 23)}...` : item.title}</div>
                <div className="filter-opt">{item.filterOpt}</div>
                <div className="price">{item.price}</div>
              </div>
            </a>
          )
        })
        }
      </div>
      <FooterSect/>
    </>
  )
}

export default PleasurePage;