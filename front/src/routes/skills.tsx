import React from 'react';
import Carousel from 'react-multi-carousel';


export const Skills = () => {
    const responsive = {
      superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
      }
    };
  
    return (
      <section className="skill" id="skills">
          <div className="container">
              <div className="row">
                  <div className="col-12">
                      <div className="skill-bx wow zoomIn">
                          <h2>Skills</h2>
                          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br></br> Lorem Ipsum has been the industry's standard dummy text.</p>
                          <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                              <div className="item">
                                  <img src="https://www.blintech.com.co/wp-content/uploads/2018/01/1.parking-1200x600.jpg" alt="Image" />
                                  <h5>Web Development</h5>
                              </div>
                              <div className="item">
                                  <img src="https://www.eltiempo.com/files/image_640_428/uploads/2021/01/22/600b1a714c8fe.jpeg" alt="Image" />
                                  <h5>Brand Identity</h5>
                              </div>
                              <div className="item">
                                  <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pulzo.com%2Feconomia%2Fzonas-bogota-con-parqueaderos-caros-PP264384&psig=AOvVaw1DhQzozPOJMpJOiidQzFVf&ust=1700013293253000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCPCB25SxwoIDFQAAAAAdAAAAABAQ" alt="Image" />
                                  <h5>Logo Design</h5>
                              </div>
                              <div className="item">
                                  <img src="https://ismd.com.co/wp-content/uploads/2017/03/Parqueaderos.jpg" alt="Image" />
                                  <h5>Web Development</h5>
                              </div>
                          </Carousel>
                      </div>
                  </div>
              </div>
          </div>
          <img className="background-image-left" src="" alt="Image" />
      </section>
    )
  }
  