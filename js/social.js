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
                        <a href="service.html" class="nav-item nav-link">Services</a>
                        <a href="pricelist.html" class="nav-item nav-link">Prices List</a>
                        <a href="value.html" class="nav-item nav-link">Request Services</a>
                        <a href="contact.html" class="nav-item nav-link">Contact Us</a>
                        <a href="policy.html" class="nav-item nav-link">Policies</a>
                         <a href="portal.html" class="nav-item nav-link">Portal</a>
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
    {topic:'CAC Registration & Corporate Compliance Services', link: 'collapseOne', image: 'pexels-rimiscky-34968270.jpg', text: 'Business Name Registration | Private/Public Limited Company | Incorporated Trustees (Churches, NGOs, etc) | Company Limited by Guarantee | CAC Annual Returns & Filing | Tax Clearance Certificate (TCC) | PENCOM Certificate | BPP Registration | SCUML Certificate | ITF Compliance Certificate | NSITF Compliance Certificate'},
    {topic:'Proposal & Project Development', link: 'collapseTwo', image: 'pexels-shvetsa-3727513.jpg', text: 'We transform your ideas into actionable realities. Our service provides expertise in developing persuasive proposals and robust project plans, ensuring your initiatives are well-defined and ready for successful execution'},
    {topic:'Professional CV & Porfolio', link: 'collapseThree', image: 'pexels-rimiscky-34968270.jpg', text: 'Make an immediate, impactful impression on potential employers and clients. We specialize in crafting and designing professional, ATS-friendly CVs and dynamic portfolios that effectively highlight your expertise, achievements, and unique value proposition, helping you stand out in a competitive job market.'}, 
    {topic:'Company Profile & Business Website', link: 'collapseFour', image: 'pexels-shvetsa-3727513.jpg', text: 'Establish a powerful, credible digital footprint for your brand. We develop professional company profiles and responsive business websites that articulate your mission, showcase your services, and attract potential clients and investors, transforming casual visitors into engaged business partners.'},
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
                                        <a class="btn btn-primary rounded-pill py-2 px-4" href="https://api.whatsapp.com/send/?phone=%2B2348055538518&text=Inquiry+about+${element.topic}+&type=phone_number&app_absent=0">Get Started</a>
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



