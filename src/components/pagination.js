import React, { useMemo } from 'react';
import Container from './container';
import Button from './button';
import 'styles/pagination.scss';

const Pagination = ({ totalCount, pageSize = 5, pageNum, onChangePage }) => {
  const totalPages = useMemo(() => Math.ceil(totalCount / pageSize), [
    totalCount,
    pageSize,
  ]);
  const pageData = useMemo(() => {
    const pageArray = [];
    for (let index = 1; index <= totalPages; index++) {
      pageArray.push(index);
    }
    return pageArray;
  }, [totalPages]);
  return (
    totalPages > 1 && (
      <Container className="pagination" align="top" justify="end">
        <Button
          className="pagination-button pagination-item"
          disabled={pageNum === 1}
          onClick={() => onChangePage(pageNum - 1)}
        >
          {'<'}
        </Button>
        {pageData.map((item) => (
          <Button
            key={`pagination-button-${item}`}
            className={`pagination-button pagination-item ${
              pageNum === item && 'active'
            }`}
            onClick={() => onChangePage(item)}
          >
            {item}
          </Button>
        ))}
        <Button
          className={`pagination-button pagination-item `}
          disabled={pageNum === totalPages}
          onClick={() => onChangePage(pageNum + 1)}
        >
          {'>'}
        </Button>
      </Container>
    )
  );
};
export default Pagination;
