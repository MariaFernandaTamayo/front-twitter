import {BrowserRouter, Routes, Route} from "react-router-dom"
import { AuthProvider } from "./context/AuthContext"
import RegisterPage from "./pages/RegisterPage"
import HomePage from "./pages/HomePage"
import LoginPage from "./pages/LoginPage"
import TweetPage from "./pages/TweetPage"
import TweetFormPage from "./pages/TweetFormPage"
import ProfilePage from "./pages/ProfilePage"
import ProtectedRoute from "./ProtectedRoute"
function App(){
  return(
    <AuthProvider>
      <BrowserRouter>
      <Routes>
        <Route path="/" element = {<HomePage />}></Route>
        <Route path="/login" element = {<LoginPage />}></Route>
        <Route path="/register" element = {<RegisterPage />}></Route>
        
      <Route element={<ProtectedRoute />}>
          <Route path="/tweets" element = {<TweetPage />}></Route>
          <Route path="/add-tweet" element = {<TweetFormPage />}></Route>
          < Route path="/update-tweet" element = {<TweetFormPage />}></Route>
          <Route path="/profile" element = {<ProfilePage />}></Route>
      </Route>
      </Routes>
      
    </BrowserRouter>
    </AuthProvider>
  )
}
export default App
