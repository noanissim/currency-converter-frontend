import { Button, Image, ImageBackground, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import colors from '../config/colors'
import CalculaterOutput from './CalculaterOutput'
import CalculaterInput from './CalculaterInput'
import { loadCurrencies, getCurrencyByCode, getConvertedValues } from '../store/actions/currencyActions'
import { useSelector, useDispatch } from 'react-redux'

const Hero = () => {
   const dispatch = useDispatch()

   const { currencies } = useSelector(state => state.currencyModule)
   const [currCountry, setCurrCountry] = useState(null)
   const [currDestination, setCurrDestination] = useState(null)
   const [inputValue, setInputValue] = useState(null)
   const [convertedOutput, setConvertedOutput] = useState(null)

   useEffect(() => {
      dispatch(loadCurrencies())
      setTimeout(() => {
         if (!currCountry && !currDestination && !inputValue) {
            setCurrCountry('ils')
            setCurrDestination({ coin: '₱', flag: '🇵🇭', from: 'ILS', to: 'PHP', value: 16.026 })
            setInputValue('100')
         }
      }, 0)
      return () => {}
   }, [currCountry, currDestination, currDestination?.coin, inputValue, convertedOutput])

   const onChangeAmount = async amount => {
      setInputValue(amount)
      if (currCountry && currDestination && amount) await calcConverted(currCountry, currDestination, amount)
   }

   const onChangeCurrency = async currency => {
      try {
         let country = dispatch(getCurrencyByCode(currency))
         country = await country
         setCurrCountry(country)
         let destination = country.currencies.find(dest => dest.to.toLowerCase() === currDestination.to.toLowerCase())
         setCurrDestination(destination)
         if (country && destination && inputValue) await calcConverted(country, destination, inputValue)
      } catch (err) {
         console.log(err)
      }
   }

   const onChangeDestination = async destinationCode => {
      if (currCountry && currCountry.currencies?.length) {
         let destination = currCountry.currencies.find(dest => dest.to.toLowerCase() === destinationCode)
         await setCurrDestination(destination)
         if (currCountry && destination && inputValue) await calcConverted(currCountry, destination, inputValue)
      }
   }

   const calcConverted = async (currCountry, currDestination, inputValue) => {
      let convertedMoney = await getConvertedValues(currCountry, currDestination, inputValue)
      setConvertedOutput(convertedMoney)
      setCurrDestination(currDestination)
   }

   if (!currencies) return <Image style={{ width: 100, height: 100 }} source={require('../assets/loader.gif')} />
   return (
      <View style={styles.heroMain}>
         <View style={styles.calcContainer}>
            <Text style={styles.header}>Check out our rates</Text>
            <CalculaterInput changeAmount={onChangeAmount} changeCurrency={onChangeCurrency} />
            <CalculaterOutput convertedOutput={convertedOutput} currDestination={currDestination} changeDestination={onChangeDestination} />
         </View>
      </View>
   )
}

export default Hero

const styles = StyleSheet.create({
   heroMain: {
      backgroundColor: '#f5f3f9',
      padding: 25,
      borderRadius: 10,
      width: '90%',
      alignItems: 'center',
      alignContent: 'center',
      justifyContent: 'flex-start',
      width: 320,
      height: 280
   },
   calcContainer: {
      width: 270,
      height: 230
   },
   header: {
      fontSize: 22,
      color: colors.primary3,
      paddingBottom: 20,
      fontWeight: '500'
   }
})
