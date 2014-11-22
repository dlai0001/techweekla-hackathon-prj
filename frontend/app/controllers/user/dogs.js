import Ember from 'ember';

export default Ember.ArrayController.extend({
  page: 1,

  noDogs: function() {
    return this.get("model.length") == 0;
  }.property("model.length"),

  currentDog: function() {
    return this.get("model").get("lastObject");
  }.property("model.length"),

  nextPage: function() {
    if (this.get("model.length") === 0) {
      this.incrementProperty("page");
    }
  }.observes("model.length"),

  actions: {
    like: function() {
      this.get("model").popObject();
    },

    dislike: function() {
      this.get("model").popObject();
    }
  }
});
