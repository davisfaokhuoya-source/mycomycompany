// Data definitions remain the same
const ourservices = [
    // Administrative Support
    { category: 'Administrative Support', link: 'Core Administrative Efficiency', topic: 'Core Administrative Efficiency', text: 'Reliable foundational support including specialized data entry, intelligent document management, and physical/online submission with automated follow-up tracking. AI enhancements streamline data processing, error detection, and reminder systems for flawless accuracy and timely compliance', image: 'server-hub-it-staff-members-debugging-optimizing-code.jpg' },
    { category: 'Administrative Support', link: 'Virtual & Strategic Assistance', topic: 'Virtual & Strategic Assistance', text: 'Comprehensive remote virtual assistance covering scheduling, email/inbox optimization, technical/creative tasks, local & foreign entity representation (MAH support), and strategic distribution oversight to scale your brand or operations. Powered by AI-driven virtual agents for smart calendar management, automated workflows, priority task handling, and real-time insights.', image: 'young-african-american-businessman-reading-newspaper-talking-phone-his-office.jpg' },
    { category: 'Administrative Support', link: 'Training, Capacity Building & Expert Consultation', topic: 'Training, Capacity Building & Expert ConsultationCustomized workshops, skill-enhancement programs, and in-depth consultation on all business and administrative challenges. AI-powered analytics and personalized learning tools accelerate capacity building, while intelligent consultation platforms provide data-backed recommendations and scenario modeling for informed decision-making.', text: 'Providing remote administrative, technical, or creative assistance to clients.', image: 'pexels-jep-gambardella-7690084.jpg' },
    
    // Business Support
    { category: 'Business Support', link: 'Foundation & Compliance', topic: 'Foundation & Compliance', text: 'Expert handling of CAC registration/filing, regulatory compliance (SCUML, TCC, and related bodies), and basic business setup with full transparency and no hidden fees. AI-assisted verification and compliance checking tools accelerate processes, minimize errors, and provide real-time status updates.', image: 'happy-expert-checking-documents.jpg' },
    { category: 'Business Support', link: 'Growth & Visibility Tools', topic: 'Growth & Visibility Tools', text: 'Professional development of winning proposals, in-depth market/competitor research, polished company/individual profiles & portfolios, ATS-optimized CV/resume crafting, and strategic social media & email marketing campaigns. AI enhancements include intelligent proposal drafting/generation, keyword-rich content optimization, audience insights, automated posting/scheduling, and performance analytics for maximum engagement and conversions.', image: 'happy-successful-business-leader-signing-agreement.jpg' },
    { category: 'Business Support', link: 'AI Advanced Strategy & Scaling', topic: 'AI Advanced Strategy & Scaling', text: 'End-to-end support for high-stakes opportunities: sophisticated proposal customization with data-driven narratives, advanced research synthesis, premium branding through enhanced profiles/portfolios/CVs, and integrated digital marketing strategies (social + email) with full-funnel management. Leveraging AI-powered predictive analytics, sentiment analysis, content personalization, and automation to forecast trends, refine strategies, and deliver measurable ROI.', image: 'business-objects-with-executives-discussing-blueprint-meeting.jpg' },

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
