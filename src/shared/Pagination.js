import React, { useState } from "react";

export default function Pagination({ data }) {
    const { productsCount, page, setPage } = data;
    const paginationButtons = [];
    const pagPages = [];
    const countSetPages = Math.ceil(productsCount / 9);
    const [pagSetNumber, setPagSetNumber] = useState(0);

    for (let i = 0; i < productsCount / 9; i++) {
        paginationButtons[i] = React.createElement("button", {
            key: i,
            onClick: (event) => {
                document.getElementById("pag-active")?.removeAttribute("id");
                event.target.id = "pag-active";
                setPage(i + 1);
            }
        }, i + 1);
    }

    for (let i = 0; i < countSetPages; i += 10) {
        let temp = [];
        temp.push(i, i + 9);
        pagPages.push(temp);
    }

    return (<div className="pagination-outer">
        <div className="pagination">
            <button className="pagination__arrow" type="button" onClick={() => {
                if (pagSetNumber - 1 >= 0) {
                    setPagSetNumber(pagSetNumber - 1);
                }

                // второй вариант пагинации

                // document.getElementById("pag-active")?.removeAttribute("id");
                // let temp = document.querySelectorAll(".pagination__nums button");

                // if (page > 1) {
                //     for (let i = 0; i < temp.length; i++) {
                //         if (temp[i].innerHTML == page - 1) {
                //             temp[i].id = "pag-active";
                //         }
                //     }

                //     setPage(page - 1);
                // }

                // else {
                //     temp[temp.length - 1].id = "pag-active";
                //     setPage(temp.length);
                // }
            }}>
                <i className="fa fa-angle-left"></i>
            </button>
            <div className="pagination__nums">
                {
                    paginationButtons.map((elem, id) => {
                        if (id >= pagPages[pagSetNumber][0] && id <= pagPages[pagSetNumber][1]) {
                            return (elem);
                        }
                        else {
                            return null;
                        }
                    })
                }
            </div>
            <button className="pagination__arrow" type="button" onClick={() => {
                if (pagSetNumber + 1 < pagPages.length) {
                    setPagSetNumber(pagSetNumber + 1);
                }


                // второй вариант пагинации

                // document.getElementById("pag-active")?.removeAttribute("id");
                // let temp = document.querySelectorAll(".pagination__nums button");

                // if (page < temp.length) {
                //     for (let i = 0; i < temp.length; i++) {
                //         if (temp[i].innerHTML == page + 1) {
                //             temp[i].id = "pag-active";
                //         }
                //     }

                //     setPage(page + 1);
                // }

                // else {
                //     temp[0].id = "pag-active";
                //     setPage(1);
                // }
            }}>
                <i className="fa fa-angle-right"></i>
            </button>
        </div>
    </div>);
}