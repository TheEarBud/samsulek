import { useState, useEffect } from 'react';
import { useNavigate, Routes, Route, Link, Navigate, BrowserRouter } from 'react-router-dom'; // <-- Added Navigate import
import './App.css';
import PayPal from './Components/PayPal.jsx';
import OurStory from './OurStory.jsx';
import ContactForm from './Components/LoginSignUp/ContactForm.jsx';
import './ProductPage.css';
import ProductPage from './ikko-active-buds.jsx';
import Login from './Components/LoginSignUp/Login.jsx';
import SignUpForm from './Components/LoginSignUp/SignUpForm.jsx';
import Account from './Account.jsx';
import Cart from './Cart.jsx';
import RefundPolicy from './RefundPolicy.jsx';
import PrivacyPolicy from './PrivacyPolicy.jsx';
import ShippingPolicy from './ShippingPolicy.jsx';
import TermsOfService from './TermsOfService.jsx';
import 'bootstrap/dist/css/bootstrap.css';
import { TypeOutline } from 'lucide-react';
import AccountImg from '/account-removebg-preview.png';

function App() {
  const [isNavbarVisible, setIsNavbarVisible] = useState(false);
  const [showContent, setShowContent] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();
  const location = window.location.pathname;  // Track current path for refresh logic

  useEffect(() => {
    const loggedInStatus = localStorage.getItem('isLoggedIn') === 'true';
    setIsLoggedIn(loggedInStatus);

    const storedCart = JSON.parse(localStorage.getItem('cartItems')) || [];
    setCartItems(storedCart);
  }, []);

  useEffect(() => {
    // Update content visibility based on the location.pathname when the path changes
    setShowContent(location === '/App');
  }, [location]);  // Run whenever the location changes

  const toggleNavbar = () => {
    setIsNavbarVisible(!isNavbarVisible);
  };

  const handleNavigation = (path) => {
    setShowContent(path === '/App');  // Control which content to show based on the path
    navigate(path);
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
    localStorage.setItem('isLoggedIn', 'true');
    navigate('/App');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.setItem('isLoggedIn', 'false');
    localStorage.setItem('cartItems', JSON.stringify([]));
    navigate('/App');
  };

  const addToCart = (product) => {
    if (isLoggedIn) {
      const updatedCart = [...cartItems, product];
      setCartItems(updatedCart);
      localStorage.setItem('cartItems', JSON.stringify(updatedCart));
      alert('Item successfully added to cart!');
    } else {
      alert('Please log in to add items to the cart!');
    }
  };

  return (
    <div>
      <div className="promobar">
        <p>$200.00 OFF ON EARBUDS, 10 DAYS LEFT!</p>
      </div>

      <div className="navbar">
        <img src="../Untitled_design-removebg-preview-removebg-preview 1.png" alt="Logo" />
        <button onClick={toggleNavbar}>☰</button>
        <ul id="navbar" style={{ display: isNavbarVisible ? 'block' : 'none' }}>
          <li style={{display: "block"}}>
            <Link onClick={() => handleNavigation('/App')} to="/App" className="link link1">Home</Link>
          </li>
          <li>
            <Link onClick={() => handleNavigation('/OurStory')} to="/OurStory" className="link link2">About</Link>
          </li>
          <li>
            <Link onClick={() => handleNavigation('/ContactForm')} to="/ContactForm" className="link link3">Contact</Link>
          </li>
          <li className="extra">
            {isLoggedIn ? (
              <Link onClick={() => handleNavigation('/Account')} to="/Account">Account</Link>
            ) : (
              <Link onClick={() => handleNavigation('/signup')} to="/signup">Sign Up</Link>
            )}
          </li>
          <li className="extra">
            {isLoggedIn ? (
              <Link onClick={() => handleNavigation('/Cart')} to="/Cart">Cart</Link>
            ) : (
              <></>
            )}
          </li>
          {isLoggedIn && (
            <li className="extra">
              <Link onClick={handleLogout}>Logout</Link>
            </li>
          )}
        </ul>
        <div className="icons">
    <img
      className="icon1"
      src="../account-removebg-preview.png"
      alt="Account"
      onClick={() => handleNavigation(isLoggedIn ? '/Account' : '/signup')}
      style={{ cursor: 'pointer' }}
    />
    <img
      className="icon2"
      src="../shopping-removebg-preview.png"
      alt="Shopping"
      onClick={() => handleNavigation('/Cart')}
      style={{ cursor: 'pointer' }}
    />
  </div>

      </div>

      {showContent && (
        <div>
          <div className="hero-section">
    <h1 className='single-line'>Transform Audio into Smart, Actionable Notes with AI</h1>
    <p>[Powered by ChatGPT]</p>
    <div className="video-container videoo">
        <video 
            src="./7141fc63702f4acc92d5bddb93c2ac40.mp4" 
            autoPlay 
            muted 
            loop 
            playsInline 
            preload="auto"
            className="videoo"
        />
    </div>

            
          </div>
          <div class="product-section">
    <h1>Welcome to The Ear Bud™</h1>
    <p>Here we sell all jellyfish products at highest quality, on 60% OFF BUY NOW!</p>
    <h2>The Ear Bud™ Products</h2>
</div>

          <div className="container">
            <Product
              image="ikko-black.jpg"
              h1="The Ear Bud™ ikko active buds"
              p="World's First AI-Smart TWS Earbuds!"
              price="199.99"
              originalPrice="399.99"
              classnamee="product-card three"
              navigationlink="/ikko-active-buds"
              handleNavigation={handleNavigation}
              addToCart={addToCart}
              colorOptions={['#000', '#ffc0cb', '#FF1787']}
            />
          </div>

          <FeaturesSection />

          <div className="video-container">
  <video 
    src="./ikko_video.mp4" 
    autoPlay 
    muted 
    loop 
    playsInline 
    preload="auto"
    className="video"
  />
</div>


<div className="container py-5 containeroo">
  <div className="row align-items-center">
    {/* Text Section */}
    <div className="col-lg-6 mb-4 mb-lg-0">
      <h2 style={{color: "black"}} className="display-4 font-weight-bold text-center text-lg-left">
        62+ Languages Simultaneous Interpretation
      </h2>
      <h5 className="lead text-center text-lg-left">
        62+ languages, coverage across 200+ countries. Beyond commonly spoken languages, we also support less common ones, ensuring you can communicate effortlessly anywhere in the world.
      </h5>
    </div>

    {/* Image Section */}
    <div className="col-lg-6 language">
      <img src="./language.webp" alt="Language Support" className="img-fluid rounded shadow-lg"/>
    </div>
  </div>
</div>


<SmartNotesSection />






<Reviews name="John D" description="Amazing sound quality and great fit, though it took a bit to get used to." image="4stars.png" />
<Reviews name="Sophia M" description="Best earbuds I’ve ever owned! The sound is crystal clear, and they’re super comfy." image="5stars.png" />
<Reviews name="Liam H" description="Solid audio, just wish the battery life was a little longer. Still love them!" image="4stars.png" />
<Reviews name="Ethan K" description="Good sound, though I was expecting a bit more for the price. Overall, happy with them." image="4stars.png" />
<Reviews name="Olivia P" description="Incredible noise cancellation and sound quality. Definitely worth it!" image="5stars.png" />
<Reviews name="Ava L" description="A bit of connection hiccups at first, but once set up, they’re amazing. Great buy!" image="4stars.png" />


          <h3 className="FAQH3">Frequently Asked Questions</h3>
          <FAQ question="What payment methods do you accept?" answer="We accept major credit cards and PayPal." />
          <FAQ question="Warranty" answer="The Ear Bud™ products are backed with a 1 year warranty." />
          <FAQ question="Can I return or exchange an item?" answer="We offer a 30-day return policy for eligible items." />
          <FAQ question="Shipping" answer="The Ear Bud™ orders are shipped in 5-10 days." />
          <FAQ question="What product does The Ear Bud™ sell?" answer="We sell the IKKO Active Buds, offering exceptional sound quality and performance." />

        </div>
      )}

      <Routes>
      <Route path="/App" element={<Home />} />
        <Route path="/login" element={<Login handleLogin={handleLogin} />} />
        <Route path="/signup" element={<SignUpForm handleLogin={handleLogin} />} />
        <Route path="/ikko-active-buds" element={<ProductPage />} />
        <Route path="/ContactForm" element={<ContactForm />} />
        <Route path="/OurStory" element={<OurStory />} />
        <Route path="/RefundPolicy" element={<RefundPolicy />} />
        <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
        <Route path="/ShippingPolicy" element={<ShippingPolicy />} />
        <Route path="/TermsOfService" element={<TermsOfService />} />

        {/* Protected routes */}
        <Route path="/Account" 
               element={isLoggedIn ? <Account /> : <Navigate to="/login" />} />
        <Route path="/Cart" 
               element={isLoggedIn ? <Cart /> : <Navigate to="/login" />} />
      </Routes>
      <Footer handleNavigation={handleNavigation}/>
    </div>
  );
};

function Product({ image, h1, p, price, discount, originalPrice, classnamee, navigationlink, colorOptions, handleNavigation, addToCart }) {
  const [selectedColor, setSelectedColor] = useState(colorOptions[0] || '');
  const [currentImage, setCurrentImage] = useState(image);

  const product = {
    name: h1,
    image: currentImage,
    price,
    originalPrice,
    discount,
    description: p,
    id: `${h1}-${Date.now()}`,
    selectedColor,
  };

  const handleColorChange = (color) => {
    setSelectedColor(color);

    // Update the image based on the selected color
    if (color === "#000") {
      setCurrentImage("ikko-black.jpg");
    } else if (color === "#ffc0cb") {
      setCurrentImage("ikko-softpink.jpg");
    } else if (color === "#FF1787") {
      setCurrentImage("ikko-pinkparade.jpg");
    } else {
      setCurrentImage(image); // Default to the original image
    }
  };

  const styles = {
    card: {
      width: '18rem',
    },
    discountBadge: {
      backgroundColor: '#ed070f',
    },
    price: {
      color: '#ed070f',
    },
    colorOptions: {
      display: 'flex',
      gap: '8px',
      marginTop: '1rem',
    },
    colorCircle: {
      width: '20px',
      height: '20px',
      borderRadius: '50%',
      border: '2px solid transparent',
      cursor: 'pointer',
      transition: 'border 0.3s ease',
    },
    selectedColorCircle: {
      border: '2px solid #fff',
      outline: '3px solid black', // Add outline on selection
    },
  };

  return (
    <div className={`card ${classnamee} shadow-sm mb-4`} style={styles.card}>
      <a href={navigationlink} className="position-relative">
      <Link to="/ikko-active-buds" onClick={() => handleNavigation('/ikko-active-buds')}>
      <img src={currentImage} alt={h1} className="card-img-top" />
</Link>

        {discount && (
          <span
            style={styles.discountBadge}
            className="position-absolute top-0 start-0 text-black p-2 rounded-end"
          >
            <strong>{discount}</strong>
          </span>
        )}
      </a>
      <div className="card-body">
        <h5 className="card-title">{h1}</h5>
        <p className="card-text">
          <Link style={{color: "#595C5F", textDecoration: "none"}} className="text-decoration-none text-muted" onClick={() => handleNavigation('/ikko-active-buds')} to={navigationlink} className="link">{p}</Link>
        </p>
        <div className="d-flex justify-content-between align-items-center">
          <div>
            {originalPrice && (
              <span className="text-muted text-decoration-line-through originalPrice">
                <strong>${originalPrice}</strong>
              </span>
            )}
            <span style={styles.price} className="fs-4 price">
              <strong>${price}</strong>
            </span>
          </div>
          <button
            onClick={() => addToCart(product)}
            className="btn btn-primary btn-sm"
            style={{display: "none"}}
          >
            Add to Cart
          </button>
        </div>
        {colorOptions.length > 0 && (
          <div style={styles.colorOptions} id='color'>
            {colorOptions.map((color, index) => (
              <span
                key={index}
                style={{
                  ...styles.colorCircle,
                  backgroundColor: color,
                  ...(selectedColor === color ? styles.selectedColorCircle : {}),
                }}
                onClick={() => handleColorChange(color)}
              ></span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

const FeaturesSection = () => {
  const features = [
    {
      icon: "./Studying.png", // Path to your image for "For Studying"
      title: "For Studying",
      description:
        "Let ActiveBuds help you with your academic questions! Solve academic problems professionally.",
    },
    {
      icon: "./Working.png", // Path to your image for "For Working"
      title: "For Working",
      description:
        "Let ActiveBuds be your business assistant! They boost inspiration and improve work & output efficiency.",
    },
    {
      icon: "../public/planning.png", // Path to your image for "For Planning"
      title: "For Planning",
      description:
        "Ask ActiveBuds to suggest a travel plan for you! Get advice on travel planning, easier travel, and itineraries.",
    },
    {
      icon: "../public/fun.png", // Path to your image for "For Fun..."
      title: "For Fun...",
      description:
        "Ask ActiveBuds anything that pops into your head! E.g., why does popcorn pop? Plan a party, or suggest a gift!",
    },
  ];

  return (
    <div className="container py-5 bigcontainer">
  <div className="text-center">
    <img src="./chatgpt.webp" alt="ChatGPT" className="img-fluid mb-4" />
    <h4 className="text-primary mb-3 text-black blockquote-footer">[Now Powered by ChatGPT-4]</h4>
    <h1 className="display-4 mb-4 text-white">AI is now in your earphones.</h1>
    <p className="lead mb-5 text-white">
      Have questions? AI voice advisors (by ChatGPT) are here to spark your inspiration and guide you to answers, making every day smoother. ActiveBuds are powered by OpenAI and the ZenoV Model, which set new standards, surpassing typical voice assistants by curating content specifically for you. They learn from each conversation, adapting to meet your needs more effectively over time. Our enhanced edge computing enables swift data processing, ensuring immediate access and interaction.
    </p>
  </div>
  <div className="row row-cols-1 row-cols-md-2 g-4">
    {features.map((feature, index) => (
      <div className="col d-flex align-items-start" key={index}>
        <div className="icon-container me-3">
          <div className="icon-circle">
            <img
              src={feature.icon}
              alt={feature.title}
              className="icon-image"
            />
          </div>
        </div>
        <div>
          <h5 className="feature-title mb-2">{feature.title}</h5>
          <p className="feature-description">{feature.description}</p>
        </div>
      </div>
    ))}
  </div>
</div>


  );
};
const Footer = ({handleNavigation}) => {
  return (
    <footer className="footer py-4 mt-5 bg-white text-dark">
      <div className="container footero">
        <div className="row">
          {/* About Section */}
          <div className="col-md-4 mb-3">
            <h5 className="fw-bold text-uppercase mb-4" style={{ color: '#FF69B4' }}>About Us</h5>
            <p style={{ fontSize: '0.95rem' }}>
  Welcome to The Ear Bud™, your one-stop shop for premium IKKO Active Buds and cutting-edge audio technology. Experience sound quality like never before!
</p>

          </div>

          {/* Quick Links */}
          <div className="col-md-4 mb-3">
            <h5 className="fw-bold text-uppercase mb-4" style={{ color: '#FF69B4' }}>Quick Links</h5>
            <ul className="list-unstyled">
            <li className="mb-2">
            <Link onClick={() => handleNavigation('/ContactForm')} to="/App" className="text-black text-decoration-none">Contact</Link>
          </li>
          <li className="mb-2">
          <Link onClick={() => handleNavigation('/RefundPolicy')} to="/RefundPolicy" className="text-black text-decoration-none">Refund Policy</Link>
          </li>
          <li className="mb-2">
          <Link onClick={() => handleNavigation('/PrivacyPolicy')} to="/PrivacyPolicy" className="text-black text-decoration-none">Privacy Policy</Link>
          </li>
          <li className="mb-2">
          <Link onClick={() => handleNavigation('/ShippingPolicy')} to="/ShippingPolicy" className="text-black text-decoration-none">Shipping Policy</Link>
          </li>
          <li>
          <Link onClick={() => handleNavigation('/TermsOfService')} to="/TermsOfService" className="text-black text-decoration-none">Terms of Service</Link>
          </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-md-4 mb-3">
            <h5 className="fw-bold text-uppercase mb-4" style={{ color: '#FF69B4' }}>Contact Us</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <i className="bi bi-envelope-fill me-2" style={{ color: '#FF69B4' }}></i>
                official.ear.bud@gmail.com
              </li>
              <ul>
    <li className="mb-2">
        <a href="https://www.tiktok.com/@official.the_ear_bud" className="text-black bi bi-telephone-fill me-2" style={{ color: '#FF69B4' }} target="_blank" rel="noopener noreferrer">
            TikTok
        </a>
    </li>
    <li>
        <a href="https://www.instagram.com/the_ear_bud/" className="text-black bi bi-geo-alt-fill me-2" style={{ color: '#FF69B4' }} target="_blank" rel="noopener noreferrer">
            Instagram
        </a>
    </li>
    <li>
        <a href="https://www.youtube.com/@official.the_ear_bud" className="text-black bi bi-geo-alt-fill me-2" style={{ color: '#FF69B4' }} target="_blank" rel="noopener noreferrer">
            YouTube
        </a>
    </li>
</ul>

            </ul>
          </div>
        </div>

        <div className="text-center pt-3">
          <p className="mb-0" style={{ fontSize: '0.85rem' }}>
            © {new Date().getFullYear()} The Ear Bud™. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

const SmartNotesSection = () => {
  return (
    <div className="container py-5 smart-section">
      <div className="row align-items-center">
        {/* Text Section */}
        <div className="col-lg-6 mb-4">
          <h4 className="text-muted mb-2">AI Smart Notes</h4>
          <h1 className="display-5 fw-bold">
            Voice <span className="text-primary">→</span> Text{" "}
            <span className="text-primary">→</span> AI Notes
          </h1>
          <h3 className="text-secondary">Supports 57+ Languages</h3>
          <p className="lead mt-3">
            Too many <strong>meeting notes</strong> or class lectures to keep up
            with? Struggling to understand <strong>foreign language</strong>{" "}
            lessons? Need translation for <strong>international meetings</strong>?
          </p>
          <ol className="list-group list-group-numbered">
            <li className="list-group-item border-0">
              <strong>AI-Powered Key Point Extraction:</strong> Capture core
              information with precision to help you grasp the most important
              details quickly.
            </li>
            <li className="list-group-item border-0">
              <strong>AI-Enhanced Grammar Optimization:</strong> Automatically
              correct grammatical errors for accurate, professional document
              delivery.
            </li>
            <li className="list-group-item border-0">
              <strong>AI-Driven Document Generation:</strong> Produce clear,
              concise, high-quality reports without manual editing, simplifying
              complex content with ease.
            </li>
          </ol>
        </div>

        {/* Single Image Section */}
        <div className="col-lg-6 text-center">
          <div className="image-container">
            <img
              src="./Voicetextai.webp"
              alt="Smart Notes Feature"
              className="img-fluid shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

function Reviews(props) {
  return (
    <div className="reviews">
      <h3>{props.name}</h3>
      <p>{props.description}</p>
      <img src={props.image} alt="Review Rating" />
   

    </div>
  );
}

function FAQ(props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAnswer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="FAQ" onClick={toggleAnswer}>
      <h2>
        <img src="./arrow.png" alt="Toggle arrow" className={isOpen ? "open" : ""} />
        {props.question}
      </h2>
      <p className={isOpen ? "open" : ""}>{props.answer}</p>
    </div>
  );
}

function Home() {
  return (
    <div>
      
    </div>
  );
}


export default App;
