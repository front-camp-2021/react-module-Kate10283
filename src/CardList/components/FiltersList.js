import axios from "axios";
import { useEffect, useState } from "react";
import CheckboxFilter from "./filters/CheckboxFilter";
import LineBreak from "./filters/LineBreak";
import RadioFilter from "./filters/RadioFilter";

export default function FiltersList() {
    const [categories, setCategories] = useState([]);
    const [brands, setBrands] = useState([]);

    useEffect(() => {
        console.log(4);
        axios.get("http://localhost:3001/categories")
            .then(res => {
                setCategories(res.data);
            });

        axios.get("http://localhost:3001/brands")
            .then(res => {
                setBrands(res.data);
            });
    }, [])

    return (
        <div className="filters">
            <div className="filters__header-outer">
                <div className="filters__header">
                    <div className="filters__header-name">Filters</div>
                    <button type="button" className="filters__header-show-btn"><i
                        className="fa fa-angle-double-left"></i></button>
                </div>
            </div>
            <div className="filters__block-outer">
                <div className="filters__block">
                    <div className="filters__block-inner">
                        <RadioFilter />
                        <LineBreak />
                        <CheckboxFilter value={{filterName: 'Category', filter: categories}} />
                        <LineBreak />
                        <CheckboxFilter value={{filterName: 'Brand', filter: brands}} />
                    </div>
                </div>
            </div>
        </div>
    );
}