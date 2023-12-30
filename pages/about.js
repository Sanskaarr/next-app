import React from 'react'
import Head from 'next/head'
import Script from 'next/script'


const About = () => {
    return (
        <div>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title> KARWAAN - About Us</title>
                <link
                    href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
                    rel="stylesheet"
                    integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
                    crossOrigin="anonymous"/>
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
                />
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
                />
                <link href="https://karwaan.b-cdn.net/about/min4.css" rel="stylesheet" />
                <link href="about.css" rel="stylesheet" />
                <link href="navbar.css" rel="stylesheet" />
                <link href="responsive.css" rel="stylesheet" />
                <link href="https://karwaan.b-cdn.net/about/slick.css" rel="stylesheet" />
                <link
                    href="https://karwaan.b-cdn.net/about/slick-theme.css"
                    rel="stylesheet"
                />
                <link rel="stylesheet" href="footer.css" />
            </Head>
            <div>
    <div id="mySidenav" className="sidenav animate__animated">
      <nav
        className="navbar navbar-expand-lg navbar-custom navbar-dark"
        style={{ transition: "all 0.3s ease-in-out" }}
      >
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ms-auto mt-2 mt-lg-0 animate__animated animate__delay-1s">
            <li className="nav-item">
              <a className="nav-link" href="index.html">
                Home
              </a>
            </li>
            <li className="nav-item nav-item-seprator">/</li>
            <li className="nav-item">
              <a href="gallery.html" className="nav-link">
                Picture
              </a>
            </li>
            <li className="nav-item nav-item-seprator">/</li>
            <li className="nav-item">
              <a href="video.html" className="nav-link" id="navbar-video">
                Videos
              </a>
            </li>
            <li className="nav-item nav-item-seprator">/</li>
            <li className="nav-item">
              <a href="client.html" className="nav-link">
                Clients
              </a>
            </li>
            <li className="nav-item nav-item-seprator">/</li>
            <li className="nav-item">
              <a href="about.html" className="nav-link active">
                About
              </a>
            </li>
            <li className="nav-item nav-item-seprator">/</li>
            <li className="nav-item">
              <a href="shop.html" className="nav-link">
                Shop
              </a>
            </li>
            <li className="nav-item nav-item-seprator">/</li>
            <li className="nav-item">
              <a href="contact.html" className="nav-link">
                Contact
              </a>
            </li>
            <li>
              <a href="" id="right-menu-overlay-close-btn" className="closebtn">
                ×
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
    <div id="layer2-menu" className="content">
      <nav
        className="navbar navbar-expand-lg navbar-custom navbar-dark"
        id="mainheaderid"
      >
        <a
          className="navbar-brand uppercase mobilecontact"
          href="contact.html"
          style={{
            fontSize: 20,
            paddingBottom: "1.2rem",
            marginLeft: "1rem",
            color: "#000"
          }}
        >
          Contact Us
        </a>
        <div
          className="collapse navbar-collapse"
          id="navbarToggler-right-home-menu"
          style={{ display: "block" }}
        >
          <ul className="navbar-nav ms-auto mt-2 mt-lg-0 mobile-hidden">
            {/* <li class="nav-item logodiv">
              <a id="logo-btn"  class="uppercase" href="index.html">
                  <img src="https://karwaan.b-cdn.net/Front/KARWAANLOGOWHITE%20(Custom).png" class="logoimage navbar-brand" style="height: 80px; margin-top: -13px;">
              </a>
          </li> */}
            <li className="nav-item active mt-15px">
              <a
                id="right-home-btn"
                className="navbar-brand uppercase"
                style={{
                  fontSize: 20,
                  paddingBottom: "1.2rem !important",
                  marginRight: "1rem",
                  color: "#000"
                }}
                href="#"
              >
                Menu{" "}
                <span>
                  <i
                    className="fa-solid fa-bars"
                    style={{ marginRight: "1rem" }}
                  />
                </span>
              </a>
            </li>
          </ul>
          <ul className="navbar-nav ms-auto mt-2 mt-lg-0 mobile-show">
            <li className="nav-item active">
              {/* 
              <a id="logo-btn" class="uppercase" href="index.html"> 
              <img class="logoimage navbar-brand" src="https://karwaan.b-cdn.net/Front/KARWAANLOGOWHITE%20(Custom).png" style="height: 70px; margin-top: -7px; margin-right: 0rem;">
          </a> */}
              <a
                id="right-home-btn"
                className="navbar-brand uppercase"
                style={{
                  marginRight: "2rem",
                  paddingBottom: "0.9rem !important",
                  marginTop: 0,
                  color: "#000"
                }}
                href="#"
              >
                <span>
                  <i className="fa-solid fa-bars" />
                </span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </div>
  <div className="container-fluid pl-pr-200px mt-75px">
    <div className="row text-right">
      <h1 style={{ textAlign: "center" }}>
        <b>About Karwaan</b>
      </h1>
    </div>
    <div className="row text-center mobile-hidden">
      <div className="col-md-1"></div>
      <div className="col-md-5">
        <img
          src="https://karwaan.b-cdn.net/about/Harshit.png"
          style={{ height: "75%" }}
          alt=""
        />
      </div>
      <div className="col-md-5">
        <img
          src="https://karwaan.b-cdn.net/about/Oshaank.png"
          style={{ height: "75%" }}
          alt=""
        />
      </div>
      <div
        className="col-md-1"
        style={{
          writingMode: "vertical-rl",
          textOrientation: "mixed",
          transform: "rotate(180deg)",
          top: "-147px"
        }}
      >
        even when the world sleeps, we travel
      </div>
    </div>
    <div className="row mobile-show">
      <img src="https://karwaan.b-cdn.net/about/aboutusharshit.png" alt="" />
    </div>
    <div className="row mt-120px" style={{ textAlign: "justify" }}>
      Our story traces back to our childhood when happiness meant quests to find
      hidden treasures in our vicinity. Growing up, we experienced the same joy
      in exploring our country’s exquisite landscapes and diverse cultures
      superseded the neighbourhood adventures.Our name - Karwaan - is inspired
      by these travels that build our aspirations to make a difference in the
      lives of people we meet.
    </div>
    <div className="row mt-30" style={{ textAlign: "justify" }}>
      With every passing day, our excitement and passion to capture and
      represent nature, people, and culture - at their rawest - has only grown.
      Our stories not only exhibit our knack for presenting unexplored and
      unsaid tales but also tap on some of the pressing social issues.
    </div>
    <div className="row mt-30" style={{ textAlign: "justify" }}>
      Our team comes with expertise in human-centric documentaries
      scripts,cinematography and photography. Supported by social development
      professionals,authenticity is the cornerstone of all our content.
    </div>
  </div>
  <div className="mt-50">
    <div className="col-lg-12 text-center pb-20">
      <h2>IN MEDIA</h2>
    </div>
    <section className="slider testimonials-section mt-50 h-50">
      <div className="text-center">
        <img
          src="https://karwaan.b-cdn.net/about/Better_India.png"
          alt=""
          className=" ng-img"
        />
        <h6 className="review">
          "aside from doing work that they enjoyed, also wanted to promote
          tourism in new areas, generate income for the locals, promote
          sustainability, and reduce pressure on the mountain environment."
        </h6>
      </div>
      <div className="text-center">
        <img
          src="https://karwaan.b-cdn.net/about/download_white.png"
          alt=""
          className=" ng-img"
        />
        <h6 className="review">
          "The team also escorts doctors to high-altitude regions to treat the
          less fortunate residents"
        </h6>
      </div>
    </section>
    <div className="container-fluid mt-50px">
      <div className="row text-center mt-50px">
        <h1>Our Work</h1>
      </div>
      <div className="row text-center mt-50">
        <div className="col-lg-6 col-xs-6 p-0 img-container">
          <a href="video.html" className="color-white imagehover">
            <div className="mh-100 b-1px img-container">
              <img
                src="https://karwaan.b-cdn.net/about/RightVideosHarshit.jpg"
                alt=""
                className="w-100-p image"
                width={150}
              />
              <div className="img-info">Videos</div>
            </div>
          </a>
        </div>
        <div className="col-lg-6 col-xs-6 p-0 img-container">
          <a href="gallery.html" className="color-white imagehover">
            <div className="mh-100 b-1px ">
              <img
                src="https://karwaan.b-cdn.net/about/LeftPhotosOshank.jpg"
                alt=""
                className="w-100-p image"
                width={150}
              />
              <div className="img-info">Photographs</div>
            </div>
          </a>
        </div>
      </div>
    </div>
    <footer>
      <section
        className="d-flex align-items-center"
        style={{ height: 70, flexWrap: "wrap" }}
      >
        <a
          href="#"
          className="text-black text-decoration-none karwaan"
          style={{ marginLeft: 12 }}
        >
          Karwaan Films Private Limited
        </a>
        <div className="ms-auto social-icons">
          <a href="#" className="a me-3">
            <i className="fa-brands fa-x-twitter fa-lg" />
          </a>
          <a href="#" className="b me-3">
            <i className="fa-brands fa-facebook-f fa-lg" />
          </a>
          <a href="#" className="c me-3">
            <i className="fa-brands fa-instagram fa-xl" />
          </a>
          <a href="#" className="d me-3">
            <i className="fa-brands fa-whatsapp fa-xl" />
          </a>
        </div>
      </section>
    </footer>
  </div>
        <Script src="https://code.jquery.com/jquery-3.6.0.min.js"></Script>
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></Script>     
        <Script src="https://karwaan.b-cdn.net/about/jquerymin.js"></Script>
        <Script src="navbar.js"></Script>
        <Script src="https://karwaan.b-cdn.net/about/slick.js"></Script>
        </div>
    )
}

export default About