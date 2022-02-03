import { httpService } from './http-service.js'
export const currencyService = {
   getCurrencies,
   getCurrencyById,
   deleteCurrency,
   saveCurrency,
   getEmptyCurrency,
   getCurrencyByCode,
   getConvertedValues,
   getDestFlags
}

var gCurrencies

async function getCurrencies(filterBy = '') {
   gCurrencies = await httpService.get(`country`)
   return gCurrencies
}

async function getCurrencyById(id) {
   return await httpService.get(`country/${id}`)
}

async function deleteCurrency(id) {
   return await httpService.delete(`country/${id}`)
}

async function _updateCurrency(country) {
   return await httpService.put(`country/${country._id}`, country)
}

async function _addCurrency(country) {
   return await httpService.post(`country`, country)
}

async function saveCurrency(country) {
   return country._id ? await _updateCurrency(country) : await _addCurrency(country)
}

async function getConvertedValues(country, destination, inputValue) {
   try {
      return destination.value * parseInt(inputValue)
   } catch (err) {
      console.log(err)
   }
}

async function getCurrencyByCode(code) {
   let country = gCurrencies.find(country => country.code.toLowerCase() === code)
   if (country) {
      let ans = await getCurrencyById(country._id)
      return ans
   }
}

async function getDestFlags() {
   let currencies = await getCurrencies()
   let flags = currencies.map(dest => {
      return { flag: dest.flag, to: dest.to }
   })
   return flags
}

function getEmptyCurrency() {
   return {
      name: '',
      code: '',
      coin: '',
      currencies: []
   }
}
