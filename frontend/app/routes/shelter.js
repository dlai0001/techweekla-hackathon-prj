import Ember from 'ember';



export default Ember.Route.extend({
    model: function(params) {
        "use strict";
        return this.store.find("shelter", params.shelter_id);
    }
});
