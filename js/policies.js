document.addEventListener('DOMContentLoaded', () => {
        // --- 1. Define the Data Structure (Array of Objects) ---
        const policiesData = [
            {
                id: 'topicOne',
                title: 'Data Protection Policy',
                subtopics: [
                    { id: 'dpp-1', title: '1. Introduction', content: 'The Victorias Ltd., registered under the Corporate Affairs Commission (CAC), is committed to protecting personal data per the Nigeria Data Protection Act (NDPA) 2023, Nigeria Data Protection Regulation (NDPR) 2019 (where applicable), and Cybercrimes Act 2015. This policy governs data collection, processing, storage, and sharing for our services (general contracting, administrative assistance, software development), ensuring compliance with Section 37 of the 1999 Constitution. We process data fairly, transparently, and securely.' },
                    { id: 'dpp-2', title: '2. Scope & 3. Definitions', content: '<strong>2. Scope:</strong> Applies to all personal data processed, including employee data (e.g., payroll, health records), client data (e.g., contact details, financials for admin services), software user data, and sensitive data (e.g., biometrics). Covers employees, contractors, third parties, and all processes, including cross-border transfers. Exclusions: personal/household processing, national security, public health, or journalistic purposes (per NDPA).<br><br><strong>3. Definitions:</strong> Personal Data: Information about an identifiable person (e.g., name, email). Processing: Any operation on data (e.g., collection, storage). Data Subject: Individuals whose data we process. Data Controller: The Victorias Ltd., deciding processing purposes. Data Processor: Third parties processing on our behalf. Sensitive Personal Data: Data on race, health, biometrics. Data Breach: Unauthorized access/loss of data.' },
                    { id: 'dpp-3', title: '4. Data Protection Principles & 5. Lawful Basis', content: '<strong>4. Data Protection Principles:</strong> We adhere to NDPA principles: Lawfulness, fairness, transparency; purpose limitation; data minimization; accuracy; storage limitation; integrity and confidentiality; accountability.<br><br><strong>5. Lawful Basis for Processing:</strong> Based on consent, contract performance, legal obligations, legitimate interests, or vital/public interests. Sensitive data requires explicit consent or legal necessity.' },
                    { id: 'dpp-4', title: '6. Data Subject Rights & 7. Security Measures', content: '<strong>6. Data Subject Rights:</strong> Rights include access, rectification, erasure, restriction, portability, objection, consent withdrawal, and complaints to our DPO or NDPC. Handled within 30 days, free unless unfounded.<br><br><strong>7. Data Security Measures:</strong> Technical: Encryption, firewalls, multi-factor authentication. Organizational: Need-to-know access, audits, training. Physical: Locked storage. Third-party processors comply via contracts. Cross-border transfers use adequacy decisions or standard clauses.' },
                    { id: 'dpp-5', title: '8. Data Breaches & 9. Compliance', content: '<strong>8. Data Breaches:</strong> Detection, notification to NDPC within 72 hours, and response plans. Penalties up to ₦10M or 2% of revenue.<br><br><strong>9. Compliance and Training:</strong> DPO oversees compliance; annual audits by DPCO; mandatory staff training; records maintained.' },
                ]
            },
            {
                id: 'topicTwo',
                title: 'Safety Policy',
                subtopics: [
                    { id: 'sp-1', title: '1. Introduction & 2. Goal & 3. Scope', content: '<strong>1. Introduction:</strong> The Victorias Ltd. ensures a safe workplace per the Factories Act, Occupational Health and Safety guidelines, and NDPA for data-related safety. We prioritize accident prevention across construction, admin, and software services.<br><br><strong>2. Goal:</strong> Zero incidents through proactive risk management, training, and compliance.<br><br><strong>3. Scope:</strong> Applies to all operations, sites, and personnel, covering physical, chemical, biological, and ergonomic hazards.' },
                    { id: 'sp-2', title: '4. Statement of Commitment & 5. Responsibilities', content: '<strong>4. Statement of Commitment:</strong> Management commits to legal compliance, safe equipment, training, and a safety culture.<br><br><strong>5. Responsibilities:</strong> Management: Provide resources, assess risks. Safety Officer: Lead programs. Employees/Contractors: Follow procedures, report hazards. Clients/Visitors: Comply with rules.' },
                    { id: 'sp-3', title: '6. Key Safety Measures, 7. Incident Reporting & 8. Enforcement', content: '<strong>6. Key Safety Measures:</strong> Risk assessments, free PPE (helmets, gloves), training, emergency procedures, daily inspections, hazard controls (e.g., guardrails, ergonomic setups).<br><br><strong>7. Incident Reporting and Investigation:</strong> Report incidents to Safety Officer; investigate causes; report to authorities if required.<br><br><strong>8. Enforcement and Review:</strong> Violations lead to warnings or termination. Reviewed annually; safety committee meets monthly.' },
                ]
            },
            {
                id: 'topicThree',
                title: 'Safety Procedures',
                subtopics: [
                    { id: 'sproc-1', title: '1. Purpose & 2. General Procedures', content: '<strong>1. Purpose:</strong> Operationalizes the Safety Policy for construction, admin, and software activities.<br><br><strong>2. General Procedures:</strong> Site induction, daily briefings, housekeeping, equipment inspections, visitor control.' },
                    { id: 'sproc-2', title: '3. Construction-Specific Procedures', content: 'Fall protection (guardrails above 2m), certified scaffolding, trench safety, licensed machinery operators, electrical safety, hazardous materials handling.' },
                    { id: 'sproc-3', title: '4. Administrative/Software Procedures', content: 'Ergonomic setups, fire safety, secure data handling, VPN for remote work.' },
                    { id: 'sproc-4', title: '5. Emergency Procedures & 6. Monitoring', content: '<strong>5. Emergency Procedures:</strong> Evacuation plans, first aid, medical evacuation, quarterly drills.<br><br><strong>6. Monitoring and Compliance:</strong> Monthly audits, immediate corrective actions, records kept for 5 years.' },
                ]
            },
            {
                id: 'topicFour',
                title: 'Confidentiality Policy',
                subtopics: [
                    { id: 'cp-1', title: '1. Introduction & 2. Scope', content: '<strong>1. Introduction:</strong> The Victorias Ltd. protects confidential information (e.g., client documents, software code) per NDPA 2023, NDPR 2019, and common law, ensuring non-disclosure except where authorized.<br><br><strong>2. Scope:</strong> Applies to trade secrets, client data, financials, IP, personal data. Covers employees, contractors, third parties.' },
                    { id: 'cp-2', title: '3. Definition of Confidential Information & 4. Obligations', content: '<strong>3. Definition of Confidential Information:</strong> Non-public data (e.g., client contracts, source code). Excludes public or independently developed info.<br><br><strong>4. Obligations:</strong> Non-disclosure, need-to-know access, secure handling, NDAs for third parties, return/destruction post-employment.' },
                    { id: 'cp-3', title: '5. Exceptions, 6. Training, 7. Breach Reporting & 8. Enforcement', content: '<strong>5. Exceptions:</strong> Legal requirements (e.g., court orders), internal audits with approval.<br><br><strong>6. Training and Awareness:</strong> Annual training, signed confidentiality agreements.<br><br><strong>7. Breach Reporting:</strong> Report to DPO immediately; investigate and notify NDPC if required.<br><br><strong>8. Enforcement:</strong> Violations lead to warnings, termination, or legal action. Reviewed annually.' },
                ]
            }
        ];

        // --- 2. Function to generate subtopics HTML ---
        function generateSubtopicsHTML(subtopics, parentAccordionId) {
            let subtopicsHTML = `<div class="accordion accordion-flush" id="${parentAccordionId}">`;

            subtopics.forEach(sub => {
                subtopicsHTML += `
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="heading-${sub.id}">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-${sub.id}" aria-expanded="false" aria-controls="collapse-${sub.id}">
                                ${sub.title}
                            </button>
                        </h2>
                        <div id="collapse-${sub.id}" class="accordion-collapse collapse" aria-labelledby="heading-${sub.id}" data-bs-parent="#${parentAccordionId}">
                            <div class="accordion-body">
                                ${sub.content}
                            </div>
                        </div>
                    </div>
                `;
            });

            subtopicsHTML += `</div>`; // Close accordionFlushDiv
            return subtopicsHTML;
        }

        // --- 3. Function to generate main topics HTML ---
        function generateMainTopicsHTML(topics) {
            let topicsHTML = `<div class="accordion accordion-flush bg-light rounded p-5" id="accordionFlushTopics">`;

            topics.forEach((topic, index) => {
                const parentAccordionId = `accordionFlushTopics-${topic.id}`;
                const subtopicsContent = generateSubtopicsHTML(topic.subtopics, parentAccordionId);
                const isFirstItem = index === 0 ? 'rounded-top' : '';
                const isLastItem = index === topics.length - 1 ? 'rounded-bottom' : '';

                topicsHTML += `
                    <div class="accordion-item ${isFirstItem} ${isLastItem}">
                        <h2 class="accordion-header" id="heading-${topic.id}">
                            <button class="accordion-button collapsed ${isFirstItem} ${isLastItem}" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-${topic.id}" aria-expanded="false" aria-controls="collapse-${topic.id}">
                                ${topic.title}
                            </button>
                        </h2>
                        <div id="collapse-${topic.id}" class="accordion-collapse collapse" aria-labelledby="heading-${topic.id}" data-bs-parent="#accordionFlushTopics">
                            <div class="accordion-body">
                                ${subtopicsContent}
                            </div>
                        </div>
                    </div>
                `;
            });

            topicsHTML += `</div>`; // Close accordionFlushTopics
            return topicsHTML;
        }
        
        // --- 4. Function to generate the entire section container HTML ---
        function generateFullSectionHTML(data) {
            const mainAccordionHTML = generateMainTopicsHTML(data);
            
            return `
                <div class="container-fluid faq-section pb-5" id="readfaq">
                    <div class="container pb-5 overflow-hidden">
                        <div class="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.2s" style="max-width: 800px;">
                            <h4 class="text-primary"><br/>Policies - Victorias Ltd.</h4>
                            <h1 class="display-5 mb-4">Company Policies</h1>
                            <p class="mb-0">Effective Date: September 8, 2025 | Version: 1.0 | Reviewed Annually</p>
                        </div>
                        <div class="row g-5 align-items-center">
                            <div class="col-lg-6 wow fadeInLeft" data-wow-delay="0.2s">
                                ${mainAccordionHTML}
                            </div>
                            <div class="col-lg-6 wow fadeInRight" data-wow-delay="0.2s">
                                <div class="bg-primary rounded">
                                    <img src="img/happy-expert-checking-documents.jpg" class="img-fluid w-100" alt="Policy Documentation Image">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }

        // --- 5. Use querySelector to insert the generated HTML ---
        const targetElement = document.querySelector('#policy-container-target');
        if (targetElement) {
            targetElement.innerHTML = generateFullSectionHTML(policiesData);
        }
    });
