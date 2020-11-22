import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { renderHook, act } from '@testing-library/react-hooks';
import { useSorted } from 'hooks';
import { SORTING_CONST } from 'constant';
import voteListMock from './__mocks__/vote-list.mock';
const sortingData = [
  {
    id: 'Less Voted (A - Z)',
    name: 'Less Voted (A - Z)',
    sortType: SORTING_CONST.ASC,
    sortKey: 'point',
    secondaryKey: 'edited',
  },
  {
    id: 'Less Voted (A - Z)',
    name: 'Most Voted (Z - A)',
    sortType: SORTING_CONST.DESC,
    sortKey: 'point',
    secondaryKey: 'edited',
  },
];

test('useSorted()', () => {
  const { result, rerender } = renderHook(() =>
    useSorted(voteListMock, sortingData[0])
  );
  act(() => result.current.setSelectedSortingItem(sortingData[0]));
  expect(result.current.sortedList[0].point).toBe(0);
  act(() => result.current.setSelectedSortingItem(sortingData[1]));
  expect(result.current.sortedList[0].point).toBe(3);
});
