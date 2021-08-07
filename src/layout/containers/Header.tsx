import React from 'react'
import { Theme, makeStyles, AppBar, Toolbar } from '@material-ui/core'

import logo from 'img/git.png'

export const HEADER_HEIGHT = 64

const useStyles = makeStyles((theme: Theme) => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    boxShadow: 'none',
    height: HEADER_HEIGHT,
    background: '#293462',
  },
  body: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '0 20px 0 10px',
    margin: 0,
  },
  logo: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    height: 40,
  },
}))

export const Header = () => {
  const classes = useStyles()

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar className={classes.body}>
        <img src={logo} alt="Logo TripElf" className={classes.logo} />
      </Toolbar>
    </AppBar>
  )
}
