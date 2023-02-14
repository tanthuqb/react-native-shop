import { View,  Dimensions, Image, StyleSheet } from 'react-native'
import React, { useRef } from 'react'
import { colors, defaultStyle } from '../styles/styles'
import Header from '../components/Header'
import { Carousel } from 'react-native-snap-carousel-v4'

const SLIDER_WIDTH = Dimensions.get("window").width;
const ITEM_WIDTH = SLIDER_WIDTH

const ProductDetails = ({ route: { params } }) => {

  const isCarousel = useRef(null)
  const images = [
    {
      id: '213123d',
      url: 'https://picsum.photos/id/237/200/300'
    },
    {
      id: '4223423',
      url: 'https://picsum.photos/id/15/200/300'
    },
    {
      id: '213123d',
      url: 'https://picsum.photos/id/20/200/300'
    }
  ]
  return (
    <View style={{
      ...defaultStyle,
      padding: 0,
      backgroundColor: colors.color1
    }}>
      <Header back={true} />
      {/* Carousel */}
      <Carousel
        layout='stack'
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        ref={isCarousel}
        data={images}
        renderItem={CarouselCardItem}
      ></Carousel>
    </View>
  )
}

const CarouselCardItem = ({ item, index }) => (
  <View style={style.container} key={index}>
    <Image source={{ uri: item.url }}   style={style.image}/>
  </View>
)

const style = StyleSheet.create({
  container: {
    backgroundColor: colors.color1,
    width: ITEM_WIDTH,
    paddingVertical: 40,
    height: 380,
  },
  image: {
    width: ITEM_WIDTH,
    resizeMode: "contain",
    height: 250,
  },
})

export default ProductDetails