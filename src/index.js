import React from 'react'
import ReactDOM from 'react-dom/client'
import { ToastContainer } from 'react-toastify'

// import Login from './containers/Login'
// import Register from './containers/Register'
import { UserProvider } from './hooks/Context'
import Routes from './routes/routes'
import GlobalStyles from './styles/globalStyles'
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <>
    <UserProvider>
      <Routes />
    </UserProvider>
    <ToastContainer autoClose={2000} theme="colored" />
    <GlobalStyles />
  </>
)
