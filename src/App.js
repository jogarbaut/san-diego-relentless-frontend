import { useState } from "react"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { AuthProvider } from "./context/AuthContext"
import { PostProvider } from "./context/PostContext"
import Layout from "./components/Layout"
import PersistLogin from "./components/PersistLogin"

// Pages
import HomePage from "./pages/HomePage"
import Dashboard from "./pages/DashboardPage"
import RegisterPage from "./pages/RegisterPage"
import LoginPage from "./pages/LoginPage"
import PostPage from "./pages/PostPage"
import CustomNavbar from "./components/CustomNavbar"
import Footer from "./components/Footer"
import ContactPage from "./pages/ContactPage"
import BoysTeamsPage from "./pages/BoysTeamsPage"
import GirlsTeamsPage from "./pages/GirlsTeamsPage"
import RequireAuth from "./components/RequireAuth"
import MissingPage from "./pages/MissingPage"

// Components

const ROLES = {
  Coach: 1001,
  Player: 2001,
  Admin: 3001,
}

const App = () => {
  const [activePage, setActivePage] = useState("")

  return (
    <main className="app">
      <BrowserRouter>
        <AuthProvider>
          <PostProvider>
            <CustomNavbar activePage={activePage} />
            <div className="sections">
              <Routes>
                <Route path="/" element={<Layout />}>
                  {/* Public Routes */}
                  <Route
                    path="home"
                    element={<HomePage setActivePage={setActivePage} />}
                  />
                  <Route
                    path="register"
                    element={<RegisterPage setActivePage={setActivePage} />}
                  />
                  <Route
                    path="login"
                    element={<LoginPage setActivePage={setActivePage} />}
                  />
                  <Route
                    exact
                    path="news"
                    element={<PostPage setActivePage={setActivePage} />}
                  />
                  <Route
                    path="contact"
                    element={<ContactPage setActivePage={setActivePage} />}
                  />
                  <Route
                    path="boys-teams"
                    element={<BoysTeamsPage setActivePage={setActivePage} />}
                  />
                  <Route
                    path="girls-teams"
                    element={<GirlsTeamsPage setActivePage={setActivePage} />}
                  />
                  {/* Protected Routes */}
                  <Route element={<PersistLogin />}>
                    <Route
                      element={
                        <RequireAuth
                          allowedRoles={[ROLES.Admin, ROLES.Coach]}
                        />
                      }
                    >
                      <Route
                        path="/dashboard"
                        element={<Dashboard setActivePage={setActivePage} />}
                      />
                    </Route>
                  </Route>
                  {/* Catch All */}
                  <Route path="*" element={<MissingPage />} />
                </Route>
              </Routes>
              <Footer />
            </div>
          </PostProvider>
        </AuthProvider>
      </BrowserRouter>
    </main>
  )
}

export default App
