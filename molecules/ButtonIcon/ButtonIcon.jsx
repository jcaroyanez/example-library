import { Button } from '../../atoms/Button';
import { Icon } from '../../atoms/Icon/Icon';

export const ButtonIcon = ({ children, type = 'secondary', icon }) => {
  return (
    <Button type={type} isBlock={false}>
      <span style={{ marginRight: 10 }}>{children}</span>
      <Icon type={icon} />
    </Button>
  );
};
