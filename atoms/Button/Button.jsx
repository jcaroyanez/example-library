import classnames from 'classnames';
import './Button.css';

export const Button = ({ children, type = 'primary', isBlock = true }) => {
  return (
    <button
      className={classnames('button', {
        [`type-${type}`]: type,
        'is-block': isBlock,
      })}
    >
      {children}
    </button>
  );
};
