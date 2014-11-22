import Ember from 'ember';

export default Ember.Route.extend({
    model: function(params) {
        "use strict";
        return this.store.find("user", params.user_id);
    }
});
