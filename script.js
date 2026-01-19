document.addEventListener('DOMContentLoaded', () => {
    // Smooth scroll for nav links (if any anchor links are added later)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Simple interaction: Button hover effects are mostly handled by CSS,
    // but we can add secondary interactions here if needed in the future.
    console.log("WrestleVerse Landing Page Initialized!");
});
