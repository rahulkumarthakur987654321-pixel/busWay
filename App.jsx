import { useState } from "react";
import "./index.css";
import paytmQR from "./assets/busway-paytm-upi-qr.jpeg";

const cities = [
  "Delhi",
  "Mumbai",
  "Bangalore",
  "Chennai",
  "Hyderabad",
  "Kolkata",
  "Jaipur",
  "Lucknow",
  "Ahmedabad",
  "Pune",
  "Agra",
  "Varanasi",
  "Amritsar",
  "Chandigarh",
  "Dehradun",
  "Bhopal",
  "Indore",
  "Patna",
  "Ranchi",
  "Surat",
];

const buses = [
  {
    id: 1,
    name: "BUSWAY Express",
    from: "Delhi",
    to: "Jaipur",
    type: "Volvo AC Sleeper",
    departure: "06:30 AM",
    arrival: "11:30 AM",
    duration: "5h",
    price: 599,
    seats: 18,
    rating: 4.8,
  },
  {
    id: 2,
    name: "Royal Travels",
    from: "Delhi",
    to: "Jaipur",
    type: "AC Seater",
    departure: "08:00 AM",
    arrival: "01:30 PM",
    duration: "5h 30m",
    price: 499,
    seats: 24,
    rating: 4.5,
  },
  {
    id: 3,
    name: "City Connect",
    from: "Delhi",
    to: "Jaipur",
    type: "Volvo AC",
    departure: "10:30 AM",
    arrival: "03:30 PM",
    duration: "5h",
    price: 799,
    seats: 12,
    rating: 4.9,
  },
  {
    id: 4,
    name: "Highway Travels",
    from: "Delhi",
    to: "Jaipur",
    type: "Non-AC Seater",
    departure: "02:00 PM",
    arrival: "08:00 PM",
    duration: "6h",
    price: 399,
    seats: 31,
    rating: 4.2,
  },
  {
    id: 5,
    name: "BUSWAY Premium",
    from: "Delhi",
    to: "Lucknow",
    type: "AC Sleeper",
    departure: "07:00 AM",
    arrival: "02:30 PM",
    duration: "7h 30m",
    price: 899,
    seats: 16,
    rating: 4.7,
  },
  {
    id: 6,
    name: "North Star Travels",
    from: "Delhi",
    to: "Lucknow",
    type: "AC Seater",
    departure: "09:30 AM",
    arrival: "05:30 PM",
    duration: "8h",
    price: 699,
    seats: 27,
    rating: 4.4,
  },
  {
    id: 7,
    name: "Ganga Roadways",
    from: "Delhi",
    to: "Lucknow",
    type: "AC Sleeper",
    departure: "09:00 PM",
    arrival: "06:00 AM",
    duration: "9h",
    price: 999,
    seats: 9,
    rating: 4.6,
  },
  {
    id: 8,
    name: "Mumbai Express",
    from: "Mumbai",
    to: "Pune",
    type: "Volvo AC Sleeper",
    departure: "06:00 AM",
    arrival: "09:30 AM",
    duration: "3h 30m",
    price: 499,
    seats: 21,
    rating: 4.7,
  },
  {
    id: 9,
    name: "Western Travels",
    from: "Mumbai",
    to: "Pune",
    type: "AC Seater",
    departure: "11:00 AM",
    arrival: "02:45 PM",
    duration: "3h 45m",
    price: 399,
    seats: 32,
    rating: 4.3,
  },
  {
    id: 10,
    name: "Deccan Express",
    from: "Mumbai",
    to: "Pune",
    type: "AC Sleeper",
    departure: "09:30 PM",
    arrival: "01:00 AM",
    duration: "3h 30m",
    price: 599,
    seats: 14,
    rating: 4.8,
  },
  {
    id: 11,
    name: "South India Travels",
    from: "Bangalore",
    to: "Chennai",
    type: "Volvo AC",
    departure: "07:30 AM",
    arrival: "02:00 PM",
    duration: "6h 30m",
    price: 699,
    seats: 19,
    rating: 4.6,
  },
  {
    id: 12,
    name: "Southern Express",
    from: "Bangalore",
    to: "Chennai",
    type: "AC Sleeper",
    departure: "10:00 PM",
    arrival: "06:00 AM",
    duration: "8h",
    price: 899,
    seats: 11,
    rating: 4.8,
  },
  {
    id: 13,
    name: "Pink City Travels",
    from: "Jaipur",
    to: "Agra",
    type: "AC Sleeper",
    departure: "07:00 AM",
    arrival: "11:00 AM",
    duration: "4h",
    price: 499,
    seats: 22,
    rating: 4.5,
  },
  {
    id: 14,
    name: "Heritage Travels",
    from: "Delhi",
    to: "Agra",
    type: "AC Seater",
    departure: "09:00 AM",
    arrival: "12:30 PM",
    duration: "3h 30m",
    price: 349,
    seats: 28,
    rating: 4.4,
  },
  {
    id: 15,
    name: "Varanasi Roadways",
    from: "Lucknow",
    to: "Varanasi",
    type: "AC Sleeper",
    departure: "08:30 PM",
    arrival: "03:30 AM",
    duration: "7h",
    price: 799,
    seats: 13,
    rating: 4.7,
  },
];

function generateCaptcha() {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let result = "";

  for (let i = 0; i < 6; i++) {
    result += chars[Math.floor(Math.random() * chars.length)];
  }

  return result;
}

function App() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [date, setDate] = useState("");
  const [searchPerformed, setSearchPerformed] = useState(false);

  const [loginOpen, setLoginOpen] = useState(false);
  const [loginValue, setLoginValue] = useState("");
  const [password, setPassword] = useState("");
  const [captcha, setCaptcha] = useState(generateCaptcha());
  const [captchaInput, setCaptchaInput] = useState("");
  const [loginMessage, setLoginMessage] = useState("");

  const [createAccountOpen, setCreateAccountOpen] = useState(false);

  const [accountData, setAccountData] = useState({
    name: "",
    gender: "",
    age: "",
    phone: "",
    email: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    emergencyName: "",
    emergencyPhone: "",
    idType: "",
    idNumber: "",
  });

  const [welcomeMessage, setWelcomeMessage] = useState("");

  const [selectedBus, setSelectedBus] = useState(null);
  const [bookingStep, setBookingStep] = useState(null);

  const [selectedSeats, setSelectedSeats] = useState([]);

  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const [bookingId, setBookingId] = useState("");

  const [menuOpen, setMenuOpen] = useState(false);

  const filteredBuses = buses.filter(
    (bus) => bus.from === from && bus.to === to
  );

  const totalAmount = selectedBus
    ? selectedBus.price * selectedSeats.length
    : 0;

  const searchBuses = () => {
    if (!from || !to || !date) {
      alert("Please select From, To and Journey Date.");
      return;
    }

    if (from === to) {
      alert("From and To cities cannot be the same.");
      return;
    }

    setSearchPerformed(true);

    setTimeout(() => {
      document
        .getElementById("results")
        ?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const swapCities = () => {
    const oldFrom = from;
    setFrom(to);
    setTo(oldFrom);
  };

  const openBusBooking = (bus) => {
    setSelectedBus(bus);
    setSelectedSeats([]);
    setBookingStep("seats");
  };

  const closeBooking = () => {
    setSelectedBus(null);
    setBookingStep(null);
    setSelectedSeats([]);
  };

  const toggleSeat = (seatNumber) => {
    if (selectedSeats.includes(seatNumber)) {
      setSelectedSeats(
        selectedSeats.filter((seat) => seat !== seatNumber)
      );
    } else {
      if (selectedSeats.length >= 6) {
        alert("You can select maximum 6 seats.");
        return;
      }

      setSelectedSeats([...selectedSeats, seatNumber]);
    }
  };

  const continueToPassengerDetails = () => {
    if (selectedSeats.length === 0) {
      alert("Please select at least one seat.");
      return;
    }

    setBookingStep("details");
  };

  const handleAccountChange = (e) => {
    const { name, value } = e.target;

    setAccountData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const validatePassengerDetails = () => {
    const requiredFields = [
      "name",
      "gender",
      "age",
      "phone",
      "email",
      "address",
      "city",
      "state",
      "pincode",
      "emergencyName",
      "emergencyPhone",
    ];

    for (const field of requiredFields) {
      if (!accountData[field].trim()) {
        alert("Please fill all required passenger details.");
        return false;
      }
    }

    if (!/^[0-9]{10}$/.test(accountData.phone)) {
      alert("Please enter a valid 10-digit phone number.");
      return false;
    }

    if (!/^[0-9]{10}$/.test(accountData.emergencyPhone)) {
      alert("Please enter a valid emergency contact number.");
      return false;
    }

    if (!/^[0-9]{6}$/.test(accountData.pincode)) {
      alert("Please enter a valid 6-digit PIN code.");
      return false;
    }

    return true;
  };

  const continueToPayment = () => {
    if (!validatePassengerDetails()) return;

    setWelcomeMessage(
      `Welcome to BUSWAY, ${accountData.name}! Your ${selectedBus.name} journey is ready.`
    );

    setBookingStep("payment");
  };

  const generateBookingId = () => {
    return "BW" + Math.floor(100000 + Math.random() * 900000);
  };

  const confirmPayment = () => {
    const id = generateBookingId();

    setBookingId(id);
    setBookingConfirmed(true);
    setBookingStep("success");
  };

  const handleLogin = (e) => {
    e.preventDefault();

    if (!loginValue || !password || !captchaInput) {
      setLoginMessage("Please fill all login fields.");
      return;
    }

    if (captchaInput.toUpperCase() !== captcha.toUpperCase()) {
      setLoginMessage("Incorrect CAPTCHA. Please try again.");
      setCaptcha(generateCaptcha());
      setCaptchaInput("");
      return;
    }

    setLoginMessage("Login successful! Welcome back to BUSWAY.");

    setTimeout(() => {
      setLoginOpen(false);
      setLoginMessage("");
    }, 1200);
  };

  const openCreateAccount = () => {
    setCreateAccountOpen(true);
    setMenuOpen(false);
  };

  const closeCreateAccount = () => {
    setCreateAccountOpen(false);
  };

  const saveAccount = (e) => {
    e.preventDefault();

    if (!accountData.name || !accountData.phone || !accountData.email) {
      alert("Please enter Name, Phone Number and Email Address.");
      return;
    }

    if (!/^[0-9]{10}$/.test(accountData.phone)) {
      alert("Please enter a valid 10-digit phone number.");
      return;
    }

    alert(
      `Account created successfully!\nWelcome ${accountData.name} to BUSWAY.`
    );

    setCreateAccountOpen(false);
    setWelcomeMessage(
      `Welcome to BUSWAY, ${accountData.name}! Your account is ready.`
    );
  };

  const resetBooking = () => {
    setSelectedBus(null);
    setBookingStep(null);
    setSelectedSeats([]);
    setBookingConfirmed(false);
    setBookingId("");
  };

  const renderSeat = (seatNumber, booked = false) => {
    const selected = selectedSeats.includes(seatNumber);

    return (
      <button
        key={seatNumber}
        type="button"
        disabled={booked}
        className={`seat ${
          booked ? "booked" : selected ? "selected" : ""
        }`}
        onClick={() => toggleSeat(seatNumber)}
      >
        {seatNumber}
      </button>
    );
  };

  return (
    <div className="app">
      {/* NAVBAR */}
      <header className="navbar">
        <div className="nav-container">
          <div
            className="logo"
            onClick={() =>
              window.scrollTo({ top: 0, behavior: "smooth" })
            }
          >
            <span className="logo-bus">BUS</span>
            <span className="logo-way">WAY</span>
          </div>

          <nav className={menuOpen ? "nav-links mobile-open" : "nav-links"}>
            <a href="#home" onClick={() => setMenuOpen(false)}>
              Home
            </a>

            <a href="#routes" onClick={() => setMenuOpen(false)}>
              Routes
            </a>

            <a href="#offers" onClick={() => setMenuOpen(false)}>
              Offers
            </a>

            <button
              className="nav-create"
              onClick={openCreateAccount}
            >
              Create Account
            </button>

            <button
              className="login-button"
              onClick={() => {
                setLoginOpen(true);
                setMenuOpen(false);
              }}
            >
              Login
            </button>
          </nav>

          <button
            className="menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
        </div>
      </header>

      {/* HERO */}
      <section className="hero" id="home">
        <div className="hero-content">
          <div className="hero-badge">🚌 India's Smart Bus Booking Platform</div>

          <h1>
            Travel Across India
            <br />
            <span>With BUSWAY</span>
          </h1>

          <p>
            Search buses, choose your favourite seat and book your journey
            quickly and easily.
          </p>

          <div className="search-card">
            <div className="search-grid">
              <div className="input-box">
                <label>FROM</label>
                <select
                  value={from}
                  onChange={(e) => setFrom(e.target.value)}
                >
                  <option value="">Select departure city</option>
                  {cities.map((city) => (
                    <option key={city}>{city}</option>
                  ))}
                </select>
              </div>

              <button
                className="swap-button"
                type="button"
                onClick={swapCities}
                title="Swap cities"
              >
                ⇄
              </button>

              <div className="input-box">
                <label>TO</label>
                <select
                  value={to}
                  onChange={(e) => setTo(e.target.value)}
                >
                  <option value="">Select destination city</option>
                  {cities.map((city) => (
                    <option key={city}>{city}</option>
                  ))}
                </select>
              </div>

              <div className="input-box">
                <label>JOURNEY DATE</label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
              </div>

              <button
                className="search-button"
                type="button"
                onClick={searchBuses}
              >
                🔍 Search Buses
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="stats-section">
        <div className="stats">
          <div>
            <strong>15+</strong>
            <span>Bus Services</span>
          </div>

          <div>
            <strong>20+</strong>
            <span>Indian Cities</span>
          </div>

          <div>
            <strong>24/7</strong>
            <span>Booking Support</span>
          </div>

          <div>
            <strong>100%</strong>
            <span>Easy Booking</span>
          </div>
        </div>
      </section>

      {/* RESULTS */}
      {searchPerformed && (
        <section className="results-section" id="results">
          <div className="section-heading">
            <div>
              <span className="section-label">AVAILABLE BUSES</span>
              <h2>
                {from} → {to}
              </h2>
              <p>
                {filteredBuses.length} bus
                {filteredBuses.length !== 1 ? "es" : ""} found for your
                journey
              </p>
            </div>
          </div>

          {filteredBuses.length > 0 ? (
            <div className="bus-list">
              {filteredBuses.map((bus) => (
                <div className="bus-card" key={bus.id}>
                  <div className="bus-main">
                    <div className="bus-icon">🚌</div>

                    <div className="bus-info">
                      <h3>{bus.name}</h3>

                      <p className="bus-type">{bus.type}</p>

                      <div className="journey-time">
                        <div>
                          <strong>{bus.departure}</strong>
                          <span>{bus.from}</span>
                        </div>

                        <div className="journey-line">
                          <span>{bus.duration}</span>
                          <div></div>
                        </div>

                        <div>
                          <strong>{bus.arrival}</strong>
                          <span>{bus.to}</span>
                        </div>
                      </div>
                    </div>

                    <div className="bus-price">
                      <span>Starting from</span>
                      <strong>₹{bus.price}</strong>
                      <small>per seat</small>
                    </div>

                    <div className="bus-action">
                      <div className="rating">★ {bus.rating}</div>

                      <div className="available-seats">
                        <strong>{bus.seats}</strong> seats available
                      </div>

                      <div className="seat-bar">
                        <div
                          style={{
                            width: `${Math.min(
                              (bus.seats / 40) * 100,
                              100
                            )}%`,
                          }}
                        ></div>
                      </div>

                      <button
                        className="select-button"
                        onClick={() => openBusBooking(bus)}
                      >
                        Select Bus
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="no-results">
              <div>🚌</div>
              <h3>No buses available</h3>
              <p>
                We currently do not have a bus for this route. Please try
                another route.
              </p>
            </div>
          )}
        </section>
      )}

      {/* FEATURES */}
      <section className="features-section">
        <div className="section-heading center">
          <span className="section-label">WHY BUSWAY?</span>
          <h2>Simple. Fast. Reliable.</h2>
        </div>

        <div className="feature-grid">
          <div className="feature-card">
            <div>🔎</div>
            <h3>Easy Search</h3>
            <p>
              Find buses between popular Indian cities in just a few
              clicks.
            </p>
          </div>

          <div className="feature-card">
            <div>💺</div>
            <h3>Choose Your Seat</h3>
            <p>
              Select your preferred available seat before completing your
              booking.
            </p>
          </div>

          <div className="feature-card">
            <div>🔐</div>
            <h3>Secure Booking</h3>
            <p>
              Passenger information and booking details are collected in a
              structured way.
            </p>
          </div>

          <div className="feature-card">
            <div>💳</div>
            <h3>UPI Payment</h3>
            <p>
              Pay using the displayed Paytm/UPI QR code at checkout.
            </p>
          </div>
        </div>
      </section>

      {/* ROUTES */}
      <section className="routes-section" id="routes">
        <div className="section-heading center">
          <span className="section-label">POPULAR ROUTES</span>
          <h2>Explore Popular Bus Routes</h2>
        </div>

        <div className="route-grid">
          <button onClick={() => {
            setFrom("Delhi");
            setTo("Jaipur");
            document.getElementById("home")?.scrollIntoView({
              behavior: "smooth",
            });
          }}>
            Delhi → Jaipur
          </button>

          <button onClick={() => {
            setFrom("Delhi");
            setTo("Lucknow");
            document.getElementById("home")?.scrollIntoView({
              behavior: "smooth",
            });
          }}>
            Delhi → Lucknow
          </button>

          <button onClick={() => {
            setFrom("Mumbai");
            setTo("Pune");
            document.getElementById("home")?.scrollIntoView({
              behavior: "smooth",
            });
          }}>
            Mumbai → Pune
          </button>

          <button onClick={() => {
            setFrom("Bangalore");
            setTo("Chennai");
            document.getElementById("home")?.scrollIntoView({
              behavior: "smooth",
            });
          }}>
            Bangalore → Chennai
          </button>

          <button onClick={() => {
            setFrom("Jaipur");
            setTo("Agra");
            document.getElementById("home")?.scrollIntoView({
              behavior: "smooth",
            });
          }}>
            Jaipur → Agra
          </button>

          <button onClick={() => {
            setFrom("Delhi");
            setTo("Agra");
            document.getElementById("home")?.scrollIntoView({
              behavior: "smooth",
            });
          }}>
            Delhi → Agra
          </button>
        </div>
      </section>

      {/* OFFER */}
      <section className="offer-section" id="offers">
        <div className="offer-content">
          <span>BUSWAY SPECIAL</span>
          <h2>Book Your First Journey</h2>
          <p>
            Create your BUSWAY account and enjoy a smooth online booking
            experience.
          </p>

          <button onClick={openCreateAccount}>
            Create Your Account →
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-content">
          <div>
            <div className="logo footer-logo">
              <span className="logo-bus">BUS</span>
              <span className="logo-way">WAY</span>
            </div>
            <p>
              Online bus ticket booking platform for convenient travel
              across India.
            </p>
          </div>

          <div>
            <h4>BUSWAY</h4>
            <p>Home</p>
            <p>Popular Routes</p>
            <p>Offers</p>
          </div>

          <div>
            <h4>SUPPORT</h4>
            <p>Help Centre</p>
            <p>Contact Us</p>
            <p>Booking Support</p>
          </div>
        </div>

        <div className="copyright">
          © 2026 BUSWAY Online Bus Ticket Booking Platform
        </div>
      </footer>

      {/* LOGIN MODAL */}
      {loginOpen && (
        <div
          className="modal-overlay"
          onClick={() => setLoginOpen(false)}
        >
          <div
            className="login-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="close-modal"
              onClick={() => setLoginOpen(false)}
            >
              ×
            </button>

            <div className="modal-icon">🔐</div>

            <h2>Welcome Back</h2>
            <p>Login to your BUSWAY account</p>

            <form onSubmit={handleLogin}>
              <label>Email or Mobile Number</label>
              <input
                type="text"
                placeholder="Enter email or 10-digit mobile"
                value={loginValue}
                onChange={(e) => setLoginValue(e.target.value)}
              />

              <label>Password</label>
              <input
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <label>CAPTCHA</label>

              <div className="captcha-row">
                <div className="captcha-box">{captcha}</div>

                <button
                  type="button"
                  className="captcha-refresh"
                  onClick={() => {
                    setCaptcha(generateCaptcha());
                    setCaptchaInput("");
                  }}
                >
                  ↻
                </button>
              </div>

              <input
                type="text"
                placeholder="Enter CAPTCHA"
                value={captchaInput}
                onChange={(e) =>
                  setCaptchaInput(e.target.value.toUpperCase())
                }
              />

              {loginMessage && (
                <div className="login-message">{loginMessage}</div>
              )}

              <button className="login-submit" type="submit">
                Login
              </button>
            </form>

            <div className="create-account-link">
              New to BUSWAY?
              <button onClick={openCreateAccount}>
                Create Account
              </button>
            </div>
          </div>
        </div>
      )}

      {/* CREATE ACCOUNT */}
      {createAccountOpen && (
        <div
          className="modal-overlay account-overlay"
          onClick={closeCreateAccount}
        >
          <div
            className="account-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="close-modal" onClick={closeCreateAccount}>
              ×
            </button>

            <div className="account-header">
              <div className="modal-icon">👤</div>
              <div>
                <span className="section-label">BUSWAY ACCOUNT</span>
                <h2>Create Your Account</h2>
                <p>
                  Enter your details to make your bus booking easier.
                </p>
              </div>
            </div>

            <form onSubmit={saveAccount}>
              <div className="form-section-title">
                Personal Information
              </div>

              <div className="form-grid">
                <div className="form-field full">
                  <label>Full Name *</label>
                  <input
                    name="name"
                    type="text"
                    placeholder="Enter your full name"
                    value={accountData.name}
                    onChange={handleAccountChange}
                  />
                </div>

                <div className="form-field">
                  <label>Gender *</label>
                  <select
                    name="gender"
                    value={accountData.gender}
                    onChange={handleAccountChange}
                  >
                    <option value="">Select gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                    <option value="Prefer not to say">
                      Prefer not to say
                    </option>
                  </select>
                </div>

                <div className="form-field">
                  <label>Age *</label>
                  <input
                    name="age"
                    type="number"
                    min="1"
                    max="120"
                    placeholder="Enter age"
                    value={accountData.age}
                    onChange={handleAccountChange}
                  />
                </div>

                <div className="form-field">
                  <label>Phone Number *</label>
                  <input
                    name="phone"
                    type="tel"
                    maxLength="10"
                    placeholder="10-digit mobile number"
                    value={accountData.phone}
                    onChange={handleAccountChange}
                  />
                </div>

                <div className="form-field">
                  <label>Email Address *</label>
                  <input
                    name="email"
                    type="email"
                    placeholder="example@email.com"
                    value={accountData.email}
                    onChange={handleAccountChange}
                  />
                </div>
              </div>

              <div className="form-section-title">
                Address Information
              </div>

              <div className="form-grid">
                <div className="form-field full">
                  <label>Address *</label>
                  <textarea
                    name="address"
                    placeholder="House/Flat No., Street, Area"
                    value={accountData.address}
                    onChange={handleAccountChange}
                    rows="3"
                  ></textarea>
                </div>

                <div className="form-field">
                  <label>City *</label>
                  <input
                    name="city"
                    type="text"
                    placeholder="Your city"
                    value={accountData.city}
                    onChange={handleAccountChange}
                  />
                </div>

                <div className="form-field">
                  <label>State *</label>
                  <input
                    name="state"
                    type="text"
                    placeholder="Your state"
                    value={accountData.state}
                    onChange={handleAccountChange}
                  />
                </div>

                <div className="form-field">
                  <label>PIN Code *</label>
                  <input
                    name="pincode"
                    type="text"
                    maxLength="6"
                    placeholder="6-digit PIN"
                    value={accountData.pincode}
                    onChange={handleAccountChange}
                  />
                </div>
              </div>

              <div className="form-section-title">
                Emergency Contact
              </div>

              <div className="form-grid">
                <div className="form-field">
                  <label>Emergency Contact Name *</label>
                  <input
                    name="emergencyName"
                    type="text"
                    placeholder="Contact person's name"
                    value={accountData.emergencyName}
                    onChange={handleAccountChange}
                  />
                </div>

                <div className="form-field">
                  <label>Emergency Phone *</label>
                  <input
                    name="emergencyPhone"
                    type="tel"
                    maxLength="10"
                    placeholder="10-digit mobile number"
                    value={accountData.emergencyPhone}
                    onChange={handleAccountChange}
                  />
                </div>
              </div>

              <div className="form-section-title">
                Identification
              </div>

              <div className="form-grid">
                <div className="form-field">
                  <label>ID Proof Type</label>
                  <select
                    name="idType"
                    value={accountData.idType}
                    onChange={handleAccountChange}
                  >
                    <option value="">Select ID proof</option>
                    <option value="Driving Licence">
                      Driving Licence
                    </option>
                    <option value="Passport">Passport</option>
                    <option value="Voter ID">Voter ID</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div className="form-field">
                  <label>ID Proof Number</label>
                  <input
                    name="idNumber"
                    type="text"
                    placeholder="Enter ID number"
                    value={accountData.idNumber}
                    onChange={handleAccountChange}
                  />
                </div>
              </div>

              <div className="demo-notice">
                🔒 This is a BCA project demo. Do not enter real sensitive
                identification information.
              </div>

              <button className="account-submit" type="submit">
                Create Account & Continue
              </button>
            </form>
          </div>
        </div>
      )}

      {/* BOOKING FLOW */}
      {selectedBus && bookingStep && (
        <div
          className="modal-overlay booking-overlay"
          onClick={closeBooking}
        >
          <div
            className="booking-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="close-modal" onClick={closeBooking}>
              ×
            </button>

            {/* STEP INDICATOR */}
            <div className="booking-steps">
              <div className={bookingStep === "seats" ? "active" : "done"}>
                <span>1</span>
                Seat
              </div>

              <div
                className={
                  bookingStep === "details"
                    ? "active"
                    : bookingStep === "payment" ||
                      bookingStep === "success"
                    ? "done"
                    : ""
                }
              >
                <span>2</span>
                Details
              </div>

              <div
                className={
                  bookingStep === "payment" ? "active" : ""
                }
              >
                <span>3</span>
                Payment
              </div>
            </div>

            {/* SEAT SCREEN */}
            {bookingStep === "seats" && (
              <>
                <div className="booking-title">
                  <span className="section-label">SELECT SEAT</span>
                  <h2>{selectedBus.name}</h2>
                  <p>
                    {selectedBus.from} → {selectedBus.to} ·{" "}
                    {selectedBus.departure}
                  </p>
                </div>

                <div className="bus-booking-layout">
                  <div className="seat-selection-area">
                    <div className="driver-label">🚍 DRIVER</div>

                    <div className="seat-layout">
                      <div className="seat-row">
                        {renderSeat("A1")}
                        {renderSeat("A2")}
                        <div className="seat-gap"></div>
                        {renderSeat("A3")}
                        {renderSeat("A4")}
                      </div>

                      <div className="seat-row">
                        {renderSeat("B1")}
                        {renderSeat("B2", true)}
                        <div className="seat-gap"></div>
                        {renderSeat("B3")}
                        {renderSeat("B4")}
                      </div>

                      <div className="seat-row">
                        {renderSeat("C1")}
                        {renderSeat("C2")}
                        <div className="seat-gap"></div>
                        {renderSeat("C3", true)}
                        {renderSeat("C4")}
                      </div>

                      <div className="seat-row">
                        {renderSeat("D1")}
                        {renderSeat("D2")}
                        <div className="seat-gap"></div>
                        {renderSeat("D3")}
                        {renderSeat("D4")}
                      </div>

                      <div className="seat-row">
                        {renderSeat("E1")}
                        {renderSeat("E2")}
                        <div className="seat-gap"></div>
                        {renderSeat("E3")}
                        {renderSeat("E4", true)}
                      </div>

                      <div className="seat-row">
                        {renderSeat("F1")}
                        {renderSeat("F2")}
                        <div className="seat-gap"></div>
                        {renderSeat("F3")}
                        {renderSeat("F4")}
                      </div>
                    </div>

                    <div className="seat-legend">
                      <span>
                        <i className="legend available"></i>
                        Available
                      </span>

                      <span>
                        <i className="legend selected"></i>
                        Selected
                      </span>

                      <span>
                        <i className="legend booked"></i>
                        Booked
                      </span>
                    </div>
                  </div>

                  <div className="booking-summary">
                    <h3>Booking Summary</h3>

                    <div className="summary-route">
                      <strong>{selectedBus.from}</strong>
                      <span>→</span>
                      <strong>{selectedBus.to}</strong>
                    </div>

                    <div className="summary-item">
                      <span>Bus</span>
                      <strong>{selectedBus.name}</strong>
                    </div>

                    <div className="summary-item">
                      <span>Bus Type</span>
                      <strong>{selectedBus.type}</strong>
                    </div>

                    <div className="summary-item">
                      <span>Selected Seats</span>
                      <strong>
                        {selectedSeats.length
                          ? selectedSeats.join(", ")
                          : "None"}
                      </strong>
                    </div>

                    <div className="summary-item">
                      <span>Passengers</span>
                      <strong>{selectedSeats.length}</strong>
                    </div>

                    <div className="total-price">
                      <span>Total Amount</span>
                      <strong>₹{totalAmount}</strong>
                    </div>

                    <button
                      className="continue-button"
                      onClick={continueToPassengerDetails}
                    >
                      Continue to Passenger Details →
                    </button>
                  </div>
                </div>
              </>
            )}

            {/* DETAILS SCREEN */}
            {bookingStep === "details" && (
              <div className="booking-details-screen">
                <div className="booking-title">
                  <span className="section-label">
                    PASSENGER DETAILS
                  </span>

                  <h2>Tell us about yourself</h2>

                  <p>
                    Your information will be attached to this booking.
                  </p>
                </div>

                <div className="welcome-preview">
                  👋 You are booking{" "}
                  <strong>{selectedBus.name}</strong> from{" "}
                  <strong>{selectedBus.from}</strong> to{" "}
                  <strong>{selectedBus.to}</strong>.
                </div>

                <form
                  className="booking-passenger-form"
                  onSubmit={(e) => {
                    e.preventDefault();
                    continueToPayment();
                  }}
                >
                  <div className="form-section-title">
                    Passenger Information
                  </div>

                  <div className="form-grid">
                    <div className="form-field full">
                      <label>Full Name *</label>
                      <input
                        name="name"
                        value={accountData.name}
                        onChange={handleAccountChange}
                        placeholder="Enter passenger full name"
                      />
                    </div>

                    <div className="form-field">
                      <label>Gender *</label>
                      <select
                        name="gender"
                        value={accountData.gender}
                        onChange={handleAccountChange}
                      >
                        <option value="">Select gender</option>
                        <option>Male</option>
                        <option>Female</option>
                        <option>Other</option>
                        <option>Prefer not to say</option>
                      </select>
                    </div>

                    <div className="form-field">
                      <label>Age *</label>
                      <input
                        name="age"
                        type="number"
                        value={accountData.age}
                        onChange={handleAccountChange}
                        placeholder="Age"
                      />
                    </div>

                    <div className="form-field">
                      <label>Phone Number *</label>
                      <input
                        name="phone"
                        value={accountData.phone}
                        onChange={handleAccountChange}
                        placeholder="10-digit mobile"
                        maxLength="10"
                      />
                    </div>

                    <div className="form-field">
                      <label>Email Address *</label>
                      <input
                        name="email"
                        type="email"
                        value={accountData.email}
                        onChange={handleAccountChange}
                        placeholder="Email address"
                      />
                    </div>

                    <div className="form-field full">
                      <label>Address *</label>
                      <textarea
                        name="address"
                        value={accountData.address}
                        onChange={handleAccountChange}
                        placeholder="Full address"
                        rows="3"
                      ></textarea>
                    </div>

                    <div className="form-field">
                      <label>City *</label>
                      <input
                        name="city"
                        value={accountData.city}
                        onChange={handleAccountChange}
                        placeholder="City"
                      />
                    </div>

                    <div className="form-field">
                      <label>State *</label>
                      <input
                        name="state"
                        value={accountData.state}
                        onChange={handleAccountChange}
                        placeholder="State"
                      />
                    </div>

                    <div className="form-field">
                      <label>PIN Code *</label>
                      <input
                        name="pincode"
                        value={accountData.pincode}
                        onChange={handleAccountChange}
                        placeholder="6-digit PIN"
                        maxLength="6"
                      />
                    </div>

                    <div className="form-field">
                      <label>Emergency Contact *</label>
                      <input
                        name="emergencyName"
                        value={accountData.emergencyName}
                        onChange={handleAccountChange}
                        placeholder="Emergency contact name"
                      />
                    </div>

                    <div className="form-field">
                      <label>Emergency Phone *</label>
                      <input
                        name="emergencyPhone"
                        value={accountData.emergencyPhone}
                        onChange={handleAccountChange}
                        placeholder="10-digit number"
                        maxLength="10"
                      />
                    </div>
                  </div>

                  <div className="booking-total-row">
                    <div>
                      <span>Total Seats</span>
                      <strong>{selectedSeats.length}</strong>
                    </div>

                    <div>
                      <span>Amount Payable</span>
                      <strong>₹{totalAmount}</strong>
                    </div>
                  </div>

                  <button className="continue-button" type="submit">
                    Continue to Payment →
                  </button>
                </form>
              </div>
            )}

            {/* PAYMENT */}
            {bookingStep === "payment" && (
              <div className="payment-screen">
                <div className="payment-header">
                  <div className="success-icon">✓</div>

                  <span className="section-label">
                    PASSENGER DETAILS SAVED
                  </span>

                  <h2>
                    Welcome, {accountData.name}! 👋
                  </h2>

                  <p>
                    {welcomeMessage ||
                      "Your journey details are ready."}
                  </p>
                </div>

                <div className="payment-layout">
                  <div className="payment-summary-card">
                    <h3>Journey Summary</h3>

                    <div className="payment-route">
                      <div>
                        <span>FROM</span>
                        <strong>{selectedBus.from}</strong>
                        <small>{selectedBus.departure}</small>
                      </div>

                      <div className="payment-arrow">→</div>

                      <div>
                        <span>TO</span>
                        <strong>{selectedBus.to}</strong>
                        <small>{selectedBus.arrival}</small>
                      </div>
                    </div>

                    <div className="payment-details">
                      <div>
                        <span>Bus</span>
                        <strong>{selectedBus.name}</strong>
                      </div>

                      <div>
                        <span>Bus Type</span>
                        <strong>{selectedBus.type}</strong>
                      </div>

                      <div>
                        <span>Seats</span>
                        <strong>{selectedSeats.join(", ")}</strong>
                      </div>

                      <div>
                        <span>Passengers</span>
                        <strong>{selectedSeats.length}</strong>
                      </div>
                    </div>

                    <div className="payment-amount">
                      <span>Amount to Pay</span>
                      <strong>₹{totalAmount}</strong>
                    </div>
                  </div>

                  <div className="qr-payment-card">
                    <div className="qr-heading">
                      <span>💳</span>
                      <div>
                        <h3>Pay with UPI</h3>
                        <p>Scan the QR code using any UPI app</p>
                      </div>
                    </div>

                    <div className="qr-amount">
                      Please pay exactly
                      <strong>₹{totalAmount}</strong>
                    </div>

                    <div className="uploaded-qr-wrapper">
                      <img
                        src={paytmQR}
                        alt="BUSWAY Paytm UPI QR Code"
                        className="uploaded-qr"
                      />
                    </div>

                    <div className="upi-note">
                      <strong>UPI Payment</strong>
                      <span>
                        Scan the displayed Paytm/UPI QR and complete the
                        payment of ₹{totalAmount}.
                      </span>
                    </div>

                    <div className="payment-warning">
                      ⚠️ For this BCA project demo, the QR is a fixed
                      uploaded QR image. The website displays the booking
                      amount separately; it does not dynamically rewrite
                      the QR's encoded payment amount.
                    </div>

                    <button
                      className="payment-confirm-button"
                      onClick={confirmPayment}
                    >
                      ✓ I Have Completed Payment
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* SUCCESS */}
            {bookingStep === "success" && bookingConfirmed && (
              <div className="confirmation-screen">
                <div className="confirmation-icon">✓</div>

                <span className="section-label">
                  BOOKING CONFIRMED
                </span>

                <h2>Thank You, {accountData.name}! 🎉</h2>

                <p className="confirmation-message">
                  Your BUSWAY bus ticket booking has been successfully
                  recorded.
                </p>

                <div className="ticket-card">
                  <div className="ticket-top">
                    <div className="ticket-logo">
                      <span>BUS</span>WAY
                    </div>

                    <span>BUS TICKET</span>
                  </div>

                  <div className="ticket-route">
                    <div>
                      <small>FROM</small>
                      <strong>{selectedBus.from}</strong>
                      <span>{selectedBus.departure}</span>
                    </div>

                    <div className="ticket-route-line">
                      ━━━━━▶
                    </div>

                    <div>
                      <small>TO</small>
                      <strong>{selectedBus.to}</strong>
                      <span>{selectedBus.arrival}</span>
                    </div>
                  </div>

                  <div className="ticket-grid">
                    <div>
                      <small>PASSENGER</small>
                      <strong>{accountData.name}</strong>
                    </div>

                    <div>
                      <small>BUS</small>
                      <strong>{selectedBus.name}</strong>
                    </div>

                    <div>
                      <small>SEATS</small>
                      <strong>{selectedSeats.join(", ")}</strong>
                    </div>

                    <div>
                      <small>BOOKING ID</small>
                      <strong>{bookingId}</strong>
                    </div>

                    <div>
                      <small>AMOUNT PAID</small>
                      <strong>₹{totalAmount}</strong>
                    </div>

                    <div>
                      <small>STATUS</small>
                      <strong className="paid-status">PAID</strong>
                    </div>
                  </div>
                </div>

                <div className="confirmation-actions">
                  <button
                    className="continue-button"
                    onClick={resetBooking}
                  >
                    Done
                  </button>

                  <button
                    className="secondary-button"
                    onClick={() => window.print()}
                  >
                    🖨 Print Ticket
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;