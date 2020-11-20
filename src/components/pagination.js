import React, { useMemo } from 'react';
import Container from './container';
import Button from './button';
import 'styles/pagination.scss';

const Pagination = ({ totalCount = 8, pageSize = 5, pageNum = 1 }) => {
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
    <Container className="pagination" align="top" justify="end">
      <Button className={`pagination-button pagination-item `}>{'<'}</Button>
      {pageData.map((item) => (
        <Button
          key={`pagination-button-${item}`}
          className={`pagination-button pagination-item ${
            pageNum === item && 'active'
          }`}
        >
          {item}
        </Button>
      ))}
      <Button className={`pagination-button pagination-item `}>{'>'}</Button>
    </Container>
  );
};
export default Pagination;
