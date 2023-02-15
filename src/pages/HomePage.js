import { useState, useEffect } from "react"
import axios from "axios"
import CarouselCustom from "../components/CarouselCustom"
import { Container, Row, Col } from "react-bootstrap"
import LatestNewsFeed from "../components/LatestNewsFeed"
import FeaturedPostFeed from "../components/FeaturedPostFeed"
import AboutSection from "../components/AboutSection"
import PartnersSection from "../components/PartnersSection"
import SdrBanner from "../assets/img/sdr-banner.png"

const HomePage = ({ setActivePage }) => {
  const [userId, setUserId] = useState("")

  useEffect(() => {
    setActivePage("home")
  }, [])

  return (
    <>
      <div className="w-100 py-4 mx-auto text-center section-bg-white">
        <img src={SdrBanner} alt="Banner" className="banner"/>
      </div>
      <section className="w-100">
        <CarouselCustom />
        <LatestNewsFeed />
        <PartnersSection />
        <AboutSection />
      </section>
    </>
  )
}

export default HomePage
