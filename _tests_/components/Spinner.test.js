import { cleanup, render } from '@testing-library/react-native';
import Spinner from '../../src/components/Spinner';

afterEach(() => cleanup());

test('render spinner without issues', async () => {
  const isLoadingMock = true;

  await render(<Spinner isLoading={isLoadingMock} />);
});
