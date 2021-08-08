import React from 'react'
import { LocaleProvider, TranslatesProvider } from 'core/context'

export const AppProviders: React.FC = ({ children }) => {
  return (
    <LocaleProvider>
      <TranslatesProvider>{children}</TranslatesProvider>
    </LocaleProvider>
  )
}
