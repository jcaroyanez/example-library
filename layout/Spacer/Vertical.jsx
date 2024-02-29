import classnames from 'classnames';

import './Spacer.css';
import { getSize } from './helpers';

export const Vertical = ({ size, maxHeight = '100%', isVisible }) => {
  return (
    <div
      className={classnames({
        'is-visble': isVisible,
      })}
      style={{
        display: 'inline-block',
        width: getSize(size),
        height: '100vh',
        maxHeight,
      }}
    />
  );
};
