
class Animation {

    selectors = {
        hiddenElements: '[js-animation]'
    }

    constructor() {
        this.animsItems = document.querySelectorAll(this.selectors.hiddenElements);
        this.bindEvents()
        this.animationOnScroll()
    }

    bindEvents() {
        if (this.animsItems.length > 0) {
            window.addEventListener("scroll", () => this.animationOnScroll())
            console.log('scroll')
        }

    }

    animationOnScroll() {
        this.animsItems.forEach(item => {
            const animItemHeight = item.offsetHeight;
            const animItemOffset = this.offset(item).top;
            const animStart = 4;

            let animItemPoint = window.innerHeight - (animItemHeight) / animStart;

            if (animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }

            if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
                item.classList.add('active');
            }

        })
    }
    offset(element) {
        const rect = element.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return {top: rect.top + scrollTop, left: rect.left + scrollLeft};
    }

}
export default Animation;