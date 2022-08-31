import React from 'react'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import '../layout/contact.css'
// import {Form} from 'react-bootstrap/Form';
import '../layout/home.css'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';


export default function Home() {
  return (
    <div>
        <main className="main" id="top">  
        <div className="fixed-top">
      {['md'].map((expand) => (
        <Navbar key={expand} bg="dark" expand={expand} className="mb-3">
          <Container fluid>
            <Navbar.Brand bg="dark" href="/"><img className="img-fluid mt-3 mb-3" src="assets/logo.png" alt=""  style={{width:'90px',height:'50px'}}/></Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                Transport Disparture System
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav  className="justify-content-end flex-grow-1 pe-3 ">
                  <Nav.Link style={{marginTop:'13px'}}  href="/">Home</Nav.Link>
                  <Nav.Link style={{marginTop:'13px'}} href="#action1">Buy Ticket</Nav.Link>
                  
                  <Button   variant="outline-success">
                  <NavDropdown
                    title="Login"
                    id={`offcanvasNavbarDropdown-expand-${expand}`} 
                    style={{alignContent:"center"}}
                  >
                    <NavDropdown.Item href="/login">Client</NavDropdown.Item>
                    <NavDropdown.Item href="/logintoangent">
                      Agent
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/logintocompany">
                      Company
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/logintoother">Other</NavDropdown.Item>
                  </NavDropdown></Button>&nbsp;&nbsp;&nbsp;&nbsp;
                  <Button variant="outline-success"><Link to="/register">Register</Link></Button>
                  
                  {/* <NavDropdown
                    title="Dropdown"
                    id={`offcanvasNavbarDropdown-expand-${expand}`} 
                  >
                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Something else here
                    </NavDropdown.Item>
                  </NavDropdown> */}
                </Nav>
                {/* <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  /> */}
                  {/* <Button variant="outline-success">Search</Button> */}
                {/* </Form> */}
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </div>           
            <div className="bg-dark" ><img className="img-fluid position-absolute end-0" src="assets/img/hero/hero-bg.png" alt="" />
       <section>
<br /><br />
<div className="container">
  <div className="row align-items-center py-lg-8 py-6">
    <div className="col-lg-6 text-center text-lg-start">
      <h1 className="text-white fs-5 fs-xl-6">Save time by booking your ticket online </h1>
      <p className="text-white py-lg-3 py-2">we are linking people with their place. throught Transport management System.</p>
      <div className="d-sm-flex align-items-center gap-3">
        <button className="btn btn-success text-black mb-3 w-75">Buy Ticket</button>
        <button className="btn btn-outline-light mb-3 w-75">Explore Agancies</button>
      </div>
    </div>
    <div className="col-lg-6 text-center text-lg-end mt-3 mt-lg-0"><img className="img-fluid" src="assets/img/hero/hero-graphics.png" alt="" /></div>
  </div>
  <div className="swiper">
    <div className="swiper-container swiper-shadow swiper-theme" data-swiper='{"slidesPerView":2,"breakpoints":{"640":{"slidesPerView":2,"spaceBetween":20},"768":{"slidesPerView":4,"spaceBetween":40},"992":{"slidesPerView":5,"spaceBetween":40},"1024":{"slidesPerView":4,"spaceBetween":50},"1025":{"slidesPerView":6,"spaceBetween":50}},"spaceBetween":10,"grabCursor":true,"pagination":{"el":".swiper-pagination","clickable":true},"loop":true,"freeMode":true,"autoplay":{"delay":2500,"disableOnInteraction":false}}'>
      <div className="swiper-wrapper">
        {/* <div className="swiper-slide text-center"><img src="assets/img/logos/boldo.png" alt="" /></div>
        <div className="swiper-slide text-center"><img src="assets/img/logos/presto.png" alt="" /></div>
        <div className="swiper-slide text-center"><img src="assets/img/logos/boldo.png" alt="" /></div>
        <div className="swiper-slide text-center"><img src="assets/img/logos/presto.png" alt="" /></div>
        <div className="swiper-slide text-center"><img src="assets/img/logos/boldo.png" alt="" /></div>
        <div className="swiper-slide text-center"><img src="assets/img/logos/presto.png" alt="" /></div> */}
       
      </div>
    </div>
  </div>
</div>


</section>



</div>


<section>

<div className="container">
<p className="text-center fs-1">Our Services</p>
<h2 className="mx-auto text-center fs-lg-6 fs-md-5 w-lg-75">Welcome to Transport Dispature Your Journey Here Is Valued.</h2>
<div className="row gx-xl-7 mt-5">
  <div className="col-md-4 mb-6 mb-md-0 text-center text-md-start"><img className="w-50 w-md-100" src="assets/img/services/1.png" alt="" />
    <h4 className="mt-3 my-1">We Link People With Place</h4>
    <p className="fs-1 mb-0">buy ticket online </p><Link className="text-dark fs-1 pb-2 fw-bold border-black border-bottom text-decoration-none" to="#">Explore page<i className="fa-solid fa-arrow-right ms-2"></i></Link>
  </div>
  <div className="col-md-4 mb-6 mb-md-0 text-center text-md-start"><img className="w-50 w-md-100" src="assets/img/services/2.png" alt="" />
    <h4 className="mt-3 my-1">We Link People With Place</h4>
    <p className="fs-1 mb-0">buy ticket online </p><Link className="text-dark fs-1 pb-2 fw-bold border-black border-bottom text-decoration-none" to="#">Explore page<i className="fa-solid fa-arrow-right ms-2"></i></Link>
  </div>
  <div className="col-md-4 mb-6 mb-md-0 text-center text-md-start"><img className="w-50 w-md-100" src="assets/img/services/3.png" alt="" />
    <h4 className="mt-3 my-1">We Link People With Place</h4>
    <p className="fs-1 mb-0">buy ticket online</p><Link className="text-dark fs-1 pb-2 fw-bold border-black border-bottom text-decoration-none" to="#">Explore page<i className="fa-solid fa-arrow-right ms-2"></i></Link>
  </div>
</div>
</div>


</section>

<section>

<div className="container">
<div className="row align-items-center">
  <div className="col-lg-6 text-center text-lg-start"><img className="img-fluid" src="assets/traffic.jpg" alt="" /></div>
  <div className="col-lg-6">
    <h1 className="fs-xl-5 fs-lg-4 fs-3">We connect our customers with the best, and help them keep up-and stay open.</h1>
    <ul className="list-unstyled my-xl-5 my-3">
      <li className="fs-2 my-4 d-flex align-items-center gap-3 text-black"><i className="fa-solid fa-circle-check fs-4 text-dark"></i><span>We connect our customers with the best.</span></li>
      <li className="fs-2 my-4 d-flex align-items-center gap-3 text-black"><i className="fa-solid fa-circle-check fs-4 text-dark"></i><span>we work with different transportion agancies.</span></li>
      <li className="fs-2 my-4 d-flex align-items-center gap-3 text-black"><i className="fa-solid fa-circle-check fs-4 text-dark"></i><span>we link people with their place</span></li>
    </ul>
    <button className="btn btn-dark">buy ticket</button>
  </div>
</div>
</div>


</section>

<section className="pt-8 pt-lg-0">

<div className="container">
<div className="d-flex flex-column-reverse flex-lg-row">
  <div className="col-lg-6">
    <h1 className="fs-lg-4 fs-md-3 fs-xl-5 mb-5">We connect our customers with the best, and help them keep up-and stay open.</h1>
    <ul className="list-unstyled">
      <li className="fs-2 shadow-sm offer-list-item"><i className="fa-solid fa-leaf fs-lg-4 fs-3"></i><span>We connect our customers with the best.</span></li>
      <li className="fs-2 shadow-sm offer-list-item"><i className="fa-solid fa-eye fs-lg-4 fs-3"></i><span>we work with different transportion agancies.</span></li>
      <li className="fs-2 shadow-sm offer-list-item"><i className="fa-solid fa-sun fs-lg-4 fs-3"></i><span>we link people with their place.</span></li>
    </ul>
  </div>
  <div className="col-lg-6 text-center text-lg-end"><img className="img-fluid" src="assets/img/offer/2.png" alt="" /></div>
</div>
</div>


</section>

<section className="bg-dark pt-6">

<div className="container">
  <div className="col-md-6">
    <h1 className="text-white fs-lg-5 fs-md-3 fs-2">An enterprise template to ramp up your company website</h1>
  </div>
  <div className="swiper mt-7">
    <div className="swiper-container swiper-theme" data-swiper='{"slidesPerView":1,"breakpoints":{"640":{"slidesPerView":1,"spaceBetween":10},"768":{"slidesPerView":2,"spaceBetween":20},"1025":{"slidesPerView":3,"spaceBetween":40}},"spaceBetween":10,"grabCursor":true,"pagination":{"el":".swiper-pagination","clickable":true},"navigation":{"nextEl":".swiper-button-next","prevEl":".swiper-button-prev"},"loop":true,"freeMode":true,"loopedSlides":3}'>
      <div className="swiper-wrapper">
        <div className="swiper-slide bg-white p-5 rounded-3 h-auto">
          <div className="d-flex flex-column justify-content-between h-100">
            <h4 className="text-black">“Buyer buzz partner network disruptive non-disclosure agreement business”</h4>
            <div className="d-flex align-items-center gap-3 mt-5"><img src="assets/img/review/1.png" alt="" />
              <div className="text-black">
                <p className="mb-0 fw-bold text-dark">Albus Dumbledore</p><small>Manager @ Howarts</small>
              </div>
            </div>
          </div>
        </div>
        <div className="swiper-slide bg-white p-5 rounded-3 h-auto">
          <div className="d-flex flex-column justify-content-between h-100">
            <h4 className="text-black">“Learning curve infrastructure value proposition advisor strategy user experience hypotheses investor.”</h4>
            <div className="d-flex align-items-center gap-3 mt-5"><img src="assets/img/review/2.png" alt="" />
              <div className="text-black">
                <p className="mb-0 fw-bold text-dark">Severus Snape</p><small>Manager @ Slytherin</small>
              </div>
            </div>
          </div>
        </div>
        <div className="swiper-slide bg-white p-5 rounded-3 h-auto">
          <div className="d-flex flex-column justify-content-between h-100">
            <h4 className="text-black">“Release facebook responsive web design business model canvas seed money monetization.”</h4>
            <div className="d-flex align-items-center gap-3 mt-5"><img src="assets/img/review/3.png" alt="" />
              <div className="text-black">
                <p className="mb-0 fw-bold text-dark">Harry Potter</p><small>Team Leader @ Gryffindor</small>
              </div>
            </div>
          </div>
        </div>
        <div className="swiper-slide bg-white p-5 rounded-3 h-auto">
          <div className="d-flex flex-column justify-content-between h-100">
            <h4 className="text-black">“Buyer buzz partner network disruptive non-disclosure agreement business”</h4>
            <div className="d-flex align-items-center gap-3 mt-5"><img src="assets/img/review/1.png" alt="" />
              <div className="text-black">
                <p className="mb-0 fw-bold text-dark">Albus Dumbledore</p><small>Manager @ Howarts</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="swiper-button-next"><span className="fas fa-arrow-right fs-lg-3 fs-2"></span></div>
    <div className="swiper-button-prev"><span className="fas fa-arrow-left fs-lg-3 fs-2"></span></div>
  </div>
</div>


</section>

<section>

<div className="container"><img className="img-fluid" src="assets/bus.png" alt="" />
<div className="row mt-5 align-items-center">
  <div className="col-md-6">
    <h2 className="fs-md-4 fs-3 pt-3">We connect our customers with the best, and help them keep up-and stay open.</h2>
  </div>
  <div className="col-md-6">
    <div className="accordion accordion-flush" id="accordionFlushExample">
      <div className="accordion-item"></div>
      <h2 className="accordion-header border-bottom" id="srgdgfdgdgg45">
        <button className="accordion-button collapsed text-black" type="button" data-bs-toggle="collapse" data-bs-target="#srgdgfdgdgg45tyuu" aria-expanded="false" aria-controls="srgdgfdgdgg45"><span className="fs-1 pe-3">We connect our customers with the best?</span></button>
      </h2>
      <div className="accordion-collapse collapse" aria-labelledby="srgdgfdgdgg45" data-bs-parent="#accordionFlushExample" id="srgdgfdgdgg45tyuu">
        <div className="accordion-body">
          <p className="mb-0">Placeholder content for this accordion, which is intended to demonstrate the accordion-flush className. This is the first item's accordion body.</p>
        </div>
      </div>
      <div className="accordion-item"></div>
      <h2 className="accordion-header border-bottom" id="sxvdgrfhfh276">
        <button className="accordion-button collapsed text-black" type="button" data-bs-toggle="collapse" data-bs-target="#srgdgfdgdgg45tyuu5ghj" aria-expanded="false" aria-controls="sxvdgrfhfh276"><span className="fs-1 pe-3">Android research &amp; development rockstar? </span></button>
      </h2>
      <div className="accordion-collapse collapse" aria-labelledby="sxvdgrfhfh276" data-bs-parent="#accordionFlushExample" id="srgdgfdgdgg45tyuu5ghj">
        <div className="accordion-body">
          <p className="mb-0">Placeholder content for this accordion, which is intended to demonstrate the accordion-flush className. This is the first item's accordion body.</p>
        </div>
      </div>
    </div>
  </div>
</div>
</div>


</section>

<section className="pb-0">

<div className="container">
<p className="text-center text-gray fs-1">Our Blog</p>
<h2 className="mx-auto text-center fs-lg-6 fs-md-5 w-lg-75">Value proposition accelerator product management venture</h2>
<div className="row mt-7 gx-xl-7">
  <div className="col-md-4 text-center text-md-start h-auto mb-5">
    <div className="d-flex justify-content-between flex-column h-100"><Link to="#"><img className="w-75 w-md-100 rounded-2" src="assets/img/blog/1.png" alt="" /></Link>
      <div className="d-flex align-items-center justify-content-center justify-content-md-start gap-2 mt-3"><Link to="#">
          <p className="fw-bold mb-0 text-black">Category</p>
        </Link>
        <p className="mb-0">November 22, 2021</p>
      </div><Link to="#">
        <h5 className="mt-1 mb-3 fs-0 fs-md-1">Pitch termsheet backing validation focus release.</h5>
      </Link>
      <div className="d-flex align-items-center justify-content-center justify-content-md-start gap-3"><img className="img-fluid" src="assets/img/blog/profile1.png" alt="" /><Link to="#">
          <p className="mb-0 text-gray">Chandler Bing</p>
        </Link></div>
    </div>
  </div>
  <div className="col-md-4 text-center text-md-start h-auto mb-5">
    <div className="d-flex justify-content-between flex-column h-100"><Link to="#"><img className="w-75 w-md-100 rounded-2" src="assets/img/blog/2.png" alt="" /></Link>
      <div className="d-flex align-items-center justify-content-center justify-content-md-start gap-2 mt-3"><Link to="#">
          <p className="fw-bold mb-0 text-black">Category</p>
        </Link>
        <p className="mb-0">November 22, 2021</p>
      </div><Link to="#">
        <h5 className="mt-1 mb-3 fs-0 fs-md-1">Seed round direct mailing non-disclosure agreement graphical user interface rockstar.</h5>
      </Link>
      <div className="d-flex align-items-center justify-content-center justify-content-md-start gap-3"><img className="img-fluid" src="assets/img/blog/profile2.png" alt="" /><Link to="#">
          <p className="mb-0 text-gray">Rachel Green</p>
        </Link></div>
    </div>
  </div>
  <div className="col-md-4 text-center text-md-start h-auto mb-5">
    <div className="d-flex justify-content-between flex-column h-100"><Link to="#"><img className="w-75 w-md-100 rounded-2" src="assets/img/blog/3.png" alt="" /></Link>
      <div className="d-flex align-items-center justify-content-center justify-content-md-start gap-2 mt-3"><Link to="#">
          <p className="fw-bold mb-0 text-black">Category</p>
        </Link>
        <p className="mb-0">November 22, 2021</p>
      </div><Link to="/">
        <h5 className="mt-1 mb-3 fs-0 fs-md-1">Beta prototype sales iPad gen-z marketing network effects value proposition</h5>
      </Link>
      <div className="d-flex align-items-center justify-content-center justify-content-md-start gap-3"><img className="img-fluid" src="assets/img/blog/profile3.png" alt="" /><Link to="/">
          <p className="mb-0 text-gray">Monica Geller</p>
        </Link></div>
    </div>
  </div>
</div>
<div className="text-center mb-3">
  <button className="btn btn-outline-dark">Load More</button>
</div>
</div>


</section>
</main>
<section id="contact" className="section">
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12">
                        <div className="block">
                            <div className="heading wow fadeInUp">
                                <h2>Get In Touch</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et <br/> dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-5 wow fadeInUp" style={{marginTop:'3%'}}>
						<div className="block text-left">
							<div className="sub-heading">
								<h4>Contact Address</h4>
								<p>get in touch or ask any question by contacting us</p>
							</div>
							<address className="address">
                                <hr />
								<p>kigali,<br /> musanze,<br /> Rwanda</p>
                                <hr />
                                <p><strong>E:</strong>&nbsp;www.abc@gmail.com<br /> 
                                <strong>P:</strong>&nbsp;+2507800000000</p>
								
                                
							</address>
						</div>
                    </div>

                    <div className="col-xs-12 col-sm-12 col-md-5 col-md-offset-1 wow fadeInUp" data-wow-delay="0.3s"  style={{marginTop:'3%',marginBottom:'3%'}}>
                    	<div className="form-group">
                    	    <form action="#" method="post" id="contact-form">
                    	        <div className="input-field">
                    	            <input type="text" className="form-control" placeholder="Your Name" name="name" />
                    	        </div>
                    	        <div className="input-field">
                    	            <input type="email" className="form-control" placeholder="Email Address" name="email" />
                    	        </div>
                    	        <div className="input-field">
                    	            <textarea className="form-control" placeholder="Your Message" rows="3" name="message"></textarea>
                    	        </div>
                    	        <div className="text-center mb-3">
  <button className="btn btn-outline-dark">Send</button>
</div>
                    	    </form>

                    	    {/* <div id="success">
                    	        <p>Your Message was sent successfully</p>
                    	    </div>
                    	    <div id="error">
                    	        <p>Your Message was not sent successfully</p>
                    	    </div> */}
                    	</div>
                    </div>
                </div>
            </div>
        </section>







<section>

<div className="container bg-dark overflow-hidden rounded-1">
<div className="bg-holder" style={{backgroundImage:'url(assets/img/promo/promo-bg.png)'}}>
</div>
{/* <!--/.bg-holder--> */}

<div className="px-5 py-7 position-relative">
<h1 className="text-center w-lg-75 mx-auto fs-lg-6 fs-md-4 fs-3 text-white">you can global search to explore more</h1>
<div className="row justify-content-center mt-5">
  <div className="col-auto w-100 w-lg-50">
    <input className="form-control mb-2 border-light fs-1" type="email" placeholder="Your email address" />
  </div>
  <div className="col-auto mt-2 mt-lg-0">
    <button className="btn btn-success text-dark fs-1">Search</button>
  </div>
</div>
</div>
</div>


</section>

<section className="pt-0">

<div className="container">
<div className="row justify-content-between">
<div className="col-lg-6 col-sm-12"><Link to="/"><img style={{width:'30%',height: '40%'}} className="img-fluid mt-5 mb-4" src="assets/logo.png" alt="" /></Link>
  <p className="w-lg-75 text-gray">Social media validation business model canvas graphical user interface launch party creative facebook iPad twitter.</p>
</div>
<div className="col-lg-2 col-sm-4">
  <h3 className="fw-bold fs-1 mt-5 mb-4">Landings</h3>
  <ul className="list-unstyled">
    <li className="my-3 col-md-4"><Link to="#">Home</Link></li>
    <li className="my-3"><Link to="#">About</Link></li>
    <li className="my-3"><Link to="#">contact</Link></li>
  </ul>
</div>
<div className="col-lg-2 col-sm-4">
  <h3 className="fw-bold fs-1 mt-5 mb-4">Company</h3>
  <ul className="list-unstyled">
    <li className="my-3"><Link to="#">buy ticket</Link></li>
    <li className="my-3"><Link to="#">register</Link></li>
    <li className="my-3"><Link to="#">login</Link></li>
  </ul>
</div>
<div className="col-lg-2 col-sm-4">
  <h3 className="fw-bold fs-1 mt-5 mb-4">Resources</h3>
  <ul className="list-unstyled">
    <li className="mb-3"><Link to="#">Home</Link></li>
    <li className="mb-3"><Link to="#">Agancies</Link></li>
    <li className="mb-3"><Link to="#">Services</Link></li>
  </ul>
</div>
</div>
<p className="text-gray">All rights reserved.</p>
</div>


</section>
    </div>
  )
}
