import { Link } from "react-router-dom";

export default function CardListHeader(props) {
    return (
        <>
            <div className="quantity-outer">
                <div className="quantity-results">
                    7,618 results found
                </div>
                <Link className="favorite" to={"/wish-list"}><i className="far fa-heart"></i></Link>
            </div>
            <div className="search">
                <form>
                    <input id="search-input-id" type="text" placeholder="Search" />
                    <button type="button" onClick={() => {
                        props.setSearch(document.getElementById("search-input-id").value);
                    }}><i className='fas fa-search'></i></button>
                </form>
            </div>
        </>
    );
}