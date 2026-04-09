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
        <div style="position: fixed; bottom: 0px; right: 20px; width: 450px; height: calc(100vh - 100px); max-height: 700px; z-index: 1010; pointer-events: none;">
            <iframe 
                src="https://victoria-ai-1021677502943.us-west1.run.app" 
                style="width: 100%; height: 100%; border: none; background: transparent; pointer-events: auto;"
                allow="clipboard-write"
                title="Victoria AI Concierge">
            </iframe>
        </div>
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