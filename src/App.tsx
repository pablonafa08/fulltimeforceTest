import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import { MainLayout } from 'layout/containers'
import { CommitsPage } from 'moduleCommits/pages'

const App = () => {
  return (
    <MainLayout>
      <BrowserRouter>
        <Switch>
          <Route path="/">
            <CommitsPage />
          </Route>

          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    </MainLayout>
  )
}

export default App
