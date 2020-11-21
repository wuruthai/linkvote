import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { renderHook, act } from '@testing-library/react-hooks';
import { useSorted } from 'hooks';
import { SORTING_CONST } from 'constant';
import voteListMock from './__mocks__/vote-list.mock';

describe('useSorted was workly corrected', () => {
  test('useSorted()', () => {
    const { result, rerender } = renderHook(() =>
      useSorted(voteListMock, SORTING_CONST.DESC, 'point')
    );
    act(() => result.current.changeSortType(SORTING_CONST.DESC));
    rerender();
    expect(result.current.sortedList[0].point).toBe(3);
    act(() => result.current.changeSortType(SORTING_CONST.ASC));
    rerender();
    expect(result.current.sortedList[0].point).toBe(0);
  });
});
