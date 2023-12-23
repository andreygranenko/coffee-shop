import BestCard from "../best-card/best-card";
import './best-sect.sass'
const BestSect = (props) => {
    const cards = props.data.map((item, id) => {
        return (
            <BestCard
                data={item}
                key={id}/>
        )
    })

    return (
        <div className="best">
            <h2>Our best</h2>
            <div className="cards">
            {cards}
            </div>
        </div>
    )
}

export default BestSect