import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { Row, Col, Button } from "react-bootstrap"
import NewsEditor from "../components/news/NewsEditor"
import FeaturedPostEditor from "../components/featuredPosts/FeaturedPostEditor"
import BoyTeamsEditor from "../components/boysTeams/BoyTeamsEditor"
import GirlTeamsEditor from "../components/girlsTeams/GirlTeamsEditor"
import StoreEditor from "../components/store/StoreEditor"
import UsersEditor from "../components/users/UsersEditor"
import { FaRegNewspaper, FaBasketballBall, FaUsers } from "react-icons/fa"
import useLogout from "../hooks/useLogout"

const DashboardPage = ({ setActivePage }) => {
  const navigate = useNavigate()
  const logout = useLogout()

  const [editField, setEditField] = useState("news")

  useEffect(() => {
    setActivePage("")
  }, [])

  const signOut = async () => {
    await logout()
    navigate("/home")
  }

  return (
    <section className="dashboard page-min-height">
      <Row className="d-flex justify-content-between g-0 h-100">
        <Col md={2} className="dashboard-nav g-0">
          <div className="dashboard-nav-title">Content Manager</div>
          <div className="dashboard-nav-list">
            <p
              onClick={() => setEditField("news")}
              className={editField === "news" ? "active" : ""}
            >
              <FaRegNewspaper />
              News
            </p>
            <p
              onClick={() => setEditField("featuredPosts")}
              className={editField === "featuredPosts" ? "active" : ""}
            >
              <FaRegNewspaper />
              Featured Posts
            </p>
            <p
              onClick={() => setEditField("boysTeams")}
              className={editField === "boysTeams" ? "active" : ""}
            >
              <FaBasketballBall />
              Boys Teams
            </p>
            <p
              onClick={() => setEditField("girlsTeams")}
              className={editField === "girlsTeams" ? "active" : ""}
            >
              <FaBasketballBall />
              Girls Teams
            </p>
            {/* <p
              onClick={() => setEditField("store")}
              className={editField === "store" ? "active" : ""}
            >
              <FaStore />
              Store
            </p> */}
          </div>

          <div className="dashboard-nav-title">Settings</div>
          <div className="dashboard-nav-list">
            <p
              onClick={() => setEditField("users")}
              className={editField === "users" ? "active" : ""}
            >
              <FaUsers />
              Users
            </p>
          </div>
          <Button variant="danger" onClick={signOut} className="mt-3">Sign Out</Button>
        </Col>
        <Col md={10} className="g-0">
          <div className="dashboard-editor-title">Dashboard</div>
          <div className="dashboard-editor-container">
            {editField === "news" ? (
              <NewsEditor />
            ) : editField === "featuredPosts" ? (
              <FeaturedPostEditor />
            ) : editField === "boysTeams" ? (
              <BoyTeamsEditor />
            ) : editField === "girlsTeams" ? (
              <GirlTeamsEditor />
            ) : editField === "store" ? (
              <StoreEditor />
            ) : editField === "users" ? (
              <UsersEditor />
            ) : null}
          </div>
        </Col>
      </Row>
    </section>
  )
}

export default DashboardPage
