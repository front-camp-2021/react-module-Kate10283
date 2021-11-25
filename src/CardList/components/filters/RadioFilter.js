export default function RadioFilter({ data }) {
    const filterItems = ['1-5', '2-5', '3-5', '4-5', '5', 'All'];
    const { filters, setFilters } = data;

    return (
        <div className="filter-outer">
            <div className="filter">
                <div className="filter__name">
                    <div className="filter__name-inner">
                        Rating
                    </div>
                </div>

                {filterItems.map((elem, id) => {
                    const filterId = `radio${id}`;
                    let isChecked;

                    if (filters.rating === elem) {
                        isChecked = true;
                    }
                    else {
                        isChecked = null;
                    }

                    return (
                        <div className="filter__input-outer" key={id}>
                            <input type="radio" id={filterId} name="Multi Range" value={elem} checked={isChecked} 
                            onClick={(event) => {
                                if (event.target.checked) {
                                    if (event.target.value === '5') {
                                        let temp = {};
                                        Object.assign(temp, filters, { rating: 5, minRating: 5, maxRating: 5 });
                                        setFilters(temp);
                                    }
                                    else if (event.target.value === 'All') {
                                        let temp = {};
                                        Object.assign(temp, filters, { rating: 'All', minRating: 0, maxRating: 5 });
                                        setFilters(temp);
                                    }
                                    else {
                                        let temp = {};
                                        Object.assign(temp, filters, {
                                            rating: event.target.value,
                                            minRating: event.target.value[0],
                                            maxRating: event.target.value[2]
                                        });
                                        setFilters(temp);
                                    }
                                }
                            }} /><label
                                htmlFor={filterId}>{elem}</label>
                            <br />
                        </div>
                    );
                })}

            </div>
        </div>
    );
}