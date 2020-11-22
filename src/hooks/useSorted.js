import { useState, useMemo } from 'react';
import { SORTING_CONST } from 'constant';
import { getSortValue } from 'utils';

function useSorted(data, defaultSelectedSortingItem) {
  const [selectedSortingItem, setSelectedSortingItem] = useState(
    defaultSelectedSortingItem
  );

  const sortedList = useMemo(() => {
    if (!data) return [];
    // copy state don't try mutate the another state
    const list = [...data];
    list.sort((a, b) => {
      const aValue = getSortValue(a, selectedSortingItem.sortKey);
      const bValue = getSortValue(b, selectedSortingItem.sortKey);

      if (aValue > bValue) {
        return selectedSortingItem.sortType === SORTING_CONST.DESC ? -1 : 1;
      } else if (aValue < bValue) {
        return selectedSortingItem.sortType === SORTING_CONST.DESC ? 1 : -1;
      } else {
        if (!selectedSortingItem.secondaryKey) return 0;
        const bSecondaryValue = getSortValue(
          b,
          selectedSortingItem.secondaryKey
        );
        const aSecondaryValue = getSortValue(
          a,
          selectedSortingItem.secondaryKey
        );

        return aSecondaryValue > bSecondaryValue ? -1 : 1 || 0;
      }
    });
    return list;
  }, [data, selectedSortingItem]);
  return { sortedList, selectedSortingItem, setSelectedSortingItem };
}

export default useSorted;
