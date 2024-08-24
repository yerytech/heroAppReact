import {  Route, Routes } from "react-router"
import { LoginPage, RegisterPage } from "../auth"
import { HeroRoutes } from "../hero"
import { PrivateRoute } from "./PrivateRoute"



export const AppRouter = () => {
  return (
      <>
          
        
          <Routes>             
              <Route path="login" element={ <LoginPage/>} />
              <Route path="register" element={ <RegisterPage/>} />
              <Route path="/*" element={
                  <PrivateRoute>
                  <HeroRoutes/>
              </PrivateRoute>
                  } />
          </Routes>
      </>
  )
}
