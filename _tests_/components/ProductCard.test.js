import { cleanup, render } from '@testing-library/react-native';
import ProductCard from '../../src/components/ProductCard';

afterEach(() => cleanup());

test('render product card without issues', async () => {
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
  const indexMock = 1;

  await render(<ProductCard product={productMock} index={indexMock} />);
});
