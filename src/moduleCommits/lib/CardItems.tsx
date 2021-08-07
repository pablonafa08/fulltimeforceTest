import { styled } from '@material-ui/styles'

export const Container = styled('div')({
  position: 'relative',
  margin: 8,
  padding: '16px 28px',
  overflow: 'hidden',
  border: '1px solid #E6E5E5',
  borderRadius: 10,
  color: '#363636',
  transition: 'box-shadow 0.3s ease-in-out',
  '&:hover': {
    boxShadow: '0px 0px 10px #00000033',
  },
})

export const ImgGit = styled('img')({
  position: 'absolute',
  height: '100%',
  width: 'auto',
  left: -50,
  top: 0,
  opacity: 0.5,
})
