import React, { useState } from 'react';
import { View, Image } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import {
  GamesContainer,
  GamesRectangle,
  NewGamesText,
} from '../components/ScrolPage';

const images = [
  require('./image/g.png'),
  require('./image/cyberpunk.png'),
  require('./image/butterfly.png'),
];


const ScrolPage = ({ someProp }) => {
  const [activeSlide, setActiveSlide] = useState(0);

  const renderCarouselItem = ({ item, index }) => {
    return (
      <View>
        <Image source={item} style={{ width: 200, height: 200 }} />
      </View>
    );
  };

  return (
    <View style= {{backgroundColor: 'white'}}>
      <GamesContainer>
        <GamesRectangle>
          <NewGamesText>NEW GAMES</NewGamesText>
        </GamesRectangle>
      </GamesContainer>
      <View style={{ backgroundColor: 'white', alignItems: 'center', marginTop: 20, }}>
        <Carousel
          data={images}
          renderItem={renderCarouselItem}
          sliderWidth={300}
          itemWidth={200}
          loop={true}
          autoplay={true}
          autoplayDelay={1000}
          autoplayInterval={2000}
          onSnapToItem={(index) => setActiveSlide(index)}
        />
      </View>
    </View>
  );
};

export default ScrolPage;
