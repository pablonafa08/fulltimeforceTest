import { useIntl } from 'react-intl'

export const useLayoutLocales = () => {
  const { formatMessage: t } = useIntl()

  return {
    title: t({ id: 'LAYOUT.TITLE', defaultMessage: 'Lista de commits' }),
  }
}
