import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    //return this.get("store").find("user", { id: params.user_id });
      return {id: 1};
  },

  beforeModel: function() {
    this.replaceWith("user.dogs");
  }
});
