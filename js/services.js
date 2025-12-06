// Data definitions remain the same
const ourservices = [
    // Administrative Support
    { category: 'Administrative Support', link: 'data-entry', topic: 'Data Entry', text: 'Accurate and efficient data input, management, and organization services.', image: 'server-hub-it-staff-members-debugging-optimizing-code.jpg' },
    { category: 'Administrative Support', link: 'document-submission', topic: 'Document Submission and Follow-up', text: 'Handling submission of important documents to relevant authorities and ensuring follow-through.', image: 'young-african-american-businessman-reading-newspaper-talking-phone-his-office.jpg' },
    { category: 'Administrative Support', link: 'virtual-assistance', topic: 'Virtual Assistance', text: 'Providing remote administrative, technical, or creative assistance to clients.', image: 'pexels-jep-gambardella-7690084.jpg' },
    { category: 'Administrative Support', link: 'training-capacity-building', topic: 'Training and Capacity Building', text: 'Workshops and programs designed to enhance skills and organizational capabilities.', image: 'pexels-rdne-7648221.jpg' },
    { category: 'Administrative Support', link: 'Consultation', topic: 'Consultation', text: 'Consultation on all business related issues', image: 'portrait-attractive-cuban-woman-presenting-statistical-information-her-unrecognizable-boss.jpg' },
    
    
    // Business Support
    { category: 'Business Support', link: 'cac-registration-filing', topic: 'CAC Registration and Filing', text: 'Handling the registration process for new businesses and managing Corporate Affairs Commission (CAC) filings.', image: 'happy-expert-checking-documents.jpg' },
    { category: 'Business Support', link: 'compliance-scuml-tcc', topic: 'Regulatory Compliance (SCUML, TCC, etc.)', text: 'Ensuring legal and regulatory compliance with various bodies including SCUML and obtaining Tax Clearance Certificates (TCC).', image: 'happy-successful-business-leader-signing-agreement.jpg' },
    { category: 'Business Support', link: 'proposal-development', topic: 'Proposal Development', text: 'Crafting compelling proposals for grants, bids, and business opportunities.', image: 'business-objects-with-executives-discussing-blueprint-meeting.jpg' },
    { category: 'Business Support', link: 'research', topic: 'Research Handling', text: 'Conducting thorough market, competitor, or academic research tailored to your needs.', image: 'executive-reviewing-notes.jpg' },
    { category: 'Business Support', link: 'company-profile-portfolio', topic: 'Company Profile/Portfolio', text: 'Professional crafting of detailed business profiles and portfolios.', image: 'industrial-designers-working-3d-model.jpg'},
    { category: 'Business Support', link: 'individual-profile-portfolio', topic: 'Individual Profile/Portfolio', text: 'Professional crafting of personal profiles and portfolios for career advancement.', image: 'young-woman-holding-tablet-work.jpg'},
    { category: 'Business Support', link: 'cv-development', topic: 'CV Development', text: 'Professional crafting of CVs/Resumes for job applications.', image: 'pexels-divinetechygirl-1181605.jpg' },
    { category: 'Business Support', link: 'social-media-marketing', topic: 'Social Media Marketing', text: 'Strategic campaigns to promote your business and engage audiences across social platforms.', image: 'young-african-businessman-working-office-laptop-make-notice-notebook.jpg' },
    { category: 'Business Support', link: 'email-marketing', topic: 'Email Marketing', text: 'Designing and executing effective email campaigns to reach your target audience.', image: 'confident-businessman-working-his-laptop.jpg' },

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
