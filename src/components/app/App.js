import './App.css';
import MainSection from "../main-section/main-section";
import AboutSect from "../about-sect/about-sect";
import BestSect from "../best-sect/best-sect";
import FirstCoffee from '../../imgs/logo/coffee1.png'
import SecondCoffee from '../../imgs/logo/coffee2.png'
import ThirdCoffee from '../../imgs/logo/coffee3.png'
function App() {
  const data = [
      {
          src: FirstCoffee,
          alt: 'Solimo Coffee',
          title: 'Solimo Coffee Beans 2 kg',
          price: 10.73
      },
      {
          src: SecondCoffee,
          alt: 'Presto Coffee',
          title: 'Presto Coffee Beans 1 kg',
          price: 15.99
      },
      {
          src: ThirdCoffee,
          alt: 'AROMISTICO Coffee',
          title: 'AROMISTICO Coffee 1 kg',
          price: 6.99
      }
  ]

  return (
    <div className="App">
        <MainSection/>
        <AboutSect/>
        <BestSect
        data={data}/>
    </div>
  );
}

export default App;
