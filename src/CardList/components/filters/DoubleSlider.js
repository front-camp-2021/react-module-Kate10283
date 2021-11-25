import { useEffect } from "react";
import doubleSlider from "../../helpers/doubleSlider";

export default function DoubleSlider({ data }) {
    const { filters, setFilters, doubleSliderValues, setDoubleSliderValues } = data;
    const { filterName, min, max, step, clear } = doubleSliderValues;

    const range1Id = `${filterName}-range1`;
    const range2Id = `${filterName}-range2`;
    const sliderTrackId = `${filterName}-slider-track`;
    const slider1Id = `${filterName}-slider1`;
    const slider2Id = `${filterName}-slider2`;

    useEffect(() => {
        doubleSlider({ filterName });
    }, []);

    if (clear) {
        document.getElementById(slider1Id).value = min;
        document.getElementById(slider2Id).value = max;
        document.getElementById(range1Id).textContent = '$' + min;
        document.getElementById(range2Id).textContent = '$' + max;
        doubleSlider({ filterName: filterName });
        const temp = {};
        Object.assign(temp, doubleSliderValues, { clear: false });
        setDoubleSliderValues(temp);
    }

    return (
        <div className="filter-outer">
            <div className="slider filter">
                <div className="slider-wrapper">
                    <div className="filter__name"> {filterName} </div>
                    <div className="values filter__name">
                        <span id={range1Id}>
                            ${min}
                        </span>
                        <span> – </span>
                        <span id={range2Id}>
                            ${max}
                        </span>
                    </div>
                </div>
                <div className="container">
                    <div id={sliderTrackId} className="slider-track"></div>
                    <input type="range" id={slider1Id} min={min} max={max} defaultValue={min} step={step}
                        onMouseUp={(event) => {
                            let temp = {};
                            Object.assign(temp, filters, {minPrice: event.target.value});
                            setFilters(temp);
                        }} />
                    <input type="range" id={slider2Id} min={min} max={max} defaultValue={max} step={step}
                        onMouseUp={(event) => {
                            let temp = {};
                            Object.assign(temp, filters, {maxPrice: event.target.value});
                            setFilters(temp);
                        }} />
                </div>
            </div>
        </div>
    );
}