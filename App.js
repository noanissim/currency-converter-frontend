import AppHeader from './app/components/AppHeader'
import Homepage from './app/screens/Homepage'
import { ImageBackground, StyleSheet } from 'react-native'
import React from 'react'
import { Provider } from 'react-redux'
import { store } from './app/store/index'

export default function App() {
   return (
      <Provider store={store}>
         <ImageBackground resizeMode="cover" style={styles.container} source={require('./app/assets/bgc1.jpg')}>
            <AppHeader />
            <Homepage />
         </ImageBackground>
      </Provider>
   )
}

const styles = StyleSheet.create({
   container: {
      flex: 1
   },
   background: {
      flex: 1
   }
})
