// --- Content Section Database ---
const contentData = {
  home: `
    <section class="hero reveal">
      <div class="container hero-content">
        <div class="hero-badges">
          <div class="badge"><i class="fas fa-map-marker-alt"></i> Chandigarh</div>
          <div class="badge"><i class="fas fa-map-marker-alt"></i> Delhi</div>
        </div>
        <h1>Empowering Communication.<br><span>Enhancing Lives.</span></h1>
        <p>Expert Speech Therapy & Hearing Care across North India. We help children and adults connect with the world confidently.</p>
        <div style="margin-top: 30px;">
          <a href="#contact" class="btn" onclick="route('contact')">Book Appointment</a>
          <a href="#services" class="btn btn-secondary" style="margin-left:10px" onclick="route('services')">Our Services</a>
        </div>
      </div>
    </section>
    <!-- More homepage content can be dynamically injected here -->
  `,
  // Other keys: about, services, contact, speech-delay, etc. Should have similar well-styled markup leveraging component classes defined in CSS.
};
    home: `
        <header class="hero">
            <div class="container hero-text">
                <h1>Premium Care for <br>Speech & Hearing</h1>
                <p>Advanced audiology & speech therapy in Hisar, Hansi, & Bhiwani.</p>
                <div style="display:flex; gap:15px;">
                    <a href="#contact" class="btn" onclick="route('contact')">Book Appointment</a>
                    <a href="#disorders" class="btn btn-outline" onclick="route('disorders')">Check Symptoms</a>
                </div>
            </div>
        </header>

        <section class="section">
            <div class="container">
                <div class="quiz-container" id="quiz-box">
                    <h2><i class="fas fa-stethoscope"></i> Quick Hearing Check</h2>
                    <p id="quiz-question" style="font-size:1.2rem; margin:20px 0;">Do you often ask people to repeat themselves?</p>
                    <div class="quiz-options">
                        <button onclick="quizResult('yes')">Yes, Frequently</button>
                        <button onclick="quizResult('no')">No, Rarely</button>
                    </div>
                </div>
            </div>
        </section>

        <section class="section bg-white">
            <div class="container">
                <div class="section-head">
                    <h2>Why Choose LUMEN?</h2>
                </div>
                <div class="grid-3">
                    <div class="card">
                        <i class="fas fa-certificate card-icon"></i>
                        <h3>RCI Certified</h3>
                        <p>Fully qualified professionals registered with the Rehabilitation Council of India.</p>
                    </div>
                    <div class="card">
                        <i class="fas fa-microscope card-icon"></i>
                        <h3>Gold Standard</h3>
                        <p>We use Interacoustics & Maico diagnostic equipment for 100% accuracy.</p>
                    </div>
                    <div class="card">
                        <i class="fas fa-user-shield card-icon"></i>
                        <h3>Lifetime Support</h3>
                        <p>Free tuning and servicing for all hearing aids purchased from LUMEN.</p>
                    </div>
                </div>
            </div>
        </section>
    `,
          about: `
        <section class="section">
            <div class="container">
                <div class="grid-2" style="display:grid; grid-template-columns: 2fr 1fr; gap:50px;">
                    <div>
                        <div class="section-head" style="text-align:left;">
                            <h2>About LUMEN</h2>
                            <p>LUMEN Speech & Hearing Care is a premier audiology chain in Haryana.</p>
                        </div>
                        <p>We are dedicated to identifying and treating hearing and speech disorders in individuals of all ages. From newborn screening to geriatric hearing care, our clinic offers a one-stop solution.</p>
                        <br>
                        <h3>Our Mission</h3>
                        <p>To provide affordable, world-class hearing and speech healthcare using ethical practices and state-of-the-art technology.</p>
                    </div>
                    
                    <div class="team-card">
                        <img src="https://cdn-icons-png.flaticon.com/512/3774/3774299.png" class="doctor-img" alt="Lead Audiologist">
                        <h3>Dr. [Your Name]</h3>
                        <p style="color:var(--primary); font-weight:600;">Lead Audiologist & SLP</p>
                        <p style="font-size:0.9rem; margin-top:10px;">BASLP, MASLP (Gold Medalist)<br>RCI Reg: AXXXX</p>
                    </div>
                </div>
            </div>
        </section>

        <section class="section bg-white">
            <div class="container">
                <div class="section-head">
                    <h2>Frequently Asked Questions</h2>
                </div>
                <div class="accordion">
                    <div class="accordion-item" onclick="toggleAccordion(this)">
                        <div class="accordion-header">Do you do home visits? <i class="fas fa-chevron-down"></i></div>
                        <div class="accordion-body">Yes, we provide home visits for elderly patients in Hisar, Hansi, and Bhiwani for testing and hearing aid trials.</div>
                    </div>
                    <div class="accordion-item" onclick="toggleAccordion(this)">
                        <div class="accordion-header">What is the cost of hearing aids? <i class="fas fa-chevron-down"></i></div>
                        <div class="accordion-body">Digital hearing aids start from ₹18,000 and go up to premium ranges depending on features like Bluetooth, rechargeability, and noise cancellation.</div>
                    </div>
                    <div class="accordion-item" onclick="toggleAccordion(this)">
                        <div class="accordion-header">Do you treat stammering in adults? <i class="fas fa-chevron-down"></i></div>
                        <div class="accordion-body">Absolutely. We use fluency shaping and modification techniques to help adults gain confidence and control over their speech.</div>
                    </div>
                </div>
            </div>
        </section>
    `,
          contact: `
        <section class="section">
            <div class="container">
                <div class="section-head">
                    <h2>Find Us Near You</h2>
                    <p>Visit our centers in Hisar, Hansi, and Bhiwani.</p>
                </div>
                
                <div class="maps-grid">
                    <div>
                        <h4 style="text-align:center; margin-bottom:10px;">HISAR Clinic</h4>
                        <iframe class="map-frame" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2745.0!2d75.7!3d29.1!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjnCsDA5JzAwLjAiTiA3NcKwNDInMDAuMCJF!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin" loading="lazy"></iframe>
                    </div>
                    <div>
                        <h4 style="text-align:center; margin-bottom:10px;">HANSI Clinic</h4>
                        <iframe class="map-frame" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2745.0!2d75.9!3d29.1!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjnCsDA2JzAwLjAiTiA3NcKwNTgnMDAuMCJF!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin" loading="lazy"></iframe>
                    </div>
                    <div>
                        <h4 style="text-align:center; margin-bottom:10px;">BHIWANI Clinic</h4>
                        <iframe class="map-frame" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2745.0!2d76.1!3d28.7!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDQ3JzAwLjAiTiA3NsKwMDknMDAuMCJF!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin" loading="lazy"></iframe>
                    </div>
                </div>

                <div class="grid-2" style="margin-top:50px; display:grid; grid-template-columns: 1fr 1fr; gap:40px;">
                    <div style="background:var(--primary); color:white; padding:40px; border-radius:12px;">
                        <h3>Quick Contact</h3>
                        <br>
                        <p><i class="fas fa-phone-alt"></i> 93501 58754</p>
                        <p><i class="fas fa-envelope"></i> lumenhearingcare@gmail.com</p>
                        <p><i class="fab fa-instagram"></i> @lumenhearingcare</p>
                        <br>
                        <button class="btn" style="background:white; color:var(--primary);" onclick="window.open('https://wa.me/919350158754')">WhatsApp Us</button>
                    </div>
                    <form style="background:white; padding:30px; border-radius:12px; box-shadow:var(--shadow);">
                        <h3 style="margin-bottom:20px;">Request Call Back</h3>
                        <input type="text" placeholder="Your Name" style="width:100%; padding:12px; margin-bottom:15px; border:1px solid #ddd; border-radius:8px;">
                        <input type="text" placeholder="Phone Number" style="width:100%; padding:12px; margin-bottom:15px; border:1px solid #ddd; border-radius:8px;">
                        <button type="button" class="btn" onclick="alert('Request Sent!')">Send Request</button>
                    </form>
                </div>
            </div>
        </section>
    `
// --- 7. NEW: Interactive Functions ---

// Simple Logic for Quiz
function quizResult(answer) {
    const box = document.getElementById('quiz-box');
    if (answer === 'yes') {
        box.innerHTML = `
            <h2><i class="fas fa-exclamation-circle"></i> Result: Check Recommended</h2>
            <p style="margin:20px 0;">Frequent difficulty hearing may indicate hearing loss. We recommend a Pure Tone Audiometry (PTA) test.</p>
            <a href="#contact" class="btn" style="background:white; color:var(--primary);" onclick="route('contact')">Book Free Consultation</a>
        `;
    } else {
        box.innerHTML = `
            <h2><i class="fas fa-check-circle"></i> Result: Sounds Good!</h2>
            <p style="margin:20px 0;">Your hearing seems fine. However, regular checkups (once a year) are recommended for everyone over 40.</p>
            <button class="btn" style="background:white; color:var(--primary);" onclick="route('home')">Return Home</button>
        `;
    }
}

// Logic for Accordion Toggle
function toggleAccordion(element) {
    // Close all others
    document.querySelectorAll('.accordion-item').forEach(item => {
        if (item !== element) item.classList.remove('active');
    });
    // Toggle current
    element.classList.toggle('active');
}

      
// --- Router Logic ---
function route(pageName) {
  const app = document.getElementById('app');
  if (!contentData[pageName]) pageName = 'home';
  window.scrollTo(0, 0);
  app.innerHTML = contentData[pageName];
  const navLinks = document.querySelector('.nav-links');
  if (navLinks.classList.contains('active')) navLinks.classList.remove('active');
  initAnimations();
}
// --- Animations ---
function initAnimations() {
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('active');
    });
  }, {threshold: 0.1});
  reveals.forEach(reveal => observer.observe(reveal));
}
// --- Initialization on DOM ready ---
document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    document.getElementById('loader').style.opacity = 0;
    setTimeout(() => {
      document.getElementById('loader').style.display = 'none';
    }, 500);
  }, 1000);
  route(location.hash.replace('#', '') || 'home');
  document.getElementById('mobile-menu').addEventListener('click', () => {
    document.querySelector('.nav-links').classList.toggle('active');
  });
});
window.addEventListener('popstate', () => {
  const page = location.hash.replace('#', '') || 'home';
  route(page);
});
