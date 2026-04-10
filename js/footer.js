// footer.js
const footerHTML = `<!-- Victoria AI Bubble Integration -->

    <!-- Paste your full footer HTML here -->
    <div class="container-fluid footer py-5 wow fadeIn" data-wow-delay="0.2s">
            <div class="container py-5 border-start-0 border-end-0" style="border: 1px solid; border-color: rgb(255, 255, 255, 0.08);">
                <div class="row g-5">
                    <div class="col-md-6 col-lg-6 col-xl-4">
                        <div class="footer-item">
                            <a href="index.html" class="p-0">
                                <h4 class="text-white">
                                <img src="img/thevictoriaslogo.png" style="height: 60px; width: 60px" alt="Logo"> <span class="dealyo">The Victorias Ltd </span></h4>
                            </a>
                            <p class="mb-4"><strong>A partner you can trust...</strong><br/>At The Victorias Ltd., we are dedicated to fostering long-term partnerships with our clients by delivering exceptional value and measurable results.</p>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-6 col-xl-2">
                        <div class="footer-item">
                            <h4 class="text-white mb-4">Home Links</h4>
                            <a href="careerhub"><i class="fas fa-angle-right me-2"></i> Earn from Home</a>
                            <a href="appointment"><i class="fas fa-angle-right me-2"></i> Book Appointment</a>
                            <a href="services"><i class="fas fa-angle-right me-2"></i> Our Services</a>
                            <a href="contact"><i class="fas fa-angle-right me-2"></i>Contact Us</a>
                            <a href="web-graphics-branding"><i class="fas fa-angle-right me-2"></i>Web, Graphics & Branding</a>
                            <a href="value"><i class="fas fa-angle-right me-2"></i>Service Cost Calculator</a>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-6 col-xl-3">
                        <div class="footer-item">
                            <h4 class="text-white mb-4">Support</h4>
                            <a href="policy.html"><i class="fas fa-angle-right me-2"></i>Policies</a>
                            <a href="contact.html"><i class="fas fa-angle-right me-2"></i>Support</a>
                            <a href="#readfaq"><i class="fas fa-angle-right me-2"></i> FAQ</a>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-6 col-xl-3">
                        <div class="footer-item">
                            <h4 class="text-white mb-4">Contact Info</h4>
                            <div class="d-flex align-items-center">
                                <i class="fas fa-map-marker-alt text-primary me-3"></i>
                                <p class="text-white mb-0">Abuja, Nigeria</p>
                            </div>
                            <div class="d-flex align-items-center">
                                <i class="fas fa-envelope text-primary me-3"></i>
                                <p class="text-white mb-0">@thevictorias.com.ng</p>
                            </div>
                            <div class="d-flex align-items-center">
                                <i class="fa fa-phone-alt text-primary me-3"></i>
                                <p class="text-white mb-0">+2348055538518</p>
                            </div>
                        
                            <div class="d-flex">
                                <a class="btn btn-primary btn-sm-square rounded-circle me-3" href="https://facebook.com/thevictoriasltd"><i class="fab fa-facebook-f text-white"></i></a>
                                <a class="btn btn-primary btn-sm-square rounded-circle me-3" href="https://x.com/thevictoriasltd"><i class="fab fa-twitter text-white"></i></a>
                                <a class="btn btn-primary btn-sm-square rounded-circle me-0" href="linkedin.com/company/thevictoriasltd"><i class="fab fa-linkedin-in text-white"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Footer End -->
        
        <!-- Copyright Start -->
        <div class="container-fluid copyright py-4">
            <div class="container">
                <div class="row g-4 align-items-center">
                    <div class="col-md-6 text-center text-md-start mb-md-0">
                        <span class="text-body"><a href="#" class="border-bottom text-white"><i class="fas fa-copyright text-light me-2"></i>The Victorias Ltd</a>, All right reserved.</span>
                    </div>
                    <div class="col-md-6 text-center text-md-end text-body">
                        Designed By The Victorias Ltd Tech Team.
                    </div>
                </div>
            </div>
        </div>
        <!-- 1. Add this Button anywhere on your page -->
                <button id="victoria-btn" class="victoria-button">
        💬 Live Chat
        </button>

        <!-- Container for iframe -->
        <div id="victoriaai" class="victoriaai"></div>
`;

function renderFooter() {
    const footerContainer = document.querySelector('.addfooter');
    
    if (footerContainer) {
        footerContainer.innerHTML = footerHTML;
    } else {
        console.error("Could not find .addfooter element");
    }
}

// Just call it directly
renderFooter();

document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('victoria-btn');
    const container = document.getElementById('victoriaai');
    
    let isOpen = false;
    let iframe = null;

    button.addEventListener('click', function() {
        if (isOpen) {
            // Close
            if (iframe) {
                iframe.remove();
                iframe = null;
            }
            isOpen = false;
            button.innerHTML = '💬 Live Chat';
            button.classList.remove('open');
        } else {
            // Open
            iframe = document.createElement('iframe');
            iframe.src = "https://victoria-ai-1021677502943.us-west1.run.app";
iframe.style.position = "fixed";
iframe.style.border = "none";
iframe.style.zIndex = "9999";
iframe.style.pointerEvents = "auto";
iframe.allow = "clipboard-write";

// Function to handle responsive styling
function applyResponsiveStyles() {
    if (window.innerWidth <= 767) {
        // Mobile Styles
        iframe.style.bottom = "0px";
        iframe.style.right = "0px";
        iframe.style.width = "450px";
        iframe.style.height = "750px";
    } else {
        // Desktop Styles
        iframe.style.bottom = "100px";
        iframe.style.right = "20px";
        iframe.style.width = "450px";
        iframe.style.height = "750px";
    }
}

    // Run on load and whenever the window is resized
        applyResponsiveStyles();
        window.addEventListener('resize', applyResponsiveStyles);
            
            container.appendChild(iframe);
            
            isOpen = true;
            button.innerHTML = '💬 Close Chat';
            button.classList.add('open');
        }
    });
});

function onClick(e) {
    e.preventDefault();
    grecaptcha.enterprise.ready(async () => {
      const token = await grecaptcha.enterprise.execute('6Lew17AsAAAAANmbaXcMBQt2IgSv-d8SM14-f4s0', {action: 'LOGIN'});
    });
  }