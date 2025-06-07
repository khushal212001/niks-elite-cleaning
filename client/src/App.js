import logo from './logo.svg';
// import './App.css';
import './css/aos.css';
import './css/fontawesome.min.css';
import './css/style.css';


function App() {
  return (
    <div className="App">

{/* <!-- preloader starts --> */}
 <div class="preloader js-preloader">
    <div>
      
    </div>
 </div>
 {/* <!-- preloader ends --> */}

  <div class="page-wrapper">
    {/* <!-- header start --> */}
     <header class="header js-header">
      <div class="container">
        <div class="logo" data-aos="fade-down" data-aos-duration="1000">
          <a href="#"> <img src="/img/logo.png" max-width="40px" height="50px" alt="logo"/> </a>
        </div>
        <button class="nav-toggler js-nav-toggler" data-aos="fade-down" data-aos-duration="1000">
          <span></span>
        </button>
        <nav class="nav js-nav">
          <ul  data-aos="fade-down" data-aos-duration="1000">
            <li><a href="#home">home</a></li>
            <li><a href="#about">about</a></li>
            <li><a href="#services">services</a></li>
            <li><a href="#contact">contact</a></li>
          </ul>
        </nav>
      </div>
     </header>
     {/* <!-- header ends --> */}

{/* <!-- home section start --> */}
 <section class="home" id="home">
  <div class="container">
    <div class="grid">
      <div class="home-text">
        <h1 data-aos="fade-up" data-aos-duration="1000">Need cleaning services ?</h1>
        <p data-aos="fade-up" data-aos-duration="1000" data-aos-delay="150">"We don’t just clean — we care.Let your space sparkle like never before!"</p>
        <div class="btn-wrap" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
          <a href="#about" class="btn">know more</a>
        </div>
      </div>
      <div class="home-img">
        <div class="circle-wrap" data-aos="fade-right" data-aos-duration="1000">
          <div class="circle"></div>
        </div>
          <img src="img/home-img.png" alt="img" data-aos="fade-left" data-aos-duration="1000" />
      </div>
      
    </div>
  </div>
 </section>
{/* <!-- home section end --> */}

{/* <!-- about section strats --> */}
 <section class="about section-padding" id="about">
  <div class="container">
    <div class="grid">
      <div class="about-img">
        <div class="img-box"data-aos="zoom-in" data-aos-duration="1000" >
          <img src="img/about-img.png" alt="img" />
          <div class="box box-1" style="color:black">
            <span>1.5k</span>
            <p>satisfied clients</p>
          </div>
        </div>
      </div>
      <div class="about-text">
        <div class="section-title">
          <span class="title" data-aos="fade-up" data-aos-duration="600">about us</span>
          <h2 class="sub-title" data-aos="fade-up" data-aos-duration="600">Trusted Cleaning Experts Since 2021</h2>
        </div>
        <p data-aos="fade-up" data-aos-duration="600">At Niks Elite Cleaning, we don’t just clean—we care. Since 2021, we’ve been transforming homes and workspaces with spotless precision and a personal touch. With over 1,500+ happy clients, our reputation is built on reliability, attention to detail, and a passion for excellence.</p>
        <p data-aos="fade-up" data-aos-duration="600">
          From sparkling kitchens to sanitized offices, our trained professionals ensure your space isn't just clean—it’s elite clean.
Because when it comes to cleanliness, good enough isn't enough—you deserve extraordinary.
        </p>
      </div>
    </div>
  </div>
 </section>
{/* <!-- about section ends --> */}

{/* <!-- services section starts --> */}
<section class="services section-padding" id="services">
  <div class="container">
    <div class="section-title">
      <span class="title" data-aos="fade-up" data-aos-duration="600">services</span>
      <h2 class="sub-title" data-aos="fade-up" data-aos-duration="600">what we do</h2>
    </div>
    <div class="grid">
      {/* <!-- services item start  --> */}
       <div class="services-item" data-aos="fade-up" data-aos-duration="600">
        <div class="img-box">
          <img src="img/service/carpet.jpeg" alt="" />
        </div>
        <h3>carpet cleaning</h3>
       </div>
       {/* <!-- services item ends -->
      <!-- services item start  --> */}
       <div class="services-item" data-aos="fade-up" data-aos-duration="600" data-aos-delay="100">
        <div class="img-box">
          <img src="img/service/window.jpeg" alt="" />
        </div>
        <h3>Window cleaning</h3>
       </div>
       {/* <!-- services item ends -->
      <!-- services item start  --> */}
       <div class="services-item" data-aos="fade-up" data-aos-duration="600" data-aos-delay="200">
        <div class="img-box">
          <img src="img/service/domestic.jpeg" alt="" />

        </div>
        <h3>Domestic cleaning</h3>
       </div>
       {/* <!-- services item ends -->
      <!-- services item start  --> */}
       <div class="services-item" data-aos="fade-up" data-aos-duration="600" data-aos-delay="300">
        <div class="img-box">
          <img src="img/service/commercial.jpeg" alt="" />
        </div>
        <h3>Commercial cleaning</h3>
       </div>
       {/* <!-- services item ends -->
              <!-- services item start  --> */}
       <div class="services-item" data-aos="fade-up" data-aos-duration="600" data-aos-delay="400">
        <div class="img-box">
          <img src="img/service/lease.jpeg" alt="" />
        </div>
        <h3>End Of Lease cleaning</h3>
       </div>
       {/* <!-- services item ends -->
    
      <!-- services item start  --> */}
       <div class="services-item" data-aos="fade-up" data-aos-duration="600" data-aos-delay="500">
        <div class="img-box">
          <img src="img/service/concrete.jpeg" alt="" />
        </div>
        <h3>Concrete cleaning</h3>
       </div>
       {/* <!-- services item ends -->
              <!-- services item start  --> */}
       <div class="services-item" data-aos="fade-up" data-aos-duration="600" data-aos-delay="600">
        <div class="img-box">
          <img src="img/service/builder.jpeg" alt="" />
        </div>
        <h3>Builder House Cleaning</h3>
       </div>
       {/* <!-- services item ends -->
      <!-- services item start  --> */}
       <div class="services-item" data-aos="fade-up" data-aos-duration="600" data-aos-delay="700">
        <div class="img-box">
          <img src="img/service/office.jpeg" alt="" />
        </div>
        <h3>Office Cleaning</h3>
       </div>
       {/* <!-- services item ends --> */}

    </div>

    </div>
</section>
{/* // <!-- services section ends -->


// <!-- contact section start --> */}
  <section class="contact section-padding" id="contact">
    <div class="container">
      <div class="section-title">
        <span class="title" data-aos="fade-up" data-aos-duration="600">contact us</span>
        <h2 class="sub-title" data-aos="fade-up" data-aos-duration="600">have any question ?</h2>
      </div>
      <div class="grid contact-grid">
        <div class="contact-info">
          <div class="contact-info-item" data-aos="fade-up" data-aos-duration="600">
            <i class="fas fa-map-marker-alt"></i>
            <h3>Address</h3>
            <p>47 tribeca drive , Point cook , Victoria Postcode 3030</p>
          </div>
          <div class="contact-info-item" data-aos="fade-up" data-aos-duration="600">
            <i class="fas fa-phone"></i>
            <h3>Call us</h3>
            <p>+61 493 519 401</p>
          </div>
          <div class="contact-info-item" data-aos="fade-up" data-aos-duration="600">
            <i class="fas fa-envelope"></i>
            <h3>Email us</h3>
            <p>nikselitecleaning@gmail.com</p>
          </div>
        </div>
        <div class="contact-form" data-aos="fade-up" data-aos-duration="600">
          <form action="https://api.web3forms.com/submit" method="POST">
            <input type="hidden" name="redirect" value="https://niks-cleaning.onrender.com/#contact" />
            <input type="hidden" name="access_key" value="29d7d007-9e3d-473e-b3be-8c06e7a7c92a" />
             <div class="input-box">
              <input type="text" name="name" id="name" placeholder="Name" class="input-control" required />
            </div>
            <div class="input-box">
              <input type="email" name="email" id="email" placeholder="Email" class="input-control" required />
            </div>
            <div class="input-box">
              <input type="phone" name="phone" id="phone" placeholder="Phone" class="input-control" required />
            </div>
            <div class="input-box">
              <textarea placeholder="Message" name="message" id="message" class="input-control" required></textarea>
            </div>
            <div class="btn-wrap" >
              <button type="submit" class="btn">Send Message</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
{/* <!-- contact section ends --> */}

<footer class="footer" style="height: 155px;">
  <div class="container">

    <h3 style="color: black;">follow us </h3>
    <div class="social-links">
      <a href="https://www.facebook.com/profile.php?id=61564371279887" title="facebook" ><i class="fab fa-facebook"></i></a>
      <a href="https://www.instagram.com/nikselitecleaning_au?igsh=MXVjMWdocHMyeDJsZQ%3D%3D&utm_source=qr" title="instagram"><i class="fab fa-instagram"></i></a>
    </div>
  </div>
  <div class="review-container" style="margin-top: 15px;">
    <div class="review">
      <a href="https://g.co/kgs/EXHKKS8" class="btn-wrap">write a review</a>
    </div>
  </div>
</footer>

</div>
    </div>
  );
}

export default App;
