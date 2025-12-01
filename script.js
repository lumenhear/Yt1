// --- 1. Content Database (All Text & Data) ---
const db = {
    disorders: {
        hearing: [
            { name: "Conductive Hearing Loss", what: "Blockage in outer/middle ear preventing sound entry.", treat: "Often curable with medication or surgery." },
            { name: "Sensorineural Hearing Loss", what: "Permanent damage to the inner ear nerve.", treat: "Managed with Hearing Aids or Cochlear Implants." },
            { name: "Tinnitus", what: "Ringing or buzzing noise in the ears.", treat: "Tinnitus Retraining Therapy (TRT) & masking devices." },
            { name: "Noise-Induced Loss", what: "Damage caused by exposure to loud sounds.", treat: "Preventative care and amplification devices." }
        ],
        speech: [
            { name: "Stuttering (Stammering)", what: "Disruption in the flow of speech (blocks/repetitions).", treat: "Fluency shaping and anxiety management." },
            { name: "Articulation Disorder", what: "Difficulty pronouncing specific sounds (e.g., 'r' or 's').", treat: "Oral motor exercises and sound placement therapy." },
            { name: "Voice Disorders", what: "Issues with pitch, volume, or quality (hoarseness).", treat: "Vocal hygiene and resonance therapy." },
            { name: "Apraxia of Speech", what: "Brain struggles to plan speech muscle movements.", treat: "Motor learning approaches (DTTC)." }
        ],
        child: [
            { name: "Autism (ASD)", what: "Social communication challenges and delayed speech.", treat: "Play-based therapy & Social Thinking." },
            { name: "Speech Delay", what: "Not meeting age-appropriate speaking milestones.", treat: "Early Intervention parent-led strategies." },
            { name: "ADHD Communication", what: "Difficulty staying on topic or taking turns.", treat: "Pragmatic language skills training." }
        ],
        neuro: [
            { name: "Aphasia (Stroke)", what: "Loss of language after brain injury/stroke.", treat: "Neuroplasticity-based language recovery." },
            { name: "Dysphagia", what: "Difficulty in swallowing food/liquids.", treat: "Swallowing exercises and diet modification." }
        ]
    }
};

// --- 2. Page Templates (HTML Injection) ---
const pages = {
    home: `
        <header class="hero">
            <div class="container hero-content">
                <h1>Premium Care for <br><span>Speech & Hearing</span></h1>
                <p>Advanced diagnostic audiology and personalized speech therapy services across Hisar, Hansi, and Bhiwani.</p>
                <div style="display:flex; gap:15px; flex-wrap:wrap;">
                    <a href="#contact" class="btn" onclick="route('contact')">Book Appointment</a>
                    <a href="#disorders" class="btn btn-outline" onclick="route('disorders')">Check Symptoms</a>
                </div>
            </div>
        </header>

        <section class="section">
            <div class="container">
                <div class="quiz-container" id="quiz-box">
                    <h2><i class="fas fa-user-doctor"></i> Quick Hearing Check</h2>
                    <p id="quiz-q" style="font-size:1.1rem; margin:20px 0;">Do you often ask people to repeat themselves in crowded places?</p>
                    <div id="quiz-options">
                        <button class="quiz-btn" onclick="quizResult(true)">Yes, Often</button>
                        <button class="quiz-btn" onclick="quizResult(false)">No, Rarely</button>
                    </div>
                </div>
            </div>
        </section>

        <section class="section bg-light">
            <div class="container">
                <div class="section-head">
                    <h2>Why Choose LUMEN?</h2>
                    <p>We combine medical expertise with genuine empathy.</p>
                </div>
                <div class="grid-3">
                    <div class="card">
                        <div class="card-icon"><i class="fas fa-certificate"></i></div>
                        <h3>RCI Certified</h3>
                        <p>Our clinicians are registered with the Rehabilitation Council of India, ensuring ethical and expert care.</p>
                    </div>
                    <div class="card">
                        <div class="card-icon"><i class="fas fa-microscope"></i></div>
                        <h3>Advanced Diagnostics</h3>
                        <p>We use Gold Standard equipment (Interacoustics/Maico) for 100% accurate reporting.</p>
                    </div>
                    <div class="card">
                        <div class="card-icon"><i class="fas fa-house-medical"></i></div>
                        <h3>Home Visits</h3>
                        <p>Specialized home care services available for elderly patients in Hisar and Bhiwani.</p>
                    </div>
                </div>
            </div>
        </section>
    `,

    about: `
        <section class="section">
            <div class="container">
                <div class="grid-2" style="align-items:center;">
                    <div>
                        <div class="section-head" style="text-align:left; margin-bottom:30px;">
                            <h2>About LUMEN</h2>
                            <p>Excellence in Audiology Since 20XX</p>
                        </div>
                        <p>LUMEN Speech & Hearing Care is a premier healthcare provider dedicated to improving the quality of life for individuals with communication disorders. Our multi-city presence in Hisar, Hansi, and Bhiwani ensures that world-class care is accessible to all.</p>
                        <br>
                        <h3>Our Mission</h3>
                        <p>To provide affordable, evidence-based, and compassionate care. We treat the person, not just the disorder.</p>
                    </div>
                    <div class="card team-card">
                        <img src="https://cdn-icons-png.flaticon.com/512/3774/3774299.png" class="doc-img" alt="Doctor">
                        <h3>Dr. [Your Name]</h3>
                        <p style="color:var(--primary); font-weight:600;">Lead Audiologist & SLP</p>
                        <p style="font-size:0.9rem; margin-top:10px;">BASLP, MASLP (Gold Medalist)<br>RCI Reg: AXXXXX</p>
                    </div>
                </div>
            </div>
        </section>

        <section class="section bg-light">
            <div class="container">
                <div class="section-head"><h2>Patient FAQs</h2></div>
                <div class="accordion">
                    <div class="accordion-item card" onclick="toggleAccordion(this)">
                        <div class="accordion-header">Do you do home visits? <i class="fas fa-chevron-down"></i></div>
                        <div class="accordion-body">Yes, we provide home visits for elderly and bedridden patients in Hisar, Hansi, and Bhiwani.</div>
                    </div>
                    <div class="accordion-item card" onclick="toggleAccordion(this)">
                        <div class="accordion-header">What is the cost of a hearing test? <i class="fas fa-chevron-down"></i></div>
                        <div class="accordion-body">Basic screening starts from ₹500. Comprehensive PTA and Tympanometry packages are also available.</div>
                    </div>
                    <div class="accordion-item card" onclick="toggleAccordion(this)">
                        <div class="accordion-header">Do you treat adult stammering? <i class="fas fa-chevron-down"></i></div>
                        <div class="accordion-body">Yes, we have specialized fluency shaping programs for adults to improve confidence and speech flow.</div>
                    </div>
                </div>
            </div>
        </section>
    `,

    services: `
        <section class="section">
            <div class="container">
                <div class="section-head">
                    <h2>Clinical Services</h2>
                    <p>Comprehensive Diagnostic & Therapeutic Solutions</p>
                </div>
                <div class="grid-3">
                    <div class="card">
                        <div class="card-icon"><i class="fas fa-headphones-simple"></i></div>
                        <h3>PTA (Audiometry)</h3>
                        <p>Pure Tone Audiometry determines the degree and type of hearing loss. Essential for hearing aid fitting.</p>
                    </div>
                    <div class="card">
                        <div class="card-icon"><i class="fas fa-wave-square"></i></div>
                        <h3>Impedance / OAE</h3>
                        <p>Tests for middle ear fluids, eustachian tube function, and newborn hearing screening.</p>
                    </div>
                    <div class="card">
                        <div class="card-icon"><i class="fas fa-brain"></i></div>
                        <h3>BERA / ABR</h3>
                        <p>Objective hearing test for infants and difficult-to-test populations. Checks auditory nerve function.</p>
                    </div>
                    <div class="card">
                        <div class="card-icon"><i class="fas fa-comments"></i></div>
                        <h3>Speech Therapy</h3>
                        <p>Customized therapy for autism, speech delay, stammering, and stroke recovery.</p>
                    </div>
                    <div class="card">
                        <div class="card-icon"><i class="fas fa-screwdriver-wrench"></i></div>
                        <h3>Hearing Aid Repair</h3>
                        <p>We service all major brands. Cleaning, shell repair, and programming adjustments.</p>
                    </div>
                    <div class="card">
                        <div class="card-icon"><i class="fas fa-baby"></i></div>
                        <h3>Newborn Screening</h3>
                        <p>Early detection of hearing loss in babies using OAE technology.</p>
                    </div>
                </div>
            </div>
        </section>
    `,

    'hearing-aids': `
        <section class="section">
            <div class="container">
                <div class="section-head">
                    <h2>Hearing Aid Solutions</h2>
                    <p>Reconnect with the sounds of life.</p>
                </div>
                <div class="grid-2">
                    <div>
                        <h3>Latest Technology</h3>
                        <p style="margin-bottom:20px;">We dispense digital, programmable hearing aids that filter noise and enhance speech clarity.</p>
                        <ul style="line-height:2;">
                            <li><i class="fas fa-check" style="color:var(--accent)"></i> <strong>Invisible (IIC):</strong> Fits deep in the canal.</li>
                            <li><i class="fas fa-check" style="color:var(--accent)"></i> <strong>Rechargeable:</strong> No battery changes needed.</li>
                            <li><i class="fas fa-check" style="color:var(--accent)"></i> <strong>Bluetooth:</strong> Connects to your phone/TV.</li>
                        </ul>
                    </div>
                    <div class="card" style="background:var(--primary); color:white;">
                        <h3 style="color:white; border-bottom:1px solid rgba(255,255,255,0.3); padding-bottom:10px;">Authorized Partner</h3>
                        <p style="color:rgba(255,255,255,0.8); margin-bottom:20px;">We deal in world-class brands:</p>
                        <div style="display:flex; flex-wrap:wrap; gap:10px;">
                            <span style="background:rgba(255,255,255,0.2); padding:5px 15px; border-radius:20px;">Phonak</span>
                            <span style="background:rgba(255,255,255,0.2); padding:5px 15px; border-radius:20px;">Signia</span>
                            <span style="background:rgba(255,255,255,0.2); padding:5px 15px; border-radius:20px;">Widex</span>
                            <span style="background:rgba(255,255,255,0.2); padding:5px 15px; border-radius:20px;">Resound</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `,

    disorders: `
        <section class="section">
            <div class="container">
                <div class="section-head">
                    <h2>Disorders We Treat</h2>
                    <p>Select a category to learn about symptoms and treatment.</p>
                </div>
                
                <div class="tabs-header">
                    <button class="tab-link active" onclick="renderDisorders('hearing', this)">Hearing</button>
                    <button class="tab-link" onclick="renderDisorders('speech', this)">Speech</button>
                    <button class="tab-link" onclick="renderDisorders('child', this)">Child / Autism</button>
                    <button class="tab-link" onclick="renderDisorders('neuro', this)">Neurological</button>
                </div>

                <div id="disorder-content" class="grid-2">
                    </div>
            </div>
        </section>
    `,

    contact: `
        <section class="section">
            <div class="container">
                <div class="section-head">
                    <h2>Visit Our Centers</h2>
                    <p>Professional care in Hisar, Hansi, and Bhiwani.</p>
                </div>
                
                <div class="grid-3" style="margin-bottom:50px;">
                    <div class="map-container">
                        <h4 style="text-align:center; margin-bottom:10px;">HISAR Clinic</h4>
                        <iframe src="https://maps.google.com/maps?q=Hisar,Haryana&t=&z=13&ie=UTF8&iwloc=&output=embed" loading="lazy"></iframe>
                    </div>
                    <div class="map-container">
                        <h4 style="text-align:center; margin-bottom:10px;">HANSI Clinic</h4>
                        <iframe src="https://maps.google.com/maps?q=Hansi,Haryana&t=&z=13&ie=UTF8&iwloc=&output=embed" loading="lazy"></iframe>
                    </div>
                    <div class="map-container">
                        <h4 style="text-align:center; margin-bottom:10px;">BHIWANI Clinic</h4>
                        <iframe src="https://maps.google.com/maps?q=Bhiwani,Haryana&t=&z=13&ie=UTF8&iwloc=&output=embed" loading="lazy"></iframe>
                    </div>
                </div>

                <div class="grid-2">
                    <div class="card" style="background:var(--primary); color:white;">
                        <h3 style="color:white;">Contact Details</h3>
                        <br>
                        <p><i class="fas fa-phone-alt"></i> <strong>93501 58754</strong></p>
                        <p style="margin-top:10px;"><i class="fas fa-envelope"></i> lumenhearingcare@gmail.com</p>
                        <p style="margin-top:10px;"><i class="fab fa-instagram"></i> @lumenhearingcare</p>
                        <br>
                        <button class="btn" style="background:white; color:var(--primary);" onclick="window.open('https://wa.me/919350158754')">Chat on WhatsApp</button>
                    </div>
                    
                    <form class="card">
                        <h3>Request Appointment</h3>
                        <input type="text" placeholder="Your Name" style="width:100%; padding:12px; margin-bottom:15px; border:1px solid #ddd; border-radius:8px;">
                        <input type="text" placeholder="Phone Number" style="width:100%; padding:12px; margin-bottom:15px; border:1px solid #ddd; border-radius:8px;">
                        <select style="width:100%; padding:12px; margin-bottom:15px; border:1px solid #ddd; border-radius:8px;">
                            <option>Select Location</option>
                            <option>Hisar</option>
                            <option>Hansi</option>
                            <option>Bhiwani</option>
                        </select>
                        <button type="button" class="btn" onclick="alert('Thank you! We will call you at 9350158754 shortly.')">Submit Request</button>
                    </form>
                </div>
            </div>
        </section>
    `
};

// --- 3. Core Logic ---

function route(pageName) {
    const app = document.getElementById('app-root');
    const loader = document.getElementById('loader');
    
    // Page Validation
    if (!pages[pageName]) pageName = 'home';

    // Show Loader
    loader.style.opacity = '1';
    loader.style.zIndex = '9999';

    setTimeout(() => {
        // Inject HTML
        app.innerHTML = pages[pageName];
        window.scrollTo(0, 0);
        
        // Specific Logic for Disorders Page
        if (pageName === 'disorders') {
            renderDisorders('hearing', document.querySelector('.tab-link'));
        }

        // Hide Loader
        loader.style.opacity = '0';
        setTimeout(() => loader.style.zIndex = '-1', 500);
        
    }, 400);

    // Close Mobile Menu
    document.querySelector('.nav-menu').classList.remove('active');
}

// Render Disorder Cards Dynamically
function renderDisorders(category, btn) {
    const container = document.getElementById('disorder-content');
    const data = db.disorders[category];

    // Toggle Active Class
    document.querySelectorAll('.tab-link').forEach(b => b.classList.remove('active'));
    if(btn) btn.classList.add('active');

    // Build HTML
    let html = '';
    data.forEach(item => {
        html += `
            <div class="detail-card">
                <h3>${item.name}</h3>
                <h4>What is it?</h4>
                <p>${item.what}</p>
                <h4>Treatment</h4>
                <p>${item.treat}</p>
                <button class="btn btn-outline" onclick="route('contact')" style="margin-top:20px; font-size:0.8rem; padding:8px 20px;">Book Consult</button>
            </div>
        `;
    });
    container.innerHTML = html;
}

// Interactive Quiz Logic
function quizResult(hasIssue) {
    const box = document.getElementById('quiz-box');
    if (hasIssue) {
        box.innerHTML = `
            <h2><i class="fas fa-exclamation-triangle"></i> Recommendation</h2>
            <p style="margin:20px 0;">Frequent difficulty hearing suggests a possible hearing loss. We recommend a Pure Tone Audiometry (PTA) test.</p>
            <a href="#contact" class="btn" style="background:white; color:var(--primary);" onclick="route('contact')">Book Free Consultation</a>
        `;
    } else {
        box.innerHTML = `
            <h2><i class="fas fa-check-circle"></i> Good News!</h2>
            <p style="margin:20px 0;">Your hearing seems to be within normal limits. However, annual checkups are recommended for hearing health.</p>
            <button class="btn" style="background:white; color:var(--primary);" onclick="route('home')">Back to Home</button>
        `;
    }
}

// FAQ Accordion Logic
function toggleAccordion(element) {
    element.classList.toggle('active');
}

// Mobile Menu
document.getElementById('hamburger').addEventListener('click', () => {
    document.querySelector('.nav-menu').classList.toggle('active');
});

// Init
document.addEventListener('DOMContentLoaded', () => {
    route('home');
});
