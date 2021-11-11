// import axios from "axios";
import { useSelector } from "react-redux";
import Header from "../shared/Header";
import Breadcrumbs from "../shared/Breadcrumbs";
import Pagination from "../shared/Pagination";
import { selectProducts } from "../store/selectors";
import CardListHeader from "./components/CardListHeader";
import CardView from "../shared/CardView";
import FiltersList from "./components/FiltersList";

export default function CardList() {
    const { products } = useSelector(selectProducts);
    
    // const productsList = [];
    // productsList[0] = [];
    // let count = 0;

    // for (let i = 0; i < products.length; i++) {
    //     if (i !== 0 && i % 9 == 0) {
    //         count++;
    //         productsList[count] = [];
    //     }
    //     productsList[count].push(products[i]);
    // }

    // const productsListCount = productsList.length; // 12: 0-11

    return (
        <>
            <Header />
            <Breadcrumbs pages={{notActivePages: ['eCommerce'], active: 'Electronics'}} />
            <div className="grid-container-row">
                <FiltersList />
                <div className="flex-container-column">
                    <CardListHeader />
                    <div className="cards">
                        {products.map((elem) =>
                            <CardView key={elem.id} product={elem} />)}
                    </div>
                </div>
            </div>
            <Pagination />
        </>
    );
}