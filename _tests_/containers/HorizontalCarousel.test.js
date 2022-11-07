import { cleanup, render } from '@testing-library/react-native';
import HorizontalCarousel from '../../src/containers/HorizontalCarousel';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

afterEach(() => cleanup());

test('render horizontal carousel without issues', async () => {
  const Stack = createNativeStackNavigator();

  const productsMock = [
    {
      id: 111,
      title: 'Dandelion',
      binomialName: 'Taraxacum officinale',
      description:
        "Taraxacum officinale, the dandelion or common dandelion, is a flowering herbaceous perennial plant of the dandelion genus in the family Asteraceae (syn. Compositae). The common dandelion is well known for its yellow flower heads that turn into round balls of many silver-tufted fruits that disperse in the wind. These balls are usually called 'clocks' in both British and American English. The name 'blowball' is also used.",
      ukOnly: false,
      image1:
        'https://upload.wikimedia.org/wikipedia/commons/9/9d/Taraxacum_officinale_PID1200-1.jpg',
      image2:
        'https://upload.wikimedia.org/wikipedia/commons/a/a8/Bombus_ruderarius_-_Taraxacum_officinale_-_Keila.jpg',
      accentColor: '#f52459',
      backgroundColor: '#841225',
      textColor: '#ffffff',
      order: '4',
      price: '2.99',
    },
    {
      id: 114,
      title: 'Elder',
      binomialName: 'Sambucus nigra',
      description:
        "Sambucus nigra is a species complex of flowering plants in the family Adoxaceae native to most of Europe and North America. Common names include elder, elderberry, black elder, European elder, European elderberry, and European black elderberry. It grows in a variety of conditions including both wet and dry fertile soils, primarily in sunny locations. The plant is a very common feature of hedgerows and scrubland in Britain and northern Europe, but is also widely grown as an ornamental shrub or small tree. Both the flowers and the berries have a long tradition of culinary use, primarily for cordial and wine. The Latin specific epithet nigra means 'black', and refers to the deeply dark colour of the berries.",
      ukOnly: false,
      image1:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Sambucus_nigra2.jpg/800px-Sambucus_nigra2.jpg',
      image2: 'https://upload.wikimedia.org/wikipedia/commons/8/8c/Flowers_Black_Elder.jpg',
      accentColor: '#8a8989',
      backgroundColor: '#424242',
      textColor: '#FFCCCC',
      order: '3',
      price: '1.99',
    },
  ];

  const _render = () => <HorizontalCarousel products={productsMock} />;

  await render(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={_render} />
      </Stack.Navigator>
    </NavigationContainer>
  );
});
