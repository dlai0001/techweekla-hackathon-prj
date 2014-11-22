import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return this.get("store").find("user", params.user_id);
  },

  beforeModel: function() {
    this.replaceWith("user.dogs");
  }
});
