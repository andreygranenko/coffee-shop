import Coffee from "../../imgs/other/coffee-preview.png";
import BrazilDet from "../../imgs/other/coffee-beans-brazil.png";
import MainLogo from "../../imgs/logo/about_logo.png";
import Kenya1 from "../../imgs/other/coffee-kenya.webp";
import Kenya2 from "../../imgs/other/coffee-kenya2.jpg";
import Kenya3 from "../../imgs/other/coffee-kenya-3.jpg";
import './singleCoffeeInfo.sass';
import CoffeeImgBrazil from "../../imgs/other/coffee_item.png";
import CoffeeImgKenya from "../../imgs/other/peru_coffee.png";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
const SingleCoffeeInfo = () => {
  const coffeeList = [
    { id: 1, title: "AROMISTICO Coffee 1 kg", filterOpt: "Brazil", price: "6.99$", img: CoffeeImgBrazil, imgDet:  BrazilDet},
    { id: 2, title: "Espresso Supreme 500g", filterOpt: "Brazil", price: "6.99$", img: CoffeeImgBrazil, imgDet:  Kenya1 },
    { id: 3, title: "Morning Bliss Blend 750g", filterOpt: "Kenya", price: "6.99$", img: CoffeeImgKenya, imgDet:  Kenya2 },
    { id: 4, title: "Java Delight Dark Roast 1.2 kg", filterOpt: "Columbia", price: "6.99$", img: CoffeeImgBrazil, imgDet:  Kenya3 },
    { id: 5, title: "Morning Bliss Blend 750g", filterOpt: "Kenya", price: "6.99$", img: CoffeeImgKenya, imgDet:  Coffee},
    { id: 6, title: "AROMISTICO Coffee 1 kg", filterOpt: "Columbia", price: "6.99$", img: CoffeeImgBrazil, imgDet:  Coffee },
    { id: 7, title: "Caramel Delight 800g", filterOpt: "Colombia", price: "7.99$", img: CoffeeImgBrazil, imgDet:  BrazilDet },
    { id: 8, title: "Hazelnut Heaven 600g", filterOpt: "Brazil", price: "8.49$", img: CoffeeImgBrazil, imgDet:  BrazilDet },
    { id: 9, title: "Vanilla Dream 700g", filterOpt: "Kenya", price: "7.79$", img: CoffeeImgKenya, imgDet:  Kenya2 },
    { id: 10, title: "Dark Chocolate Infusion 900g", filterOpt: "Colombia", price: "8.99$", img: CoffeeImgKenya, imgDet:  BrazilDet },
    { id: 11, title: "Irish Cream 1 kg", filterOpt: "Brazil", price: "8.99$", img: CoffeeImgBrazil, imgDet:  Kenya3 },
    { id: 12, title: "Cinnamon Swirl 750g", filterOpt: "Kenya", price: "7.29$", img: CoffeeImgKenya, imgDet:  Coffee }
  ];
  const {coffeeId} = useParams();
  const [coffeeItem, setCoffeeItem] = useState(null);
  useEffect(() => {
    setCoffeeItem(coffeeList.find(item => item.id === +coffeeId));
  }, [coffeeItem]);
  if (!coffeeItem) {
    return <h1>Loading...</h1>
  }

  return (
    <div className={'coffee'}>
      <div className={'coffee-content'}>
        <img src={coffeeItem.imgDet} alt={coffeeItem.title}/>
        <div className={'coffee-content-info'}>
          <h3>About it</h3>
          <div className='lines'><img src={MainLogo} alt="main logo"/></div>
          <p>Country: {coffeeItem.filterOpt}</p>
          <p>
            Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <p>
            Price: {coffeeItem.price}
          </p>
        </div>
      </div>
    </div>
  );
}

export default SingleCoffeeInfo;