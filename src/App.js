import React from 'react'
import { StateProvider } from './context/StateProvider'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Layout from './components/Layout'
import Login from './components/Login'
import Root from './components/Root'
import ComponentA from './components/ComponentA'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <StateProvider>
          <Switch>
            <Route exact path="/login">
              <Login />
            </Route>
            <Layout>
              <Route exact path="/">
                <Root />
              </Route>
              <Route exact path="/component-a">
                <ComponentA />
              </Route>
            </Layout>
          </Switch>
        </StateProvider>
      </BrowserRouter>
    </div>
  )
}

export default App
