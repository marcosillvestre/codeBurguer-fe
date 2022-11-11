/* eslint-disable prettier/prettier */
import React from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClientProvider } from 'react-query'
import { ToastContainer } from 'react-toastify'

import AppProvider from './hooks'
import Routes from './routes/routes'
import { queryClient } from './services/queryFetching'
import GlobalStyles from './styles/globalStyles'



const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <>
    <QueryClientProvider client={queryClient}>
      <AppProvider>
        <Routes />
      </AppProvider>
    </QueryClientProvider>

    <ToastContainer autoClose={2000} theme="colored" />
    <GlobalStyles />
  </>
)
