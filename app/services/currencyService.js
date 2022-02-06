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

async function getCurrencies(filterBy = '') {
   return await httpService.get(`country`)
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

function getConvertedValues(destination, inputValue) {
   return destination.value * parseInt(inputValue)
}

async function getCurrencyByCode(code) {
   try {
      let currencies = await getCurrencies()
      let country = currencies.find(country => country.code.toLowerCase() === code)
      if (country) {
         let ans = await getCurrencyById(country._id)
         return ans
      }
   } catch (err) {
      console.log(err)
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
