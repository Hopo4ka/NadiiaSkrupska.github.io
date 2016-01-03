function Slider(selector, options) {

    var __self = this;

    var sliderNode = document.querySelector(selector),
        sliderItemsNode = sliderNode.querySelector('.slider__items-wrap'),
        prevSliderNode = sliderNode.querySelector('.slider__pager_previous'),
        nextSliderNode = sliderNode.querySelector('.slider__pager_next');

    var currentSlideIndex = options.currentSlide || 0, //explain
        itemsCount = sliderItemsNode.children.length - 1,
        slideSize = sliderItemsNode.offsetWidth;

    this.prevSlide = function () {
        if (currentSlideIndex === 0) {
            currentSlideIndex = itemsCount;
            return;
        }
        currentSlideIndex--;
    };

    this.nextSlide = function () {
        if (currentSlideIndex === itemsCount) {
            currentSlideIndex = 0;
            return;
        }
        currentSlideIndex++;
    };

    this.__render = function () {
        sliderItemsNode.style.marginLeft = -(currentSlideIndex * slideSize) + 'px';
        //explain
    };

    prevSliderNode.onclick = function (e) {
        e.preventDefault();
        __self.prevSlide();
        __self.__render();
    };

    nextSliderNode.onclick = function (e) {
        e.preventDefault();
        __self.nextSlide();
        __self.__render();
    };
}