import React from 'react'
import { makeStyles, AppBar, Toolbar } from '@material-ui/core'
import { useLayoutLocales } from '../i18n'
import { SelectLocale } from './SelectLocale'

import logo from 'img/gitHubLogo_white.png'

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
    margin: 'auto',
    height: '100%',
    width: '100%',
    maxWidth: 1280,
  },
}))

export const Header = () => {
  const { title } = useLayoutLocales()
  const classes = useStyles()

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar className={classes.body}>
        <img src={logo} alt="Logo TripElf" className="h-10" />
        <span className="text-xl font-semibold">{title}</span>
        <SelectLocale />
      </Toolbar>
    </AppBar>
  )
}
