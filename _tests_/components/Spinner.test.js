import { cleanup, render } from '@testing-library/react-native';
import Spinner from '../../src/components/Spinner';

afterEach(() => cleanup());

test('given correct credentials, gets response token.', async () => {
  const isLoadingMock = true;

  await render(<Spinner isLoading={isLoadingMock} />);
});
