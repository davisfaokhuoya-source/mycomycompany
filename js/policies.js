document.addEventListener('DOMContentLoaded', () => {

    const policiesData = [

        // =====================================================================
        // SECTION 1: TERMS OF ENGAGEMENT
        // =====================================================================
        {
            id: 'topicTerms',
            title: '1. Terms of Engagement & General Use',
            subtopics: [
                {
                    id: 'terms-1',
                    title: '1.1 Acceptance of Terms',
                    content: `By accessing our website (thevictorias.com.ng), engaging our services, registering on the Career Hub portal, or entering into any contractual arrangement with The Victorias Ltd., you ("User", "Client", "Agent", or "Partner") unconditionally accept these Terms of Engagement and all policies contained herein. If you do not agree, you must immediately discontinue use of our platforms and services.<br><br>
                    These terms constitute a legally binding agreement under Nigerian law. All disputes shall be subject to the exclusive jurisdiction of Nigerian courts, with Abuja, Federal Capital Territory - as the primary venue, unless otherwise agreed in writing.`
                },
                {
                    id: 'terms-2',
                    title: '1.2 Who We Are',
                    content: `The Victorias Ltd. is a duly registered Nigerian company operating under the Corporate Affairs Commission (CAC). We provide the following categories of professional services:<br><br>
                    <strong>Corporate & Regulatory Services:</strong> CAC registrations (Business Name, Private/Public Limited Companies, Incorporated Trustees, Companies Limited by Guarantee), annual returns filing, SCUML registration, BPP registration, Tax Clearance Certificates (TCC), PENCOM compliance, NSITF compliance, ITF compliance, trademark registration, and intellectual property advisory.<br><br>
                    <strong>Document Development Services:</strong> Professional CV/resume writing, business proposals, grant proposals, company profiles, standard operating procedures (SOPs), business plans, and corporate correspondence.<br><br>
                    <strong>Social Media Management:</strong> Content strategy, community management, brand growth campaigns, paid advertising management, analytics reporting, and influencer coordination across all major platforms.<br><br>
                    <strong>Web, Graphics & Branding:</strong> Website design and development, logo design, brand identity packages, marketing materials, UI/UX design, and digital asset creation.<br><br>
                    <strong>Career & Training Programmes:</strong> Structured training academies, career development programmes, professional assessments, and certification pathways delivered through the Career Hub portal.<br><br>
                    <strong>Procurement & Contracting Support:</strong> Bidding documentation, tender support, procurement advisory, contract review, and compliance advisory for government and corporate contracts.<br><br>
                    <strong>Local Market Entry Support:</strong> Strategic advisory for businesses entering the Nigerian market, regulatory navigation, stakeholder mapping, and market intelligence.`
                },
                {
                    id: 'terms-3',
                    title: '1.3 Eligibility',
                    content: `To engage our services or register on any of our platforms, you must:<br><br>
                    (a) Be at least 18 years of age, or 16 years with verified parental/guardian consent;<br>
                    (b) Have full legal capacity to enter into binding contracts under Nigerian law;<br>
                    (c) Not be barred from receiving services under any applicable law or regulatory order;<br>
                    (d) Provide accurate, complete, and current registration information and maintain its accuracy throughout your engagement with us.<br><br>
                    We reserve the right to verify eligibility at any time and to suspend or terminate access where these conditions are not met. Misrepresentation of eligibility constitutes a breach of these terms and may attract legal consequences.`
                },
                {
                    id: 'terms-4',
                    title: '1.4 Service Scope & Limitations',
                    content: `Our services are provided on a best-efforts basis. While we maintain high professional standards, we do not guarantee specific outcomes for regulatory or government-dependent services (e.g., CAC approval timelines, government contract awards) as these depend on third-party agencies outside our control.<br><br>
                    <strong>What we guarantee:</strong> Accurate preparation and timely submission of all documents within our scope; professional communication throughout the engagement; adherence to all applicable laws and professional ethics; and full transparency on status via your tracking code or portal.<br><br>
                    <strong>What we do not guarantee:</strong> Approval by CAC, SCUML, BPP, or any government agency within a specific timeframe; success of business proposals, grant applications, or tender bids (as these depend on third-party decisions); or business outcomes arising from our advisory services.`
                },
                {
                    id: 'terms-5',
                    title: '1.5 Amendments to Terms',
                    content: `We reserve the right to modify these Terms at any time. Changes will be published on this page with an updated effective date. For registered platform users, we will send a notification via the platform's messaging system. Continued use of our services or platform after the effective date of any amendment constitutes acceptance of the revised Terms.<br><br>
                    If you disagree with any amendment, you may terminate your engagement by providing written notice to management@thevictorias.com.ng within 14 days of the amendment notice, and we will resolve any outstanding service obligations on the basis of the terms in force at the time of your original engagement.`
                }
            ]
        },

        // =====================================================================
        // SECTION 2: CLIENT POLICY
        // =====================================================================
        {
            id: 'topicClient',
            title: '2. Client Policy',
            subtopics: [
                {
                    id: 'client-1',
                    title: '2.1 Client Onboarding & Engagement',
                    content: `Every client engagement begins with a formal service request, either submitted directly to us or via an authorised Career Hub Partner (Marketer/Agent). Upon receipt:<br><br>
                    (a) A unique <strong>Job Tracking Code</strong> is issued to you upon payment confirmation, allowing real-time visibility into your job's progress;<br>
                    (b) A Client Data Form is collected, capturing only information strictly necessary for service delivery;<br>
                    (c) You will receive a confirmation email outlining the service scope, estimated timeline, and payment receipt.<br><br>
                    By submitting your details for service engagement — whether directly or through an Agent — you confirm that the information provided is accurate and complete, and you consent to our processing of that information for the purpose of delivering the requested service.`
                },
                {
                    id: 'client-2',
                    title: '2.2 Client Rights',
                    content: `As a client of The Victorias Ltd., you have the following enforceable rights:<br><br>
                    <strong>(a) Right to Accurate Information:</strong> You are entitled to accurate, clear information about our services, fees, and expected timelines before committing to any engagement.<br><br>
                    <strong>(b) Right to Track Your Job:</strong> Every paid engagement is assigned a tracking code. Use it at thevictorias.com.ng to check your job status at any time, 24/7.<br><br>
                    <strong>(c) Right to Communication:</strong> You are entitled to timely responses to your queries. We commit to responding within 24 working hours on business days.<br><br>
                    <strong>(d) Right to Escalation:</strong> If dissatisfied with service quality or progress, you may escalate to management@thevictorias.com.ng. All escalations are treated as priority matters and reviewed within 48 hours.<br><br>
                    <strong>(e) Right to Your Data:</strong> You may request access to, correction of, or deletion of your personal data held by us at any time, subject to our Data Protection Policy and any legal retention obligations.<br><br>
                    <strong>(f) Right to Refund (where applicable):</strong> See Section 2.4 for the Refund & Cancellation Policy.`
                },
                {
                    id: 'client-3',
                    title: '2.3 Client Obligations',
                    content: `To enable effective service delivery, clients are obligated to:<br><br>
                    (a) Provide complete, accurate, and authentic information and documents required for your service. We bear no liability for errors, delays, or rejections arising from inaccurate client-supplied information;<br>
                    (b) Respond to information requests from our team within 5 business days. Unreasonable delays may result in timeline extensions at no fault of The Victorias Ltd.;<br>
                    (c) Make payments through authorised channels only (official Flutterwave payment links issued by The Victorias Ltd.). We are not responsible for payments made through unofficial channels or directly to agents without our authorisation;<br>
                    (d) Treat our staff and agents with professional courtesy. Abusive, threatening, or harassing conduct is grounds for immediate termination of the engagement without refund;<br>
                    (e) Not engage in or request services that facilitate any unlawful activity under Nigerian law or any applicable international regulation. We reserve the right to refuse or terminate any engagement where unlawful intent is suspected.`
                },
                {
                    id: 'client-4',
                    title: '2.4 Payment, Refunds & Cancellations',
                    content: `<strong>Payment:</strong> All service fees are payable in full or as agreed upfront, through our official payment link issued via Flutterwave and official corporate. We do not accept cash payments, personal transfers to individual accounts, or any payment not processed through our official channels. Your payment receipt and Job Tracking Code are issued automatically upon successful payment.<br><br>
                    <strong>Refund Policy:</strong><br>
                    — <em>Full Refund:</em> Available within 24 hours of payment, provided no work has commenced.<br>
                    — <em>Partial Refund:</em> Where work has commenced, a refund of up to 50% of the service fee may be issued, at our discretion, based on the proportion of work completed.<br>
                    — <em>No Refund:</em> Where a service has been substantially completed or where a government agency has processed the submission (e.g., CAC has received and reviewed your documents), no refund is available as costs have been incurred on your behalf.<br>
                    — <em>Service Failure:</em> If The Victorias Ltd. fails to deliver a paid service due to our own error or negligence, a service repeat will be offered at the client's discretion.<br><br>
                    <strong>Cancellation:</strong> Cancellations must be submitted in writing to management@thevictorias.com.ng. Verbal cancellations are not valid. Refund eligibility is assessed on the date of written notice receipt.`
                },
                {
                    id: 'client-5',
                    title: '2.5 Intellectual Property of Deliverables',
                    content: `Upon full payment, the deliverables produced specifically for you (e.g., your company's logo, your CV, your business proposal) become your intellectual property. However:<br><br>
                    (a) General methodologies, templates, frameworks, and processes used to produce your deliverable remain the intellectual property of The Victorias Ltd.;<br>
                    (b) We reserve the right to use anonymised, non-identifiable versions of completed work as portfolio samples unless you request otherwise in writing;<br>
                    (c) For software or web development deliverables, specific IP terms will be set out in the project contract and take precedence over this general clause;<br>
                    (d) We do not transfer ownership of third-party licensed assets (e.g., stock photography, licensed fonts) used in your deliverable. Usage rights for such assets are governed by the respective licences.`
                },
                {
                    id: 'client-6',
                    title: '2.6 AI Agent Communications & Connected Integrations',
                    content: `Where you engage our AI-assisted business support services, our AI agent may connect to and act on communication channels and business systems you authorise, in order to assist with your own customer communications and operations. This includes:<br><br>
                    <strong>(a) Connected Channels:</strong> Email mailbox(es), WhatsApp Business number(s), social media accounts, and CRM connections, each connected only with your (or your authorised representative's) explicit action.<br><br>
                    <strong>(b) What the Agent Does:</strong> On connected channels, our AI agent may read incoming messages sent to your business, draft responses grounded in the business context and information you have provided us, and — depending on your chosen preference (automatic or manual review) — send those responses on your behalf or hold them for your review first.<br><br>
                    <strong>(c) Your Control:</strong> You may, at any time and without needing to contact us, view every service currently connected to your account and revoke any of them individually from the <strong>Integrations</strong> panel of your client dashboard. Revoking a connection stops the agent from reading or sending through it immediately. You may also mark a mailbox or WhatsApp number as private, which excludes its activity from admin visibility while keeping the agent's ability to respond intact.<br><br>
                    <strong>(d) Your Responsibility:</strong> You are responsible for the accuracy of the business information you provide us to ground the AI agent's responses, and for reviewing connected-channel activity periodically. The Victorias Ltd. is not liable for consequences arising from inaccurate or outdated business information you supplied.<br><br>
                    <strong>(e) Safeguards:</strong> The AI agent is designed to withhold sensitive information (such as payment card numbers, passwords, or confidential credentials) that appears in an inbound message or would otherwise appear in a drafted reply, escalating such messages for your manual review instead of auto-sending. See Section 5.7 for WhatsApp-specific data handling.`
                }
            ]
        },

        // =====================================================================
        // SECTION 3: USER POLICY (PORTAL USERS)
        // =====================================================================
        {
            id: 'topicUser',
            title: '3. Portal User Policy (Career Hub & Platform Users)',
            subtopics: [
                {
                    id: 'user-1',
                    title: '3.1 Account Registration & Security',
                    content: `By creating an account on the Career Hub or any Victorias portal, you agree to:<br><br>
                    (a) Provide truthful, complete registration information, including your full legal name, valid Nigerian bank account details, and active contact information;<br>
                    (b) Maintain the security of your password and account. You are responsible for all activities under your account. Notify us immediately at management@thevictorias.com.ng if you suspect unauthorised access;<br>
                    (c) Use a strong password (minimum 8 characters with uppercase, lowercase, numerals, and a special character) as enforced by the platform;<br>
                    (d) Verify your email address within 30 minutes of registration using the code sent to you. Unverified accounts are automatically removed after 7 days;<br>
                    (e) Not share your account credentials with any other person. Each account is personal and non-transferable.<br><br>
                    We apply multi-layered session security. Sessions expire after 7 days of inactivity. Rate limiting is applied to prevent brute-force login attempts, and repeated failed login attempts will temporarily lock your account.`
                },
                {
                    id: 'user-2',
                    title: '3.2 Acceptable Use Policy',
                    content: `Users of our platforms must not:<br><br>
                    (a) Submit false, fabricated, or misleading client information or service requests;<br>
                    (b) Attempt to circumvent platform security, exploit system vulnerabilities, or interfere with other users' access;<br>
                    (c) Use the platform for any purpose other than its intended use (e.g., submitting client leads and earning commissions as a Career Hub Partner);<br>
                    (d) Engage in any activity that violates the Cybercrimes (Prohibition, Prevention, etc.) Act 2015, including unauthorised data access, identity theft, or fraud;<br>
                    (e) Upload or transmit malicious files, malware, or any content designed to harm the platform or other users;<br>
                    (f) Create multiple accounts to circumvent platform rules, commission structures, or assessment systems;<br>
                    (g) Solicit or recruit other registered users away from the platform for competing or personal gain;<br>
                    (h) Misrepresent your relationship with The Victorias Ltd. to third parties — you are an independent contractor/partner, not an employee.<br><br>
                    Violations of this Acceptable Use Policy may result in immediate account suspension, forfeiture of pending earnings, and/or referral to law enforcement agencies.`
                },
                {
                    id: 'user-3',
                    title: '3.3 Earnings, Commission & Payout Policy',
                    content: `<strong>Commission Structure:</strong> Commissions are calculated as a percentage of the confirmed payment received from clients you refer, at the rate applicable to your current tier level at the time of service completion. Commission rates are subject to change with 14 days' advance notice.<br><br>
                    <strong>Earnings Crediting:</strong> Earnings are credited to your balance only after a submitted client's job status is marked "Approved" or "Successful" AND payment from the client is confirmed. Submitted but unapproved jobs do not generate earnings.<br><br>
                    <strong>Payout Conditions:</strong><br>
                    — Minimum payout balance: ₦15,000;<br>
                    — Payouts are processed to the bank account registered on your profile. Ensure your bank details are accurate — we bear no liability for payments made to incorrectly stated accounts;<br>
                    — Payout requests are reviewed and processed within 3–7 business days of approval;<br>
                    — We reserve the right to withhold payout pending verification where fraud or policy violations are suspected.<br><br>
                    <strong>Referral Bonus:</strong> ₦500 per successful referral, capped at 6 referrals (₦3,000 maximum). A referral is "successful" when the referred person completes their assessment with a score of 50% or above. Referral earnings are non-withdrawable until combined with commission earnings to meet the ₦15,000 payout threshold.<br><br>
                    <strong>Tax Obligations:</strong> Commission earners are independent contractors. You are solely responsible for declaring and paying any applicable personal income tax on earnings to the relevant State Internal Revenue Service. We will issue earnings summaries upon request but do not deduct PAYE on your behalf.`
                },
                {
                    id: 'user-4',
                    title: '3.4 Assessment & Upgrade Policy',
                    content: `<strong>Assessment Integrity:</strong> The Career Hub upgrade assessment is designed to validate your knowledge of our services and platform policies. The following rules are strictly enforced:<br><br>
                    (a) The test is timed (10 minutes). Do not switch browser tabs, minimise your window, or leave the test screen during an active test — the platform's proctoring system detects and records these actions;<br>
                    (b) Three (3) focus/visibility violations during a test session will auto-submit your test;<br>
                    (c) Questions are served and graded server-side. Any attempt to manipulate the client interface to extract answers or override scores is a criminal offence under the Cybercrimes Act 2015 and will be prosecuted;<br>
                    (d) A minimum score of 70% is required to pass;<br>
                    (e) Failed tests may be retaken after 7 calendar days;<br>
                    (f) Upon passing, upgrades are automatically applied within 48 hours. Upgrade schedules are system-controlled and cannot be manually expedited;<br>
                    (g) Sharing test questions or answers with other users is a breach of these terms and will result in permanent account suspension and forfeiture of all accrued earnings.`
                },
                {
                    id: 'user-5',
                    title: '3.5 Account Inactivity & Termination',
                    content: `<strong>Inactivity:</strong> Accounts inactive for 53 consecutive days receive an automated warning. Accounts inactive for 60 consecutive days are permanently deleted, including all associated data and unclaimed earnings. It is your responsibility to log in regularly to maintain your account.<br><br>
                    <strong>Voluntary Termination:</strong> You may close your account at any time by submitting a written request to management@thevictorias.com.ng. Any balance above the ₦15,000 payout threshold at the time of termination request will be processed for payment within 14 business days. Balances below the threshold are forfeited upon account closure.<br><br>
                    <strong>Termination for Cause:</strong> We reserve the right to immediately terminate any account, with or without notice, and forfeit all pending earnings where:<br>
                    — Fraudulent client submissions are detected;<br>
                    — The Acceptable Use Policy is violated;<br>
                    — Assessment integrity is compromised;<br>
                    — The user's conduct brings The Victorias Ltd. into disrepute;<br>
                    — Any applicable law requires us to do so.`
                }
            ]
        },

        // =====================================================================
        // SECTION 4: AGENT & PARTNER POLICY
        // =====================================================================
        {
            id: 'topicAgent',
            title: '4. Agent & Partner Policy (Career Hub Marketers)',
            subtopics: [
                {
                    id: 'agent-1',
                    title: '4.1 Nature of Relationship',
                    content: `Career Hub Marketers, Consultants, Senior Consultants, and Area Managers ("Agents" or "Partners") operate as <strong>independent contractors</strong>, not employees, of The Victorias Ltd. This relationship does not create an employment contract, partnership, joint venture, franchise, or agency relationship beyond the specific scope of client referral as governed by these terms.<br><br>
                    As an independent contractor, you:<br>
                    (a) Are free to determine your own working hours and marketing methods, within the bounds of these policies;<br>
                    (b) Are not entitled to employment benefits (pension, health insurance, paid leave, etc.);<br>
                    (c) Are responsible for your own taxes, insurance, and any business costs you incur;<br>
                    (d) May not bind The Victorias Ltd. to any agreement, contract, or obligation without explicit written authorisation;<br>
                    (e) Are required to clearly identify yourself as a "Partner" or "Authorised Marketer" of The Victorias Ltd. — not as an employee — in all client-facing communications.`
                },
                {
                    id: 'agent-2',
                    title: '4.2 Marketing Standards & Client Communication',
                    content: `All Agents must adhere to the following standards when marketing our services:<br><br>
                    <strong>(a) Accuracy:</strong> You may only represent services, prices, and timelines that are current and have been communicated to you through official channels. Do not make up prices, guarantee timelines you cannot confirm, or promise outcomes not guaranteed by The Victorias Ltd.;<br><br>
                    <strong>(b) Honesty:</strong> Do not use deceptive, misleading, or high-pressure sales tactics. Misrepresentation of our services to clients is a serious breach;<br><br>
                    <strong>(c) No Unauthorised Collections:</strong> Under no circumstances may you collect payment from clients directly. All payments must flow through the official Flutterwave payment links issued by The Victorias Ltd. Agents found collecting client payments outside this system will be immediately terminated and may face criminal liability for fraud;<br><br>
                    <strong>(d) Response Standards:</strong> You are expected to respond to client inquiries within 24 hours. Slow response is the primary cause of lost leads and directly impacts your earnings;<br><br>
                    <strong>(e) Client Data Protection:</strong> Any client personal data shared with you in the course of your marketing activities must be submitted through the Career Hub portal only. You may not retain, store, sell, or share client data for any purpose other than submitting it through our official portal. Violation of this obligation constitutes a data breach under the NDPA 2023 and may attract personal criminal liability;<br><br>
                    <strong>(f) Brand Representation:</strong> You may use The Victorias Ltd. name, logo, and approved marketing materials provided to you through the Media Resources section of the portal. You may not create, distribute, or publish any materials representing The Victorias Ltd. that have not been approved by management.`
                },
                {
                    id: 'agent-3',
                    title: '4.3 Tier Levels & Privileges',
                    content: `The Career Hub operates a structured tier system that governs the services you may market and the commission rates applicable:<br><br>
                    <strong>Level 0 — Applicant:</strong> Platform access, training materials, and assessment only. No client submission privileges until Level 1 is achieved.<br><br>
                    <strong>Level 1 — Marketer (up to 7% commission):</strong> Access to entry-level services: Business Name Registration, Company Registration, Graphics, CV Development. Daily target: 10 new prospect conversations.<br><br>
                    <strong>Level 2 — Consultant (up to 10% commission):</strong> Additional access to: Annual Filings, SCUML Registration, Social Media Management, Basic Web Development. Requires 10 approved jobs at Level 1 and passing the Level 2 assessment.<br><br>
                    <strong>Level 3 — Senior Consultant (up to 15% commission):</strong> Additional access to: Website Development, Trademark Registration, Company Profiles, Professional Proposals. Requires 25 approved jobs at Level 2 and passing the Level 3 assessment.<br><br>
                    <strong>Level 4 — Area Manager — Elite (up to 20% commission):</strong> Full service access including: Procurement Support, Contract Management, Bidding Support, Government/Corporate Compliance. Requires 40 approved jobs at Level 3 and passing the Level 4 assessment.<br><br>
                    Commission rates and tier thresholds may be adjusted by management with 14 days' advance notice to all affected Partners.`
                },
                {
                    id: 'agent-4',
                    title: '4.4 Prohibited Agent Conduct',
                    content: `The following conduct will result in immediate account termination and may result in legal action:<br><br>
                    (a) Submitting fabricated, fake, or duplicate client records to inflate commission earnings;<br>
                    (b) Submitting the same client through multiple Partner accounts;<br>
                    (c) Collecting client payments outside of official payment channels;<br>
                    (d) Using The Victorias Ltd.'s brand, name, or platform to solicit clients for competing or personal businesses;<br>
                    (e) Recruiting other registered Partners to leave the platform or join competing platforms;<br>
                    (f) Sharing confidential platform information (commission rates, internal processes, client data) with non-authorised third parties;<br>
                    (g) Impersonating an employee or senior official of The Victorias Ltd.;<br>
                    (h) Any conduct that constitutes fraud, misrepresentation, or criminal activity under Nigerian law.`
                }
            ]
        },

        // =====================================================================
        // SECTION 5: DATA PROTECTION POLICY
        // =====================================================================
        {
            id: 'topicData',
            title: '5. Data Protection & Privacy Policy',
            subtopics: [
                {
                    id: 'data-1',
                    title: '5.1 Our Commitment & Legal Framework',
                    content: `The Victorias Ltd. is fully committed to protecting the privacy and personal data of all individuals who interact with us. This policy complies with:<br><br>
                    — <strong>Nigeria Data Protection Act (NDPA) 2023</strong><br>
                    — <strong>Nigeria Data Protection Regulation (NDPR) 2019</strong><br>
                    — <strong>Cybercrimes (Prohibition, Prevention, etc.) Act 2015</strong><br>
                    — <strong>Section 37 of the Constitution of the Federal Republic of Nigeria 1999</strong><br>
                    — <strong>General Data Protection Regulation (GDPR)</strong> — applied by alignment for international clients and cross-border data flows<br>
                    — <strong>ISO/IEC 27001</strong> information security principles<br><br>
                    We act as <strong>Data Controller</strong> for all data collected directly by us. Where we collect data on behalf of clients (e.g., for document development), we act as <strong>Data Processor</strong> and handle such data only per the client's instructions and applicable law.`
                },
                {
                    id: 'data-2',
                    title: '5.2 What Data We Collect & Why',
                    content: `We collect only the minimum data necessary for legitimate purposes:<br><br>
                    <strong>Clients:</strong> Full name, contact details (phone, email, address), government-issued ID details (for regulatory services), bank details (where required for filings), business information, and service-specific documentation.<br><br>
                    <strong>Portal Users / Partners:</strong> Full name, state of residence, phone number, email address, bank account details (for commission payments), platform activity logs, assessment results, and login/session data.<br><br>
                    <strong>Trainees / Certification Portal Users (thevictorias.com.ng/trainings):</strong> Full name, email address, phone number, state of residence, payment confirmation records, assessment attempts, scores, and issued certificate records (which may be made publicly searchable for verification — see Section 12.5).<br><br>
                    <strong>Market Entry / Local Support Clients (thevictorias.com.ng/localsupport):</strong> Brand company details, authorised contact information, and — where distributor sourcing is engaged — distributor candidate business information gathered during vetting (see Section 13.2).<br><br>
                    <strong>Website Visitors:</strong> IP address, browser type, pages visited, and session duration — collected through standard web analytics tools for performance improvement purposes only.<br><br>
                    <strong>AI Agent-Assisted Communications:</strong> Where you connect a mailbox, WhatsApp Business number, social media account, or CRM to our AI agent (see Section 2.6), we process the content of inbound messages sent to those channels, sender identity (email address, WhatsApp number, or social handle), and the AI-drafted or sent reply content, in order to provide the auto-response service you've enabled. See Section 5.7 for WhatsApp-specific handling.<br><br>
                    <strong>Legal Basis for Processing (NDPA 2023, Article 25):</strong><br>
                    — <em>Contract Performance:</em> Processing necessary to deliver the service you engaged;<br>
                    — <em>Consent:</em> Where you have expressly consented (e.g., marketing communications);<br>
                    — <em>Legal Obligation:</em> Where we are required by law to process data (e.g., regulatory filings);<br>
                    — <em>Legitimate Interests:</em> For platform security, fraud prevention, and service improvement.`
                },
                {
                    id: 'data-3',
                    title: '5.3 How We Use & Share Your Data',
                    content: `<strong>We use your data to:</strong><br>
                    (a) Deliver and manage your requested services;<br>
                    (b) Process commission payments to Partner accounts;<br>
                    (c) Communicate service updates, tracking information, and notifications;<br>
                    (d) Comply with regulatory filing requirements (where your data must be submitted to CAC, SCUML, FIRS, etc.);<br>
                    (e) Detect and prevent fraud, abuse, and security threats;<br>
                    (f) Improve our services, platform, and user experience.<br><br>
                    <strong>We share your data only with:</strong><br>
                    (a) Government agencies and regulatory bodies, strictly as required for service delivery (e.g., CAC, FIRS, SCUML);<br>
                    (b) Our authorised service providers and processors (e.g., email service providers, payment processors), bound by data processing agreements;<br>
                    (c) Where you have connected the relevant channel yourself (see Section 2.6), the underlying platform operators needed to deliver AI-assisted communication — including <strong>Meta Platforms, Inc.</strong> (via the WhatsApp Business Platform, for WhatsApp messaging), your email provider, and any social media or CRM platform you've connected — each acting as a processor strictly to transmit and receive the messages you've authorised;<br>
                    (d) Professional advisors (lawyers, auditors) under strict confidentiality obligations;<br>
                    (e) Law enforcement or courts, where required by a valid legal order.<br><br>
                    <strong>We do not:</strong> Sell, rent, or trade your personal data to any third party for marketing or commercial purposes. We do not share your data with advertisers.`
                },
                {
                    id: 'data-4',
                    title: '5.4 Data Retention',
                    content: `We retain personal data only for as long as necessary for the purposes for which it was collected, and in compliance with legal retention requirements:<br><br>
                    — <strong>Client service records:</strong> 7 years (in line with CAMA 2020 accounting and records requirements);<br>
                    — <strong>Regulatory filing documents:</strong> 7 years or as required by the relevant agency;<br>
                    — <strong>Portal user accounts (active):</strong> For the duration of your active account;<br>
                    — <strong>Portal user accounts (inactive):</strong> Deleted after 60 days of inactivity (with 7-day warning at 53 days);<br>
                    — <strong>Platform messages:</strong> 30 days from creation, then automatically purged;<br>
                    — <strong>Assessment results:</strong> Retained for the duration of your account plus 1 year;<br>
                    — <strong>Website visitor analytics:</strong> 12 months, then anonymised.<br><br>
                    After retention periods expire, data is securely deleted or anonymised so that it can no longer be attributed to any individual.`
                },
                {
                    id: 'data-5',
                    title: '5.5 Your Data Rights',
                    content: `Under the NDPA 2023 and by alignment with GDPR, you have the following rights regarding your personal data:<br><br>
                    <strong>(a) Right of Access:</strong> Request a copy of the personal data we hold about you;<br>
                    <strong>(b) Right to Rectification:</strong> Request correction of inaccurate or incomplete data;<br>
                    <strong>(c) Right to Erasure:</strong> Request deletion of your data where there is no lawful basis for continued processing;<br>
                    <strong>(d) Right to Restriction:</strong> Request that we restrict processing of your data in certain circumstances;<br>
                    <strong>(e) Right to Data Portability:</strong> Request your data in a structured, machine-readable format;<br>
                    <strong>(f) Right to Object:</strong> Object to processing based on legitimate interests or for direct marketing;<br>
                    <strong>(g) Right to Withdraw Consent:</strong> Where processing is based on consent, withdraw it at any time without affecting prior processing.<br><br>
                    To exercise any of these rights, contact our Data Protection Point of Contact at <strong>management@thevictorias.com.ng</strong> with the subject line "Data Rights Request." We will respond within 30 days. Requests are free unless manifestly unfounded or excessive.<br><br>
                    You may also lodge a complaint with the <strong>Nigeria Data Protection Commission (NDPC)</strong> if you believe your rights have been violated.`
                },
                {
                    id: 'data-6',
                    title: '5.6 Security Measures & Breach Response',
                    content: `We implement robust technical and organisational measures to protect your data:<br><br>
                    <strong>Technical:</strong> SHA-256 password hashing with salted iterations; session token-based authentication with 7-day expiry; HTTPS encryption for all data in transit; rate limiting and account lockout on failed login attempts; input sanitisation to prevent injection attacks; server-side assessment scoring (answer keys never exposed to client).<br><br>
                    <strong>Organisational:</strong> Need-to-know access controls; separation of admin and user privileges; regular security audits; staff data handling training.<br><br>
                    <strong>Data Breach Response:</strong> In the event of a confirmed data breach affecting your personal data:<br>
                    (a) We will notify the <strong>NDPC within 72 hours</strong> of discovery, as required by NDPA 2023;<br>
                    (b) We will notify affected individuals without undue delay where the breach is likely to result in high risk to their rights;<br>
                    (c) We will immediately isolate, investigate, and remediate the breach;<br>
                    (d) A full incident report will be compiled and retained for 3 years.<br><br>
                    Potential penalties under NDPA 2023 for data breaches can reach ₦10,000,000 or 2% of annual gross revenue, whichever is higher — reflecting the seriousness with which we treat data security.`
                },
                {
                    id: 'data-7',
                    title: '5.7 WhatsApp Business Messaging & AI-Assisted Communication',
                    content: `Where you connect a WhatsApp Business number to our AI agent (see Section 2.6), the following applies in addition to Sections 5.1–5.6:<br><br>
                    <strong>(a) Platform & Processor:</strong> WhatsApp messaging is delivered through the WhatsApp Business Platform, operated by <strong>Meta Platforms, Inc.</strong> Messages sent and received through your connected number pass through Meta's infrastructure under Meta's own terms and privacy practices, in addition to this policy. We do not control, and are not responsible for, Meta's handling of data in transit through its platform.<br><br>
                    <strong>(b) Data Processed:</strong> We process the WhatsApp number and available profile name of anyone who messages your connected number, the text content of their inbound message, and the AI-drafted or sent reply — solely to provide the auto-response service and maintain your WhatsApp Activity Log (visible in your client dashboard's Integrations panel).<br><br>
                    <strong>(c) AI-Drafted Replies:</strong> Replies are drafted using the business context and information you have provided us, and are checked for sensitive information (e.g., card numbers, passwords) before sending — any message containing such content is withheld from automatic sending and flagged for your manual review instead.<br><br>
                    <strong>(d) Your Choice — Automatic or Manual Review:</strong> By default, routine replies are sent automatically. You may switch this to manual review at any time, in which case drafted replies are held for your approval before being sent.<br><br>
                    <strong>(e) Access Credentials:</strong> The access token used to send messages on your behalf is encrypted at rest and is never displayed to you, our staff, or any third party after initial connection — only the connection's status and identifying details (number, label) are shown.<br><br>
                    <strong>(f) Retention:</strong> WhatsApp activity log entries are retained on the same 30-day basis as other platform messages (Section 5.4), unless you or we are required to retain specific records for longer under applicable law (e.g., an active dispute).<br><br>
                    <strong>(g) Revocation:</strong> You may disconnect your WhatsApp number at any time from the Integrations panel of your client dashboard. Once disconnected, the agent immediately stops reading or replying to messages sent to that number; historical activity log entries are retained per Section 5.4 for record-keeping purposes.`
                }
            ]
        },

        // =====================================================================
        // SECTION 6: CONFIDENTIALITY POLICY
        // =====================================================================
        {
            id: 'topicConfidential',
            title: '6. Confidentiality Policy',
            subtopics: [
                {
                    id: 'conf-1',
                    title: '6.1 What Is Confidential Information',
                    content: `"Confidential Information" means all non-public information disclosed by any party in connection with our services or platform, including but not limited to:<br><br>
                    — Client personal and business information, including financial data, registered documents, and strategic plans;<br>
                    — Partner/Agent commission structures, tier criteria, and internal platform processes;<br>
                    — Assessment questions, answer keys, and scoring methodologies;<br>
                    — Proprietary templates, documents, and service delivery processes;<br>
                    — Business strategies, pricing structures, and supplier relationships;<br>
                    — Software code, system architecture, and technical documentation;<br>
                    — Any information marked "Confidential" or that a reasonable person would understand to be confidential in context.<br><br>
                    <strong>Exceptions:</strong> Information is not confidential if it is or becomes publicly available through no fault of the receiving party, was already known to the receiving party, or was independently developed without use of the confidential information.`
                },
                {
                    id: 'conf-2',
                    title: '6.2 Obligations of All Parties',
                    content: `All parties — including Clients, Platform Users, Partners, and staff — are bound by the following confidentiality obligations:<br><br>
                    (a) Use confidential information only for the purpose for which it was shared;<br>
                    (b) Not disclose confidential information to any third party without prior written consent;<br>
                    (c) Apply at least the same level of protection to confidential information as you would to your own sensitive information;<br>
                    (d) Notify The Victorias Ltd. immediately upon becoming aware of any actual or suspected unauthorised disclosure;<br>
                    (e) Return or permanently destroy confidential information upon request or upon termination of the engagement.<br><br>
                    These obligations survive the termination of any service engagement, account closure, or contractual relationship, and remain in force indefinitely for trade secrets, or for 5 years for other confidential information.`
                },
                {
                    id: 'conf-3',
                    title: '6.3 Enforcement',
                    content: `Breach of confidentiality is a serious matter that may cause irreparable harm. We reserve all rights available under Nigerian law, including:<br><br>
                    (a) Seeking injunctive relief from competent courts to prevent further disclosure;<br>
                    (b) Claiming damages for proven losses arising from the breach;<br>
                    (c) Terminating any ongoing service or contractual relationship with the breaching party;<br>
                    (d) Reporting criminal breaches (e.g., unlawful data disclosure) to appropriate law enforcement agencies.<br><br>
                    Partners found sharing assessment questions, client data, or platform processes will face immediate account termination, forfeiture of all earnings, and potential civil and criminal proceedings.`
                }
            ]
        },

        // =====================================================================
        // SECTION 7: INTELLECTUAL PROPERTY POLICY
        // =====================================================================
        {
            id: 'topicIP',
            title: '7. Intellectual Property Policy',
            subtopics: [
                {
                    id: 'ip-1',
                    title: '7.1 Ownership of Platform & Brand Assets',
                    content: `All intellectual property on thevictorias.com.ng and the Career Hub platform — including but not limited to the website design, source code, training materials, assessment content, logos, brand identity, and written content — is the exclusive property of The Victorias Ltd. and is protected under the:<br><br>
                    — <strong>Copyright Act (Cap C28, LFN 2004)</strong><br>
                    — <strong>Trademarks Act (Cap T13, LFN 2004)</strong><br>
                    — <strong>Patents and Designs Act (Cap P2, LFN 2004)</strong><br>
                    — Applicable international conventions including the Berne Convention and TRIPS Agreement<br><br>
                    Unauthorised reproduction, distribution, modification, or use of our intellectual property is strictly prohibited and will be pursued legally.`
                },
                {
                    id: 'ip-2',
                    title: '7.2 Permitted Use by Partners & Users',
                    content: `Partners are granted a limited, non-exclusive, non-transferable licence to use The Victorias Ltd.'s approved marketing materials solely for the purpose of promoting our services as authorised agents. This licence:<br><br>
                    (a) Does not permit modification of the brand assets;<br>
                    (b) Does not permit use after account termination;<br>
                    (c) Does not extend to creating derivative works;<br>
                    (d) May be revoked at any time by The Victorias Ltd. with or without cause.<br><br>
                    <strong>Client Deliverables:</strong> IP ownership of client-commissioned deliverables (logos, websites, proposals, CVs) transfers to the client upon full payment, as detailed in Section 2.5. Until full payment is received, all deliverables remain the property of The Victorias Ltd.`
                }
            ]
        },

        // =====================================================================
        // SECTION 8: SERVICE-SPECIFIC POLICIES
        // =====================================================================
        {
            id: 'topicServices',
            title: '8. Service-Specific Policies',
            subtopics: [
                {
                    id: 'svc-1',
                    title: '8.1 CAC Registration & Regulatory Compliance Services',
                    content: `<strong>Accuracy of Information:</strong> All information provided for CAC registration, SCUML, BPP, or any government filing must be true and accurate. You are legally responsible for the accuracy of information submitted in your name. Filing false information with CAC or other government agencies is a criminal offence under CAMA 2020 and other applicable laws.<br><br>
                    <strong>Document Authenticity:</strong> All documents submitted to us for filing (ID cards, utility bills, incorporation forms, etc.) must be genuine. Submitting forged documents is a criminal offence. We reserve the right to verify document authenticity and will report suspected forgery to appropriate authorities.<br><br>
                    <strong>Government Agency Delays:</strong> Processing timelines for regulatory services depend on the relevant government agency (CAC, NRS, BPP, SCUML, etc.) and may be affected by agency backlogs, system outages, or policy changes beyond our control. We will keep you informed of status and will not be held liable for third-party agency delays.<br><br>
                    <strong>Ongoing Compliance:</strong> Many regulatory registrations require annual renewal (e.g., annual returns, compliance certificates). We will notify you of renewal requirements where possible, but ultimate responsibility for maintaining compliance rests with you as the registered business owner.`
                },
                {
                    id: 'svc-2',
                    title: '8.2 Social Media Management',
                    content: `<strong>Content Approval:</strong> We recommend a content approval process where you review and approve content before publishing. Where you grant us publishing autonomy, you assume responsibility for approving our content strategy and any brand-sensitive decisions made within agreed parameters.<br><br>
                    <strong>Platform Terms:</strong> Our services are bound by the terms of service of the social media platforms on which we operate (Meta, X, LinkedIn, TikTok, etc.). We are not liable for account suspensions or restrictions imposed by these platforms for content that you approved or for violations of platform-specific rules.<br><br>
                    <strong>Account Access:</strong> Where you grant us access to your social media accounts, you must not revoke that access unexpectedly during an active campaign without notice, as this may cause loss of scheduled content and planned engagements. We will surrender all access credentials immediately upon contract termination.<br><br>
                    <strong>Performance Metrics:</strong> Social media results (followers, engagement, reach) depend on multiple factors including your product quality, budget, platform algorithms, and market conditions. We provide best-efforts service and transparent reporting but do not guarantee specific growth metrics.`
                },
                {
                    id: 'svc-3',
                    title: '8.3 Web Design & Development',
                    content: `<strong>Client-Supplied Content:</strong> You are responsible for ensuring that all content (text, images, logos, videos) you provide to us for inclusion in your website does not infringe any third-party intellectual property rights. You indemnify The Victorias Ltd. against any IP infringement claims arising from client-supplied content.<br><br>
                    <strong>Hosting & Domain:</strong> Unless explicitly included in the project scope, hosting and domain registration are your responsibility. We will advise on suitable options but do not manage third-party hosting services on your behalf without a separate maintenance agreement.<br><br>
                    <strong>Post-Delivery Maintenance:</strong> Websites delivered to you become your responsibility to maintain unless a maintenance contract is in place. We offer post-delivery support under separate retainer arrangements.<br><br>
                    <strong>Browser & Device Compatibility:</strong> We develop websites to be compatible with current major browsers and responsive across standard device sizes. We cannot guarantee compatibility with legacy browsers or non-standard devices.`
                },
                {
                    id: 'svc-4',
                    title: '8.4 Document Development (CVs, Proposals, Profiles)',
                    content: `<strong>Information Accuracy:</strong> All CVs, proposals, and profiles are developed based on information you provide. We enhance, structure, and professionally present your information — we do not fabricate credentials, qualifications, or experience. Any inaccurate information you supply that is included in a document is your responsibility.<br><br>
                    <strong>Revision Process:</strong> Standard service packages include a defined number of revision rounds. Additional revisions beyond the agreed scope may attract additional fees.<br><br>
                    <strong>Confidentiality of Proposals:</strong> Business proposals and grant applications frequently contain sensitive commercial information. We handle all such documents under our Confidentiality Policy (Section 6) and will not share your proposal content with any party without your consent.<br><br>
                    <strong>No Guarantee of Outcome:</strong> While we produce the highest quality documents, we cannot guarantee employment offers, grant approvals, or contract awards, as these decisions rest entirely with the reviewing party.`
                },
                {
                    id: 'svc-5',
                    title: '8.5 Procurement Support & Bidding Advisory',
                    content: `<strong>Scope:</strong> Our procurement advisory services include bid preparation, documentation support, compliance verification, and strategic guidance. We do not guarantee the award of any tender or contract, as this decision rests with the procuring entity.<br><br>
                    <strong>Due Diligence:</strong> Clients are responsible for ensuring they meet all eligibility criteria for any tender they wish to pursue. We will advise to the best of our knowledge but are not liable for disqualification due to client-side eligibility failures.<br><br>
                    <strong>Conflict of Interest:</strong> We will not provide procurement support to competing bidders for the same contract without the prior written consent of all affected clients.<br><br>
                    <strong>Sensitive Documents:</strong> Tender documents, bid bonds, and procurement records are treated with the highest level of confidentiality and are subject to our Confidentiality Policy (Section 6).`
                },
                {
                    id: 'svc-6',
                    title: '8.6 Career & Training Programmes',
                    content: `<strong>Training Content:</strong> All training content, videos, modules, and assessments provided through the Career Hub are the intellectual property of The Victorias Ltd. You may use the content for personal learning only. You may not copy, distribute, re-sell, or publish any training content.<br><br>
                    <strong>Assessment Fairness:</strong> We commit to fair, relevant, and up-to-date assessments. If you believe an assessment question contains an error, you may raise a formal complaint through the platform's Complaint Tickets system. Validated errors will be corrected and may result in a score adjustment.<br><br>
                    <strong>Certificates & Tier Status:</strong> Tier levels achieved through the Career Hub are platform-specific designations. They are not externally accredited professional qualifications unless explicitly stated otherwise in specific programme materials.`
                }
            ]
        },

        // =====================================================================
        // SECTION 9: ANTI-FRAUD & ANTI-CORRUPTION POLICY
        // =====================================================================
        {
            id: 'topicCompliance',
            title: '9. Anti-Fraud, Anti-Corruption & Ethical Conduct',
            subtopics: [
                {
                    id: 'comp-1',
                    title: '9.1 Zero Tolerance for Fraud & Corruption',
                    content: `The Victorias Ltd. has a zero-tolerance policy for fraud, bribery, and corruption in all forms. This commitment aligns with:<br><br>
                    — <strong>Corrupt Practices and Other Related Offences Act 2000 (ICPC Act)</strong><br>
                    — <strong>Economic and Financial Crimes Commission (EFCC) Act 2004</strong><br>
                    — <strong>Money Laundering (Prevention and Prohibition) Act 2022</strong><br>
                    — <strong>SCUML Compliance Obligations</strong><br>
                    — <strong>UN Convention Against Corruption (UNCAC)</strong><br><br>
                    No person acting on our behalf — whether staff, agent, partner, or contractor — is permitted to offer, pay, solicit, or accept a bribe, kickback, or improper payment in any form, to or from any person, including government officials, in connection with our business.`
                },
                {
                    id: 'comp-2',
                    title: '9.2 Anti-Money Laundering (AML) Obligations',
                    content: `As a SCUML-registered entity providing services that interface with financial transactions and company formation, we are subject to Anti-Money Laundering and Counter-Terrorism Financing (AML/CFT) obligations. We will:<br><br>
                    (a) Conduct customer due diligence (CDD) for all clients, including identity verification for company formation services;<br>
                    (b) Maintain records of all transactions and client identification documents for the required statutory period;<br>
                    (c) File Suspicious Transaction Reports (STRs) with the Nigerian Financial Intelligence Unit (NFIU) where required;<br>
                    (d) Decline to engage with clients or transactions that exhibit characteristics of money laundering, terrorism financing, or proliferation financing;<br>
                    (e) Not register companies, prepare documents, or provide advisory services for any purpose we believe to be fraudulent or unlawful.`
                },
                {
                    id: 'comp-3',
                    title: '9.3 Whistleblowing & Reporting',
                    content: `We encourage all clients, partners, and staff to report suspected fraud, corruption, data breaches, or policy violations. Reports may be made:<br><br>
                    — Via the Career Hub <strong>Complaint Tickets</strong> system (for platform users);<br>
                    — Via email to <strong>management@thevictorias.com.ng</strong>;<br>
                    — Directly to relevant authorities (EFCC, ICPC, NDPC) where a criminal offence is suspected.<br><br>
                    We will not retaliate against any person who makes a good-faith report of suspected wrongdoing. Reports will be treated as confidential to the fullest extent possible. False reports made in bad faith may attract disciplinary or legal action.`
                }
            ]
        },

        // =====================================================================
        // SECTION 10: DISPUTE RESOLUTION & LIABILITY
        // =====================================================================
        {
            id: 'topicDispute',
            title: '10. Dispute Resolution, Liability & Governing Law',
            subtopics: [
                {
                    id: 'disp-1',
                    title: '10.1 Complaint & Dispute Resolution Process',
                    content: `We are committed to resolving all disputes promptly and fairly. The following escalation process applies:<br><br>
                    <strong>Step 1 — Internal Resolution (0–14 days):</strong> Submit your complaint in writing to management@thevictorias.com.ng or via the platform's Complaint Tickets system. All complaints are acknowledged within 24 hours and a substantive response provided within 7 business days.<br><br>
                    <strong>Step 2 — Mediation (14–30 days):</strong> If the complaint remains unresolved after internal review, either party may request mediation by a mutually agreed neutral mediator in Lagos, Nigeria. Mediation costs are shared equally.<br><br>
                    <strong>Step 3 — Arbitration:</strong> Disputes not resolved through mediation shall be referred to binding arbitration under the Arbitration and Conciliation Act (Cap A18, LFN 2004), with the seat of arbitration in Lagos, Nigeria. The arbitrator's award shall be final and binding.<br><br>
                    <strong>Step 4 — Litigation:</strong> Where arbitration is not suitable (e.g., for injunctive relief, criminal matters), the parties submit to the exclusive jurisdiction of the courts of Abuja, FCT - Nigeria.`
                },
                {
                    id: 'disp-2',
                    title: '10.2 Limitation of Liability',
                    content: `To the maximum extent permitted by applicable Nigerian law:<br><br>
                    (a) Our total liability to you in connection with any service engagement shall not exceed the total fees paid by you for the specific service giving rise to the claim, in the 12 months preceding the claim;<br>
                    (b) We are not liable for indirect, consequential, incidental, or punitive damages, including loss of profits, loss of business opportunity, or reputational damage, even if we have been advised of the possibility of such losses;<br>
                    (c) We are not liable for losses arising from: your provision of inaccurate information; delays caused by third-party government agencies; force majeure events; or your failure to comply with our reasonable instructions;<br>
                    (d) Nothing in these terms limits our liability for fraud, gross negligence, wilful misconduct, or any liability that cannot be excluded by law.<br><br>
                    <strong>Consumer Protection:</strong> Clients who are individuals (not acting in a business capacity) retain all rights afforded under the Consumer Protection Council Act (CPC Act) and the Federal Competition and Consumer Protection Act (FCCPA) 2018, which take precedence over any contractual limitation to the extent of any inconsistency.`
                },
                {
                    id: 'disp-3',
                    title: '10.3 Governing Law & Severability',
                    content: `These policies and all engagements with The Victorias Ltd. are governed by and construed in accordance with the laws of the <strong>Federal Republic of Nigeria</strong>.<br><br>
                    If any provision of these policies is found by a court or arbitrator to be invalid, illegal, or unenforceable, that provision shall be severed, and the remaining provisions shall continue in full force and effect.<br><br>
                    Our failure to enforce any right or provision of these policies shall not constitute a waiver of that right or provision for the future.<br><br>
                    <strong>Language:</strong> These policies are written in English. In the event of any conflict between an English version and any translation, the English version prevails.<br><br>
                    <strong>Entire Agreement:</strong> These policies, together with any specific service contract or engagement letter, constitute the entire agreement between the parties and supersede all prior discussions, representations, and arrangements relating to the subject matter.`
                }
            ]
        },

        // =====================================================================
        // SECTION 11: SAFETY POLICY (ADMINISTRATIVE & DIGITAL OPERATIONS)
        // =====================================================================
        {
            id: 'topicSafety',
            title: '11. Workplace Safety & Digital Security Policy',
            subtopics: [
                {
                    id: 'safe-1',
                    title: '11.1 Physical Workplace Safety',
                    content: `The Victorias Ltd. is committed to maintaining a safe, healthy working environment for all persons present at our premises, including staff, contractors, clients, and visitors. Our safety standards align with Nigeria's Factories Act (Cap F1, LFN 2004) and applicable occupational health and safety guidelines.<br><br>
                    <strong>Our commitments:</strong><br>
                    (a) Maintain all workspaces in a clean, orderly, and hazard-free condition;<br>
                    (b) Ensure adequate lighting, ventilation, ergonomic furniture, and fire safety equipment (extinguishers, escape routes, assembly points);<br>
                    (c) Conduct periodic fire drills and workplace safety assessments;<br>
                    (d) Provide adequate first aid facilities and trained first aiders;<br>
                    (e) Prohibit any substance use (alcohol, controlled substances) on our premises during working hours.<br><br>
                    Visitors and clients attending our offices are required to comply with all posted safety notices and instructions from staff. Incidents must be reported immediately to the designated Safety Point of Contact.`
                },
                {
                    id: 'safe-2',
                    title: '11.2 Digital & Cybersecurity Safety',
                    content: `Given the primarily digital nature of our operations and the sensitivity of client and partner data we handle, we apply comprehensive cybersecurity standards aligned with ISO/IEC 27001 principles:<br><br>
                    <strong>Access Controls:</strong> All internal systems are accessible only through authenticated accounts with role-based access. Administrator privileges are strictly limited and audited.<br><br>
                    <strong>Data Transmission:</strong> All client-facing platforms use HTTPS (TLS encryption). Sensitive data is never transmitted via unencrypted channels.<br><br>
                    <strong>Password Security:</strong> All stored passwords are hashed using SHA-256 with cryptographic salting and multiple iteration rounds. Plain-text passwords are never stored.<br><br>
                    <strong>Incident Response:</strong> All cybersecurity incidents are reported to designated personnel within 1 hour of detection, investigated within 24 hours, and documented in our Security Incident Register. Affected parties are notified in compliance with NDPA 2023 requirements.<br><br>
                    <strong>Remote Work:</strong> All staff and contractors working remotely must use secured, private internet connections. Use of public Wi-Fi for accessing client data or internal systems is prohibited without an approved VPN solution.`
                }
            ]
        },

        // =====================================================================
        // SECTION 12: PROFESSIONAL ASSESSMENT & CERTIFICATION PORTAL POLICY
        // (thevictorias.com.ng/trainings — public certification product,
        //  distinct from the internal Career Hub tier-upgrade assessments
        //  covered in Section 3.4)
        // =====================================================================
        {
            id: 'topicTrainings',
            title: '12. Professional Assessment & Certification Portal Policy (Trainings)',
            subtopics: [
                {
                    id: 'train-1',
                    title: '12.1 Nature & Scope of the Certification Portal',
                    content: `The Professional Assessment Portal at <strong>thevictorias.com.ng/trainings</strong> is a paid, public certification product offered to individuals and professionals, and is a separate offering from the internal Career Hub Partner tier-upgrade assessments described in Section 3.4. Certificates issued through this Portal validate performance on a specific, timed assessment at the time it was taken.<br><br>
                    <strong>What our certificates are not:</strong> a university degree, a statutorily-regulated professional licence, or a guarantee of employment, promotion, or business outcome. Where a specific programme is developed in partnership with, or accredited by, a named third-party body, that accreditation status will be stated explicitly on the relevant programme page and certificate.`
                },
                {
                    id: 'train-2',
                    title: '12.2 Registration & Eligibility',
                    content: `To register for and take an assessment on the Portal, you must:<br><br>
                    (a) Be at least 18 years of age;<br>
                    (b) Provide accurate registration details — full name, email address, phone number, and state of residence — matching the identity that should appear on your certificate;<br>
                    (c) Maintain one account per individual. Creating multiple accounts to obtain additional free attempts, bypass a cooldown period, or otherwise circumvent these terms is prohibited and may result in disqualification of all associated certificates;<br>
                    (d) Keep your login credentials confidential. You are responsible for all activity on your account, including any assessment taken under it.<br><br>
                    Names on issued certificates are taken exactly as entered at registration. We are not responsible for reprinting or reissuing a certificate where an error in your submitted name was not corrected before you completed the assessment; a reasonable administrative fee may apply to post-issuance name corrections.`
                },
                {
                    id: 'train-3',
                    title: '12.3 Assessment Integrity, Attempts & Proctoring',
                    content: `Assessments on the Portal are timed and administered under integrity controls comparable to those described in Section 3.4 for Career Hub assessments:<br><br>
                    (a) Questions are served and scored server-side; answer keys are never exposed to the client browser;<br>
                    (b) Tab-switching, window minimisation, or leaving the assessment screen during an active session may be logged and, beyond a stated threshold of violations, will auto-submit the attempt;<br>
                    (c) Use of unauthorised assistance, impersonation (having another person sit the assessment for you), screen-sharing the assessment, or automated/AI tools to answer questions is strictly prohibited;<br>
                    (d) Each paid registration entitles you to the number of attempts stated on the programme page at the time of purchase (currently up to 4 unless otherwise stated). Additional attempts beyond this allowance require a new paid registration;<br>
                    (e) A minimum score, stated on the programme page (currently 70% unless otherwise specified for a given certification), is required to pass and receive a certificate.<br><br>
                    Violation of assessment integrity rules will result in disqualification of the relevant attempt, forfeiture of any certificate obtained through the violation, and may result in a permanent bar from future use of the Portal.`
                },
                {
                    id: 'train-4',
                    title: '12.4 Fees, Payment & Refund Policy',
                    content: `<strong>Payment:</strong> Assessment and course fees are payable in full, upfront, through our official Flutterwave payment link. We do not accept payment through unofficial channels or directly to any individual.<br><br>
                    <strong>Refunds:</strong><br>
                    — <em>Full Refund:</em> Available where payment is confirmed but no assessment attempt has been started, requested in writing within 24 hours of payment;<br>
                    — <em>No Refund:</em> Once an assessment attempt has been started (the timer has begun), the fee for that attempt is non-refundable, whether the attempt is passed, failed, or auto-submitted for an integrity violation, as access and grading resources have already been consumed;<br>
                    — <em>Service Failure:</em> Where a technical fault on our part (not a violation under Section 12.3, and not an issue with your own device or internet connection) prevents you from completing a paid attempt, we will restore the consumed attempt or offer an equivalent remedy at your discretion.<br><br>
                    Cancellations and refund requests must be submitted in writing to management@thevictorias.com.ng and are assessed against the attempt-consumption record on our system, which is treated as the authoritative record of attempt status.`
                },
                {
                    id: 'train-5',
                    title: '12.5 Certificates & Public Verification',
                    content: `Upon passing an assessment, a digital certificate is issued bearing your registered name, the certification title, a unique certificate ID, and the issue date.<br><br>
                    <strong>Public Verification:</strong> Certificate ID, credential title, and validity status may be made available through our public "Verify Certificate" tool so that third parties (e.g., prospective employers) can confirm authenticity. You may request that your name be withheld from the public-facing verification result (showing only the certificate ID and validity status) by writing to management@thevictorias.com.ng; this does not affect the certificate's validity.<br><br>
                    <strong>Revocation:</strong> We reserve the right to revoke a certificate and mark it "invalid" on the public verification tool where it was obtained through a violation of Section 12.3, through fraudulent registration information, or through payment reversal/chargeback of the underlying fee.`
                },
                {
                    id: 'train-6',
                    title: '12.6 Intellectual Property in Course & Assessment Content',
                    content: `All course videos, study materials, and assessment questions made available through the Portal are the intellectual property of The Victorias Ltd. or its licensors. You are granted a limited, personal, non-transferable licence to access this content for your own learning and assessment purposes only. You may not record, copy, redistribute, publish, or share course content or assessment questions/answers with any other person. Doing so is a breach of these terms and may result in certificate revocation and legal action for copyright infringement.`
                }
            ]
        },

        // =====================================================================
        // SECTION 13: NIGERIAN MARKET ENTRY & LOCAL SUPPORT POLICY
        // (thevictorias.com.ng/localsupport — proxy-model market entry and
        //  distributor management services for brands entering Nigeria)
        // =====================================================================
        {
            id: 'topicLocalSupport',
            title: '13. Nigerian Market Entry & Local Support Policy',
            subtopics: [
                {
                    id: 'local-1',
                    title: '13.1 Scope of Market Entry & Proxy Services',
                    content: `Our Nigerian Market Entry service, offered at <strong>thevictorias.com.ng/localsupport</strong>, provides proxy-model market entry support to brands and businesses seeking to enter or expand within the Nigerian market. Depending on the specific engagement proposal, this may include distributor sourcing and management, sector and competitor research, regulatory and stakeholder navigation, local representation ("boots on the ground"), and periodic performance reporting.<br><br>
                    As with our other advisory services (Section 1.4), Market Entry services are delivered on a best-efforts, professional-standard basis. We do not act as a licensed customs agent, importer of record, or regulatory filing agent for NAFDAC, SON, or Nigeria Customs Service matters unless this is explicitly included as a distinct, separately scoped service in your engagement proposal.`
                },
                {
                    id: 'local-2',
                    title: '13.2 Confidentiality of Brand, Distributor & Commercial Data',
                    content: `Market Entry engagements routinely involve highly sensitive commercial information — brand strategy documents, pricing structures, distributor performance data, and unreleased product plans. Such information is Confidential Information under Section 6 of these policies, and in addition:<br><br>
                    (a) We will execute a mutual Non-Disclosure Agreement with you prior to the exchange of sensitive commercial documents, where one is not already in place;<br>
                    (b) Access to your brand and distributor data is restricted to personnel and, where strictly necessary, vetted distributor partners directly involved in your engagement, each bound by confidentiality obligations appropriate to what is disclosed to them;<br>
                    (c) We will not disclose your identity, brand strategy, or commercial terms to any competing brand or distributor candidate without your prior written consent.`
                },
                {
                    id: 'local-3',
                    title: '13.3 No Guarantee of Market Performance or ROI',
                    content: `Any market size estimates, distributor coverage figures, return-on-investment percentages, or case-study outcomes referenced on our website or in proposals reflect <strong>past, aggregated client outcomes or illustrative modelling</strong> and are provided for general guidance only. Actual market entry outcomes depend on factors outside our control, including competitive dynamics, consumer demand, currency and macroeconomic conditions, regulatory changes, and the performance of independent distributor partners. We do not guarantee any specific sales volume, market share, distributor performance, or return on investment.`
                },
                {
                    id: 'local-4',
                    title: '13.4 Distributor Relationships & Third-Party Conduct',
                    content: `Where our service includes distributor sourcing or management, distributors identified, vetted, or managed on your behalf are <strong>independent businesses</strong>, not employees or general agents of The Victorias Ltd. or of you as our client, beyond the specific oversight mandate agreed in your engagement proposal.<br><br>
                    We apply reasonable, commercially standard vetting procedures (business registration checks, reference checks, and, where agreed, site visits) before recommending a distributor candidate. However, we are not liable for a distributor's independent business conduct, solvency, or performance outside the specific scope of the oversight mandate we have been engaged to perform, except to the extent such loss arises from our own negligence in the vetting or oversight process itself.`
                },
                {
                    id: 'local-5',
                    title: '13.5 Client Obligations for Market Entry Engagements',
                    content: `You agree to provide accurate product, brand, and compliance documentation reasonably required for us to perform the engagement, and to obtain, at your own cost unless otherwise agreed in writing, any product-specific regulatory approvals (e.g., NAFDAC registration, SON certification, import permits) required for your goods to lawfully enter or be sold in the Nigerian market. We are not liable for delays, penalties, or seizure of goods arising from your failure to secure product-specific regulatory approvals that fall outside our agreed scope of work.`
                }
            ]
        }

    ]; // end policiesData

    // =========================================================================
    // RENDERING ENGINE (unchanged structure, enhanced for new data)
    // =========================================================================

    function generateSubtopicsHTML(subtopics, parentAccordionId) {
        let html = `<div class="accordion accordion-flush" id="${parentAccordionId}">`;
        subtopics.forEach(sub => {
            html += `
                <div class="accordion-item">
                    <h2 class="accordion-header" id="heading-${sub.id}">
                        <button class="accordion-button collapsed" type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapse-${sub.id}"
                            aria-expanded="false"
                            aria-controls="collapse-${sub.id}">
                            ${sub.title}
                        </button>
                    </h2>
                    <div id="collapse-${sub.id}" class="accordion-collapse collapse"
                        aria-labelledby="heading-${sub.id}"
                        data-bs-parent="#${parentAccordionId}">
                        <div class="accordion-body" style="line-height:1.75;font-size:0.95rem;">
                            ${sub.content}
                        </div>
                    </div>
                </div>`;
        });
        html += `</div>`;
        return html;
    }

    function generateMainTopicsHTML(topics) {
        let html = `<div class="accordion" id="accordionFlushTopics">`;
        topics.forEach((topic, index) => {
            const parentAccordionId = `acc-${topic.id}`;
            const subtopicsContent = generateSubtopicsHTML(topic.subtopics, parentAccordionId);
            html += `
                <div class="accordion-item">
                    <h2 class="accordion-header" id="heading-${topic.id}">
                        <button class="accordion-button collapsed fw-semibold" type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapse-${topic.id}"
                            aria-expanded="false"
                            aria-controls="collapse-${topic.id}">
                            ${topic.title}
                        </button>
                    </h2>
                    <div id="collapse-${topic.id}" class="accordion-collapse collapse"
                        aria-labelledby="heading-${topic.id}"
                        data-bs-parent="#accordionFlushTopics">
                        <div class="accordion-body p-0">
                            ${subtopicsContent}
                        </div>
                    </div>
                </div>`;
        });
        html += `</div>`;
        return html;
    }

    function generateFullSectionHTML(data) {
        const mainAccordionHTML = generateMainTopicsHTML(data);
        return `
            <div class="container-fluid faq-section pb-5" id="readfaq">
                <div class="container pb-5 overflow-hidden">
                    <div class="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.2s" style="max-width:860px;">
                        <h4 class="text-primary"><br/>The Victorias Ltd.</h4>
                        <h1 class="display-5 mb-4">Company Policies & Terms</h1>
                        <p class="mb-1 text-muted">
                            <strong>Effective Date:</strong> January 1, 2026 &nbsp;|&nbsp;
                            <strong>Version:</strong> 2.1 &nbsp;|&nbsp;
                            <strong>Last Updated:</strong> July 7, 2026 &nbsp;|&nbsp;
                            <strong>Reviewed Annually</strong>
                        </p>
                        <p class="mb-0 small text-muted">
                            Governing Law: Nigeria (NDPA 2023, NDPR 2019, CAMA 2020, FCCPA 2018, Cybercrimes Act 2015, ICPC Act 2000, EFCC Act 2004)
                            &amp; Global Alignment (GDPR, ISO/IEC 27001, UNCAC, Berne Convention)
                        </p>
                        <div class="mt-3">
                            <span class="badge bg-primary me-1">Clients</span>
                            <span class="badge bg-success me-1">Partners &amp; Agents</span>
                            <span class="badge bg-warning text-dark me-1">Portal Users</span>
                            <span class="badge bg-info text-dark me-1">Trainees</span>
                            <span class="badge bg-dark me-1">Market Entry Clients</span>
                            <span class="badge bg-secondary">All Services</span>
                        </div>
                    </div>
                    <div class="row g-5 align-items-start">
                        <div class="col-lg-8 wow fadeInLeft" data-wow-delay="0.2s">
                            ${mainAccordionHTML}
                        </div>
                        <div class="col-lg-4 wow fadeInRight" data-wow-delay="0.3s">
                            <div class="bg-primary rounded p-4 text-white mb-4 sticky-top" style="top:100px;">
                                <h5 class="fw-bold mb-3"><i class="fas fa-shield-alt me-2"></i>Policy Quick Guide</h5>
                                <ul class="list-unstyled mb-0" style="font-size:0.88rem;line-height:2;">
                                    <li>📋 <strong>Section 1</strong> — Terms of Engagement</li>
                                    <li>🤝 <strong>Section 2</strong> — Client Policy</li>
                                    <li>🖥️ <strong>Section 3</strong> — Portal Users</li>
                                    <li>👔 <strong>Section 4</strong> — Agents &amp; Partners</li>
                                    <li>🔐 <strong>Section 5</strong> — Data Protection</li>
                                    <li>🤐 <strong>Section 6</strong> — Confidentiality</li>
                                    <li>💡 <strong>Section 7</strong> — Intellectual Property</li>
                                    <li>⚙️ <strong>Section 8</strong> — Service Policies</li>
                                    <li>🚫 <strong>Section 9</strong> — Anti-Fraud &amp; Ethics</li>
                                    <li>⚖️ <strong>Section 10</strong> — Disputes &amp; Liability</li>
                                    <li>🛡️ <strong>Section 11</strong> — Safety &amp; Security</li>
                                    <li>🎓 <strong>Section 12</strong> — Assessment &amp; Certification (Trainings)</li>
                                    <li>🌍 <strong>Section 13</strong> — Market Entry &amp; Local Support</li>
                                </ul>
                                <hr class="border-light mt-3 mb-3">
                                <p class="mb-1" style="font-size:0.82rem;">Questions or concerns?</p>
                                <a href="mailto:management@thevictorias.com.ng"
                                   class="btn btn-light btn-sm w-100">
                                    <i class="fas fa-envelope me-1"></i> Contact Us
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`;
    }

    // =========================================================================
    // INJECT INTO PAGE
    // =========================================================================
    const targetElement = document.querySelector('#policy-container-target');
    if (targetElement) {
        targetElement.innerHTML = generateFullSectionHTML(policiesData);
    }

}); // end DOMContentLoaded