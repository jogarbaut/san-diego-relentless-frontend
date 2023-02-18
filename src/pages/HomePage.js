import { useEffect } from "react"
import CarouselCustom from "../components/carousel/CarouselCustom"
import FeaturedPostFeed from "../components/featuredPosts/FeaturedPostFeed"
import AboutSection from "../components/about/AboutSection"
import PartnersSection from "../components/partners/PartnersSection"


const HomePage = ({ setActivePage }) => {
  useEffect(() => {
    setActivePage("home")
  }, [])

  return (
    <main>
      <div className="banner-container section-bg-white">
        <img src='https://res.cloudinary.com/dgulbxrz1/image/upload/v1676672551/sdr/sdr-banner_kx3yqg.webp' alt="San Diego Relentless Banner" className="banner" />
      </div>
      <CarouselCustom />
      <FeaturedPostFeed />
      <PartnersSection />
      <AboutSection />
    </main>
  )
}

export default HomePage
