export default function RadioFilter() {
    return (
        <div className="filter-outer">
            <div className="filter">
                <div className="filter__name">
                    <div className="filter__name-inner">
                        Multi Range
                    </div>
                </div>
                <div className="filter__input-outer">
                    <input type="radio" id="mr1" name="Multi Range" value="$10" /><label
                        htmlFor="mr1">$10</label>
                    <br />
                </div>
                <div className="filter__input-outer">
                    <input type="radio" id="mr2" name="Multi Range" value="$10-$100" /> <label
                        htmlFor="mr2">$10-$100</label><br />
                </div>
                <div className="filter__input-outer">
                    <input type="radio" id="mr3" name="Multi Range" value="$100-$500" /> <label
                        htmlFor="mr3">$100-$500</label><br />
                </div>
                <div className="filter__input-outer">
                    <input type="radio" id="mr4" name="Multi Range" value="$500" /> <label
                        htmlFor="mr4">$500</label><br />
                </div>
                <div className="filter__input-outer">
                    <input type="radio" id="mr5" name="Multi Range" value="all" checked /> <label
                        htmlFor="mr5">All</label><br />
                </div>
            </div>
        </div>
    );
}