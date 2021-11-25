import React, { useState } from "react";
import { countPaginationVisiblePages, countProductPerPage } from "./constants";

export default function Pagination({ data }) {
    const { productsCount, page, setPage } = data;
    const paginationButtons = [];
    const paginationVisiblePages = [];
    const countPages = Math.ceil(productsCount / countProductPerPage);
    const [pagSetNumber, setPagSetNumber] = useState(0);
    let buttonId;
    
    for (let i = 0; i < countPages; i++) {
        if (i === page - 1) {
            buttonId = "pag-active";
        }
        else {
            buttonId = "";
        }
        paginationButtons[i] = <button key={i} id={buttonId} onClick={(event) => {
            setPage(i + 1);
        }}> {i + 1}</button>
    }

    for (let i = 0; i < countPages; i += countPaginationVisiblePages) { 
        let temp = [];
        temp.push(i, i + countPaginationVisiblePages - 1);
        paginationVisiblePages.push(temp);
    }

    return (<div className="pagination-outer">
        <div className="pagination">
            <button className="pagination__arrow" type="button" onClick={() => {
                if (pagSetNumber - 1 >= 0) {
                    setPagSetNumber(pagSetNumber - 1);
                }
            }}>
                <i className="fa fa-angle-left"></i>
            </button>
            <div className="pagination__nums">
                {
                    paginationButtons.map((elem, id) => {
                        if (id >= paginationVisiblePages[pagSetNumber][0] && id <= paginationVisiblePages[pagSetNumber][1]) {
                            return (elem);
                        }
                        else {
                            return null;
                        }
                    })
                }
            </div>
            <button className="pagination__arrow" type="button" onClick={() => {
                if (pagSetNumber + 1 < paginationVisiblePages.length) {
                    setPagSetNumber(pagSetNumber + 1);
                }
            }}>
                <i className="fa fa-angle-right"></i>
            </button>
        </div>
    </div>);
}