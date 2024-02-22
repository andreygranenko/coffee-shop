import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import MainPage from "../pages/MainPage";
import SecondPage from "../pages/SecondPage";
import PleasurePage from "../pages/PleasurePage";
import CoffeePage from "../pages/CoffeePage";
function App() {


  return (
      <Router>
          <div className="App">
              <Routes>
                  <Route path={'/'} element={<MainPage/>}/>
                  <Route path={'/ourcoffee'} element={<SecondPage/>}/>
                  <Route path={'/pleasure'} element={<PleasurePage/>}/>
                  <Route path={'/:coffeeId'} element={<CoffeePage/>}/>
              </Routes>
          </div>
      </Router>

  );
}

export default App;
