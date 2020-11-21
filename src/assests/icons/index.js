import React from 'react';
import ArrowIcon from './arrow.icon';

export const DownArrowIcon = (props) => <ArrowIcon {...props} />;
export const UpArrowIcon = (props) => <ArrowIcon direction="up" {...props} />;
export const RightArrowIcon = (props) => (
  <ArrowIcon direction="right" {...props} />
);
export const LeftArrowIcon = (props) => (
  <ArrowIcon direction="left" {...props} />
);

export { default as PlusIcon } from './plus.icon';
export { default as CaretDownIcon } from './caret-down.icon';
export { default as TrashIcon } from './trash.icon';
export { default as BrokeIcon } from './broke.icon';
