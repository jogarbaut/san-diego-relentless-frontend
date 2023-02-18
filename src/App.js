import { useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { AuthProvider } from "./context/AuthContext"
import { FeaturedPostProvider } from "./context/FeaturedPostContext"
import { PostProvider } from "./context/PostContext"
import { BoyTeamProvider } from "./context/BoyTeamContext"
import { GirlTeamProvider } from "./context/GirlTeamContext"
import PersistLogin from "./components/common/PersistLogin"
import Layout  from "./components/common/Layout"
import RequireAuth from "./components/common/RequireAuth"

// Pages
import HomePage from "./pages/HomePage"
import Dashboard from "./pages/DashboardPage"
import RegisterPage from "./pages/RegisterPage"
import LoginPage from "./pages/LoginPage"
import NewsPage from "./pages/NewsPage"
import PostDetail from "./components/news/PostDetail"
import CustomNavbar from "./components/common/CustomNavbar"
import Footer from "./components/footer/Footer"
import ContactPage from "./pages/ContactPage"
import BoysTeamsPage from "./pages/BoysTeamsPage"
import GirlsTeamsPage from "./pages/GirlsTeamsPage"

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
          <FeaturedPostProvider>
            <PostProvider>
              <BoyTeamProvider>
                <GirlTeamProvider>
                  <CustomNavbar activePage={activePage} />
                  <div className="sections">
                    <Routes>
                      <Route path="/" element={<Layout />}>
                        {/* Public Routes */}
                        <Route
                          path="/"
                          element={<HomePage setActivePage={setActivePage} />}
                        />
                        <Route
                          path="register"
                          element={
                            <RegisterPage setActivePage={setActivePage} />
                          }
                        />
                        <Route
                          path="login"
                          element={<LoginPage setActivePage={setActivePage} />}
                        />
                        <Route
                          exact
                          path="news"
                          element={<NewsPage setActivePage={setActivePage} />}
                        />
                        <Route path="news/:id" element={<PostDetail />} />
                        <Route
                          path="contact"
                          element={
                            <ContactPage setActivePage={setActivePage} />
                          }
                        />
                        <Route
                          path="boys-teams"
                          element={
                            <BoysTeamsPage setActivePage={setActivePage} />
                          }
                        />
                        <Route
                          path="girls-teams"
                          element={
                            <GirlsTeamsPage setActivePage={setActivePage} />
                          }
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
                              element={
                                <Dashboard setActivePage={setActivePage} />
                              }
                            />
                          </Route>
                        </Route>
                        {/* Catch All */}
                        <Route
                          path="*"
                          element={<HomePage setActivePage={setActivePage} />}
                        />
                      </Route>
                    </Routes>
                    <Footer />
                  </div>
                </GirlTeamProvider>
              </BoyTeamProvider>
            </PostProvider>
          </FeaturedPostProvider>
        </AuthProvider>
      </BrowserRouter>
    </main>
  )
}

export default App
