export default function CardView({product}) {
    const {images} = product;
    const {title} = product;
    const {rating} = product;
    const {price} = product;

    return (
        <div className="card">
            <div className="card-inner">
                <div className="card__img">
                    <img src={images[0]} alt={title} />
                </div>
                <div className="card__rate__price-outer">
                    <div className="card__rate">
                        <div className="card__rate-inner">
                            {rating} <i className='far fa-star'></i>
                        </div>
                    </div>
                    <div className="card__price">
                        ${price}
                    </div>
                </div>
                <div className="card__header-outer">
                    <div className="card__header" title={title}>
                        {title}
                    </div>
                </div>
                <div className="card__text">
                    Redesigned from scratch and completely revised.
                </div>
            </div>
            <div className="card__btns">
                <button type="button" className="card__wishlist">
                    <i className="far fa-heart"></i> WISHLIST
                </button>
                <button type="button" className="card__add">
                    <i className='fas fa-cart-plus'></i>
                    ADD TO CART
                </button>
            </div>
        </div>
    );
}