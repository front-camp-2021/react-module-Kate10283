export default function RadioFilter() {
    const filterItems = ["$10", "$10-$100", "$100-$500", "$500", "All"];

    return (
        <div className="filter-outer">
            <div className="filter">
                <div className="filter__name">
                    <div className="filter__name-inner">
                        Multi Range
                    </div>
                </div>

                {filterItems.map((elem, id) => {
                    const filterId = `radio${id}`;

                    return (
                        <div className="filter__input-outer">
                            <input type="radio" id={filterId} name="Multi Range" value={elem} /><label
                                htmlFor={filterId}>{elem}</label>
                            <br />
                        </div>
                    );
                })}

            </div>
        </div>
    );
}