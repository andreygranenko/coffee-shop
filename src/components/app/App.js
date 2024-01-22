import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import MainPage from "../pages/MainPage";
import SecondPage from "../pages/SecondPage";
function App() {


  return (
      <Router>
          <div className="App">
              <Routes>
                  <Route path={'/'} element={<MainPage/>}/>
                  <Route path={'/ourcoffee'} element={<SecondPage/>}/>
              </Routes>
          </div>
      </Router>

  );
}

export default App;
