import * as React from 'react'
import { DateFormatFn, format } from 'core/utils'
import { useDateLocale } from './UseDateLocale'

export const useDateFormat = () => {
  const locale = useDateLocale()

  const newFormat: DateFormatFn = React.useCallback((date, frmt, options) => format(date, frmt, { ...options, locale }), [locale])

  return { format: newFormat }
}
