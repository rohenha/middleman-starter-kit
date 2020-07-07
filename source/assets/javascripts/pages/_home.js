window.middlemanStarterKit.pages.home = {
    init: function () {
        'use strict';
        console.log('home init');
    },

    invoke: function () {
        'use strict';
        return {
            init: this.init.bind(this)
        };
    }

}.invoke();
