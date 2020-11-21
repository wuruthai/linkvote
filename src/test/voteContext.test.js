import { renderHook, act } from '@testing-library/react-hooks';
import { useVote, VoteProvider } from 'context/vote.context';
import { OPERATOR_CONST } from 'constant';

test('VoteContext', () => {
  const { result, rerender } = renderHook(() => useVote(), {
    wrapper: VoteProvider,
  });
  expect.objectContaining({
    voteList: expect.any(Array),
    addNewLink: expect.any(Function),
    onVote: expect.any(Function),
    deleteLink: expect.any(Function),
  });
  act(() =>
    result.current.addNewLink({
      name: 'Hepsiburada',
      uri: 'https://www.hepsiburada.com/',
    })
  );
  expect(result.current.voteList.length).toBe(1);

  expect.objectContaining({
    id: expect.any(String),
    name: expect.any(String),
    point: expect.any(Number),
    created: expect.any(Date),
    edited: expect.any(Date),
  });

  act(() => {
    result.current.onVote(result.current.voteList[0].id, OPERATOR_CONST.PLUS);
  });
  expect(result.current.voteList[0].point).toBe(1);

  act(() => {
    result.current.onVote(result.current.voteList[0].id, OPERATOR_CONST.MINUS);
  });
  expect(result.current.voteList[0].point).toBe(0);

  act(() => {
    result.current.deleteLink(result.current.voteList[0].id);
  });
  expect(result.current.voteList.length).toBe(0);
});
