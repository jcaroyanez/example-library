import { Horizontal } from './Horizontal';
import { Vertical } from './Vertical';
import classnames from 'classnames';

import './Spacer.css';
import { getSize } from './helpers';

export const Spacer = ({ size, isVisible }) => {
  return (
    <div
      className={classnames({
        'is-visble': isVisible,
      })}
      style={{
        display: 'inline-block',
        width: getSize(size),
        height: getSize(size),
      }}
    />
  );
};

Spacer.Horizontal = Horizontal;
Spacer.Vertical = Vertical;
