import { getWidth } from './helpers';
import './Picture.css';

export const Picture = ({ width, src }) => {
  return (
    <picture className="picture">
      <img src={src} style={{ maxWidth: getWidth(width) }} />
    </picture>
  );
};
