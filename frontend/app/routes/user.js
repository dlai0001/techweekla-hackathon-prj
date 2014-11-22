import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.get("store").createRecord("user", { id: 1 });
  },

  beforeModel: function() {
    this.replaceWith("user.dogs");
  }
});
