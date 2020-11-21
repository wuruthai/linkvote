import React from 'react';
import { SubmitLinkButton, VoteList } from 'containers';
import { Pagination, Select, EmptyPage } from 'components';
import { useVote } from 'context/vote.context';
import { useSorted, usePagination } from 'hooks';
import { SORTING_CONST } from 'constant';
import 'styles/home.page.scss';

const sortingData = [
  { name: 'Last Edited', sortType: SORTING_CONST.DEFAULT },
  { name: 'Most Voted (Z - A)', sortType: SORTING_CONST.DESC },
  { name: 'Less Voted (A - Z)', sortType: SORTING_CONST.ASC },
];

const HomePage = () => {
  const { voteList } = useVote();
  const { sortedList, sortType, changeSortType } = useSorted(
    voteList,
    SORTING_CONST.DEFAULT,
    'point'
  );
  const { pageData, pageNum, setPageNum } = usePagination(sortedList);
  return (
    <>
      <SubmitLinkButton className="home-page-submit-link-button" />

      {voteList.length > 0 ? (
        <>
          <Select
            name="vote-sorting"
            valueKey="sortType"
            data={sortingData}
            onChange={(item) => changeSortType(item.sortType)}
            className="margin-bottom-lg"
          />
          <VoteList data={pageData} />
          <Pagination
            onChangePage={(page) => setPageNum(page)}
            totalCount={voteList.length}
            pageNum={pageNum}
          />
        </>
      ) : (
        <EmptyPage
          title="List is empty!"
          message="You can add new link by clicking the 'Submit a link' button on the top."
        />
      )}
    </>
  );
};

export default HomePage;
