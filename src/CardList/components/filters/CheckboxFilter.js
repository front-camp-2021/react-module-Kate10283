export default function CheckboxFilter({value}) {
    const { filter } = value;
    const { filterName } = value;

    return (
        <>
            <div className="filter-outer">
                <div className="filter">
                    <div className="filter__name">
                        <div className="filter__name-inner">
                            {filterName}
                        </div>
                    </div>
                    {filter.map((elem, id) => {
                        return (
                            <div className="filter__input-outer">
                                <input type="checkbox" id={filterName+id} name={filterName} value={elem} /><label
                                    htmlFor={filterName+id}>{elem}</label>
                                <span>1920</span>
                                <br />
                            </div>);
                    })}
                </div>
            </div>
        </>
    );
}