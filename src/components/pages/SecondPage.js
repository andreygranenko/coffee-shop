import OurMain from "../ourMain/OurMain";
import OurBeans from "../ourBeans/OurBeans";
import CoffeeFilter from "../coffee-filter/CoffeeFilter";
import CoffeeList from "../coffee-list/CoffeeList";
import {useEffect, useState} from "react";
import CoffeeImgBrazil from "../../imgs/other/coffee_item.png";
import CoffeeImgKenya from "../../imgs/other/peru_coffee.png";
import FooterSect from "../footer-sect/footer-sect";

const SecondPage = () => {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

    const [inputValue, setInputValue] = useState('');
    const [activeFilters, setActiveFilters] = useState({brazil: false, kenya: false, columbia: false});
    const initialCoffeeList = [
      { id: 1, title: "AROMISTICO Coffee 1 kg", filterOpt: "Brazil", price: "6.99$", img: CoffeeImgBrazil },
      { id: 2, title: "Espresso Supreme 500g", filterOpt: "Brazil", price: "6.99$", img: CoffeeImgBrazil },
      { id: 3, title: "Morning Bliss Blend 750g", filterOpt: "Kenya", price: "6.99$", img: CoffeeImgKenya },
      { id: 4, title: "Java Delight Dark Roast 1.2 kg", filterOpt: "Columbia", price: "6.99$", img: CoffeeImgBrazil },
      { id: 5, title: "Morning Bliss Blend 750g", filterOpt: "Kenya", price: "6.99$", img: CoffeeImgKenya },
      { id: 6, title: "AROMISTICO Coffee 1 kg", filterOpt: "Columbia", price: "6.99$", img: CoffeeImgBrazil },
      { id: 7, title: "Caramel Delight 800g", filterOpt: "Colombia", price: "7.99$", img: CoffeeImgBrazil },
      { id: 8, title: "Hazelnut Heaven 600g", filterOpt: "Brazil", price: "8.49$", img: CoffeeImgBrazil },
      { id: 9, title: "Vanilla Dream 700g", filterOpt: "Kenya", price: "7.79$", img: CoffeeImgKenya },
      { id: 10, title: "Dark Chocolate Infusion 900g", filterOpt: "Colombia", price: "8.99$", img: CoffeeImgKenya },
      { id: 11, title: "Irish Cream 1 kg", filterOpt: "Brazil", price: "8.99$", img: CoffeeImgBrazil },
      { id: 12, title: "Cinnamon Swirl 750g", filterOpt: "Kenya", price: "7.29$", img: CoffeeImgKenya }
    ];
  const [coffeeList, setCoffeeList] = useState(initialCoffeeList);
    return (
        <>
          <OurMain/>
          <OurBeans/>
          <CoffeeFilter
            inputValue={inputValue}
            setInputValue={setInputValue}
            activeFilters={activeFilters}
            setActiveFilters={setActiveFilters}/>
          <CoffeeList
            coffeeList={coffeeList}
            setCoffeeList={setCoffeeList}
            initialCoffeeList={initialCoffeeList}
            activeFilters={activeFilters}
            inputValue={inputValue}/>
          <FooterSect/>
        </>
    )

}
export default SecondPage
