
class Header {

    selectors = {
        root: '[data-js-header]',
        overlay: '[data-header-overlay]',
        burgerButton: '[data-js-header-burger-button]',
        link: '[data-header-link]',
    }

    stateClasses = {
        isActive: 'is-active',
        isLock: 'is-lock',
    }

    constructor() {
        this.rootElement = document.querySelector(this.selectors.root);
        this.overlayElement = this.rootElement.querySelector(this.selectors.overlay);
        this.burgerButtonElement = this.rootElement.querySelector(this.selectors.burgerButton);
        this.linksElement = this.rootElement.querySelectorAll(this.selectors.link);
        this.bindEvents()
    }

    onBurgerButtonClick = () => {
        this.burgerButtonElement.classList.toggle(this.stateClasses.isActive);
        this.overlayElement.classList.toggle(this.stateClasses.isActive);
        document.documentElement.classList.toggle(this.stateClasses.isLock);
    }

    bindEvents() {
        this.burgerButtonElement.addEventListener('click', this.onBurgerButtonClick);
        this.linksElement.forEach((link) => {
            link.addEventListener('click', this.onBurgerButtonClick)
        })
    }
}

export default Header;