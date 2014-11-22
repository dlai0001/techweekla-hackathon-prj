import Ember from 'ember';

export default Ember.Route.extend({
    model: function (params) {
      var user = this.modelFor("user");
      return this.get("store").findQuery("shelter", { user_id: user.get("id") });
    }
});
