// Mobile menu toggle
function toggleMenu() {
    const navMenu = document.getElementById('navMenu');
    navMenu.classList.toggle('active');
}

// Set page title
function setPageTitle(pageName) {
    if (pageName) {
        document.title = `${pageName} - ${siteData.labName}`;
    } else {
        document.title = siteData.labName;
    }
}

// Set lab title in navigation
function setLabTitle() {
    const labTitleElement = document.querySelector('.lab-title a');
    if (labTitleElement) {
        labTitleElement.textContent = siteData.labName;
    }
}

// Set university name in header
function setUniversityName() {
    const uniMain = document.querySelector('.uni-main');
    const uniSub = document.querySelector('.uni-sub');
    // Show the lab name by the logo
    if (uniMain) uniMain.textContent = siteData.labName;
    if (uniSub) uniSub.textContent = '';
}

// Set footer text
function setFooterText() {
    const footer = document.querySelector('footer p');
    if (footer) {
        const year = new Date().getFullYear();
        footer.innerHTML = `&copy; ${year} ${siteData.labName}. All rights reserved.`;
    }
}

// Load profile card (used in all pages except home)
function loadProfileCard() {
    const profileCard = document.getElementById('profileCard');
    if (!profileCard) return;

    // Check if profile image URL is provided, otherwise use initials
    const profileImageHTML = profileData.profileImage
        ? `<img src="${profileData.profileImage}" alt="${profileData.name}" class="profile-image">`
        : `<div class="profile-image">${profileData.initials}</div>`;

    profileCard.innerHTML = `
        ${profileImageHTML}
        <h3>${profileData.name}</h3>
        <p class="title">${profileData.title}</p>
        <p class="department">${profileData.department}</p>
        <p class="university">${profileData.university}</p>
        <div class="profile-links">
            <a href="${profileData.website}" class="profile-link" target="_blank" rel="noopener">LinkedIn</a>
            <a href="${profileData.github}" class="profile-link" target="_blank" rel="noopener">GitHub</a>
            <a href="${profileData.googleScholar}" class="profile-link" target="_blank" rel="noopener">Google Scholar</a>
        </div>
    `;
}

// Load news for home page
function loadNews() {
    const newsContainer = document.getElementById('newsContainer');
    if (!newsContainer) return;

    newsContainer.innerHTML = newsData.map(news => `
        <div class="news-item">
            <h3>${news.title}</h3>
            <p class="news-date">${news.date}</p>
            <p>${news.description}</p>
        </div>
    `).join('');
}

// Load members
function loadMembers() {
    const mastersList = document.getElementById('mastersStudents');
    const postdocList = document.getElementById('postdocs');
    const phdList = document.getElementById('phdStudents');
    if (mastersList) {
        mastersList.innerHTML = membersData.mastersStudents.map(member => `
            <div class="member-item">
                <h4>${member.name}</h4>
                <p>(${member.focus})</p>
            </div>
        `).join('');
    }
    if (postdocList) {
        postdocList.innerHTML = membersData.postdocs.map(member => `
            <div class="member-item">
                <h4>${member.name}</h4>
                <p>(${member.focus})</p>
            </div>
        `).join('');
    }

    if (phdList) {
        phdList.innerHTML = membersData.phdStudents.map(member => `
            <div class="member-item">
                <h4>${member.name}</h4>
                <p>(${member.focus})</p>
            </div>
        `).join('');
    }
}

// Load publications
function loadPublications() {
    const publicationsList = document.getElementById('publicationsList');
    if (!publicationsList) return;

    publicationsList.innerHTML = publicationsData.map(yearData => `
        <div class="year-section">
            <div class="year-header" onclick="toggleYear(this)">▼ ${yearData.year} (${yearData.papers.length})</div>
            <div class="year-content">
                ${yearData.papers.map(paper => `
                    <div class="publication-item">
                        <div class="pub-title">${paper.title}</div>
                        <div class="pub-authors">${paper.authors}</div>
                        <div class="pub-venue">In ${paper.venue}, ${paper.location}</div>
                        ${paper.acceptance ? `<div class="pub-acceptance">(${paper.acceptance})</div>` : ''}
                        <div class="pub-links">
                            ${paper.links.pdf ? `<a href="${paper.links.pdf}" class="pub-link">link</a>` : ''}
                            ${paper.links.bibtex ? `<a href="${paper.links.bibtex}" class="pub-link">bibtex ▼</a>` : ''}
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `).join('');
}

// Toggle year section in publications
function toggleYear(element) {
    const content = element.nextElementSibling;
    const arrow = element.querySelector('span') || element.firstChild;

    if (content.style.display === 'none') {
        content.style.display = 'block';
        element.innerHTML = element.innerHTML.replace('▶', '▼');
    } else {
        content.style.display = 'none';
        element.innerHTML = element.innerHTML.replace('▼', '▶');
    }
}

// Load partners
function loadPartners() {
    const partnersIntro = document.getElementById('partnersIntro');
    const collaboratorsList = document.getElementById('collaboratorsList');

    if (partnersIntro) {
        partnersIntro.innerHTML = partnersData.intro.map(para => `<p>${para}</p>`).join('');
    }

    if (collaboratorsList) {
        collaboratorsList.innerHTML = partnersData.collaborators.map(collab => `
            <div class="collaborator-item">
                <div class="collaborator-logo">${collab.logo}</div>
                <div class="collaborator-name">${collab.name}</div>
            </div>
        `).join('');
    }
}

// Load research
function loadResearch() {
    const researchAreasList = document.getElementById('researchAreasList');
    const sponsorsList = document.getElementById('sponsorsList');

    if (researchAreasList) {
        researchAreasList.innerHTML = researchData.areas.map(area => `
            <li>${area}</li>
        `).join('');
    }

    if (sponsorsList) {
        sponsorsList.innerHTML = researchData.sponsors.map(sponsor => `
            <div class="sponsor-item">
                <div class="sponsor-logo">${sponsor.logo}</div>
                <div class="sponsor-name">${sponsor.name}</div>
            </div>
        `).join('');
    }
}

// Load teaching
function loadTeaching() {
    const teachingList = document.getElementById('teachingList');
    if (!teachingList) return;

    teachingList.innerHTML = teachingData.map(institution => `
        <div class="teaching-section">
            <h3>${institution.institution}</h3>
            <ul class="course-list">
                ${institution.courses.map(course => `
                    <li class="course-item">
                        ${course.code}, ${course.name}, ${course.terms}
                        ${course.syllabusLink ? `<a href="${course.syllabusLink}" class="course-link">Syllabus</a>` : ''}
                    </li>
                `).join('')}
            </ul>
        </div>
    `).join('');
}

// Load contact
function loadContact() {
    const contactInfo = document.getElementById('contactInfo');
    if (!contactInfo) return;

    contactInfo.innerHTML = `
        <h3>${contactData.name}</h3>
        <p>${contactData.department}</p>
        <p>${contactData.address}</p>
        <p>${contactData.city}</p>
        <p>${contactData.country}</p>

        <h3>Contact</h3>
        <p>Email: ${contactData.email}</p>

        <h3>Office Location</h3>
        <p>${contactData.office}</p>
    `;
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    // Set lab title and university name on all pages
    setLabTitle();
    setUniversityName();
    setFooterText();

    // Load news on home page
    if (document.getElementById('newsContainer')) {
        loadNews();
    }
});
