import Vue from 'vue';

const toggle = (navbar) => {
    navbar.classList.toggle('show');
};

Vue.directive('navbar', {
    inserted: function (el) {
        let toggler = el.querySelector('.navbar-toggler');
        let navbar = el.querySelector('.navbar-collapse');
        toggler.addEventListener('click', () => toggle(navbar));
    }
})