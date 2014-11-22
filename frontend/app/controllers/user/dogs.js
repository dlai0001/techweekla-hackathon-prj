import Ember from 'ember';

export default Ember.ArrayController.extend({
  needs: "user",
  user: Ember.computed.alias("controllers.user.model"),
  queryParams: ['page'],
  page: 1,

  noDogs: function() {
    return this.get("model.length") === 0;
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
      // like a dog and show next
      var dog = this.get("model").popObject();
      this.get("user").like(dog);
    },

    dislike: function() {
      // dislike a dog and show next
      var dog = this.get("model").popObject();
      this.get("user").dislike(dog);
    }
  }
});
