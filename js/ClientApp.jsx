// @flow

import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import Perf from 'react-addons-perf'
import App from './App'

window.Perf = Perf
Perf.start()

const renderApp = element => {
  if (element === null) {
    throw new Error('No app element')
  }

  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
    element
  )
}

const appEl = document.getElementById('app')
renderApp(appEl)

if (module.hot) {
  module.hot.accept('./App', () => {
    renderApp(appEl)
  })
}
