(function(){
    const slider = document.querySelector('[data-js=slider]');

    new Swiper(slider, {
        loop: true,
        pagination: {
            clickable: true,
            el: '.slider-pagination'
        }
    })
})()