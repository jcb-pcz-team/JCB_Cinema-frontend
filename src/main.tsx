import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import {App} from './App.tsx';
import {LoginPage} from "./components/LoginPage/LoginPage.tsx";
import "./assets/styles/index.scss";
import {RegistrationPage} from "./components/RegistrationPage/RegistrationPage.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
    },
    {
        path: "/login",
        element: <LoginPage />,
    },
    {
      path: "/rejestracja",
      element: <RegistrationPage/>
    }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>,
)
