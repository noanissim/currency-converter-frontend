import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import colors from '../config/colors'
import CalculaterOutput from './CalculaterOutput'
import CalculaterInput from './CalculaterInput'
import { loadCurrencies } from '../store/actions/currencyActions'
import { useSelector, useDispatch } from 'react-redux'

const Hero = () => {
   const dispatch = useDispatch()
   const { currencies } = useSelector(state => state.currencyModule)
   useEffect(() => {
      dispatch(loadCurrencies())
      return () => {}
   }, [])

   return (
      <View style={styles.heroMain}>
         <View style={styles.calcContainer}>
            <Text style={styles.header}>Check out our rates</Text>
            <CalculaterInput />
            <CalculaterOutput />
            <Button title="submit?" />
         </View>
      </View>
   )
}

export default Hero

const styles = StyleSheet.create({
   heroMain: {
      backgroundColor: '#f5f3f9',
      padding: 25,
      borderRadius: 5,
      width: '90%',
      alignItems: 'center',
      alignContent: 'center',
      justifyContent: 'flex-start',
      width: 320,
      height: 300
   },
   calcContainer: {
      width: 270,
      height: 250
   },
   header: {
      fontSize: 22,
      color: colors.primary3,
      paddingBottom: 20,
      fontWeight: '500'
   }
})
