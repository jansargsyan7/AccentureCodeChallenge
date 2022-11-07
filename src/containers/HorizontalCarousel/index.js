import React from 'react';
import { View, StyleSheet } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import CarouselCardItem, { SLIDER_WIDTH, ITEM_WIDTH } from './CarouselItem';

const _renderItem = ({ item, index }) => {
  return <CarouselCardItem item={item} index={index} />;
};

const HorizontalCarousel = ({ products }) => {
  const [index, setIndex] = React.useState(0);
  const isCarousel = React.useRef(null);
  return (
    <View style={styles.container}>
      <Carousel
        layout="default"
        layoutCardOffset={9}
        ref={isCarousel}
        data={products}
        renderItem={_renderItem}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        onSnapToItem={(index) => setIndex(index)}
        useScrollView={true}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
});
export default HorizontalCarousel;
