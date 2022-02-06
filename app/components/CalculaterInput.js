import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, TouchableWithoutFeedback } from 'react-native'
import { Picker } from '@react-native-picker/picker'

import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import { getCurrencyByCode } from '../store/actions/currencyActions'

const Calculater = props => {
   const dispatch = useDispatch()

   const [amount, setAmount] = useState(null)
   const [selectedCountry, setSelectedCountry] = useState('ils')
   const [coin, setCoin] = useState('₪')

   useEffect(() => {
      //only for the first render
      if (!amount) setAmount('100')
      if (selectedCountry === 'ils') props.changeCurrency(selectedCountry)
   }, [])

   const onChangemountInput = ev => {
      setAmount(ev)
      props.changeAmount(+ev)
   }

   const handleCountryChange = async (itemValue, itemIndex) => {
      setSelectedCountry(itemValue)
      props.changeCurrency(itemValue)
      let country = await dispatch(getCurrencyByCode(itemValue))
      setCoin(country.coin)
   }

   return (
      <View style={[styles.calcRow, styles.sellRow]}>
         <View style={styles.calcRowTitle}>
            <Text style={styles.rowTitle}>When you send</Text>
         </View>
         <View style={styles.calcRowInput}>
            <View style={styles.amountInputContainer}>
               <TextInput value={amount} onChangeText={onChangemountInput} style={styles.amountInput} keyboardType="numeric"></TextInput>
               <Text style={styles.coinSymbol}>{coin}</Text>
            </View>
            <View style={styles.currencyInput}>
               <Picker mode="dropdown" selectedValue={selectedCountry} style={styles.listCountry} onValueChange={(itemValue, itemIndex) => handleCountryChange(itemValue, itemIndex)}>
                  <Picker.Item label="🇮🇱 ILS" value="ils" />
                  <Picker.Item label="🇬🇧 GBP" value="gbp" />
                  <Picker.Item label="🇪🇺 EUR" value="eur" />
               </Picker>
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
   listCountry: {
      width: 120,
      position: 'absolute',
      left: 0,
      bottom: 0
   }
})
