import './coffeeList.sass';
import {useEffect} from "react";
import {CSSTransition, TransitionGroup} from "react-transition-group";


const CoffeeList = ({activeFilters, coffeeList, initialCoffeeList, setCoffeeList, inputValue}) => {


    const checkFilter = () => {
      if (Object.values(activeFilters).includes(true)) {
        const newCoffeeList = initialCoffeeList.filter(item => {
          if (inputValue.length > 0) {
            return item.title.toLowerCase().includes(inputValue.toLowerCase()) ? activeFilters[item.filterOpt.toLowerCase()] : false;
          } else {
            return activeFilters[item.filterOpt.toLowerCase()];
          }
        });
        setCoffeeList(newCoffeeList);
      } else {
        inputValue.length > 0 ? checkInput() : setCoffeeList(initialCoffeeList);
      }
    }

    const checkInput = () => {
      if (inputValue.length > 0) {
        const newCoffeeList = initialCoffeeList.filter(item => {
          if (Object.values(activeFilters).includes(true)) {
            return item.title.toLowerCase().includes(inputValue.toLowerCase()) ? activeFilters[item.filterOpt.toLowerCase()] : false;
          } else {
            return item.title.toLowerCase().includes(inputValue.toLowerCase());
          }
        });
        setCoffeeList(newCoffeeList);
      } else {
        checkFilter();
      }
    }

    useEffect(() => {
      checkFilter();
    }, [activeFilters]);

    useEffect(() => {
      checkInput();
    }, [inputValue]);
    const coffeeListItems = coffeeList.map((item, index) => {
      return (
/*        <CSSTransition
          classNames={'coffee-list-item'}
          timeout={300}
          key={index}>*/
          <a href="#" key={index}>
            <div className={'coffee-list-item'}>
              <img src={item.img} alt=""/>
              <div className="title">{item.title.length > 23 ? `${item.title.slice(0, 23)}...` : item.title}</div>
              <div className="filter-opt">{item.filterOpt}</div>
              <div className="price">{item.price}</div>
            </div>
          </a>
        // </CSSTransition>
      )
    });
    return (
      <div className="coffee-list">
        {/*<TransitionGroup>*/}
          {coffeeListItems}
        {/*</TransitionGroup>*/}
      </div>
    )
}

export default CoffeeList;
/*      <Container style={{width: '900px'}} >
        <Row style={{margin: '0 auto'} } lg={4} className="justify-content-center">
          <Col md={4} lg={"3"}><div className={'coffee-list-item'}>
            <a href="#">
              <img src={CoffeeImg} alt=""/>
              <div className="title">{title}</div>
              <div className="filter-opt">{filterOpt}</div>
              <div className="price">{price}</div>
            </a>
          </div></Col>
          <Col md={"auto"} lg={"3"}><div className={'coffee-list-item'}>
            <a href="#">
              <img src={CoffeeImg} alt=""/>
              <div className="title">{title}</div>
              <div className="filter-opt">{filterOpt}</div>
              <div className="price">{price}</div>
            </a>
          </div></Col>
          <Col md={4} lg={"3"}><div className={'coffee-list-item'}>
            <a href="#">
              <img src={CoffeeImg} alt=""/>
              <div className="title">{title}</div>
              <div className="filter-opt">{filterOpt}</div>
              <div className="price">{price}</div>
            </a>
          </div></Col>
          <Col md={4} lg={"3"} ><div className={'coffee-list-item'}>
            <a href="#">
              <img src={CoffeeImg} alt=""/>
              <div className="title">{title}</div>
              <div className="filter-opt">{filterOpt}</div>
              <div className="price">{price}</div>
            </a>
          </div></Col>
          <Col md={4} lg={"3"}><div className={'coffee-list-item'}>
            <a href="#">
              <img src={CoffeeImg} alt=""/>
              <div className="title">{title}</div>
              <div className="filter-opt">{filterOpt}</div>
              <div className="price">{price}</div>
            </a>
          </div></Col>
          <Col md={4} lg={"3"}><div className={'coffee-list-item'}>
            <a href="#">
              <img src={CoffeeImg} alt=""/>
              <div className="title">{title}</div>
              <div className="filter-opt">{filterOpt}</div>
              <div className="price">{price}</div>
            </a>
          </div></Col>
        </Row>
      </Container>*/