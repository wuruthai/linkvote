import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { renderHook, act } from '@testing-library/react-hooks';
import { usePagination } from 'hooks';
import pageData from './__mocks__/page-data';

const checkPage = (pageData, pageNum) => {
  const val = `page${pageNum}`;
  const isAllSame = pageData.every((page) => page === val);
  expect(isAllSame).toBe(true);
};

test('usePagination()', () => {
  const { result, rerender } = renderHook(() => usePagination(pageData));

  expect(result.current.pageNum).toBe(1);
  expect(result.current.pageData.length).toBe(5);
  expect(result.current.setPageNum).toBeInstanceOf(Function);
  checkPage(result.current.pageData, result.current.pageNum);
  act(() => result.current.setPageNum(2));
  expect(result.current.pageNum).toBe(2);
  checkPage(result.current.pageData, result.current.pageNum);
});
