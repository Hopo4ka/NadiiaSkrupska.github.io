function Slider(selector, options) {

    var __self = this;

    var sliderNode = document.querySelector(selector),
        sliderItemsNode = document.querySelector('.slider__items-wrap'),
        prevSliderNode = document.querySelector('.slider__pager_previous'),
        nextSliderNode = document.querySelector('.slider__pager_next');

    var currentSlideIndex = options.currentSlide || 0,
        itemsCount = sliderItemsNode.children.length,
        slideSize = sliderItemsNode.offsetWidth + sliderItemsNode.offsetMarginLeft + sliderItemsNode.offsetMarginRight;

    this.prevSlide = function() {
        if (currentSlideIndex === 0) {
            currentSlideIndex = itemsCount - 1;
            return;
        }
        currentSlideIndex--;
    };

    this.nextSlide = function() {
        if (currentSlideIndex === itemsCount - 1) {
            currentSlideIndex = 0;
            return;
        }
        currentSlideIndex++;
    };

    this.__render = function() {
        sliderItemsNode.style.marginleft = -(currentSlideIndex * slideSize) + 'px';
    };

    prevSliderNode.onclick = function() {
        __self.prevSlide();
        __self.__render();
    };

    nextSliderNode.onclick = function() {
        __self.nextSlide();
        __self.__render();
    };
}