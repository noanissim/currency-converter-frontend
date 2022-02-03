import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, TouchableWithoutFeedback } from 'react-native'
import { Picker } from '@react-native-picker/picker'
import React, { useEffect, useState } from 'react'

const CalculaterOutput = props => {
   const [selectedCountry, setSelectedCountry] = useState(null)
   const [coin, setCoin] = useState(null)

   useEffect(() => {
      if (!selectedCountry) props.changeDestination('php')
      if (!coin) setCoin('₱')

      if (selectedCountry && props.currDestination) {
         props.changeDestination(selectedCountry)
         setCoin(props.currDestination.coin)
      }
      return () => {}
   }, [coin, props.currDestination, props.convertedOutput])

   const handleCountryChange = async (itemValue, itemIndex) => {
      setSelectedCountry(itemValue)
      props.changeDestination(itemValue)
      setCoin(props.currDestination.coin)
   }

   return (
      <View style={[styles.calcRow, styles.buyRow]}>
         <View style={styles.calcRowTitle}>
            <Text style={styles.rowTitle}>They will receive</Text>
         </View>
         <View style={styles.calcRowOutput}>
            <View style={styles.amountOutputContainer}>
               <Text style={styles.amountOutput}>{props.convertedOutput}</Text>
               <Text style={styles.coinSymbol}>{coin}</Text>
            </View>
            <View style={styles.currencyOutput}>
               <Picker mode="dropdown" selectedValue={selectedCountry} style={styles.listCountry} onValueChange={(itemValue, itemIndex) => handleCountryChange(itemValue, itemIndex)}>
                  <Picker.Item label="🇵🇭 PHP" value="php" />
                  <Picker.Item label="🇳🇵 NPR" value="npr" />
                  <Picker.Item label="🇱🇰 LKR" value="lkr" />
                  <Picker.Item label="🇮🇳 INR" value="inr" />
                  <Picker.Item label="🇨🇳 CNY" value="cny" />
                  <Picker.Item label="🇹🇭 THB" value="thb" />
                  <Picker.Item label="🇬🇭 GHS" value="ghs" />
                  <Picker.Item label="🇰🇪 KES" value="kes" />
                  <Picker.Item label="🇳🇬 USD" value="usd" />
                  <Picker.Item label="🇿🇦 ZAR" value="zar" />
               </Picker>
            </View>
         </View>
      </View>
   )
}

export default CalculaterOutput

const styles = StyleSheet.create({
   calcRow: {},
   buyRow: {},
   calcRowTitle: {
      marginBottom: 15
   },
   rowTitle: {
      fontSize: 16,
      fontWeight: '400',
      color: '#adacab'
   },
   calcRowOutput: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'stretch',
      marginBottom: 10
   },
   amountOutputContainer: {
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
   amountOutput: {
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
   currencyOutput: {
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
