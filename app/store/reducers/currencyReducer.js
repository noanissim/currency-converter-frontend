const INITIAL_STATE = {
   currencies: null,
   filterBy: null
}

export function currencyReducer(state = INITIAL_STATE, action) {
   switch (action.type) {
      case 'SET_CURRENCIES':
         return {
            ...state,
            currencies: [...action.currencies]
         }

      case 'ADD_CURRENCY':
         return {
            ...state,
            currencies: [...state.currencies, action.currency]
         }

      case 'REMOVE_CURRENCY':
         return {
            ...state,
            currencies: state.currencies.filter(currency => currency._id !== action.currencyId)
         }

      case 'UPDATE_CURRENCY':
         return {
            ...state,
            currencies: state.currencies.map(currency => (currency._id === action.currency._id ? action.currency : currency))
         }
      case 'SET_FILTER_BY':
         return {
            ...state,
            filterBy: { ...action.filterBy }
         }

      default:
         return state
   }
}
