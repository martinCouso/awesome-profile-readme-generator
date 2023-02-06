import { useReducer, useRef, useCallback } from 'react'

interface State<T> {
  data?: T
  error?: Error
  loading: boolean
}

export enum FETCH_ACTION {
  LOADING = 'LOADING',
  ERROR = 'ERROR',
  SUCCESS = 'SUCCESS',
}

type Action<T> =
  | { type: FETCH_ACTION.LOADING }
  | { type: FETCH_ACTION.SUCCESS; payload: T }
  | { type: FETCH_ACTION.ERROR; payload: Error }

function useFetch<T = unknown>() {
  const cancel = useRef<boolean>(false)

  const initialState: State<T> = {
    error: undefined,
    data: undefined,
    loading: false,
  }

  const fetchReducer = (state: State<T>, action: Action<T>): State<T> => {
    switch (action.type) {
      case FETCH_ACTION.LOADING:
        return { ...initialState }
      case FETCH_ACTION.SUCCESS:
        return { ...initialState, data: action.payload }
      case FETCH_ACTION.ERROR:
        return { ...initialState, error: action.payload }
      default:
        return state
    }
  }

  const [state, dispatch] = useReducer(fetchReducer, initialState)

  const callApi = useCallback(
    async (url: string, file: boolean, options?: RequestInit) => {
      if (!url || (options?.method !== 'GET' && !options?.body)) return
      cancel.current = false
      dispatch({ type: FETCH_ACTION.LOADING })
      try {
        const response = await fetch(url, options)
        if (!response.ok) {
          throw new Error(response.statusText)
        }
        const data = file
          ? ((await response.blob()) as T)
          : await response.json()
        if (cancel.current) return
        dispatch({ type: FETCH_ACTION.SUCCESS, payload: data })
      } catch (error) {
        if (cancel.current) return
        dispatch({ type: FETCH_ACTION.ERROR, payload: error as Error })
      }
    },
    [dispatch]
  )

  return { ...state, callApi }
}

export default useFetch
