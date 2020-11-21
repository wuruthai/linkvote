import { useMemo, useState } from 'react';

const usePagination = (data, pageSize = 5, defaultPageNum = 1) => {
  const [pageNum, setPageNum] = useState(defaultPageNum);

  const pageData = useMemo(() => {
    const copyData = [...data];
    const begin = (pageNum - 1) * pageSize;
    const end = begin + pageSize;
    return copyData.slice(begin, end);
  }, [data, pageNum, pageSize]);

  return { pageNum, setPageNum, pageData };
};

export default usePagination;
