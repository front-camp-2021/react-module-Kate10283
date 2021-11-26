import Header from "../shared/Header";
import Breadcrumbs from "../shared/Breadcrumbs";
import { useSelector } from "react-redux";
import { selectFavoriteProducts } from "../store/selectors";
import CardView from "../shared/CardView";
import NoProductsFoundHeader from "./components/NoProductsFoundHeader";
import CleanFavBtn from "./components/CleanFavBtn";
import Pagination from "../shared/Pagination";
import { useState } from "react";

export default function WishList() {
    const { products } = useSelector(selectFavoriteProducts);
    const [page, setPage] = useState(1);
    console.log(products)

    return (
        <>
            <Header />
            <Breadcrumbs pages={{ notActivePages: [], active: 'Wish list' }} />

            {products?.length ? (
                <>
                    <CleanFavBtn />
                    <div className="cards">
                        {products.map((elem) => <CardView key={elem.id} product={elem} />)}
                    </div>
                    <Pagination data={{ productsCount: products.length, page, setPage }} />
                </>) :
                <NoProductsFoundHeader />
            }
        </>
    );
}