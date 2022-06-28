import React from 'react';

function Pagination({ elementsPerPage, totalElements, paginate }) {
    const pageNumbers = [];

    for (let i = 1; i<= Math.ceil(totalElements / elementsPerPage); i++) {
        pageNumbers.push(i);
    }
    return (
        <div className="pagination">
            <ul className="pagination__list">
                {pageNumbers.map(number => (
                    <li key={number} className="pagination__element">
                        <button onClick={() => paginate(number)} className="pagination__btn">{number}</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Pagination;