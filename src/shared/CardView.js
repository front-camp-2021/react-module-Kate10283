import { useDispatch } from "react-redux";
import { CHANGE_FAVORITE_STATUS } from "../store/types";

export default function CardView({product}) {
    const { images, title, rating, price, id, isFavorite } = product;
    const dispatch = useDispatch();

    let buttonClassName = 'card__wishlist';
    if (isFavorite) {
        buttonClassName += ' _card-in-wishlist';
    }

    return (
        <div className="card">
            <div className="card-inner">
                <div className="card__img">
                    <img src={images[0]} onError={e => {e.target.src=images[1];}} alt={title} />
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
                
                <button type="button" className={buttonClassName} onClick={(event) => {
                    dispatch({ type: CHANGE_FAVORITE_STATUS, payload: id });
                    event.target.classList.toggle('_card-in-wishlist');
                }}>
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