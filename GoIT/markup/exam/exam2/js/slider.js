function Slider(selector, options) {

    var __self = this;

    var sliderNode = document.querySelector(selector),
        sliderRenderArea = sliderNode.querySelector('.slider__items'),
        sliderItemsNode = sliderNode.querySelector('.slider__items-wrap'),
        prevSliderNode = sliderNode.querySelector('.slider__pager_previous'),
        nextSliderNode = sliderNode.querySelector('.slider__pager_next'),
        slide = sliderNode.querySelector('.projects__item');

    var currentSlideIndex = options.currentSlide || 0,
        slideByCount = options.slideBy || 1,
        slideSize = slide.offsetWidth * slideByCount,
        visibleCount = ~~(sliderRenderArea.offsetWidth / slideSize),
        itemsCount = ~~((sliderItemsNode.children.length - visibleCount) / slideByCount);

    /* Initial set of visible part of slider equal visible elements count */
    sliderRenderArea.style.width = visibleCount*slideSize + 'px';

    window.addEventListener("resize", function() {
        __self.redraw();
    });

    this.redraw = function () {
        sliderRenderArea.removeAttribute("style");
        visibleCount = ~~(sliderRenderArea.offsetWidth / slideSize);
        itemsCount = ~~((sliderItemsNode.children.length - visibleCount) / slideByCount);
        sliderRenderArea.style.width = Math.round(visibleCount*slideSize) + 'px';
    };

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