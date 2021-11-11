export default function Beadcrumbs({ pages }) {
    const { notActivePages, active } = pages;

    return (
        <div className="breadcr-outer">
            <div className="breadcr">
                <a><i className='fas fa-home breadcr__icon'></i></a>
                <span><i className="fa fa-angle-double-right"></i></span>

                {notActivePages.length > 0 ? notActivePages.map(elem => {
                    return (
                        <>
                            <a href="#">{elem}</a>
                            <span><i className="fa fa-angle-double-right"></i></span>
                        </>
                    );
                }) : null}

                <a id="breadcr-active" href="#">{active}</a>
            </div>
        </div>
    );
}