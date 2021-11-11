export default function Pagination() {
    // const { paginationLists } = ListsCount;

    // const paginationNumbers = [];
    // for (let i = 0; i < paginationLists / 10 + 1; i = i + 10) {
    //     if (paginationLists % 10 >= 0) {
    //         paginationNumbers.push(10);
    //     }
    //     else {
    //         paginationNumbers.push(paginationNumbers % i+10);
    //     }
    // }


    return (<div className="pagination-outer">
        <div className="pagination">
            <button className="pagination__arrow" type="button">
                <i className="fa fa-angle-left"></i>
            </button>
            <div className="pagination__nums">
                {

                }
                <button type="button">1</button>
            </div>
            <button className="pagination__arrow" type="button">
                <i className="fa fa-angle-right"></i>
            </button>
        </div>
    </div>);
}