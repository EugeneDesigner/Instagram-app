import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'


import {
  createStore,
  applyMiddleware,
  compose
} from 'redux'


import reducer from './reducer'
import { Provider } from 'react-redux'
import createSagaMiddleWare from 'redux-saga'
import rootSaga from './sagas'

import Layout from './components/Layout'
import { HomeContainer } from './components/Home';
import { DetailContainer } from './components/Detail'
import { AddContainer } from './components/Add'

import '../dist/css/style.css'

filepicker.setKey('AZQauNsgQSmeCBp7R0qcvz')

const sagaMiddleware = createSagaMiddleWare()
const store = createStore(
  reducer,
  compose(
    applyMiddleware(sagaMiddleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
)
sagaMiddleware.run(rootSaga)


const routes = <Route component={Layout}>
  <Route path="/" component={HomeContainer}/>
  <Route path="/detail/:id" component={DetailContainer}/>
  <Route path="/add" component={AddContainer}/>
  </Route>

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>{routes}</Router>
  </Provider>,
  document.getElementById('app')
)
