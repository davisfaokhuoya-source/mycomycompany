// Data definitions (updated for clarity)
const ourservices = [
    // Administrative Support
    { category: 'Administrative Support', link: 'Core Administrative Efficiency', topic: 'Core Administrative Efficiency', text: 'Reliable foundational support including specialized data entry, intelligent document management, physical and online submissions, plus automated follow-up tracking for authorities. AI enhancements streamline data processing, detect errors instantly, trigger smart reminders, and guarantee flawless accuracy with timely compliance every time.', image: 'server-hub-it-staff-members-debugging-optimizing-code.jpg' },
    { category: 'Administrative Support', link: 'Virtual & Strategic Assistance', topic: 'Virtual & Strategic Assistance', text: 'Comprehensive remote virtual assistance covering scheduling, email optimization, technical or creative tasks, local and foreign entity representation (MAH support), and strategic distribution oversight to effectively scale your brand or operations. Powered by AI-driven virtual agents for smart calendar management, automated workflows, priority handling, and real-time insights.', image: 'pexels-jep-gambardella-7690084.jpg' },
    { category: 'Administrative Support', link: 'Training, Capacity Building & Expert Consultation', topic: 'Training, Capacity Building & Expert Consultation', text: 'Customized workshops, targeted skill-enhancement programs, and in-depth consultation addressing all business and administrative challenges you face. AI-powered analytics and personalized learning tools accelerate capacity building, while intelligent consultation platforms deliver data-backed recommendations, scenario modeling, and strategic insights for confident decision-making.', image: 'young-african-american-businessman-reading-newspaper-talking-phone-his-office.jpg' },
    
    // Business Support
    { category: 'Business Support', link: 'Foundation & Compliance', topic: 'Foundation & Compliance', text: 'Expert handling of CAC registration and filing, full regulatory compliance (SCUML, TCC, and related bodies), plus basic business setup delivered with complete transparency and zero hidden fees. AI-assisted verification tools accelerate every process, minimize errors effectively, and provide real-time status updates throughout.', image: 'industrial-designers-working-3d-model.jpg', textlink: 'compliance.html' },
    { category: 'Business Support', link: 'Growth & Visibility Tools', topic: 'Growth & Visibility Tools', text: 'Professional development of winning proposals, in-depth market or competitor research, polished company and individual profiles/portfolios, ATS-optimized CV/resume crafting, plus strategic social media and email marketing campaigns. AI enhancements deliver intelligent drafting, keyword optimization, audience insights, automated scheduling, and analytics for maximum engagement.', image: 'pexels-divinetechygirl-1181605.jpg', textlink: 'doc-dev.html', textlink2: 'social-media-management.html' },
    { category: 'Business Support', link: 'Lean Entry & Strategic Growth', topic: 'Lean Entry & Strategic Growth', text: 'Tailored Nigerian market entry via proxy models, featuring expert distributor management, sector research, and boots-on-the-ground oversight. We leverage predictive analytics, performance tracking, and automated reporting to bridge the gap between global brands and local retailers, ensuring seamless logistics, regulatory compliance, and maximized ROI with minimal physical footprint.', image: 'business-objects-with-executives-discussing-blueprint-meeting.jpg', textlink: 'localsupport.html' },

    // General Contract
    { category: 'General Contract', link: 'procurement-supply', topic: 'Procurement and Supply', text: 'Sourcing goods, managing vendors, and ensuring timely delivery of essential supplies.', image: 'closeup-businessman-using-mobile-phone.jpg' },
    { category: 'General Contract', link: 'printing-designing-branding', topic: 'Printing, Designing and Branding', text: 'Logo design, branding strategy, complementary cards, flyers, brochures, and professional printing services.', image: 'happy-african-american-businesswoman-working-touchpad-office.jpg' },
    { category: 'General Contract', link: 'construction-infrastructural-project', topic: 'Construction and Renovations', text: 'Handling diverse construction and renovations project.', image: 'construction.jpg' },
];

// Helper function to generate the HTML for a single service card
function generateServiceCardHTML(service, index) {
    const delay = `${(index % 3) * 0.1}s`;
    
    // Default to WhatsApp link
    const whatsappMessage = encodeURIComponent(`Hello, I am interested in your ${service.topic} service.`);
    const whatsappLink = `https://wa.me/+2348055538518?text=${whatsappMessage}`;

    // Collect all available links
    let links = [];
    let buttonTexts = [];

    if (service.textlink) {
        links.push(service.textlink);
        buttonTexts.push("View Details");
    }
    if (service.textlink2) {
        links.push(service.textlink2);
        buttonTexts.push("Social Media Management");
    }
    
    // If no custom links, use WhatsApp as default
    if (links.length === 0) {
        links.push(whatsappLink);
        buttonTexts.push("Get Service");
    }

    // For services with multiple links, we'll handle cycling via data attributes
    const hasMultiple = links.length > 1;
    const initialLink = links[0];
    const initialText = buttonTexts[0];

    return `
        <div class="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="${delay}">
            <div class="servicex-item">
                <div class="servicex-img">
                    <img src="img/${service.image}" class="img-fluid rounded-top w-100" alt="${service.topic}">
                </div>
                <div class="rounded-bottom p-4">
                    <h4>${service.topic}</h4>
                    <p class="mb-4">${service.text}</p>
                    
                    <a id="btn-${index}" 
                       class="btn btn-primary rounded-pill py-2 px-4 service-btn" 
                       href="${initialLink}" 
                       target="_blank" 
                       rel="noopener noreferrer"
                       data-links='${JSON.stringify(links)}'
                       data-texts='${JSON.stringify(buttonTexts)}'
                       data-current="0">
                        ${initialText}
                    </a>
                </div>
            </div>
        </div>
    `;
}

// Main function to group and display all services
function allservices() {
    const servicesContainer = document.querySelector('.ourservices');
    
    if (!servicesContainer) {
        console.error("Target container '.ourservices' not found.");
        return;
    }

    let finalHTML = '';

    const groupedServices = ourservices.reduce((acc, service) => {
        if (!acc[service.category]) acc[service.category] = [];
        acc[service.category].push(service);
        return acc;
    }, {});

    for (const category in groupedServices) {
        const servicesInCategory = groupedServices[category];

        const categoryDescription = `Explore our range of professional services within the <strong>${category}</strong> area, designed to meet your specific needs.`;

        finalHTML += `
            <div class="container-fluid py-5">
                <div class="container">
                    <div class="text-center mx-auto mb-5" style="max-width: 600px;">
                        <p class="text-primary fs-5 mb-5">${categoryDescription}</p> 
                        <h1 class="display-5">${category}</h1>
                    </div>
                    <div class="row g-4 justify-content-center">`;

        servicesInCategory.forEach((service, index) => {
            finalHTML += generateServiceCardHTML(service, index);
        });

        finalHTML += `</div></div></div>`;
    }

    servicesContainer.innerHTML = finalHTML;

    // Initialize button cycling for services with multiple links
    initButtonCycling();
}

// Function to handle cycling of button text and link
function initButtonCycling() {
    const buttons = document.querySelectorAll('.service-btn');
    
    buttons.forEach(btn => {
        const links = JSON.parse(btn.dataset.links || '[]');
        const texts = JSON.parse(btn.dataset.texts || '[]');
        
        if (links.length <= 1) return; // No cycling needed

        let current = 0;
        const interval = 2000; // Change every 2 seconds (0.2s was too fast and annoying)

        setInterval(() => {
            current = (current + 1) % links.length;
            btn.href = links[current];
            btn.textContent = texts[current];
        }, interval);
    });
}

// Call the function when the script runs
allservices();