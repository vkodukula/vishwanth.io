document.addEventListener('DOMContentLoaded', function() {
    // Event listener for the "View Portfolio" button
    document.getElementById('view-portfolio').addEventListener('click', function(e) {
        e.preventDefault(); // Prevent default button action
        // Smoothly scroll to the main content
        document.querySelector('header').scrollIntoView({ behavior: 'smooth' });
    });

    // Modal functionality
    document.querySelectorAll('.modal-open').forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(item.getAttribute('href')).style.display = 'block';
        });
    });

    document.querySelectorAll('.close').forEach(item => {
        item.addEventListener('click', function(e) {
            this.parentElement.parentElement.style.display = 'none';
        });
    });

    // Close modals on outside click
    window.addEventListener('click', function(e) {
        if (e.target.className === 'modal') {
            e.target.style.display = 'none';
        }
    });
});
