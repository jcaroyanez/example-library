/* TODO example test
import { Button } from './atoms/Button';
import renderer from 'react-test-renderer';

it('changes the class when hovered', () => {
  const component = renderer.create(<Button type="primary">Facebook</Button>);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});*/

import initStoryshots from '@storybook/addon-storyshots';
// TODO check then it has not been possible to generate the tests with the stories.
initStoryshots();
