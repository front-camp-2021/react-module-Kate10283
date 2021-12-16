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
import axios from "axios";
import toCorrectString from "./helpers/toCorrectString";

export default function CardList() {
    const { products, productsCount } = useSelector(selectProducts);
    const [categories, setCategories] = useState([]);
    const [brands, setBrands] = useState([]);
    const [search, setSearch] = useState('');
    const [filters, setFilters] = useState({
        category: [],
        brand: []
    });
    const [page, setPage] = useState(1);
    const dispatch = useDispatch();
    const [productsCountByCategories, setProductsCountByCategories] = useState({});
    const [productsCountByBrands, setProductsCountByBrands] = useState({});

    useEffect(() => {
        axios.get("http://localhost:3001/categories")
            .then(res => {
                setCategories(res.data);
            });

        axios.get("http://localhost:3001/brands")
            .then(res => {
                setBrands(res.data);
            });
    }, []);


    useEffect(() => {
        dispatch(getProducts({
            brand: filters.brand, category: filters.category, minPrice: filters.minPrice,
            maxPrice: filters.maxPrice, minRating: filters.minRating, maxRating: filters.maxRating,
            search, page
        }));
    }, [search, filters, page, dispatch]);

    useEffect(() => {
        setPage(1);
    }, [search, filters]);

    useEffect(() => {
        const productsCountByCategories = {};

        Promise.all(categories.map((category) =>
            axios.get(`http://localhost:3001/products?category=${toCorrectString(category)}`)))
            .then(res => {
                res.forEach((item, i) => {
                    productsCountByCategories[toCorrectString(categories[i])] = item.data.length;
                });
                setProductsCountByCategories(productsCountByCategories);
            });

    }, [categories]);

    useEffect(() => {
        const productsCountByBrands = {};

        Promise.all(brands.map((brand) =>
            axios.get(`http://localhost:3001/products?brand=${toCorrectString(brand)}`)))
            .then(res => {
                res.forEach((item, i) => {
                    productsCountByBrands[toCorrectString(brands[i])] = item.data.length;
                });
                setProductsCountByBrands(productsCountByBrands);
            });

    }, [brands]);

    return (
        <>
            <Header />
            <Breadcrumbs pages={{ notActivePages: ['eCommerce'], active: 'Electronics' }} />
            <div className="grid-container-row">
                <FiltersList data={{ categories, brands, filters, setFilters, productsCountByCategories, productsCountByBrands }} />
                <div className="flex-container-column">
                    <CardListHeader data={{ setSearch, productsCount }} />

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