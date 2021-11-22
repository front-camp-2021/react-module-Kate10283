export default function CheckboxFilter({ value }) {
    const { filterItems, filterName } = value;
    const { filters, setFilters } = value;

    function toCorrectString(str) {
        if (str === "A4Tech") {
            return "a4-tech";
        }
        str = str.toLowerCase().replace(" ", "_");
        return str;
    }
    
    return (
        <div className="filter-outer">
            <div className="filter">
                <div className="filter__name">
                    <div className="filter__name-inner">
                        {filterName}
                    </div>
                </div>

                {filterItems.map((elem, id) => {
                    const filterId = `${filterName}${id}`

                    return (
                        <div className="filter__input-outer" key={id}>
                            <input type="checkbox" id={filterId} name={filterName} value={elem}
                                onChange={(event) => {
                                    if (event.target.checked) {
                                        if (filterName === 'Category') {
                                            let temp = {};
                                            let tempArr = [...filters.categories];
                                            tempArr.push(toCorrectString(event.target.value));
                                            Object.assign(temp, filters, { categories: tempArr });
                                            setFilters(temp);
                                        }
                                        if (filterName === 'Brand') {
                                            let temp = {};
                                            let tempArr = [...filters.brands];
                                            tempArr.push(toCorrectString(event.target.value));
                                            Object.assign(temp, filters, { brands: tempArr });
                                            setFilters(temp);
                                        }
                                    }
                                    else {
                                        if (filterName === 'Category') {
                                            let temp = {};
                                            let tempArr = [...filters.categories];
                                            let index = tempArr.findIndex((elem) =>
                                                elem === toCorrectString(event.target.value));
                                            tempArr.splice(index, 1);
                                            Object.assign(temp, filters, { categories: tempArr });
                                            setFilters(temp);
                                        }
                                        if (filterName === 'Brand') {
                                            let temp = {};
                                            let tempArr = [...filters.brands];
                                            let index = tempArr.findIndex((elem) =>
                                                elem === toCorrectString(event.target.value));
                                            tempArr.splice(index, 1);
                                            Object.assign(temp, filters, { brands: tempArr });
                                            setFilters(temp);
                                        }
                                    }
                                }}
                            /><label
                                htmlFor={filterId}>{elem}</label>
                            <span></span>
                            <br />
                        </div>);
                })}

            </div>
        </div>
    );
}