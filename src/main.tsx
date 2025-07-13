import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { GlobalStyles } from '@/styles/global-styles'
import { theme } from '@/styles/theme'
import { ThemeProvider } from 'styled-components'
import { I18nextProvider } from 'react-i18next'
import i18n from './i18n' // Импортируем конфигурацию i18n

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)

root.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <App />
      </ThemeProvider>
    </I18nextProvider>
  </React.StrictMode>
)