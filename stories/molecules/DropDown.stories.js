import { DropDown } from '../../molecules/DropDown';

export default {
  component: DropDown,
};

export const Default = {
  args: {
    options: [
      {
        text: '8:00 AM',
        value: 800,
      },
      {
        text: '9:00 PM',
        value: 900,
      },
      {
        text: '1:00 PM',
        value: 1300,
      },
    ],
    value: 'hello',
    onChange: () => {
      return;
    },
  },
};
