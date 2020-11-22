import { SORTING_CONST } from 'constant';
import { v4 as uuidv4 } from 'uuid';
const sortingData = [
  {
    id: uuidv4(),
    name: 'First Created (A - Z)',
    sortType: SORTING_CONST.DESC,
    sortKey: 'created',
    secondaryKey: 'point',
  },
  {
    id: uuidv4(),
    name: 'Last Created (Z - A)',
    sortType: SORTING_CONST.ASC,
    sortKey: 'created',
    secondaryKey: 'point',
  },
  {
    id: uuidv4(),
    name: 'First Edited (A - Z)',
    sortType: SORTING_CONST.DESC,
    sortKey: 'edited',
    secondaryKey: 'point',
  },
  {
    id: uuidv4(),
    name: 'Last Edited (Z - A)',
    sortType: SORTING_CONST.ASC,
    sortKey: 'edited',
    secondaryKey: 'point',
  },
  {
    id: uuidv4(),
    name: 'Less Voted (A - Z)',
    sortType: SORTING_CONST.ASC,
    sortKey: 'point',
    secondaryKey: 'edited',
  },
  {
    id: uuidv4(),
    name: 'Most Voted (Z - A)',
    sortType: SORTING_CONST.DESC,
    sortKey: 'point',
    secondaryKey: 'edited',
  },
];
export default sortingData;
