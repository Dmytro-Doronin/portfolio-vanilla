class Tabs {
    selectors = {
        root: '#portfolio',
        tabsButton: '[data-js-tabs-button]',
        tabsContent: '[data-js-tabs-content]',
    }

    stateClasses = {
        isActive: 'is-active',
    }

    stateAttributes = {
        ariaSelected: 'aria-selected',
        tabIndex: 'tabindex',
    }

    constructor() {
        this.rootSelector = document.querySelector(this.selectors.root);
        this.tabButtons = this.rootSelector.querySelectorAll(this.selectors.tabsButton);
        this.tabsContent = this.rootSelector.querySelectorAll(this.selectors.tabsContent);
        this.state = {
            activeTabIndex: [...this.tabButtons].findIndex(item => item.classList.contains(this.stateClasses.isActive)),
        };
        this.bindEvents()
    }

    updateUi() {
        const { activeTabIndex } = this.state

        this.tabButtons.forEach((button, index) => {
            const isActive = activeTabIndex === index;

            button.classList.toggle(this.stateClasses.isActive, isActive);
            button.setAttribute(this.stateAttributes.ariaSelected, isActive.toString())
            button.setAttribute(this.stateAttributes.tabIndex, isActive ? '0' : '-1')
        })

        this.tabsContent.forEach((content, index) => {
            const isActive = activeTabIndex === index;
            content.classList.toggle(this.stateClasses.isActive, isActive);
        })
    }

    onButtonClick(index) {
        this.state.activeTabIndex = index;
        this.updateUi()
    }

    bindEvents() {
        this.tabButtons.forEach((button, index) => {
            button.addEventListener('click', () => this.onButtonClick(index));
        })
    }

}

export default Tabs;