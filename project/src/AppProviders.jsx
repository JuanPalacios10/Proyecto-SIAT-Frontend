import { SnackbarProvider } from "notistack"
import { BrowserRouter } from "react-router-dom"
import { SnackbarConfigurator } from "./components/Snackbar"
import { ModalContextProvider, UserAuthContextProvider } from "./context"

export const AppProviders = ({ children }) => {
  return (
    <UserAuthContextProvider>
      <BrowserRouter>
        <ModalContextProvider>
          <SnackbarProvider>
            <SnackbarConfigurator />
            {children}
          </SnackbarProvider>
        </ModalContextProvider>
      </BrowserRouter>
    </UserAuthContextProvider>
  )
}
