import Ember from 'ember';


export default Ember.Controller.extend({

    gotoId: null,

    actions:{
        openShelter: function() {
            "use strict";
            console.log("opening shelter");
            this.transitionTo("shelter", this.get("gotoId"));
        },
        openUser: function(){
            "use strict";
            console.log("opening user" );
            this.transitionTo("user", this.get("gotoId"));
        }
    }
});
