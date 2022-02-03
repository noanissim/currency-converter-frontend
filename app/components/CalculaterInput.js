import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, TouchableWithoutFeedback } from 'react-native'
import { Picker } from '@react-native-picker/picker'
import React, { useEffect, useState } from 'react'

const Calculater = () => {
   const [amount, setAmount] = useState(null)
   //  const [isListShown, setIsListShown] = useState(false)
   const [selectedCountry, setSelectedCountry] = useState()

   useEffect(() => {
      setAmount('100')
      return () => {}
   }, [])

   const onChangemountInput = ev => {
      setAmount(ev)
   }

   const handleCountryChange = (itemValue, itemIndex) => {
      setSelectedCountry(itemValue)
   }

   //  const handleListPress = () => {
   //     console.log('list pressed')
   //     setIsListShown(prevIsListShown => !prevIsListShown)
   //  }

   return (
      <View style={[styles.calcRow, styles.sellRow]}>
         <View style={styles.calcRowTitle}>
            <Text style={styles.rowTitle}>When you send</Text>
         </View>
         <View style={styles.calcRowInput}>
            <View style={styles.amountInputContainer}>
               <TextInput value={amount} onChangeText={onChangemountInput} nChange style={styles.amountInput} keyboardType="numeric"></TextInput>
               <Text style={styles.coinSymbol}>$</Text>
            </View>
            <View style={styles.currencyInput}>
               {/* <TouchableOpacity onPress={handleListPress}>
                  <View style={styles.currentCountry}>
                     <Image resizeMode="cover" style={styles.countryImg} source={require('../assets/countries/isr.png')} />
                     <Text style={styles.amountInput}>ILS</Text>
                  </View>
               </TouchableOpacity> */}
               {/* {isListShown && (
                  <TouchableOpacity> */}
               <Picker mode="dropdown" selectedValue={selectedCountry} style={styles.listCountry} onValueChange={(itemValue, itemIndex) => handleCountryChange(itemValue, itemIndex)}>
                  <Picker.Item label="🇮🇱 ILS" value="ils" />
                  <Picker.Item label="🇬🇧 GBP" value="gbp" />
                  <Picker.Item label="🇪🇺 EUR" value="eur" />
               </Picker>
               {/* </TouchableOpacity>
               )} */}
            </View>
         </View>
      </View>
   )
}

export default Calculater

const styles = StyleSheet.create({
   calcRow: {},
   sellRow: {},
   calcRowTitle: {
      marginBottom: 15
   },
   rowTitle: {
      fontSize: 16,
      fontWeight: '400',
      color: '#adacab'
   },
   calcRowInput: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'stretch',
      marginBottom: 10
   },
   amountInputContainer: {
      borderBottomColor: '#b9babb',
      borderRightWidth: 0,
      borderLeftWidth: 0,
      borderTopWidth: 0,
      borderStyle: 'dashed',
      borderWidth: 1,
      width: 100,
      paddingBottom: 12,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-start'
   },
   amountInput: {
      // width: 100,
      flex: 0,
      height: 24,
      lineHeight: 24,
      borderWidth: 1,
      borderColor: 'transparent',
      padding: 0,
      backgroundColor: 'transparent',
      fontSize: 24,
      color: '#606060',
      zIndex: 2
   },
   coinSymbol: {
      left: 10,
      fontSize: 14,
      color: '#606060',
      zIndex: 1
   },
   currencyInput: {
      borderBottomColor: '#b9babb',
      borderRightWidth: 0,
      borderLeftWidth: 0,
      borderTopWidth: 0,
      borderStyle: 'dashed',
      borderWidth: 1,
      width: 100,
      paddingBottom: 12
   },
   currentCountry: {
      height: 24,
      borderWidth: 1,
      fontSize: 24,
      color: '#606060',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderWidth: 1,
      borderColor: 'transparent'
   },
   countryImg: {
      width: 30,
      height: 50,
      overflow: 'hidden',
      borderWidth: 2,
      borderRadius: 75,
      marginLeft: 10
   },
   listCountry: {
      width: 120,
      position: 'absolute',
      left: 0,
      bottom: 0
   },
   listCountryPicker: {}
})
