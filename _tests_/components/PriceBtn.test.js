import { cleanup, render } from '@testing-library/react-native';
import PriceBtn from '../../src/components/PriceBtn';

afterEach(() => cleanup());

test('render price button without issues', async () => {
  const productMock = {
    id: 111,
    title: 'Test',
    binomialName: 'Test',
    description: 'Desc',
    ukOnly: true,
    image1: 'http://',
    image2: 'http://',
    accentColor: 'test',
    backgroundColor: 'bgcolour',
    textColor: 'Test',
    order: 'Test',
    price: 'Test',
  };
  const priceMock = '2.99';

  await render(<PriceBtn product={productMock} price={priceMock} />);
});
