document.addEventListener('DOMContentLoaded', function() {
    const toggler = document.querySelector('.toggler');
    const nav1 = document.querySelector('.nav1');
    const shopNav = document.querySelector('.shopNav');
    const search = document.querySelector('.search');

    toggler.addEventListener('click', function() {
        nav1.classList.toggle('active');
        shopNav.classList.toggle('active');
        search.classList.toggle('active');
    });
});
