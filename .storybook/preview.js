import 'minireset.css'
import '../styles/main.css';
import '../styles/tokens.css';

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
        expanded: true,
      },
    },
  },
};

export default preview;
