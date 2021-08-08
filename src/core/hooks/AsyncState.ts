import React from 'react'

export type AsyncStateStatus = 'init' | 'loading' | 'success' | 'error'

export type AsyncStateActions<T> = { type: 'init' } | { type: 'loading' } | { type: 'success'; payload: T } | { type: 'error'; payload: any }

export type AsyncStateReducer<T> = React.Reducer<AsyncState<T>, AsyncStateActions<T>>

export interface AsyncState<T> {
  status: AsyncStateStatus
  data?: T
  error?: any
}

const initState = {
  status: 'init' as AsyncStateStatus,
}

// eslint-disable-next-line
const reducer = <T, _ = any>(state: AsyncState<T>, action: AsyncStateActions<T>): AsyncState<T> => {
  switch (action.type) {
    case 'init':
      return { status: 'init' }
    case 'loading':
      return { status: 'loading' }
    case 'success':
      return { status: 'success', data: action.payload }
    case 'error':
      return { status: 'error', error: action.payload }

    default:
      return state
  }
}

export const useAsyncState = <T>(defaultState = initState) => {
  const [state, dispatch] = React.useReducer<AsyncStateReducer<T>>(reducer, defaultState)

  const { status, data, error } = state

  const isLoading = status === 'loading'
  const isSuccess = status === 'success'
  const isError = status === 'error'

  const setLoading = React.useCallback(() => dispatch({ type: 'loading' }), [])
  const setSuccess = React.useCallback((newData: T) => dispatch({ type: 'success', payload: newData }), [])
  const setError = React.useCallback((newError?: any) => dispatch({ type: 'error', payload: newError }), [])
  const reset = React.useCallback(() => dispatch({ type: 'init' }), [])

  return {
    isLoading,
    isSuccess,
    isError,
    data,
    error,
    setLoading,
    setSuccess,
    setError,
    reset,
  }
}

export interface AsyncStateResult<T> extends Omit<ReturnType<typeof useAsyncState>, 'data'> {
  data: T
}
