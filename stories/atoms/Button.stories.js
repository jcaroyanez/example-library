import { Button } from '../../atoms/Button';

export default {
  component: Button,
};

export const Primary = {
  args: {
    children: 'Button',
    type: 'primary',
  },
};

export const Secondary = {
  args: {
    children: 'Button',
    type: 'secondary',
  },
};

export const Tertiary = {
  args: {
    children: 'Text of test',
    type: 'tertiary',
  },
};
