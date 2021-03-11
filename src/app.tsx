import React from "react"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { Provider } from "react-redux"
import { store } from "./store/configure.store"
import AppRouter from "./router/route"

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <AppRouter />
      <ToastContainer />
    </Provider>
  )
}

export default App
