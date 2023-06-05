import './GenericProductCard.css'

const GenericProductCard = (props) => {
    return (
        <div className="generic-product-container">
            {props.likeicon ? <div className='wishlist-icon'>{props.likeicon}</div> : <div>HEART ICON</div>}
            {props.image ? <img className='generic-product-image' src={props.image} alt={props.title}/>: <div>IMAGE</div>}
            {props.title ? <p className='product-title'>{props.title}</p> : <p>HEADING</p>}
            {props.rate ? <p className='product-price'>{props.rate}</p> : <p>200</p>}
            <button className='btn-add-to-cart'>ADD TO CART</button>
        </div>
    )
}

export default GenericProductCard