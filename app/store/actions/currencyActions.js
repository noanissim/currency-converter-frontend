import { currencyService } from '../../services/currencyService'

export function loadCurrencies() {
   return async (dispatch, getState) => {
      const { filterBy } = getState().currencyModule
      try {
         const currencies = await currencyService.getCurrencies(filterBy)
         dispatch({ type: 'SET_CURRENCIES', currencies })
      } catch (err) {
         console.log(err)
      }
   }
}

export function removeCurrency(currencyId) {
   return async dispatch => {
      try {
         await currencyService.deleteCurrency(currencyId)
         dispatch({ type: 'REMOVE_CURRENCY', currencyId })
      } catch (err) {
         console.log(err)
      }
   }
}

export function setFilterBy(filterBy) {
   return async dispatch => {
      dispatch({ type: 'SET_FILTER_BY', filterBy })
   }
}

export function getCurrencyById(currencyId) {
   return async () => {
      return await currencyService.getCurrencyById(currencyId)
   }
}

export function getCurrencyByCode(currencyCode) {
   return async () => {
      return await currencyService.getCurrencyByCode(currencyCode)
   }
}

export function getConvertedValues(destination, inputValue) {
   return currencyService.getConvertedValues(destination, inputValue)
}

export function getDestFlags() {
   return async () => {
      return currencyService.getDestFlags()
   }
}
