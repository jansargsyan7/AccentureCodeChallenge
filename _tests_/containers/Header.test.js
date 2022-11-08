import { cleanup, render, screen, within } from '@testing-library/react-native';
import Header from '../../src/containers/Header';
import '@testing-library/jest-native/extend-expect';

afterEach(() => cleanup());

test('render header without issues', async () => {
  await render(<Header>Hello</Header>);
});

test('render header with back button visible', async () => {
  await render(<Header back>Hello</Header>);
  const { getByText } = within(screen.getByTestId('backView'));
  expect(getByText('<< Back')).toBeVisible();
});

test('render header without the back button', async () => {
  await render(<Header>Hello</Header>);
  const { queryByText } = within(screen.getByTestId('backView'));
  expect(queryByText('<< Back')).toBeNull();
});
