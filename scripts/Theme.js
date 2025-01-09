
class Theme {

    selectors = {
        root: '[data-js-header]',
        themeButton: '[data-js-header-theme-button]',
    }

    stateClasses = {
        isLightTheme: 'light-theme',
        isRemoveTransition: 'disable-transitions'
    }


    constructor() {
        this.rootElement = document.querySelector(this.selectors.root)
        this.themeButtonElement = this.rootElement.querySelector(this.selectors.themeButton)
        this.loadThemeFromLocalStorage()
        this.bindEvents()
    }


    loadThemeFromLocalStorage() {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            document.documentElement.classList.add(savedTheme)
            if (savedTheme === this.stateClasses.isLightTheme) {
                this.themeButtonElement.classList.add(this.stateClasses.isLightTheme)
            }
        }
    }


    onThemeButtonClick = () => {

        document.documentElement.classList.add(this.stateClasses.isRemoveTransition)

        const isLightTheme = document.documentElement.classList.toggle(this.stateClasses.isLightTheme)

        this.themeButtonElement.classList.toggle(this.stateClasses.isLightTheme)

        localStorage.setItem('theme', isLightTheme ? this.stateClasses.isLightTheme : '')

        setTimeout(() => {
            document.documentElement.classList.remove(this.stateClasses.isRemoveTransition)
        }, 100)
    }

    bindEvents() {
        this.themeButtonElement.addEventListener('click', this.onThemeButtonClick)
    }
}

export default Theme;