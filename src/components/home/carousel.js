import * as React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import firstImage from './first-carousel.webp';
import secondImage from './second-carousel.webp';
import thirdImage from './third-carousel.webp';
import mainImage from './who.webp';
import { useState, useEffect } from 'react';
import Stack from 'react-bootstrap/Stack';





function CustomCarousel() {

  const [isMobileOrTablet, setIsMobileOrTablet] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobileOrTablet(window.innerWidth < 720);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div className='carousel-container'>
        <Carousel>
          <Carousel.Item interval={1500}>
            <img
              className="d-block w-100 carousel-img"
              src={firstImage}
              alt="First slide"
              style={{ height: "90vh", width: "100vw", objectFit: "cover" }}
            />
            <Carousel.Caption className='text-color' >
              <h3 className='carousel-text carousel-heading'>Cook Smart, Live Well!</h3>
              <p className='carousel-text'>Home-cooked meals are often lower in calories and healthier—perfect for a longer, happier life!</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item interval={1500}>
            <img
              className="d-block w-100 carousel-img"
              src={secondImage}
              alt="Second slide"
              style={{ height: "90vh", objectFit: "cover" }}
            />
            <Carousel.Caption className='text-color'>
              <h3 className='carousel-text carousel-heading'>Move Together, Live Longer!</h3>
              <p className='carousel-text'>Regular exercise reduces the risk of chronic diseases by up to 50% and adds quality years to your life!</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item interval={1500}>
            <img
              className="d-block w-100 carousel-img"
              src={thirdImage}
              alt="Third slide"
              style={{ height: "90vh", objectFit: "cover" }}
            />
            <Carousel.Caption className='text-color'>
              <h3 className='carousel-text carousel-heading'>Nature's Candy: Fruits for a Healthier Tomorrow!</h3>
              <p className='carousel-text'>Did you know? Eating a variety of colorful fruits boosts your immune system and keeps you energized throughout the day!</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>


      <div >


        {isMobileOrTablet ? (
          <Container>
            <Stack gap={3}>
              <div className="p-4 home-description-android">


                Future Health Insight analyzes your lifestyle, habits, and overall well-being to generate a health score. Based on this score, we provide personalized insights and tips to help you achieve a healthier future.
              </div>
              <img src={mainImage} alt='Main' />
            </Stack>
          </Container>
        ) : (
          <Container className='mygrid-desktop'>
            <Row>
              <Col className="d-flex align-items-center justify-content-center homedescription">

                Future Health Insight analyzes your lifestyle, habits, and overall well-being to generate a health score. Based on this score, we provide personalized insights and tips to help you achieve a healthier future.

              </Col>
              <Col className='home-image-desktop'>
                <img src={mainImage} alt='Main' />
              </Col>
            </Row>
          </Container>)
        }
      </div>
      <footer className="homefooter">
        <Container>
          <Row className='home-footer-content'>
            <Col md={4} className="footer-contact">
              <p>Stay connected
                <span className='git-logo'>
                  <a href="https://github.com/tushar-negi004">
                    <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" width="25" height="25" alt = '' />
                  </a>

                </span>
                <span>
                  <a href="https://linkedin.com/in/tushar-negi004">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" width="25" height="25" alt = '' />
                  </a>
                </span>
              </p>

            </Col>
          </Row>
        </Container>
      </footer>

    </>
  );
}

export default CustomCarousel;
