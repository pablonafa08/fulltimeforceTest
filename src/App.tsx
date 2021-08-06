import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import { CommitsPage } from 'moduleCommits/pages'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/">
            <CommitsPage />
          </Route>

          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
