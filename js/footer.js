const teamData = [
    {image:'bar.jpg', sec : 0.2,  name: 'Innocent Ukoha', socialMeida1:'', socialMeida2:'', socialMeida3:'', socialMeida4:'', profession: 'Legal Advisor'}, 
    {image:'Untitled.png', sec : 0.4,  name: 'Habeeb Bright', socialMeida1:'', socialMeedia2:'', socialMeida3:'', socialMeida4:'', profession: 'Tech Bro'},
    {image:'1761238885388.jpeg', sec : 0.6,  name: 'D. O. F Okhuoya', socialMeida1:'', socialMeida2:'', socialMeida3:'', socialMeida4:'', profession: 'Business Dev'},
    {image:'team-compliance-CO3-DPpB.jpg', sec : 0.8,  name: 'Joy Zakaa', socialMeida1:'', socialMeida2:'', socialMeida3:'', socialMeida4:'', profession: 'Financial Consultant'}
];

function renderTeam(){
    document.addEventListener('DOMContentLoaded', () => {
        const teamContainer = document.querySelector('.teamview');
        let htmlcode = '';
        
        teamData.forEach(element => {
            htmlcode += `
                <div class="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="${element.sec}s">
                    <div class="team-item">
                        <div class="team-img position-relative">
                            <img src="img/${element.image}" 
                                 class="img-fluid rounded-circle team-image" 
                                 alt="${element.name}">
                        </div>
                        <div class="team-title text-center mt-3">
                            <h4 class="mb-0">${element.name}</h4>
                            <p class="mb-0 text-muted">${element.profession}</p>
                        </div>
                        <div class="team-icon text-center mt-3">
                            <a class="btn btn-primary btn-sm-square rounded-circle me-2" href="${element.socialMeida1 || '#'}"><i class="fab fa-facebook-f"></i></a>
                            <a class="btn btn-primary btn-sm-square rounded-circle me-2" href="${element.socialMeida2 || '#'}"><i class="fab fa-twitter"></i></a>
                            <a class="btn btn-primary btn-sm-square rounded-circle me-2" href="${element.socialMeida3 || '#'}"><i class="fab fa-linkedin-in"></i></a>
                            <a class="btn btn-primary btn-sm-square rounded-circle" href="${element.socialMeida4 || '#'}"><i class="fab fa-instagram"></i></a>
                        </div>
                    </div>
                </div>`;
        });
        
        if (teamContainer) {
            teamContainer.innerHTML = htmlcode;
        } else {
            console.error("Error: Could not find element with class '.teamview'");
        }
    });
}

renderTeam();