export default function CheckboxFilter({value}) {
    const { filterItems, filterName } = value;

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
                            <div className="filter__input-outer">
                                <input type="checkbox" id={filterId} name={filterName} value={elem} /><label
                                    htmlFor={filterId}>{elem}</label>
                                <span>1920</span>
                                <br />
                            </div>);
                    })}

                </div>
            </div>
    );
}