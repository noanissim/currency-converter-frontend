import { ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '../config/colors'
import Hero from '../components/Hero'
import Features from '../components/Features'

const Homepage = () => {
   return (
      <ScrollView style={styles.scrollView}>
         <View style={styles.homepageMain}>
            <Hero />
            <Features />
         </View>
      </ScrollView>
   )
}

export default Homepage

const styles = StyleSheet.create({
   homepageMain: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'flex-start',
      marginVertical: 10
   },
   scrollView: {
      flex: 1,
      width: '100%',
      height: '100%'
   }
})
