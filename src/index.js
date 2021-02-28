import './test.css';
import './style/main-style.scss';
import './style/header.scss';
import './style/scrollbar.scss';
import './style/footer.scss';
import './style/responsive.scss';
const secondarySlider = new Splide('#secondary-slider', {
    fixedWidth: 120,
    height: 100,
    autoplay : true,
    cover: true,
    arrows: false,
    isNavigation: true,
    pagination: false,
    breakpoints: {
        768: {
            fixedWidth: 66,
            height: 65,
        },
    },
}).mount();

const primarySlider = new Splide('#image-slider', {
    type: 'fade',
    heightRatio: 0.3,
    cover: true,
    pagination: false,
    arrows: false,
    breakpoints: {
        768: {
        },
    },
}); // do not call mount() here.

primarySlider.sync(secondarySlider).mount();


new Splide('#slider-1', {
    fixedWidth: 405,
    gap: 100,
    pagination: false,
    perPage: 3,
    type: "loop",
    focus: "center",
    breakpoints: {
        1140: {
            gap: 300,
        },

        992: {
            gap: 300,
            perPage: 1,
            fixedWidth: 225
        },
    },
}).mount();



new Splide('#popular-now', {
    fixedWidth: 300,
    gap: 85,
    pagination: false,
    perPage: 4,
    type: "loop",
    breakpoints: {
        1140: {
            perPage: 2,
            gap: 200,
        },

        992: {
            gap: 125,
            perPage: 1,
            fixedWidth: 250
        },
    },
}).mount();

new Splide('#slider_large', {
    pagination: false,
    gap : 20,
    perPage: 1,
    type: "loop",
    breakpoints: {
        768: {
            perPage: 1,
        },
    },
}).mount();
new Splide('#slider_time', {
    pagination: false,
    gap : 20,
    perPage: 1,
    type: "loop"}
).mount();