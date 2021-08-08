import { useIntl } from 'react-intl'

export const useCommitLocales = () => {
  const { formatMessage: t } = useIntl()

  return {
    author: t({ id: 'COMMIT.AUTHOR', defaultMessage: 'Autor' }),
    date: t({ id: 'COMMIT.DATE', defaultMessage: 'Fecha' }),
  }
}
