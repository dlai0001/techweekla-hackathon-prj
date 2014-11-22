import Ember from 'ember';
import Env from '../config/environment.js';

export default Ember.Controller.extend({
    _sinch: null,

    init: function() {
        "use strict";

        var sinchClient = new SinchClient({
            applicationKey: Env.APP.sinch.key,
            capabilities: {messaging: true},
            onLogMessage: function(message) {
                console.log(message);
            }
        });

        this.set("_sinch", sinchClient);
    }
});
