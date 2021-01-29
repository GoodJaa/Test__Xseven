const slyder = document.querySelector('.banks__carousel');
const slyderItem = document.querySelector('.banks__carousel-item')
const style = getComputedStyle(slyderItem);

//dimensions
const itemWidth = parseInt(style.width.match(/\d+/));
const itemMarginRight = parseInt(style.marginRight.match(/\d+/));
const itemMarginLeft = parseInt(style.marginLeft.match(/\d+/));
const scrollStep = itemWidth +itemMarginLeft + itemMarginRight;

//amount of elements
const countItem = slyder.children.length;
const maxItemsOnScreen = Math.floor(parseInt(document.body.clientWidth) / scrollStep);

//scroll
const maxScrollCount = (countItem - maxItemsOnScreen) * scrollStep;
let currentPosition = style.transform.match(/\d+/);



function scrollSlyder(event) {
    const wheelX = event.deltaY;
    if (currentPosition === null) {
        currentPosition = 0
    }
    console.log(currentPosition)

    if (wheelX > 0 && currentPosition > -maxScrollCount ) {
        currentPosition -= scrollStep
        slyder.style.transform = `translateX(${currentPosition}px)`;
    }

    if (wheelX < 0 && currentPosition < 0) {
        currentPosition += scrollStep
        slyder.style.transform = `translateX(${currentPosition}px)`;
    }
}


slyder.addEventListener("wheel", (event) => {
    scrollSlyder(event);
});

slyder.addEventListener("mouseover", (event) => {
    if (event.currentTarget === slyder) {
        document.body.style.overflow = "hidden"
    }
})

slyder.addEventListener("mouseout", (event) => {
    if (event.currentTarget === slyder) {
        document.body.style.overflow = "visible"
    }
})