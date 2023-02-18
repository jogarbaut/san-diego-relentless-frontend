import { Carousel } from "react-bootstrap"

const CarouselCustom = () => {
  return (
    <section className="section-landing section-bg-white">
      <Carousel fade className="carousel-custom">
        <Carousel.Item className="carousel-custom-item-container">
          <img
            src="https://res.cloudinary.com/dgulbxrz1/image/upload/v1676672811/sdr/carouselOne_h66osi.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item className="carousel-custom-item-container">
          <img
            src="https://res.cloudinary.com/dgulbxrz1/image/upload/v1676672811/sdr/carouselTwo_ebho4l.jpg"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item className="carousel-custom-item-container">
          <img
            src="https://res.cloudinary.com/dgulbxrz1/image/upload/v1676672810/sdr/carouselThree_cyvune.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </section>
  )
}

export default CarouselCustom
