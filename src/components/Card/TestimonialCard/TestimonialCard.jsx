import "./TestimonialCard.css"

const TestimonialCard = (props) => {
    const { rating, description, name, productImage, productName } = props

    return (
        <div className="testimonial-container">
            {rating && <div className="testimonial-rating">{rating}</div>}
            {description ? (
                <p className="testimonial-text">{description}</p>
            ) : (
                <p>HEADING</p>
            )}
            <div className="testimonial-details">
                <div className="testimonial-author">
                    <span className="author-name">{name}</span>
                </div>
                <hr className="testimonial-divider" />
                <div className="testimonial-product">
                    <img
                        src={productImage}
                        alt={productName}
                        className="testimonial-image"
                    />
                    <span className="testimonial-product-name">
                        {productName}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default TestimonialCard
