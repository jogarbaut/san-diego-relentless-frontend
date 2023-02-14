import { useContext, useState } from "react"
import AuthContext from "./context/AuthContext"
import axios from "axios"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { AuthProvider } from "./context/AuthContext"
import { PostProvider } from "./context/PostContext"

// Pages
import HomePage from "./pages/HomePage"
import Dashboard from "./pages/DashboardPage"
import RegisterPage from "./pages/RegisterPage"
import LoginPage from "./pages/LoginPage"
import PostFormPage from "./pages/PostFormPage"
import PostPage from "./pages/PostPage"
import PostDetailPage from "./pages/PostDetailPage"
import CustomNavbar from "./components/CustomNavbar"
import Footer from "./components/Footer"
import ContactPage from "./pages/ContactPage"
import BoysTeamsPage from "./pages/BoysTeamsPage"
import GirlsTeamsPage from "./pages/GirlsTeamsPage"

// Components

const App = () => {
  const { user } = useContext(AuthContext)
  const [activePage, setActivePage] = useState("")

  return (
    <main className="app">
      <AuthProvider>
        <PostProvider>
          <BrowserRouter>
            <CustomNavbar activePage={activePage} />
            <div className="sections">
              <Routes>
                <Route
                  path="/"
                  element={<HomePage setActivePage={setActivePage} />}
                />
                <Route
                  path="/dashboard"
                  element={<Dashboard setActivePage={setActivePage} />}
                />
                <Route
                  path="/register"
                  element={<RegisterPage setActivePage={setActivePage} />}
                />
                <Route
                  path="/login"
                  element={
                    !user ? (
                      <LoginPage />
                    ) : (
                      <Navigate to="/dashboard" setActivePage={setActivePage} />
                    )
                  }
                />
                <Route
                  exact
                  path="/news"
                  element={<PostPage setActivePage={setActivePage} />}
                />
                <Route
                  path="/news/:id"
                  element={<PostDetailPage setActivePage={setActivePage} />}
                />
                <Route
                  path="/contact"
                  element={<ContactPage setActivePage={setActivePage} />}
                />
                <Route
                  path="/boys-teams"
                  element={<BoysTeamsPage setActivePage={setActivePage} />}
                />
                <Route
                  path="/girls-teams"
                  element={<GirlsTeamsPage setActivePage={setActivePage} />}
                />
                <Route
                  path="/post-form"
                  element={<PostFormPage setActivePage={setActivePage} />}
                />
              </Routes>
              <Footer />
            </div>
          </BrowserRouter>
        </PostProvider>
      </AuthProvider>
    </main>
  )
}

export default App
