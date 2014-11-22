import Ember from 'ember';

export default Ember.Controller.extend({
    _sinch: null,

    init: function() {
        "use strict";
        console.log("Initializing sinch chat with key", window.Frontend.sinch.key);

        Ember.run.next(function() { //allow time for library to load

            var sinchClient = new SinchClient({
                applicationKey: window.Frontend.sinch.key,
                environmentHost: "sandbox.sinch.com",
                supportActiveConnection: true,
                capabilities: {messaging: true},
                onLogMessage: function(message) {
                    console.log(message);
                }
            });

            sinchClient.start({username: 'shelter', password: 'shelter'});

            this.set("_sinch", sinchClient);
        });

    }
});
