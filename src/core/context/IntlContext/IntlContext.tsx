import React from 'react'
import { IntlProvider } from 'react-intl'
import { useLocaleState } from 'core/context'

import messages_en from 'core/locales/en.json'
import messages_es from 'core/locales/es.json'

const messages = {
  es: messages_es,
  en: messages_en,
}

export const TranslatesProvider: React.FC = ({ children }) => {
  const { locale } = useLocaleState()

  const msg = messages[locale]

  return (
    <IntlProvider locale={locale} messages={msg}>
      {children}
    </IntlProvider>
  )
}
