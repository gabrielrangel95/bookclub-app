import { createContext, useContext, useReducer } from 'react'

const GlobalContext = createContext()

const initialState = {
  user: null,
  token: '',
  router: 'authenticated',
}

// action -> type - data
const globalReducer = (state, action) => {
  switch (action.type) {
    case 'setUser': {
      return {
        ...state,
        user: action.data,
      }
    }
    case 'setRoute': {
      return {
        ...state,
        router: action.data,
      }
    }
    case 'setState': {
      return {
        ...state,
        ...action.data,
      }
    }

    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}

export const useGlobal = () => {
  const context = useContext(GlobalContext)
  if (context === 'undefined') {
    throw new Error('useGlobal must be used within GlobalProvider')
  }

  return context
}

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(globalReducer, initialState)

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  )
}
