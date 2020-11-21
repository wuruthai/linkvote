import { useState, useMemo } from 'react';
import { SORTING_CONST } from 'constant';

function useSorted(data, initialSortType = SORTING_CONST.DEFAULT, sortKey) {
  const [sortType, changeSortType] = useState(initialSortType);

  const sortedList = useMemo(() => {
    if (!data) return [];
    // copy state don't try mutate the another state
    const list = [...data];
    list.sort((a, b) => {
      if (!sortType === SORTING_CONST.DEFAULT || a[sortKey] === b[sortKey]) {
        return (
          (a.edited.getTime &&
            b.edited.getTime &&
            (a.edited.getTime() > b.edited.getTime() ? -1 : 1)) ||
          0
        );
      } else if (a[sortKey] > b[sortKey]) {
        return sortType === SORTING_CONST.DESC ? -1 : 1;
      } else if (a[sortKey] < b[sortKey]) {
        return sortType === SORTING_CONST.DESC ? 1 : -1;
      } else {
        return 0;
      }
    });
    return list;
  }, [data, sortType]);
  return { sortedList, sortType, changeSortType };
}

export default useSorted;
