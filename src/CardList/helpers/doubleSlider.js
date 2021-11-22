export default function doubleSlider(props) {
    const { filterName } = props;

    const sliderOne = document.getElementById(`${filterName}-slider1`);
    const sliderTwo = document.getElementById(`${filterName}-slider2`);
    const min = document.getElementById(`${filterName}-slider1`).min;
    const max = document.getElementById(`${filterName}-slider1`).max;
    const displayValOne = document.getElementById(`${filterName}-range1`);
    const displayValTwo = document.getElementById(`${filterName}-range2`);
    const sliderTrack = document.getElementById(`${filterName}-slider-track`);
    const minGap = 0;

    sliderOne.addEventListener("input", () => {
        slideOne();
    });

    sliderTwo.addEventListener("input", () => {
        slideTwo();
    });

    fillColor();

    function slideOne() {
        sliderOne.style.zIndex = '9';
        if (parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap) {
            sliderOne.value = parseInt(sliderTwo.value) - minGap;
        }
        if (sliderTwo.value === sliderOne.value && parseInt(sliderOne.value) === max) {
            sliderOne.style.zIndex = '10';
        }
        displayValOne.textContent = '$' + sliderOne.value;
        fillColor();
    }
    
    function slideTwo() {
        sliderTwo.style.zIndex = '9';
        if (parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap) {
            sliderTwo.value = parseInt(sliderOne.value) + minGap;
        }
        if (sliderTwo.value === sliderOne.value && parseInt(sliderOne.value) === min) {
            sliderTwo.style.zIndex = '10';
        }
        displayValTwo.textContent = '$' + sliderTwo.value;
        fillColor();
    }
    
    function fillColor() {
        let percent1 = ((sliderOne.value - min) / (max - min)) * 100;
        let percent2 = ((sliderTwo.value - min) / (max - min)) * 100;
        sliderTrack.style.background = `linear-gradient(to right, #dadae5 ${percent1}%, 
              rgba(111, 100, 248, 1) ${percent1}%, rgba(111, 100, 248, 1) ${percent2}%, #dadae5 ${percent2}%)`;
    }
}
