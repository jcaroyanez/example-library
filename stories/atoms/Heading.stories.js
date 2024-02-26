import { Heading } from '../../atoms/Heading';

export default {
  component: Heading,
  argTypes: {
    color: {
      control: 'text',
      description: 'color text can it default or primary',
    },
    size: {
      control: 'text',
      description: 'size of text md, sm, xs',
    },
  },
};

export const Default = {
  args: {
    children: 'hello',
  },
};

export const Primary = {
  args: {
    children: 'hello',
    color: 'primary',
  },
};

export const Small = {
  args: {
    children: 'hello',
    color: 'primary',
    size: 'sm',
  },
};

export const ExtraSmall = {
  args: {
    children: 'hello',
    color: 'primary',
    size: 'xs',
  },
};
