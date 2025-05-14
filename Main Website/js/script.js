// Add smooth scrolling for navigation
document.addEventListener('DOMContentLoaded', function() {
    // Navigation highlight
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('ul li a');
    
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active-link');
        }
    });

    // Add hover effect to headings
    const headings = document.querySelectorAll('h1');
    headings.forEach(heading => {
        heading.addEventListener('mouseover', () => {
            heading.style.transform = 'scale(1.05)';
            heading.classList.add('hover-transition');
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
        /* Removed inline display: none; */
    `;

    document.body.appendChild(backToTop);

    let scrollTimeout;
    window.addEventListener('scroll', () => {
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
            if (window.scrollY > 200) {
                backToTop.style.display = 'block';
            } else {
                backToTop.style.display = 'none';
            }
        if ('scrollBehavior' in document.documentElement.style) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            let scrollInterval = setInterval(() => {
                let currentScroll = window.scrollY;
                if (currentScroll > 0) {
                    window.scrollBy(0, -50); // Scroll up in steps
                } else {
                    clearInterval(scrollInterval);
                }
            }, 16); // Approx. 60fps
        }
    });

    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});