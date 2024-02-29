import classnames from 'classnames';

import './Spacer.css';
import { getSize } from './helpers';

export const Horizontal = ({ size, isVisible }) => {
  return (
    <div
      className={classnames({
        'is-visble': isVisible,
      })}
      style={{
        display: 'block',
        width: '100%',
        height: getSize(size),
      }}
    />
  );
};
