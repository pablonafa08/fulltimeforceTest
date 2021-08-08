import React from 'react'
import { makeStyles, AppBar, Toolbar } from '@material-ui/core'

import logo from 'img/gitHubLogo.png'

export const HEADER_HEIGHT = 64

const useStyles = makeStyles(() => ({
  appBar: {
    boxShadow: 'none',
    height: HEADER_HEIGHT,
    background: '#293462',
  },
  body: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '0 20px',
    margin: 0,
    height: '100%',
  },
}))

export const Header = () => {
  const classes = useStyles()

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar className={classes.body}>
        <img src={logo} alt="Logo TripElf" className="h-10" />
      </Toolbar>
    </AppBar>
  )
}
