import React from 'react';

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className='pagination'>
        <li> </li>
        {pageNumbers.map(number => (
          <li key={number} className='page-item'>
            <a>
              {number}
            </a>
          </li>
        ))}
        <li></li>
      </ul>
    </nav>
  );
};

export default Pagination;