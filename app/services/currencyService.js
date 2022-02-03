import { httpService } from './http-service.js'
import axios from 'axios'
export const currencyService = {
   getCurrencies,
   getCurrencyById,
   deleteCurrency,
   saveCurrency,
   getEmptyCurrency
}

const API_KEY = 'edcfa3216ba52990434c'
let gDefaultCurrencies = [
   {
      _id: _makeId(),
      name: 'Europe',
      code: 'EUR',
      coin: '€',
      currencies: []
   },
   {
      _id: _makeId(),
      name: 'Israel',
      code: 'ISR',
      coin: '₪',
      currencies: []
   },
   {
      _id: _makeId(),
      name: 'United Kingdom',
      code: 'GBP',
      coin: '£',
      currencies: []
   }
]

const emptyToCountry = {
   _id: _makeId(),
   name: '',
   code: '',
   coin: '',
   value: null
}

let destinationCountries = [
   {
      _id: _makeId(),
      name: 'Philippines',
      code: 'PHP',
      coin: '₱',
      flag: '🇵🇭'
   },
   {
      _id: _makeId(),
      name: 'Nepal',
      code: 'NPR',
      coin: '₨',
      flag: '🇳🇵'
   },
   {
      _id: _makeId(),
      name: 'Sri Lankas',
      code: 'LKR',
      coin: '₨',
      flag: '🇱🇰'
   },
   {
      _id: _makeId(),
      name: 'India',
      code: 'INR',
      coin: '₹',
      flag: '🇮🇳'
   },
   {
      _id: _makeId(),
      name: 'China',
      code: 'CNY',
      coin: '¥',
      flag: '🇨🇳'
   },
   {
      _id: _makeId(),
      name: 'Thiland',
      code: 'THB',
      coin: '฿',
      flag: '🇹🇭'
   },
   {
      _id: _makeId(),
      name: 'Ghana',
      code: 'GHS',
      coin: 'GH₵',
      flag: '🇬🇭'
   },
   {
      _id: _makeId(),
      name: 'Kenya',
      code: 'KES',
      coin: 'K',
      flag: '🇰🇪'
   },
   {
      _id: _makeId(),
      name: 'Nigeria',
      code: 'USD',
      coin: '$',
      flag: '🇳🇬'
   },
   {
      _id: _makeId(),
      name: 'South Africa',
      code: 'ZAR',
      coin: 'R',
      flag: '🇿🇦'
   }
]

var gCurrencies = _loadCurrencies()

async function getCurrency(filterBy = null) {
   let url = `https://free.currconv.com/api/v7/convert?q=${filterBy.from}_${filterBy.to}&apiKey=${API_KEY}`
   try {
      const res = await axios.get(url)
      console.log('res.data.results :>>', res.data.results)
      return res.data
   } catch (err) {
      console.log(err)
   }
}

async function getCurrencies(filterBy = '') {
   gDefaultCurrencies.forEach(country => {
      let from = country.code
      let myFilter = { from: '', to: '', value: null }
      destinationCountries.forEach(async destination => {
         myFilter.from = from
         myFilter.to = destination.code

         let res = await getCurrency(myFilter)
         // console.log('res :>>', res)
         // if (res.results && res.results.value) myFilter.value = res.results?.val
      })
      country.currencies.push(myFilter)
   })
   // return gDefaultCurrencies
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

function getEmptyCurrency() {
   return {
      name: '',
      code: '',
      coin: '',
      currencies: []
   }
}
function _loadCurrencies() {
   let currencies = gDefaultCurrencies
   return currencies
}

// function filter(filterBy) {
//    const name = filterBy.name.toLocaleLowerCase()
//    const phone = filterBy.phone
//    const email = filterBy.email.toLocaleLowerCase()
//    return currencies.filter(currency => {
//       return currency.name.toLocaleLowerCase().includes(name) && currency.phone.includes(phone) && currency.email.toLocaleLowerCase().includes(email)
//    })
// }
function filter(term) {
   term = term.toLocaleLowerCase()
   return gCurrencies.filter(currency => {
      return currency.name.toLocaleLowerCase().includes(term) || currency.phone.toLocaleLowerCase().includes(term) || currency.email.toLocaleLowerCase().includes(term)
   })
}

function _makeId(length = 10) {
   var txt = ''
   var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
   for (var i = 0; i < length; i++) {
      txt += possible.charAt(Math.floor(Math.random() * possible.length))
   }
   return txt
}
