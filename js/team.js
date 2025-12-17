const teamData = [ // Renamed the constant to avoid conflict
    {image:'bar.jpg', sec : 0.2,  name: 'Innocent Ukoha', socialMeida1:'', socialMeida2:'', socialMeida3:'', socialMeida4:'', profession: 'Legal Advisor'}, 
    {image:'team-founder-CB7GGyME.jpg', sec : 0.4,  name: 'Habeeb Bright', socialMeida1:'', socialMeedia2:'', socialMeida3:'', socialMeida4:'', profession: 'Tech Bro'},
    {image:'1761238885388.jpeg', sec : 0.6,  name: 'D. O. F Okhuoya', socialMeida1:'', socialMeida2:'', socialMeida3:'', socialMeida4:'', profession: 'Business Dev'},
    {image:'team-compliance-CO3-DPpB.jpg', sec : 0.8,  name: 'Joy Zakaa', socialMeida1:'', socialMeida2:'', socialMeida3:'', socialMeida4:'', profession: 'Financial Consultant'}
];

// Renamed the function to renderTeam to avoid name collision with the constant
function renderTeam(){
    // It is safer to use a DOMContentLoaded listener for pure JS functions
    document.addEventListener('DOMContentLoaded', (event) => {
        const services = document.querySelector('.teamview');
        let htmlcode ='';
        
        // Use the renamed constant
        teamData.forEach(element => {
            htmlcode += `<div class ="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="${element.sec}">
                         <div class="team-item">
                            <div class="team-img">
                                <img src="img/${element.image}" class="img-fluid"  style="height: 205px; width: 250px;" alt="">
                            </div>
                            <div class="team-title">
                                <h4 class="mb-0">${element.name}</h4>
                                <p class="mb-0">${element.profession}</p>
                            </div>
                            <div class="team-icon">
                                <a class="btn btn-primary btn-sm-square rounded-circle me-3" href="${element.socialMeida1}"><i class="fab fa-facebook-f"></i></a>
                                <a class="btn btn-primary btn-sm-square rounded-circle me-3" href="${element.socialMeida2}"><i class="fab fa-twitter"></i></a>
                                <a class="btn btn-primary btn-sm-square rounded-circle me-3" href="${element.socialMeida3}"><i class="fab fa-linkedin-in"></i></a>
                                <a class="btn btn-primary btn-sm-square rounded-circle me-0" href="${element.socialMeida4}"><i class="fab fa-instagram"></i></a>
                            </div>
                        </div>
                    </div>`;
        });
        
        // Check if the element was found before trying to set innerHTML
        if (services) {
            services.innerHTML = htmlcode;
        } else {
            console.error("Error: Could not find element with class '.teamview'");
        }
    });
}

// Call the new function name
renderTeam();



