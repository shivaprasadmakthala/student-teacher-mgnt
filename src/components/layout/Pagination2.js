import React from "react";
import { NavLink } from "react-router-dom";

const Pagination2 = (props) => {
    const pageNumbers = [];
    for(let i=1; i<=Math.ceil(props.totalUsers / props.usersPerPage); i++){
        pageNumbers.push(i);
    }

    return(
        <nav>
            <ul className="pagination">
                {pageNumbers.map((number) => (
                    <li key={number} className="page-item">
                        <NavLink onClick={() => props.paginateS(number)} className="page-link" to="/">
                            {number}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Pagination2;