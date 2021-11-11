import Header from "../shared/Header";
import Breadcrumbs from "../shared/Breadcrumbs";
import { useSelector } from "react-redux";
import { selectFavoriteProducts } from "../store/selectors";
import CardView from "../shared/CardView";
import NoProductsFoundHeader from "./components/NoProductsFoundHeader";
import CleanFavBtn from "./components/CleanFavBtn";

export default function WishList() {
    const { products } = useSelector(selectFavoriteProducts);

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
                </>) :
                <NoProductsFoundHeader />
            }

        </>
    );
}