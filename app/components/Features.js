import { StyleSheet, Text, Dimensions, View, SafeAreaView, AppRegistry, StatusBar, FlatList, Image } from 'react-native'
import React, { useRef, useState } from 'react'

import * as Svg from 'react-native-svg'
const { Circle, Rect } = Svg
import { SvgCssUri } from 'react-native-svg'

const { width } = Dimensions.get('window')

const SPACING = 5
const ITEM_LENGTH = width * 0.5
const BORDER_RADIUS = 10

const Features = () => {
   const flatListRef = useRef() //prepare for autoscroll
   const [images, setimages] = useState([
      { id: 0, src: `https://www.rewire.co.il/wp-content/uploads/2019/10/BetterRate-1.svg` },
      { id: 1, src: `https://www.rewire.co.il/wp-content/uploads/2019/10/Fatest-mob-1.svg` },
      { id: 2, src: `https://www.rewire.co.il/wp-content/uploads/2019/10/1000-mob-1.svg` },
      { id: 3, src: `https://www.rewire.co.il/wp-content/uploads/2019/10/Language-mob-1.svg` },
      { id: 4, src: `https://www.rewire.co.il/wp-content/uploads/2019/10/TrustedSecured-1-1.svg` }
   ])

   return (
      <SafeAreaView style={{ flex: 1, marginTop: 30 }}>
         <StatusBar barStyle="light-content" />
         <View style={{ flex: 1 }}>
            <FlatList
               data={images}
               ref={flatListRef}
               horizontal
               showsHorizontalScrollIndicator={false}
               keyExtractor={item => item.id}
               renderItem={({ item, index }) => {
                  return (
                     <View style={{ width: ITEM_LENGTH }}>
                        <View style={styles.itemContent}>
                           <SvgCssUri uri={item.src} style={styles.itemImage} />
                        </View>
                     </View>
                  )
               }}
            />
         </View>
      </SafeAreaView>
   )
}

export default Features

const styles = StyleSheet.create({
   absoluteFill: {},
   container: {},
   itemContent: {
      marginHorizontal: SPACING * 3,
      alignItems: 'center',
      backgroundColor: '#f5f3f9',
      backgroundColor: 'white',
      padding: 15,
      borderRadius: 10
   },
   itemText: {
      fontSize: 24,
      position: 'absolute',
      bottom: SPACING * 2,
      right: SPACING * 2,
      color: 'white',
      fontWeight: '600'
   },
   itemImage: {
      width: '100%',
      height: ITEM_LENGTH,
      borderRadius: BORDER_RADIUS,
      resizeMode: 'cover'
   }
})
