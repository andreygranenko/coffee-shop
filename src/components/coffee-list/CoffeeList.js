import './coffeeList.sass';
import CoffeeImg from "../../imgs/other/coffee_item.png";
import {Col, Container} from "react-bootstrap";
import {Row} from "react-bootstrap";

const CoffeeList = props => {
    const title = "AROMISTICO Coffee 1 kg";
    const filterOpt = "Brazil";
    const price = "6.99";

    return (
        <Container>
            <Row>
                <Col>Hello</Col>
                <Col>Hey</Col>
            </Row>
        </Container>
    )
}

export default CoffeeList;

// <Container>
//     <Row>
//         <Col md={4} lg={4}><div className={'coffee-list-item'}>
//             <a href="#">
//                 <img src={CoffeeImg} alt=""/>
//                 <div className="title">{title}</div>
//                 <div className="filter-opt">{filterOpt}</div>
//                 <div className="price">{price}</div>
//             </a>
//         </div></Col>
//         <Col md={4} lg={4}><div className={'coffee-list-item'}>
//             <a href="#">
//                 <img src={CoffeeImg} alt=""/>
//                 <div className="title">{title}</div>
//                 <div className="filter-opt">{filterOpt}</div>
//                 <div className="price">{price}</div>
//             </a>
//         </div></Col>
//         <Col md={4} lg={4}><div className={'coffee-list-item'}>
//             <a href="#">
//                 <img src={CoffeeImg} alt=""/>
//                 <div className="title">{title}</div>
//                 <div className="filter-opt">{filterOpt}</div>
//                 <div className="price">{price}</div>
//             </a>
//         </div></Col>
//         <Col md={4} lg={4}><div className={'coffee-list-item'}>
//             <a href="#">
//                 <img src={CoffeeImg} alt=""/>
//                 <div className="title">{title}</div>
//                 <div className="filter-opt">{filterOpt}</div>
//                 <div className="price">{price}</div>
//             </a>
//         </div></Col>
//         <Col md={4} lg={4}><div className={'coffee-list-item'}>
//             <a href="#">
//                 <img src={CoffeeImg} alt=""/>
//                 <div className="title">{title}</div>
//                 <div className="filter-opt">{filterOpt}</div>
//                 <div className="price">{price}</div>
//             </a>
//         </div></Col>
//         <Col md={4} lg={4}><div className={'coffee-list-item'}>
//             <a href="#">
//                 <img src={CoffeeImg} alt=""/>
//                 <div className="title">{title}</div>
//                 <div className="filter-opt">{filterOpt}</div>
//                 <div className="price">{price}</div>
//             </a>
//         </div></Col>
//     </Row>
// </Container>