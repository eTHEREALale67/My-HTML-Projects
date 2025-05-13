// Add smooth scrolling for navigation
document.addEventListener('DOMContentLoaded', function() {
    // Navigation highlight
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('ul li a');
    
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.style.color = '#ff6b6b';
        }
    });

    // Add hover effect to headings
    const headings = document.querySelectorAll('h1');
    headings.forEach(heading => {
        heading.addEventListener('mouseover', () => {
            heading.style.transform = 'scale(1.05)';
            heading.style.transition = 'transform 0.3s ease';
        });
        
        heading.addEventListener('mouseout', () => {
            heading.style.transform = 'scale(1)';
        });
    });

    // Add a "Back to Top" button
    const backToTop = document.createElement('button');
    backToTop.textContent = '↑ Top';
    backToTop.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        padding: 10px 15px;
        background: #333;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        display: none;
    `;

    document.body.appendChild(backToTop);

    window.addEventListener('scroll', () => {
        if (window.scrollY > 200) {
            backToTop.style.display = 'block';
        } else {
            backToTop.style.display = 'none';
        }
    });

    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});