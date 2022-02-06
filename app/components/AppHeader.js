import { Image, StyleSheet, Text, View, StatusBar, Platform } from 'react-native'
import colors from '../config/colors'
import React from 'react'

const AppHeader = () => {
   return (
      <View style={styles.mainHeader}>
         <View style={styles.logoSection}>
            <Image resizeMode="contain" style={styles.logo} source={require('../assets/Converter1.png')} />
         </View>
         <View style={styles.navBar}>
            <Text style={styles.navLink}>Convert</Text>
            <Text style={styles.navLink}>About</Text>
         </View>
      </View>
   )
}

export default AppHeader

const styles = StyleSheet.create({
   mainHeader: {
      paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight + 10 : 20,
      backgroundColor: '#0099ff90',
      paddingHorizontal: 20,
      paddingBottom: 20,
      height: 120,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between'
   },
   logoSection: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start'
   },
   logo: {
      height: 90,
      justifyContent: 'flex-start',
      width: 90
   },
   navBar: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between'
   },
   navLink: {
      marginHorizontal: 10,
      color: colors.white,
      fontSize: 20
   }
})
