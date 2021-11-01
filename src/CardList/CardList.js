import axios from "axios";
import { useEffect, useState } from "react";
import Header from "../shared/Header";
import CardView from "./components/CardView";
import FiltersList from "./components/FiltersList";

export default function CardList() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3001/products")
            .then(res => {
                setProducts(res.data);
            });
    }, []);


    return (
        <>
            <Header />
            <div class="grid-container-row">
                <FiltersList />
                <div className="cards">
                    {products.map((elem) => <CardView key={elem.id} product={elem} />)}
                </div>
            </div>
        </>
    );
}