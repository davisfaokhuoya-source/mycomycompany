function socialmedia() {
    const media = `
        <a class="btn btn-md-square btn-light rounded-circle me-2" href="facebook.com"><i class="fab fa-facebook-f"></i></a>
        <a class="btn btn-md-square btn-light rounded-circle mx-2" href="x.com"><i class="fab fa-twitter"></i></a>
        <a class="btn btn-md-square btn-light rounded-circle ms-2" href="tiktok.com"><i class="fa-brands fa-tiktok social-icon"></i></a>
        <a class="btn btn-md-square btn-light rounded-circle ms-2" href="linkedin.com"><i class="fab fa-linkedin-in"></i></a>
    `;
    
    // Select all elements with the class 'mediaicon'
    document.querySelectorAll('.mediaicon').forEach(element => {
        // 'element' is the current div in the loop. 
        // We set its innerHTML directly.
        element.innerHTML = media;
    });
}

// Call the function immediately after defining it in the JS file 
// (or use the HTML method below, but this is simpler)
socialmedia();

function navbar() {
    const currentUrl = window.location.href;
    document.querySelector('.navbar').innerHTML=`<a href="" class="navbar-brand p-0">
     <img src="img/thevictoriaslogo.png" alt="Logo">
                </a><span class="dealyo" style="font-size: 30px"> The Victorias Ltd.</span>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span class="fa fa-bars"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarCollapse">
                    <div class="navbar-nav ms-auto py-0">
                        <a href="index.html" class="nav-item nav-link ">Home</a>
                        <a href="about.html" class="nav-item nav-link">About</a>
                        <a href="/appointment.html" class="nav-item nav-link">Book Appointment</a>
                        <a href="contact.html" class="nav-item nav-link">Contact Us</a>
                        <a href="policy.html" class="nav-item nav-link">Policies</a>
                         <div class="nav-item dropdown">
                            <a href="#" class="nav-link active" data-bs-toggle="dropdown">
                                <span class="dropdown-toggle">Login</span>
                            </a>
                            <div class="dropdown-menu m-0">
                                <a href="ssp.html" class="dropdown-item">Career Hub</a>
                                <a href="portal.html" class="dropdown-item">Staff Portal</a>
                                <a href="email.html" class="dropdown-item">Email Portal</a>
                            </div>
                        </div>
                        <div class="nav-item dropdown">
                            <a href="service.html" class="nav-link active" data-bs-toggle="dropdown">
                                <span class="dropdown-toggle">Services</span>
                            </a>
                            <div class="dropdown-menu m-0">
                            <a href="doc-dev.html" class="dropdown-item">Document Development</a>
                            <a href="social-media-management.html" class="dropdown-item">Social Media Managment</a>
                            <a href="compliance.html" class="dropdown-item">Corporate Compliance</a>
                             <a href="localsupport.html" class="dropdown-item">Local Entry</a>
                            <a href="value.html" class="dropdown-item">Request Services</a>
                            <a href="/gaas.html" class="dropdown-item">Premium Services</a>
                            </div>
                        </div>
                    </div>
                    <a href="https://flutterwave.com/pay/cxbndrtmjsdj" class="btn btn-primary rounded-pill py-2 px-4 my-3 my-lg-0 flex-shrink-0">Make Payment</a>
                </div>`}
navbar();

// Get all elements with the class 'nav-link'
    const navLinks = document.querySelectorAll('.nav-link');

    // Get the current page's URL pathname (e.g., '/index.html' or '/about.html')
    const currentPathname = window.location.pathname;

    // Iterate over each link found
    navLinks.forEach(link => {
        // Get the 'href' attribute value of the current link being looped through
        const linkHref = link.getAttribute('href');
        
        /* 
          Compare the link's href to the current URL.
          We use .endsWith() because the window.location.pathname might include a leading slash, 
          but the href in the HTML might not (e.g., '/index.html' vs 'index.html').
        */
        if (currentPathname.endsWith(linkHref)) {
            // If they match, add the 'active' class to that specific link element
            link.classList.add('active');
        } else {
            // Optional: Ensure other links don't have the active class if they were set previously
            link.classList.remove('active');
        }
    });

const coreservice = [
    {image:'pexels-jep-gambardella-7690084.jpg', sec : 0.2,  topic: 'Administrative Support', text:'We provide top-tier operational management to ensure your daily business runs seamlessly and efficiently. Our expert team handles essential functions—from data and documentation management to scheduling and general office administration—allowing you to focus on core strategic objectives with complete peace of mind.'}, 
    {image:'pexels-divinetechygirl-1181605.jpg', sec : 0.4, topic: 'Business Solution', text:'We deliver strategic and tailored business solutions designed to optimize your processes and drive growth. This area focuses on leveraging technology (such as custom software development) and rapid, effective communication to solve complex operational challenges and deliver precise, cost-effective results.'},
    {image:'businessman-with-contract.jpg', sec : 0.6, topic: 'General Contracting', text:"We provide strategic business support to formalize your operations and drive growth. Our team handles essential legal and strategic processes, from CAC registration and ongoing compliance management to conducting thorough market research, developing robust project plans, and crafting compelling, winning proposals that enhance your credibility."}
];

function coreservices(){const services = document.querySelector('.coreservices');
    let htmlcode ='';
    let code ='';
    coreservice.forEach(element => {code = `<div class="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="${element.sec}">
                        <div class="service-item">
                            <div class="service-img">
                                <img src="img/${element.image}" class="img-fluid rounded-top w-100" alt="Image">
                            </div>
                            <div class="rounded-bottom p-4">
                                <h4> ${element.topic}</h4>
                                <p class="mb-4">${element.text}
                                </p>
                                <a class="btn btn-primary rounded-pill py-2 px-4" href="service.html">More Services</a>
                            </div>
                        </div>
                    </div>`;
                 htmlcode = htmlcode + code;}
                )
                    services.innerHTML = htmlcode;
}
coreservices();

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

        text: 'From persuasive grant and business proposals to ATS-optimized CVs and deep-dive market research, we provide the documentation and insights you need to win opportunities and understand your industry landscape.' , textlink: 'doc-dev.html'

    }, 

    {

        topic: 'Local Market Entry', 

        link: 'collapseFour', 

        image: 'pexels-shvetsa-3727513.jpg', 

        text: 'Navigate the complexities of new territories with confidence. We provide strategic guidance on local regulations, consumer behavior, and competitive positioning to help your brand launch and scale successfully in the local market.', textlink: 'localsupport.html'

    },

];

function getstartedlink(){
    const services = document.querySelector('.getstartedlink');
    let htmlcode = '';
    
    feactured.forEach((element, index) => {
        // Add 'active' class only to the first element (index 0)
        const activeClass = index === 0 ? 'active' : ''; 
        
        const code = `<a class="accordion-link p-4 mb-4 ${activeClass}" data-bs-toggle="pill" href="#${element.link}"> <h5 class="mb-0">${element.topic}</h5></a>`;
        htmlcode += code;
    });
    
    services.innerHTML = htmlcode;
}

function getstartedbody(){
    const services = document.querySelector('.getstartedbody');
    let htmlcode = '';
    
    feactured.forEach((element, index) => {
        // Add 'active' and 'show' classes only to the first element (index 0)
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

// Call the functions after defining the corrected feactured array
getstartedlink();
getstartedbody();

const spp = [
    {
        topic: 'Earn Up to $500 While Gaining Real Work Experience',
        link: 'sppcollapseOne',
        image: '30s-Adult.jpg',
        text: 'The Victorias Career Hub gives you the opportunity to earn money while acquiring practical professional experience. Work flexibly from home or anywhere, build your CV with real client handling experience, and get paid for every successful referral.'
    },
    {
        topic: 'Flexible Remote Opportunity for Students & Youths',
        link: 'sppcollapseTwo',
        image: 'pexels-mart-production-7709254.jpg',
        text: 'No 9-5 pressure. No experience required. Join The Victorias Career Hub and start earning while still in school or early in your career. Work at your own pace, develop valuable skills in client relations and business development, and turn your free time into a meaningful income stream.'
    },
    {
        topic: 'Grow Your Income with Our Level System',
        link: 'sppcollapseThree',
        image: '30s-Adult.jpg',
        text: 'Start at Level 1 and advance as you gain experience. The more clients you successfully support, the higher your level and commission rate become. Our progressive system rewards consistent effort, helping students and young professionals increase their earnings while building a strong professional profile.'
    },
    {
        topic: 'Launch Your Career with a Trusted Organisation',
        link: 'sppcollapseFour',
        image: 'pexels-mart-production-7709254.jpg',
        text: 'Be part of a structured career development programme backed by The Victorias Ltd. Gain hands-on experience in corporate services, receive professional mentorship, and earn income at the same time. Build your network, strengthen your resume, and position yourself for better opportunities in the future.'
    }
];

// ====================== GENERATE LINKS (Left Sidebar) ======================
function spplink() {
    const container = document.querySelector('.spplink');
    if (!container) return;

    let htmlcode = '';

    spp.forEach((item, index) => {
        const activeClass = index === 0 ? 'active' : '';
        
        htmlcode += `
            <a class="accordion-link p-4 mb-4 ${activeClass}" 
               data-bs-toggle="pill" 
               href="#${item.link}">
                <h5 class="mb-0">${item.topic}</h5>
            </a>`;
    });
    
    container.innerHTML = htmlcode;
}

// ====================== GENERATE CONTENT (Right Side Panels) ======================
function sppbody() {
    const container = document.querySelector('.sppbody');
    if (!container) return;

    let htmlcode = '';

    spp.forEach((item, index) => {
        const activeClass = index === 0 ? 'active show' : '';

        htmlcode += `
            <div id="${item.link}" class="tab-pane fade p-0 ${activeClass}">
                <div class="row g-4">
                    <div class="col-md-7">
                        <img src="img/${item.image}" 
                             class="img-fluid w-100 rounded" 
                             alt="${item.topic}">
                    </div>
                    <div class="col-md-5">
                        <h1 class="display-5 mb-4">${item.topic}</h1>
                        <p class="mb-4">${item.text}</p>
                        <a class="btn btn-primary rounded-pill py-3 px-5" 
                           href="https://thevictorias.com.ng/careerhub.html">
                            Join Now - Get Started
                        </a>
                    </div>
                </div>
            </div>`;
    });
    
    container.innerHTML = htmlcode;
}

// ====================== INITIALIZE ======================
document.addEventListener('DOMContentLoaded', () => {
    spplink();
    sppbody();
});


const blogHolder = [
    {topic:'Ethics for K-12 Management Staff', image: 'https://www.shutterstock.com/image-photo/question-black-woman-smile-seminar-600nw-2485563421.jpg?ixlib=rb-4.0.3&auto=format&fit=crop&q=80" alt="ethics for school', photo: 'img/thevictoriaslogo.png',text: 'Helping teachers to understand ethics and integrity to install value in k-12 students', writer: 'Admin', date: 'Dec 2025'},
    {topic:'Ethics for Career Advancement', image: 'img/people-office-work-day.jpg', photo: 'img/thevictoriaslogo.png',text: 'Train workforce on ethics essential to outstanding office practices.', writer: 'Admin', date: 'Dec 2025'}, 
    {topic:'Our Partnership with YASNigeria ', image: 'img/1763763143498.jpeg', photo: 'img/thevictoriaslogo.png',text: 'YASNigeria has partnerted with us on training for K-12 Teachers in 2026.', writer: 'Admin', date: 'Dec 2025'}
];




function blogger(){
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

function roll(){const carousel = document.querySelector("[data-carousel]");
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



