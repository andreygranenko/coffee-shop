import './best-card.sass'

const BestCard = (props) => {
    const {src, alt, title, price} = props.data;
    return (
        <div className="card">
            <img src={src} alt={alt}/>
            <div className="title">{title}</div>
            <span>{price}$</span>
        </div>
    )
}

export default BestCard