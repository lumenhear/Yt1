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
