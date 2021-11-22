import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import Header from "../shared/Header";
import Breadcrumbs from "../shared/Breadcrumbs";
import Pagination from "../shared/Pagination";
import { selectProducts } from "../store/selectors";
import CardListHeader from "./components/CardListHeader";
import CardView from "../shared/CardView";
import FiltersList from "./components/FiltersList";
import { getProducts } from "../store/actions/productsActions"

export default function CardList() {
    const { products, productsCount } = useSelector(selectProducts);
    const [search, setSearch] = useState('');
    const [filters, setFilters] = useState({
        categories: [],
        brands: []
    });
    const [page, setPage] = useState(1);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProducts({
            brand: filters.brands, category: filters.categories, minPrice: filters.minPrice,
            maxPrice: filters.maxPrice, minRating: filters.minRating, maxRating: filters.maxRating,
            search, page
        }));
    }, [search, filters, page]);

    return (
        <>
            <Header />
            <Breadcrumbs pages={{ notActivePages: ['eCommerce'], active: 'Electronics' }} />
            <div className="grid-container-row">
                <FiltersList data={{ filters, setFilters }} />
                <div className="flex-container-column">
                    <CardListHeader setSearch={setSearch} />

                    {products.length > 0 ?
                        <div className="cards">
                            {products.map((elem) =>
                                <CardView key={elem.id} product={elem} />)}
                        </div>
                        : <p>Sorry, we do not have such a product</p>}

                </div>
            </div>
            <Pagination data={{ productsCount, page, setPage }} />
        </>
    );
}