import Ember from 'ember';

export default Ember.Route.extend({
    model: function(params) {
      return this.get("store").find("shelter", params.shelter_id);
    },

    setupController: function(controller, model) {
      controller.set("model", model);
      var users = this.get("store").findQuery("user", { shelter_id: model.get("id") });
      return controller.set("users", users);
    }
});
