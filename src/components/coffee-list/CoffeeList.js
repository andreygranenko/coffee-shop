import './coffeeList.sass';
import CoffeeImg from "../../imgs/other/coffee_item.png";


const CoffeeList = () => {
    const title = "AROMISTICO Coffee 1 kg";
    const filterOpt = "Brazil";
    const price = "6.99$";

    return (
      <div className="coffee-list">
        <a href="#">
          <div className={'coffee-list-item'}>
              <img src={CoffeeImg} alt=""/>
              <div className="title">{title}</div>
              <div className="filter-opt">{filterOpt}</div>
              <div className="price">{price}</div>
          </div>
        </a>

        <div className={'coffee-list-item'}>
          <a href="#">
            <img src={CoffeeImg} alt=""/>
            <div className="title">{title}</div>
            <div className="filter-opt">{filterOpt}</div>
            <div className="price">{price}</div>
          </a>
        </div>
        <div className={'coffee-list-item'}>
          <a href="#">
            <img src={CoffeeImg} alt=""/>
            <div className="title">{title}</div>
            <div className="filter-opt">{filterOpt}</div>
            <div className="price">{price}</div>
          </a>
        </div>
        <div className={'coffee-list-item'}>
          <a href="#">
            <img src={CoffeeImg} alt=""/>
            <div className="title">{title}</div>
            <div className="filter-opt">{filterOpt}</div>
            <div className="price">{price}</div>
          </a>
        </div>
        <div className={'coffee-list-item'}>
          <a href="#">
            <img src={CoffeeImg} alt=""/>
            <div className="title">{title}</div>
            <div className="filter-opt">{filterOpt}</div>
            <div className="price">{price}</div>
          </a>
        </div>
        <div className={'coffee-list-item'}>
          <a href="#">
            <img src={CoffeeImg} alt=""/>
            <div className="title">{title}</div>
            <div className="filter-opt">{filterOpt}</div>
            <div className="price">{price}</div>
          </a>
        </div>

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