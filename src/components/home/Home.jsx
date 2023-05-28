import './Home.css';
import React from "react";
import { Navbar, Nav, Container, Row, Col, Card } from "react-bootstrap";
import logo from '../../image/icon.png';
import secure from '../../image/secure.png';

function Home() {
  return (
    <div className="home">
      <header>  
        <Navbar expand="lg">
          <Navbar.Brand href="home.html">
            <img src={logo} alt="Логотип" width="50" />
            <span className="navbar-brand-text">KDS TEAM</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarNav" />
          <Navbar.Collapse id="navbarNav" className='justify-content-end'>
            <Nav className="ml-auto navbar-links">
              <Nav.Link href="index" className="nav-item active">Home</Nav.Link>
              <Nav.Link href="aboutus.html" className="nav-item">About us</Nav.Link>
              <Nav.Link href="education.html" className="nav-item">Education</Nav.Link>
              <Nav.Link href="gallery.html" className="nav-item">Gallery</Nav.Link>
              <Nav.Link href="login.html" className="nav-item">
                {/* <i className="bi bi-person-fill person"></i> */}
								<FontAwesomeIcon icon="fa-solid fa-user" />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <div className="main-text">welcome to the <br/> place where your children <br/> feel great</div>
      </header>
      <div className="main-content">
        <p className="main-content-text"> We have something to offer you and your child! <br/> If you want to learn more about our methodology,<br/> see our multidisciplinary education system
          <a href="education.html">
            <img className="btn-icon" src="image/pointer.png" alt="Pointer" width="50" />
          </a>        
        </p>
        <section id="cards" className="info-cards">
          <Container>
            <Row>
              <Col md={4} className="mb-4">
                <Card>
                  <Card.Body className="d-flex flex-column">
                    <Card.Title>music lessons</Card.Title>
                    <Card.Text>lessons will instill in children a love of music!</Card.Text>
                    <Card.Img className="card-img-bottom mt-auto" src="image/music.png" alt="" />
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4} className="mb-4">
                <Card>
                  <Card.Body className="d-flex flex-column">
                    <Card.Title>sport lessons</Card.Title>
                    <Card.Text>lessons will instill in children a love of sport!</Card.Text>
                    <Card.Img className="card-img-bottom mt-auto" src="image/ball.png" alt="" />
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4} className="mb-4">
                <Card>
                  <Card.Body className="d-flex flex-column">
                    <Card.Title>culture lessons</Card.Title>
                    <Card.Text>lessons will instill in children a love of culture!</Card.Text>
                    <Card.Img className="card-img-bottom mt-auto" src="image/paint.png" alt="" />
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </section>
        <div className="info">
          <div className="info-box">
            <p className="info-text"> We are a trained group of teachers with a passion to educate</p>
            <p className="info-subtext">Our staff has over 10 years of experience working with children. These are qualified teachers and educators who are trained in all the subtleties of working with children from infancy to preschool.
            <br/> To learn more about our team, you can visit this section <br/> <a href="aboutus.html" className="btn btn-color-change mt-3">more about us</a>
          </p> 
          </div>
        </div>
        <p className="trust-text">You can trust us <br/> because our team works only on such principles</p>
        <div className="key_block">
          <div className="key_block_item">
            <img src="image/heart.png" alt="image" width="100"/>
            <p className="key-text">love and a special approach to each child</p>
          </div>
          <div className="key_block_item">
            <img src="image/book.png" alt="image" width="100"/>
            <p className="key-text">a learning method with which your child will love to learn new things</p>
          </div>
          <div className="key_block_item">
            <img src="image/confetti.png" alt="image" width="100"/>
            <p className="key-text">time for a break and fun</p>
          </div>
          <div className="key_block_item">
            <img src={secure} alt="image" width="100"/>
            <p className="key-text">constant safety of children in a controlled area</p>
          </div>
        </div>
        <div className="gallery-main">
          <img className="gallery-img" src="../../image/gallery-ground.png" alt="" width="100%"/>
          <p className="main-text-gallery"> There are photo of your children <br/> <a href="gallery.html" className="btn btn-gallery">see the gallery</a></p>
        </div>
      </div> 
      <footer> 
        <div className="footer-logo">
          <img src={logo} alt="Логотип" width="80"/> <br/>   
          <span className="footer-text">KDS TEAM </span>
          <div className="footer-info">
            <div className="footer_schedule">
              <div>
                <p>Monday - Friday</p>
                <hr/>
                <p>8<sup>00</sup> - 20<sup>00</sup></p>
              </div>
              <div>
                <p>Saturday</p>
                <hr/>
                <p>8<sup>00</sup> - 16<sup>00</sup></p>
              </div>
            </div>
            <div className="footer-contacts">
              <p>+380 987 6543 21</p>
              <p>mymail@gmail.com</p>
            </div>
            <div className="footer-author">
              <p>© 2023 Veronika Duma | All Rights Reserved </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
