import axios from "axios";
import { useEffect, useState } from "react";
import CheckboxFilter from "./filters/CheckboxFilter";
import DoubleSlider from "./filters/DoubleSlider";
import LineBreak from "./filters/LineBreak";
import RadioFilter from "./filters/RadioFilter";

export default function FiltersList() {
    const [categories, setCategories] = useState([]);
    const [brands, setBrands] = useState([]);
    const [doubleSliderValues, setDoubleSliderValues] = useState({
        filterName: 'Price', 
        min: 0, 
        max: 85000, 
        step: 1,
        clear: false
    });

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

    function clearFilters() {
        const filters = document.querySelectorAll('.filters input:checked');

        if (filters.length !== 0) {
            filters.forEach(elem => {
                elem.checked = false;
            })
        }

        setDoubleSliderValues({
            filterName: 'Price', 
            min: 0, 
            max: 85000, 
            step: 1,
            clear: true
        });
    }

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
                        <DoubleSlider values={doubleSliderValues} />
                        <LineBreak />
                        <RadioFilter />
                        <LineBreak />
                        <CheckboxFilter value={{ filterName: 'Category', filterItems: categories }} />
                        <LineBreak />
                        <CheckboxFilter value={{ filterName: 'Brand', filterItems: brands }} />
                    </div>
                </div>
            </div>
            <div className="filters__btn">
                <button type="button" onClick={clearFilters}>Clear all filters</button>
            </div>
        </div>
    );
}