(function sliderScroll() {
    const slider = document.querySelector('.banks__carousel');
    const sliderItem = document.querySelector('.banks__carousel-item')
    const style = getComputedStyle(sliderItem);

    //dimensions
    const itemWidth = parseInt(style.width.match(/\d+/));
    const itemMarginRight = parseInt(style.marginRight.match(/\d+/));
    const scrollStep = itemWidth + itemMarginRight;

    //amount of elements
    const countItem = slider.children.length;
    const maxItemsOnScreen = Math.floor(parseInt(document.body.clientWidth) / scrollStep);

    //scroll
    const maxScrollCount = (countItem - maxItemsOnScreen) * scrollStep;
    let currentPosition = style.transform.match(/\d+/);



    function scrollSlyder(event) {
        const wheelX = event.deltaY;
        if (currentPosition === null) {
            currentPosition = 0
        }

        if (wheelX > 0 && currentPosition > -maxScrollCount) {
            currentPosition -= scrollStep
            slider.style.transform = `translateX(${currentPosition}px)`;
        }

        if (wheelX < 0 && currentPosition < 0) {
            currentPosition += scrollStep
            slider.style.transform = `translateX(${currentPosition}px)`;
        }
    }


    slider.addEventListener("wheel", (event) => {
        scrollSlyder(event);
    });

    slider.addEventListener("mouseover", (event) => {
        if (event.currentTarget === slider) {
            document.body.style.overflow = "hidden"
        }
    })

    slider.addEventListener("mouseout", (event) => {
        if (event.currentTarget === slider) {
            document.body.style.overflow = "visible"
        }
    })
}())