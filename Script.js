document.addEventListener("DOMContentLoaded", function() {
    const accordionBtns = document.querySelectorAll('.accordion-btn');

    accordionBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const accordionContent = this.nextElementSibling;
            accordionContent.classList.toggle('active');

            this.classList.toggle('active');
        });
    });
});
