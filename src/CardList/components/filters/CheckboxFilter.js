import toCorrectString from "../../helpers/toCorrectString";

export default function CheckboxFilter({ value }) {
    const { filterItems, filterName, filters, setFilters, productsCountByCategories, productsCountByBrands } = value;

    return (
        <div className="filter-outer">
            <div className="filter">
                <div className="filter__name">
                    <div className="filter__name-inner">
                        {filterName}
                    </div>
                </div>

                {filterItems.map((elem, id) => {
                    const filterId = `${filterName}${id}`;
                    let isChecked;

                    if (filters[filterName.toLowerCase()]?.includes(toCorrectString(elem))) {
                        isChecked = true;
                    }
                    else {
                        isChecked = null;
                    }

                    return (
                        <div className="filter__input-outer" key={id}>
                            <input type="checkbox" id={filterId} name={filterName} value={elem} checked={isChecked}
                                onChange={(event) => {
                                    let temp = {};
                                    let tempArr = [...filters[filterName.toLowerCase()]];
                                    if (tempArr.includes(toCorrectString(event.target.value))) {
                                        let index = tempArr.findIndex((elem) =>
                                            elem === toCorrectString(event.target.value));
                                        tempArr.splice(index, 1);
                                        Object.assign(temp, filters, { [filterName.toLowerCase()]: tempArr });
                                        setFilters(temp);
                                    }
                                    else {
                                        tempArr.push(toCorrectString(event.target.value));
                                        Object.assign(temp, filters, { [filterName.toLowerCase()]: tempArr });
                                        setFilters(temp);
                                    }
                                }}
                            /><label
                                htmlFor={filterId}>{elem}</label>
                            <span className="filter__count">{productsCountByCategories ? productsCountByCategories[toCorrectString(elem)]
                            : productsCountByBrands[toCorrectString(elem)]}</span>
                            <br />
                        </div>);
                })}

            </div>
        </div>
    );
}