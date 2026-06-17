

// ====================== 1. CONFIG ======================
const WEBAPP_URL = "https://script.google.com/macros/s/AKfycbzikeY27jY5TDmpn0zh0WI539Fo7MAbf9XRdzlbJW1oC6XQM_MlTwC08FshITl1zZX4/exec";

// ====================== 2. NAVBAR FUNCTION (UPDATED) ======================
function navbar() {
    const navbarEl = document.querySelector('.navbar');
    if (!navbarEl) return;

    navbarEl.innerHTML = `
        <a href="" class="navbar-brand p-0">
            <img src="img/thevictoriaslogo.png" alt="Logo">
        </a>
        <span class="dealyo" style="font-size: 30px"> The Victorias Ltd.</span>

        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span class="fa fa-bars"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarCollapse">
            <div class="navbar-nav ms-auto py-0">
                <a href="index.html" class="nav-item nav-link">Home</a>
                <a href="about.html" class="nav-item nav-link">About</a>

                <!-- Portals Dropdown -->
                <div class="nav-item dropdown">
                    <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Portals</a>
                    <div class="dropdown-menu m-0">
                        <a href="careerhub.html" class="dropdown-item">Career</a>
                        <a href="email.html" class="dropdown-item">Email</a>
                        <a href="bridge.html" class="dropdown-item">Management</a>
                    </div>
                </div>
                <!-- Services Dropdown -->
                <div class="nav-item dropdown">
                    <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Services</a>
                    <div class="dropdown-menu m-0">
                        <a href="doc-dev.html" class="dropdown-item">Document Development</a>
                        <a href="social-media-management.html" class="dropdown-item">Social Media Management</a>
                        <a href="compliance.html" class="dropdown-item">Corporate Compliance</a>
                        <a href="localsupport.html" class="dropdown-item">Corporate Local Entry Support</a>
                        <a href="web-graphics-branding.html" class="dropdown-item">Web, Graphics & Branding</a>
                        <a href="trainings.html" class="dropdown-item">Career Programmes</a>
                        <div class="dropdown-divider"></div>
                        <a href="value.html" class="dropdown-item">Custom Services</a>
                    </div>
                </div>

                <!-- Track Job Link -->
                <a href="#" class="nav-item nav-link track-job-link" style="cursor: pointer;">
                    <i class="fas fa-search"></i> Track Job
                </a>
                <a href="contact.html" class="nav-item nav-link">Reach Us</a>
                <a href="policy.html" class="nav-item nav-link">Policies</a>
            </div>
            <a href="https://flutterwave.com/pay/cxbndrtmjsdj" 
               class="btn btn-primary rounded-pill py-2 px-4 my-3 my-lg-0 flex-shrink-0">
                Payment
            </a>
        </div>

        <!-- FLOATING TRACKER PANEL -->
        <div id="trackerPanel" class="tracker-panel">
            <div class="tracker-header">
                <h5><i class="fas fa-tasks"></i> Track Your Job</h5>
                <button type="button" class="close-btn tracker-close-btn">✕</button>
            </div>
            <div class="tracker-body">
                <input type="text" id="floatTrackingCode" class="form-control form-control-lg mb-3" 
                       placeholder="Enter Tracking Code (e.g. VCH-ABCD1234)" style="text-transform: uppercase; font-size: 1.1rem;">
                
                <button type="button" class="btn btn-primary w-100 py-3 tracker-submit-btn">
                    <i class="fas fa-search"></i> Check Status
                </button>

                <div id="floatResult" class="mt-4"></div>
            </div>
        </div>
    `;

    // === ATTACH EVENTS IMMEDIATELY AFTER INJECTING HTML ===
    setTimeout(() => {
        attachTrackerEvents();
    }, 100);
}
// ====================== 3. ACTIVE NAV LINK ======================
function highlightActiveNavLink() {
    const navLinks = document.querySelectorAll('.nav-link');
    const currentPathname = window.location.pathname;

    navLinks.forEach(link => {
        const linkHref = link.getAttribute('href');
        if (linkHref && currentPathname.endsWith(linkHref)) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

function attachTrackerEvents() {
    console.log("attachTrackerEvents() called");

    const trackLink = document.querySelector('.track-job-link');
    const closeBtn = document.querySelector('.tracker-close-btn');
    const submitBtn = document.querySelector('.tracker-submit-btn');

    if (trackLink) {
        console.log("✅ Track Job link found");

        trackLink.addEventListener('click', (e) => {
            console.log("🔥 Track Job CLICKED!");
            e.preventDefault();
            toggleTracker();
        });
    } else {
        console.log("❌ Track Job link NOT found");
    }

    if (closeBtn) closeBtn.addEventListener('click', toggleTracker);
    if (submitBtn) submitBtn.addEventListener('click', trackJobFloating);
}

const coreservice = [
    { image: 'pexels-jep-gambardella-7690084.jpg', sec: 0.2, topic: 'Administrative Support', text: 'Top-tier operational management powered by AI to ensure your daily business runs seamlessly and efficiently. Our expert team handles essential functions—from data and documentation management to scheduling and general office administration—allowing you to focus on core strategic objectives with complete peace of mind' },
    { image: 'pexels-divinetechygirl-1181605.jpg', sec: 0.4, topic: 'Business Solution', text: 'Strategic business support powered by AI to formalize your operations and drive growth. Our team handles essential legal and strategic processes, from CAC registration and ongoing compliance management to conducting thorough market research, developing robust project plans, and crafting compelling, winning proposals that enhance your credibility.' },
    { image: 'businessman-with-contract.jpg', sec: 0.6, topic: 'General Contracting', text: "Comprehensive general contracting services to bring your projects to life with precision and professionalism. Our experienced team manages every aspect of the contracting process—from initial planning and budgeting to execution and final delivery—ensuring your project is completed on time, within budget, and to the highest standards of quality." }
];

function coreservices() {
    const services = document.querySelector('.coreservices');
    if (!services) return;

    let htmlcode = '';
    let code = '';
    coreservice.forEach(element => {
        code = `<div class="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="${element.sec}">
                        <div class="service-item">
                            <div class="service-img">
                                <img src="img/${element.image}" class="img-fluid rounded-top w-100" alt="Image">
                            </div>
                            <div class="rounded-bottom p-4">
                                <h4> ${element.topic}</h4>
                                <p class="mb-4">${element.text}</p>
                            </div>
                        </div>
                    </div>`;
        htmlcode = htmlcode + code;
    });

    services.innerHTML = htmlcode;
}

const feactured = [

    {

        topic: 'CAC Registration & Corporate Compliance Services',

        link: 'collapseOne',

        image: 'pexels-rimiscky-34968270.jpg',

        text: 'Business Name Registration | Private/Public Limited Company | Incorporated Trustees (Churches, NGOs, etc) | Company Limited by Guarantee | CAC Annual Returns & Filing | Tax Clearance Certificate (TCC) | PENCOM Certificate | BPP Registration | SCUML Certificate | ITF Compliance Certificate | NSITF Compliance Certificate', textlink: 'compliance.html'

    },

    {

        topic: 'Social Media Management',

        link: 'collapseTwo',

        image: 'pexels-shvetsa-3727513.jpg',

        text: 'Build a vibrant online presence and engage your target audience effectively. We handle content strategy, community management, and brand growth across all major social platforms to ensure your business stays relevant and connected.', textlink: 'social-media-management.html'

    },

    {

        topic: 'Proposal, CV Development & Market Research',

        link: 'collapseThree',

        image: 'pexels-rimiscky-34968270.jpg',

        text: 'From persuasive grant and business proposals to ATS-optimized CVs and deep-dive market research, we provide the documentation and insights you need to win opportunities and understand your industry landscape.', textlink: 'doc-dev.html'

    },

    {

        topic: 'Local Market Entry',

        link: 'collapseFour',

        image: 'pexels-shvetsa-3727513.jpg',

        text: 'Navigate the complexities of new territories with confidence. We provide strategic guidance on local regulations, consumer behavior, and competitive positioning to help your brand launch and scale successfully in the local market.', textlink: 'localsupport.html'

    },

    {

        topic: 'Web, Graphics & Branding',

        link: 'collapseFive',

        image: 'pexels-rimiscky-34968270.jpg',

        text: 'Bring your vision to life with a presence that commands attention. We blend strategic web design, impactful graphics, and cohesive branding to help your business cut through the noise and scale successfully in any market.', textlink: 'web-graphics-branding.html'

    },

];

function getstartedlink() {
    const services = document.querySelector('.getstartedlink');
    if (!services) return;

    let htmlcode = '';

    feactured.forEach((element, index) => {
        const activeClass = index === 0 ? 'active' : '';
        const code = `<a class="accordion-link p-4 mb-4 ${activeClass}" data-bs-toggle="pill" href="#${element.link}"> <h5 class="mb-0">${element.topic}</h5></a>`;
        htmlcode += code;
    });

    services.innerHTML = htmlcode;
}

function getstartedbody() {
    const services = document.querySelector('.getstartedbody');
    if (!services) return;

    let htmlcode = '';

    feactured.forEach((element, index) => {
        const activeClass = index === 0 ? 'active show' : '';

        const code = `<div id="${element.link}" class="tab-pane fade p-0 ${activeClass}">
                                <div class="row g-4">
                                    <div class="col-md-7">
                                        <img src="img/${element.image}" class="img-fluid w-100 rounded" alt="">
                                    </div>
                                    <div class="col-md-5">
                                        <h1 class="display-5 mb-4">${element.topic}</h1>
                                        <p class="mb-4">${element.text}</p>
                                        <a class="btn btn-primary rounded-pill py-2 px-4" href="${element.textlink}">Get Started</a>
                                    </div>
                                </div>
                            </div>`;
        htmlcode += code;
    });

    services.innerHTML = htmlcode;
}


function initPage() {
    navbar();
    highlightActiveNavLink();
    coreservices();
    getstartedlink();
    getstartedbody();
    blogger();
    roll();
    attachTrackerEvents();

    setTimeout(() => {
        const input = document.getElementById("floatTrackingCode");
        if (input) {
            input.addEventListener("keypress", (e) => {
                if (e.key === "Enter") trackJobFloating();
            });
        }
    }, 500);
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initPage);
} else {
    initPage();
}



const blogHolder = [
    { topic: 'Ethics for K-12 Management Staff', image: 'https://www.shutterstock.com/image-photo/question-black-woman-smile-seminar-600nw-2485563421.jpg?ixlib=rb-4.0.3&auto=format&fit=crop&q=80" alt="ethics for school', photo: 'img/thevictoriaslogo.png', text: 'Helping teachers to understand ethics and integrity to install value in k-12 students', writer: 'Admin', date: 'Dec 2025' },
    { topic: 'Ethics for Career Advancement', image: 'img/people-office-work-day.jpg', photo: 'img/thevictoriaslogo.png', text: 'Train workforce on ethics essential to outstanding office practices.', writer: 'Admin', date: 'Dec 2025' },
    { topic: 'Our Partnership with YASNigeria ', image: 'img/1763763143498.jpeg', photo: 'img/thevictoriaslogo.png', text: 'YASNigeria has partnerted with us on training for K-12 Teachers in 2026.', writer: 'Admin', date: 'Dec 2025' }
];

function blogger() {
    const services = document.querySelector('.listing');
    let htmlcode = '';
    blogHolder.forEach((element, index) => {
        // Add 'active' and 'show' classes only to the first element (index 0)
        const activeClass = index === 0 ? 'active show' : '';

        const code = `<li class="slide-item"><div class="blog-item p-4">
                        <div class="blog-img mb-4">
                            <img src="${element.image}" style="height: 250px" class="img-fluid w-100 rounded" alt="">
                            <div class="blog-title">
                                <a href="https://wa.me/+2348055538518?text=Inquiry%20about%20${element.topic}" class="btn">Get Started</a>
                            </div>
                        </div>
                        <h6 class="h4 d-inline-block mb-3">${element.topic}</h6>
                        <p class="mb-4">${element.text}
                        </p>
                        <div class="d-flex align-items-center">
                            <img src="${element.photo}" class="img-fluid rounded-circle" style="width: 60px; height: 60px;" alt="">
                            <div class="ms-3">
                                <h5>${element.writer}</h5>
                                <p class="mb-0">${element.date}</p>
                            </div>
                        </div>
                    </div></li>`;
        htmlcode += code;
    });

    services.innerHTML = `<div class=" carousel-wrapper"><ul class="carousel-slides" data-carousel>${htmlcode}</ul></div>`;
}
blogger();


function roll() {
    const carousel = document.querySelector("[data-carousel]");
    const slideItems = carousel.querySelectorAll(".slide-item");
    const slideWidth = slideItems[0].offsetWidth + 10; // Item width + gap
    let currentIndex = 0;

    function slideForward() {
        // Check if we reached the end
        if (currentIndex >= slideItems.length - 3) { // Stop before scrolling past the last three visible items
            currentIndex = 0; // Loop back to the start
            carousel.scrollTo({
                left: 0,
                behavior: 'smooth'
            });
        } else {
            currentIndex++;
            // Scroll the container by the width of one slide item
            carousel.scrollLeft += slideWidth;
        }
    }

    // Start automatic scrolling every 3 seconds (3000ms)
    let autoScrollInterval = setInterval(slideForward, 3000);

    // Optional: Pause scrolling on hover for better user experience
    carousel.addEventListener('mouseenter', () => {
        clearInterval(autoScrollInterval);
    });

    carousel.addEventListener('mouseleave', () => {
        autoScrollInterval = setInterval(slideForward, 3000);
    });
}

roll();


// ====================== 5. TRACKER FUNCTIONS ======================
function toggleTracker() {
    const panel = document.getElementById("trackerPanel");
    if (!panel) return;

    const isOpen = !panel.classList.contains("open");
    panel.classList.toggle("open", isOpen);
    panel.style.display = isOpen ? "block" : "none";

    if (isOpen) {
        setTimeout(() => {
            const input = document.getElementById("floatTrackingCode");
            if (input) input.focus();
        }, 300);
    }
}

async function trackJobFloating() {
    const codeInput = document.getElementById("floatTrackingCode");
    const trackingCode = safeTrackingInput(codeInput.value.trim());
    const resultDiv = document.getElementById("floatResult");

    if (!trackingCode) {
        resultDiv.innerHTML = `<div class="alert alert-danger">Please enter a tracking code.</div>`;
        return;
    }

    resultDiv.innerHTML = `
        <div class="text-center py-4">
            <i class="fas fa-spinner fa-spin fa-2x text-primary"></i>
            <p class="mt-2">Checking status...</p>
        </div>`;

    try {
        const response = await fetch(WEBAPP_URL, {
            method: "POST",
            headers: {
                "Content-Type": "text/plain"   // ← THIS IS THE KEY FIX
            },
            body: JSON.stringify({
                action: "trackJob",
                trackingCode: trackingCode
            })
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const res = await response.json();

        if (res.success && res.job) {
            const job = res.job;
            const statusLower = (job.status || "").toLowerCase();
            let statusClass = "warning";

            if (statusLower.includes("complete") || statusLower.includes("delivered")) statusClass = "success";
            else if (statusLower.includes("progress") || statusLower.includes("in")) statusClass = "info";

            resultDiv.innerHTML = `
                <div class="card border-${statusClass} shadow-sm">
                    <div class="card-body">
                        <h6>Status: <span class="badge bg-${statusClass}">${job.status}</span></h6>
                        <p><strong>Service:</strong> ${job.service || 'N/A'}</p>
                        <p><strong>Amount:</strong> ₦${parseFloat(job.amount || 0).toLocaleString()}</p>
                        <p><strong>Last Updated:</strong> ${job.lastUpdated ? new Date(job.lastUpdated).toLocaleDateString('en-GB') : 'N/A'}</p>
                        <hr>
                        <strong>Progress:</strong>
                        <p class="mb-0">${job.progressNotes || "Your job is being processed."}</p>
                    </div>
                </div>`;
        } else {
            resultDiv.innerHTML = `<div class="alert alert-danger">${res.message || "Invalid or expired tracking code"}</div>`;
        }
    } catch (err) {
        console.error("Track Job Error:", err);
        resultDiv.innerHTML = `
            <div class="alert alert-danger">
                Connection error. Please check your internet and try again.<br>
                <small>If this persists, the tracking service may be temporarily down.</small>
            </div>`;
    }
}

// expose functions to inline handlers in module pages
if (typeof window !== 'undefined') {
    window.toggleTracker = toggleTracker;
    window.trackJobFloating = trackJobFloating;
}

// ====================== INITIALIZATION ======================
// Single init guard — prevents the double-init bug.
// initPage() used to be called twice: once at the top-level
// readyState check AND once inside DOMContentLoaded. Removed
// the top-level call and run everything from one place.

document.addEventListener('DOMContentLoaded', () => {
    // 1. Inject navbar HTML first — everything else depends on it
    navbar();
    highlightActiveNavLink();

    // 2. Populate page sections
    coreservices();
    getstartedlink();
    getstartedbody();
    blogger();
    roll();

    // 3. Wire tracker events (navbar HTML now exists)
    attachTrackerEvents();

    // 4. Enter-key support for tracker input
    const input = document.getElementById("floatTrackingCode");
    if (input) {
        input.addEventListener("keypress", (e) => {
            if (e.key === "Enter") trackJobFloating();
        });
    }

    // 5. Auto-track: run AFTER navbar is ready, no extra delay needed
    handleAutoTrack();
});


// ====================== AUTO-TRACK (FIXED) ======================
// Previous version had three problems:
//   a) Used a 600ms timeout that still raced with navbar injection
//   b) Called panel.style.display = "block" which conflicts with
//      CSS .open class — panel is now controlled by class only
//   c) Retried via a recursive setTimeout that could stack calls

function handleAutoTrack() {
    const urlParams = new URLSearchParams(window.location.search);
    const autoTrackCode = urlParams.get('track');
    if (!autoTrackCode) return;

    // At this point navbar() has already run (called just above in
    // DOMContentLoaded), so the panel and input exist immediately.
    const input = document.getElementById("floatTrackingCode");
    const panel = document.getElementById("trackerPanel");

    if (!input || !panel) {
        // Navbar inject failed for some reason — retry once after 400ms
        setTimeout(handleAutoTrack, 400);
        return;
    }

    // Set the tracking code value
    const cleanCode = safeTrackingInput(autoTrackCode);
    input.value = cleanCode;

    // Open the panel using ONLY the class (matches your CSS .open rule)
    // Do NOT set style.display — that overrides CSS and causes conflicts
    panel.classList.add("open");

    // Clean the URL so refresh doesn't re-trigger
    window.history.replaceState({}, document.title, window.location.pathname);

    // Small delay so the panel's CSS open transition completes before
    // the fetch result tries to render inside it
    setTimeout(() => {
        trackJobFloating();
    }, 200);
}


// ====================== TRACKER TOGGLE (FIXED) ======================
// Removed style.display manipulation — panel visibility is controlled
// entirely by the .open CSS class. Inline style was overriding it.

function toggleTracker() {
    const panel = document.getElementById("trackerPanel");
    if (!panel) return;

    const isOpen = panel.classList.toggle("open");

    if (isOpen) {
        setTimeout(() => {
            const input = document.getElementById("floatTrackingCode");
            if (input) input.focus();
        }, 150);
    }
}


// ====================== TRACKER FETCH ======================
// No changes needed here — the safeTrackingInput stripping is safe
// for valid tracking codes. Kept as-is.

async function trackJobFloating() {
    const codeInput = document.getElementById("floatTrackingCode");
    const resultDiv = document.getElementById("floatResult");
    if (!codeInput || !resultDiv) return;

    const trackingCode = safeTrackingInput(codeInput.value.trim());

    if (!trackingCode) {
        resultDiv.innerHTML = `<div class="alert alert-danger">Please enter a tracking code.</div>`;
        return;
    }

    resultDiv.innerHTML = `
        <div class="text-center py-4">
            <i class="fas fa-spinner fa-spin fa-2x text-primary"></i>
            <p class="mt-2">Checking status...</p>
        </div>`;

    try {
        const response = await fetch(WEBAPP_URL, {
            method: "POST",
            headers: { "Content-Type": "text/plain" },
            body: JSON.stringify({
                action: "trackJob",
                trackingCode: trackingCode
            })
        });

        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

        const res = await response.json();

        if (res.success && res.job) {
            const job = res.job;
            const statusLower = (job.status || "").toLowerCase();
            let statusClass = "warning";
            if (statusLower.includes("complete") || statusLower.includes("delivered")) statusClass = "success";
            else if (statusLower.includes("progress") || statusLower.includes("in")) statusClass = "info";

            resultDiv.innerHTML = `
                <div class="card border-${statusClass} shadow-sm">
                    <div class="card-body">
                        <h6>Status: <span class="badge bg-${statusClass}">${job.status}</span></h6>
                        <p><strong>Service:</strong> ${job.service || 'N/A'}</p>
                        <p><strong>Amount:</strong> ₦${parseFloat(job.amount || 0).toLocaleString()}</p>
                        <p><strong>Last Updated:</strong> ${job.lastUpdated ? new Date(job.lastUpdated).toLocaleDateString('en-GB') : 'N/A'}</p>
                        <hr>
                        <strong>Progress:</strong>
                        <p class="mb-0">${job.progressNotes || "Your job is being processed."}</p>
                    </div>
                </div>`;
        } else {
            resultDiv.innerHTML = `<div class="alert alert-danger">${res.message || "Invalid or expired tracking code"}</div>`;
        }
    } catch (err) {
        console.error("Track Job Error:", err);
        resultDiv.innerHTML = `
            <div class="alert alert-danger">
                Connection error. Please check your internet and try again.<br>
                <small>If this persists, the tracking service may be temporarily down.</small>
            </div>`;
    }
}


// ====================== EXPOSE GLOBALS ======================
if (typeof window !== 'undefined') {
    window.toggleTracker = toggleTracker;
    window.trackJobFloating = trackJobFloating;
}


// ====================== SECURITY HELPERS (unchanged) ======================
function sanitizeHTML(str) {
    const div = document.createElement('div');
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
}

function generateCSRFToken() {
    const token = crypto.randomUUID ? crypto.randomUUID() :
        ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
            (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16));
    sessionStorage.setItem('_csrf', token);
    return token;
}

const submissionTracker = {};
function clientRateLimit(key, maxPerMinute = 3) {
    const now = Date.now();
    if (!submissionTracker[key]) submissionTracker[key] = [];
    submissionTracker[key] = submissionTracker[key].filter(t => now - t < 60000);
    if (submissionTracker[key].length >= maxPerMinute) {
        alert('Too many requests. Please wait a moment.');
        return false;
    }
    submissionTracker[key].push(now);
    return true;
}

(function () {
    const threshold = 160;
    setInterval(() => {
        if (window.outerWidth - window.innerWidth > threshold ||
            window.outerHeight - window.innerHeight > threshold) {
            console.clear();
        }
    }, 1000);
})();

function safeTrackingInput(value) {
    return value.replace(/[^A-Z0-9\-]/gi, '').toUpperCase().substring(0, 30);
}