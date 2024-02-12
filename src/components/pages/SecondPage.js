import OurMain from "../ourMain/OurMain";
import OurBeans from "../ourBeans/OurBeans";
import CoffeeFilter from "../coffee-filter/CoffeeFilter";
import CoffeeList from "../coffee-list/CoffeeList";
import {useState} from "react";
import CoffeeImgBrazil from "../../imgs/other/coffee_item.png";
import CoffeeImgKenya from "../../imgs/other/peru_coffee.png";

const SecondPage = () => {
    const [inputValue, setInputValue] = useState('');
    const [activeFilters, setActiveFilters] = useState({brazil: false, kenya: false, columbia: false});
    const initialCoffeeList = [
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
        </>
    )
}

export default SecondPage