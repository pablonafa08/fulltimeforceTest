import { format as fnsFormat } from 'date-fns'
import { es, enUS } from 'date-fns/locale'

export const AppDateLocales = {
  es,
  en: enUS,
}

export const dateLocale = {
  currentLocale: 'es',
}

export interface FormatOptions {
  locale?: Locale
  weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
  firstWeekContainsDate?: number
  useAdditionalWeekYearTokens?: boolean
  useAdditionalDayOfYearTokens?: boolean
}

export type DateFormatFn = (date: Date | number, frmt: string, options?: FormatOptions) => string

export const format: DateFormatFn = (date, frmt, options = {}) => {
  const locale = options.locale ?? AppDateLocales[dateLocale.currentLocale]

  return fnsFormat(date, frmt, { ...options, locale })
}
