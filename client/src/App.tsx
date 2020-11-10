import * as React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import './styles/base/index.scss'

interface IAppProps {}

const App: React.FC<IAppProps> = () => (
  <Provider store={store}>
    <div className="app">
      <main>
        <Switch>
          <Route exact path="/">
            <h1>HI</h1>
          </Route>
        </Switch>
      </main>
    </div>
  </Provider>
)

export default App
