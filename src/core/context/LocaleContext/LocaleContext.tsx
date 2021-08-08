import { contextFactory } from 'core/utils'
import { Reducer, Dispatch } from 'react'

export type SupportedLocales = 'es' | 'en'

type Locales<T> = Record<SupportedLocales, T>

interface InitLocaleState {
  status: 'init'
  locale: SupportedLocales
  locales: Locales<string>
  messages: {}
}

interface LoadedLocaleState {
  status: 'loaded'
  locale: SupportedLocales
  locales: Locales<string>
  messages: Locales<Record<string, string>>
}

export type LocaleState = InitLocaleState | LoadedLocaleState

export type LocaleActions = { type: 'setLocale'; payload: SupportedLocales } | { type: 'setMessages'; payload: { locale: SupportedLocales; messages: Record<string, string> } }

export type LocaleDispatch = Dispatch<LocaleActions>

const locales: Locales<string> = { es: 'Español', en: 'Inglés' }

const initialState: LocaleState = {
  locales,
  status: 'init',
  locale: 'es',
  messages: {},
}

const reducer: Reducer<LocaleState, LocaleActions> = (state, action) => {
  switch (action.type) {
    case 'setLocale':
      return { ...state, locale: action.payload }
    case 'setMessages':
      return { ...state, status: 'loaded', messages: { [action.payload.locale]: action.payload.messages, ...(state.status === 'loaded' ? state.messages : null) } }
    default:
      return { ...state }
  }
}

const { WrappedProvider, useFactoryDispatch, useFactoryState } = contextFactory<LocaleState, LocaleActions>(reducer, initialState)

export const LocaleProvider = WrappedProvider
export const useLocaleState = useFactoryState
export const useLocaleDispatch = useFactoryDispatch
export const defaultLocale = 'es'
