import { useState } from "react"
import { Container, Row, Col, ListGroup, Button } from "react-bootstrap"
import NewsEditor from "../components/NewsEditor"
import FeaturedNewsEditor from "../components/FeaturedNewsEditor"
import BoysRostersEditor from "../components/BoysRostersEditor"
import GirlsRostersEditor from "../components/GirlsRostersEditor"
import StoreEditor from "../components/StoreEditor"
import { FaRegNewspaper, FaBasketballBall, FaStore } from "react-icons/fa"

const DashboardPage = () => {
  const [editField, setEditField] = useState("news")

  return (
    <section className="dashboard w-100 h-100">
      <Row className="d-flex justify-content-between w-100 h-100 g-0">
        <Col xs={3} lg={2} className="dashboard-nav g-0">
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
              onClick={() => setEditField("featuredNews")}
              className={editField === "featuredNews" ? "active" : ""}
            >
              <FaRegNewspaper />
              Featured News
            </p>
            <p
              onClick={() => setEditField("boysRosters")}
              className={editField === "boysRosters" ? "active" : ""}
            >
              <FaBasketballBall />
              Boys Rosters
            </p>
            <p
              onClick={() => setEditField("girlsRosters")}
              className={editField === "girlsRosters" ? "active" : ""}
            >
              <FaBasketballBall />
              Girls Rosters
            </p>
            <p
              onClick={() => setEditField("store")}
              className={editField === "store" ? "active" : ""}
            >
              <FaStore />
              Store
            </p>
          </div>
        </Col>
        <Col xs={9} lg={10} className="g-0">
        <div className="dashboard-editor-title">Dashboard</div>
          <div className="dashboard-editor-container">
            {editField === "news" ? (
              <NewsEditor />
            ) : editField === "featuredNews" ? (
              <FeaturedNewsEditor />
            ) : editField === "boysRosters" ? (
              <BoysRostersEditor />
            ) : editField === "girlsRosters" ? (
              <GirlsRostersEditor />
            ) : editField === "store" ? (
              <StoreEditor />
            ) : null}
          </div>
        </Col>
      </Row>
    </section>
  )
}

export default DashboardPage
