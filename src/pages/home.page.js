import React from 'react';
import { SubmitLinkButton, VoteList } from 'containers';
import { Pagination, Select, EmptyPage } from 'components';
import { useVote } from 'context/vote.context';
import { useSorted, usePagination } from 'hooks';
import sortingData from 'data/vote-list-sorting.data';
import 'styles/home.page.scss';

const HomePage = () => {
  const { voteList } = useVote();
  const { sortedList, selectedSortingItem, setSelectedSortingItem } = useSorted(
    voteList,
    sortingData[0]
  );
  const { pageData, pageNum, setPageNum } = usePagination(sortedList);
  return (
    <>
      <SubmitLinkButton className="home-page-submit-link-button" />

      {voteList.length > 0 ? (
        <>
          <Select
            name="vote-sorting"
            valueKey="id"
            data={sortingData}
            value={selectedSortingItem.id}
            onChange={(item) => setSelectedSortingItem(item)}
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
