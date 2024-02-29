import { Spacer } from '../../layout/Spacer';

export default {
  component: Spacer,
};

export const Default = {
  args: {
    isVisible: true,
    size: 'lg',
  },
};

export const Horizontal = {
  render: () => <Spacer.Horizontal size="lg" isVisible />,
};

export const Vertical = {
  render: () => <Spacer.Vertical size="lg" maxHeight="100px" isVisible />,
};
