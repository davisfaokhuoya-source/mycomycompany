// ====================== 1. CONFIG ======================
const WEBAPP_URL = "https://script.google.com/macros/s/AKfycbx4Ftqr-C_OOMQxqvVi5r_WEHBEhXDx21m8cDada3B9wdU7G5lnr316qtLy9dPYINMg/exec";

// ====================== 2. NAVBAR ======================
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

                <div class="nav-item dropdown">
                    <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Portals</a>
                    <div class="dropdown-menu m-0">
                        <a href="career.html" class="dropdown-item">Career</a>
                        <a href="client-dashboard.html" class="dropdown-item">Management</a>
                    </div>
                </div>

                <div class="nav-item dropdown">
                    <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Others</a>
                    <div class="dropdown-menu m-0">
                        <a href="localsupport.html" class="dropdown-item">Corporate Local Entry Support</a>
                        <a href="trainings.html" class="dropdown-item">Academy</a>
                    </div>
                </div>

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
                <button type="button" class="close-btn tracker-close-btn">&#10005;</button>
            </div>
            <div class="tracker-body">
                <input type="text" id="floatTrackingCode" class="form-control form-control-lg mb-3"
                       placeholder="Enter Tracking Code (e.g. VCH-ABCD1234)"
                       style="text-transform: uppercase; font-size: 1.1rem;">
                <button type="button" class="btn btn-primary w-100 py-3 tracker-submit-btn">
                    <i class="fas fa-search"></i> Check Status
                </button>
                <div id="floatResult" class="mt-4"></div>
            </div>
        </div>
    `;
}

// ====================== 3. ACTIVE NAV LINK ======================
function highlightActiveNavLink() {
    const currentPathname = window.location.pathname;
    document.querySelectorAll('.nav-link').forEach(link => {
        const href = link.getAttribute('href');
        if (href && currentPathname.endsWith(href)) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// ====================== 4. TRACKER EVENTS ======================
function attachTrackerEvents() {
    const trackLink = document.querySelector('.track-job-link');
    const closeBtn = document.querySelector('.tracker-close-btn');
    const submitBtn = document.querySelector('.tracker-submit-btn');
    const input = document.getElementById('floatTrackingCode');

    if (trackLink) {
        trackLink.addEventListener('click', (e) => {
            e.preventDefault();
            toggleTracker();
        });
    }
    if (closeBtn) closeBtn.addEventListener('click', toggleTracker);
    if (submitBtn) submitBtn.addEventListener('click', trackJobFloating);
    if (input) {
        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') trackJobFloating();
        });
    }
}

// ====================== 5. TRACKER TOGGLE ======================
// Controlled ONLY by the .open CSS class.
// Never touch style.display — it overrides the CSS and breaks things.
function toggleTracker() {
    const panel = document.getElementById('trackerPanel');
    if (!panel) return;

    const isOpen = panel.classList.toggle('open');

    if (isOpen) {
        setTimeout(() => {
            const input = document.getElementById('floatTrackingCode');
            if (input) input.focus();
        }, 150);
    }
}

// ====================== 6. TRACKER FETCH ======================
async function trackJobFloating() {
    const codeInput = document.getElementById('floatTrackingCode');
    const resultDiv = document.getElementById('floatResult');
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
            method: 'POST',
            headers: { 'Content-Type': 'text/plain' },
            body: JSON.stringify({ system: 'career', action: 'trackJobPublic', trackingCode })
        });

        if (!response.ok) throw new Error('HTTP ' + response.status);

        const res = await response.json();

        if (res.success && res.job) {
            const job = res.job;
            const s = (job.status || '').toLowerCase();
            const cls = s.includes('complete') || s.includes('delivered') ? 'success'
                : s.includes('progress') || s.includes('in') ? 'info'
                    : 'warning';

            resultDiv.innerHTML = `
                <div class="card border-${cls} shadow-sm">
                    <div class="card-body">
                        <h6>Status: <span class="badge bg-${cls}">${job.status}</span></h6>
                        <p><strong>Service:</strong> ${job.service || 'N/A'}</p>
                        <p><strong>Amount:</strong> &#8358;${parseFloat(job.amount || 0).toLocaleString()}</p>
                        <p><strong>Last Updated:</strong> ${job.lastUpdated ? new Date(job.lastUpdated).toLocaleDateString('en-GB') : 'N/A'}</p>
                        <hr>
                        <strong>Progress:</strong>
                        <p class="mb-0">${job.progressNotes || 'Your job is being processed.'}</p>
                    </div>
                </div>`;
        } else {
            resultDiv.innerHTML = `<div class="alert alert-danger">${res.message || 'Invalid or expired tracking code'}</div>`;
        }
    } catch (err) {
        console.error('Track Job Error:', err);
        resultDiv.innerHTML = `
            <div class="alert alert-danger">
                Connection error. Please check your internet and try again.<br>
                <small>If this persists, the tracking service may be temporarily down.</small>
            </div>`;
    }
}

// ====================== 7. AUTO-TRACK ======================
// Reads ?track= from the URL, pre-fills the panel and fires the lookup.
// Runs AFTER navbar() has already injected the DOM — no timeouts needed.
function handleAutoTrack() {
    const code = new URLSearchParams(window.location.search).get('track');
    if (!code) return;

    const input = document.getElementById('floatTrackingCode');
    const panel = document.getElementById('trackerPanel');

    if (!input || !panel) {
        // DOM not ready yet — retry once
        setTimeout(handleAutoTrack, 300);
        return;
    }

    input.value = safeTrackingInput(code);
    panel.classList.add('open');

    // Clean the URL so a refresh doesn't retrigger
    window.history.replaceState({}, document.title, window.location.pathname);

    // Brief pause so the panel open transition finishes before result renders
    setTimeout(trackJobFloating, 200);
}


// ====================== 9. SECURITY HELPERS ======================
function sanitizeHTML(str) {
    const div = document.createElement('div');
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
}

function generateCSRFToken() {
    const token = crypto.randomUUID
        ? crypto.randomUUID()
        : ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
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
    }, 30000);
})();

function safeTrackingInput(value) {
    // Tracking codes are up to 50 chars: letters, numbers, hyphens, underscores
    return String(value).replace(/[^A-Z0-9\-_]/gi, '').toUpperCase().substring(0, 50);
}

// ====================== 10. SINGLE INIT — runs once, in order ======================
document.addEventListener('DOMContentLoaded', () => {
    navbar();                  // 1. inject HTML — must be first
    highlightActiveNavLink();  // 2. mark active link
    attachTrackerEvents();     // 3. wire tracker (navbar HTML now exists)
    coreservices();            // 4. fill page sections
    getstartedlink();
    getstartedbody();
    blogger();
    roll();
    handleAutoTrack();         // 5. auto-open tracker if ?track= is present
});

// Expose for any inline onclick handlers on other pages
window.toggleTracker = toggleTracker;
window.trackJobFloating = trackJobFloating;