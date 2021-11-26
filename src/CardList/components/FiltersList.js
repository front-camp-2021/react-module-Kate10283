import { useState } from "react";
import CheckboxFilter from "./filters/CheckboxFilter";
import DoubleSlider from "./filters/DoubleSlider";
import LineBreak from "./filters/LineBreak";
import RadioFilter from "./filters/RadioFilter";

export default function FiltersList({ data }) {
    const { categories, brands, filters, setFilters, productsCountByCategories, productsCountByBrands } = data;
    const [doubleSliderValues, setDoubleSliderValues] = useState({
        filterName: 'Price',
        min: 0,
        max: 85000,
        step: 1,
        clear: false
    });

    function clearFilters() {
        setDoubleSliderValues({
            filterName: 'Price',
            min: 0,
            max: 85000,
            step: 1,
            clear: true
        });

        setFilters({
            category: [],
            brand: []
        })
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
                        <DoubleSlider data={{ doubleSliderValues, setDoubleSliderValues, filters, setFilters }} />
                        <LineBreak />
                        <RadioFilter data={{ filters, setFilters }} />
                        <LineBreak />
                        <CheckboxFilter value={{
                            filterName: 'Category', filterItems: categories,
                            filters, setFilters, productsCountByCategories
                        }} />
                        <LineBreak />
                        <CheckboxFilter value={{
                            filterName: 'Brand', filterItems: brands,
                            filters, setFilters, productsCountByBrands
                        }} />
                    </div>
                </div>
            </div>
            <div className="filters__btn">
                <button type="button" onClick={clearFilters}>Clear all filters</button>
            </div>
        </div>
    );
}