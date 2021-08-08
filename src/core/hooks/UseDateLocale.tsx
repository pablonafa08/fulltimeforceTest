import { AppDateLocales } from '../utils'
import { useLocaleState } from '../context'

export const useDateLocale = () => {
  const { locale } = useLocaleState()

  return AppDateLocales[locale]
}
