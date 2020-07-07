window.middlemanStarterKit.app = {
    init: function () {
        'use strict';
        this.page = document.body.dataset.page;
        if (this.page !== '' && window.middlemanStarterKit.pages[this.page]) {
            window.middlemanStarterKit.pages[this.page].init();
        }
    },

    invoke: function () {
        'use strict';
        return {
            init: this.init.bind(this)
        };
    }

}.invoke();
