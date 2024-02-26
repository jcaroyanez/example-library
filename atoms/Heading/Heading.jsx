import './Heading.css';
import classnames from 'classnames';

export const Heading = ({ children, color = 'default', size = 'md' }) => {
  console.log({ color, size });
  return (
    <h1
      className={classnames('heading', {
        [`color-${color}`]: color,
        [`size-${size}`]: size,
      })}
    >
      {children}
    </h1>
  );
};
