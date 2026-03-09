// Data definitions remain the same
const ourservices = [
    // Administrative Support
    { category: 'Administrative Support', link: 'Core Administrative Efficiency', topic: 'Core Administrative Efficiency', text: 'Reliable foundational support including specialized data entry, intelligent document management, physical and online submissions, plus automated follow-up tracking for authorities. AI enhancements streamline data processing, detect errors instantly, trigger smart reminders, and guarantee flawless accuracy with timely compliance every time.', image: 'server-hub-it-staff-members-debugging-optimizing-code.jpg' },
    { category: 'Administrative Support', link: 'Virtual & Strategic Assistance', topic: 'Virtual & Strategic Assistance', text: 'Comprehensive remote virtual assistance covering scheduling, email optimization, technical or creative tasks, local and foreign entity representation (MAH support), and strategic distribution oversight to effectively scale your brand or operations. Powered by AI-driven virtual agents for smart calendar management, automated workflows, priority handling, and real-time insights.', image: 'pexels-jep-gambardella-7690084.jpg' },
    { category: 'Administrative Support', link: 'Training, Capacity Building & Expert Consultation', topic: 'Training, Capacity Building & Expert Consultation', text: 'Customized workshops, targeted skill-enhancement programs, and in-depth consultation addressing all business and administrative challenges you face. AI-powered analytics and personalized learning tools accelerate capacity building, while intelligent consultation platforms deliver data-backed recommendations, scenario modeling, and strategic insights for confident decision-making.', image: 'young-african-american-businessman-reading-newspaper-talking-phone-his-office.jpg' },
    
    // Business Support
    { category: 'Business Support', link: 'Foundation & Compliance', topic: 'Foundation & Compliance', text: 'Expert handling of CAC registration and filing, full regulatory compliance (SCUML, TCC, and related bodies), plus basic business setup delivered with complete transparency and zero hidden fees. AI-assisted verification tools accelerate every process, minimize errors effectively, and provide real-time status updates throughout.', image: 'industrial-designers-working-3d-model.jpg' },
    { category: 'Business Support', link: 'Growth & Visibility Tools', topic: 'Growth & Visibility Tools', text: 'Professional development of winning proposals, in-depth market or competitor research, polished company and individual profiles/portfolios, ATS-optimized CV/resume crafting, plus strategic social media and email marketing campaigns. AI enhancements deliver intelligent drafting, keyword optimization, audience insights, automated scheduling, and analytics for maximum engagement.', image: 'pexels-divinetechygirl-1181605.jpg' },
    { category: 'Business Support', link: 'Lean Entry & Strategic Growth', topic: 'Lean Entry & Strategic Growth', text: 'Tailored Nigerian market entry via proxy models, featuring expert distributor management, sector research, and boots-on-the-ground oversight. We leverage predictive analytics, performance tracking, and automated reporting to bridge the gap between global brands and local retailers, ensuring seamless logistics, regulatory compliance, and maximized ROI with minimal physical footprint.', image: 'business-objects-with-executives-discussing-blueprint-meeting.jpg' },

    // General Contract
    { category: 'General Contract', link: 'procurement-supply', topic: 'Procurement and Supply', text: 'Sourcing goods, managing vendors, and ensuring timely delivery of essential supplies.', image: 'closeup-businessman-using-mobile-phone.jpg' },
    { category: 'General Contract', link: 'printing-designing-branding', topic: 'Printing, Designing and Branding', text: 'Logo design, branding strategy, complementary cards, flyers, brochures, and professional printing services.', image: 'happy-african-american-businesswoman-working-touchpad-office.jpg' },
    { category: 'General Contract', link: 'construction-infrastructural-project', topic: 'Construction and Infrastructural Projects', text: 'Handling diverse construction and infrastructure development projects.', image: 'construction.jpg'},
    { category: 'General Contract', link: 'project-supervision', topic: 'Project Supervision', text: 'Monitoring and managing project execution to ensure quality and timely delivery.', image: 'business-people-discussion.jpg'},
     { 
        category: 'General Contract', 
        link: 'web-development', 
        topic: 'Web Development Services', 
        text: 'End-to-end website design, development, maintenance, and e-commerce solutions tailored to your business needs.', 
        image: 'istockphoto-1075599562-612x612.jpg'
    },
];


// Helper function to generate the HTML for a single service card
function generateServiceCardHTML(service, index) {
    const delay = `${(index % 3) * 0.1}s`; 
    
    // Generate the WhatsApp link with pre-filled message
    // URL encoding the message "Hello, I am interested in your [Service Topic] service."
    const whatsappMessage = encodeURIComponent(`Hello, I am interested in your ${service.topic} service.`);
    const whatsappLink = `https://wa.me/+2348055538518?text=${whatsappMessage}`;
    
    return `
        <div class="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="${delay}">
            <div class="servicex-item">
                <div class="servicex-img">
                    <img src="img/${service.image}" class="img-fluid rounded-top w-100" alt="${service.topic}">
                </div>
                <div class="rounded-bottom p-4">
                    <h4>${service.topic}</h4>
                    <p class="mb-4">${service.text}</p>
                    <!-- Changed link to WhatsApp and text to "Get Service" -->
                    <a class="btn btn-primary rounded-pill py-2 px-4" href="${whatsappLink}" target="_blank" rel="noopener noreferrer">Get Service</a>
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

    const groupedServices = ourservices.reduce((accumulator, currentService) => {
        if (!accumulator[currentService.category]) {
            accumulator[currentService.category] = [];
        }
        accumulator[currentService.category].push(currentService);
        return accumulator;
    }, {});

    for (const category in groupedServices) {
        if (Object.hasOwnProperty.call(groupedServices, category)) {
            const servicesInCategory = groupedServices[category];
            
            // Define a generic description for the category (you can make this more dynamic if needed)
            const categoryDescription = `Explore our range of professional services within the **${category}** area, designed to meet your specific needs.`;

            // Add a title and description row for the category
            finalHTML += `
                <div class="container-fluid py-5">
                    <div class="container">
                        <div class="text-center mx-auto mb-5" style="max-width: 600px;">
                            <!-- Inserted Description here -->
                            <p class="text-primary fs-5 mb-5">${categoryDescription}</p> 
                            <h1 class="display-5">${category}</h1>
                        </div>
                        <!-- Added 'justify-content-center' class here to center items -->
                        <div class="row g-4 justify-content-center">`; 

            // Add the service cards for this category
            servicesInCategory.forEach((service, index) => {
                finalHTML += generateServiceCardHTML(service, index);
            });

            // Close the row and container divs
            finalHTML += `</div></div></div>`;
        }
    }

    // Inject the combined HTML into the DOM
    servicesContainer.innerHTML = finalHTML;
}

// Call the function when the script runs
allservices();
