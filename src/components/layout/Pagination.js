import React from "react";
import { NavLink } from "react-router-dom";

const Pagination = (props) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(props.totalUsers / props.usersPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav aria-label="Search results pages">
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li className="page-item">
            <NavLink
              onClick={() => props.paginateT(number)}
              className="page-link"
              to="/"
            >
              {number}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;