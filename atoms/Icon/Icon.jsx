import { Picture } from '../Picture';
import { mapIcon, mapSize } from './helpers';
import classnames from 'classnames';
import './Icon.css';

export const Icon = ({ type, size = 'md', hasBackground }) => {
  return (
    <div
      className={classnames('icon', {
        'has-background': hasBackground,
      })}
      style={{ width: mapSize(size), height: mapSize(size) }}
    >
      <Picture src={mapIcon(type)} width={mapSize(size)} />
    </div>
  );
};
