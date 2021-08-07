import { styled } from '@material-ui/core'

export const MainContainer = styled('div')(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(1, minmax(0, 1fr))',
  gap: 4,
  maxWidth: 1400,
  margin: 'auto',
  [theme.breakpoints.up('md')]: {
    gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
    gap: 16,
  },
  [theme.breakpoints.up('xl')]: {
    gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
  },
}))
