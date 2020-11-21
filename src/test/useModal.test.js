import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { renderHook, act } from '@testing-library/react-hooks';
import { useModal } from 'hooks';

const modalProps = {
  title: 'title',
  description: 'description',
  onApply: () => {},
};

test('useModal()', () => {
  const { result, rerender } = renderHook(() => useModal(modalProps));

  expect(result.current.visibleModal).toBe(false);
  expect(result.current.Modal).toBe(null);
  expect(result.current.showModal).toBeInstanceOf(Function);

  act(() => result.current.showModal());
  expect(result.current.visibleModal).toBe(true);
  expect(result.current.showModal).toBeInstanceOf(Function);

  const Modal = () => result.current.Modal;
  render(<Modal />);
  const titleEl = screen.getByText(modalProps.title);
  const descriptionEl = screen.getByText(modalProps.description);
  expect(titleEl).toBeInTheDocument();
  expect(descriptionEl).toBeInTheDocument();
});
