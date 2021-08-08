import { useIntl } from 'react-intl'

export const useCommitLocales = () => {
  const { formatMessage: t } = useIntl()

  return {
    date: t({ id: 'COMMIT.DATE', defaultMessage: 'Fecha' }),
  }
}
