import React from 'react'
import { styled } from '@material-ui/core'
import { useLocaleState, useLocaleActions, SupportedLocales } from 'core/context'

export const SelectStyled = styled('select')({
  background: '#293462',
  cursor: 'pointer',
  fontWeight: 500,
  outline: 'none !important',
})

export const OptionStyled = styled('option')({
  background: '#fff',
  color: '#293462',
  fontWeight: 500,
})

export const SelectLocale = () => {
  const { locale, locales } = useLocaleState()
  const { setLocale } = useLocaleActions()

  function handleSelect(ev: React.ChangeEvent<HTMLSelectElement>) {
    setLocale(ev.target.value as SupportedLocales)
  }

  return (
    <SelectStyled value={locale} onChange={handleSelect}>
      {Object.keys(locales).map((lang: string) => {
        return (
          <OptionStyled value={lang} key={lang}>
            {locales[lang]}
          </OptionStyled>
        )
      })}
    </SelectStyled>
  )
}
