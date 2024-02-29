import classnames from 'classnames';
import styles from './Button.module.css';

export const Button = ({ children, type = 'primary', isBlock = true }) => {
  return (
    <button
      className={classnames(styles.button, {
        [styles[`type-${type}`]]: type,
        [styles['is-block']]: isBlock && type !== 'tertiary',
      })}
    >
      {children}
    </button>
  );
};
