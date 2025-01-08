
class Theme {

    selectors = {
        root: '[data-js-header]',
        themeButton: '[data-js-header-theme-button]',
    }

    stateClasses = {
        isLightTheme: 'light-theme',
    }


    constructor() {
        this.rootElement = document.querySelector(this.selectors.root);
        this.themeButtonElement = this.rootElement.querySelector(this.selectors.themeButton);
        this.bindEvents()
    }

    onThemeButtonClick = () => {
        this.themeButtonElement.classList.toggle(this.stateClasses.isLightTheme);
        document.documentElement.classList.toggle(this.stateClasses.isLightTheme);
    }

    bindEvents() {
        this.themeButtonElement.addEventListener('click', this.onThemeButtonClick);
    }
}

export default Theme;