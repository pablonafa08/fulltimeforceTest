import { dateLocale } from 'core/utils'
import { SupportedLocales, useLocaleDispatch } from './LocaleContext'

export const useLocaleActions = () => {
  const dispatch = useLocaleDispatch()

  function setLocale(locale: SupportedLocales) {
    dateLocale.currentLocale = locale
    dispatch({ type: 'setLocale', payload: locale })
  }

  return { setLocale }
}
