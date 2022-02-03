import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '../config/colors'

const Features = () => {
   return (
      <View style={styles.featuresMain}>
         <Text>featuresss</Text>
      </View>
   )
}

export default Features

const styles = StyleSheet.create({
   featuresMain: {
      marginTop: 20,
      width: 320,
      margin: 'auto',
      backgroundColor: '#f5f3f9',
      padding: 25,
      borderRadius: 10,
      alignItems: 'center',
      alignContent: 'center',
      justifyContent: 'flex-start',
      height: 280
   }
})
