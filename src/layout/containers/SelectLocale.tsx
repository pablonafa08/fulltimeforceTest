import React from 'react'
import { useLocaleState, useLocaleActions, SupportedLocales } from 'core/context'

export const SelectLocale = () => {
  const { locale, locales } = useLocaleState()
  const { setLocale } = useLocaleActions()

  function handleSelect(ev: React.ChangeEvent<HTMLSelectElement>) {
    setLocale(ev.target.value as SupportedLocales)
  }

  return (
    <select value={locale} onChange={handleSelect}>
      {Object.keys(locales).map((key: string) => {
        return (
          <option value={key} key={key}>
            {locales[key]}
          </option>
        )
      })}
    </select>
  )
}
