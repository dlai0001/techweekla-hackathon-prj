import Ember from 'ember';

export default Ember.Controller.extend({
    _sinch: null,

    init: function() {
        "use strict";
        console.log("Initializing sinch chat with key", window.Frontend.sinch.key);

        window.sinchClient
    }
});
