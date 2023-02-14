import { Carousel } from 'react-bootstrap'
import CarouselOne from '../assets/img/carouselOne.jpeg'
import CarouselTwo from '../assets/img/carouselTwo.jpeg'
import CarouselThree from '../assets/img/carouselThree.jpeg'

const CarouselCustom = () => {
  return (
    <section className="section-landing section-bg-white">
    <Carousel fade className="carousel-custom">
      <Carousel.Item className="carousel-custom-item-container">
        <img
          className="carousel-custom-item"
          src={CarouselOne}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3></h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="carousel-custom-item-container">
        <img
          className="carousel-custom-item"
          src={CarouselTwo}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3></h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="carousel-custom-item-container">
        <img
          className="carousel-custom-item"
          src={CarouselThree}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3></h3>
          <p>
            
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </section>
  );
}

export default CarouselCustom