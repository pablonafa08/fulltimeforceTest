import { Reducer } from 'react'
import { contextFactory } from 'core/utils'

export type SupportedLocales = 'es' | 'en'

type Locales<T> = Record<SupportedLocales, T>

interface LocaleState {
  locale: SupportedLocales
  locales: Locales<string>
}

type LocaleActions = { type: 'setLocale'; payload: SupportedLocales }

const locales: Locales<string> = { es: 'Español', en: 'English' }

const initialState: LocaleState = {
  locales,
  locale: 'es',
}

const reducer: Reducer<LocaleState, LocaleActions> = (state, action) => {
  switch (action.type) {
    case 'setLocale':
      return { ...state, locale: action.payload }
    default:
      return { ...state }
  }
}

const { WrappedProvider, useFactoryDispatch, useFactoryState } = contextFactory<LocaleState, LocaleActions>(reducer, initialState)

export const LocaleProvider = WrappedProvider
export const useLocaleState = useFactoryState
export const useLocaleDispatch = useFactoryDispatch
export const defaultLocale = 'es'
