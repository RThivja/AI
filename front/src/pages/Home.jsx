
import React, { useState, useEffect } from "react";
import OwlCarousel from 'react-owl-carousel';
import 'animate.css';
import axios from 'axios';
// import OwlCarousel from 'react-owl-carousel';


function Home(){
  const [loading, setLoading] = useState(true);
  const [carouselData, setCarouselData] = useState([]);
  

  const headerOptions = {
    items: 1,
    loop: true,
    autoplay: true,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    dots: false,
    nav: true,
    navText: ["<i class='bi bi-chevron-left'></i>", "<i class='bi bi-chevron-right'></i>"],
  };

  const projectOptions = {
    items: 3,
    loop: true,
    autoplay: true,
    margin: 30,
    dots: true,
    nav: true,
    navText: ["<i class='bi bi-chevron-left'></i>", "<i class='bi bi-chevron-right'></i>"],
    responsive: {
      0: { items: 1 },
      768: { items: 2 },
      992: { items: 3 }
    }
  };

  const teamOptions = {
    items: 4,
    loop: true,
    autoplay: true,
    margin: 30,
    dots: false,
    nav: true,
    navText: ["<i class='bi bi-chevron-left'></i>", "<i class='bi bi-chevron-right'></i>"],
    responsive: {
      0: { items: 1 },
      576: { items: 2 },
      768: { items: 3 },
      992: { items: 4 }
    }
  };
  useEffect(() => {
    const fetchCarouselData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/carousel');
        setCarouselData(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching carousel data:', error);
        setLoading(false); // Ensure loading state is set to false even on error
      }
    };

    fetchCarouselData();
  }, []);

  if (loading) {
    return (
      <div id="spinner" className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
        <div className="spinner-border text-green" style={{ width: '3rem', height: '3rem' }} role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  }
  
  
  return(
    
    <div>
    {/* Spinner Start */}
    {/* <div id="spinner" className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
      <div className="spinner-border text-green" style={{width: '3rem', height: '3rem'}} role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div> */}
    {/* Spinner End */}
    {/* Topbar Start */}
    <div className="container-fluid topbar px-0 d-none d-lg-block">
  <div className="container px-0">
    <div className="row gx-0 align-items-center" style={{height: '45px'}}>
      <div className="col-lg-8 text-center text-lg-start mb-lg-0">
        <div className="d-flex flex-wrap">
          <a href="/" className="text-white text-decoration-none me-4">
            <i className="fas fa-map-marker-alt text-green me-2" />Find A Location
          </a>
          <a href="/" className="text-white text-decoration-none me-4">
            <i className="fas fa-phone-alt text-green me-2" />0777890234
          </a>
          <a href="/" className="text-white text-decoration-none me-0">
            <i className="fas fa-envelope text-green me-2" />Pineappleai@gmail.com
          </a>
        </div>
          </div>
          <div className="col-lg-4 text-center text-lg-end">
            <div className="d-flex align-items-center justify-content-end">
              <a href="/" className="btn btn-primary btn-square rounded-circle nav-fill me-3"><i className="fab fa-facebook-f text-green" /></a>
              <a href="/" className="btn btn-primary btn-square rounded-circle nav-fill me-3"><i className="fab fa-twitter text-green" /></a>
              <a href="/" className="btn btn-primary btn-square rounded-circle nav-fill me-3"><i className="fab fa-instagram text-green" /></a>
              <a href="https://www.linkedin.com/company/pineappleaicloud/" className="btn btn-primary btn-square rounded-circle nav-fill me-0"><i className="fab fa-linkedin-in text-green" /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Topbar End */}
    {/* Navbar & Hero Start */}
    <div className="container-fluid sticky-top px-0">
      <div className="position-absolute bs-green" style={{left: 0, top: 0, width: '100%', height: '50%'}}>
      </div>
      <div className="container px-0">
        <nav className="navbar navbar-expand-lg navbar-dark bg-white py-3 px-4">
          <a href="/" className="navbar-brand p-0">
            <h1 className="text-green m-0"><img src="img/lo.png" alt="Logo" /></h1>
            {/* <i class="fas fa-donate me-3"></i> */}
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span className="fa fa-bars" />
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto py-0">
              <a href="/" className="nav-item nav-link active">Home</a>
              <a href="/" className="nav-item nav-link">About</a>
              <a href="/" className="nav-item nav-link">Services</a>
              <a href="/" className="nav-item nav-link">Projects</a>
              <div className="nav-item dropdown">
                <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                <div className="dropdown-menu m-0">
                  <a href="/" className="dropdown-item">Our Blog</a>
                  <a href="/" className="dropdown-item">Our Team</a>
                  <a href="/" className="dropdown-item">Testimonial</a>
                  <a href="/" className="dropdown-item">FAQs</a>
                  <a href="/" className="dropdown-item">404 Page</a>
                </div>
              </div>
              <a href="/" className="nav-item nav-link">Contact</a>
            </div>
            <div className="d-flex align-items-center flex-nowrap pt-xl-0">
              <button className="btn btn-dark btn-md-square mx-2" data-bs-toggle="modal" data-bs-target="#searchModal"><i className="fas fa-search" /></button>
              <a href="/" className="btn btn-dark rounded-pill text-white py-2 px-4 ms-2 flex-wrap flex-sm-shrink-0">Careers</a>
            </div>
          </div>
        </nav>
      </div>
    </div>
    {/* Navbar & Hero End */}
    {/* Modal Search Start */}
    <div className="modal fade" id="searchModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-fullscreen">
        <div className="modal-content rounded-0">
          <div className="modal-header">
            <h4 className="modal-title mb-0" id="exampleModalLabel">Search by keyword</h4>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
          </div>
          <div className="modal-body d-flex align-items-center">
            <div className="input-group w-75 mx-auto d-flex">
              <input type="search" className="form-control p-3" placeholder="keywords" aria-describedby="search-icon-1" />
              <span id="search-icon-1" className="input-group-text p-3"><i className="fa fa-search" /></span>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Modal Search End */}
    {/* Header Carousel Start */}
  <OwlCarousel className="header-carousel owl-carousel" {...headerOptions}>
        {carouselData.map((item, index) => (
          <div key={index} className="header-carousel-item">
            <div className="header-carousel-item-img">
              <img src={`http://localhost:3001/images/${item.carousel_img_1}`} className="img-fluid w-100" alt={`Carousel Image ${index + 1}`} />
            </div>
            <div className="carousel-caption">
              <div className="carousel-caption-inner text-start p-3">
                <h1 className="display-4 text-center text-white mb-4 fadeInUp animate__animated" style={{ animationDelay: '1.3s' }}>{item.carousel_des_1}</h1>
                {/* Customized buttons */}
                <div className="mt-4 d-flex justify-content-center">
  <a className="btn btn-primary rounded-pill py-3 px-5 mb-4 me-4 fadeInUp animate__animated" style={{ animationDelay: '1.7s' }} href="/">Apply Now</a>
  <a className="btn btn-primary rounded-pill py-3 px-5 mb-4 me-4 fadeInUp animate__animated" style={{ animationDelay: '1.7s' }} href="/">Read More</a>
</div>

              </div>
            </div>
          </div>
        ))}
      </OwlCarousel>

      {/* Header Carousel End */}

    {/* About Start */}
    <div className="container-fluid about bg-light py-5">
      <div className="container py-5">
        <div className="row g-5 align-items-center">
          <div className="col-lg-6 col-xl-5 wow fadeInLeft" data-wow-delay="0.1s">
            <div className="about-img">
              <img src="img/about-3.jpg" className="img-fluid w-100 rounded-top bg-white" alt="Image" />
              <img src="img/ab.jpg" className="img-fluid w-100 rounded-bottom" alt="Image" />
            </div>
          </div>
          <div className="col-lg-6 col-xl-7 wow fadeInRight" data-wow-delay="0.3s">
          <br></br>
            <h4 className="text-green">About Us</h4>
           
            <h1 className="text-darkgreen">The most Profitable Software company in worldwide.</h1>
            <p className="text ps-4 mb-4">PineappleAI creates smart, user-friendly AI solutions for everyone. Founded in 2024, we are dedicated to innovation and excellent customer support. Join us in making everyday tasks simpler and smarter!
            </p>
            <div className="row g-4 justify-content-between mb-5">
              <div className="col-lg-6 col-xl-5">
                <p className="text-dark"><i className="fas fa-check-circle text-green me-1" /> Strategy &amp; Consulting</p>
                <p className="text-dark mb-0"><i className="fas fa-check-circle text-green me-1" /> Dedicated to Innovation</p>
              </div>
              <div className="col-lg-6 col-xl-7">
                <p className="text-dark"><i className="fas fa-check-circle text-green me-1" /> Smart AI Solutions</p>
                <p className="text-dark mb-0"><i className="fas fa-check-circle text-green me-1" /> Continuous Improvement</p>
              </div>
            </div>
            {/* <div class="row g-4 justify-content-between mb-5">
                        <div class="col-xl-5"><a href="#" class="btn btn-dark rounded-pill py-3 px-5">Discover More</a></div>
                        <div class="col-xl-7 mb-5">
                            <div class="about-customer d-flex position-relative">
                                <img src="img/customer-img-1.jpg" class="img-fluid btn-xl-square position-absolute" style="left: 0; top: 0;"  alt="Image">
                                <img src="img/customer-img-2.jpg" class="img-fluid btn-xl-square position-absolute" style="left: 45px; top: 0;" alt="Image">
                                <img src="img/customer-img-3.jpg" class="img-fluid btn-xl-square position-absolute" style="left: 90px; top: 0;" alt="Image">
                                <img src="img/customer-img-1.jpg" class="img-fluid btn-xl-square position-absolute" style="left: 135px; top: 0;" alt="Image">
                                <div class="position-absolute text-dark" style="left: 220px; top: 10px;">
                                    <p class="mb-0">5m+ Trusted</p>
                                    <p class="mb-0">Global Customers</p>
                                </div>
                            </div>
                        </div>
                    </div> */}
            <div className="row g-4 text-center align-items-center justify-content-center">
              <div className="col-sm-4">
                <div className="bg-secondary rounded p-4">
                  <div className="d-flex align-items-center justify-content-center">
                    <span className="counter-value fs-1 fw-bold text-white" data-toggle="counter-up">5</span>
                    <h4 className="text-white fs-1 mb-0" style={{fontWeight: 600, fontSize: '25px'}}>+</h4>
                  </div>
                  <div className="w-100 d-flex align-items-center justify-content-center">
                    <p className="text-white mb-0">Project Complete</p>
                  </div>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="bg-success rounded p-4">
                  <div className="d-flex align-items-center justify-content-center">
                    <span className="counter-value fs-1 fw-bold text-white" data-toggle="counter-up">7</span>
                    <h4 className="text-white fs-1 mb-0" style={{fontWeight: 600, fontSize: '25px'}}>+</h4>
                  </div>
                  <div className="w-100 d-flex align-items-center justify-content-center">
                    <p className="text-white mb-0">Years Of Experience</p>
                  </div>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="bg-secondary rounded p-4">
                  <div className="d-flex align-items-center justify-content-center">
                    <span className="counter-value fs-1 fw-bold text-white" data-toggle="counter-up">7</span>
                    <h4 className="text-white fs-1 mb-0" style={{fontWeight: 600, fontSize: '25px'}}>+</h4>
                  </div>
                  <div className="w-100 d-flex align-items-center justify-content-center">
                    <p className="text-white mb-0">Team Members</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* About End */}
    
    {/* Services Start */}
    {/* <div className="container-fluid service py-5">
      <div className="container py-5">
        <div className="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: '800px'}}>
          <h4 className="text-green">Our Services</h4>
          <h1 className="text-darkgreen"> Every service delivered is every milestone reached</h1>
        </div>
        <div className="row g-4 justify-content-center text-center">
          <div className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp" data-wow-delay="0.1s">
            <div className="service-item bg-light rounded">
              <div className="service-img">
                <img src="img/service-1.jpg" className="img-fluid w-100 rounded-top" alt="" />
              </div>
              <div className="service-content text-center p-4">
                <div className="service-content-inner">
                  <a href="#" className="h4 mb-4 d-inline-flex text-darkgreen"><i className="fas fa-donate fa-2x me-2" /> Business start now</a>
                  <p className="mb-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum nobis est sapiente natus officiis maxime
                  </p>
                  <a className="btn btn-primary rounded-pill py-2 px-4" href="#">Read More</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp" data-wow-delay="0.3s">
            <div className="service-item bg-light rounded">
              <div className="service-img">
                <img src="img/service-2.jpg" className="img-fluid w-100 rounded-top" alt="" />
              </div>
              <div className="service-content text-center p-4">
                <div className="service-content-inner">
                  <a href="#" className="h4 mb-4 d-inline-flex text-darkgreen"><i className="fas fa-donate fa-2x me-2" /> Consultancy &amp; Advice</a>
                  <p className="mb-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum nobis est sapiente natus officiis maxime
                  </p>
                  <a className="btn btn-primary rounded-pill py-2 px-4" href="#">Read More</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp" data-wow-delay="0.5s">
            <div className="service-item bg-light rounded">
              <div className="service-img">
                <img src="img/service-4.jpg" className="img-fluid w-100 rounded-top" alt="" />
              </div>
              <div className="service-content text-center p-4">
                <div className="service-content-inner">
                  <a href="#" className="h4 mb-4 d-inline-flex text-darkgreen"><i className="fas fa-donate fa-2x me-2" /> Invesments Planning</a>
                  <p className="mb-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum nobis est sapiente natus officiis maxime
                  </p>
                  <a className="btn btn-primary rounded-pill py-2 px-4" href="#">Read More</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp" data-wow-delay="0.7s">
            <div className="service-item bg-light rounded">
              <div className="service-img">
                <img src="img/service-3.jpg" className="img-fluid w-100 rounded-top" alt="" />
              </div>
              <div className="service-content text-center p-4">
                <div className="service-content-inner">
                  <a href="#" className="h4 mb-4 d-inline-flex text-darkgreen"><i className="fas fa-donate fa-2x me-2" /> Private Client Investment</a>
                  <p className="mb-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum nobis est sapiente natus officiis maxime
                  </p>
                  <a className="btn btn-primary rounded-pill py-2 px-4" href="#">Read More</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12">
            <a className="btn btn-dark rounded-pill py-3 px-5 wow fadeInUp" data-wow-delay="0.1s" href="#">Services More</a>
          </div>
        </div>
      </div>
    </div> */}
    {/* Services End */}
   {/* Project Start */}
<div className="container-fluid project">
  <div className="container">
    <div className="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '800px' }}>
      <h4 className="text-green">Upcoming Projects</h4>
      <h1 className="text-darkgreen">Explore Our Upcoming Projects</h1>
    </div>
    <OwlCarousel className="project-carousel owl-carousel wow fadeInUp" {...projectOptions}>
      <div className="project-item h-100">
        <div className="project-img">
          <img src="img/er.png" className="img-fluid w-100 rounded fixed-size-img" alt="Project" />
        </div>
        <div className="project-content bg-light rounded p-4">
          <div className="project-content-inner">
            <div className="project-icon mb-3"><i className="fas fa-briefcase fa-4x text-green"></i></div>
            <p className="text-darkgreen fs-5 mb-3">ERP System</p>
            <a href="#" className="h4 text-darkgreen"></a>
            <div className="pt-4">
              <a className="btn btn-primary rounded-pill py-3 px-5" href="#">Read More</a>
            </div>
          </div>
        </div>
      </div>
      <div className="project-item h-100">
        <div className="project-img">
          <img src="img/projects-1.jpg" className="img-fluid w-100 rounded fixed-size-img" alt="Project" />
        </div>
        <div className="project-content bg-light rounded p-4">
          <div className="project-content-inner">
            <div className="project-icon mb-3"><i className="fas fa-bug fa-4x text-green"></i></div>
            <p className="text-darkgreen fs-5 mb-3">DefectTracker</p>
            <a href="#" className="h4 text-darkgreen"></a>
            <div className="pt-4">
              <a className="btn btn-primary rounded-pill py-3 px-5" href="#">Read More</a>
            </div>
          </div>
        </div>
      </div>
      <div className="project-item h-100">
        <div className="project-img">
          <img src="img/eb.jpg" className="img-fluid w-100 rounded fixed-size-img" alt="Project" />
        </div>
        <div className="project-content bg-light rounded p-4">
          <div className="project-content-inner">
            <div className="project-icon mb-3"><i className="fas fa-book fa-4x text-green"></i></div>
            <p className="text-darkgreen fs-5 mb-3">E-Books</p>
            <a href="#" className="h4 text-darkgreen"></a>
            <div className="pt-4">
              <a className="btn btn-primary rounded-pill py-3 px-5" href="#">Read More</a>
            </div>
          </div>
        </div>
      </div>
      <div className="project-item h-100">
        <div className="project-img">
          <img src="img/ems.jpg" className="img-fluid w-100 rounded fixed-size-img" alt="Project" />
        </div>
        <div className="project-content bg-light rounded p-4">
          <div className="project-content-inner">
            <div className="project-icon mb-3"><i className="fas fa-tasks fa-4x text-green"></i></div>
            <p className="text-darkgreen fs-5 mb-3">EMS</p>
            <a href="#" className="h4 text-darkgreen"></a>
            <div className="pt-4">
              <a className="btn btn-primary rounded-pill py-3 px-5" href="#">Read More</a>
            </div>
          </div>
        </div>
      </div>
    </OwlCarousel>
  </div>
</div>
{/* Project End */}



    {/* Blog Start */}
    {/* <div className="container-fluid blog pb-5">
      <div className="container pb-5">
        <div className="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: '800px'}}>
          <h4 className="text-green">What's new?</h4>
          <h1 className="text-darkgreen">News and Updates</h1>
        </div>
        <div className="row g-4 justify-content-center">
          <div className="col-md-6 col-lg-6 col-xl-4 wow fadeInUp" data-wow-delay="0.1s">
            <div className="blog-item bg-light rounded p-4" style={{backgroundImage: 'url(img/bg.png)'}}>
              <div className="mb-4">
                <h4 className="text-green mb-2">Investment</h4>
                <div className="d-flex justify-content-between">
                  <p className="mb-0"><span className="text-dark fw-bold">On</span> Mar 14, 2024</p>
                  <p className="mb-0"><span className="text-dark fw-bold">By</span> Mark D. Brock</p>
                </div>
              </div>
              <div className="project-img">
                <img src="img/blog-1.jpg" className="img-fluid w-100 rounded" alt="Image" />
                <div className="blog-plus-icon">
                  <a href="img/blog-1.jpg" data-lightbox="blog-1" className="btn btn-primary btn-md-square rounded-pill"><i className="fas fa-plus fa-1x" /></a>
                </div>
              </div>
              <div className="my-4">
                <a href="#" className="h4 text-darkgreen">Revisiting Your Investment &amp; Distribution Goals</a>
              </div>
              <a className="btn btn-primary rounded-pill py-2 px-4" href="#">Explore More</a>
            </div>
          </div>
          <div className="col-md-6 col-lg-6 col-xl-4 wow fadeInUp" data-wow-delay="0.3s">
            <div className="blog-item bg-light rounded p-4" style={{backgroundImage: 'url(img/bg.png)'}}>
              <div className="mb-4">
                <h4 className="text-green mb-2">Business</h4>
                <div className="d-flex justify-content-between">
                  <p className="mb-0"><span className="text-dark fw-bold">On</span> Mar 14, 2024</p>
                  <p className="mb-0"><span className="text-dark fw-bold">By</span> Mark D. Brock</p>
                </div>
              </div>
              <div className="project-img">
                <img src="img/blog-2.jpg" className="img-fluid w-100 rounded" alt="Image" />
                <div className="blog-plus-icon">
                  <a href="img/blog-2.jpg" data-lightbox="blog-2" className="btn btn-primary btn-md-square rounded-pill"><i className="fas fa-plus fa-1x" /></a>
                </div>
              </div>
              <div className="my-4">
                <a href="#" className="h4 text-darkgreen">Dimensional Fund Advisors Interview with Director</a>
              </div>
              <a className="btn btn-primary rounded-pill py-2 px-4" href="#">Explore More</a>
            </div>
          </div>
          <div className="col-md-6 col-lg-6 col-xl-4 wow fadeInUp" data-wow-delay="0.5s">
            <div className="blog-item bg-light rounded p-4" style={{backgroundImage: 'url(img/bg.png)'}}>
              <div className="mb-4">
                <h4 className="text-green mb-2">Consulting</h4>
                <div className="d-flex justify-content-between">
                  <p className="mb-0"><span className="text-dark fw-bold">On</span> Mar 14, 2024</p>
                  <p className="mb-0"><span className="text-dark fw-bold">By</span> Mark D. Brock</p>
                </div>
              </div>
              <div className="project-img">
                <img src="img/blog-3.jpg" className="img-fluid w-100 rounded" alt="Image" />
                <div className="blog-plus-icon">
                  <a href="img/blog-3.jpg" data-lightbox="blog-3" className="btn btn-primary btn-md-square rounded-pill"><i className="fas fa-plus fa-1x" /></a>
                </div>
              </div>
              <div className="my-4">
                <a href="#" className="h4 text-darkgreen">Interested in Giving Back this year? Here are some tips</a>
              </div>
              <a className="btn btn-primary rounded-pill py-2 px-4" href="#">Explore More</a>
            </div>
          </div>
        </div>
      </div>
    </div> */}
    {/* Blog End */}
{/* Team Start */}
<div className="container-fluid team pb-5">
  <div className="container pb-5">
    <div className="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '800px' }}>
      <h4 className="text-green">Our Team</h4>
      <h1 className="text-darkgreen">Our PineappleAI Company Dedicated Team Members</h1>
    </div>
    <OwlCarousel className="team-carousel owl-carousel" {...teamOptions}>
      {/* Team Member 1 */}
      <div className="team-item rounded">
        <div className="team-img">
          <img src="img/mat.jpg" className="img-fluid w-100 rounded-top fixed-size-image" alt="Image" />
          <div className="team-icon">
            <a className="btn btn-primary btn-sm-square text-white rounded-circle mb-3" href="#"><i className="fas fa-share-alt" /></a>
            <a className="btn btn-primary btn-sm-square text-white rounded-circle mb-3" href="#"><i className="fab fa-facebook-f" /></a>
            <a className="btn btn-primary btn-sm-square text-white rounded-circle mb-3" href="#"><i className="fab fa-twitter" /></a>
            <a className="btn btn-primary btn-sm-square text-white rounded-circle mb-0" href="#"><i className="fab fa-instagram" /></a>
          </div>
        </div>
        <div className="team-content bg-light text-center rounded-bottom p-4">
          <div className="team-content-inner rounded-bottom">
            <h4 className="text-black">Mis.K.Mathumitha</h4>
            <p className="text-muted mb-0">QA Engineer(Intern)</p>
          </div>
        </div>
      </div>
      {/* Team Member 2 */}
      <div className="team-item rounded">
        <div className="team-img">
          <img src="img/su.jpg" className="img-fluid w-100 rounded-top fixed-size-image" alt="Image" />
          <div className="team-icon">
            <a className="btn btn-primary btn-sm-square text-white rounded-circle mb-3" href="#"><i className="fas fa-share-alt" /></a>
            <a className="btn btn-primary btn-sm-square text-white rounded-circle mb-3" href="#"><i className="fab fa-facebook-f" /></a>
            <a className="btn btn-primary btn-sm-square text-white rounded-circle mb-3" href="#"><i className="fab fa-twitter" /></a>
            <a className="btn btn-primary btn-sm-square text-white rounded-circle mb-0" href="#"><i className="fab fa-instagram" /></a>
          </div>
        </div>
        <div className="team-content bg-light text-center rounded-bottom p-4">
          <div className="team-content-inner rounded-bottom">
            <h4 className="text-black">Mr.T.Subothavajan</h4>
            <p className="text-muted mb-0">Mobileapp Engineer(Intern)</p>
          </div>
        </div>
      </div>
      {/* Team Member 3 */}
      <div className="team-item rounded">
        <div className="team-img">
          <img src="img/nivet.jpg" className="img-fluid w-100 rounded-top fixed-size-image" alt="Image" />
          <div className="team-icon">
            <a className="btn btn-primary btn-sm-square text-white rounded-circle mb-3" href="#"><i className="fas fa-share-alt" /></a>
            <a className="btn btn-primary btn-sm-square text-white rounded-circle mb-3" href="#"><i className="fab fa-facebook-f" /></a>
            <a className="btn btn-primary btn-sm-square text-white rounded-circle mb-3" href="#"><i className="fab fa-twitter" /></a>
            <a className="btn btn-primary btn-sm-square text-white rounded-circle mb-0" href="#"><i className="fab fa-" /></a>
          </div>
        </div>
        <div className="team-content bg-light text-center rounded-bottom p-4">
          <div className="team-content-inner rounded-bottom">
            <h4 className="text-black">Mis.V.Nivethiga</h4>
            <p className="text-muted mb-0">Fullstack Engineer(Intern)</p>
          </div>
        </div>
      </div>
      {/* Team Member 4 */}
      <div className="team-item rounded">
        <div className="team-img">
          <img src="img/thi.jpg" className="img-fluid w-100 rounded-top fixed-size-image" alt="Image" />
          <div className="team-icon">
            <a className="btn btn-primary btn-sm-square text-white rounded-circle mb-3" href="#"><i className="fas fa-share-alt" /></a>
            <a className="btn btn-primary btn-sm-square text-white rounded-circle mb-3" href="#"><i className="fab fa-linkedin-in" /></a>
            <a className="btn btn-primary btn-sm-square text-white rounded-circle mb-3" href="#"><i className="fab fa-twitter" /></a>
            <a className="btn btn-primary btn-sm-square text-white rounded-circle mb-0" href="#"><i className="fab fa-instagram" /></a>
          </div>
        </div>
        <div className="team-content bg-light text-center rounded-bottom p-4">
          <div className="team-content-inner rounded-bottom">
            <h4 className="text-black">Mis.R.Thivja</h4>
            <p className="text-muted mb-0">Fullstack Engineer(Intern)</p>
          </div>
        </div>
      </div>
      {/* Team Member 5 */}
      <div className="team-item rounded">
        <div className="team-img">
          <img src="img/th.jpg" className="img-fluid w-100 rounded-top fixed-size-image" alt="Image" />
          <div className="team-icon">
            <a className="btn btn-primary btn-sm-square text-white rounded-circle mb-3" href="#"><i className="fas fa-share-alt" /></a>
            <a className="btn btn-primary btn-sm-square text-white rounded-circle mb-3" href="#"><i className="fab fa-facebook-f" /></a>
            <a className="btn btn-primary btn-sm-square text-white rounded-circle mb-3" href="#"><i className="fab fa-twitter" /></a>
            <a className="btn btn-primary btn-sm-square text-white rounded-circle mb-0" href="#"><i className="fab fa-instagram" /></a>
          </div>
        </div>
        <div className="team-content bg-light text-center rounded-bottom p-4">
          <div className="team-content-inner rounded-bottom">
            <h4 className="text-black">Mis.B.Tharankitha</h4>
            <p className="text-muted mb-0">HR(Intern)</p>
          </div>
        </div>
      </div>
    </OwlCarousel>
  </div>
</div>
{/* Team End */}


    {/* Team Start */}
    {/* <div className="container-fluid team pb-5">
      <div className="container pb-5">
        <div className="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: '800px'}}>
          <h4 className="text-green">Our Team</h4>
          <h1 className="text-darkgreen">Our PineappleAI Company Dedicated Team Members</h1>
        </div>
        <div className="row g-4 justify-content-center">
          <div className="col-sm-6 col-md-6 col-lg-4 col-xl-3 wow fadeInUp" data-wow-delay="0.1s">
            <div className="team-item rounded">
              <div className="team-img">
                <img src="img/mat.jpg" className="img-fluid w-100 rounded-top" alt="Image" />
                <div className="team-icon">
                  <a className="btn btn-primary btn-sm-square text-white rounded-circle mb-3" href><i className="fas fa-share-alt" /></a>
                  <div className="team-icon-share">
                    <a className="btn btn-primary btn-sm-square text-white rounded-circle mb-3" href><i className="fab fa-facebook-f" /></a>
                    <a className="btn btn-primary btn-sm-square text-white rounded-circle mb-3" href><i className="fab fa-twitter" /></a>
                    <a className="btn btn-primary btn-sm-square text-white rounded-circle mb-0" href><i className="fab fa-instagram" /></a>
                  </div>
                </div>
              </div>
              <div className="team-content bg-light text-center rounded-bottom p-4">
                <div className="team-content-inner rounded-bottom">
                  <h4 className="text-black">Mis.K.Mathumitha</h4>
                  <p className="text-muted mb-0">QA Engineer(Intern)</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-6 col-lg-4 col-xl-3 wow fadeInUp" data-wow-delay="0.3s">
            <div className="team-item rounded">
              <div className="team-img">
                <img src="img/su.jpg" className="img-fluid w-100 rounded-top" alt="Image" />
                <div className="team-icon">
                  <a className="btn btn-primary btn-sm-square text-white rounded-circle mb-3" href><i className="fas fa-share-alt" /></a>
                  <div className="team-icon-share">
                    <a className="btn btn-primary btn-sm-square text-white rounded-circle mb-3" href><i className="fab fa-facebook-f" /></a>
                    <a className="btn btn-primary btn-sm-square text-white rounded-circle mb-3" href><i className="fab fa-twitter" /></a>
                    <a className="btn btn-primary btn-sm-square text-white rounded-circle mb-0" href><i className="fab fa-instagram" /></a>
                  </div>
                </div>
              </div>
              <div className="team-content bg-light text-center rounded-bottom p-4">
                <div className="team-content-inner rounded-bottom">
                  <h4 className="text-black">Mr.T.Subothavajan</h4>
                  <p className="text-muted mb-0">Mobileapp Engineer(Intern)</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-6 col-lg-4 col-xl-3 wow fadeInUp" data-wow-delay="0.7s">
            <div className="team-item rounded">
              <div className="team-img">
                <img src="img/nivet.jpg" className="img-fluid w-100 rounded-top" alt="Image" />
                <div className="team-icon">
                  <a className="btn btn-primary btn-sm-square text-white rounded-circle mb-3" href><i className="fas fa-share-alt" /></a>
                  <div className="team-icon-share">
                    <a className="btn btn-primary btn-sm-square text-white rounded-circle mb-3" href><i className="fab fa-facebook-f" /></a>
                    <a className="btn btn-primary btn-sm-square text-white rounded-circle mb-3" href><i className="fab fa-twitter" /></a>
                    <a className="btn btn-primary btn-sm-square text-white rounded-circle mb-0" href><i className="fab fa-instagram" /></a>
                  </div>
                </div>
              </div>
              <div className="team-content bg-light text-center rounded-bottom p-4">
                <div className="team-content-inner rounded-bottom">
                  <h4 className="text-white">Mark D. Brock</h4>
                  <p className="text-muted mb-0">CEO &amp; Founder</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-6 col-lg-4 col-xl-3 wow fadeInUp" data-wow-delay="0.5s">
            <div className="team-item rounded">
              <div className="team-img">
                <img src="img/thi.jpg" className="img-fluid w-100 rounded-top" alt="Image" />
                <div className="team-icon">
                  <a className="btn btn-primary btn-sm-square text-white rounded-circle mb-3" href><i className="fas fa-share-alt" /></a>
                  <div className="team-icon-share">
                    <a className="btn btn-primary btn-sm-square text-white rounded-circle mb-3" href><i className="fab fa-facebook-f" /></a>
                    <a className="btn btn-primary btn-sm-square text-white rounded-circle mb-3" href><i className="fab fa-twitter" /></a>
                    <a className="btn btn-primary btn-sm-square text-white rounded-circle mb-0" href><i className="fab fa-instagram" /></a>
                  </div>
                </div>
              </div>
              <div className="team-content bg-light text-center rounded-bottom p-4">
                <div className="team-content-inner rounded-bottom">
                  <h4 className="text-black">Mis.R.Thivja</h4>
                  <p className="text-muted mb-0">FullStack Engineer(Intern)</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-6 col-lg-4 col-xl-3 wow fadeInUp" data-wow-delay="0.7s">
            <div className="team-item rounded">
              <div className="team-img">
                <img src="img/th.jpg" className="img-fluid w-100 rounded-top" alt="Image" />
                <div className="team-icon">
                  <a className="btn btn-primary btn-sm-square text-white rounded-circle mb-3" href><i className="fas fa-share-alt" /></a>
                  <div className="team-icon-share">
                    <a className="btn btn-primary btn-sm-square text-white rounded-circle mb-3" href><i className="fab fa-facebook-f" /></a>
                    <a className="btn btn-primary btn-sm-square text-white rounded-circle mb-3" href><i className="fab fa-twitter" /></a>
                    <a className="btn btn-primary btn-sm-square text-white rounded-circle mb-0" href><i className="fab fa-instagram" /></a>
                  </div>
                </div>
              </div>
              <div className="team-content bg-light text-center rounded-bottom p-4">
                <div className="team-content-inner rounded-bottom">
                  <h4 className="text-white">Mark D. Brock</h4>
                  <p className="text-muted mb-0">CEO &amp; Founder</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> */}
    {/* Team End */}
    {/* Testimonial Start */}
    {/* <div class="container-fluid testimonial bg-light py-5">
        <div class="container py-5">
            <div class="row g-4 align-items-center">
                <div class="col-xl-4 wow fadeInLeft" data-wow-delay="0.1s">
                    <div class="h-100 rounded">
                        <h4 class="text-primary">Our Feedbacks </h4>
                        <h1 class="display-4 mb-4">Clients are Talking</h1>
                        <p class="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum atque soluta unde itaque. Consequatur quam odit blanditiis harum veritatis porro.</p>
                        <a class="btn btn-primary rounded-pill text-white py-3 px-5" href="#">Read All Reviews <i class="fas fa-arrow-right ms-2"></i></a>
                    </div>
                </div>
                <div class="col-xl-8">
                    <div class="testimonial-carousel owl-carousel wow fadeInUp" data-wow-delay="0.1s">
                        <div class="testimonial-item bg-white rounded p-4 wow fadeInUp" data-wow-delay="0.3s">
                            <div class="d-flex">
                                <div><i class="fas fa-quote-left fa-3x text-dark me-3"></i></div>
                                <p class="mt-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam eos impedit eveniet dolorem culpa ullam incidunt vero quo recusandae nemo? Molestiae doloribus iure,
                                </p>
                            </div>
                            <div class="d-flex justify-content-end">
                                <div class="my-auto text-end">
                                    <h5>Person Name</h5>
                                    <p class="mb-0">Profession</p>
                                </div>
                                <div class="bg-white rounded-circle ms-3">
                                    <img src="img/testimonial-1.jpg" class="rounded-circle p-2" style="width: 80px; height: 80px; border: 1px solid; border-color: var(--bs-primary);" alt="">
                                </div>
                            </div>
                        </div>
                        <div class="testimonial-item bg-white rounded p-4 wow fadeInUp" data-wow-delay="0.5s">
                            <div class="d-flex">
                                <div><i class="fas fa-quote-left fa-3x text-dark me-3"></i></div>
                                <p class="mt-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam eos impedit eveniet dolorem culpa ullam incidunt vero quo recusandae nemo? Molestiae doloribus iure,
                                </p>
                            </div>
                            <div class="d-flex justify-content-end">
                                <div class="my-auto text-end">
                                    <h5>Person Name</h5>
                                    <p class="mb-0">Profession</p>
                                </div>
                                <div class="bg-white rounded-circle ms-3">
                                    <img src="img/testimonial-2.jpg" class="rounded-circle p-2" style="width: 80px; height: 80px; border: 1px solid; border-color: var(--bs-primary);" alt="">
                                </div>
                            </div>
                        </div>
                        <div class="testimonial-item bg-white rounded p-4 wow fadeInUp" data-wow-delay="0.7s">
                            <div class="d-flex">
                                <div><i class="fas fa-quote-left fa-3x text-dark me-3"></i></div>
                                <p class="mt-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam eos impedit eveniet dolorem culpa ullam incidunt vero quo recusandae nemo? Molestiae doloribus iure,
                                </p>
                            </div>
                            <div class="d-flex justify-content-end">
                                <div class="my-auto text-end">
                                    <h5>Person Name</h5>
                                    <p class="mb-0">Profession</p>
                                </div>
                                <div class="bg-white rounded-circle ms-3">
                                    <img src="img/testimonial-3.jpg" class="rounded-circle p-2" style="width: 80px; height: 80px; border: 1px solid; border-color: var(--bs-primary);" alt="">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div> */}
    {/* Testimonial End */}
    {/* FAQ Start */}
    {/* <div class="container-fluid faq py-5">
        <div class="container py-5">
            <div class="row g-5 align-items-center">
                <div class="col-lg-6 wow fadeInLeft" data-wow-delay="0.1s">
                    <div class="pb-5">
                        <h4 class="text-primary">FAQs</h4>
                        <h1 class="display-4">Get the Answers to Common Questions</h1>
                    </div>
                   <div class="accordion bg-light rounded p-4" id="accordionExample">
                        <div class="accordion-item border-0 mb-4">
                            <h2 class="accordion-header" id="headingOne">
                                <button class="accordion-button text-dark fs-5 fw-bold rounded-top" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseTOne">
                                    What Does a Financial Advisor Do?
                                </button>
                            </h2>
                            <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                <div class="accordion-body my-2">
                                    <h5>Dolor sit amet consectetur adipisicing elit.</h5>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad nemo impedit, sapiente quis illo quia nulla atque maxime fuga minima ipsa quae cum consequatur, sit, delectus exercitationem odit officiis maiores! Neque, quidem corrupti modi architecto eos saepe incidunt dignissimos rerum.</p>
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item border-0 mb-4">
                            <h2 class="accordion-header" id="headingTwo">
                                <button class="accordion-button collapsed text-dark fs-5 fw-bold rounded-top" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    What industries do you specialize in? 
                                </button>
                            </h2>
                            <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                <div class="accordion-body my-2">
                                    <h5>Dolor sit amet consectetur adipisicing elit.</h5>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad nemo impedit, sapiente quis illo quia nulla atque maxime fuga minima ipsa quae cum consequatur, sit, delectus exercitationem odit officiis maiores! Neque, quidem corrupti modi architecto eos saepe incidunt dignissimos rerum.</p>
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item border-0 mb-4">
                            <h2 class="accordion-header" id="headingThree">
                                <button class="accordion-button collapsed text-dark fs-5 fw-bold rounded-top" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    Can you guarantee for growth?
                                </button>
                            </h2>
                            <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                <div class="accordion-body my-2">
                                    <h5>Dolor sit amet consectetur adipisicing elit.</h5>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad nemo impedit, sapiente quis illo quia nulla atque maxime fuga minima ipsa quae cum consequatur, sit, delectus exercitationem odit officiis maiores! Neque, quidem corrupti modi architecto eos saepe incidunt dignissimos rerum.</p>
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item border-0 mb-0">
                            <h2 class="accordion-header" id="headingFour">
                                <button class="accordion-button collapsed text-dark fs-5 fw-bold rounded-top" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                    What makes your business plans so special?
                                </button>
                            </h2>
                            <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                <div class="accordion-body my-2">
                                    <h5>Dolor sit amet consectetur adipisicing elit.</h5>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad nemo impedit, sapiente quis illo quia nulla atque maxime fuga minima ipsa quae cum consequatur, sit, delectus exercitationem odit officiis maiores! Neque, quidem corrupti modi architecto eos saepe incidunt dignissimos rerum.</p>
                                </div>
                            </div>
                        </div>
                   </div>
                </div>
                <div class="col-lg-6 wow fadeInRight" data-wow-delay="0.3s">
                    <div class="faq-img RotateMoveRight rounded">
                        <img src="img/faq-img.jpg" class="img-fluid rounded w-100" alt="Image">
                        <a class="faq-btn btn btn-primary rounded-pill text-white py-3 px-5" href="#">Read More Q & A <i class="fas fa-arrow-right ms-2"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </div> */}
    {/* FAQ End */}
    {/* Footer Start */}
    <div className="container-fluid footer py-5 wow fadeIn" data-wow-delay="0.2s">
      <div className="container py-5">
        <div className="row g-5">
          <div className="col-md-6 col-lg-6 col-xl-3">
            <div className="footer-item d-flex flex-column">
              <div className="footer-item">
                <h4 className="text-white mb-4">Newsletter</h4>
                <p className="text-white mb-3">Connect with industry experts and embark on a journey to achieve unparalleled success.</p>
                <div className="position-relative mx-auto rounded-pill">
                  <input className="form-control rounded-pill w-100 py-3 ps-4 pe-5" type="text" placeholder="Enter your email" />
                  <button type="button" className="btn btn-primary rounded-pill position-absolute top-0 end-0 py-2 mt-2 me-2">SignUp</button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-6 col-xl-3">
    <div className="footer-item d-flex flex-column">
        <h4 className="text-white mb-4">Explore</h4>
        <a href="#"><i className="fas fa-angle-right me-2"></i> Home</a>
        <a href="#"><i className="fas fa-angle-right me-2"></i> Services</a>
        <a href="#"><i className="fas fa-angle-right me-2"></i> About Us</a>
        <a href="#"><i className="fas fa-angle-right me-2"></i> Latest Projects</a>
        <a href="#"><i className="fas fa-angle-right me-2"></i> Testimonial</a>
        <a href="#"><i className="fas fa-angle-right me-2"></i> Our Team</a>
        <a href="#"><i className="fas fa-angle-right me-2"></i> Contact Us</a>
    </div>
</div>
<div className="col-md-6 col-lg-6 col-xl-3">
    <div className="footer-item d-flex flex-column">
        <h4 className="text-white mb-4">Contact</h4>
        <a href="#"><i className="fa fa-map-marker-alt me-2"></i> No. 34, Kaladdy Amman Road, Jaffna-40000, Sri Lanka</a>
        <a href="#"><i className="fas fa-envelope me-2"></i> thepineappleai.com</a>
        <a href="#"><i className="fas fa-phone me-2"></i> 077-8142648</a>
              <div className="d-flex align-items-center">
                <a className="btn btn-light btn-md-square me-2" href><i className="fab fa-facebook-f" /></a>
                <a className="btn btn-light btn-md-square me-2" href><i className="fab fa-twitter" /></a>
                <a className="btn btn-light btn-md-square me-2" href><i className="fab fa-instagram" /></a>
                <a className="btn btn-light btn-md-square me-0" href="https://www.linkedin.com/company/pineappleaicloud/"><i className="fab fa-linkedin-in" /></a>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-6 col-xl-3">
            <div className="footer-item-post d-flex flex-column">
              <h4 className="text-white mb-4">Popular Post</h4>
              <div className="d-flex flex-column mb-3">
                <p className="text-uppercase text-white mb-2">PINEAPPLEAI</p>
                <a href="#" className="text-white">Staring your career &amp; wih PINEAPPLEAI</a>
              </div>
              <div className="d-flex flex-column mb-3">
                <p className="text-uppercase text-white mb-2">Customer-Centric</p>
                <a href="#" className="text-white">'Our clients' needs are our top priority; we deliver</a>
              </div>
              <div className="footer-btn text-start">
                <a href="#" className="btn btn-light rounded-pill px-4">View All Post <i className="fa fa-arrow-right ms-1" /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Footer End */}
    {/* Copyright Start */}
    <div className="container-fluid copyright py-4">
      <div className="container">
        <div className="row g-4 align-items-center">
          <div className="col-md-6 text-center text-md-start mb-md-0">
            <span className="text-body"><a href className="border-bottom text-white"><i className="fas fa-copyright text-light me-2" />PINEAPPLEAI.CLOUD </a>, All right reserved.</span>
          </div>
          <div className="col-md-6 text-center text-md-end text-body">
            Designed By <a className="border-bottom text-white" href>PineappleAI</a>
          </div>
        </div>
      </div>
    </div>
    {/* Copyright End */}
    {/* Back to Top */}
    <a href="#" className="btn btn-primary btn-lg-square back-to-top"><i className="fa fa-arrow-up" /></a>   
    {/* JavaScript Libraries */}
    {/* Template Javascript */}
  </div>

  )
}

export default Home;