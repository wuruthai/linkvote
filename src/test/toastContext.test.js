import { renderHook, act } from '@testing-library/react-hooks';
import {
  useToaster,
  ToasterProvider,
  TOASTER_TIME,
} from 'context/toaster.context';

test('ToasterContext', () => {
  const { result, rerender } = renderHook(() => useToaster(), {
    wrapper: ToasterProvider,
  });
  expect.objectContaining({
    showToaster: expect.any(Function),
    visibleToaster: expect.any(Boolean),
  });
  act(() => result.current.showToaster('Showed'));
  expect(result.current.visibleToaster).toBe(true);
  setTimeout(() => {
    expect(result.current.visibleToaster).toBe(false);
  }, TOASTER_TIME + 100);
});
